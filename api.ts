export interface ApiResponse<T> {
  sid: string
  time: string
  code: number
  status: boolean
  message: string
  extraData: Object
  data: T
}

export interface ApiPageResponse<T> extends ApiResponse<T> {
  total: number
  pages: number
}

export interface ChapterInfoBaseRsp {
  id?: number
  domain?: string
  subjectId?: number
  name?: string
  level?: number
  sort?: number
  status?: number
  parentId?: number
  chapterVersionId?: string
}

export interface ChapterInfoFrontRsp {
  childList?: Array<ChapterInfoFrontRsp>
  doneNum?: number
  id?: number
  knowledgeInfoFrontRspList?: Array<ChapterKnowledgeInfoFrontRsp>
  questionsFreeNum?: number
  questionsNum?: number
  questionsTrueNum?: number
  domain?: string
  subjectId?: number
  name?: string
  level?: number
  sort?: number
  status?: number
  parentId?: number
  chapterVersionId?: string
}

export interface ChapterInfoFullReq {
  subjectIds?: Array<number>
  versionIds?: Array<string>
}

export interface ChapterInfoReq {
  subjectId?: number
  versionId?: string
}

export interface ChapterInfoRsp {
  childList?: Array<ChapterInfoRsp>
  id?: number
  isBindCourse?: number
  knowledgeInfoRspList?: Array<ChapterKnowledgeInfoRsp>
  questionsChargeNum?: number
  questionsFreeNum?: number
  questionsNum?: number
  questionsTrueNum?: number
  questionsVideoNum?: number
  domain?: string
  subjectId?: number
  name?: string
  level?: number
  sort?: number
  status?: number
  parentId?: number
  chapterVersionId?: string
}

export interface ChapterKnowledgeBaseRsp {
  id?: number
  subjectId?: number
  name?: string
  chapterId?: number
  parentId?: number
  sort?: number
  content?: string
  requirements?: number
  pageNum?: string
  status?: number
}

export interface ChapterKnowledgeInfoFrontRsp {
  childList?: Array<ChapterKnowledgeInfoFrontRsp>
  doneNum?: number
  id?: number
  questionsFreeNum?: number
  questionsNum?: number
  questionsTrueNum?: number
  subjectId?: number
  name?: string
  chapterId?: number
  parentId?: number
  sort?: number
  content?: string
  requirements?: number
  pageNum?: string
  status?: number
}

export interface ChapterKnowledgeInfoRsp {
  childList?: Array<ChapterKnowledgeInfoRsp>
  id?: number
  questionsChargeNum?: number
  questionsFreeNum?: number
  questionsNum?: number
  questionsTrueNum?: number
  questionsVideoNum?: number
  subjectId?: number
  name?: string
  chapterId?: number
  parentId?: number
  sort?: number
  content?: string
  requirements?: number
  pageNum?: string
  status?: number
}

export interface ChapterKnowledgeSaveReq {
  id?: number
  subjectId?: number
  name?: string
  chapterId?: number
  parentId?: number
  sort?: number
  content?: string
  requirements?: number
  pageNum?: string
  status?: number
}

export interface ChapterQuestionRsp {
  analysis?: string
  baseQuestionType?: number
  chapterId?: number
  content?: string
  domain?: string
  paperId?: number
  questionId?: number
  score?: number
  sort?: number
  subjectId?: number
  year?: number
}

export interface ChapterSaveReq {
  id?: number
  domain?: string
  subjectId?: number
  name?: string
  level?: number
  sort?: number
  status?: number
  parentId?: number
  chapterVersionId?: string
}

export interface ChapterVersionReq {
  id?: number
  name?: string
  domain?: string
  subjectId?: number
  knowledgeShowType?: number
  status?: number
  areaId?: number
}

export interface ChapterVersionRsp {
  areaId?: number
  domain?: string
  id?: number
  knowledgeShowType?: number
  name?: string
  status?: number
  subjectId?: number
}

export interface DailyExerciseDateRsp {
  data?: string
  days?: string
  weekDay?: string
}

export interface DailyExerciseFrontRsp {
  avgRightRate?: number
  count?: number
  date?: string
  domain?: string
  exerciseDay?: number
  id?: number
  status?: number
  subjectId?: number
  subjectName?: string
  userRightRate?: number
  ztNo?: string
}

export interface ExamHighScoreReq {
  domain?: string
  examKeyword?: string
  pageNo?: number
  pageSize?: number
}

export interface ExamHighScoreRsp {
  domain?: string
  examKeyword?: string
  id?: number
}

export interface ExamHighScoreSaveReq {
  domain?: string
  examKeyword?: string
  id?: number
}

export interface ExamdaNewsEsReq {
  content?: string
  domain?: string
  id?: string
  pageNo?: number
  pageSize?: number
}

export interface ExamdaNewsEsRsp {
  content?: string
  id?: string
  source?: string
  title?: string
}

export interface ExtractQuestionCardDataRsp {
  isAnswer?: number
  isFree?: number
  questionId?: number
  sort?: number
  status?: number
}

export interface ExtractQuestionCardReq {
  isWrong?: number
  ztNo?: string
}

export interface ExtractQuestionCardRsp {
  questionCardDataRspList?: Array<ExtractQuestionCardDataRsp>
  questionNum?: number
  ruleName?: string
  ruleScore?: number
  ruleType?: number
}

