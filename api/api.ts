import axios from 'axios'
export function baseTopicTypeAdd(req: 新增题型请求对象): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(`/ess-tiku-api/base/topic-type/add`, req)
}
export function baseTopicTypeList(): Promise<
  ApiResponse<Array<题型列表返回对象>>
> {
  return axios.get<any, ApiResponse<Array<题型列表返回对象>>>(
    `/ess-tiku-api/base/topic-type/list`
  )
}
export function baseTopicTypeUpdate(
  req: 修改题型请求对象
): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(
    `/ess-tiku-api/base/topic-type/update`,
    req
  )
}
export function bookDelete(id: number): Promise<ApiResponse> {
  return axios.get<any, ApiResponse>(`/ess-tiku-api/book/delete?id=${id}`)
}
export function bookPage(
  req: TikuBookInfoPageReq
): Promise<ApiPageResponse<TikuBookInfoPageRsp>> {
  return axios.post<any, ApiPageResponse<TikuBookInfoPageRsp>>(
    `/ess-tiku-api/book/page`,
    req
  )
}
export function bookPageQuestion(
  req: TikuBookInfoReq
): Promise<ApiPageResponse<TikuBookInfoRsp>> {
  return axios.post<any, ApiPageResponse<TikuBookInfoRsp>>(
    `/ess-tiku-api/book/page-question`,
    req
  )
}
export function bookSave(req: TikuBookInfoSaveReq): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(`/ess-tiku-api/book/save`, req)
}
export function bookScanDelete(id: number): Promise<ApiResponse> {
  return axios.get<any, ApiResponse>(`/ess-tiku-api/book/scan/delete?id=${id}`)
}
export function bookScanSave(
  req: TikuBookScanningSaveReq
): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(`/ess-tiku-api/book/scan/save`, req)
}
export function chapterDelete(id: number): Promise<ApiResponse> {
  return axios.get<any, ApiResponse>(`/ess-tiku-api/chapter/delete?id=${id}`)
}
export function chapterFullTree(
  req: ChapterInfoFullReq
): Promise<ApiResponse<Array<ChapterInfoRsp>>> {
  return axios.post<any, ApiResponse<Array<ChapterInfoRsp>>>(
    `/ess-tiku-api/chapter/full-tree`,
    req
  )
}
export function chapterKnowledgeDelete(id: number): Promise<ApiResponse> {
  return axios.get<any, ApiResponse>(
    `/ess-tiku-api/chapter/knowledge/delete?id=${id}`
  )
}
export function chapterKnowledgeSave(
  req: ChapterKnowledgeSaveReq
): Promise<ApiResponse<ChapterKnowledgeBaseRsp>> {
  return axios.post<any, ApiResponse<ChapterKnowledgeBaseRsp>>(
    `/ess-tiku-api/chapter/knowledge/save`,
    req
  )
}
export function chapterListQuestion(
  chapterIds: number[]
): Promise<ApiResponse<Array<ChapterQuestionRsp>>> {
  return axios.post<any, ApiResponse<Array<ChapterQuestionRsp>>>(
    `/ess-tiku-api/chapter/list-question`,
    chapterIds
  )
}
export function chapterListIds(
  ids: number[]
): Promise<ApiResponse<Array<ChapterInfoRsp>>> {
  return axios.post<any, ApiResponse<Array<ChapterInfoRsp>>>(
    `/ess-tiku-api/chapter/list/ids`,
    ids
  )
}
export function chapterResetsort(req: ChapterInfoReq): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(`/ess-tiku-api/chapter/resetsort`, req)
}
export function chapterSave(
  req: ChapterSaveReq
): Promise<ApiResponse<ChapterInfoBaseRsp>> {
  return axios.post<any, ApiResponse<ChapterInfoBaseRsp>>(
    `/ess-tiku-api/chapter/save`,
    req
  )
}
export function chapterSyncBackendChapterQuestion(
  subjectId: number,
  versionId: string
): Promise<ApiResponse> {
  return axios.get<any, ApiResponse>(
    `/ess-tiku-api/chapter/sync-backend-chapter-question?subjectId=${subjectId}&versionId=${versionId}`
  )
}
export function chapterTree(
  req: ChapterInfoReq
): Promise<ApiResponse<Array<ChapterInfoRsp>>> {
  return axios.post<any, ApiResponse<Array<ChapterInfoRsp>>>(
    `/ess-tiku-api/chapter/tree`,
    req
  )
}
export function chapterVersionDelete(id: number): Promise<ApiResponse> {
  return axios.get<any, ApiResponse>(
    `/ess-tiku-api/chapter/version/delete?id=${id}`
  )
}
export function chapterVersionList(
  subjectId: number
): Promise<ApiResponse<Array<ChapterVersionRsp>>> {
  return axios.get<any, ApiResponse<Array<ChapterVersionRsp>>>(
    `/ess-tiku-api/chapter/version/list?subjectId=${subjectId}`
  )
}
export function chapterVersionSave(
  req: ChapterVersionReq
): Promise<ApiResponse<ChapterVersionRsp>> {
  return axios.post<any, ApiResponse<ChapterVersionRsp>>(
    `/ess-tiku-api/chapter/version/save`,
    req
  )
}
export function deleteData(ids: string): Promise<ApiResponse> {
  return axios.get<any, ApiResponse>(`/ess-tiku-api/deleteData?ids=${ids}`)
}
export function examHighScoreImportExcel(): Promise<ApiResponse<object>> {
  return axios.post<any, ApiResponse<object>>(
    `/ess-tiku-api/examHighScore/importExcel`
  )
}
export function examHighScorePublishKeywords(): Promise<
  ApiResponse<阿里云上传响应对象>
