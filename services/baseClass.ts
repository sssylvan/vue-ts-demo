export class AdditionalTopicRequestObject {
  /** 是否启用，0=未启用，1=已启用 */
  isEnable = undefined;

  /** 题型名称 */
  name = '';
}

export class AliCloudUploadResponseObject {
  /** 文件名 */
  name = '';

  /** 阿里云文件上传路径，bucket的相对路径 */
  path = '';

  /** 文件名后缀 */
  postfix = '';

  /** 文件大小 */
  size = undefined;

  /** 上传成功的返回url，外网可直接访问 */
  url = '';
}

export class ApiPageResponse {
  /** 响应码，200=成功，500=系统错误，401=未登录，403=无权限，404=未找到资源，601=入参校验异常，999=业务异常 */
  code = undefined;

  /** 响应data */
  data = [];

  /** 附加的响应参数 */
  extraData = undefined;

  /** 响应消息，如：操作成功 */
  message = '';

  /** 总页数 */
  pages = undefined;

  /** 系统ID(请求唯一标识) */
  sid = '';

  /** 响应状态，code=200时值为true，非200时值为false */
  status = false;

  /** 耗时，单位：毫秒 */
  time = '';

  /** 总记录数量 */
  total = undefined;
}

export class ChapterInfoBaseRsp {
  /** 章节版本id */
  chapterVersionId = '';

  /** 考试domain */
  domain = '';

  /** 章节id */
  id = undefined;

  /** 层级 */
  level = undefined;

  /** 章节名称 */
  name = '';

  /** 父级id */
  parentId = undefined;

  /** 排序 */
  sort = undefined;

  /** 启用状态 */
  status = undefined;

  /** 科目id */
  subjectId = undefined;
}

export class ChapterInfoFrontRsp {
  /** 章节版本id */
  chapterVersionId = '';

  /** 子章节 */
  childList = [];

  /** 考试domain */
  domain = '';

  /** 用户做题数 */
  doneNum = undefined;

  /** 章节id */
  id = undefined;

  /** 知识点集合 */
  knowledgeInfoFrontRspList = [];

  /** 层级 */
  level = undefined;

  /** 章节名称 */
  name = '';

  /** 父级id */
  parentId = undefined;

  /** 免费题数 */
  questionsFreeNum = undefined;

  /** 试题数 */
  questionsNum = undefined;

  /** 真题数 */
  questionsTrueNum = undefined;

  /** 排序 */
  sort = undefined;

  /** 启用状态 */
  status = undefined;

  /** 科目id */
  subjectId = undefined;
}

export class ChapterInfoFullReq {
  /** 科目id */
  subjectIds = [];

  /** 版本id */
  versionIds = [];
}

export class ChapterInfoReq {
  /** 科目id */
  subjectId = undefined;

  /** 版本id */
  versionId = '';
}

export class ChapterInfoRsp {
  /** 章节版本id */
  chapterVersionId = '';

  /** 节集合 */
  childList = [];

  /** 考试domain */
  domain = '';

  /** 章节id */
  id = undefined;

  /** 是否绑定课程（1：是 0：否） */
  isBindCourse = undefined;

  /** 知识点集合 */
  knowledgeInfoRspList = [];

  /** 层级 */
  level = undefined;

  /** 章节名称 */
  name = '';

  /** 父级id */
  parentId = undefined;

  /** 收费题数 */
  questionsChargeNum = undefined;

  /** 免费题数 */
  questionsFreeNum = undefined;

  /** 章节总题数 */
  questionsNum = undefined;

  /** 真题数 */
  questionsTrueNum = undefined;

  /** 视频题数 */
  questionsVideoNum = undefined;

  /** 排序 */
  sort = undefined;

  /** 启用状态 */
  status = undefined;

  /** 科目id */
  subjectId = undefined;
}

export class ChapterKnowledgeBaseRsp {
  /** 章节id */
  chapterId = undefined;

  /** 知识点内容 */
  content = '';

  /** 知识点id */
  id = undefined;

  /** 知识点名称 */
  name = '';

  /** 材料页码 */
  pageNum = '';

  /** 父id */
  parentId = undefined;

  /** 大纲要求（1：熟悉，2：理解，3：掌握，4：理解，5：运用） */
  requirements = undefined;

  /** 排序 */
  sort = undefined;

  /** 状态 */
  status = undefined;

  /** 科目id */
  subjectId = undefined;
}

export class ChapterKnowledgeInfoFrontRsp {
  /** 章节id */
  chapterId = undefined;

  /** 子知识点 */
  childList = [];

  /** 知识点内容 */
  content = '';

  /** 用户做题数 */
  doneNum = undefined;

  /** 知识点id */
  id = undefined;

  /** 知识点名称 */
  name = '';

  /** 材料页码 */
  pageNum = '';

  /** 父id */
  parentId = undefined;

  /** 免费题数 */
  questionsFreeNum = undefined;

  /** 总题数 */
  questionsNum = undefined;

  /** 真题数 */
  questionsTrueNum = undefined;

  /** 大纲要求（1：熟悉，2：理解，3：掌握，4：理解，5：运用） */
  requirements = undefined;

  /** 排序 */
  sort = undefined;

  /** 状态 */
  status = undefined;

  /** 科目id */
  subjectId = undefined;
}

export class ChapterKnowledgeInfoRsp {
  /** 章节id */
  chapterId = undefined;

  /** 子知识点集合 */
  childList = [];

  /** 知识点内容 */
  content = '';

  /** 知识点id */
  id = undefined;

  /** 知识点名称 */
  name = '';

  /** 材料页码 */
  pageNum = '';

  /** 父id */
  parentId = undefined;

  /** 收费题数 */
  questionsChargeNum = undefined;

  /** 免费题数 */
  questionsFreeNum = undefined;

  /** 总题数 */
  questionsNum = undefined;

  /** 真题数 */
  questionsTrueNum = undefined;

  /** 视频题数 */
  questionsVideoNum = undefined;

  /** 大纲要求（1：熟悉，2：理解，3：掌握，4：理解，5：运用） */
  requirements = undefined;

  /** 排序 */
  sort = undefined;

  /** 状态 */
  status = undefined;

  /** 科目id */
  subjectId = undefined;
}

export class ChapterKnowledgeSaveReq {
  /** 章节id */
  chapterId = undefined;

  /** 知识点内容 */
  content = '';

  /** 知识点id */
  id = undefined;

  /** 知识点名称 */
  name = '';

  /** 材料页码 */
  pageNum = '';

  /** 父id */
  parentId = undefined;

  /** 大纲要求（1：熟悉，2：理解，3：掌握，4：理解，5：运用） */
  requirements = undefined;

  /** 排序 */
  sort = undefined;

  /** 状态 */
  status = undefined;

  /** 科目id */
  subjectId = undefined;
}

export class ChapterListQueryRequestObject {
  /** 站点（年级） */
  domain = '';

  /** 科目ID */
  subjectId = undefined;
}

export class ChapterMobileRequestObject {
  /** 章ID列表 */
  chapterIds = [];

  /** 站点（年级） */
  domain = '';

  /** 节ID列表 */
  sectionIds = [];

  /** 科目ID */
  subjectId = undefined;
}

export class ChapterQuestionRsp {
  /** 试题解析 */
  analysis = '';

  /** 试题类型：>=5主观题，<5客观题 */
  baseQuestionType = undefined;

  /** 章节ID */
  chapterId = undefined;

  /** 试题内容 */
  content = '';

  /** 站点 */
  domain = '';

  /** 试卷ID */
  paperId = undefined;

  /** 试题ID */
  questionId = undefined;

  /** 分数 */
  score = undefined;

  /** 排序 */
  sort = undefined;

  /** 科目ID */
  subjectId = undefined;

  /** 试题年份 */
  year = undefined;
}

export class ChapterSaveReq {
  /** 章节版本id */
  chapterVersionId = '';

  /** 考试domain */
  domain = '';

  /** 章节id */
  id = undefined;

  /** 层级 */
  level = undefined;

  /** 章节名称 */
  name = '';

  /** 父级id */
  parentId = undefined;

  /** 排序 */
  sort = undefined;

  /** 启用状态 */
  status = undefined;

  /** 科目id */
  subjectId = undefined;
}

export class ChapterVersionReq {
  /** areaId */
  areaId = undefined;

  /** 考试domain */
  domain = '';

  /** 主键id */
  id = undefined;

  /** 知识点显示方式（0：显示父知识点 1：显示子知识点 2：显示父子知识点） */
  knowledgeShowType = undefined;

  /** 版本名称 */
  name = '';

  /** 版本状态 */
  status = undefined;

  /** subjectId */
  subjectId = undefined;
}

export class ChapterVersionRsp {
  /** 地区id */
  areaId = undefined;

  /** 考试domain */
  domain = '';

  /** 主键id */
  id = undefined;

  /** 知识点显示方式（0：显示父知识点 1：显示子知识点 2：显示父子知识点） */
  knowledgeShowType = undefined;

  /** 版本名称 */
  name = '';

  /** 版本状态 */
  status = undefined;

  /** 科目id */
  subjectId = undefined;
}

export class CheckTheAnswerReturnObjects {
  /** 解析 */
  analysis = '';

  /** 题目内容 */
  content = '';

  /** 题目ID */
  id = undefined;

  /** 是否需要作答（综合题不需要作答） */
  needAnswer = false;

  /** 选项列表 */
  options = [];

  /** 试卷类型 */
  paperType = '';

  /** 答案状态，1=正确，2=错误，3=无须作答 */
  status = undefined;

  /** 题型 */
  type = '';
}

export class DailyExerciseDateRsp {
  /** 查询传值日期（2022-03-20） */
  data = '';

  /** 日期（3月20日） */
  days = '';

  /** 星期几 */
  weekDay = '';
}

export class DailyExerciseFrontRsp {
  /** 平均正确率 */
  avgRightRate = undefined;

  /** 练习次数 */
  count = undefined;

  /** 练习日期 */
  date = '';

  /** 考试domain */
  domain = '';

  /** 连续练习天数 */
  exerciseDay = undefined;

  /** 每日一练id */
  id = undefined;

  /** 做题记录状态 */
  status = undefined;

  /** 科目id */
  subjectId = undefined;

  /** 科目名称 */
  subjectName = '';

  /** 我的正确率 */
  userRightRate = undefined;

  /** 做题编号 */
  ztNo = '';
}

export class DeleteItemRequestObject {
  /** 试题ID列表 */
  ids = [];
}

export class DoGetQuestionsRequestObject {
  /** 章节ID */
  chapterId = undefined;

  /** 站点（年级） */
  domain = '';

  /** 题目数量，默认：10 */
  limit = undefined;

  /** 前一次做题的房间ID（错题重做时必传） */
  prevRoomId = undefined;

  /** 科目ID */
  subjectId = undefined;

  /** 取题类型，1=正常做题，2=错题重做 */
  type = undefined;
}

export class DoGetQuestionsReturnObjects {
  /** 解析 */
  analysis = '';

  /** 题目内容 */
  content = '';

  /** 试题ID */
  id = undefined;

  /** 是否需要作答（综合题不需要作答） */
  needAnswer = false;

  /** 选项列表 */
  options = [];

  /** 试卷类型 */
  paperType = '';

  /** 做题房间ID */
  roomId = undefined;

  /** 题型 */
  type = '';

  /** 题型ID */
  typeId = undefined;
}