export interface ExtractQuestionDataReq {
  isWrong?: number
  ruleId?: number
  ztNo?: string
  pageNo?: number
  pageSize?: number
}

export interface ExtractQuestionDataRsp {
  analysis?: string
  baseQuestionType?: number
  childQuestionData?: Array<ExtractQuestionDataRsp>
  content?: string
  correctAnswer?: string
  id?: number
  isFree?: number
  linkQuestionId?: number
  material?: string
  questionChapterRsp?: QuestionChapterRsp
  questionOptionRspList?: Array<ExtractQuestionOptionRsp>
  sort?: number
}

export interface ExtractQuestionOptionRsp {
  content?: string
  id?: number
  isCorrectAnswer?: number
  questionId?: number
}

export interface ExtractQuestionPageMapRsp {
  end?: number
  start?: number
  ztNo?: string
}

export interface ExtractQuestionPageRsp {
  extractQuestionDataRspList?: Array<ExtractQuestionDataRsp>
  mapRspList?: Array<ExtractQuestionPageMapRsp>
  pages?: number
  total?: number
}

export interface ExtractQuestionReq {
  attachId?: number
  attachType?: number
  client?: number
  domain?: string
  isRedo?: number
  mode?: number
  objectId?: number
  subjectId?: number
  type?: number
}

export interface ExtractQuestionSaveReq {
  client?: number
  isRemoveWrong?: number
  postStr?: string
  rightCount?: number
  ztNo?: string
}

export interface ExtractQuestionSubmitReq {
  client?: number
  status?: number
  time?: number
  ztNo?: string
}

export interface ExtractRedoQuestionReq {
  client?: number
  userId?: number
  ztNo?: string
}

export interface FavQuestionRemoveReq {
  chapterIds?: Array<number>
  questionId?: number
  questionTypes?: Array<number>
  subjectId?: number
}

export interface GetQuestionInfoMiniApiReq {
  questionId?: number
}

export interface GetQuestionInfoMiniApiRsp {
  domain?: string
  paperId?: number
  paperName?: string
  paperType?: number
  questionId?: number
  subjectCname?: string
  subjectId?: number
}

export interface HistoryDetailedRsp {
  allCount?: number
  attachId?: number
  attachType?: number
  client?: number
  createTime?: Timestamp
  domain?: string
  doneCount?: number
  id?: number
  incompleteCount?: number
  mode?: number
  objectId?: number
  parentZtNo?: string
  rightCount?: number
  rightRate?: number
  rootZtNo?: string
  score?: number
  status?: number
  subjectId?: number
  title?: string
  updateTime?: Timestamp
  useTime?: number
  userId?: number
  wrongCount?: number
  ztNo?: string
  ztType?: number
}

export interface HistoryPageReq {
  domain?: string
  subjectId?: number
  type?: number
  pageNo?: number
  pageSize?: number
}

export interface HistoryPageRsp {
  allCount?: number
  attachId?: number
  attachType?: number
  client?: number
  createTime?: Timestamp
  domain?: string
  doneCount?: number
  id?: number
  incompleteCount?: number
  mode?: number
  objectId?: number
  parentZtNo?: string
  redoHistoryList?: Array<HistoryDetailedRsp>
  rightCount?: number
  rightRate?: number
  rootZtNo?: string
  score?: number
  status?: number
  subjectId?: number
  title?: string
  updateTime?: Timestamp
  useTime?: number
  userId?: number
  wrongCount?: number
  ztNo?: string
  ztType?: number
}

export interface HistoryReportRsp {
  favCount?: number
  historyCount?: number
  noteCount?: number
  wrongCount?: number
}

export interface IdsReq {
  ids?: Array<number>
}

export interface IdsReq_1 {
  ids?: Array<number>
}

export interface ListQuestionProofLogMiniApiReq {
  questionId?: Array<number>
}

export interface ListQuestionProofLogMiniApiRsp {
  createBy?: string
  nickName?: string
  questionId?: number
}

export interface NetUpdatePdfReq {
  paperId?: number
  pdfNotAnswerUrl?: string
  pdfUrl?: string
}

export interface PaperAuditReq {
  paperIds?: Array<number>
  status?: number
}

export interface PaperBindChapterReq {
  chapterId?: number
  knowledgeId?: number
  paperIds?: Array<number>
}

export interface PaperBindProductReq {
  paperIds?: Array<number>
  productIds?: string
}

export interface PaperBindProductRsp {
  id?: number
  name?: string
}

export interface PaperCancelBindChapterReq {
  paperIds?: Array<number>
  type?: number
}

export interface PaperCopyOrPasteReq {
  paperId?: number
  subjectId?: number
}

export interface PaperDeleteReq {
  isDel?: number
  paperIds?: Array<number>
}

export interface PaperDetailedRsp {
  areaId?: number
  domain?: string
  examDuration?: number
  explanation?: string
  id?: number
  isSource?: number
  name?: string
  paperBindProductRspList?: Array<PaperBindProductRsp>
  paperRuleRspList?: Array<PaperRuleRsp>
  passScore?: number
  products?: string
  score?: number
  status?: number
  subjectId?: number
  subtitle?: string
  type?: number
  year?: number
}

export interface PaperFrontApiReq {
  domain?: number
  paperType?: number
  subjectId?: number
  pageNo?: number
  pageSize?: number
}