> {
  return axios.post<any, ApiResponse<阿里云上传响应对象>>(
    `/ess-tiku-api/examHighScore/publishKeywords`
  )
}
export function examdaNewsEsDoSearch(
  examdaNewsEsReq: ExamdaNewsEsReq
): Promise<ApiPageResponse<Array<ExamdaNewsEsRsp>>> {
  return axios.post<any, ApiPageResponse<Array<ExamdaNewsEsRsp>>>(
    `/ess-tiku-api/examdaNewsEs/do/search`,
    examdaNewsEsReq
  )
}
export function examdaNewsEsSearch(
  examdaNewsEsReq: ExamdaNewsEsReq
): Promise<ApiPageResponse<Array<ExamdaNewsEsRsp>>> {
  return axios.post<any, ApiPageResponse<Array<ExamdaNewsEsRsp>>>(
    `/ess-tiku-api/examdaNewsEs/search`,
    examdaNewsEsReq
  )
}
export function frontChapterDoList(
  subjectId: number
): Promise<ApiResponse<Array<ChapterInfoFrontRsp>>> {
  return axios.get<any, ApiResponse<Array<ChapterInfoFrontRsp>>>(
    `/ess-tiku-api/front/chapter/do/list?subjectId=${subjectId}`
  )
}
export function frontDailyDate(): Promise<
  ApiResponse<Array<DailyExerciseDateRsp>>