export class ExamHighScoreReq {
  /** 站点domain */
  domain = '';

  /** 高分值考点 */
  examKeyword = '';

  /** 分页参数：第几页，默认1 */
  pageNo = undefined;

  /** 分页参数：每页显示条数，默认10 */
  pageSize = undefined;
}

export class ExamHighScoreRsp {
  /** 站点domain */
  domain = '';

  /** 高分值考点 */
  examKeyword = '';

  /** 主键 */
  id = undefined;
}

export class ExamHighScoreSaveReq {
  /** 站点domain */
  domain = '';

  /** 高分值考点 */
  examKeyword = '';

  /** 主键 */
  id = undefined;
}

export class ExamdaNewsEsReq {
  /** 内容 */
  content = '';

  /** 考试 */
  domain = '';

  /** id */
  id = '';

  /** 分页参数：第几页，默认1 */
  pageNo = undefined;

  /** 分页参数：每页显示条数，默认10 */
  pageSize = undefined;
}

export class ExamdaNewsEsRsp {
  /** 内容 */
  content = '';

  /** id */
  id = '';

  /** 题目来源 */
  source = '';

  /** 标题 */
  title = '';
}

export class ExtractQuestionCardDataRsp {
  /** 是否已作答 */
  isAnswer = undefined;

  /** 是否免费 */
  isFree = undefined;

  /** 试题id */
  questionId = undefined;

  /** 题序 */
  sort = undefined;

  /** 答题状态（1：对 2：错 3：不全对） */
  status = undefined;
}

export class ExtractQuestionCardReq {
  /** 是否只查看错误试题，不传查全部（1：是） */
  isWrong = undefined;

  /** 记录编号 */
  ztNo = '';
}

export class ExtractQuestionCardRsp {
  /** 试题集合 */
  questionCardDataRspList = [];

  /** 题数 */
  questionNum = undefined;

  /** 题型名称 */
  ruleName = '';

  /** 题型分数 */
  ruleScore = undefined;

  /** 题型得分类型（1：单个试题 2：任意试题 3：不同试题 4：三选二） */
  ruleType = undefined;
}

export class ExtractQuestionDataReq {
  /** 是否只查看错误试题，不传查全部（1：是） */
  isWrong = undefined;

  /** 分页参数：第几页，默认1 */
  pageNo = undefined;

  /** 分页参数：每页显示条数，默认10 */
  pageSize = undefined;

  /** 题型id */
  ruleId = undefined;

  /** 记录编号 */
  ztNo = '';
}

export class ExtractQuestionDataRsp {
  /** 试题解析 */
  analysis = '';

  /** 基础题型（1：单选题 2：多选题 3：不定项 4：判断题 7：简答/论述/问答） */
  baseQuestionType = undefined;

  /** 子试题集合 */
  childQuestionData = [];

  /** 试题内容 */
  content = '';

  /** 正确答案 */
  correctAnswer = '';

  /** 试题id */
  id = undefined;

  /** 是否免费 */
  isFree = undefined;

  /** 连题关联的试题id */
  linkQuestionId = undefined;

  /** 连题材料 */
  material = '';

  /** 绑定的章节、知识点数据 */
  questionChapterRsp = new QuestionChapterRsp();

  /** 试题选项集合 */
  questionOptionRspList = [];

  /** 题序 */
  sort = undefined;
}

export class ExtractQuestionOptionRsp {
  /** 选项内容 */
  content = '';

  /** 选项id */
  id = undefined;

  /** 是否正确答案 */
  isCorrectAnswer = undefined;

  /** 试题id */
  questionId = undefined;
}

export class ExtractQuestionPageMapRsp {
  /** 结束题序 */
  end = undefined;

  /** 开始题序 */
  start = undefined;

  /** 做题编号 */
  ztNo = '';
}

export class ExtractQuestionPageRsp {
  /** 试题集合 */
  extractQuestionDataRspList = [];

  /** 分页页码导图 */
  mapRspList = [];

  /** 页数 */
  pages = undefined;

  /** 试题数 */
  total = undefined;
}

export class ExtractQuestionReq {
  /** 附加id */
  attachId = undefined;

  /** 抽题方式（1：按章节抽题 2:按知识点抽题 3：未分章节知识点抽题 4：按题型抽题 5:按试卷抽题 6：学习计划任务抽题 7：按真题章节抽题 8：按真题知识点抽题 9：按真题题型抽题） */
  attachType = undefined;

  /** 来源终端（0：其他 1：PC 2：Android 3：IOS 4：Wap 5：小程序） */
  client = undefined;

  /** 考试domain */
  domain = '';

  /** 是否重做 */
  isRedo = undefined;

  /** 做题模式定义（1：练习模式 2：考试模式） */
  mode = undefined;

  /** 业务id（章节id、知识点id、试卷id等） */
  objectId = undefined;

  /** 科目id */
  subjectId = undefined;

  /** 记录类型（1：模拟考试 2：历年真题 3：章节练习 4：每日一练 5：易错题 6：错题重做 7：收藏做题 8：学员专享 9：模考大赛 10：点题记录 100：学习计划） */
  type = undefined;
}

export class ExtractQuestionSaveReq {
  /** 答案保存客户端(其他 = 0,PC = 1,Android = 2,IOS = 3,WebApp = 4) */
  client = undefined;

  /** 是否移除做对错题（0：否 1：是） */
  isRemoveWrong = undefined;

  /** 答案字符串(格式：试题ID[-]答案[-]用时) */
  postStr = '';

  /** 做对几次删除 */
  rightCount = undefined;

  /** 做题记录编号 */
  ztNo = '';
}

export class ExtractQuestionSubmitReq {
  /** 提交客户端(其他 = 0,PC = 1,Android = 2,IOS = 3,WebApp = 4) */
  client = undefined;

  /** 交卷状态（0：下次继续 1：已完成） */
  status = undefined;

  /** 做题总用时 */
  time = undefined;

  /** 做题编号 */
  ztNo = '';
}

export class ExtractRedoQuestionReq {
  /** 来源终端（0：其他 1：PC 2：Android 3：IOS 4：Wap 5：小程序） */
  client = undefined;

  /** 用户id */
  userId = undefined;

  /** 做题编号 */
  ztNo = '';
}

export class FavQuestionRemoveReq {
  /** 按章节id移除 */
  chapterIds = [];

  /** 按试题id移除 */
  questionId = undefined;

  /** 按试题题型移除 */
  questionTypes = [];

  /** 按科目id移除（按科目、按题型必传） */
  subjectId = undefined;
}

export class GetQuestionInfoMiniApiReq {
  /** 试题id */
  questionId = undefined;
}

export class GetQuestionInfoMiniApiRsp {
  /** 试题考试domain */
  domain = '';

  /** 试卷id */
  paperId = undefined;

  /** 试卷名称 */
  paperName = '';

  /** 试题id */
  questionId = undefined;

  /** 试题科目中文名 */
  subjectCname = '';

  /** 试题科目id */
  subjectId = undefined;
}

export class HistoryDetailedRsp {
  /** allCount */
  allCount = undefined;

  /** attachId */
  attachId = undefined;

  /** attachType */
  attachType = undefined;

  /** client */
  client = undefined;

  /** createTime */
  createTime = new Timestamp();

  /** domain */
  domain = '';

  /** doneCount */
  doneCount = undefined;

  /** 主键id */
  id = undefined;

  /** incompleteCount */
  incompleteCount = undefined;

  /** mode */
  mode = undefined;

  /** objectId */
  objectId = undefined;

  /** parentZtNo */
  parentZtNo = '';

  /** rightCount */
  rightCount = undefined;

  /** rightRate */
  rightRate = undefined;

  /** rootZtNo */
  rootZtNo = '';

  /** score */
  score = undefined;

  /** status */
  status = undefined;

  /** subjectId */
  subjectId = undefined;

  /** title */
  title = '';

  /** updateTime */
  updateTime = new Timestamp();

  /** useTime */
  useTime = undefined;

  /** userId */
  userId = undefined;

  /** wrongCount */
  wrongCount = undefined;

  /** ztNo */
  ztNo = '';

  /** ztType */
  ztType = undefined;
}

export class HistoryPageReq {
  /** 考试domain */
  domain = '';

  /** 分页参数：第几页，默认1 */
  pageNo = undefined;

  /** 分页参数：每页显示条数，默认10 */
  pageSize = undefined;

  /** 科目id */
  subjectId = undefined;

  /** 做题记录类型（1：模拟试卷 2：历年真题 3：章节练习 4：每日一练 5：易错题 6：错题重做 7：收藏做题 8：学员专享 9：模考大赛 10：点题记录 100：学习计划） */
  type = undefined;
}

export class HistoryPageRsp {
  /** allCount */
  allCount = undefined;

  /** attachId */
  attachId = undefined;

  /** attachType */
  attachType = undefined;

  /** client */
  client = undefined;

  /** createTime */
  createTime = new Timestamp();

  /** domain */
  domain = '';

  /** doneCount */
  doneCount = undefined;

  /** 主键id */
  id = undefined;

  /** incompleteCount */
  incompleteCount = undefined;

  /** mode */
  mode = undefined;

  /** objectId */
  objectId = undefined;

  /** parentZtNo */
  parentZtNo = '';

  /** 重做记录集合 */
  redoHistoryList = [];

  /** rightCount */
  rightCount = undefined;

  /** rightRate */
  rightRate = undefined;

  /** rootZtNo */
  rootZtNo = '';

  /** score */
  score = undefined;

  /** status */
  status = undefined;

  /** subjectId */
  subjectId = undefined;

  /** title */
  title = '';

  /** updateTime */
  updateTime = new Timestamp();

  /** useTime */
  useTime = undefined;

  /** userId */
  userId = undefined;

  /** wrongCount */
  wrongCount = undefined;

  /** ztNo */
  ztNo = '';

  /** ztType */
  ztType = undefined;
}

export class HistoryReportRsp {
  /** 收藏数 */
  favCount = undefined;

  /** 记录数 */
  historyCount = undefined;

  /** 笔记数 */
  noteCount = undefined;

  /** 错题数 */
  wrongCount = undefined;
}

export class IdsReq {
  /** ids */
  ids = [];
}

export class IdsReq_1 {
  /** 业务id集合 */
  ids = [];
}

export class ItemListRequestObject {
  /** 章节ID */
  chapterId = undefined;

  /** 试题ID、试题内容 */
  content = '';

  /** 站点（年级） */
  domain = '';

  /** 是否审核，0=未审核，1=已审核 */
  isCheck = undefined;

  /** 分页参数：第几页，默认1 */
  pageNo = undefined;

  /** 分页参数：每页显示条数，默认10 */
  pageSize = undefined;

  /** 科目ID */
  subjectId = undefined;

  /** 题型ID */
  typeId = undefined;
}

export class ItemReturnObjects {
  /** 解析 */
  analysis = '';

  /** 答案列表 */
  answers = '';

  /** 章节ID */
  chapterId = undefined;

  /** 题目内容 */
  content = '';

  /** 试题ID */
  id = undefined;

  /** 是否审核，0=未审核，1=已审核 */
  isCheck = undefined;

  /** 选项列表 */
  options = [];

  /** 试卷类型 */
  paperType = '';

  /** 题型 */
  type = '';

  /** 题型ID */
  typeId = undefined;

  /** 最近修改人 */
  updateBy = '';