export interface PaperFrontApiRsp {
  createTime?: string
  domain?: string
  examDuration?: number
  examNum?: number
  id?: number
  isPrivileged?: number
  name?: string
  passScore?: number
  questionNum?: number
  reviewTime?: string
  score?: number
  status?: number
  subjectId?: number
  subtitle?: string
  type?: number
  typeName?: string
  year?: number
  ztNo?: string
}

export interface PaperFrontDetailedRsp {
  domain?: string
  examDuration?: number
  examNum?: number
  explanation?: string
  id?: number
  name?: string
  passScore?: number
  ruleRspList?: Array<PaperRuleRsp>
  score?: number
  status?: number
  subjectId?: number
  subtitle?: string
  type?: number
  year?: number
  ztNo?: string
}

export interface PaperGroupVolumeReq {
  chapterIds?: Array<number>
  groupVolumeSource?: number
  isRetain?: number
  paperId?: number
  paperRuleQuestionReqList?: Array<PaperRuleQuestionReq>
  paperTypes?: Array<number>
  questionIds?: string
  questionYears?: Array<number>
  sourcePaperIds?: Array<number>
}

export interface PaperGroupVolumeRsp {
  chapterInfoRspList?: Array<ChapterInfoRsp>
  paperId?: number
  paperName?: string
  paperSourceRspList?: Array<PaperSourceRsp>
  ruleQuestionNumRspList?: Array<PaperRuleQuestionNumRsp>
}

export interface PaperInfoApiReq {
  paperTypes?: Array<number>
  subjectIds?: Array<number>
  year?: number
}

export interface PaperInfoApiRsp {
  areaId?: number
  createBy?: string
  createTime?: string
  domain?: string
  examDuration?: number
  examNum?: number
  explanation?: string
  id?: number
  isDel?: number
  isPrivileged?: number
  isSchedulePaper?: number
  isSource?: number
  name?: string
  paperScoreIsError?: number
  passScore?: number
  pdfNotAnswerUrl?: string
  pdfUrl?: string
  questionNum?: number
  reviewCloseTime?: string
  reviewTime?: string
  score?: number
  status?: number
  subjectId?: number
  subtitle?: string
  type?: number
  typeName?: string
  year?: number
}

export interface PaperInfoMiniApiReq {
  paperIds?: Array<number>
}

export interface PaperInfoMiniApiRsp {
  id?: number
  name?: string
}

export interface PaperInfoReq {
  paperType?: number
  searchKey?: number
  searchVal?: string
  subjectId?: number
  subjectIds?: Array<number>
  year?: number
  pageNo?: number
  pageSize?: number
}

export interface PaperInfoRsp {
  areaId?: number
  createBy?: string
  createTime?: string
  domain?: string
  examDuration?: number
  examNum?: number
  explanation?: string
  id?: number
  isDel?: number
  isPrivileged?: number
  isSchedulePaper?: number
  isSource?: number
  name?: string
  paperScoreIsError?: number
  passScore?: number
  pdfNotAnswerUrl?: string
  pdfUrl?: string
  questionNum?: number
  reviewCloseTime?: string
  reviewTime?: string
  score?: number
  status?: number
  subjectId?: number
  subtitle?: string
  type?: number
  typeName?: string
  year?: number
}

export interface PaperListReq {
  paperIds?: Array<number>
}

export interface PaperQuestionRsp {
  id?: number
  questionId?: number
  status?: number
  typeName?: string
}

export interface PaperResetSortReq {
  paperIds?: Array<number>
  way?: number
}

export interface PaperRuleQuestionNumRsp {
  questionNum?: number
  ruleId?: number
  ruleName?: string
  ruleQuestionNum?: number
}

export interface PaperRuleQuestionReq {
  questions?: string
  ruleId?: number
}

export interface PaperRuleRsp {
  baseQuestionType?: number
  explanation?: string
  id?: number
  isDel?: number
  num?: number
  paperId?: number
  parentId?: number
  questionNum?: number
  questionTypeId?: number
  questionTypeName?: string
  score?: number
  scoringRules?: number
  scoringRulesScore?: number
  subjectId?: number
  type?: number
}

export interface PaperRuleSaveReq {
  id?: number
  num?: number
  paperId?: number
  parentId?: number
  questionNum?: number
  questionTypeId?: number
  score?: number
  scoringRules?: number
  scoringRulesScore?: number
  type?: number
}

export interface PaperSaveReq {
  areaId?: number
  domain?: string
  examDuration?: number
  explanation?: string
  id?: number
  isSource?: number
  name?: string
  passScore?: number
  products?: string
  score?: number
  subjectId?: number
  subtitle?: string
  type?: number
  year?: number
}

export interface PaperSourceRsp {
  paperId?: number
  paperName?: string
  questionNum?: number
}

export interface PaperSourceSiteReq {
  isSource?: number
  paperIds?: Array<number>
}

export interface PaperYearReq {
  domain?: string
  paperType?: number
  subjectId?: number
}

export interface PictureUserRsp {
  availableNum?: number
  remainTimes?: number
  usedTimes?: number
}

export interface QuestionAppletsSubReq {
  appId?: string
  isSub?: number
  openId?: string
  userId?: number
}