> {
  return axios.get<any, ApiResponse<Array<DailyExerciseDateRsp>>>(
    `/ess-tiku-api/front/daily/date`
  )
}
export function frontDailyDetailed(
  date: string,
  subjectId: number
): Promise<ApiResponse<DailyExerciseFrontRsp>> {
  return axios.get<any, ApiResponse<DailyExerciseFrontRsp>>(
    `/ess-tiku-api/front/daily/detailed?date=${date}&subjectId=${subjectId}`
  )
}
export function frontExtractCard(
  req: ExtractQuestionCardReq
): Promise<ApiResponse<Array<ExtractQuestionCardRsp>>> {
  return axios.post<any, ApiResponse<Array<ExtractQuestionCardRsp>>>(
    `/ess-tiku-api/front/extract/card`,
    req
  )
}
export function frontExtractDoPage(
  req: ExtractQuestionDataReq
): Promise<ApiResponse<ExtractQuestionPageRsp>> {
  return axios.post<any, ApiResponse<ExtractQuestionPageRsp>>(
    `/ess-tiku-api/front/extract/do/page`,
    req
  )
}
export function frontExtractDoQuestions(
  req: ExtractQuestionReq
): Promise<ApiResponse<string>> {
  return axios.post<any, ApiResponse<string>>(
    `/ess-tiku-api/front/extract/do/questions`,
    req
  )
}
export function frontExtractPage(
  req: ExtractQuestionDataReq
): Promise<ApiResponse<ExtractQuestionPageRsp>> {
  return axios.post<any, ApiResponse<ExtractQuestionPageRsp>>(
    `/ess-tiku-api/front/extract/page`,
    req
  )
}
export function frontExtractQuestions(
  req: ExtractQuestionReq
): Promise<ApiResponse<string>> {
  return axios.post<any, ApiResponse<string>>(
    `/ess-tiku-api/front/extract/questions`,
    req
  )
}
export function frontExtractRedo(
  req: ExtractRedoQuestionReq
): Promise<ApiResponse<string>> {
  return axios.post<any, ApiResponse<string>>(
    `/ess-tiku-api/front/extract/redo`,
    req
  )
}
export function frontExtractSave(
  req: ExtractQuestionSaveReq
): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(`/ess-tiku-api/front/extract/save`, req)
}
export function frontExtractSubmit(
  req: ExtractQuestionSubmitReq
): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(`/ess-tiku-api/front/extract/submit`, req)
}
export function frontFavChapterTree(
  subjectId: number
): Promise<ApiResponse<Array<UserWrongFavChapterRsp>>> {
  return axios.get<any, ApiResponse<Array<UserWrongFavChapterRsp>>>(
    `/ess-tiku-api/front/fav/chapter-tree?subjectId=${subjectId}`
  )
}
export function frontFavInsert(questionId: number): Promise<ApiResponse> {
  return axios.get<any, ApiResponse>(
    `/ess-tiku-api/front/fav/insert?questionId=${questionId}`
  )
}
export function frontFavQuestionType(
  subjectId: number
): Promise<ApiResponse<Array<UserWrongFavQuestionTypeRsp>>> {
  return axios.get<any, ApiResponse<Array<UserWrongFavQuestionTypeRsp>>>(
    `/ess-tiku-api/front/fav/question-type?subjectId=${subjectId}`
  )
}
export function frontFavRemove(
  req: FavQuestionRemoveReq
): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(`/ess-tiku-api/front/fav/remove`, req)
}
export function frontHistoryPage(
  req: HistoryPageReq
): Promise<ApiPageResponse<HistoryPageRsp>> {
  return axios.post<any, ApiPageResponse<HistoryPageRsp>>(
    `/ess-tiku-api/front/history/page`,
    req
  )
}
export function frontHistoryValidateHistoryType(
  historyTypeId: number
): Promise<ApiResponse<string>> {
  return axios.get<any, ApiResponse<string>>(
    `/ess-tiku-api/front/history/validate-history-type?historyTypeId=${historyTypeId}`
  )
}
export function frontNoteSave(req: UserNoteInsertReq): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(`/ess-tiku-api/front/note/save`, req)
}
export function frontPaperDetailed(
  paperId: number
): Promise<ApiResponse<PaperFrontDetailedRsp>> {
  return axios.post<any, ApiResponse<PaperFrontDetailedRsp>>(
    `/ess-tiku-api/front/paper/detailed?paperId=${paperId}`
  )
}
export function frontPaperPage(
  req: PaperFrontApiReq
): Promise<ApiPageResponse<PaperFrontApiRsp>> {
  return axios.post<any, ApiPageResponse<PaperFrontApiRsp>>(
    `/ess-tiku-api/front/paper/page`,
    req
  )
}
export function frontProductBuy(
  domain: string,
  subjectId: number
): Promise<ApiResponse<TikuProductBuyRsp>> {
  return axios.post<any, ApiResponse<TikuProductBuyRsp>>(
    `/ess-tiku-api/front/product/buy?domain=${domain}&subjectId=${subjectId}`
  )
}
export function frontWrongChapterTree(
  isReal: number,
  subjectId: number
): Promise<ApiResponse<Array<UserWrongFavChapterRsp>>> {
  return axios.get<any, ApiResponse<Array<UserWrongFavChapterRsp>>>(
    `/ess-tiku-api/front/wrong/chapter-tree?isReal=${isReal}&subjectId=${subjectId}`
  )
}
export function frontWrongQuestionType(
  isReal: number,
  subjectId: number
): Promise<ApiResponse<Array<UserWrongFavQuestionTypeRsp>>> {
  return axios.get<any, ApiResponse<Array<UserWrongFavQuestionTypeRsp>>>(
    `/ess-tiku-api/front/wrong/question-type?isReal=${isReal}&subjectId=${subjectId}`
  )
}
export function frontWrongRemove(
  subjectId: number
): Promise<ApiResponse<UserWrongStatsRsp>> {
  return axios.get<any, ApiResponse<UserWrongStatsRsp>>(
    `/ess-tiku-api/front/wrong/remove?subjectId=${subjectId}`
  )
}
export function frontWrongStats(
  subjectId: number
): Promise<ApiResponse<UserWrongStatsRsp>> {
  return axios.get<any, ApiResponse<UserWrongStatsRsp>>(
    `/ess-tiku-api/front/wrong/stats?subjectId=${subjectId}`
  )
}
export function knowledgeListId(
  req: IdsReq
): Promise<ApiResponse<Array<ChapterKnowledgeInfoRsp>>> {
  return axios.post<any, ApiResponse<Array<ChapterKnowledgeInfoRsp>>>(
    `/ess-tiku-api/knowledge/list-id`,
    req
  )
}
export function knowledgeListTreeSubject(
  subjectId: number
): Promise<ApiResponse<Array<ChapterInfoRsp>>> {
  return axios.get<any, ApiResponse<Array<ChapterInfoRsp>>>(
    `/ess-tiku-api/knowledge/list-tree-subject?subjectId=${subjectId}`
  )
}
export function knowledgeParentIds(
  req: IdsReq
): Promise<ApiResponse<Array<ChapterInfoRsp>>> {
  return axios.post<any, ApiResponse<Array<ChapterInfoRsp>>>(
    `/ess-tiku-api/knowledge/parent-ids`,
    req
  )
}
export function paperAuditPaper(req: PaperAuditReq): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(`/ess-tiku-api/paper/audit-paper`, req)
}
export function paperBatchBindChapter(
  req: PaperBindChapterReq
): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(
    `/ess-tiku-api/paper/batch-bind-chapter`,
    req
  )
}
export function paperBatchBindProduct(
  req: PaperBindProductReq
): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(
    `/ess-tiku-api/paper/batch-bind-product`,
    req
  )
}
export function paperBatchUpdateSource(
  req: PaperSourceSiteReq
): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(
    `/ess-tiku-api/paper/batch-update-source`,
    req
  )
}
export function paperCancelBindChapter(
  req: PaperCancelBindChapterReq
): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(
    `/ess-tiku-api/paper/cancel-bind-chapter`,
    req
  )
}
export function paperCancelBindProduct(
  req: PaperListReq
): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(
    `/ess-tiku-api/paper/cancel-bind-product`,
    req
  )
}
export function paperCloseProof(req: PaperListReq): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(`/ess-tiku-api/paper/close-proof`, req)
}
export function paperCopyPaste(req: PaperCopyOrPasteReq): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(`/ess-tiku-api/paper/copy-paste`, req)
}
export function paperDeleteRevoke(req: PaperDeleteReq): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(`/ess-tiku-api/paper/delete-revoke`, req)
}
export function paperDetailed(
  paperId: number
): Promise<ApiResponse<PaperDetailedRsp>> {
  return axios.get<any, ApiResponse<PaperDetailedRsp>>(
    `/ess-tiku-api/paper/detailed?paperId=${paperId}`
  )
}
export function paperDoNetUpdatePdf(
  req: NetUpdatePdfReq
): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(
    `/ess-tiku-api/paper/do/net-update-pdf`,
    req
  )
}
export function paperExamDuration(
  subjectId: number
): Promise<ApiResponse<number>> {
  return axios.get<any, ApiResponse<number>>(
    `/ess-tiku-api/paper/exam-duration?subjectId=${subjectId}`
  )
}
export function paperGroupVolumeSave(
  req: PaperGroupVolumeReq
): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(
    `/ess-tiku-api/paper/group-volume/save`,
    req
  )
}
export function paperGroupVolumeView(
  paperId: number
): Promise<ApiResponse<PaperGroupVolumeRsp>> {
  return axios.get<any, ApiResponse<PaperGroupVolumeRsp>>(
    `/ess-tiku-api/paper/group-volume/view?paperId=${paperId}`
  )
}
export function paperList(
  req: PaperInfoApiReq
): Promise<ApiResponse<Array<PaperInfoApiRsp>>> {
  return axios.post<any, ApiResponse<Array<PaperInfoApiRsp>>>(
    `/ess-tiku-api/paper/list`,
    req
  )
}
export function paperListMini(
  req: PaperInfoMiniApiReq
): Promise<ApiResponse<Array<PaperInfoMiniApiRsp>>> {
  return axios.post<any, ApiResponse<Array<PaperInfoMiniApiRsp>>>(
    `/ess-tiku-api/paper/list-mini`,
    req
  )
}
export function paperListPaperYears(
  req: PaperYearReq
): Promise<ApiResponse<Array<number>>> {
  return axios.post<any, ApiResponse<Array<number>>>(
    `/ess-tiku-api/paper/list-paper-years`,
    req
  )
}
export function paperPage(
  req: PaperInfoReq
): Promise<ApiPageResponse<PaperInfoRsp>> {
  return axios.post<any, ApiPageResponse<PaperInfoRsp>>(
    `/ess-tiku-api/paper/page`,
    req
  )
}
export function paperPdfPush(req: PaperListReq): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(`/ess-tiku-api/paper/pdf/push`, req)
}
export function paperQuestionType(
  subjectId: number
): Promise<ApiResponse<Array<TikuSubjectQuestionTypePaperRsp>>> {
  return axios.get<any, ApiResponse<Array<TikuSubjectQuestionTypePaperRsp>>>(
    `/ess-tiku-api/paper/question-type?subjectId=${subjectId}`
  )
}
export function paperResetSort(req: PaperResetSortReq): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(`/ess-tiku-api/paper/reset-sort`, req)
}
export function paperRuleDelete(req: IdsReq_1): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(`/ess-tiku-api/paper/rule/delete`, req)
}
export function paperRuleSave(req: PaperRuleSaveReq): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(`/ess-tiku-api/paper/rule/save`, req)
}
export function paperRules(
  paperId: number
): Promise<ApiResponse<Array<PaperRuleRsp>>> {
  return axios.get<any, ApiResponse<Array<PaperRuleRsp>>>(
    `/ess-tiku-api/paper/rules?paperId=${paperId}`
  )
}
export function paperSave(req: PaperSaveReq): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(`/ess-tiku-api/paper/save`, req)
}
export function paperSaveExamDuration(
  examDuration: number,
  subjectId: number
): Promise<ApiResponse> {
  return axios.get<any, ApiResponse>(
    `/ess-tiku-api/paper/save-exam-duration?examDuration=${examDuration}&subjectId=${subjectId}`
  )
}
export function paperSelectList(
  paperIds: number[]
): Promise<ApiResponse<Array<PaperInfoApiRsp>>> {
  return axios.get<any, ApiResponse<Array<PaperInfoApiRsp>>>(
    `/ess-tiku-api/paper/select-list?paperIds=${paperIds}`
  )
}
export function productDelete(id: number): Promise<ApiResponse> {
  return axios.get<any, ApiResponse>(`/ess-tiku-api/product/delete?id=${id}`)
}
export function productDetailed(
  productId: number
): Promise<ApiResponse<TikuProductInfoDetailedRsp>> {
  return axios.get<any, ApiResponse<TikuProductInfoDetailedRsp>>(
    `/ess-tiku-api/product/detailed?productId=${productId}`
  )
}
export function productGetIdBySubjectId(
  subjectId: number
): Promise<ApiResponse<number>> {
  return axios.get<any, ApiResponse<number>>(
    `/ess-tiku-api/product/get-id-by-subject-id?subjectId=${subjectId}`
  )
}
export function productListMini(
  tikuProductIds: number[]
): Promise<ApiResponse<Array<TikuProductMiniInfoRsp>>> {
  return axios.post<any, ApiResponse<Array<TikuProductMiniInfoRsp>>>(
    `/ess-tiku-api/product/list-mini`,
    tikuProductIds
  )
}
export function productListSingle(
  domain: string
): Promise<ApiResponse<Array<TikuProductInfoSingleRsp>>> {
  return axios.get<any, ApiResponse<Array<TikuProductInfoSingleRsp>>>(
    `/ess-tiku-api/product/list-single?domain=${domain}`
  )
}
export function productPage(
  req: TikuProductInfoReq
): Promise<ApiPageResponse<TikuProductInfoRsp>> {
  return axios.post<any, ApiPageResponse<TikuProductInfoRsp>>(
    `/ess-tiku-api/product/page`,
    req
  )
}
export function productRackUpAndDown(
  id: number,
  status: number
): Promise<ApiResponse> {
  return axios.get<any, ApiResponse>(
    `/ess-tiku-api/product/rack-up-and-down?id=${id}&status=${status}`
  )
}
export function productSave(req: TikuProductInfoSaveReq): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(`/ess-tiku-api/product/save`, req)
}
export function productSysData(): Promise<ApiResponse> {
  return axios.get<any, ApiResponse>(`/ess-tiku-api/product/sys-data`)
}
export function questionExamTimeConfigDel(
  id: number
): Promise<ApiResponse<object>> {
  return axios.get<any, ApiResponse<object>>(
    `/ess-tiku-api/question-exam-time-config/del?id=${id}`
  )
}
export function questionExamTimeConfigList(
  domain: string
): Promise<ApiResponse<Array<QuestionExamTimeConfigRsp>>> {
  return axios.get<any, ApiResponse<Array<QuestionExamTimeConfigRsp>>>(
    `/ess-tiku-api/question-exam-time-config/list?domain=${domain}`
  )
}
export function questionExamTimeConfigSave(
  req: QuestionExamTimeConfigSaveReq
): Promise<ApiResponse<object>> {
  return axios.post<any, ApiResponse<object>>(
    `/ess-tiku-api/question-exam-time-config/save`,
    req
  )
}
export function questionLevyDelete(req: IdsReq): Promise<ApiResponse<object>> {
  return axios.post<any, ApiResponse<object>>(
    `/ess-tiku-api/question-levy/delete`,
    req
  )
}
export function questionLevyGet(
  id: number
): Promise<ApiResponse<QuestionLevyRsp>> {
  return axios.get<any, ApiResponse<QuestionLevyRsp>>(
    `/ess-tiku-api/question-levy/get?id=${id}`
  )
}
export function questionLevyGetSubject(
  subjectId: number
): Promise<ApiResponse<Map<string, object>>> {
  return axios.get<any, ApiResponse<Map<string, object>>>(
    `/ess-tiku-api/question-levy/get-subject?subjectId=${subjectId}`
  )
}
export function questionLevyList(): Promise<
  ApiResponse<Array<QuestionLevyPageRsp>>