  /** 最近修改时间 */
  updateTime = '';
}

export class ListQuestionProofLogMiniApiReq {
  /** 试题id */
  questionId = [];
}

export class ListQuestionProofLogMiniApiRsp {
  /** 创建人(校对人用户名) */
  createBy = '';

  /** 校对人真实姓名 */
  nickName = '';

  /** 试题id */
  questionId = undefined;
}

export class MobileTestRequestObject {
  /** 移动到的章节ID */
  chapterId = undefined;

  /** 选中的试题ID列表 */
  ids = [];
}

export class ModifyTheTopicRequestObject {
  /** 题型ID */
  id = undefined;

  /** 是否启用，0=未启用，1=已启用 */
  isEnable = undefined;

  /** 题型名称 */
  name = '';

  /** 序列号 */
  seqNo = undefined;
}

export class NetUpdatePdfReq {
  /** 试卷id */
  paperId = undefined;

  /** 背题模式pdf生成地址 */
  pdfNotAnswerUrl = '';

  /** pdf生成地址 */
  pdfUrl = '';
}

export class NewChapterRequestObject {
  /** 站点（年级） */
  domain = '';

  /** 站点（年级）名称 */
  domainName = '';

  /** 父章节ID */
  parentId = undefined;

  /** 科目ID */
  subjectId = undefined;

  /** 科目名称 */
  subjectName = '';

  /** 章节名称 */
  title = '';
}

export class NewTestRequestObject {
  /** 解析 */
  analysis = '';

  /** 章节ID */
  chapterId = undefined;

  /** 题目内容 */
  content = '';

  /** 选项列表 */
  options = [];

  /** 试卷类型，1=课后练习，默认：1 */
  paperType = undefined;

  /** 题型ID */
  typeId = undefined;
}

export class PaperAuditReq {
  /** 试卷id集合 */
  paperIds = [];

  /** 状态（0：未审核 1：审核） */
  status = undefined;
}

export class PaperBindChapterReq {
  /** 章节id */
  chapterId = undefined;

  /** 知识点id */
  knowledgeId = undefined;

  /** 试卷id集合 */
  paperIds = [];
}

export class PaperBindProductReq {
  /** 试卷id集合 */
  paperIds = [];

  /** 绑定的产品id（英文逗号分隔） */
  productIds = '';
}

export class PaperBindProductRsp {
  /** 产品id */
  id = undefined;

  /** 产品名称 */
  name = '';
}

export class PaperCancelBindChapterReq {
  /** 试卷id集合 */
  paperIds = [];

  /** 取消绑定类型（1：章节 2：知识点） */
  type = undefined;
}

export class PaperCopyOrPasteReq {
  /** 试卷id */
  paperId = undefined;

  /** 科目id */
  subjectId = undefined;
}

export class PaperDeleteReq {
  /** 是否删除（0：否 1：是） */
  isDel = undefined;

  /** 试卷id集合 */
  paperIds = [];
}

export class PaperDetailedRsp {
  /** 地区id */
  areaId = undefined;

  /** 考试domain */
  domain = '';

  /** 考试时长 */
  examDuration = undefined;

  /** 试卷说明 */
  explanation = '';

  /** 试卷id */
  id = undefined;

  /** 是否源试卷 */
  isSource = undefined;

  /** 试卷名称 */
  name = '';

  /** 题库绑定的产品 */
  paperBindProductRspList = [];

  /** 试卷题型列表 */
  paperRuleRspList = [];

  /** 合格分数 */
  passScore = undefined;

  /** 绑定的产品（字符串） */
  products = '';

  /** 总分 */
  score = undefined;

  /** 试卷状态（0：未审核 1：已审核） */
  status = undefined;

  /** 科目id */
  subjectId = undefined;

  /** 副标题 */
  subtitle = '';

  /** 试卷类型 */
  type = undefined;

  /** 试卷年份 */
  year = undefined;
}

export class PaperFrontApiReq {
  /** 考试domain */
  domain = undefined;

  /** 分页参数：第几页，默认1 */
  pageNo = undefined;

  /** 分页参数：每页显示条数，默认10 */
  pageSize = undefined;

  /** 试卷类型（2：真题卷，3：模拟试卷，4：模考大赛，10：学员专享，11：点题卷，12：收费章节，14：免费章节题，15：计划试卷，50：空试卷，51：源试卷，53：章节题（包含收费、免费），100：编辑估分卷，101：阶段测试卷） */
  paperType = undefined;

  /** 科目id */
  subjectId = undefined;
}

export class PaperFrontApiRsp {
  /** 创建时间 */
  createTime = '';

  /** 考试domain */
  domain = '';

  /** 考试时长 */
  examDuration = undefined;

  /** 考试人数 */
  examNum = undefined;

  /** 试卷id */
  id = undefined;

  /** 是否学员专享试卷 */
  isPrivileged = undefined;

  /** 试卷名称 */
  name = '';

  /** 合格分数 */
  passScore = undefined;

  /** 试卷试题数 */
  questionNum = undefined;

  /** 审核时间 */
  reviewTime = '';

  /** 总分 */
  score = undefined;

  /** 做题记录状态 */
  status = undefined;

  /** 科目id */
  subjectId = undefined;

  /** 副标题 */
  subtitle = '';

  /** 试卷类型（2：真题卷，3：模拟试卷，4：模考大赛，10：学员专享，11：点题卷，12：收费章节，14：免费章节题，15：计划试卷，50：空试卷，51：源试卷，53：章节题（包含收费、免费），100：编辑估分卷，101：阶段测试卷） */
  type = undefined;

  /** 试卷类型名称 */
  typeName = '';

  /** 试卷年份 */
  year = undefined;

  /** 做题编号 */
  ztNo = '';
}

export class PaperFrontDetailedRsp {
  /** 考试domain */
  domain = '';

  /** 考试时长 */
  examDuration = undefined;

  /** 考试人数 */
  examNum = undefined;

  /** 试卷说明 */
  explanation = '';

  /** 试卷id */
  id = undefined;

  /** 试卷名称 */
  name = '';

  /** 合格分数 */
  passScore = undefined;

  /** 试卷题型集合 */
  ruleRspList = [];

  /** 总分 */
  score = undefined;

  /** 做题记录状态 */
  status = undefined;

  /** 科目id */
  subjectId = undefined;

  /** 副标题 */
  subtitle = '';

  /** 试卷类型（2：真题卷，3：模拟试卷，4：模考大赛，10：学员专享，11：点题卷，12：收费章节，14：免费章节题，15：计划试卷，50：空试卷，51：源试卷，53：章节题（包含收费、免费），100：编辑估分卷，101：阶段测试卷） */
  type = undefined;

  /** 试卷年份 */
  year = undefined;

  /** 做题编号 */
  ztNo = '';
}

export class PaperGroupVolumeReq {
  /** 章节id集合 */
  chapterIds = [];

  /** 组卷来源（1：试题年份 2：章节 3：试题id） */
  groupVolumeSource = undefined;

  /** 是否保留原试题（不传则默认不保留原试题） */
  isRetain = undefined;

  /** 试卷id */
  paperId = undefined;

  /** 试卷题型试题 */
  paperRuleQuestionReqList = [];

  /** 试卷类型（2：历年真题 3：模拟试卷 4：模考大赛 11：点题卷 12：免费章节题 14：收费章节题） */
  paperTypes = [];

  /** 试题id */
  questionIds = '';

  /** 试题年份集合 */
  questionYears = [];

  /** 需抽源试卷id集合 */
  sourcePaperIds = [];
}

export class PaperGroupVolumeRsp {
  /** 章节知识点列表 */
  chapterInfoRspList = [];

  /** 试卷id */
  paperId = undefined;

  /** 试卷名称 */
  paperName = '';

  /** 源试卷集合 */
  paperSourceRspList = [];

  /** 试卷题型 */
  ruleQuestionNumRspList = [];
}

export class PaperInfoApiReq {
  /** 试卷类型（2：真题卷，3：模拟试卷，4：模考大赛，10：学员专享，11：点题卷，12：收费章节，14：免费章节题，15：计划试卷，50：空试卷，51：源试卷，53：章节题（包含收费、免费），100：编辑估分卷，101：阶段测试卷） */
  paperTypes = [];

  /** 科目ids，多科目查询 */
  subjectIds = [];

  /** 试卷年份 */
  year = undefined;
}

export class PaperInfoApiRsp {
  /** 地区id */
  areaId = undefined;

  /** 创建人 */
  createBy = '';

  /** 创建时间 */
  createTime = '';

  /** 考试domain */
  domain = '';

  /** 考试时长 */
  examDuration = undefined;

  /** 考试人数 */
  examNum = undefined;

  /** 试卷说明 */
  explanation = '';

  /** 试卷id */
  id = undefined;

  /** 试卷是否删除 */
  isDel = undefined;

  /** 是否买课才能做 */
  isPrivileged = undefined;

  /** 是否计划试卷 */
  isSchedulePaper = undefined;

  /** 是否源试卷 */
  isSource = undefined;

  /** 试卷名称 */
  name = '';

  /** 试卷分数是否设置错误(0：否 1：是) */
  paperScoreIsError = undefined;

  /** 合格分数 */
  passScore = undefined;

  /** pdf生成地址 */
  pdfNotAnswerUrl = '';

  /** pdf生成地址 */
  pdfUrl = '';

  /** 试卷试题数 */
  questionNum = undefined;

  /** 关闭审核时间 */
  reviewCloseTime = '';

  /** 审核时间 */
  reviewTime = '';

  /** 总分 */
  score = undefined;

  /** 试卷状态（0：未审核 1：已审核） */
  status = undefined;

  /** 科目id */
  subjectId = undefined;

  /** 副标题 */
  subtitle = '';

  /** 试卷类型 */
  type = undefined;

  /** 试卷类型名称 */
  typeName = '';

  /** 试卷年份 */
  year = undefined;
}

export class PaperInfoMiniApiReq {
  /** 试卷id */
  paperIds = [];
}

export class PaperInfoMiniApiRsp {
  /** 试题id */
  id = undefined;

  /** 试卷名称 */
  name = '';
}

export class PaperInfoReq {
  /** 分页参数：第几页，默认1 */
  pageNo = undefined;

  /** 分页参数：每页显示条数，默认10 */
  pageSize = undefined;

  /** 试卷类型（2：真题卷，3：模拟试卷，4：模考大赛，10：学员专享，11：点题卷，12：收费章节，14：免费章节题，15：计划试卷，50：空试卷，51：源试卷，53：章节题（包含收费、免费），100：编辑估分卷，101：阶段测试卷） */
  paperType = undefined;

  /** 搜索类型（1：试卷id，2：试卷名称，3：试题id，4：试题题干，5：试题选项） */
  searchKey = undefined;

  /** 关键字 */
  searchVal = '';

  /** 科目id */
  subjectId = undefined;

  /** 科目ids，多科目查询 */
  subjectIds = [];

  /** 试卷年份 */
  year = undefined;
}

export class PaperInfoRsp {
  /** 地区id */
  areaId = undefined;

  /** 创建人 */
  createBy = '';

  /** 创建时间 */
  createTime = '';

  /** 考试domain */
  domain = '';

  /** 考试时长 */
  examDuration = undefined;

  /** 考试人数 */
  examNum = undefined;

  /** 试卷说明 */
  explanation = '';

