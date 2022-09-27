import {
  Definition,
  GetResponses,
  PurpleResponses,
  Schema,
  Swagger,
} from './swagger'
const fs = require('fs-extra')
var rp = require('request-promise')
rp('http://192.168.0.181:23380/ess-tiku-api/v2/api-docs').then(
  (response: string) => {
    const data: Swagger = JSON.parse(response)
    const paths = Object.keys(data.paths)
    const apis = paths.map((path) => {
      const apiInfo = data['paths'][path]
      const method = apiInfo.get ? 'get' : 'post'
      const apiContent = apiInfo[method]
      const api: API = {
        path: data.basePath + path,
        name: getApiName(path),
        method,
        response: getResponseType(apiContent.responses),
      }
      return api
    })

    const apisContent = apis.map((api) => getApiContent(api)).join('\n')
    console.log(apisContent)

    const modelNames = Object.keys(data.definitions)
    console.log(modelNames)
    const modelsContent = modelNames
      .filter((modelName) => modelName.split('«').length === 1)
      .map((modelName) =>
        getModelContent(modelName, data.definitions[modelName])
      )
      .join('\n')

    fs.outputFile('./api.ts', getBaseModel() + modelsContent)
  }
)

function getApiContent(api: API) {
  return `export function ${api.name}():${api.response} {
    axios.get('${api.path}')
  }`
}

function getModelContent(name: string, definition: Definition) {
  const { properties } = definition
  if (!properties) {
    return ` export interface ${name} {}`
  }
  return `
export interface ${name} {
  ${Object.keys(properties)
    .map(
      (propName) => `
    ${propName} ?: ${getPropertyType(properties[propName])}`
    )
    .join('')}
}
`
}

/**
 * 获取请求方法名，小驼峰
 * @param path
 */
function getApiName(path: string) {
  const ps = path
    .split(/[\/\-]/g)
    .filter((p) => !!p)
    .map((p, index) => {
      return index > 0 ? firstLetterToUpperCase(p) : p
    })
    .join('')
  return ps
}

function firstLetterToUpperCase(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function getResponseType(responses: GetResponses | PurpleResponses) {
  const schema = responses[200].schema
  const type = (schema as Schema).type
  if (!type) {
    return schema['originalRef']
  } else {
    if (type === 'array') {
      //TODO
    } else {
      return type
    }
  }
}

interface API {
  path: string
  name: string
  method: 'get' | 'post'
  queryParams?: any[]
  body?: any
  headers?: any[]
  response: any
}

function getBaseModel() {
  return `
export interface ApiResponse<T> {
    sid: string
    time: string
    code: number
    status: boolean
    message: string
    extraData: Object
    data: T
}

export interface ApiPageResponse<T> extends ApiResponse<T>{
    total : number
    pages : number
}
`
}

function getPropertyType(schema: Schema) {
  const { type } = schema
  switch (schema.type) {
    case 'integer':
      return 'number'
    case 'object':
      return 'Object'
    case 'array':
      return (
        'Array<' +
        (schema.items.originalRef ||
          getPropertyType(schema.items as unknown as Schema)) +
        '>'
      )
    default:
      return type || (schema as any).originalRef
  }
}