> {
  return axios.get<any, ApiResponse<Array<QuestionLevyPageRsp>>>(
    `/ess-tiku-api/question-levy/list`
  )
}
export function questionLevyListFront(
  req: QuestionLevyListReq
): Promise<ApiResponse<Array<QuestionLevyListRsp>>> {
  return axios.post<any, ApiResponse<Array<QuestionLevyListRsp>>>(
    `/ess-tiku-api/question-levy/list-front`,
    req
  )
}
export function questionLevyPage(
  questionLevyPageReq: QuestionLevyPageReq
): Promise<ApiPageResponse<QuestionLevyPageRsp>> {
  return axios.post<any, ApiPageResponse<QuestionLevyPageRsp>>(
    `/ess-tiku-api/question-levy/page`,
    questionLevyPageReq
  )
}
export function questionLevySave(
  req: QuestionLevyReq
): Promise<ApiResponse<object>> {
  return axios.post<any, ApiResponse<object>>(
    `/ess-tiku-api/question-levy/save`,
    req
  )
}
export function questionRuleConfigDelRefuseMsg(
  msg: string
): Promise<ApiResponse<object>> {
  return axios.get<any, ApiResponse<object>>(
    `/ess-tiku-api/question-rule-config/del-refuse-msg?msg=${msg}`
  )
}
export function questionRuleConfigGet(
  domain: string
): Promise<ApiResponse<QuestionRuleConfigRsp>> {
  return axios.get<any, ApiResponse<QuestionRuleConfigRsp>>(
    `/ess-tiku-api/question-rule-config/get?domain=${domain}`
  )
}
export function questionRuleConfigGetRefuseMsg(): Promise<
  ApiResponse<Array<string>>