  /** 试卷id */
  id = undefined;

  /** 试卷是否删除 */
  isDel = undefined;

  /** 是否买课才能做 */
  isPrivileged = undefined;

  /** 是否计划试卷 */
  isSchedulePaper = undefined;

  /** 是否源试卷 */
  isSource = undefined;

  /** 试卷名称 */
  name = '';

  /** 试卷分数是否设置错误(0：否 1：是) */
  paperScoreIsError = undefined;

  /** 合格分数 */
  passScore = undefined;

  /** pdf生成地址 */
  pdfNotAnswerUrl = '';

  /** pdf生成地址 */
  pdfUrl = '';

  /** 试卷试题数 */
  questionNum = undefined;

  /** 关闭审核时间 */
  reviewCloseTime = '';

  /** 审核时间 */
  reviewTime = '';

  /** 总分 */
  score = undefined;

  /** 试卷状态（0：未审核 1：已审核） */
  status = undefined;

  /** 科目id */
  subjectId = undefined;

  /** 副标题 */
  subtitle = '';

  /** 试卷类型 */
  type = undefined;

  /** 试卷类型名称 */
  typeName = '';

  /** 试卷年份 */
  year = undefined;
}

export class PaperListReq {
  /** 试卷id集合 */
  paperIds = [];
}

export class PaperQuestionRsp {
  /** 试卷id */
  id = undefined;

  /** 试题id */
  questionId = undefined;

  /** 试卷状态 */
  status = undefined;

  /** 试卷类型名称 */
  typeName = '';
}

export class PaperResetSortReq {
  /** 试卷id集合 */
  paperIds = [];

  /** 重置方式（1：按题型排序 2：按章节排序） */
  way = undefined;
}

export class PaperRuleQuestionNumRsp {
  /** 实际题数 */
  questionNum = undefined;

  /** 题型id */
  ruleId = undefined;

  /** 题型名称 */
  ruleName = '';

  /** 题型设置题数 */
  ruleQuestionNum = undefined;
}

export class PaperRuleQuestionReq {
  /** 题型试题 */
  questions = '';

  /** 试卷题型id */
  ruleId = undefined;
}

export class PaperRuleRsp {
  /** 基础题型类型 */
  baseQuestionType = undefined;

  /** 题型说明 */
  explanation = '';

  /** id */
  id = undefined;

  /** 是否删除 */
  isDel = undefined;

  /** 题型序号 */
  num = undefined;

  /** 试卷id */
  paperId = undefined;

  /** 父级id */
  parentId = undefined;

  /** 题数 */
  questionNum = undefined;

  /** 科目题型id */
  questionTypeId = undefined;

  /** 科目题型名称 */
  questionTypeName = '';

  /** 每题分值 */
  score = undefined;

  /** 得分规则（0：无 1：错题扣分 2：少选得分） */
  scoringRules = undefined;

  /** 规则分值 */
  scoringRulesScore = undefined;

  /** 科目id */
  subjectId = undefined;

  /** 题型规则类型（1：单个试题 2：任意试题 3：不同试题 4：三选二） */
  type = undefined;
}

export class PaperRuleSaveReq {
  /** 主键id */
  id = undefined;

  /** 题型序号 */
  num = undefined;

  /** 试卷id */
  paperId = undefined;

  /** 父级id */
  parentId = undefined;

  /** 题数 */
  questionNum = undefined;

  /** 题型id */
  questionTypeId = undefined;

  /** 每题分值（规则类型为不同试题则传0） */
  score = undefined;

  /** 得分规则（0：无 1：错题扣分 2：少选得分） */
  scoringRules = undefined;

  /** 规则分值 */
  scoringRulesScore = undefined;

  /** 题型规则类型（1：单个试题 2：任意试题 3：不同试题 4：三选二） */
  type = undefined;
}

export class PaperSaveReq {
  /** 地区id */
  areaId = undefined;

  /** 考试domain */
  domain = '';

  /** 考试时长 */
  examDuration = undefined;

  /** 试卷说明 */
  explanation = '';

  /** 试卷id */
  id = undefined;

  /** 是否源试卷 */
  isSource = undefined;

  /** 试卷名称 */
  name = '';

  /** 合格分数 */
  passScore = undefined;

  /** 绑定的产品（字符串） */
  products = '';

  /** 总分 */
  score = undefined;

  /** 科目id */
  subjectId = undefined;

  /** 副标题 */
  subtitle = '';

  /** 试卷类型 */
  type = undefined;

  /** 试卷年份 */
  year = undefined;
}

export class PaperSourceRsp {
  /** 试卷id */
  paperId = undefined;

  /** 试卷名称 */
  paperName = '';

  /** 试题数 */
  questionNum = undefined;
}

export class PaperSourceSiteReq {
  /** 是否源试卷 */
  isSource = undefined;

  /** 试卷id集合 */
  paperIds = [];
}

export class PaperYearReq {
  /** 站点 */
  domain = '';

  /** 试卷类型（2：真题卷，3：模拟试卷，4：模考大赛，10：学员专享，11：点题卷，12：收费章节，14：免费章节题，15：计划试卷，50：空试卷，51：源试卷，53：章节题（包含收费、免费），100：编辑估分卷，101：阶段测试卷） */
  paperType = undefined;

  /** 科目ID */
  subjectId = undefined;
}

export class PictureUserRsp {
  /** 可使用次数 */
  availableNum = undefined;

  /** 剩余使用次数 */
  remainTimes = undefined;

  /** 已经使用次数 */
  usedTimes = undefined;
}

export class QuestionAppletsSubReq {
  /** Appid */
  appId = '';

  /** 是否订阅 */
  isSub = undefined;

  /** openId */
  openId = '';

  /** 用户id */
  userId = undefined;
}

export class QuestionBindReq {
  /** 章节id */
  chapterId = undefined;

  /** 知识点id */
  knowledgeId = undefined;

  /** 试题id集合 */
  questionIds = [];
}

export class QuestionCancelBindChapterReq {
  /** 试题id集合 */
  questionIds = [];

  /** 取消绑定类型（1：章节 2：知识点） */
  type = undefined;
}

export class QuestionChapterRsp {
  /** 章id */
  chapterId = undefined;

  /** 章名称 */
  chapterName = '';

  /** 章排序 */
  chapterSort = undefined;

  /** 节id */
  childChapterId = undefined;

  /** 节名称 */
  childChapterName = '';

  /** 子知识点id */
  childKnowledgeId = undefined;

  /** 子知识点名称 */
  childKnowledgeName = '';

  /** 子知识点页码 */
  childPageNum = '';

  /** 节排序 */
  childSort = undefined;

  /** 父知识点id */
  knowledgeId = undefined;

  /** 父知识点名称 */
  knowledgeName = '';

  /** 父知识点页码 */
  pageNum = '';

  /** 试题id */
  questionId = undefined;

  /** 科目id */
  subjectId = undefined;

  /** 版本名称 */
  versionName = '';
}

export class QuestionDeleteReq {
  /** 是否删除 */
  isDel = undefined;

  /** 试题id集合 */
  questionIds = [];
}

export class QuestionDetailedReq {
  /** 试卷id */
  paperId = undefined;

  /** 试题id */
  questionId = undefined;
}

export class QuestionDetailedRsp {
  /** 试题解析 */
  analysis = '';

  /** 视频vid */
  analysisVideo = '';

  /** 基础题型类型 */
  baseQuestionType = undefined;

  /** 书籍id */
  bookId = undefined;

  /** 章节id */
  chapterId = undefined;

  /** 试题内容 */
  content = '';

  /** 试题正确选项 */
  correctOptionList = [];

  /** 考试domain */
  domain = '';

  /** 试题id */
  id = undefined;

  /** 是否禁止纠错试题 */
  isCloseAsk = undefined;

  /** 是否争议试题 */
  isDispute = undefined;

  /** 是否标记 */
  isMark = undefined;

  /** 知识点id */
  knowledgeId = undefined;

  /** 连题材料 */
  linkQuestionContent = '';

  /** 连题关联的试题id */
  linkQuestionId = undefined;

  /** 选项个数 */
  optionsNum = undefined;

  /** 试卷id */
  paperId = undefined;

  /** 试卷名称 */
  paperName = '';

  /** 试卷题型集合 */
  paperRuleRspList = [];

  /** 试卷状态（0：未审核 1：已审核） */
  paperStatus = undefined;

  /** 试卷类型（2：真题卷，3：模拟试卷，4：模考大赛，10：学员专享，11：点题卷，12：收费章节，14：免费章节题，15：计划试卷，100：编辑估分卷，101：阶段测试卷） */
  paperType = undefined;

  /** 绑定的章节、知识点数据 */
  questionChapterRsp = new QuestionChapterRsp();

  /** 题型名称 */
  questionTypeName = '';

  /** 题型id */
  ruleId = undefined;

  /** 试题分数 */
  score = undefined;

  /** 排序 */
  sort = undefined;

  /** 科目id */
  subjectId = undefined;

  /** 书籍扫描数据 */
  tikuBookInfoScanningRsp = new TikuBookInfoScanningRsp();
}

export class QuestionExamTimeConfigRsp {
  /** 考试 */
  domain = '';

  /** 考试时间 */
  examTime = '';

  /** 主键id */
  id = undefined;
}

export class QuestionExamTimeConfigSaveReq {
  /** 考试 */
  domain = '';

  /** 考试时间 */
  examTime = '';

  /** 主键id */
  id = undefined;
}

export class QuestionInfoRepeatRsp {
  /** 章节id */
  chapterId = undefined;

  /** 试题内容 */
  content = '';

  /** 正确答案 */
  correctAnswer = '';

  /** 创建人 */
  createBy = '';

  /** 试题id */
  id = undefined;

  /** 是否关闭答疑 */
  isCloseAsk = undefined;

  /** 是否已删除 */
  isDel = undefined;

  /** 是否争议试题 */
  isDispute = undefined;

  /** 是否免费 */
  isFree = undefined;

  /** 是否标记 */
  isMark = undefined;

  /** 是否学员专享 */
  isPrivileged = undefined;

  /** 是否真题 */
  isReal = undefined;

  /** 知识点id */
  knowledgeId = undefined;

  /** 连题关联的试题id */
  linkQuestionId = undefined;

  /** 试卷id */
  paperId = undefined;

  /** 试题绑定的试卷集合 */
  paperQuestionRspList = [];

  /** 试卷状态 */
  paperStatus = undefined;

  /** 试卷类型 */
  paperType = undefined;

  /** 重复试题集合 */
  questionInfoRepeatList = [];

  /** 题型名称 */
  questionTypeName = '';

  /** 试卷题型id */
  ruleId = undefined;

  /** 排序 */
  sort = undefined;

  /** 试题审核状态（0：未审核 1:已审核 2：不完全正确） */
  status = undefined;

  /** 科目id */
  subjectId = undefined;

  /** 科目名称 */
  subjectName = '';

  /** 最近更新时间 */
  updateTime = '';
}

export class QuestionInfoReq {
  /** 基础题型 */
  baseQuestionType = undefined;

  /** 章节id */
  chapterId = undefined;

  /** 考试domain */
  domain = '';

  /** 是否查看禁止纠错试题 */
  isCloseAsk = undefined;

  /** 是否查看争议试题 */
  isDispute = undefined;

  /** 是否查看标记试题 */
  isMark = undefined;

