export interface Swagger {
  swagger?: string
  info?: Info
  host?: string
  basePath?: string
  tags?: Tag[]
  consumes?: string[]
  produces?: string[]
  paths?: Paths
  definitions?: Definitions
}

export interface Definitions {
  [key: string]: Definition
}

export enum Type {
  Integer = 'integer',
  Number = 'number',
  String = 'string',
}

export interface Definition {
  example?: string
  description?: string
  enum?: string[]
  type?: string
  required?: string[]
  properties?: Properties
  title?: string
}

export interface Properties {
  [key: string]: Property
}

export interface Property {
  type?: Type
  example?: number | number
  description?: string
  format?: Format
}

export enum Format {
  Int32 = 'int32',
  Int64 = 'int64',
}

export interface SchemaClass {
  originalRef: string
  $ref?: string
}

export interface Info {
  description?: string
  version?: string
  title?: string
  contact?: Contact
}

export interface Contact {
  name?: string
  url?: string
  email?: string
}

export interface Paths {
  [key: string]: Path
}

export interface Path {
  get?: Get
  post?: Post
}

export interface Get {
  tags?: string[]
  summary?: string
  description?: string
  operationId?: string
  parameters?: Parameter[]
  responses?: GetResponses
}

export interface Post {
  tags?: string[]
  summary?: string
  operationId?: string
  parameters?: Parameter[]
  responses?: PurpleResponses
}

export interface Parameter {
  name?: string
  in?: string
  description?: string
  required?: boolean
  type?: string
  default?: string
  schema?: SchemaClass
}

export interface GetResponses {
  '200'?: Purple200
}

export interface Purple200 {
  description?: string
  schema?: SchemaClass
}

export interface PurpleResponses {
  '200'?: Fluffy200
}

export interface Fluffy200 {
  description?: string
  schema?: Schema
}

export interface Schema {
  type?: string
  items?: SchemaClass
}

export interface Tag {
  name?: string
  description?: string
}