export interface QuestionBindReq {
  chapterId?: number
  knowledgeId?: number
  questionIds?: Array<number>
}

export interface QuestionCancelBindChapterReq {
  questionIds?: Array<number>
  type?: number
}

export interface QuestionChapterRsp {
  chapterId?: number
  chapterName?: string
  chapterSort?: number
  childChapterId?: number
  childChapterName?: string
  childKnowledgeId?: number
  childKnowledgeName?: string
  childPageNum?: string
  childSort?: number
  knowledgeId?: number
  knowledgeName?: string
  pageNum?: string
  questionId?: number
  subjectId?: number
  versionName?: string
}

export interface QuestionDeleteReq {
  isDel?: number
  questionIds?: Array<number>
}

export interface QuestionDetailedReq {
  paperId?: number
  questionId?: number
}

export interface QuestionDetailedRsp {
  analysis?: string
  analysisVideo?: string
  baseQuestionType?: number
  bookId?: number
  chapterId?: number
  content?: string
  correctOptionList?: Array<string>
  domain?: string
  id?: number
  isCloseAsk?: number
  isDispute?: number
  isMark?: number
  knowledgeId?: number
  linkQuestionContent?: string
  linkQuestionId?: number
  optionsNum?: number
  paperId?: number
  paperName?: string
  paperRuleRspList?: Array<PaperRuleRsp>
  paperStatus?: number
  paperType?: number
  questionChapterRsp?: QuestionChapterRsp
  questionTypeName?: string
  ruleId?: number
  score?: number
  sort?: number
  subjectId?: number
  tikuBookInfoScanningRsp?: TikuBookInfoScanningRsp
}

export interface QuestionExamTimeConfigRsp {
  domain?: string
  examTime?: string
  id?: number
}

export interface QuestionExamTimeConfigSaveReq {
  domain?: string
  examTime?: string
  id?: number
}

export interface QuestionInfoRepeatRsp {
  chapterId?: number
  content?: string
  correctAnswer?: string
  createBy?: string
  id?: number
  isCloseAsk?: number
  isDel?: number
  isDispute?: number
  isFree?: number
  isMark?: number
  isPrivileged?: number
  isReal?: number
  knowledgeId?: number
  linkQuestionId?: number
  paperId?: number
  paperQuestionRspList?: Array<PaperQuestionRsp>
  paperStatus?: number
  paperType?: number
  questionInfoRepeatList?: Array<QuestionInfoRsp>
  questionTypeName?: string
  ruleId?: number
  sort?: number
  status?: number
  subjectId?: number
  subjectName?: string
  updateTime?: string
}

export interface QuestionInfoReq {
  baseQuestionType?: number
  chapterId?: number
  domain?: string
  isCloseAsk?: number
  isDispute?: number
  isMark?: number
  isSort?: number
  knowledgeId?: number
  paperId?: number
  ruleId?: number
  searchKey?: number
  searchVal?: string
  status?: number
  subjectId?: number
  pageNo?: number
  pageSize?: number
}

export interface QuestionInfoRsp {
  chapterId?: number
  content?: string
  correctAnswer?: string
  createBy?: string
  id?: number
  isCloseAsk?: number
  isDel?: number
  isDispute?: number
  isFree?: number
  isMark?: number
  isPrivileged?: number
  isReal?: number
  knowledgeId?: number
  linkQuestionId?: number
  paperId?: number
  paperQuestionRspList?: Array<PaperQuestionRsp>
  paperStatus?: number
  paperType?: number
  questionTypeName?: string
  ruleId?: number
  sort?: number
  status?: number
  subjectId?: number
  subjectName?: string
  updateTime?: string
}

export interface QuestionLevyListReq {
  domain?: string
  subjectId?: number
}

export interface QuestionLevyListRsp {
  domain?: string
  list?: Array<QuestionLevySubjectRsp>
  siteName?: string
}

export interface QuestionLevyPageReq {
  areaId?: number
  domain?: string
  endTime?: string
  orderByType?: string
  parentDomain?: string
  startTime?: string
  status?: number
  subjectId?: number
  pageNo?: number
  pageSize?: number
}

export interface QuestionLevyPageRsp {
  areaId?: number
  areaName?: string
  domain?: string
  endTime?: string
  examBatch?: number
  examTime?: string
  examTimeIds?: string
  examTimeList?: Array<QuestionExamTimeConfigRsp>
  id?: number
  isArea?: number
  isOpen?: number
  name?: string
  questionId?: number
  remark?: string
  siteName?: string
  sort?: number
  startTime?: string
  subjectId?: number
  subjectName?: string
  topicNum?: number
  verifyNum?: number
}

export interface QuestionLevyReq {
  areaId?: number
  domain?: string
  endTime?: string
  examBatch?: number
  examTime?: string
  examTimeIds?: string
  id?: number
  isArea?: number
  isOpen?: number
  name?: string
  questionId?: number
  remark?: string
  sort?: number
  startTime?: string
  subjectId?: number
  topicNum?: number
}

export interface QuestionLevyRsp {
  areaId?: number
  domain?: string
  endTime?: string
  examBatch?: number
  examTime?: string
  examTimeIds?: string
  id?: number
  isArea?: number
  isOpen?: number
  name?: string
  questionId?: number
  remark?: string
  sort?: number
  startTime?: string
  subjectId?: number
  topicNum?: number
}