  /** 是否使用sort排序（0：不使用 1：使用） */
  isSort = undefined;

  /** 知识点id */
  knowledgeId = undefined;

  /** 分页参数：第几页，默认1 */
  pageNo = undefined;

  /** 分页参数：每页显示条数，默认10 */
  pageSize = undefined;

  /** 试卷id */
  paperId = undefined;

  /** 试卷题型id */
  ruleId = undefined;

  /** 搜索类型（1：试卷id，2：试题id，3：试题题干，4：试题选项，5：试题解析，6：书籍id） */
  searchKey = undefined;

  /** 关键字 */
  searchVal = '';

  /** 试题状态（0：未审核 1：已审核） */
  status = undefined;

  /** 科目id */
  subjectId = undefined;
}

export class QuestionInfoRsp {
  /** 章节id */
  chapterId = undefined;

  /** 试题内容 */
  content = '';

  /** 正确答案 */
  correctAnswer = '';

  /** 创建人 */
  createBy = '';

  /** 试题id */
  id = undefined;

  /** 是否关闭答疑 */
  isCloseAsk = undefined;

  /** 是否已删除 */
  isDel = undefined;

  /** 是否争议试题 */
  isDispute = undefined;

  /** 是否免费 */
  isFree = undefined;

  /** 是否标记 */
  isMark = undefined;

  /** 是否学员专享 */
  isPrivileged = undefined;

  /** 是否真题 */
  isReal = undefined;

  /** 知识点id */
  knowledgeId = undefined;

  /** 连题关联的试题id */
  linkQuestionId = undefined;

  /** 试卷id */
  paperId = undefined;

  /** 试题绑定的试卷集合 */
  paperQuestionRspList = [];

  /** 试卷状态 */
  paperStatus = undefined;

  /** 试卷类型 */
  paperType = undefined;

  /** 题型名称 */
  questionTypeName = '';

  /** 试卷题型id */
  ruleId = undefined;

  /** 排序 */
  sort = undefined;

  /** 试题审核状态（0：未审核 1:已审核 2：不完全正确） */
  status = undefined;

  /** 科目id */
  subjectId = undefined;

  /** 科目名称 */
  subjectName = '';

  /** 最近更新时间 */
  updateTime = '';
}

export class QuestionLevyListReq {
  /** 站点 */
  domain = '';

  /** 科目id */
  subjectId = undefined;
}

export class QuestionLevyListRsp {
  /** 考试站点 */
  domain = '';

  /** 真题收集科目列表 */
  list = [];

  /** 考试名称 */
  siteName = '';
}

export class QuestionLevyPageReq {
  /** 地区id null:全部 */
  areaId = undefined;

  /** 站点 null：全部 */
  domain = '';

  /** 结束时间 */
  endTime = '';

  /** 排序类型 ascending 升序 descending降序 */
  orderByType = '';

  /** 分页参数：第几页，默认1 */
  pageNo = undefined;

  /** 分页参数：每页显示条数，默认10 */
  pageSize = undefined;

  /** 父级站点 null：全部 */
  parentDomain = '';

  /** 开始时间 */
  startTime = '';

  /** 活动状态 null 全部 1 未上线 2进行中 3已下线 4未开启 */
  status = undefined;

  /** 科目id null：全部 */
  subjectId = undefined;
}

export class QuestionLevyPageRsp {
  /** 地区id */
  areaId = undefined;

  /** 地区名称 */
  areaName = '';

  /** 站点 */
  domain = '';

  /** 结束时间 */
  endTime = '';

  /** 考试批次 1上午 2下午 */
  examBatch = undefined;

  /** 考试时间 */
  examTime = '';

  /** 考试时间配置ids(后台用) */
  examTimeIds = '';

  /** 考试时间配置列表(前台用) */
  examTimeList = [];

  /** 主键id */
  id = undefined;

  /** 是否支持地区 1是 0否 */
  isArea = undefined;

  /** 活动状态 1开启 0否 */
  isOpen = undefined;

  /** 征集标题 */
  name = '';

  /** 真题估分id */
  questionId = undefined;

  /** 备注 */
  remark = '';

  /** 考试名称 */
  siteName = '';

  /** 排序 */
  sort = undefined;

  /** 开始时间 */
  startTime = '';

  /** 科目id */
  subjectId = undefined;

  /** 题库名称 */
  subjectName = '';

  /** 征集题量 */
  topicNum = undefined;

  /** 已征集题量 */
  verifyNum = undefined;
}

export class QuestionLevyReq {
  /** 地区id null 全国 */
  areaId = undefined;

  /** 站点 */
  domain = '';

  /** 结束时间 */
  endTime = '';

  /** 考试批次 1上午 2下午 */
  examBatch = undefined;

  /** 考试时间 */
  examTime = '';

  /** 考试时间下拉列表 ,分割 */
  examTimeIds = '';

  /** 主键id */
  id = undefined;

  /** 是否支持地区 1是 0否 */
  isArea = undefined;

  /** 活动状态 1开启 0否 */
  isOpen = undefined;

  /** 征集标题 */
  name = '';

  /** 真题估分id */
  questionId = undefined;

  /** 备注 */
  remark = '';

  /** 排序 */
  sort = undefined;

  /** 开始时间 */
  startTime = '';

  /** 科目id */
  subjectId = undefined;

  /** 征集题量 */
  topicNum = undefined;
}

export class QuestionLevyRsp {
  /** 地区id null 全国 */
  areaId = undefined;

  /** 站点 */
  domain = '';

  /** 结束时间 */
  endTime = '';

  /** 考试批次 1上午 2下午 */
  examBatch = undefined;

  /** 考试时间 */
  examTime = '';

  /** 考试时间下拉列表 ,分割 */
  examTimeIds = '';

  /** 主键id */
  id = undefined;

  /** 是否支持地区 1是 0否 */
  isArea = undefined;

  /** 活动状态 1开启 0否 */
  isOpen = undefined;

  /** 征集标题 */
  name = '';

  /** 真题估分id */
  questionId = undefined;

  /** 备注 */
  remark = '';

  /** 排序 */
  sort = undefined;

  /** 开始时间 */
  startTime = '';

  /** 科目id */
  subjectId = undefined;

  /** 征集题量 */
  topicNum = undefined;
}

export class QuestionLevySubjectRsp {
  /** 真题收集活动列表 */
  list = [];

  /** 科目id */
  subjectId = undefined;

  /** 科目名称 */
  subjectName = '';
}

export class QuestionPreviewCardRsp {
  /** 试题id */
  id = undefined;

  /** 试题是否有错误 */
  isError = undefined;

  /** 题序 */
  sort = undefined;
}

export class QuestionPreviewChapterRsp {
  /** 章节名称 */
  chapterName = '';

  /** 题数 */
  count = undefined;

  /** 题数占比 */
  proportion = undefined;
}

export class QuestionPreviewDataRsp {
  /** 试题解析 */
  analysis = '';

  /** 基础题型（1：单选题 2：多选题 3：不定项 4：判断题 7：简答/论述/问答） */
  baseQuestionType = undefined;

  /** 章节id */
  chapterId = undefined;

  /** 试题内容 */
  content = '';

  /** 正确答案 */
  correctAnswer = '';

  /** 试题id */
  id = undefined;

  /** 是否绑定章节 */
  isBingChapter = undefined;

  /** 是否校对 */
  isError = undefined;

  /** 是否免费 */
  isFree = undefined;

  /** 知识点id */
  knowledgeId = undefined;

  /** 连题关联的试题id */
  linkQuestionId = undefined;

  /** 试卷id */
  paperId = undefined;

  /** 绑定的章节、知识点数据 */
  questionChapterRsp = new QuestionChapterRsp();

  /** 试题选项集合 */
  questionOptionRspList = [];

  /** 试题校对集合 */
  questionProofLogRspList = [];

  /** 题序 */
  sort = undefined;
}

export class QuestionPreviewOptionRsp {
  /** 选项内容 */
  content = '';

  /** 是否正确答案 */
  isCorrectAnswer = undefined;
}

export class QuestionPreviewReq {
  /** 业务id（试卷id,章节id,知识点id） */
  objectId = undefined;

  /** 选项卡id */
  ruleId = undefined;

  /** 预览类型（1：章节 2：知识点 3：试卷） */
  type = undefined;
}

export class QuestionPreviewRsp {
  /** 创建人 */
  createBy = '';

  /** 创建时间 */
  createTime = '';

  /** 试卷说明 */
  explanation = '';

  /** 试卷是否审核 */
  isCheck = undefined;

  /** 试卷年份 */
  paperYear = undefined;

  /** 答题卡集合 */
  questionPreviewCardRspList = [];

  /** 试题集合 */
  questionPreviewDataRspList = [];

  /** 审核状态（1：已审核 0：未审核） */
  status = undefined;

  /** 科目名称 */
  subjectName = '';

  /** 标题 */
  title = '';

  /** 章节版本 */
  versionName = '';
}

export class QuestionPreviewRuleRsp {
  /** 题数 */
  count = undefined;

  /** 题型说明 */
  explanation = '';

  /** id */
  id = undefined;

  /** 标题 */
  title = '';
}

export class QuestionPreviewStatsReq {
  /** 业务id（试卷id,章节id,知识点id） */
  objectId = undefined;

  /** 预览类型（1：章节 2：知识点 3：试卷） */
  type = undefined;
}

export class QuestionPreviewStatsRsp {
  /** 试题预览章节分布 */
  previewChapterRspList = [];

  /** 试题预览选项卡数据 */
  previewRuleRspList = [];

  /** 科目id */
  subjectId = undefined;
}

export class QuestionProofLogReq {
  /** 试题id */
  questionId = undefined;

  /** 备注 */
  remark = '';

  /** 校对结果（0：无错误 1：扫描错误 2：加题错误 3：题源错误） */
  results = [];
}

export class QuestionProofLogRsp {
  /** 主键id */
  id = undefined;

  /** 校对结果 */
  proofResult = undefined;

  /** 试题 */
  questionId = undefined;

  /** 备注 */
  remark = '';
}

export class QuestionRelUpdReq {
  /** 试题id */
  questionId = undefined;

  /** 关联id */
  relId = undefined;

  /** 关联类型 */
  type = undefined;

  /** 修改用户 */
  userName = '';
}

export class QuestionRepeatReq {
  /** 章节id */
  chapterId = undefined;

  /** 知识点id */
  knowledgeId = undefined;

  /** 分页参数：第几页，默认1 */
  pageNo = undefined;

  /** 分页参数：每页显示条数，默认10 */
  pageSize = undefined;

  /** 试卷id集合，试卷测重使用 */
  paperIds = [];

  /** 试卷类型集合 */
  paperTypes = [];

  /** 试题id */
  questionId = undefined;

  /** 测重类型（1：试题科目测重 2：试卷试题科目测重 3：章节试题科目测重 4：知识点试题科目测重） */
  repeatType = undefined;

  /** 测重方式（1：试题题干测重 2：试题选项测重） */
  repeatWay = undefined;
}

export class QuestionRuleConfigReq {
  /** 站点 */
  domain = '';

  /** 主键id */
  id = undefined;

  /** 二维码 */
  qrCode = '';

  /** 真题规则 */
  questionRule = '';

  /** 微信id收款用 */
  wechatId = '';
}

export class QuestionRuleConfigRsp {
  /** 站点 */
  domain = '';

  /** 主键id */
  id = undefined;