> {
  return axios.get<any, ApiResponse<Array<string>>>(
    `/ess-tiku-api/question-rule-config/get-refuse-msg`
  )
}
export function questionRuleConfigSave(
  req: QuestionRuleConfigReq
): Promise<ApiResponse<object>> {
  return axios.post<any, ApiResponse<object>>(
    `/ess-tiku-api/question-rule-config/save`,
    req
  )
}
export function questionRuleConfigSaveRefuseMsg(
  msg: string
): Promise<ApiResponse<object>> {
  return axios.get<any, ApiResponse<object>>(
    `/ess-tiku-api/question-rule-config/save-refuse-msg?msg=${msg}`
  )
}
export function questionTypeList(
  subjectId: number
): Promise<ApiResponse<TikuSubjectQuestionTypeListRsp>> {
  return axios.get<any, ApiResponse<TikuSubjectQuestionTypeListRsp>>(
    `/ess-tiku-api/question-type/list?subjectId=${subjectId}`
  )
}
export function questionTypeSave(
  req: TikuSubjectQuestionTypeReq
): Promise<ApiResponse<TikuSubjectQuestionTypeListRsp>> {
  return axios.post<any, ApiResponse<TikuSubjectQuestionTypeListRsp>>(
    `/ess-tiku-api/question-type/save`,
    req
  )
}
export function questionUploadRecordCount(
  req: QuestionUploadRecordCountReq
): Promise<ApiResponse<QuestionUploadRecordCountRsp>> {
  return axios.post<any, ApiResponse<QuestionUploadRecordCountRsp>>(
    `/ess-tiku-api/question-upload-record/count`,
    req
  )
}
export function questionUploadRecordDeleted(
  req: IdsReq
): Promise<ApiResponse<object>> {
  return axios.post<any, ApiResponse<object>>(
    `/ess-tiku-api/question-upload-record/deleted`,
    req
  )
}
export function questionUploadRecordExist(
  req: QuestionUploadRecordMyListReq
): Promise<ApiResponse<boolean>> {
  return axios.post<any, ApiResponse<boolean>>(
    `/ess-tiku-api/question-upload-record/exist`,
    req
  )
}
export function questionUploadRecordGet(
  id: number
): Promise<ApiResponse<QuestionUploadRecordSimpleRsp>> {
  return axios.get<any, ApiResponse<QuestionUploadRecordSimpleRsp>>(
    `/ess-tiku-api/question-upload-record/get?id=${id}`
  )
}
export function questionUploadRecordListMy(
  req: QuestionUploadRecordMyListReq
): Promise<ApiResponse<Array<QuestionUploadRecordMyRsp>>> {
  return axios.post<any, ApiResponse<Array<QuestionUploadRecordMyRsp>>>(
    `/ess-tiku-api/question-upload-record/list-my`,
    req
  )
}
export function questionUploadRecordPage(
  req: QuestionUploadRecordPageReq
): Promise<ApiPageResponse<QuestionUploadRecordPageRsp>> {
  return axios.post<any, ApiPageResponse<QuestionUploadRecordPageRsp>>(
    `/ess-tiku-api/question-upload-record/page`,
    req
  )
}
export function questionUploadRecordSave(
  req: QuestionUploadRecordSaveReq
): Promise<ApiResponse<object>> {
  return axios.post<any, ApiResponse<object>>(
    `/ess-tiku-api/question-upload-record/save`,
    req
  )
}
export function questionUploadRecordSavePay(
  req: QuestionUploadRecordPaySaveReq
): Promise<ApiResponse<object>> {
  return axios.post<any, ApiResponse<object>>(
    `/ess-tiku-api/question-upload-record/save-pay`,
    req
  )
}
export function questionUploadRecordSaveRecord(
  req: QuestionUploadRecordReq
): Promise<ApiResponse<object>> {
  return axios.post<any, ApiResponse<object>>(
    `/ess-tiku-api/question-upload-record/save-record`,
    req
  )
}
export function questionUploadRecordSubscribe(
  req: QuestionAppletsSubReq
): Promise<ApiResponse<object>> {
  return axios.post<any, ApiResponse<object>>(
    `/ess-tiku-api/question-upload-record/subscribe`,
    req
  )
}
export function questionUploadRecordTopList(
  userId: number
): Promise<ApiResponse<Array<SiteInfoMinRsp>>> {
  return axios.get<any, ApiResponse<Array<SiteInfoMinRsp>>>(
    `/ess-tiku-api/question-upload-record/top-list?userId=${userId}`
  )
}
export function questionBindChapter(
  req: QuestionBindReq
): Promise<ApiResponse<QuestionChapterRsp>> {
  return axios.post<any, ApiResponse<QuestionChapterRsp>>(
    `/ess-tiku-api/question/bind-chapter`,
    req
  )
}
export function questionCancelBindChapter(
  req: QuestionCancelBindChapterReq
): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(
    `/ess-tiku-api/question/cancel-bind-chapter`,
    req
  )
}
export function questionDeleteRevoke(
  req: QuestionDeleteReq
): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(
    `/ess-tiku-api/question/delete-revoke`,
    req
  )
}
export function questionDetailed(
  req: QuestionDetailedReq
): Promise<ApiResponse<QuestionDetailedRsp>> {
  return axios.post<any, ApiResponse<QuestionDetailedRsp>>(
    `/ess-tiku-api/question/detailed`,
    req
  )
}
export function questionDoNetDeleteRel(
  req: QuestionRelUpdReq
): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(
    `/ess-tiku-api/question/do/net-delete-rel`,
    req
  )
}
export function questionDoNetProofLogSave(
  req: QuestionProofLogReq
): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(
    `/ess-tiku-api/question/do/net-proof-log-save`,
    req
  )
}
export function questionDoNetUpdateContent(
  req: QuestionUpdateContentReq
): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(
    `/ess-tiku-api/question/do/net-update-content`,
    req
  )
}
export function questionDoNetUpdateRel(
  req: QuestionRelUpdReq
): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(
    `/ess-tiku-api/question/do/net-update-rel`,
    req
  )
}
export function questionGetMiniQuestionRel(
  req: GetQuestionInfoMiniApiReq
): Promise<ApiResponse<GetQuestionInfoMiniApiRsp>> {
  return axios.post<any, ApiResponse<GetQuestionInfoMiniApiRsp>>(
    `/ess-tiku-api/question/get-mini-question-rel`,
    req
  )
}
export function questionListMiniQuestionProofLog(
  req: ListQuestionProofLogMiniApiReq
): Promise<ApiResponse<Array<ListQuestionProofLogMiniApiRsp>>> {
  return axios.post<any, ApiResponse<Array<ListQuestionProofLogMiniApiRsp>>>(
    `/ess-tiku-api/question/list-mini-question-proof-log`,
    req
  )
}
export function questionPage(
  req: QuestionInfoReq
): Promise<ApiPageResponse<QuestionInfoRsp>> {
  return axios.post<any, ApiPageResponse<QuestionInfoRsp>>(
    `/ess-tiku-api/question/page`,
    req
  )
}
export function questionPreviewProofSave(
  req: QuestionProofLogReq
): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(
    `/ess-tiku-api/question/preview-proof-save`,
    req
  )
}
export function questionPreviewQuestion(
  req: QuestionPreviewReq
): Promise<ApiResponse<QuestionPreviewRsp>> {
  return axios.post<any, ApiResponse<QuestionPreviewRsp>>(
    `/ess-tiku-api/question/preview-question`,
    req
  )
}
export function questionPreviewRule(
  req: QuestionPreviewStatsReq
): Promise<ApiResponse<QuestionPreviewStatsRsp>> {
  return axios.post<any, ApiResponse<QuestionPreviewStatsRsp>>(
    `/ess-tiku-api/question/preview-rule`,
    req
  )
}
export function questionRepeat(
  req: QuestionRepeatReq
): Promise<ApiPageResponse<QuestionInfoRepeatRsp>> {
  return axios.post<any, ApiPageResponse<QuestionInfoRepeatRsp>>(
    `/ess-tiku-api/question/repeat`,
    req
  )
}
export function questionSave(
  req: QuestionSaveReq
): Promise<ApiResponse<number>> {
  return axios.post<any, ApiResponse<number>>(
    `/ess-tiku-api/question/save`,
    req
  )
}
export function questionSaveBatch(
  req: QuestionSaveBatchReq
): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(`/ess-tiku-api/question/save-batch`, req)
}
export function questionStats(
  req: QuestionStatsReq
): Promise<ApiResponse<QuestionStatsRsp>> {
  return axios.post<any, ApiResponse<QuestionStatsRsp>>(
    `/ess-tiku-api/question/stats`,
    req
  )
}
export function questionSysQuestion(subjectId: number): Promise<ApiResponse> {
  return axios.get<any, ApiResponse>(
    `/ess-tiku-api/question/sys-question?subjectId=${subjectId}`
  )
}
export function questionUpdateQuestion(
  req: QuestionUpdateReq
): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(
    `/ess-tiku-api/question/update-question`,
    req
  )
}
export function reportInit(
  subjectId: number
): Promise<ApiResponse<HistoryReportRsp>> {
  return axios.get<any, ApiResponse<HistoryReportRsp>>(
    `/ess-tiku-api/report/init?subjectId=${subjectId}`
  )
}
export function saveData(
  examSiteInfoSaveReq: ExamHighScoreSaveReq
): Promise<ApiResponse<number>> {
  return axios.post<any, ApiResponse<number>>(
    `/ess-tiku-api/saveData`,
    examSiteInfoSaveReq
  )
}
export function searchSubjectRecordDoGetDayPictureCount(): Promise<
  ApiResponse<PictureUserRsp>