export interface QuestionLevySubjectRsp {
  list?: Array<QuestionLevyPageRsp>
  subjectId?: number
  subjectName?: string
}

export interface QuestionPreviewCardRsp {
  id?: number
  isError?: number
  sort?: number
}

export interface QuestionPreviewChapterRsp {
  chapterName?: string
  count?: number
  proportion?: number
}

export interface QuestionPreviewDataRsp {
  analysis?: string
  baseQuestionType?: number
  chapterId?: number
  content?: string
  correctAnswer?: string
  id?: number
  isBingChapter?: number
  isError?: number
  isFree?: number
  knowledgeId?: number
  linkQuestionId?: number
  paperId?: number
  questionChapterRsp?: QuestionChapterRsp
  questionOptionRspList?: Array<QuestionPreviewOptionRsp>
  questionProofLogRspList?: Array<QuestionProofLogRsp>
  sort?: number
}

export interface QuestionPreviewOptionRsp {
  content?: string
  isCorrectAnswer?: number
}

export interface QuestionPreviewReq {
  objectId?: number
  ruleId?: number
  type?: number
}

export interface QuestionPreviewRsp {
  createBy?: string
  createTime?: string
  explanation?: string
  isCheck?: number
  paperYear?: number
  questionPreviewCardRspList?: Array<QuestionPreviewCardRsp>
  questionPreviewDataRspList?: Array<QuestionPreviewDataRsp>
  status?: number
  subjectName?: string
  title?: string
  versionName?: string
}

export interface QuestionPreviewRuleRsp {
  count?: number
  explanation?: string
  id?: number
  title?: string
}

export interface QuestionPreviewStatsReq {
  objectId?: number
  type?: number
}

export interface QuestionPreviewStatsRsp {
  previewChapterRspList?: Array<QuestionPreviewChapterRsp>
  previewRuleRspList?: Array<QuestionPreviewRuleRsp>
  subjectId?: number
}

export interface QuestionProofLogReq {
  questionId?: number
  remark?: string
  results?: Array<number>
}

export interface QuestionProofLogRsp {
  id?: number
  proofResult?: number
  questionId?: number
  remark?: string
}

export interface QuestionRelUpdReq {
  questionId?: number
  relId?: number
  type?: number
  userName?: string
}

export interface QuestionRepeatReq {
  chapterId?: number
  knowledgeId?: number
  paperIds?: Array<number>
  paperTypes?: Array<number>
  questionId?: number
  repeatType?: number
  repeatWay?: number
  pageNo?: number
  pageSize?: number
}

export interface QuestionRuleConfigReq {
  domain?: string
  id?: number
  qrCode?: string
  questionRule?: string
  wechatId?: string
}

export interface QuestionRuleConfigRsp {
  domain?: string
  id?: number
  qrCode?: string
  questionRule?: string
  wechatId?: string
}

export interface QuestionSaveBatchReq {
  addQuestionCount?: number
  analysis?: Array<string>
  answers?: Array<string>
  bookId?: number
  contents?: Array<string>
  domain?: string
  options?: Array<string>
  optionsNum?: number
  paperId?: number
  ruleId?: number
  subjectId?: number
}

export interface QuestionSaveReq {
  analysis?: string
  analysisVideo?: string
  answers?: string
  bookId?: number
  chapterId?: number
  content?: string
  domain?: string
  id?: number
  isCloseAsk?: number
  isDispute?: number
  isMark?: number
  knowledgeId?: number
  linkQuestionId?: number
  options?: string
  optionsNum?: number
  paperId?: number
  ruleId?: number
  score?: number
  sort?: number
  subjectId?: number
}

export interface QuestionStatsReq {
  chapterId?: number
  domain?: string
  knowledgeId?: number
  paperId?: number
  subjectId?: number
}

export interface QuestionStatsRsp {
  freeCount?: number
  id?: number
  name?: string
  questionTypeRspList?: Array<QuestionTypeRsp>
  realCount?: number
  vipCount?: number
}

export interface QuestionTypeRsp {
  baseQuestionTypeName?: string
  questionNum?: number
  ruleId?: number
  ruleName?: string
  ruleQuestionNum?: number
}

export interface QuestionUpdateContentReq {
  analysis?: string
  answers?: string
  content?: string
  id?: number
  options?: string
}

export interface QuestionUpdateReq {
  isFree?: number
  isMark?: number
  questionIds?: Array<number>
  updateWay?: number
}

export interface QuestionUploadRecordCountReq {
  areaId?: number
  domain?: string
  endTime?: string
  parentDomain?: string
  startTime?: string
  status?: number
  subjectId?: number
  year?: number
}

export interface QuestionUploadRecordCountRsp {
  expectedAmount?: number
  firstReviewNum?: number
  payAmount?: number
  refuseNum?: number
  reviewNum?: number
  submitNum?: number
}

export interface QuestionUploadRecordMyListReq {
  domain?: string
  userId?: number
}

export interface QuestionUploadRecordMyRsp {
  areaName?: string
  createTime?: string
  domain?: string
  examBatch?: number
  examTime?: string
  expectedAmount?: number
  fileName?: string
  fileType?: number
  fileUrls?: string
  firstReviewNum?: number
  id?: number
  isPay?: number
  isSub?: number
  page?: number
  payAmount?: number
  payImg?: string
  recordId?: string
  refuseMsg?: string
  reviewNum?: number
  siteName?: string
  status?: number
  subjectId?: number
  subjectName?: string
  userName?: string
}