  /** 二维码 */
  qrCode = '';

  /** 真题规则 */
  questionRule = '';

  /** 微信id收款用 */
  wechatId = '';
}

export class QuestionSaveBatchReq {
  /** 加题数 */
  addQuestionCount = undefined;

  /** 试题解析集合 */
  analysis = [];

  /** 系统答案集合 */
  answers = [];

  /** 书籍id */
  bookId = undefined;

  /** 试题内容集合 */
  contents = [];

  /** 考试domain */
  domain = '';

  /** 试题选项集合 */
  options = [];

  /** 选项个数 */
  optionsNum = undefined;

  /** 试卷id */
  paperId = undefined;

  /** 题型id */
  ruleId = undefined;

  /** 科目id */
  subjectId = undefined;
}

export class QuestionSaveReq {
  /** 试题解析 */
  analysis = '';

  /** 视频vid */
  analysisVideo = '';

  /** 系统答案 */
  answers = '';

  /** 书籍id */
  bookId = undefined;

  /** 章节id */
  chapterId = undefined;

  /** 试题内容 */
  content = '';

  /** 考试domain */
  domain = '';

  /** 试题id */
  id = undefined;

  /** 是否禁止纠错试题 */
  isCloseAsk = undefined;

  /** 是否争议试题 */
  isDispute = undefined;

  /** 是否标记 */
  isMark = undefined;

  /** 知识点id */
  knowledgeId = undefined;

  /** 连题关联的试题id */
  linkQuestionId = undefined;

  /** 试题选项 */
  options = '';

  /** 选项个数 */
  optionsNum = undefined;

  /** 试卷id */
  paperId = undefined;

  /** 题型id */
  ruleId = undefined;

  /** score */
  score = undefined;

  /** 题序 */
  sort = undefined;

  /** 科目id */
  subjectId = undefined;
}

export class QuestionStatsReq {
  /** 章节id */
  chapterId = undefined;

  /** 考试domain */
  domain = '';

  /** 知识点id */
  knowledgeId = undefined;

  /** 试卷id */
  paperId = undefined;

  /** 科目id */
  subjectId = undefined;
}

export class QuestionStatsRsp {
  /** 免费试题数 */
  freeCount = undefined;

  /** 章节或试卷id */
  id = undefined;

  /** 章节或试卷名称 */
  name = '';

  /** 题型试题数 */
  questionTypeRspList = [];

  /** 真题数 */
  realCount = undefined;

  /** 收费试题数 */
  vipCount = undefined;
}

export class QuestionTypeRsp {
  /** 基础题型名称 */
  baseQuestionTypeName = '';

  /** 实际试题数 */
  questionNum = undefined;

  /** 题型id */
  ruleId = undefined;

  /** 题型名称 */
  ruleName = '';

  /** 题型试题数 */
  ruleQuestionNum = undefined;
}

export class QuestionUpdateContentReq {
  /** 试题解析 */
  analysis = '';

  /** 系统答案 */
  answers = '';

  /** 试题内容 */
  content = '';

  /** 试题id */
  id = undefined;

  /** 试题选项 */
  options = '';
}

export class QuestionUpdateReq {
  /** 是否免费（0：收费 1：免费 ）修改该属性再传值 */
  isFree = undefined;

  /** 是否标记（0：取消标记 1：标记试题） */
  isMark = undefined;

  /** 试题id集合 */
  questionIds = [];

  /** 修改方式（1：连题id 2:状态 3：收费免费 7：标记试题） */
  updateWay = undefined;
}

export class QuestionUploadRecordCountReq {
  /** 地区id */
  areaId = undefined;

  /** 考试(null 全部) */
  domain = '';

  /** 结束时间 */
  endTime = '';

  /** 父级考试(null 全部) */
  parentDomain = '';

  /** 开始时间 */
  startTime = '';

  /** 审核状态 0未审核 1初审 2复审 3拒绝 4已打款 5未打款 */
  status = undefined;

  /** 科目id(null 全部) */
  subjectId = undefined;

  /** 年份 */
  year = undefined;
}

export class QuestionUploadRecordCountRsp {
  /** 待打款金额 */
  expectedAmount = undefined;

  /** 初审题量 */
  firstReviewNum = undefined;

  /** 已打款总金额 */
  payAmount = undefined;

  /** 拒绝次数 */
  refuseNum = undefined;

  /** 复审题量 */
  reviewNum = undefined;

  /** 提交人数 */
  submitNum = undefined;
}

export class QuestionUploadRecordMyListReq {
  /** 考试 null全部 */
  domain = '';

  /** 用户Id */
  userId = undefined;
}

export class QuestionUploadRecordMyRsp {
  /** 地区名称 */
  areaName = '';

  /** 提交时间 */
  createTime = '';

  /** 考试 */
  domain = '';

  /** 考试批次 1上午 2下午 null全部 */
  examBatch = undefined;

  /** 考试时间 */
  examTime = '';

  /** 预计金额 */
  expectedAmount = undefined;

  /** 文件名称 */
  fileName = '';

  /** 1图片 2其他文件 */
  fileType = undefined;

  /** 文件url 图片是,分割 */
  fileUrls = '';

  /** 初审题量 */
  firstReviewNum = undefined;

  /** 真题收集记录id */
  id = undefined;

  /** 是否打款 1是 0否 */
  isPay = undefined;

  /** 是否订阅 1是 0否 */
  isSub = undefined;

  /** 文件页数 */
  page = undefined;

  /** 打款金额 */
  payAmount = undefined;

  /** 打款截图 */
  payImg = '';

  /** 记录id 如(I20225271500-55) */
  recordId = '';

  /** 拒绝原因 */
  refuseMsg = '';

  /** 采纳题量 */
  reviewNum = undefined;

  /** 考试名称 */
  siteName = '';

  /** 审核状态 0初审中 1复审中 2已采纳 3拒绝 4已复审 */
  status = undefined;

  /** 科目id */
  subjectId = undefined;

  /** 科目名称 */
  subjectName = '';

  /** 用户名 */
  userName = '';
}

export class QuestionUploadRecordPageReq {
  /** 地区id */
  areaId = undefined;

  /** 考试(null 全部) */
  domain = '';

  /** 结束时间 */
  endTime = '';

  /** 试题id */
  id = '';

  /** 真题收集id */
  levyId = '';

  /** 排序字段 */
  orderByKey = '';

  /** 排序类型 ascending 升序 descending降序 */
  orderByType = '';

  /** 分页参数：第几页，默认1 */
  pageNo = undefined;

  /** 分页参数：每页显示条数，默认10 */
  pageSize = undefined;

  /** 父级考试(null 全部) */
  parentDomain = '';

  /** 开始时间 */
  startTime = '';

  /** 审核状态 0未审核 1初审 2复审 3拒绝 4已打款 5未打款 */
  status = undefined;

  /** 科目id(null 全部) */
  subjectId = undefined;

  /** 手机号 */
  tel = '';

  /** 用户名 */
  userName = '';

  /** 年份 */
  year = undefined;
}

export class QuestionUploadRecordPageRsp {
  /** 地区名称 */
  areaName = '';

  /** 创建时间 */
  createTime = '';

  /** 考试 */
  domain = '';

  /** 考试批次 1上午 2下午 null全部 */
  examBatch = undefined;

  /** 考试时间 */
  examTime = '';

  /** 预计金额 */
  expectedAmount = undefined;

  /** 文件名称 */
  fileName = '';

  /** 1图片 2其他文件 */
  fileType = undefined;

  /** 文件url */
  fileUrls = '';

  /** 初审数量 */
  firstReviewNum = undefined;

  /** 真题收集记录id */
  id = undefined;

  /** 是否打款 1是 0否 */
  isPay = undefined;

  /** 真题收集id */
  levyId = undefined;

  /** 真题收集名称 */
  levyName = '';

  /** 打款金额 */
  payAmount = undefined;

  /** 打款截图 */
  payImg = '';

  /** 记录id 如(I20225271500-55) */
  recordId = '';

  /** 拒绝原因 */
  refuseMsg = '';

  /** 复审数量 */
  reviewNum = undefined;

  /** 考试名称 */
  siteName = '';

  /** 审核状态 0未审核 1初审通过 2复审通过 3拒绝 */
  status = undefined;

  /** 科目id */
  subjectId = undefined;

  /** 科目名称 */
  subjectName = '';

  /** 手机号 */
  tel = '';

  /** 用户名 */
  userName = '';
}

export class QuestionUploadRecordPaySaveReq {
  /** 真题收集记录id */
  id = undefined;

  /** 是否打款 1是 0否 */
  isPay = undefined;

  /** 打款金额 */
  payAmount = undefined;

  /** 打款截图 */
  payImg = '';
}

export class QuestionUploadRecordReq {
  /** 考试 */
  domain = '';

  /** 考试批次 1上午 2下午 null全部 */
  examBatch = undefined;

  /** 考试时间 */
  examTime = '';

  /** 文件名称 不是图片的时候传 */
  fileName = '';

  /** 1图片 2其他文件 */
  fileType = undefined;

  /** 文件url */
  fileUrls = '';

  /** 真题收集活动id */
  levyId = undefined;

  /** 科目id */
  subjectId = undefined;

  /** 手机号 */
  tel = '';

  /** 用户地区(英文名) 全国:null */
  userArea = '';

  /** 用户Id */
  userId = undefined;

  /** 用户名 */
  userName = '';
}

export class QuestionUploadRecordSaveReq {
  /** 预计金额 默认0 */
  expectedAmount = undefined;

  /** 初审通过数量 默认0 */
  firstReviewNum = undefined;

  /** 上传记录id */
  id = undefined;

  /** 拒绝原因 */
  refuseMsg = '';

  /** 复审数量 默认0 */
  reviewNum = undefined;

  /** 状态 1初审通过 2复审都通过 3拒绝 */
  status = undefined;

  /** 审核总数量 默认0 */
  totalReviewNum = undefined;
}

export class QuestionUploadRecordSimpleRsp {
  /** 地区名称 */
  areaName = '';

  /** 考试 */
  domain = '';

  /** 考试批次 1上午 2下午 null全部 */
  examBatch = undefined;

  /** 考试时间 */
  examTime = '';

  /** 预计金额 */
  expectedAmount = undefined;

  /** 文件名称 */
  fileName = '';

  /** 1图片 2其他文件 */
  fileType = undefined;

  /** 文件url 图片是,分割 */
  fileUrls = '';

  /** 初审数量 */
  firstReviewNum = undefined;

  /** 真题收集记录id */
  id = undefined;

  /** 是否打款 1是 0否 */
  isPay = undefined;

  /** 文件页数 */
  page = undefined;

  /** 打款金额 */
  payAmount = undefined;

  /** 打款截图 */
  payImg = '';

  /** 记录id 如(I20225271500-55) */
  recordId = '';

  /** 拒绝原因 */
  refuseMsg = '';

  /** 复审数量 */
  reviewNum = undefined;

  /** 审核状态 0未审核 1初审通过 2复审通过 3拒绝 */
  status = undefined;

  /** 审核总数量 默认0 */
  totalReviewNum = undefined;

  /** 用户名 */
  userName = '';
}

export class ReportTimeSlotNumRsp {
  /** domain */
  domain = '';

  /** domainParent */
  domainParent = '';

  /** failTotalNum */
  failTotalNum = undefined;