> {
  return axios.get<any, ApiResponse<PictureUserRsp>>(
    `/ess-tiku-api/searchSubjectRecord/do/getDayPictureCount`
  )
}
export function searchSubjectRecordExportData(
  subjectRecordReq: SearchSubjectRecordReq
): Promise<ApiResponse<阿里云上传响应对象>> {
  return axios.post<any, ApiResponse<阿里云上传响应对象>>(
    `/ess-tiku-api/searchSubjectRecord/exportData`,
    subjectRecordReq
  )
}
export function searchSubjectRecordGetYearReport(
  searchReportYearReq: SearchReportYearReq
): Promise<ApiResponse<SearchReportYearRsp>> {
  return axios.post<any, ApiResponse<SearchReportYearRsp>>(
    `/ess-tiku-api/searchSubjectRecord/get-year-report`,
    searchReportYearReq
  )
}
export function searchSubjectRecordGetUserPictureCount(): Promise<
  ApiResponse<PictureUserRsp>
> {
  return axios.get<any, ApiResponse<PictureUserRsp>>(
    `/ess-tiku-api/searchSubjectRecord/getUserPictureCount`
  )
}
export function searchSubjectRecordMoveDomain(
  searchMoveReq: SearchMoveReq
): Promise<ApiResponse<object>> {
  return axios.post<any, ApiResponse<object>>(
    `/ess-tiku-api/searchSubjectRecord/moveDomain`,
    searchMoveReq
  )
}
export function searchSubjectRecordSearchKeywordQuestions(
  keywordSearchReq: keywordSearchReq
): Promise<ApiPageResponse<Array<ExamdaNewsEsRsp>>> {
  return axios.post<any, ApiPageResponse<Array<ExamdaNewsEsRsp>>>(
    `/ess-tiku-api/searchSubjectRecord/search/keywordQuestions`,
    keywordSearchReq
  )
}
export function searchSubjectRecordSearchQuestions(
  content: string,
  domain: string,
  imageFile: File,
  pageNo: number,
  pageSize: number,
  source: string
): Promise<ApiPageResponse<Array<ExamdaNewsEsRsp>>> {
  return axios.post<any, ApiPageResponse<Array<ExamdaNewsEsRsp>>>(
    `/ess-tiku-api/searchSubjectRecord/searchQuestions?content=${content}&domain=${domain}&imageFile=${imageFile}&pageNo=${pageNo}&pageSize=${pageSize}&source=${source}`
  )
}
export function searchSubjectRecordSelectGet(
  id: number
): Promise<ApiResponse<Array<ExamdaNewsEsRsp>>> {
  return axios.get<any, ApiResponse<Array<ExamdaNewsEsRsp>>>(
    `/ess-tiku-api/searchSubjectRecord/select/get?id=${id}`
  )
}
export function searchSubjectRecordSelectKeyword(
  domain: string
): Promise<ApiResponse<Array<SearchRecordRsp>>> {
  return axios.get<any, ApiResponse<Array<SearchRecordRsp>>>(
    `/ess-tiku-api/searchSubjectRecord/select/keyword?domain=${domain}`
  )
}
export function searchSubjectRecordSelectRecord(
  domain: string
): Promise<ApiResponse<Array<SearchRecordRsp>>> {
  return axios.get<any, ApiResponse<Array<SearchRecordRsp>>>(
    `/ess-tiku-api/searchSubjectRecord/select/record?domain=${domain}`
  )
}
export function searchSubjectRecordSelectDataReport(
  timePartReq: SearchTimePartReq
): Promise<ApiResponse<Array<SearchReportRsp>>> {
  return axios.post<any, ApiResponse<Array<SearchReportRsp>>>(
    `/ess-tiku-api/searchSubjectRecord/selectDataReport`,
    timePartReq
  )
}
export function searchSubjectRecordSelectList(
  subjectRecordReq: SearchSubjectRecordReq
): Promise<ApiPageResponse<SearchSubjectRecordRsp>> {
  return axios.post<any, ApiPageResponse<SearchSubjectRecordRsp>>(
    `/ess-tiku-api/searchSubjectRecord/selectList`,
    subjectRecordReq
  )
}
export function searchSubjectRecordSelectNumReport(
  searchReportReq: SearchReportReq
): Promise<ApiResponse<SearchReportDateRsp>> {
  return axios.post<any, ApiResponse<SearchReportDateRsp>>(
    `/ess-tiku-api/searchSubjectRecord/selectNumReport`,
    searchReportReq
  )
}
export function searchTimeConfigGet(): Promise<
  ApiResponse<SearchTimeConfigRsp>