export interface QuestionUploadRecordPageReq {
  areaId?: number
  domain?: string
  endTime?: string
  id?: string
  levyId?: string
  orderByKey?: string
  orderByType?: string
  parentDomain?: string
  startTime?: string
  status?: number
  subjectId?: number
  tel?: string
  userName?: string
  year?: number
  pageNo?: number
  pageSize?: number
}

export interface QuestionUploadRecordPageRsp {
  areaName?: string
  createTime?: string
  domain?: string
  examBatch?: number
  examTime?: string
  expectedAmount?: number
  fileName?: string
  fileType?: number
  fileUrls?: string
  firstReviewNum?: number
  id?: number
  isPay?: number
  levyId?: number
  levyName?: string
  payAmount?: number
  payImg?: string
  recordId?: string
  refuseMsg?: string
  reviewNum?: number
  siteName?: string
  status?: number
  subjectId?: number
  subjectName?: string
  tel?: string
  userName?: string
}

export interface QuestionUploadRecordPaySaveReq {
  id?: number
  isPay?: number
  payAmount?: number
  payImg?: string
}

export interface QuestionUploadRecordReq {
  domain?: string
  examBatch?: number
  examTime?: string
  fileName?: string
  fileType?: number
  fileUrls?: string
  levyId?: number
  subjectId?: number
  tel?: string
  userArea?: string
  userId?: number
  userName?: string
}

export interface QuestionUploadRecordSaveReq {
  expectedAmount?: number
  firstReviewNum?: number
  id?: number
  refuseMsg?: string
  reviewNum?: number
  status?: number
  totalReviewNum?: number
}

export interface QuestionUploadRecordSimpleRsp {
  areaName?: string
  domain?: string
  examBatch?: number
  examTime?: string
  expectedAmount?: number
  fileName?: string
  fileType?: number
  fileUrls?: string
  firstReviewNum?: number
  id?: number
  isPay?: number
  page?: number
  payAmount?: number
  payImg?: string
  recordId?: string
  refuseMsg?: string
  reviewNum?: number
  status?: number
  totalReviewNum?: number
  userName?: string
}

export interface ReportTimeSlotNumRsp {
  domain?: string
  domainParent?: string
  failTotalNum?: number
  keywordSuccessRate?: string
  moveNum?: number
  pictureFailNum?: number
  pictureNum?: number
  pictureSuccessRate?: string
  searchSuccessRate?: string
  totalNum?: number
  wordFailNum?: number
  wordNum?: number
}

export interface SearchMoveReq {
  domain?: string
  domainParent?: string
  id?: number
}

export interface SearchNumReportRsp {
  cname?: string
  domain?: string
  integerList?: Array<number>
  totalNum?: number
}

export interface SearchRecordRsp {
  date?: string
  id?: number
  searchKeyInfo?: string
  searchWay?: number
}

export interface SearchReportDateRsp {
  dateList?: Array<string>
  searchNumReportRsp?: Array<SearchNumReportRsp>
}

export interface SearchReportReq {
  domain?: string
  domainParent?: string
  month?: string
  year?: string
}

export interface SearchReportRsp {
  cname?: string
  domain?: string
  slotNumRspList?: ReportTimeSlotNumRsp
  totalNum?: number
}

export interface SearchReportYearReq {
  domain?: string
  domainParent?: string
  year?: string
}

export interface SearchReportYearRsp {
  dateList?: Array<string>
  tableList?: Array<Array<Object>>
}

export interface SearchSubjectRecordReq {
  beginTime?: string
  domain?: string
  domainParent?: string
  endTime?: string
  isMove?: number
  searchResult?: number
  searchWay?: number
  sort?: string
  sortField?: string
  pageNo?: number
  pageSize?: number
}

export interface SearchSubjectRecordRsp {
  createdTime?: string
  domain?: string
  domainParent?: string
  id?: number
  imageContent?: string
  isMove?: number
  monthDay?: string
  searchKeyInfo?: string
  searchResult?: number
  searchWay?: number
  source?: string
  userName?: string
}

export interface SearchTimeConfigRsp {
  id?: number
  pictureMaxNum?: number
  userPictureMaxNum?: number
}

export interface SearchTimePartReq {
  beginTime?: string
  domain?: string
  domainParent?: string
  endTime?: string
}

export interface SiteExpandRsp {
  cnzzMobileUrl?: string
  cnzzUrl?: string
  domain?: string
  iconUrl?: string
  id?: number
  isApp?: number
  isApplets?: number
  isLabelFlag?: number
  isRecommend?: number
  isShowCourse?: number
  isShowTiku?: number
  isUnion?: number
  spreadDomain?: string
  tikuName?: string
}

export interface SiteInfoBaseRsp {
  abbrName?: string
  childSiteInfoList?: Array<SiteInfoBaseRsp>
  cname?: string
  domain?: string
  id?: number
  parentId?: number
  sort?: number
  subjectBaseRspList?: Array<TikuSubjectBaseRsp>
}

export interface SiteInfoMinRsp {
  domain?: string
  id?: number
  siteName?: string
}