  /** keywordSuccessRate */
  keywordSuccessRate = '';

  /** moveNum */
  moveNum = undefined;

  /** pictureFailNum */
  pictureFailNum = undefined;

  /** pictureNum */
  pictureNum = undefined;

  /** pictureSuccessRate */
  pictureSuccessRate = '';

  /** searchSuccessRate */
  searchSuccessRate = '';

  /** totalNum */
  totalNum = undefined;

  /** wordFailNum */
  wordFailNum = undefined;

  /** wordNum */
  wordNum = undefined;
}

export class ReviewQuestionsRequestObject {
  /** 试题ID列表 */
  ids = [];

  /** 是否审核，0=不审核，1=审核 */
  isCheck = undefined;
}

export class SearchMoveReq {
  /** 考试 */
  domain = '';

  /** 考试类别 */
  domainParent = '';

  /** 主键id */
  id = undefined;
}

export class SearchNumReportRsp {
  /** name */
  cname = '';

  /** 考试 */
  domain = '';

  /** 值 */
  integerList = [];

  /** 计算总数 */
  totalNum = undefined;
}

export class SearchRecordRsp {
  /** 日期 */
  date = '';

  /** id */
  id = undefined;

  /** 内容 */
  searchKeyInfo = '';

  /** 搜索方式：1=拍照，2=文字 */
  searchWay = undefined;
}

export class SearchReportDateRsp {
  /** 日期list */
  dateList = [];

  /** 搜索记录 */
  searchNumReportRsp = [];
}

export class SearchReportReq {
  /** 站点domain */
  domain = '';

  /** domainParent */
  domainParent = '';

  /** 月 */
  month = '';

  /** 年 */
  year = '';
}

export class SearchReportRsp {
  /** 考试name */
  cname = '';

  /** 考试 */
  domain = '';

  /** 明细 */
  slotNumRspList = new ReportTimeSlotNumRsp();

  /** 搜题总数 */
  totalNum = undefined;
}

export class SearchReportYearReq {
  /** 站点domain */
  domain = '';

  /** domainParent */
  domainParent = '';

  /** 年 */
  year = '';
}

export class SearchReportYearRsp {
  /** 日期list */
  dateList = [];

  /** 值 */
  tableList = [];
}

export class SearchSubjectRecordReq {
  /** 开始时间 */
  beginTime = '';

  /** 考试 */
  domain = '';

  /** 父级考试 */
  domainParent = '';

  /** 结束时间 */
  endTime = '';

  /** 是否移动；1=是，2=否 */
  isMove = undefined;

  /** 分页参数：第几页，默认1 */
  pageNo = undefined;

  /** 分页参数：每页显示条数，默认10 */
  pageSize = undefined;

  /** 搜索结果；1=成功，2=失败 */
  searchResult = undefined;

  /** 搜索方式；1=拍照，2=文字 */
  searchWay = undefined;

  /** 排序，asc:升序，desc降序 */
  sort = '';

  /** 排序字段 */
  sortField = '';
}

export class SearchSubjectRecordRsp {
  /** 创建时间 */
  createdTime = '';

  /** 考试(old) */
  domain = '';

  /** 考试类别(old) */
  domainParent = '';

  /** 主键 */
  id = undefined;

  /** 图片内容 */
  imageContent = '';

  /** 是否移动；1=是，2=否 */
  isMove = undefined;

  /** 月_日 */
  monthDay = '';

  /** 图片地址或者文字 */
  searchKeyInfo = '';

  /** 搜索结果；1=成功，2=失败 */
  searchResult = undefined;

  /** 搜索方式；1=拍照，2=文字 */
  searchWay = undefined;

  /** 来源 */
  source = '';

  /** 用户名 */
  userName = '';
}

export class SearchTimeConfigRsp {
  /** 主键 */
  id = undefined;

  /** 拍照搜题总次数 */
  pictureMaxNum = undefined;

  /** 每人每天拍照搜题次数 */
  userPictureMaxNum = undefined;
}

export class SearchTimePartReq {
  /** 开始时间 */
  beginTime = '';

  /** 站点domain */
  domain = '';

  /** domainParent */
  domainParent = '';

  /** 结束时间 */
  endTime = '';
}

export class SectionListsTheQueryResponseObject {
  /** 子章节列表 */
  childrens = [];

  /** 章节ID */
  id = undefined;

  /** 序号 */
  seqNo = undefined;

  /** 章节名称 */
  title = '';

  /** 试题数量 */
  topicCount = undefined;
}

export class SiteExpandRsp {
  /** wap端cnzz地址 */
  cnzzMobileUrl = '';

  /** pc端cnzz地址 */
  cnzzUrl = '';

  /** 站点英文名 */
  domain = '';

  /** 考试、考试分类图标地址 */
  iconUrl = '';

  /** 主键id */
  id = undefined;

  /** 是否APP显示 */
  isApp = undefined;

  /** 是否开启小程序 */
  isApplets = undefined;

  /** 是否题库兴趣标签 */
  isLabelFlag = undefined;

  /** 是否推荐考试 */
  isRecommend = undefined;

  /** 是否在课程显示 */
  isShowCourse = undefined;

  /** 是否在题库显示 */
  isShowTiku = undefined;

  /** 是否机构独享 */
  isUnion = undefined;

  /** 课程推广domain */
  spreadDomain = '';

  /** 题库展示名称 */
  tikuName = '';
}

export class SiteInfoBaseRsp {
  /** 缩写名 */
  abbrName = '';

  /** 考试集合 */
  childSiteInfoList = [];

  /** 中文名 */
  cname = '';

  /** 站点英文名 */
  domain = '';

  /** id */
  id = undefined;

  /** 父级id */
  parentId = undefined;

  /** 排序 */
  sort = undefined;

  /** 科目集合 */
  subjectBaseRspList = [];
}

export class SiteInfoMinRsp {
  /** 站点英文名 */
  domain = '';

  /** id */
  id = undefined;

  /** 中文名 */
  siteName = '';
}

export class SiteInfoRsp {
  /** 缩写名 */
  abbrName = '';

  /** 考试集合 */
  childSiteInfoList = [];

  /** 中文名 */
  cname = '';

  /** 站点英文名 */
  domain = '';

  /** 英文名 */
  ename = '';

  /** id */
  id = undefined;

  /** 是否开启保价服务：1=是，0=否 */
  isInsure = undefined;

  /** 是否联盟常用：1=是 0=否 */
  isLmcommon = undefined;

  /** 层级 */
  level = undefined;

  /** 联盟类型：0=全部,1=普通机构，2=高级机构 */
  lmType = undefined;

  /** 父站点domain */
  parentDomain = '';

  /** 父级id */
  parentId = undefined;

  /** 保利id */
  polyCid = '';

  /** 考试分类domain */
  rootDomain = '';

  /** 考试分类拓展数据 */
  siteExpandRsp = new SiteExpandRsp();

  /** 排序 */
  sort = undefined;
}

export class SubjectOptionsRequestObject {
  /** 选项文本内容（文本和图片传值二选一） */
  content = '';

  /** 选项图片内容（文本和图片传值二选一） */
  image = '';

  /** 是否正解，0=非正解，1=正解 */
  isRight = undefined;
}

export class SubjectOptionsReturnObjects {
  /** 选项文本内容 */
  content = '';

  /** 选项图片内容 */
  image = '';

  /** 是否正解，0=非正解，1=正解 */
  isRight = undefined;

  /** 选项ID */
  optionId = undefined;

  /** 选项序号 */
  seqNo = undefined;
}

export class SubmitTheAnswerReturnObjects {
  /** 正确率 */
  accuracy = '';

  /** 当前题目是否正确，true为正确，false为错误。 */
  correct = false;

  /** 每道题的答题情况 */
  topics = [];
}

export class SubmitTheAnswerTheRequestObject {
  /** 答案选项ID列表（填空题或竖式计算题直接传用户提交的答案过来） */
  answers = [];

  /** 是否最后一题 */
  last = false;

  /** 房间ID */
  roomId = undefined;

  /** 题目ID */
  topicId = undefined;
}

export class TheAnswerIsCorrectReturnObjects {
  /** 答案状态，1=正确，2=错误，3=无须作答 */
  status = undefined;

  /** 题目ID */
  topicId = undefined;
}

export class TheRequestObjectUpdateChapters {
  /** 章节ID */
  id = undefined;

  /** 章节名称 */
  title = '';
}

export class TheResponseData {
  /** 响应码，200=成功，500=系统错误，401=未登录，403=无权限，404=未找到资源，601=入参校验异常，999=业务异常 */
  code = undefined;

  /** 响应data */
  data = new ChapterInfoBaseRsp();

  /** 附加的响应参数 */
  extraData = undefined;

  /** 响应消息，如：操作成功 */
  message = '';

  /** 系统ID(请求唯一标识) */
  sid = '';

  /** 响应状态，code=200时值为true，非200时值为false */
  status = false;

  /** 耗时，单位：毫秒 */
  time = '';
}

export class TikuBookInfoPageReq {
  /** domain */
  domain = '';

  /** 结束时间 */
  endTime = '';

  /** 分页参数：第几页，默认1 */
  pageNo = undefined;

  /** 分页参数：每页显示条数，默认10 */
  pageSize = undefined;

  /** 扫描时间筛选类型（1：扫描时间 2：购买时间） */
  scanTimeType = undefined;

  /** 搜索类型（1：扫描人，2：加题人，3：书籍id，4：书籍名称） */
  searchKey = undefined;

  /** 关键字 */
  searchVal = '';

  /** 开始时间 */
  startTime = '';
}

export class TikuBookInfoPageRsp {
  /** 加题人员 */
  createBy = '';

  /** 扫描结束页 */
  endPageNum = undefined;

  /** 扫描结束时间 */
  endTime = '';

  /** 内容说明 */
  explanation = '';

  /** 书籍id */
  id = undefined;

  /** 书籍名称 */
  name = '';

  /** 书籍页数 */
  pageNum = undefined;

  /** 购买金额 */
  price = undefined;

  /** 出版社 */
  publishingHouse = '';

  /** 出版时间 */
  publishingTime = '';

  /** 购买时间 */
  purchaseTime = '';

  /** 实际加题数 */
  questionNum = undefined;

  /** 扫描id */
  scanId = undefined;

  /** 扫描量 */
  scanQuestionNum = undefined;

  /** 扫描人 */
  scanUserName = '';

  /** 扫描开始页 */
  startPageNum = undefined;

  /** 扫描开始时间 */
  startTime = '';
}

export class TikuBookInfoReq {
  /** 考试domain */
  domain = '';

  /** 书籍id */
  id = undefined;

  /** 月份 */
  month = undefined;

  /** 分页参数：第几页，默认1 */
  pageNo = undefined;

  /** 分页参数：每页显示条数，默认10 */
  pageSize = undefined;

  /** 年份 */
  year = undefined;
}

export class TikuBookInfoRsp {
  /** 扫描人集合 */
  bookScanningRspList = [];

  /** 考试domain */
  domain = '';

  /** 说明 */
  explanation = '';

  /** 书籍id */
  id = undefined;

  /** 书籍全称 */
  name = '';

  /** 书籍页数 */
  pageNum = undefined;

  /** 价格 */
  price = undefined;

  /** 出版社 */
  publishingHouse = '';

  /** 出版日期 */
  publishingTime = '';

  /** 购买时间 */
  purchaseTime = '';