> {
  return axios.get<any, ApiResponse<SearchTimeConfigRsp>>(
    `/ess-tiku-api/searchTimeConfig/get`
  )
}
export function searchTimeConfigUpdate(
  timeConfigReq: UpdateConfigReq
): Promise<ApiResponse<object>> {
  return axios.post<any, ApiResponse<object>>(
    `/ess-tiku-api/searchTimeConfig/update`,
    timeConfigReq
  )
}
export function selectData(
  examSiteInfoReq: ExamHighScoreReq
): Promise<ApiPageResponse<ExamHighScoreRsp>> {
  return axios.post<any, ApiPageResponse<ExamHighScoreRsp>>(
    `/ess-tiku-api/selectData`,
    examSiteInfoReq
  )
}
export function selectDataById(
  id: number
): Promise<ApiResponse<ExamHighScoreRsp>> {
  return axios.get<any, ApiResponse<ExamHighScoreRsp>>(
    `/ess-tiku-api/selectDataById?id=${id}`
  )
}
export function siteinfoTree(): Promise<ApiResponse<Array<SiteInfoRsp>>> {
  return axios.get<any, ApiResponse<Array<SiteInfoRsp>>>(
    `/ess-tiku-api/siteinfo/tree`
  )
}
export function spotTimeModel(
  subjectId: number
): Promise<ApiResponse<TikuSubjectSpotTimeRsp>> {
  return axios.get<any, ApiResponse<TikuSubjectSpotTimeRsp>>(
    `/ess-tiku-api/spot-time/model?subjectId=${subjectId}`
  )
}
export function spotTimeSave(
  req: TikuSubjectSpotTimeSaveReq
): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(`/ess-tiku-api/spot-time/save`, req)
}
export function tikuBaseTreeSiteinfo(): Promise<
  ApiResponse<Array<SiteInfoBaseRsp>>