export interface SiteInfoRsp {
  abbrName?: string
  childSiteInfoList?: Array<SiteInfoRsp>
  cname?: string
  domain?: string
  ename?: string
  id?: number
  isInsure?: number
  isLmcommon?: number
  level?: number
  lmType?: number
  parentDomain?: string
  parentId?: number
  polyCid?: string
  rootDomain?: string
  siteExpandRsp?: SiteExpandRsp
  sort?: number
}

export interface TikuBookInfoPageReq {
  domain?: string
  endTime?: string
  scanTimeType?: number
  searchKey?: number
  searchVal?: string
  startTime?: string
  pageNo?: number
  pageSize?: number
}

export interface TikuBookInfoPageRsp {
  createBy?: string
  endPageNum?: number
  endTime?: string
  explanation?: string
  id?: number
  name?: string
  pageNum?: number
  price?: number
  publishingHouse?: string
  publishingTime?: string
  purchaseTime?: string
  questionNum?: number
  scanId?: number
  scanQuestionNum?: number
  scanUserName?: string
  startPageNum?: number
  startTime?: string
}

export interface TikuBookInfoReq {
  domain?: string
  id?: number
  month?: number
  year?: number
  pageNo?: number
  pageSize?: number
}

export interface TikuBookInfoRsp {
  bookScanningRspList?: Array<TikuBookScanningRsp>
  domain?: string
  explanation?: string
  id?: number
  name?: string
  pageNum?: number
  price?: number
  publishingHouse?: string
  publishingTime?: string
  purchaseTime?: string
  siteInfoId?: number
}

export interface TikuBookInfoSaveReq {
  domain?: string
  explanation?: string
  id?: number
  name?: string
  pageNum?: number
  price?: number
  publishingHouse?: string
  publishingTime?: string
  purchaseTime?: string
}

export interface TikuBookInfoScanningRsp {
  id?: number
  name?: string
  scanContent?: string
  scanUserName?: string
}

export interface TikuBookScanningRsp {
  bookId?: number
  content?: string
  endPageNum?: number
  endTime?: string
  id?: number
  questionNum?: number
  startPageNum?: number
  startTime?: string
  userName?: string
}

export interface TikuBookScanningSaveReq {
  bookId?: number
  endPageNum?: number
  endTime?: string
  id?: number
  questionNum?: number
  startPageNum?: number
  startTime?: string
  userName?: string
}

export interface TikuProductBuyRsp {
  betStartTime?: string
  isSingleSubject?: number
  productFrontRspList?: Array<TikuProductExpiresRsp>
  productMonthRspList?: Array<TikuProductMonthRsp>
  surplusMonth?: number
}

export interface TikuProductExpiresRsp {
  expires?: number
  key?: string
  productCount?: number
  productSubjectRspList?: Array<TikuProductSubjectRsp>
  type?: number
}

export interface TikuProductFrontRsp {
  domain?: string
  id?: number
  name?: string
  newPrice?: number
  oldPrice?: number
  productCount?: number
  type?: number
  validityPeriod?: number
}

export interface TikuProductInfoDetailedRsp {
  buyNum?: number
  domain?: string
  id?: number
  name?: string
  newPrice?: number
  oldPrice?: number
  renewalPrice?: number
  singleProductIds?: Array<number>
  sort?: number
  status?: number
  subjectId?: number
  type?: number
  updateTime?: string
  validityPeriod?: number
}

export interface TikuProductInfoReq {
  domain?: string
  name?: string
  pageNo?: number
  pageSize?: number
}

export interface TikuProductInfoRsp {
  buyNum?: number
  domain?: string
  id?: number
  name?: string
  newPrice?: number
  oldPrice?: number
  renewalPrice?: number
  sort?: number
  status?: number
  subjectId?: number
  type?: number
  updateTime?: string
  validityPeriod?: number
}

export interface TikuProductInfoSaveReq {
  domain?: string
  id?: number
  name?: string
  newPrice?: number
  oldPrice?: number
  renewalPrice?: number
  singleProductIds?: Array<number>
  sort?: number
  status?: number
  subjectId?: number
  type?: number
  validityPeriod?: number
}

export interface TikuProductInfoSingleRsp {
  id?: number
  name?: string
}

export interface TikuProductMiniInfoRsp {
  askCount?: number
  domain?: string
  id?: number
  subjectId?: number
}

export interface TikuProductMonthRsp {
  dayPrice?: number
  expires?: number
  key?: string
  newPrice?: number
  oldPrice?: number
  productCount?: number
  type?: number
}

export interface TikuProductSubjectRsp {
  productFrontRspList?: Array<TikuProductFrontRsp>
  subjectName?: string
}

export interface TikuSubjectBaseRsp {
  cname?: string
  domain?: string
  id?: number
  parentId?: number
}

export interface TikuSubjectQuestionTypeBaseRsp {
  baseQuestionType?: number
  baseQuestionTypeName?: string
}

export interface TikuSubjectQuestionTypeListRsp {
  subjectQuestionTypeBaseRspList?: Array<TikuSubjectQuestionTypeBaseRsp>
  subjectQuestionTypeRspList?: Array<TikuSubjectQuestionTypeRsp>
}

export interface TikuSubjectQuestionTypePaperRsp {
  baseQuestionType?: number
  subjectQuestionTypeRspList?: Array<TikuSubjectQuestionTypeRsp>
}