  /** 考试id */
  siteInfoId = undefined;
}

export class TikuBookInfoSaveReq {
  /** 考试domain */
  domain = '';

  /** 内容说明 */
  explanation = '';

  /** 书籍id */
  id = undefined;

  /** 书籍名称 */
  name = '';

  /** 书籍页数 */
  pageNum = undefined;

  /** 价格 */
  price = undefined;

  /** 出版社 */
  publishingHouse = '';

  /** 出版时间 */
  publishingTime = '';

  /** 购买时间 */
  purchaseTime = '';
}

export class TikuBookInfoScanningRsp {
  /** 书籍id */
  id = undefined;

  /** 书籍全称 */
  name = '';

  /** 扫描内容 */
  scanContent = '';

  /** 扫描人 */
  scanUserName = '';
}

export class TikuBookScanningRsp {
  /** 书籍id */
  bookId = undefined;

  /** 扫描内容 */
  content = '';

  /** 结束页码 */
  endPageNum = undefined;

  /** 扫描结束日期 */
  endTime = '';

  /** 主键id */
  id = undefined;

  /** 扫描题量(页) */
  questionNum = undefined;

  /** 起始页码 */
  startPageNum = undefined;

  /** 扫描开始日期 */
  startTime = '';

  /** 用户名 */
  userName = '';
}

export class TikuBookScanningSaveReq {
  /** 书籍id */
  bookId = undefined;

  /** 结束页码 */
  endPageNum = undefined;

  /** 扫描结束时间 */
  endTime = '';

  /** 扫描id */
  id = undefined;

  /** 扫描量 */
  questionNum = undefined;

  /** 起始页码 */
  startPageNum = undefined;

  /** 扫描开始时间 */
  startTime = '';

  /** 扫描人 */
  userName = '';
}

export class TikuProductBuyRsp {
  /** 点题开启时间 */
  betStartTime = '';

  /** 是否存在单科产品 */
  isSingleSubject = undefined;

  /** 题库产品列表 */
  productFrontRspList = [];

  /** 题库产品有效期列表 */
  productMonthRspList = [];

  /** 推荐产品月份 */
  surplusMonth = undefined;
}

export class TikuProductExpiresRsp {
  /** 有效期 */
  expires = undefined;

  /** 产品主键 */
  key = '';

  /** 产品数 */
  productCount = undefined;

  /** 产品集合 */
  productSubjectRspList = [];

  /** 产品类型（1：单科 2：多科） */
  type = undefined;
}

export class TikuProductFrontRsp {
  /** 考试domain */
  domain = '';

  /** 产品id */
  id = undefined;

  /** 产品名称 */
  name = '';

  /** 最新价格 */
  newPrice = undefined;

  /** 原始价格 */
  oldPrice = undefined;

  /** 子产品数 */
  productCount = undefined;

  /** 产品类型（1：多科 2：单科） */
  type = undefined;

  /** 有效期（月） */
  validityPeriod = undefined;
}

export class TikuProductInfoDetailedRsp {
  /** 购买人数 */
  buyNum = undefined;

  /** 考试domain */
  domain = '';

  /** 产品id */
  id = undefined;

  /** 产品名称 */
  name = '';

  /** 最新价格 */
  newPrice = undefined;

  /** 原始价格 */
  oldPrice = undefined;

  /** 续费价格 */
  renewalPrice = undefined;

  /** 已选中单科产品集合 */
  singleProductIds = [];

  /** 排序 */
  sort = undefined;

  /** 产品状态（1：上架 0：下架） */
  status = undefined;

  /** 科目id */
  subjectId = undefined;

  /** 产品类型（1：单品 2：套餐） */
  type = undefined;

  /** 修改时间 */
  updateTime = '';

  /** 有效期（月） */
  validityPeriod = undefined;
}

export class TikuProductInfoReq {
  /** 考试domain */
  domain = '';

  /** 产品名称 */
  name = '';

  /** 分页参数：第几页，默认1 */
  pageNo = undefined;

  /** 分页参数：每页显示条数，默认10 */
  pageSize = undefined;
}

export class TikuProductInfoRsp {
  /** 购买人数 */
  buyNum = undefined;

  /** 考试domain */
  domain = '';

  /** 产品id */
  id = undefined;

  /** 产品名称 */
  name = '';

  /** 最新价格 */
  newPrice = undefined;

  /** 原始价格 */
  oldPrice = undefined;

  /** 续费价格 */
  renewalPrice = undefined;

  /** 排序 */
  sort = undefined;

  /** 产品状态（1：上架 0：下架） */
  status = undefined;

  /** 科目id */
  subjectId = undefined;

  /** 产品类型（1：单品 2：套餐） */
  type = undefined;

  /** 修改时间 */
  updateTime = '';

  /** 有效期（月） */
  validityPeriod = undefined;
}

export class TikuProductInfoSaveReq {
  /** 考试domain */
  domain = '';

  /** 产品id */
  id = undefined;

  /** 产品名称 */
  name = '';

  /** 最新价格 */
  newPrice = undefined;

  /** 原始价格 */
  oldPrice = undefined;

  /** 续费价格 */
  renewalPrice = undefined;

  /** 单科产品id集合 */
  singleProductIds = [];

  /** 排序 */
  sort = undefined;

  /** 产品状态（0：下架 1：上架） */
  status = undefined;

  /** 科目id */
  subjectId = undefined;

  /** 产品类型（1：单品 2：套餐） */
  type = undefined;

  /** 有效期（月） */
  validityPeriod = undefined;
}

export class TikuProductInfoSingleRsp {
  /** 产品id */
  id = undefined;

  /** 产品名称 */
  name = '';
}

export class TikuProductMiniInfoRsp {
  /** 答疑次数 */
  askCount = undefined;

  /** 站点英文名称 */
  domain = '';

  /** 主键 */
  id = undefined;

  /** 科目id */
  subjectId = undefined;
}

export class TikuProductMonthRsp {
  /** 每日金额 */
  dayPrice = undefined;

  /** 有效期 */
  expires = undefined;

  /** 产品主键 */
  key = '';

  /** 最新价格 */
  newPrice = undefined;

  /** 原始价格 */
  oldPrice = undefined;

  /** 产品数 */
  productCount = undefined;

  /** 产品类型（1：单科 2：多科） */
  type = undefined;
}

export class TikuProductSubjectRsp {
  /** 题库产品集合 */
  productFrontRspList = [];

  /** 科目名称 */
  subjectName = '';
}

export class TikuSubjectBaseRsp {
  /** 科目中文名 */
  cname = '';

  /** 站点domain */
  domain = '';

  /** 主键id */
  id = undefined;

  /** 父级id */
  parentId = undefined;
}

export class TikuSubjectQuestionTypeBaseRsp {
  /** 基础题型类型（ 1：单选题 2：多选题 3：不定项 4：判断题 5：标准填空 6：普通填空 7：简答/论述/问答） */
  baseQuestionType = undefined;

  /** 基础题型名称 */
  baseQuestionTypeName = '';
}

export class TikuSubjectQuestionTypeListRsp {
  /** 基础题型集合 */
  subjectQuestionTypeBaseRspList = [];

  /** 基础题型下的科目题型集合 */
  subjectQuestionTypeRspList = [];
}

export class TikuSubjectQuestionTypePaperRsp {
  /** 基础题型类型（ 1：单选题 2：多选题 3：不定项 4：判断题 7：简答/论述/问答） */
  baseQuestionType = undefined;

  /** 基础题型下的科目题型集合 */
  subjectQuestionTypeRspList = [];
}

export class TikuSubjectQuestionTypeReq {
  /** 基础题型（1：单选题 2：多选题 3：不定项 4：判断题 7：简答/论述/问答） */
  baseQuestionType = undefined;

  /** 题型说明 */
  explanation = '';

  /** id */
  id = undefined;

  /** 是否下线 */
  isOffline = undefined;

  /** 题型名称 */
  name = '';

  /** 科目id */
  subjectId = undefined;
}

export class TikuSubjectQuestionTypeRsp {
  /** 基础题型类型 */
  baseQuestionType = undefined;

  /** 题型说明 */
  explanation = '';

  /** id */
  id = undefined;

  /** 是否下线（0：否 1：是） */
  isOffline = undefined;

  /** 科目题型名称 */
  name = '';

  /** 科目id */
  subjectId = undefined;
}

export class TikuSubjectSpotTimeRsp {
  /** 点题结束时间 */
  endTime = '';

  /** 点题设置id */
  id = undefined;

  /** 点题开始时间 */
  startTime = '';

  /** 科目id */
  subjectId = undefined;
}

export class TikuSubjectSpotTimeSaveReq {
  /** 点题结束时间 */
  endTime = '';

  /** 点题开始时间 */
  startTime = '';

  /** 科目id */
  subjectId = undefined;
}

export class Timestamp {}

export class TopicListReturnObjects {
  /** 题型ID */
  id = undefined;

  /** 题型名称 */
  name = '';

  /** 序列号 */
  seqNo = undefined;
}

export class UpdateConfigReq {
  /** 主键 */
  id = undefined;

  /** 拍照搜题总次数 */
  pictureMaxNum = undefined;

  /** 每人每天拍照搜题次数 */
  userPictureMaxNum = undefined;
}

export class UpdateTestRequestObject {
  /** 解析 */
  analysis = '';

  /** 章节ID */
  chapterId = undefined;

  /** 题目内容 */
  content = '';

  /** 试题ID */
  id = undefined;

  /** 选项列表 */
  options = [];

  /** 题型ID */
  typeId = undefined;
}

export class UserNoteInsertReq {
  /** 来源终端（0：其他 1：PC 2：Android 3：IOS 4：Wap 5：小程序） */
  client = undefined;

  /** 笔记内容 */
  content = '';

  /** 笔记id（修改笔记用） */
  id = undefined;

  /** 试题id */
  questionId = undefined;

  /** 回复id（回复笔记用） */
  replyId = undefined;
}

export class UserWrongFavChapterRsp {
  /** 章节id */
  chapterId = undefined;

  /** 章节名称 */
  chapterName = '';

  /** 子章节集合 */
  childList = [];

  /** 错题数 */
  questionCount = undefined;

  /** 错题知识点集合 */
  wrongKnowledgeRspList = [];
}

export class UserWrongFavQuestionTypeRsp {
  /** 基础题型（1：单选题 2：多选题 3：不定项 4：判断题 6：填空题 7：简答/论述/问答） */
  baseQuestionType = undefined;

  /** 错题数 */
  questionCount = undefined;
}

export class UserWrongKnowledgeRsp {
  /** 子知识点集合 */
  childList = [];

  /** 知识点id */
  knowledgeId = undefined;

  /** 知识点名称 */
  knowledgeName = '';

  /** 错题数 */
  questionCount = undefined;
}

export class UserWrongStatsRsp {
  /** 新增错题数 */
  addCount = undefined;

  /** 现有错题数 */
  currentCount = undefined;

  /** 已删除错题数 */
  delCount = undefined;

  /** 累计错题数 */
  totalCount = undefined;
}

export class keywordSearchReq {
  /** 文字搜索内容 */
  content = '';

  /** 考试 */
  domain = '';

  /** 分页参数：第几页，默认1 */
  pageNo = undefined;

  /** 分页参数：每页显示条数，默认10 */
  pageSize = undefined;

  /** 来源；1=小程序 */
  source = '';
}