> {
  return axios.get<any, ApiResponse<Array<SiteInfoBaseRsp>>>(
    `/ess-tiku-api/tiku-base/tree-siteinfo`
  )
}
export function zxxChapterAdd(req: 新增章节请求对象): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(`/ess-tiku-api/zxx/chapter/add`, req)
}
export function zxxChapterDelete(id: number): Promise<ApiResponse> {
  return axios.get<any, ApiResponse>(
    `/ess-tiku-api/zxx/chapter/delete?id=${id}`
  )
}
export function zxxChapterGet(
  id: number
): Promise<ApiResponse<章节列表查询响应对象>> {
  return axios.get<any, ApiResponse<章节列表查询响应对象>>(
    `/ess-tiku-api/zxx/chapter/get?id=${id}`
  )
}
export function zxxChapterMove(
  req: 章节移动请求对象
): Promise<ApiResponse<Array<章节列表查询响应对象>>> {
  return axios.post<any, ApiResponse<Array<章节列表查询响应对象>>>(
    `/ess-tiku-api/zxx/chapter/move`,
    req
  )
}
export function zxxChapterTree(
  req: 章节列表查询请求对象
): Promise<ApiResponse<Array<章节列表查询响应对象>>> {
  return axios.post<any, ApiResponse<Array<章节列表查询响应对象>>>(
    `/ess-tiku-api/zxx/chapter/tree`,
    req
  )
}
export function zxxChapterUpdate(req: 更新章节请求对象): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(`/ess-tiku-api/zxx/chapter/update`, req)
}
export function zxxExerciseGetTopics(
  req: 做题获取题目请求对象
): Promise<ApiResponse<Array<做题获取试题返回对象>>> {
  return axios.post<any, ApiResponse<Array<做题获取试题返回对象>>>(
    `/ess-tiku-api/zxx/exercise/get-topics`,
    req
  )
}
export function zxxExerciseShowAnalysis(
  roomId: number
): Promise<ApiResponse<Array<查看答案解析返回对象>>> {
  return axios.get<any, ApiResponse<Array<查看答案解析返回对象>>>(
    `/ess-tiku-api/zxx/exercise/show-analysis?roomId=${roomId}`
  )
}
export function zxxExerciseSubmitAnswer(
  req: 提交答案请求对象
): Promise<ApiResponse<提交答案返回对象>> {
  return axios.post<any, ApiResponse<提交答案返回对象>>(
    `/ess-tiku-api/zxx/exercise/submit-answer`,
    req
  )
}
export function zxxTopicAdd(req: 新增试题请求对象): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(`/ess-tiku-api/zxx/topic/add`, req)
}
export function zxxTopicCheck(req: 审核试题请求对象): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(`/ess-tiku-api/zxx/topic/check`, req)
}
export function zxxTopicDelete(req: 删除试题请求对象): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(`/ess-tiku-api/zxx/topic/delete`, req)
}
export function zxxTopicGet(id: number): Promise<ApiResponse<试题返回对象>> {
  return axios.get<any, ApiResponse<试题返回对象>>(
    `/ess-tiku-api/zxx/topic/get?id=${id}`
  )
}
export function zxxTopicList(
  req: 试题列表请求对象
): Promise<ApiPageResponse<试题返回对象>> {
  return axios.post<any, ApiPageResponse<试题返回对象>>(
    `/ess-tiku-api/zxx/topic/list`,
    req
  )
}
export function zxxTopicMove(req: 移动试题请求对象): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(`/ess-tiku-api/zxx/topic/move`, req)
}
export function zxxTopicUpdate(req: 更新试题请求对象): Promise<ApiResponse> {
  return axios.post<any, ApiResponse>(`/ess-tiku-api/zxx/topic/update`, req)
}
export interface ApiResponse<T = any> {
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