export interface TikuSubjectQuestionTypeReq {
  baseQuestionType?: number
  explanation?: string
  id?: number
  isOffline?: number
  name?: string
  subjectId?: number
}

export interface TikuSubjectQuestionTypeRsp {
  baseQuestionType?: number
  explanation?: string
  id?: number
  isOffline?: number
  name?: string
  subjectId?: number
}

export interface TikuSubjectSpotTimeRsp {
  endTime?: string
  id?: number
  startTime?: string
  subjectId?: number
}

export interface TikuSubjectSpotTimeSaveReq {
  endTime?: string
  startTime?: string
  subjectId?: number
}

export interface Timestamp {}

export interface UpdateConfigReq {
  id?: number
  pictureMaxNum?: number
  userPictureMaxNum?: number
}

export interface UserNoteInsertReq {
  client?: number
  content?: string
  id?: number
  questionId?: number
  replyId?: number
}

export interface UserWrongFavChapterRsp {
  chapterId?: number
  chapterName?: string
  childList?: Array<UserWrongFavChapterRsp>
  questionCount?: number
  wrongKnowledgeRspList?: Array<UserWrongKnowledgeRsp>
}

export interface UserWrongFavQuestionTypeRsp {
  baseQuestionType?: number
  questionCount?: number
}

export interface UserWrongKnowledgeRsp {
  childList?: Array<UserWrongKnowledgeRsp>
  knowledgeId?: number
  knowledgeName?: string
  questionCount?: number
}

export interface UserWrongStatsRsp {
  addCount?: number
  currentCount?: number
  delCount?: number
  totalCount?: number
}

export interface keywordSearchReq {
  content?: string
  domain?: string
  source?: string
  pageNo?: number
  pageSize?: number
}

export interface 修改题型请求对象 {
  id?: number
  isEnable?: number
  name?: string
  seqNo?: number
}

export interface 做题获取试题返回对象 {
  roomId?: number
  id?: number
  typeId?: number
  type?: string
  needAnswer?: boolean
  paperType?: string
  content?: string
  analysis?: string
  options?: Array<题目选项返回对象>
}

export interface 做题获取题目请求对象 {
  domain?: string
  subjectId?: number
  chapterId?: number
  type?: number
  prevRoomId?: number
  limit?: number
}

export interface 删除试题请求对象 {
  ids?: Array<number>
}

export interface 响应数据 {
  sid?: string
  time?: string
  code?: number
  status?: boolean
  message?: string
  extraData?: Object
  data?: Object
}

export interface 审核试题请求对象 {
  ids?: Array<number>
  isCheck?: number
}

export interface 提交答案请求对象 {
  roomId?: number
  topicId?: number
  answers?: Array<string>
  last?: boolean
}

export interface 提交答案返回对象 {
  correct?: boolean
  accuracy?: string
  topics?: Array<答案正确性返回对象>
}

export interface 新增章节请求对象 {
  parentId?: number
  domain?: string
  domainName?: string
  subjectId?: number
  subjectName?: string
  title?: string
}

export interface 新增试题请求对象 {
  chapterId?: number
  typeId?: number
  paperType?: number
  content?: string
  options?: Array<题目选项请求对象>
  analysis?: string
}

export interface 新增题型请求对象 {
  name?: string
  isEnable?: number
}

export interface 更新章节请求对象 {
  id?: number
  title?: string
}

export interface 更新试题请求对象 {
  id?: number
  chapterId?: number
  typeId?: number
  content?: string
  options?: Array<题目选项请求对象>
  analysis?: string
}

export interface 查看答案解析返回对象 {
  id?: number
  status?: number
  type?: string
  needAnswer?: boolean
  paperType?: string
  content?: string
  analysis?: string
  options?: Array<题目选项返回对象>
}

export interface 移动试题请求对象 {
  ids?: Array<number>
  chapterId?: number
}

export interface 章节列表查询响应对象 {
  id?: number
  title?: string
  seqNo?: number
  childrens?: Array<章节列表查询响应对象>
  topicCount?: number
}

export interface 章节列表查询请求对象 {
  domain?: string
  subjectId?: number
}

export interface 章节移动请求对象 {
  domain?: string
  subjectId?: number
  chapterIds?: Array<number>
  sectionIds?: Array<number>
}

export interface 答案正确性返回对象 {
  topicId?: number
  status?: number
}

export interface 试题列表请求对象 {
  pageNo?: number
  pageSize?: number
  domain?: string
  subjectId?: number
  chapterId?: number
  typeId?: number
  isCheck?: number
  content?: string
}

export interface 试题返回对象 {
  id?: number
  chapterId?: number
  typeId?: number
  type?: string
  paperType?: string
  content?: string
  analysis?: string
  options?: Array<题目选项返回对象>
  answers?: string
  updateBy?: string
  updateTime?: string
  isCheck?: number
}

export interface 阿里云上传响应对象 {
  name?: string
  path?: string
  postfix?: string
  size?: number
  url?: string
}

export interface 题型列表返回对象 {
  id?: number
  name?: string
  seqNo?: number
}

export interface 题目选项请求对象 {
  content?: string
  image?: string
  isRight?: number
}

export interface 题目选项返回对象 {
  optionId?: number
  seqNo?: number
  content?: string
  image?: string
  isRight?: number
}
