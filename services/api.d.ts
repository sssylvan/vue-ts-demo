
      type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
        [key in Key]: Value;
      }

      

      
      declare namespace defs {
      
        export class AdditionalTopicRequestObject {
      
      /** 是否启用，0=未启用，1=已启用 */
      isEnable?: number;

      /** 题型名称 */
      name?: string;
    }
    
      

        export class AliCloudUploadResponseObject {
      
      /** 文件名 */
      name?: string;

      /** 阿里云文件上传路径，bucket的相对路径 */
      path?: string;

      /** 文件名后缀 */
      postfix?: string;

      /** 文件大小 */
      size?: number;

      /** 上传成功的返回url，外网可直接访问 */
      url?: string;
    }
    
      

        export class ApiPageResponse<T0 = any> {
        
      /** 响应码，200=成功，500=系统错误，401=未登录，403=无权限，404=未找到资源，601=入参校验异常，999=业务异常 */
      code?: number;

      /** 响应data */
      data?: Array<T0>;

      /** 附加的响应参数 */
      extraData?: object;

      /** 响应消息，如：操作成功 */
      message?: string;

      /** 总页数 */
      pages?: number;

      /** 系统ID(请求唯一标识) */
      sid?: string;

      /** 响应状态，code=200时值为true，非200时值为false */
      status?: boolean;

      /** 耗时，单位：毫秒 */
      time?: string;

      /** 总记录数量 */
      total?: number;
      }
      
      

        export class ChapterInfoBaseRsp {
      
      /** 章节版本id */
      chapterVersionId?: string;

      /** 考试domain */
      domain?: string;

      /** 章节id */
      id?: number;

      /** 层级 */
      level?: number;

      /** 章节名称 */
      name?: string;

      /** 父级id */
      parentId?: number;

      /** 排序 */
      sort?: number;

      /** 启用状态 */
      status?: number;

      /** 科目id */
      subjectId?: number;
    }
    
      

        export class ChapterInfoFrontRsp {
      
      /** 章节版本id */
      chapterVersionId?: string;

      /** 子章节 */
      childList?: Array<defs.ChapterInfoFrontRsp>;

      /** 考试domain */
      domain?: string;

      /** 用户做题数 */
      doneNum?: number;

      /** 章节id */
      id?: number;

      /** 知识点集合 */
      knowledgeInfoFrontRspList?: Array<defs.ChapterKnowledgeInfoFrontRsp>;

      /** 层级 */
      level?: number;

      /** 章节名称 */
      name?: string;

      /** 父级id */
      parentId?: number;

      /** 免费题数 */
      questionsFreeNum?: number;

      /** 试题数 */
      questionsNum?: number;

      /** 真题数 */
      questionsTrueNum?: number;

      /** 排序 */
      sort?: number;

      /** 启用状态 */
      status?: number;

      /** 科目id */
      subjectId?: number;
    }
    
      

        export class ChapterInfoFullReq {
      
      /** 科目id */
      subjectIds?: Array<number>;

      /** 版本id */
      versionIds?: Array<string>;
    }
    
      

        export class ChapterInfoReq {
      
      /** 科目id */
      subjectId?: number;

      /** 版本id */
      versionId?: string;
    }
    
      

        export class ChapterInfoRsp {
      
      /** 章节版本id */
      chapterVersionId?: string;

      /** 节集合 */
      childList?: Array<defs.ChapterInfoRsp>;

      /** 考试domain */
      domain?: string;

      /** 章节id */
      id?: number;

      /** 是否绑定课程（1：是 0：否） */
      isBindCourse?: number;

      /** 知识点集合 */
      knowledgeInfoRspList?: Array<defs.ChapterKnowledgeInfoRsp>;

      /** 层级 */
      level?: number;

      /** 章节名称 */
      name?: string;

      /** 父级id */
      parentId?: number;

      /** 收费题数 */
      questionsChargeNum?: number;

      /** 免费题数 */
      questionsFreeNum?: number;

      /** 章节总题数 */
      questionsNum?: number;

      /** 真题数 */
      questionsTrueNum?: number;

      /** 视频题数 */
      questionsVideoNum?: number;

      /** 排序 */
      sort?: number;

      /** 启用状态 */
      status?: number;

      /** 科目id */
      subjectId?: number;
    }
    
      

        export class ChapterKnowledgeBaseRsp {
      
      /** 章节id */
      chapterId?: number;

      /** 知识点内容 */
      content?: string;

      /** 知识点id */
      id?: number;

      /** 知识点名称 */
      name?: string;

      /** 材料页码 */
      pageNum?: string;

      /** 父id */
      parentId?: number;

      /** 大纲要求（1：熟悉，2：理解，3：掌握，4：理解，5：运用） */
      requirements?: number;

      /** 排序 */
      sort?: number;

      /** 状态 */
      status?: number;

      /** 科目id */
      subjectId?: number;
    }
    
      

        export class ChapterKnowledgeInfoFrontRsp {
      
      /** 章节id */
      chapterId?: number;

      /** 子知识点 */
      childList?: Array<defs.ChapterKnowledgeInfoFrontRsp>;

      /** 知识点内容 */
      content?: string;

      /** 用户做题数 */
      doneNum?: number;

      /** 知识点id */
      id?: number;

      /** 知识点名称 */
      name?: string;

      /** 材料页码 */
      pageNum?: string;

      /** 父id */
      parentId?: number;

      /** 免费题数 */
      questionsFreeNum?: number;

      /** 总题数 */
      questionsNum?: number;

      /** 真题数 */
      questionsTrueNum?: number;

      /** 大纲要求（1：熟悉，2：理解，3：掌握，4：理解，5：运用） */
      requirements?: number;

      /** 排序 */
      sort?: number;

      /** 状态 */
      status?: number;

      /** 科目id */
      subjectId?: number;
    }
    
      

        export class ChapterKnowledgeInfoRsp {
      
      /** 章节id */
      chapterId?: number;

      /** 子知识点集合 */
      childList?: Array<defs.ChapterKnowledgeInfoRsp>;

      /** 知识点内容 */
      content?: string;

      /** 知识点id */
      id?: number;

      /** 知识点名称 */
      name?: string;

      /** 材料页码 */
      pageNum?: string;

      /** 父id */
      parentId?: number;

      /** 收费题数 */
      questionsChargeNum?: number;

      /** 免费题数 */
      questionsFreeNum?: number;

      /** 总题数 */
      questionsNum?: number;

      /** 真题数 */
      questionsTrueNum?: number;

      /** 视频题数 */
      questionsVideoNum?: number;

      /** 大纲要求（1：熟悉，2：理解，3：掌握，4：理解，5：运用） */
      requirements?: number;

      /** 排序 */
      sort?: number;

      /** 状态 */
      status?: number;

      /** 科目id */
      subjectId?: number;
    }
    
      

        export class ChapterKnowledgeSaveReq {
      
      /** 章节id */
      chapterId?: number;

      /** 知识点内容 */
      content?: string;

      /** 知识点id */
      id?: number;

      /** 知识点名称 */
      name?: string;

      /** 材料页码 */
      pageNum?: string;

      /** 父id */
      parentId?: number;

      /** 大纲要求（1：熟悉，2：理解，3：掌握，4：理解，5：运用） */
      requirements?: number;

      /** 排序 */
      sort?: number;

      /** 状态 */
      status?: number;

      /** 科目id */
      subjectId?: number;
    }
    
      

        export class ChapterListQueryRequestObject {
      
      /** 站点（年级） */
      domain?: string;

      /** 科目ID */
      subjectId?: number;
    }
    
      

        export class ChapterMobileRequestObject {
      
      /** 章ID列表 */
      chapterIds?: Array<number>;

      /** 站点（年级） */
      domain?: string;

      /** 节ID列表 */
      sectionIds?: Array<number>;

      /** 科目ID */
      subjectId?: number;
    }
    
      

        export class ChapterQuestionRsp {
      
      /** 试题解析 */
      analysis?: string;

      /** 试题类型：>=5主观题，<5客观题 */
      baseQuestionType?: number;

      /** 章节ID */
      chapterId?: number;

      /** 试题内容 */
      content?: string;

      /** 站点 */
      domain?: string;

      /** 试卷ID */
      paperId?: number;

      /** 试题ID */
      questionId?: number;

      /** 分数 */
      score?: number;

      /** 排序 */
      sort?: number;

      /** 科目ID */
      subjectId?: number;

      /** 试题年份 */
      year?: number;
    }
    
      

        export class ChapterSaveReq {
      
      /** 章节版本id */
      chapterVersionId?: string;

      /** 考试domain */
      domain?: string;

      /** 章节id */
      id?: number;

      /** 层级 */
      level?: number;

      /** 章节名称 */
      name?: string;

      /** 父级id */
      parentId?: number;

      /** 排序 */
      sort?: number;

      /** 启用状态 */
      status?: number;

      /** 科目id */
      subjectId?: number;
    }
    
      

        export class ChapterVersionReq {
      
      /** areaId */
      areaId?: number;

      /** 考试domain */
      domain?: string;

      /** 主键id */
      id?: number;

      /** 知识点显示方式（0：显示父知识点 1：显示子知识点 2：显示父子知识点） */
      knowledgeShowType?: number;

      /** 版本名称 */
      name?: string;

      /** 版本状态 */
      status?: number;

      /** subjectId */
      subjectId?: number;
    }
    
      

        export class ChapterVersionRsp {
      
      /** 地区id */
      areaId?: number;

      /** 考试domain */
      domain?: string;

      /** 主键id */
      id?: number;

      /** 知识点显示方式（0：显示父知识点 1：显示子知识点 2：显示父子知识点） */
      knowledgeShowType?: number;

      /** 版本名称 */
      name?: string;

      /** 版本状态 */
      status?: number;

      /** 科目id */
      subjectId?: number;
    }
    
      

        export class CheckTheAnswerReturnObjects {
      
      /** 解析 */
      analysis?: string;

      /** 题目内容 */
      content?: string;

      /** 题目ID */
      id?: number;

      /** 是否需要作答（综合题不需要作答） */
      needAnswer?: boolean;

      /** 选项列表 */
      options?: Array<defs.SubjectOptionsReturnObjects>;

      /** 试卷类型 */
      paperType?: string;

      /** 答案状态，1=正确，2=错误，3=无须作答 */
      status?: number;

      /** 题型 */
      type?: string;
    }
    
      

        export class DailyExerciseDateRsp {
      
      /** 查询传值日期（2022-03-20） */
      data?: string;

      /** 日期（3月20日） */
      days?: string;

      /** 星期几 */
      weekDay?: string;
    }
    
      

        export class DailyExerciseFrontRsp {
      
      /** 平均正确率 */
      avgRightRate?: number;

      /** 练习次数 */
      count?: number;

      /** 练习日期 */
      date?: string;

      /** 考试domain */
      domain?: string;

      /** 连续练习天数 */
      exerciseDay?: number;

      /** 每日一练id */
      id?: number;

      /** 做题记录状态 */
      status?: number;

      /** 科目id */
      subjectId?: number;

      /** 科目名称 */
      subjectName?: string;

      /** 我的正确率 */
      userRightRate?: number;

      /** 做题编号 */
      ztNo?: string;
    }
    
      

        export class DeleteItemRequestObject {
      
      /** 试题ID列表 */
      ids?: Array<number>;
    }
    
      

        export class DoGetQuestionsRequestObject {
      
      /** 章节ID */
      chapterId?: number;

      /** 站点（年级） */
      domain?: string;

      /** 题目数量，默认：10 */
      limit?: number;

      /** 前一次做题的房间ID（错题重做时必传） */
      prevRoomId?: number;

      /** 科目ID */
      subjectId?: number;

      /** 取题类型，1=正常做题，2=错题重做 */
      type?: number;
    }
    
      

        export class DoGetQuestionsReturnObjects {
      
      /** 解析 */
      analysis?: string;

      /** 题目内容 */
      content?: string;

      /** 试题ID */
      id?: number;

      /** 是否需要作答（综合题不需要作答） */
      needAnswer?: boolean;

      /** 选项列表 */
      options?: Array<defs.SubjectOptionsReturnObjects>;

      /** 试卷类型 */
      paperType?: string;

      /** 做题房间ID */
      roomId?: number;

      /** 题型 */
      type?: string;

      /** 题型ID */
      typeId?: number;
    }
    
      

        export class ExamHighScoreReq {
      
      /** 站点domain */
      domain?: string;

      /** 高分值考点 */
      examKeyword?: string;

      /** 分页参数：第几页，默认1 */
      pageNo?: number;

      /** 分页参数：每页显示条数，默认10 */
      pageSize?: number;
    }
    
      

        export class ExamHighScoreRsp {
      
      /** 站点domain */
      domain?: string;

      /** 高分值考点 */
      examKeyword?: string;

      /** 主键 */
      id?: number;
    }
    
      

        export class ExamHighScoreSaveReq {
      
      /** 站点domain */
      domain?: string;

      /** 高分值考点 */
      examKeyword?: string;

      /** 主键 */
      id?: number;
    }
    
      

        export class ExamdaNewsEsReq {
      
      /** 内容 */
      content?: string;

      /** 考试 */
      domain?: string;

      /** id */
      id?: string;

      /** 分页参数：第几页，默认1 */
      pageNo?: number;

      /** 分页参数：每页显示条数，默认10 */
      pageSize?: number;
    }
    
      

        export class ExamdaNewsEsRsp {
      
      /** 内容 */
      content?: string;

      /** id */
      id?: string;

      /** 题目来源 */
      source?: string;

      /** 标题 */
      title?: string;
    }
    
      

        export class ExtractQuestionCardDataRsp {
      
      /** 是否已作答 */
      isAnswer?: number;

      /** 是否免费 */
      isFree?: number;

      /** 试题id */
      questionId?: number;

      /** 题序 */
      sort?: number;

      /** 答题状态（1：对 2：错 3：不全对） */
      status?: number;
    }
    
      

        export class ExtractQuestionCardReq {
      
      /** 是否只查看错误试题，不传查全部（1：是） */
      isWrong?: number;

      /** 记录编号 */
      ztNo?: string;
    }
    
      

        export class ExtractQuestionCardRsp {
      
      /** 试题集合 */
      questionCardDataRspList?: Array<defs.ExtractQuestionCardDataRsp>;

      /** 题数 */
      questionNum?: number;

      /** 题型名称 */
      ruleName?: string;

      /** 题型分数 */
      ruleScore?: number;

      /** 题型得分类型（1：单个试题 2：任意试题 3：不同试题 4：三选二） */
      ruleType?: number;
    }
    
      

        export class ExtractQuestionDataReq {
      
      /** 是否只查看错误试题，不传查全部（1：是） */
      isWrong?: number;

      /** 分页参数：第几页，默认1 */
      pageNo?: number;

      /** 分页参数：每页显示条数，默认10 */
      pageSize?: number;

      /** 题型id */
      ruleId?: number;

      /** 记录编号 */
      ztNo?: string;
    }
    
      

        export class ExtractQuestionDataRsp {
      
      /** 试题解析 */
      analysis?: string;

      /** 基础题型（1：单选题 2：多选题 3：不定项 4：判断题 7：简答/论述/问答） */
      baseQuestionType?: number;

      /** 子试题集合 */
      childQuestionData?: Array<defs.ExtractQuestionDataRsp>;

      /** 试题内容 */
      content?: string;

      /** 正确答案 */
      correctAnswer?: string;

      /** 试题id */
      id?: number;

      /** 是否免费 */
      isFree?: number;

      /** 连题关联的试题id */
      linkQuestionId?: number;

      /** 连题材料 */
      material?: string;

      /** 绑定的章节、知识点数据 */
      questionChapterRsp?: defs.QuestionChapterRsp;

      /** 试题选项集合 */
      questionOptionRspList?: Array<defs.ExtractQuestionOptionRsp>;

      /** 题序 */
      sort?: number;
    }
    
      

        export class ExtractQuestionOptionRsp {
      
      /** 选项内容 */
      content?: string;

      /** 选项id */
      id?: number;

      /** 是否正确答案 */
      isCorrectAnswer?: number;

      /** 试题id */
      questionId?: number;
    }
    
      

        export class ExtractQuestionPageMapRsp {
      
      /** 结束题序 */
      end?: number;

      /** 开始题序 */
      start?: number;

      /** 做题编号 */
      ztNo?: string;
    }
    
      

        export class ExtractQuestionPageRsp {
      
      /** 试题集合 */
      extractQuestionDataRspList?: Array<defs.ExtractQuestionDataRsp>;

      /** 分页页码导图 */
      mapRspList?: Array<defs.ExtractQuestionPageMapRsp>;

      /** 页数 */
      pages?: number;

      /** 试题数 */
      total?: number;
    }
    
      

        export class ExtractQuestionReq {
      
      /** 附加id */
      attachId?: number;

      /** 抽题方式（1：按章节抽题 2:按知识点抽题 3：未分章节知识点抽题 4：按题型抽题 5:按试卷抽题 6：学习计划任务抽题 7：按真题章节抽题 8：按真题知识点抽题 9：按真题题型抽题） */
      attachType?: number;

      /** 来源终端（0：其他 1：PC 2：Android 3：IOS 4：Wap 5：小程序） */
      client?: number;

      /** 考试domain */
      domain?: string;

      /** 是否重做 */
      isRedo?: number;

      /** 做题模式定义（1：练习模式 2：考试模式） */
      mode?: number;

      /** 业务id（章节id、知识点id、试卷id等） */
      objectId?: number;

      /** 科目id */
      subjectId?: number;

      /** 记录类型（1：模拟考试 2：历年真题 3：章节练习 4：每日一练 5：易错题 6：错题重做 7：收藏做题 8：学员专享 9：模考大赛 10：点题记录 100：学习计划） */
      type?: number;
    }
    
      

        export class ExtractQuestionSaveReq {
      
      /** 答案保存客户端(其他 = 0,PC = 1,Android = 2,IOS = 3,WebApp = 4) */
      client?: number;

      /** 是否移除做对错题（0：否 1：是） */
      isRemoveWrong?: number;

      /** 答案字符串(格式：试题ID[-]答案[-]用时) */
      postStr?: string;

      /** 做对几次删除 */
      rightCount?: number;

      /** 做题记录编号 */
      ztNo?: string;
    }
    
      

        export class ExtractQuestionSubmitReq {
      
      /** 提交客户端(其他 = 0,PC = 1,Android = 2,IOS = 3,WebApp = 4) */
      client?: number;

      /** 交卷状态（0：下次继续 1：已完成） */
      status?: number;

      /** 做题总用时 */
      time?: number;

      /** 做题编号 */
      ztNo?: string;
    }
    
      

        export class ExtractRedoQuestionReq {
      
      /** 来源终端（0：其他 1：PC 2：Android 3：IOS 4：Wap 5：小程序） */
      client?: number;

      /** 用户id */
      userId?: number;

      /** 做题编号 */
      ztNo?: string;
    }
    
      

        export class FavQuestionRemoveReq {
      
      /** 按章节id移除 */
      chapterIds?: Array<number>;

      /** 按试题id移除 */
      questionId?: number;

      /** 按试题题型移除 */
      questionTypes?: Array<number>;

      /** 按科目id移除（按科目、按题型必传） */
      subjectId?: number;
    }
    
      

        export class GetQuestionInfoMiniApiReq {
      
      /** 试题id */
      questionId?: number;
    }
    
      

        export class GetQuestionInfoMiniApiRsp {
      
      /** 试题考试domain */
      domain?: string;

      /** 试卷id */
      paperId?: number;

      /** 试卷名称 */
      paperName?: string;

      /** 试题id */
      questionId?: number;

      /** 试题科目中文名 */
      subjectCname?: string;

      /** 试题科目id */
      subjectId?: number;
    }
    
      

        export class HistoryDetailedRsp {
      
      /** allCount */
      allCount?: number;

      /** attachId */
      attachId?: number;

      /** attachType */
      attachType?: number;

      /** client */
      client?: number;

      /** createTime */
      createTime?: defs.Timestamp;

      /** domain */
      domain?: string;

      /** doneCount */
      doneCount?: number;

      /** 主键id */
      id?: number;

      /** incompleteCount */
      incompleteCount?: number;

      /** mode */
      mode?: number;

      /** objectId */
      objectId?: number;

      /** parentZtNo */
      parentZtNo?: string;

      /** rightCount */
      rightCount?: number;

      /** rightRate */
      rightRate?: number;

      /** rootZtNo */
      rootZtNo?: string;

      /** score */
      score?: number;

      /** status */
      status?: number;

      /** subjectId */
      subjectId?: number;

      /** title */
      title?: string;

      /** updateTime */
      updateTime?: defs.Timestamp;

      /** useTime */
      useTime?: number;

      /** userId */
      userId?: number;

      /** wrongCount */
      wrongCount?: number;

      /** ztNo */
      ztNo?: string;

      /** ztType */
      ztType?: number;
    }
    
      

        export class HistoryPageReq {
      
      /** 考试domain */
      domain?: string;

      /** 分页参数：第几页，默认1 */
      pageNo?: number;

      /** 分页参数：每页显示条数，默认10 */
      pageSize?: number;

      /** 科目id */
      subjectId?: number;

      /** 做题记录类型（1：模拟试卷 2：历年真题 3：章节练习 4：每日一练 5：易错题 6：错题重做 7：收藏做题 8：学员专享 9：模考大赛 10：点题记录 100：学习计划） */
      type?: number;
    }
    
      

        export class HistoryPageRsp {
      
      /** allCount */
      allCount?: number;

      /** attachId */
      attachId?: number;

      /** attachType */
      attachType?: number;

      /** client */
      client?: number;

      /** createTime */
      createTime?: defs.Timestamp;

      /** domain */
      domain?: string;

      /** doneCount */
      doneCount?: number;

      /** 主键id */
      id?: number;

      /** incompleteCount */
      incompleteCount?: number;

      /** mode */
      mode?: number;

      /** objectId */
      objectId?: number;

      /** parentZtNo */
      parentZtNo?: string;

      /** 重做记录集合 */
      redoHistoryList?: Array<defs.HistoryDetailedRsp>;

      /** rightCount */
      rightCount?: number;

      /** rightRate */
      rightRate?: number;

      /** rootZtNo */
      rootZtNo?: string;

      /** score */
      score?: number;

      /** status */
      status?: number;

      /** subjectId */
      subjectId?: number;

      /** title */
      title?: string;

      /** updateTime */
      updateTime?: defs.Timestamp;

      /** useTime */
      useTime?: number;

      /** userId */
      userId?: number;

      /** wrongCount */
      wrongCount?: number;

      /** ztNo */
      ztNo?: string;

      /** ztType */
      ztType?: number;
    }
    
      

        export class HistoryReportRsp {
      
      /** 收藏数 */
      favCount?: number;

      /** 记录数 */
      historyCount?: number;

      /** 笔记数 */
      noteCount?: number;

      /** 错题数 */
      wrongCount?: number;
    }
    
      

        export class IdsReq {
      
      /** ids */
      ids?: Array<number>;
    }
    
      

        export class IdsReq_1 {
      
      /** 业务id集合 */
      ids?: Array<number>;
    }
    
      

        export class ItemListRequestObject {
      
      /** 章节ID */
      chapterId?: number;

      /** 试题ID、试题内容 */
      content?: string;

      /** 站点（年级） */
      domain?: string;

      /** 是否审核，0=未审核，1=已审核 */
      isCheck?: number;

      /** 分页参数：第几页，默认1 */
      pageNo?: number;

      /** 分页参数：每页显示条数，默认10 */
      pageSize?: number;

      /** 科目ID */
      subjectId?: number;

      /** 题型ID */
      typeId?: number;
    }
    
      

        export class ItemReturnObjects {
      
      /** 解析 */
      analysis?: string;

      /** 答案列表 */
      answers?: string;

      /** 章节ID */
      chapterId?: number;

      /** 题目内容 */
      content?: string;

      /** 试题ID */
      id?: number;

      /** 是否审核，0=未审核，1=已审核 */
      isCheck?: number;

      /** 选项列表 */
      options?: Array<defs.SubjectOptionsReturnObjects>;

      /** 试卷类型 */
      paperType?: string;

      /** 题型 */
      type?: string;

      /** 题型ID */
      typeId?: number;

      /** 最近修改人 */
      updateBy?: string;

      /** 最近修改时间 */
      updateTime?: string;
    }
    
      

        export class ListQuestionProofLogMiniApiReq {
      
      /** 试题id */
      questionId?: Array<number>;
    }
    
      

        export class ListQuestionProofLogMiniApiRsp {
      
      /** 创建人(校对人用户名) */
      createBy?: string;

      /** 校对人真实姓名 */
      nickName?: string;

      /** 试题id */
      questionId?: number;
    }
    
      

        export class MobileTestRequestObject {
      
      /** 移动到的章节ID */
      chapterId?: number;

      /** 选中的试题ID列表 */
      ids?: Array<number>;
    }
    
      

        export class ModifyTheTopicRequestObject {
      
      /** 题型ID */
      id?: number;

      /** 是否启用，0=未启用，1=已启用 */
      isEnable?: number;

      /** 题型名称 */
      name?: string;

      /** 序列号 */
      seqNo?: number;
    }
    
      

        export class NetUpdatePdfReq {
      
      /** 试卷id */
      paperId?: number;

      /** 背题模式pdf生成地址 */
      pdfNotAnswerUrl?: string;

      /** pdf生成地址 */
      pdfUrl?: string;
    }
    
      

        export class NewChapterRequestObject {
      
      /** 站点（年级） */
      domain?: string;

      /** 站点（年级）名称 */
      domainName?: string;

      /** 父章节ID */
      parentId?: number;

      /** 科目ID */
      subjectId?: number;

      /** 科目名称 */
      subjectName?: string;

      /** 章节名称 */
      title?: string;
    }
    
      

        export class NewTestRequestObject {
      
      /** 解析 */
      analysis?: string;

      /** 章节ID */
      chapterId?: number;

      /** 题目内容 */
      content?: string;

      /** 选项列表 */
      options?: Array<defs.SubjectOptionsRequestObject>;

      /** 试卷类型，1=课后练习，默认：1 */
      paperType?: number;

      /** 题型ID */
      typeId?: number;
    }
    
      

        export class PaperAuditReq {
      
      /** 试卷id集合 */
      paperIds?: Array<number>;

      /** 状态（0：未审核 1：审核） */
      status?: number;
    }
    
      

        export class PaperBindChapterReq {
      
      /** 章节id */
      chapterId?: number;

      /** 知识点id */
      knowledgeId?: number;

      /** 试卷id集合 */
      paperIds?: Array<number>;
    }
    
      

        export class PaperBindProductReq {
      
      /** 试卷id集合 */
      paperIds?: Array<number>;

      /** 绑定的产品id（英文逗号分隔） */
      productIds?: string;
    }
    
      

        export class PaperBindProductRsp {
      
      /** 产品id */
      id?: number;

      /** 产品名称 */
      name?: string;
    }
    
      

        export class PaperCancelBindChapterReq {
      
      /** 试卷id集合 */
      paperIds?: Array<number>;

      /** 取消绑定类型（1：章节 2：知识点） */
      type?: number;
    }
    
      

        export class PaperCopyOrPasteReq {
      
      /** 试卷id */
      paperId?: number;

      /** 科目id */
      subjectId?: number;
    }
    
      

        export class PaperDeleteReq {
      
      /** 是否删除（0：否 1：是） */
      isDel?: number;

      /** 试卷id集合 */
      paperIds?: Array<number>;
    }
    
      

        export class PaperDetailedRsp {
      
      /** 地区id */
      areaId?: number;

      /** 考试domain */
      domain?: string;

      /** 考试时长 */
      examDuration?: number;

      /** 试卷说明 */
      explanation?: string;

      /** 试卷id */
      id?: number;

      /** 是否源试卷 */
      isSource?: number;

      /** 试卷名称 */
      name?: string;

      /** 题库绑定的产品 */
      paperBindProductRspList?: Array<defs.PaperBindProductRsp>;

      /** 试卷题型列表 */
      paperRuleRspList?: Array<defs.PaperRuleRsp>;

      /** 合格分数 */
      passScore?: number;

      /** 绑定的产品（字符串） */
      products?: string;

      /** 总分 */
      score?: number;

      /** 试卷状态（0：未审核 1：已审核） */
      status?: number;

      /** 科目id */
      subjectId?: number;

      /** 副标题 */
      subtitle?: string;

      /** 试卷类型 */
      type?: number;

      /** 试卷年份 */
      year?: number;
    }
    
      

        export class PaperFrontApiReq {
      
      /** 考试domain */
      domain?: number;

      /** 分页参数：第几页，默认1 */
      pageNo?: number;

      /** 分页参数：每页显示条数，默认10 */
      pageSize?: number;

      /** 试卷类型（2：真题卷，3：模拟试卷，4：模考大赛，10：学员专享，11：点题卷，12：收费章节，14：免费章节题，15：计划试卷，50：空试卷，51：源试卷，53：章节题（包含收费、免费），100：编辑估分卷，101：阶段测试卷） */
      paperType?: number;

      /** 科目id */
      subjectId?: number;
    }
    
      

        export class PaperFrontApiRsp {
      
      /** 创建时间 */
      createTime?: string;

      /** 考试domain */
      domain?: string;

      /** 考试时长 */
      examDuration?: number;

      /** 考试人数 */
      examNum?: number;

      /** 试卷id */
      id?: number;

      /** 是否学员专享试卷 */
      isPrivileged?: number;

      /** 试卷名称 */
      name?: string;

      /** 合格分数 */
      passScore?: number;

      /** 试卷试题数 */
      questionNum?: number;

      /** 审核时间 */
      reviewTime?: string;

      /** 总分 */
      score?: number;

      /** 做题记录状态 */
      status?: number;

      /** 科目id */
      subjectId?: number;

      /** 副标题 */
      subtitle?: string;

      /** 试卷类型（2：真题卷，3：模拟试卷，4：模考大赛，10：学员专享，11：点题卷，12：收费章节，14：免费章节题，15：计划试卷，50：空试卷，51：源试卷，53：章节题（包含收费、免费），100：编辑估分卷，101：阶段测试卷） */
      type?: number;

      /** 试卷类型名称 */
      typeName?: string;

      /** 试卷年份 */
      year?: number;

      /** 做题编号 */
      ztNo?: string;
    }
    
      

        export class PaperFrontDetailedRsp {
      
      /** 考试domain */
      domain?: string;

      /** 考试时长 */
      examDuration?: number;

      /** 考试人数 */
      examNum?: number;

      /** 试卷说明 */
      explanation?: string;

      /** 试卷id */
      id?: number;

      /** 试卷名称 */
      name?: string;

      /** 合格分数 */
      passScore?: number;

      /** 试卷题型集合 */
      ruleRspList?: Array<defs.PaperRuleRsp>;

      /** 总分 */
      score?: number;

      /** 做题记录状态 */
      status?: number;

      /** 科目id */
      subjectId?: number;

      /** 副标题 */
      subtitle?: string;

      /** 试卷类型（2：真题卷，3：模拟试卷，4：模考大赛，10：学员专享，11：点题卷，12：收费章节，14：免费章节题，15：计划试卷，50：空试卷，51：源试卷，53：章节题（包含收费、免费），100：编辑估分卷，101：阶段测试卷） */
      type?: number;

      /** 试卷年份 */
      year?: number;

      /** 做题编号 */
      ztNo?: string;
    }
    
      

        export class PaperGroupVolumeReq {
      
      /** 章节id集合 */
      chapterIds?: Array<number>;

      /** 组卷来源（1：试题年份 2：章节 3：试题id） */
      groupVolumeSource?: number;

      /** 是否保留原试题（不传则默认不保留原试题） */
      isRetain?: number;

      /** 试卷id */
      paperId?: number;

      /** 试卷题型试题 */
      paperRuleQuestionReqList?: Array<defs.PaperRuleQuestionReq>;

      /** 试卷类型（2：历年真题 3：模拟试卷 4：模考大赛 11：点题卷 12：免费章节题 14：收费章节题） */
      paperTypes?: Array<number>;

      /** 试题id */
      questionIds?: string;

      /** 试题年份集合 */
      questionYears?: Array<number>;

      /** 需抽源试卷id集合 */
      sourcePaperIds?: Array<number>;
    }
    
      

        export class PaperGroupVolumeRsp {
      
      /** 章节知识点列表 */
      chapterInfoRspList?: Array<defs.ChapterInfoRsp>;

      /** 试卷id */
      paperId?: number;

      /** 试卷名称 */
      paperName?: string;

      /** 源试卷集合 */
      paperSourceRspList?: Array<defs.PaperSourceRsp>;

      /** 试卷题型 */
      ruleQuestionNumRspList?: Array<defs.PaperRuleQuestionNumRsp>;
    }
    
      

        export class PaperInfoApiReq {
      
      /** 试卷类型（2：真题卷，3：模拟试卷，4：模考大赛，10：学员专享，11：点题卷，12：收费章节，14：免费章节题，15：计划试卷，50：空试卷，51：源试卷，53：章节题（包含收费、免费），100：编辑估分卷，101：阶段测试卷） */
      paperTypes?: Array<number>;

      /** 科目ids，多科目查询 */
      subjectIds?: Array<number>;

      /** 试卷年份 */
      year?: number;
    }
    
      

        export class PaperInfoApiRsp {
      
      /** 地区id */
      areaId?: number;

      /** 创建人 */
      createBy?: string;

      /** 创建时间 */
      createTime?: string;

      /** 考试domain */
      domain?: string;

      /** 考试时长 */
      examDuration?: number;

      /** 考试人数 */
      examNum?: number;

      /** 试卷说明 */
      explanation?: string;

      /** 试卷id */
      id?: number;

      /** 试卷是否删除 */
      isDel?: number;

      /** 是否买课才能做 */
      isPrivileged?: number;

      /** 是否计划试卷 */
      isSchedulePaper?: number;

      /** 是否源试卷 */
      isSource?: number;

      /** 试卷名称 */
      name?: string;

      /** 试卷分数是否设置错误(0：否 1：是) */
      paperScoreIsError?: number;

      /** 合格分数 */
      passScore?: number;

      /** pdf生成地址 */
      pdfNotAnswerUrl?: string;

      /** pdf生成地址 */
      pdfUrl?: string;

      /** 试卷试题数 */
      questionNum?: number;

      /** 关闭审核时间 */
      reviewCloseTime?: string;

      /** 审核时间 */
      reviewTime?: string;

      /** 总分 */
      score?: number;

      /** 试卷状态（0：未审核 1：已审核） */
      status?: number;

      /** 科目id */
      subjectId?: number;

      /** 副标题 */
      subtitle?: string;

      /** 试卷类型 */
      type?: number;

      /** 试卷类型名称 */
      typeName?: string;

      /** 试卷年份 */
      year?: number;
    }
    
      

        export class PaperInfoMiniApiReq {
      
      /** 试卷id */
      paperIds?: Array<number>;
    }
    
      

        export class PaperInfoMiniApiRsp {
      
      /** 试题id */
      id?: number;

      /** 试卷名称 */
      name?: string;
    }
    
      

        export class PaperInfoReq {
      
      /** 分页参数：第几页，默认1 */
      pageNo?: number;

      /** 分页参数：每页显示条数，默认10 */
      pageSize?: number;

      /** 试卷类型（2：真题卷，3：模拟试卷，4：模考大赛，10：学员专享，11：点题卷，12：收费章节，14：免费章节题，15：计划试卷，50：空试卷，51：源试卷，53：章节题（包含收费、免费），100：编辑估分卷，101：阶段测试卷） */
      paperType?: number;

      /** 搜索类型（1：试卷id，2：试卷名称，3：试题id，4：试题题干，5：试题选项） */
      searchKey?: number;

      /** 关键字 */
      searchVal?: string;

      /** 科目id */
      subjectId?: number;

      /** 科目ids，多科目查询 */
      subjectIds?: Array<number>;

      /** 试卷年份 */
      year?: number;
    }
    
      

        export class PaperInfoRsp {
      
      /** 地区id */
      areaId?: number;

      /** 创建人 */
      createBy?: string;

      /** 创建时间 */
      createTime?: string;

      /** 考试domain */
      domain?: string;

      /** 考试时长 */
      examDuration?: number;

      /** 考试人数 */
      examNum?: number;

      /** 试卷说明 */
      explanation?: string;

      /** 试卷id */
      id?: number;

      /** 试卷是否删除 */
      isDel?: number;

      /** 是否买课才能做 */
      isPrivileged?: number;

      /** 是否计划试卷 */
      isSchedulePaper?: number;

      /** 是否源试卷 */
      isSource?: number;

      /** 试卷名称 */
      name?: string;

      /** 试卷分数是否设置错误(0：否 1：是) */
      paperScoreIsError?: number;

      /** 合格分数 */
      passScore?: number;

      /** pdf生成地址 */
      pdfNotAnswerUrl?: string;

      /** pdf生成地址 */
      pdfUrl?: string;

      /** 试卷试题数 */
      questionNum?: number;

      /** 关闭审核时间 */
      reviewCloseTime?: string;

      /** 审核时间 */
      reviewTime?: string;

      /** 总分 */
      score?: number;

      /** 试卷状态（0：未审核 1：已审核） */
      status?: number;

      /** 科目id */
      subjectId?: number;

      /** 副标题 */
      subtitle?: string;

      /** 试卷类型 */
      type?: number;

      /** 试卷类型名称 */
      typeName?: string;

      /** 试卷年份 */
      year?: number;
    }
    
      

        export class PaperListReq {
      
      /** 试卷id集合 */
      paperIds?: Array<number>;
    }
    
      

        export class PaperQuestionRsp {
      
      /** 试卷id */
      id?: number;

      /** 试题id */
      questionId?: number;

      /** 试卷状态 */
      status?: number;

      /** 试卷类型名称 */
      typeName?: string;
    }
    
      

        export class PaperResetSortReq {
      
      /** 试卷id集合 */
      paperIds?: Array<number>;

      /** 重置方式（1：按题型排序 2：按章节排序） */
      way?: number;
    }
    
      

        export class PaperRuleQuestionNumRsp {
      
      /** 实际题数 */
      questionNum?: number;

      /** 题型id */
      ruleId?: number;

      /** 题型名称 */
      ruleName?: string;

      /** 题型设置题数 */
      ruleQuestionNum?: number;
    }
    
      

        export class PaperRuleQuestionReq {
      
      /** 题型试题 */
      questions?: string;

      /** 试卷题型id */
      ruleId?: number;
    }
    
      

        export class PaperRuleRsp {
      
      /** 基础题型类型 */
      baseQuestionType?: number;

      /** 题型说明 */
      explanation?: string;

      /** id */
      id?: number;

      /** 是否删除 */
      isDel?: number;

      /** 题型序号 */
      num?: number;

      /** 试卷id */
      paperId?: number;

      /** 父级id */
      parentId?: number;

      /** 题数 */
      questionNum?: number;

      /** 科目题型id */
      questionTypeId?: number;

      /** 科目题型名称 */
      questionTypeName?: string;

      /** 每题分值 */
      score?: number;

      /** 得分规则（0：无 1：错题扣分 2：少选得分） */
      scoringRules?: number;

      /** 规则分值 */
      scoringRulesScore?: number;

      /** 科目id */
      subjectId?: number;

      /** 题型规则类型（1：单个试题 2：任意试题 3：不同试题 4：三选二） */
      type?: number;
    }
    
      

        export class PaperRuleSaveReq {
      
      /** 主键id */
      id?: number;

      /** 题型序号 */
      num?: number;

      /** 试卷id */
      paperId?: number;

      /** 父级id */
      parentId?: number;

      /** 题数 */
      questionNum?: number;

      /** 题型id */
      questionTypeId?: number;

      /** 每题分值（规则类型为不同试题则传0） */
      score?: number;

      /** 得分规则（0：无 1：错题扣分 2：少选得分） */
      scoringRules?: number;

      /** 规则分值 */
      scoringRulesScore?: number;

      /** 题型规则类型（1：单个试题 2：任意试题 3：不同试题 4：三选二） */
      type?: number;
    }
    
      

        export class PaperSaveReq {
      
      /** 地区id */
      areaId?: number;

      /** 考试domain */
      domain?: string;

      /** 考试时长 */
      examDuration?: number;

      /** 试卷说明 */
      explanation?: string;

      /** 试卷id */
      id?: number;

      /** 是否源试卷 */
      isSource?: number;

      /** 试卷名称 */
      name?: string;

      /** 合格分数 */
      passScore?: number;

      /** 绑定的产品（字符串） */
      products?: string;

      /** 总分 */
      score?: number;

      /** 科目id */
      subjectId?: number;

      /** 副标题 */
      subtitle?: string;

      /** 试卷类型 */
      type?: number;

      /** 试卷年份 */
      year?: number;
    }
    
      

        export class PaperSourceRsp {
      
      /** 试卷id */
      paperId?: number;

      /** 试卷名称 */
      paperName?: string;

      /** 试题数 */
      questionNum?: number;
    }
    
      

        export class PaperSourceSiteReq {
      
      /** 是否源试卷 */
      isSource?: number;

      /** 试卷id集合 */
      paperIds?: Array<number>;
    }
    
      

        export class PaperYearReq {
      
      /** 站点 */
      domain?: string;

      /** 试卷类型（2：真题卷，3：模拟试卷，4：模考大赛，10：学员专享，11：点题卷，12：收费章节，14：免费章节题，15：计划试卷，50：空试卷，51：源试卷，53：章节题（包含收费、免费），100：编辑估分卷，101：阶段测试卷） */
      paperType?: number;

      /** 科目ID */
      subjectId?: number;
    }
    
      

        export class PictureUserRsp {
      
      /** 可使用次数 */
      availableNum?: number;

      /** 剩余使用次数 */
      remainTimes?: number;

      /** 已经使用次数 */
      usedTimes?: number;
    }
    
      

        export class QuestionAppletsSubReq {
      
      /** Appid */
      appId?: string;

      /** 是否订阅 */
      isSub?: number;

      /** openId */
      openId?: string;

      /** 用户id */
      userId?: number;
    }
    
      

        export class QuestionBindReq {
      
      /** 章节id */
      chapterId?: number;

      /** 知识点id */
      knowledgeId?: number;

      /** 试题id集合 */
      questionIds?: Array<number>;
    }
    
      

        export class QuestionCancelBindChapterReq {
      
      /** 试题id集合 */
      questionIds?: Array<number>;

      /** 取消绑定类型（1：章节 2：知识点） */
      type?: number;
    }
    
      

        export class QuestionChapterRsp {
      
      /** 章id */
      chapterId?: number;

      /** 章名称 */
      chapterName?: string;

      /** 章排序 */
      chapterSort?: number;

      /** 节id */
      childChapterId?: number;

      /** 节名称 */
      childChapterName?: string;

      /** 子知识点id */
      childKnowledgeId?: number;

      /** 子知识点名称 */
      childKnowledgeName?: string;

      /** 子知识点页码 */
      childPageNum?: string;

      /** 节排序 */
      childSort?: number;

      /** 父知识点id */
      knowledgeId?: number;

      /** 父知识点名称 */
      knowledgeName?: string;

      /** 父知识点页码 */
      pageNum?: string;

      /** 试题id */
      questionId?: number;

      /** 科目id */
      subjectId?: number;

      /** 版本名称 */
      versionName?: string;
    }
    
      

        export class QuestionDeleteReq {
      
      /** 是否删除 */
      isDel?: number;

      /** 试题id集合 */
      questionIds?: Array<number>;
    }
    
      

        export class QuestionDetailedReq {
      
      /** 试卷id */
      paperId?: number;

      /** 试题id */
      questionId?: number;
    }
    
      

        export class QuestionDetailedRsp {
      
      /** 试题解析 */
      analysis?: string;

      /** 视频vid */
      analysisVideo?: string;

      /** 基础题型类型 */
      baseQuestionType?: number;

      /** 书籍id */
      bookId?: number;

      /** 章节id */
      chapterId?: number;

      /** 试题内容 */
      content?: string;

      /** 试题正确选项 */
      correctOptionList?: Array<string>;

      /** 考试domain */
      domain?: string;

      /** 试题id */
      id?: number;

      /** 是否禁止纠错试题 */
      isCloseAsk?: number;

      /** 是否争议试题 */
      isDispute?: number;

      /** 是否标记 */
      isMark?: number;

      /** 知识点id */
      knowledgeId?: number;

      /** 连题材料 */
      linkQuestionContent?: string;

      /** 连题关联的试题id */
      linkQuestionId?: number;

      /** 选项个数 */
      optionsNum?: number;

      /** 试卷id */
      paperId?: number;

      /** 试卷名称 */
      paperName?: string;

      /** 试卷题型集合 */
      paperRuleRspList?: Array<defs.PaperRuleRsp>;

      /** 试卷状态（0：未审核 1：已审核） */
      paperStatus?: number;

      /** 试卷类型（2：真题卷，3：模拟试卷，4：模考大赛，10：学员专享，11：点题卷，12：收费章节，14：免费章节题，15：计划试卷，100：编辑估分卷，101：阶段测试卷） */
      paperType?: number;

      /** 绑定的章节、知识点数据 */
      questionChapterRsp?: defs.QuestionChapterRsp;

      /** 题型名称 */
      questionTypeName?: string;

      /** 题型id */
      ruleId?: number;

      /** 试题分数 */
      score?: number;

      /** 排序 */
      sort?: number;

      /** 科目id */
      subjectId?: number;

      /** 书籍扫描数据 */
      tikuBookInfoScanningRsp?: defs.TikuBookInfoScanningRsp;
    }
    
      

        export class QuestionExamTimeConfigRsp {
      
      /** 考试 */
      domain?: string;

      /** 考试时间 */
      examTime?: string;

      /** 主键id */
      id?: number;
    }
    
      

        export class QuestionExamTimeConfigSaveReq {
      
      /** 考试 */
      domain?: string;

      /** 考试时间 */
      examTime?: string;

      /** 主键id */
      id?: number;
    }
    
      

        export class QuestionInfoRepeatRsp {
      
      /** 章节id */
      chapterId?: number;

      /** 试题内容 */
      content?: string;

      /** 正确答案 */
      correctAnswer?: string;

      /** 创建人 */
      createBy?: string;

      /** 试题id */
      id?: number;

      /** 是否关闭答疑 */
      isCloseAsk?: number;

      /** 是否已删除 */
      isDel?: number;

      /** 是否争议试题 */
      isDispute?: number;

      /** 是否免费 */
      isFree?: number;

      /** 是否标记 */
      isMark?: number;

      /** 是否学员专享 */
      isPrivileged?: number;

      /** 是否真题 */
      isReal?: number;

      /** 知识点id */
      knowledgeId?: number;

      /** 连题关联的试题id */
      linkQuestionId?: number;

      /** 试卷id */
      paperId?: number;

      /** 试题绑定的试卷集合 */
      paperQuestionRspList?: Array<defs.PaperQuestionRsp>;

      /** 试卷状态 */
      paperStatus?: number;

      /** 试卷类型 */
      paperType?: number;

      /** 重复试题集合 */
      questionInfoRepeatList?: Array<defs.QuestionInfoRsp>;

      /** 题型名称 */
      questionTypeName?: string;

      /** 试卷题型id */
      ruleId?: number;

      /** 排序 */
      sort?: number;

      /** 试题审核状态（0：未审核 1:已审核 2：不完全正确） */
      status?: number;

      /** 科目id */
      subjectId?: number;

      /** 科目名称 */
      subjectName?: string;

      /** 最近更新时间 */
      updateTime?: string;
    }
    
      

        export class QuestionInfoReq {
      
      /** 基础题型 */
      baseQuestionType?: number;

      /** 章节id */
      chapterId?: number;

      /** 考试domain */
      domain?: string;

      /** 是否查看禁止纠错试题 */
      isCloseAsk?: number;

      /** 是否查看争议试题 */
      isDispute?: number;

      /** 是否查看标记试题 */
      isMark?: number;

      /** 是否使用sort排序（0：不使用 1：使用） */
      isSort?: number;

      /** 知识点id */
      knowledgeId?: number;

      /** 分页参数：第几页，默认1 */
      pageNo?: number;

      /** 分页参数：每页显示条数，默认10 */
      pageSize?: number;

      /** 试卷id */
      paperId?: number;

      /** 试卷题型id */
      ruleId?: number;

      /** 搜索类型（1：试卷id，2：试题id，3：试题题干，4：试题选项，5：试题解析，6：书籍id） */
      searchKey?: number;

      /** 关键字 */
      searchVal?: string;

      /** 试题状态（0：未审核 1：已审核） */
      status?: number;

      /** 科目id */
      subjectId?: number;
    }
    
      

        export class QuestionInfoRsp {
      
      /** 章节id */
      chapterId?: number;

      /** 试题内容 */
      content?: string;

      /** 正确答案 */
      correctAnswer?: string;

      /** 创建人 */
      createBy?: string;

      /** 试题id */
      id?: number;

      /** 是否关闭答疑 */
      isCloseAsk?: number;

      /** 是否已删除 */
      isDel?: number;

      /** 是否争议试题 */
      isDispute?: number;

      /** 是否免费 */
      isFree?: number;

      /** 是否标记 */
      isMark?: number;

      /** 是否学员专享 */
      isPrivileged?: number;

      /** 是否真题 */
      isReal?: number;

      /** 知识点id */
      knowledgeId?: number;

      /** 连题关联的试题id */
      linkQuestionId?: number;

      /** 试卷id */
      paperId?: number;

      /** 试题绑定的试卷集合 */
      paperQuestionRspList?: Array<defs.PaperQuestionRsp>;

      /** 试卷状态 */
      paperStatus?: number;

      /** 试卷类型 */
      paperType?: number;

      /** 题型名称 */
      questionTypeName?: string;

      /** 试卷题型id */
      ruleId?: number;

      /** 排序 */
      sort?: number;

      /** 试题审核状态（0：未审核 1:已审核 2：不完全正确） */
      status?: number;

      /** 科目id */
      subjectId?: number;

      /** 科目名称 */
      subjectName?: string;

      /** 最近更新时间 */
      updateTime?: string;
    }
    
      

        export class QuestionLevyListReq {
      
      /** 站点 */
      domain?: string;

      /** 科目id */
      subjectId?: number;
    }
    
      

        export class QuestionLevyListRsp {
      
      /** 考试站点 */
      domain?: string;

      /** 真题收集科目列表 */
      list?: Array<defs.QuestionLevySubjectRsp>;

      /** 考试名称 */
      siteName?: string;
    }
    
      

        export class QuestionLevyPageReq {
      
      /** 地区id null:全部 */
      areaId?: number;

      /** 站点 null：全部 */
      domain?: string;

      /** 结束时间 */
      endTime?: string;

      /** 排序类型 ascending 升序 descending降序 */
      orderByType?: string;

      /** 分页参数：第几页，默认1 */
      pageNo?: number;

      /** 分页参数：每页显示条数，默认10 */
      pageSize?: number;

      /** 父级站点 null：全部 */
      parentDomain?: string;

      /** 开始时间 */
      startTime?: string;

      /** 活动状态 null 全部 1 未上线 2进行中 3已下线 4未开启 */
      status?: number;

      /** 科目id null：全部 */
      subjectId?: number;
    }
    
      

        export class QuestionLevyPageRsp {
      
      /** 地区id */
      areaId?: number;

      /** 地区名称 */
      areaName?: string;

      /** 站点 */
      domain?: string;

      /** 结束时间 */
      endTime?: string;

      /** 考试批次 1上午 2下午 */
      examBatch?: number;

      /** 考试时间 */
      examTime?: string;

      /** 考试时间配置ids(后台用) */
      examTimeIds?: string;

      /** 考试时间配置列表(前台用) */
      examTimeList?: Array<defs.QuestionExamTimeConfigRsp>;

      /** 主键id */
      id?: number;

      /** 是否支持地区 1是 0否 */
      isArea?: number;

      /** 活动状态 1开启 0否 */
      isOpen?: number;

      /** 征集标题 */
      name?: string;

      /** 真题估分id */
      questionId?: number;

      /** 备注 */
      remark?: string;

      /** 考试名称 */
      siteName?: string;

      /** 排序 */
      sort?: number;

      /** 开始时间 */
      startTime?: string;

      /** 科目id */
      subjectId?: number;

      /** 题库名称 */
      subjectName?: string;

      /** 征集题量 */
      topicNum?: number;

      /** 已征集题量 */
      verifyNum?: number;
    }
    
      

        export class QuestionLevyReq {
      
      /** 地区id null 全国 */
      areaId?: number;

      /** 站点 */
      domain?: string;

      /** 结束时间 */
      endTime?: string;

      /** 考试批次 1上午 2下午 */
      examBatch?: number;

      /** 考试时间 */
      examTime?: string;

      /** 考试时间下拉列表 ,分割 */
      examTimeIds?: string;

      /** 主键id */
      id?: number;

      /** 是否支持地区 1是 0否 */
      isArea?: number;

      /** 活动状态 1开启 0否 */
      isOpen?: number;

      /** 征集标题 */
      name?: string;

      /** 真题估分id */
      questionId?: number;

      /** 备注 */
      remark?: string;

      /** 排序 */
      sort?: number;

      /** 开始时间 */
      startTime?: string;

      /** 科目id */
      subjectId?: number;

      /** 征集题量 */
      topicNum?: number;
    }
    
      

        export class QuestionLevyRsp {
      
      /** 地区id null 全国 */
      areaId?: number;

      /** 站点 */
      domain?: string;

      /** 结束时间 */
      endTime?: string;

      /** 考试批次 1上午 2下午 */
      examBatch?: number;

      /** 考试时间 */
      examTime?: string;

      /** 考试时间下拉列表 ,分割 */
      examTimeIds?: string;

      /** 主键id */
      id?: number;

      /** 是否支持地区 1是 0否 */
      isArea?: number;

      /** 活动状态 1开启 0否 */
      isOpen?: number;

      /** 征集标题 */
      name?: string;

      /** 真题估分id */
      questionId?: number;

      /** 备注 */
      remark?: string;

      /** 排序 */
      sort?: number;

      /** 开始时间 */
      startTime?: string;

      /** 科目id */
      subjectId?: number;

      /** 征集题量 */
      topicNum?: number;
    }
    
      

        export class QuestionLevySubjectRsp {
      
      /** 真题收集活动列表 */
      list?: Array<defs.QuestionLevyPageRsp>;

      /** 科目id */
      subjectId?: number;

      /** 科目名称 */
      subjectName?: string;
    }
    
      

        export class QuestionPreviewCardRsp {
      
      /** 试题id */
      id?: number;

      /** 试题是否有错误 */
      isError?: number;

      /** 题序 */
      sort?: number;
    }
    
      

        export class QuestionPreviewChapterRsp {
      
      /** 章节名称 */
      chapterName?: string;

      /** 题数 */
      count?: number;

      /** 题数占比 */
      proportion?: number;
    }
    
      

        export class QuestionPreviewDataRsp {
      
      /** 试题解析 */
      analysis?: string;

      /** 基础题型（1：单选题 2：多选题 3：不定项 4：判断题 7：简答/论述/问答） */
      baseQuestionType?: number;

      /** 章节id */
      chapterId?: number;

      /** 试题内容 */
      content?: string;

      /** 正确答案 */
      correctAnswer?: string;

      /** 试题id */
      id?: number;

      /** 是否绑定章节 */
      isBingChapter?: number;

      /** 是否校对 */
      isError?: number;

      /** 是否免费 */
      isFree?: number;

      /** 知识点id */
      knowledgeId?: number;

      /** 连题关联的试题id */
      linkQuestionId?: number;

      /** 试卷id */
      paperId?: number;

      /** 绑定的章节、知识点数据 */
      questionChapterRsp?: defs.QuestionChapterRsp;

      /** 试题选项集合 */
      questionOptionRspList?: Array<defs.QuestionPreviewOptionRsp>;

      /** 试题校对集合 */
      questionProofLogRspList?: Array<defs.QuestionProofLogRsp>;

      /** 题序 */
      sort?: number;
    }
    
      

        export class QuestionPreviewOptionRsp {
      
      /** 选项内容 */
      content?: string;

      /** 是否正确答案 */
      isCorrectAnswer?: number;
    }
    
      

        export class QuestionPreviewReq {
      
      /** 业务id（试卷id,章节id,知识点id） */
      objectId?: number;

      /** 选项卡id */
      ruleId?: number;

      /** 预览类型（1：章节 2：知识点 3：试卷） */
      type?: number;
    }
    
      

        export class QuestionPreviewRsp {
      
      /** 创建人 */
      createBy?: string;

      /** 创建时间 */
      createTime?: string;

      /** 试卷说明 */
      explanation?: string;

      /** 试卷是否审核 */
      isCheck?: number;

      /** 试卷年份 */
      paperYear?: number;

      /** 答题卡集合 */
      questionPreviewCardRspList?: Array<defs.QuestionPreviewCardRsp>;

      /** 试题集合 */
      questionPreviewDataRspList?: Array<defs.QuestionPreviewDataRsp>;

      /** 审核状态（1：已审核 0：未审核） */
      status?: number;

      /** 科目名称 */
      subjectName?: string;

      /** 标题 */
      title?: string;

      /** 章节版本 */
      versionName?: string;
    }
    
      

        export class QuestionPreviewRuleRsp {
      
      /** 题数 */
      count?: number;

      /** 题型说明 */
      explanation?: string;

      /** id */
      id?: number;

      /** 标题 */
      title?: string;
    }
    
      

        export class QuestionPreviewStatsReq {
      
      /** 业务id（试卷id,章节id,知识点id） */
      objectId?: number;

      /** 预览类型（1：章节 2：知识点 3：试卷） */
      type?: number;
    }
    
      

        export class QuestionPreviewStatsRsp {
      
      /** 试题预览章节分布 */
      previewChapterRspList?: Array<defs.QuestionPreviewChapterRsp>;

      /** 试题预览选项卡数据 */
      previewRuleRspList?: Array<defs.QuestionPreviewRuleRsp>;

      /** 科目id */
      subjectId?: number;
    }
    
      

        export class QuestionProofLogReq {
      
      /** 试题id */
      questionId?: number;

      /** 备注 */
      remark?: string;

      /** 校对结果（0：无错误 1：扫描错误 2：加题错误 3：题源错误） */
      results?: Array<number>;
    }
    
      

        export class QuestionProofLogRsp {
      
      /** 主键id */
      id?: number;

      /** 校对结果 */
      proofResult?: number;

      /** 试题 */
      questionId?: number;

      /** 备注 */
      remark?: string;
    }
    
      

        export class QuestionRelUpdReq {
      
      /** 试题id */
      questionId?: number;

      /** 关联id */
      relId?: number;

      /** 关联类型 */
      type?: number;

      /** 修改用户 */
      userName?: string;
    }
    
      

        export class QuestionRepeatReq {
      
      /** 章节id */
      chapterId?: number;

      /** 知识点id */
      knowledgeId?: number;

      /** 分页参数：第几页，默认1 */
      pageNo?: number;

      /** 分页参数：每页显示条数，默认10 */
      pageSize?: number;

      /** 试卷id集合，试卷测重使用 */
      paperIds?: Array<number>;

      /** 试卷类型集合 */
      paperTypes?: Array<number>;

      /** 试题id */
      questionId?: number;

      /** 测重类型（1：试题科目测重 2：试卷试题科目测重 3：章节试题科目测重 4：知识点试题科目测重） */
      repeatType?: number;

      /** 测重方式（1：试题题干测重 2：试题选项测重） */
      repeatWay?: number;
    }
    
      

        export class QuestionRuleConfigReq {
      
      /** 站点 */
      domain?: string;

      /** 主键id */
      id?: number;

      /** 二维码 */
      qrCode?: string;

      /** 真题规则 */
      questionRule?: string;

      /** 微信id收款用 */
      wechatId?: string;
    }
    
      

        export class QuestionRuleConfigRsp {
      
      /** 站点 */
      domain?: string;

      /** 主键id */
      id?: number;

      /** 二维码 */
      qrCode?: string;

      /** 真题规则 */
      questionRule?: string;

      /** 微信id收款用 */
      wechatId?: string;
    }
    
      

        export class QuestionSaveBatchReq {
      
      /** 加题数 */
      addQuestionCount?: number;

      /** 试题解析集合 */
      analysis?: Array<string>;

      /** 系统答案集合 */
      answers?: Array<string>;

      /** 书籍id */
      bookId?: number;

      /** 试题内容集合 */
      contents?: Array<string>;

      /** 考试domain */
      domain?: string;

      /** 试题选项集合 */
      options?: Array<string>;

      /** 选项个数 */
      optionsNum?: number;

      /** 试卷id */
      paperId?: number;

      /** 题型id */
      ruleId?: number;

      /** 科目id */
      subjectId?: number;
    }
    
      

        export class QuestionSaveReq {
      
      /** 试题解析 */
      analysis?: string;

      /** 视频vid */
      analysisVideo?: string;

      /** 系统答案 */
      answers?: string;

      /** 书籍id */
      bookId?: number;

      /** 章节id */
      chapterId?: number;

      /** 试题内容 */
      content?: string;

      /** 考试domain */
      domain?: string;

      /** 试题id */
      id?: number;

      /** 是否禁止纠错试题 */
      isCloseAsk?: number;

      /** 是否争议试题 */
      isDispute?: number;

      /** 是否标记 */
      isMark?: number;

      /** 知识点id */
      knowledgeId?: number;

      /** 连题关联的试题id */
      linkQuestionId?: number;

      /** 试题选项 */
      options?: string;

      /** 选项个数 */
      optionsNum?: number;

      /** 试卷id */
      paperId?: number;

      /** 题型id */
      ruleId?: number;

      /** score */
      score?: number;

      /** 题序 */
      sort?: number;

      /** 科目id */
      subjectId?: number;
    }
    
      

        export class QuestionStatsReq {
      
      /** 章节id */
      chapterId?: number;

      /** 考试domain */
      domain?: string;

      /** 知识点id */
      knowledgeId?: number;

      /** 试卷id */
      paperId?: number;

      /** 科目id */
      subjectId?: number;
    }
    
      

        export class QuestionStatsRsp {
      
      /** 免费试题数 */
      freeCount?: number;

      /** 章节或试卷id */
      id?: number;

      /** 章节或试卷名称 */
      name?: string;

      /** 题型试题数 */
      questionTypeRspList?: Array<defs.QuestionTypeRsp>;

      /** 真题数 */
      realCount?: number;

      /** 收费试题数 */
      vipCount?: number;
    }
    
      

        export class QuestionTypeRsp {
      
      /** 基础题型名称 */
      baseQuestionTypeName?: string;

      /** 实际试题数 */
      questionNum?: number;

      /** 题型id */
      ruleId?: number;

      /** 题型名称 */
      ruleName?: string;

      /** 题型试题数 */
      ruleQuestionNum?: number;
    }
    
      

        export class QuestionUpdateContentReq {
      
      /** 试题解析 */
      analysis?: string;

      /** 系统答案 */
      answers?: string;

      /** 试题内容 */
      content?: string;

      /** 试题id */
      id?: number;

      /** 试题选项 */
      options?: string;
    }
    
      

        export class QuestionUpdateReq {
      
      /** 是否免费（0：收费 1：免费 ）修改该属性再传值 */
      isFree?: number;

      /** 是否标记（0：取消标记 1：标记试题） */
      isMark?: number;

      /** 试题id集合 */
      questionIds?: Array<number>;

      /** 修改方式（1：连题id 2:状态 3：收费免费 7：标记试题） */
      updateWay?: number;
    }
    
      

        export class QuestionUploadRecordCountReq {
      
      /** 地区id */
      areaId?: number;

      /** 考试(null 全部) */
      domain?: string;

      /** 结束时间 */
      endTime?: string;

      /** 父级考试(null 全部) */
      parentDomain?: string;

      /** 开始时间 */
      startTime?: string;

      /** 审核状态 0未审核 1初审 2复审 3拒绝 4已打款 5未打款 */
      status?: number;

      /** 科目id(null 全部) */
      subjectId?: number;

      /** 年份 */
      year?: number;
    }
    
      

        export class QuestionUploadRecordCountRsp {
      
      /** 待打款金额 */
      expectedAmount?: number;

      /** 初审题量 */
      firstReviewNum?: number;

      /** 已打款总金额 */
      payAmount?: number;

      /** 拒绝次数 */
      refuseNum?: number;

      /** 复审题量 */
      reviewNum?: number;

      /** 提交人数 */
      submitNum?: number;
    }
    
      

        export class QuestionUploadRecordMyListReq {
      
      /** 考试 null全部 */
      domain?: string;

      /** 用户Id */
      userId?: number;
    }
    
      

        export class QuestionUploadRecordMyRsp {
      
      /** 地区名称 */
      areaName?: string;

      /** 提交时间 */
      createTime?: string;

      /** 考试 */
      domain?: string;

      /** 考试批次 1上午 2下午 null全部 */
      examBatch?: number;

      /** 考试时间 */
      examTime?: string;

      /** 预计金额 */
      expectedAmount?: number;

      /** 文件名称 */
      fileName?: string;

      /** 1图片 2其他文件 */
      fileType?: number;

      /** 文件url 图片是,分割 */
      fileUrls?: string;

      /** 初审题量 */
      firstReviewNum?: number;

      /** 真题收集记录id */
      id?: number;

      /** 是否打款 1是 0否 */
      isPay?: number;

      /** 是否订阅 1是 0否 */
      isSub?: number;

      /** 文件页数 */
      page?: number;

      /** 打款金额 */
      payAmount?: number;

      /** 打款截图 */
      payImg?: string;

      /** 记录id 如(I20225271500-55) */
      recordId?: string;

      /** 拒绝原因 */
      refuseMsg?: string;

      /** 采纳题量 */
      reviewNum?: number;

      /** 考试名称 */
      siteName?: string;

      /** 审核状态 0初审中 1复审中 2已采纳 3拒绝 4已复审 */
      status?: number;

      /** 科目id */
      subjectId?: number;

      /** 科目名称 */
      subjectName?: string;

      /** 用户名 */
      userName?: string;
    }
    
      

        export class QuestionUploadRecordPageReq {
      
      /** 地区id */
      areaId?: number;

      /** 考试(null 全部) */
      domain?: string;

      /** 结束时间 */
      endTime?: string;

      /** 试题id */
      id?: string;

      /** 真题收集id */
      levyId?: string;

      /** 排序字段 */
      orderByKey?: string;

      /** 排序类型 ascending 升序 descending降序 */
      orderByType?: string;

      /** 分页参数：第几页，默认1 */
      pageNo?: number;

      /** 分页参数：每页显示条数，默认10 */
      pageSize?: number;

      /** 父级考试(null 全部) */
      parentDomain?: string;

      /** 开始时间 */
      startTime?: string;

      /** 审核状态 0未审核 1初审 2复审 3拒绝 4已打款 5未打款 */
      status?: number;

      /** 科目id(null 全部) */
      subjectId?: number;

      /** 手机号 */
      tel?: string;

      /** 用户名 */
      userName?: string;

      /** 年份 */
      year?: number;
    }
    
      

        export class QuestionUploadRecordPageRsp {
      
      /** 地区名称 */
      areaName?: string;

      /** 创建时间 */
      createTime?: string;

      /** 考试 */
      domain?: string;

      /** 考试批次 1上午 2下午 null全部 */
      examBatch?: number;

      /** 考试时间 */
      examTime?: string;

      /** 预计金额 */
      expectedAmount?: number;

      /** 文件名称 */
      fileName?: string;

      /** 1图片 2其他文件 */
      fileType?: number;

      /** 文件url */
      fileUrls?: string;

      /** 初审数量 */
      firstReviewNum?: number;

      /** 真题收集记录id */
      id?: number;

      /** 是否打款 1是 0否 */
      isPay?: number;

      /** 真题收集id */
      levyId?: number;

      /** 真题收集名称 */
      levyName?: string;

      /** 打款金额 */
      payAmount?: number;

      /** 打款截图 */
      payImg?: string;

      /** 记录id 如(I20225271500-55) */
      recordId?: string;

      /** 拒绝原因 */
      refuseMsg?: string;

      /** 复审数量 */
      reviewNum?: number;

      /** 考试名称 */
      siteName?: string;

      /** 审核状态 0未审核 1初审通过 2复审通过 3拒绝 */
      status?: number;

      /** 科目id */
      subjectId?: number;

      /** 科目名称 */
      subjectName?: string;

      /** 手机号 */
      tel?: string;

      /** 用户名 */
      userName?: string;
    }
    
      

        export class QuestionUploadRecordPaySaveReq {
      
      /** 真题收集记录id */
      id?: number;

      /** 是否打款 1是 0否 */
      isPay?: number;

      /** 打款金额 */
      payAmount?: number;

      /** 打款截图 */
      payImg?: string;
    }
    
      

        export class QuestionUploadRecordReq {
      
      /** 考试 */
      domain?: string;

      /** 考试批次 1上午 2下午 null全部 */
      examBatch?: number;

      /** 考试时间 */
      examTime?: string;

      /** 文件名称 不是图片的时候传 */
      fileName?: string;

      /** 1图片 2其他文件 */
      fileType?: number;

      /** 文件url */
      fileUrls?: string;

      /** 真题收集活动id */
      levyId?: number;

      /** 科目id */
      subjectId?: number;

      /** 手机号 */
      tel?: string;

      /** 用户地区(英文名) 全国:null */
      userArea?: string;

      /** 用户Id */
      userId?: number;

      /** 用户名 */
      userName?: string;
    }
    
      

        export class QuestionUploadRecordSaveReq {
      
      /** 预计金额 默认0 */
      expectedAmount?: number;

      /** 初审通过数量 默认0 */
      firstReviewNum?: number;

      /** 上传记录id */
      id?: number;

      /** 拒绝原因 */
      refuseMsg?: string;

      /** 复审数量 默认0 */
      reviewNum?: number;

      /** 状态 1初审通过 2复审都通过 3拒绝 */
      status?: number;

      /** 审核总数量 默认0 */
      totalReviewNum?: number;
    }
    
      

        export class QuestionUploadRecordSimpleRsp {
      
      /** 地区名称 */
      areaName?: string;

      /** 考试 */
      domain?: string;

      /** 考试批次 1上午 2下午 null全部 */
      examBatch?: number;

      /** 考试时间 */
      examTime?: string;

      /** 预计金额 */
      expectedAmount?: number;

      /** 文件名称 */
      fileName?: string;

      /** 1图片 2其他文件 */
      fileType?: number;

      /** 文件url 图片是,分割 */
      fileUrls?: string;

      /** 初审数量 */
      firstReviewNum?: number;

      /** 真题收集记录id */
      id?: number;

      /** 是否打款 1是 0否 */
      isPay?: number;

      /** 文件页数 */
      page?: number;

      /** 打款金额 */
      payAmount?: number;

      /** 打款截图 */
      payImg?: string;

      /** 记录id 如(I20225271500-55) */
      recordId?: string;

      /** 拒绝原因 */
      refuseMsg?: string;

      /** 复审数量 */
      reviewNum?: number;

      /** 审核状态 0未审核 1初审通过 2复审通过 3拒绝 */
      status?: number;

      /** 审核总数量 默认0 */
      totalReviewNum?: number;

      /** 用户名 */
      userName?: string;
    }
    
      

        export class ReportTimeSlotNumRsp {
      
      /** domain */
      domain?: string;

      /** domainParent */
      domainParent?: string;

      /** failTotalNum */
      failTotalNum?: number;

      /** keywordSuccessRate */
      keywordSuccessRate?: string;

      /** moveNum */
      moveNum?: number;

      /** pictureFailNum */
      pictureFailNum?: number;

      /** pictureNum */
      pictureNum?: number;

      /** pictureSuccessRate */
      pictureSuccessRate?: string;

      /** searchSuccessRate */
      searchSuccessRate?: string;

      /** totalNum */
      totalNum?: number;

      /** wordFailNum */
      wordFailNum?: number;

      /** wordNum */
      wordNum?: number;
    }
    
      

        export class ReviewQuestionsRequestObject {
      
      /** 试题ID列表 */
      ids?: Array<number>;

      /** 是否审核，0=不审核，1=审核 */
      isCheck?: number;
    }
    
      

        export class SearchMoveReq {
      
      /** 考试 */
      domain?: string;

      /** 考试类别 */
      domainParent?: string;

      /** 主键id */
      id?: number;
    }
    
      

        export class SearchNumReportRsp {
      
      /** name */
      cname?: string;

      /** 考试 */
      domain?: string;

      /** 值 */
      integerList?: Array<number>;

      /** 计算总数 */
      totalNum?: number;
    }
    
      

        export class SearchRecordRsp {
      
      /** 日期 */
      date?: string;

      /** id */
      id?: number;

      /** 内容 */
      searchKeyInfo?: string;

      /** 搜索方式：1=拍照，2=文字 */
      searchWay?: number;
    }
    
      

        export class SearchReportDateRsp {
      
      /** 日期list */
      dateList?: Array<string>;

      /** 搜索记录 */
      searchNumReportRsp?: Array<defs.SearchNumReportRsp>;
    }
    
      

        export class SearchReportReq {
      
      /** 站点domain */
      domain?: string;

      /** domainParent */
      domainParent?: string;

      /** 月 */
      month?: string;

      /** 年 */
      year?: string;
    }
    
      

        export class SearchReportRsp {
      
      /** 考试name */
      cname?: string;

      /** 考试 */
      domain?: string;

      /** 明细 */
      slotNumRspList?: defs.ReportTimeSlotNumRsp;

      /** 搜题总数 */
      totalNum?: number;
    }
    
      

        export class SearchReportYearReq {
      
      /** 站点domain */
      domain?: string;

      /** domainParent */
      domainParent?: string;

      /** 年 */
      year?: string;
    }
    
      

        export class SearchReportYearRsp {
      
      /** 日期list */
      dateList?: Array<string>;

      /** 值 */
      tableList?: Array<Array<any>>;
    }
    
      

        export class SearchSubjectRecordReq {
      
      /** 开始时间 */
      beginTime?: string;

      /** 考试 */
      domain?: string;

      /** 父级考试 */
      domainParent?: string;

      /** 结束时间 */
      endTime?: string;

      /** 是否移动；1=是，2=否 */
      isMove?: number;

      /** 分页参数：第几页，默认1 */
      pageNo?: number;

      /** 分页参数：每页显示条数，默认10 */
      pageSize?: number;

      /** 搜索结果；1=成功，2=失败 */
      searchResult?: number;

      /** 搜索方式；1=拍照，2=文字 */
      searchWay?: number;

      /** 排序，asc:升序，desc降序 */
      sort?: string;

      /** 排序字段 */
      sortField?: string;
    }
    
      

        export class SearchSubjectRecordRsp {
      
      /** 创建时间 */
      createdTime?: string;

      /** 考试(old) */
      domain?: string;

      /** 考试类别(old) */
      domainParent?: string;

      /** 主键 */
      id?: number;

      /** 图片内容 */
      imageContent?: string;

      /** 是否移动；1=是，2=否 */
      isMove?: number;

      /** 月_日 */
      monthDay?: string;

      /** 图片地址或者文字 */
      searchKeyInfo?: string;

      /** 搜索结果；1=成功，2=失败 */
      searchResult?: number;

      /** 搜索方式；1=拍照，2=文字 */
      searchWay?: number;

      /** 来源 */
      source?: string;

      /** 用户名 */
      userName?: string;
    }
    
      

        export class SearchTimeConfigRsp {
      
      /** 主键 */
      id?: number;

      /** 拍照搜题总次数 */
      pictureMaxNum?: number;

      /** 每人每天拍照搜题次数 */
      userPictureMaxNum?: number;
    }
    
      

        export class SearchTimePartReq {
      
      /** 开始时间 */
      beginTime?: string;

      /** 站点domain */
      domain?: string;

      /** domainParent */
      domainParent?: string;

      /** 结束时间 */
      endTime?: string;
    }
    
      

        export class SectionListsTheQueryResponseObject {
      
      /** 子章节列表 */
      childrens?: Array<defs.SectionListsTheQueryResponseObject>;

      /** 章节ID */
      id?: number;

      /** 序号 */
      seqNo?: number;

      /** 章节名称 */
      title?: string;

      /** 试题数量 */
      topicCount?: number;
    }
    
      

        export class SiteExpandRsp {
      
      /** wap端cnzz地址 */
      cnzzMobileUrl?: string;

      /** pc端cnzz地址 */
      cnzzUrl?: string;

      /** 站点英文名 */
      domain?: string;

      /** 考试、考试分类图标地址 */
      iconUrl?: string;

      /** 主键id */
      id?: number;

      /** 是否APP显示 */
      isApp?: number;

      /** 是否开启小程序 */
      isApplets?: number;

      /** 是否题库兴趣标签 */
      isLabelFlag?: number;

      /** 是否推荐考试 */
      isRecommend?: number;

      /** 是否在课程显示 */
      isShowCourse?: number;

      /** 是否在题库显示 */
      isShowTiku?: number;

      /** 是否机构独享 */
      isUnion?: number;

      /** 课程推广domain */
      spreadDomain?: string;

      /** 题库展示名称 */
      tikuName?: string;
    }
    
      

        export class SiteInfoBaseRsp {
      
      /** 缩写名 */
      abbrName?: string;

      /** 考试集合 */
      childSiteInfoList?: Array<defs.SiteInfoBaseRsp>;

      /** 中文名 */
      cname?: string;

      /** 站点英文名 */
      domain?: string;

      /** id */
      id?: number;

      /** 父级id */
      parentId?: number;

      /** 排序 */
      sort?: number;

      /** 科目集合 */
      subjectBaseRspList?: Array<defs.TikuSubjectBaseRsp>;
    }
    
      

        export class SiteInfoMinRsp {
      
      /** 站点英文名 */
      domain?: string;

      /** id */
      id?: number;

      /** 中文名 */
      siteName?: string;
    }
    
      

        export class SiteInfoRsp {
      
      /** 缩写名 */
      abbrName?: string;

      /** 考试集合 */
      childSiteInfoList?: Array<defs.SiteInfoRsp>;

      /** 中文名 */
      cname?: string;

      /** 站点英文名 */
      domain?: string;

      /** 英文名 */
      ename?: string;

      /** id */
      id?: number;

      /** 是否开启保价服务：1=是，0=否 */
      isInsure?: number;

      /** 是否联盟常用：1=是 0=否 */
      isLmcommon?: number;

      /** 层级 */
      level?: number;

      /** 联盟类型：0=全部,1=普通机构，2=高级机构 */
      lmType?: number;

      /** 父站点domain */
      parentDomain?: string;

      /** 父级id */
      parentId?: number;

      /** 保利id */
      polyCid?: string;

      /** 考试分类domain */
      rootDomain?: string;

      /** 考试分类拓展数据 */
      siteExpandRsp?: defs.SiteExpandRsp;

      /** 排序 */
      sort?: number;
    }
    
      

        export class SubjectOptionsRequestObject {
      
      /** 选项文本内容（文本和图片传值二选一） */
      content?: string;

      /** 选项图片内容（文本和图片传值二选一） */
      image?: string;

      /** 是否正解，0=非正解，1=正解 */
      isRight?: number;
    }
    
      

        export class SubjectOptionsReturnObjects {
      
      /** 选项文本内容 */
      content?: string;

      /** 选项图片内容 */
      image?: string;

      /** 是否正解，0=非正解，1=正解 */
      isRight?: number;

      /** 选项ID */
      optionId?: number;

      /** 选项序号 */
      seqNo?: number;
    }
    
      

        export class SubmitTheAnswerReturnObjects {
      
      /** 正确率 */
      accuracy?: string;

      /** 当前题目是否正确，true为正确，false为错误。 */
      correct?: boolean;

      /** 每道题的答题情况 */
      topics?: Array<defs.TheAnswerIsCorrectReturnObjects>;
    }
    
      

        export class SubmitTheAnswerTheRequestObject {
      
      /** 答案选项ID列表（填空题或竖式计算题直接传用户提交的答案过来） */
      answers?: Array<string>;

      /** 是否最后一题 */
      last?: boolean;

      /** 房间ID */
      roomId?: number;

      /** 题目ID */
      topicId?: number;
    }
    
      

        export class TheAnswerIsCorrectReturnObjects {
      
      /** 答案状态，1=正确，2=错误，3=无须作答 */
      status?: number;

      /** 题目ID */
      topicId?: number;
    }
    
      

        export class TheRequestObjectUpdateChapters {
      
      /** 章节ID */
      id?: number;

      /** 章节名称 */
      title?: string;
    }
    
      

        export class TheResponseData<T0 = any> {
        
      /** 响应码，200=成功，500=系统错误，401=未登录，403=无权限，404=未找到资源，601=入参校验异常，999=业务异常 */
      code?: number;

      /** 响应data */
      data?: T0;

      /** 附加的响应参数 */
      extraData?: object;

      /** 响应消息，如：操作成功 */
      message?: string;

      /** 系统ID(请求唯一标识) */
      sid?: string;

      /** 响应状态，code=200时值为true，非200时值为false */
      status?: boolean;

      /** 耗时，单位：毫秒 */
      time?: string;
      }
      
      

        export class TikuBookInfoPageReq {
      
      /** domain */
      domain?: string;

      /** 结束时间 */
      endTime?: string;

      /** 分页参数：第几页，默认1 */
      pageNo?: number;

      /** 分页参数：每页显示条数，默认10 */
      pageSize?: number;

      /** 扫描时间筛选类型（1：扫描时间 2：购买时间） */
      scanTimeType?: number;

      /** 搜索类型（1：扫描人，2：加题人，3：书籍id，4：书籍名称） */
      searchKey?: number;

      /** 关键字 */
      searchVal?: string;

      /** 开始时间 */
      startTime?: string;
    }
    
      

        export class TikuBookInfoPageRsp {
      
      /** 加题人员 */
      createBy?: string;

      /** 扫描结束页 */
      endPageNum?: number;

      /** 扫描结束时间 */
      endTime?: string;

      /** 内容说明 */
      explanation?: string;

      /** 书籍id */
      id?: number;

      /** 书籍名称 */
      name?: string;

      /** 书籍页数 */
      pageNum?: number;

      /** 购买金额 */
      price?: number;

      /** 出版社 */
      publishingHouse?: string;

      /** 出版时间 */
      publishingTime?: string;

      /** 购买时间 */
      purchaseTime?: string;

      /** 实际加题数 */
      questionNum?: number;

      /** 扫描id */
      scanId?: number;

      /** 扫描量 */
      scanQuestionNum?: number;

      /** 扫描人 */
      scanUserName?: string;

      /** 扫描开始页 */
      startPageNum?: number;

      /** 扫描开始时间 */
      startTime?: string;
    }
    
      

        export class TikuBookInfoReq {
      
      /** 考试domain */
      domain?: string;

      /** 书籍id */
      id?: number;

      /** 月份 */
      month?: number;

      /** 分页参数：第几页，默认1 */
      pageNo?: number;

      /** 分页参数：每页显示条数，默认10 */
      pageSize?: number;

      /** 年份 */
      year?: number;
    }
    
      

        export class TikuBookInfoRsp {
      
      /** 扫描人集合 */
      bookScanningRspList?: Array<defs.TikuBookScanningRsp>;

      /** 考试domain */
      domain?: string;

      /** 说明 */
      explanation?: string;

      /** 书籍id */
      id?: number;

      /** 书籍全称 */
      name?: string;

      /** 书籍页数 */
      pageNum?: number;

      /** 价格 */
      price?: number;

      /** 出版社 */
      publishingHouse?: string;

      /** 出版日期 */
      publishingTime?: string;

      /** 购买时间 */
      purchaseTime?: string;

      /** 考试id */
      siteInfoId?: number;
    }
    
      

        export class TikuBookInfoSaveReq {
      
      /** 考试domain */
      domain?: string;

      /** 内容说明 */
      explanation?: string;

      /** 书籍id */
      id?: number;

      /** 书籍名称 */
      name?: string;

      /** 书籍页数 */
      pageNum?: number;

      /** 价格 */
      price?: number;

      /** 出版社 */
      publishingHouse?: string;

      /** 出版时间 */
      publishingTime?: string;

      /** 购买时间 */
      purchaseTime?: string;
    }
    
      

        export class TikuBookInfoScanningRsp {
      
      /** 书籍id */
      id?: number;

      /** 书籍全称 */
      name?: string;

      /** 扫描内容 */
      scanContent?: string;

      /** 扫描人 */
      scanUserName?: string;
    }
    
      

        export class TikuBookScanningRsp {
      
      /** 书籍id */
      bookId?: number;

      /** 扫描内容 */
      content?: string;

      /** 结束页码 */
      endPageNum?: number;

      /** 扫描结束日期 */
      endTime?: string;

      /** 主键id */
      id?: number;

      /** 扫描题量(页) */
      questionNum?: number;

      /** 起始页码 */
      startPageNum?: number;

      /** 扫描开始日期 */
      startTime?: string;

      /** 用户名 */
      userName?: string;
    }
    
      

        export class TikuBookScanningSaveReq {
      
      /** 书籍id */
      bookId?: number;

      /** 结束页码 */
      endPageNum?: number;

      /** 扫描结束时间 */
      endTime?: string;

      /** 扫描id */
      id?: number;

      /** 扫描量 */
      questionNum?: number;

      /** 起始页码 */
      startPageNum?: number;

      /** 扫描开始时间 */
      startTime?: string;

      /** 扫描人 */
      userName?: string;
    }
    
      

        export class TikuProductBuyRsp {
      
      /** 点题开启时间 */
      betStartTime?: string;

      /** 是否存在单科产品 */
      isSingleSubject?: number;

      /** 题库产品列表 */
      productFrontRspList?: Array<defs.TikuProductExpiresRsp>;

      /** 题库产品有效期列表 */
      productMonthRspList?: Array<defs.TikuProductMonthRsp>;

      /** 推荐产品月份 */
      surplusMonth?: number;
    }
    
      

        export class TikuProductExpiresRsp {
      
      /** 有效期 */
      expires?: number;

      /** 产品主键 */
      key?: string;

      /** 产品数 */
      productCount?: number;

      /** 产品集合 */
      productSubjectRspList?: Array<defs.TikuProductSubjectRsp>;

      /** 产品类型（1：单科 2：多科） */
      type?: number;
    }
    
      

        export class TikuProductFrontRsp {
      
      /** 考试domain */
      domain?: string;

      /** 产品id */
      id?: number;

      /** 产品名称 */
      name?: string;

      /** 最新价格 */
      newPrice?: number;

      /** 原始价格 */
      oldPrice?: number;

      /** 子产品数 */
      productCount?: number;

      /** 产品类型（1：多科 2：单科） */
      type?: number;

      /** 有效期（月） */
      validityPeriod?: number;
    }
    
      

        export class TikuProductInfoDetailedRsp {
      
      /** 购买人数 */
      buyNum?: number;

      /** 考试domain */
      domain?: string;

      /** 产品id */
      id?: number;

      /** 产品名称 */
      name?: string;

      /** 最新价格 */
      newPrice?: number;

      /** 原始价格 */
      oldPrice?: number;

      /** 续费价格 */
      renewalPrice?: number;

      /** 已选中单科产品集合 */
      singleProductIds?: Array<number>;

      /** 排序 */
      sort?: number;

      /** 产品状态（1：上架 0：下架） */
      status?: number;

      /** 科目id */
      subjectId?: number;

      /** 产品类型（1：单品 2：套餐） */
      type?: number;

      /** 修改时间 */
      updateTime?: string;

      /** 有效期（月） */
      validityPeriod?: number;
    }
    
      

        export class TikuProductInfoReq {
      
      /** 考试domain */
      domain?: string;

      /** 产品名称 */
      name?: string;

      /** 分页参数：第几页，默认1 */
      pageNo?: number;

      /** 分页参数：每页显示条数，默认10 */
      pageSize?: number;
    }
    
      

        export class TikuProductInfoRsp {
      
      /** 购买人数 */
      buyNum?: number;

      /** 考试domain */
      domain?: string;

      /** 产品id */
      id?: number;

      /** 产品名称 */
      name?: string;

      /** 最新价格 */
      newPrice?: number;

      /** 原始价格 */
      oldPrice?: number;

      /** 续费价格 */
      renewalPrice?: number;

      /** 排序 */
      sort?: number;

      /** 产品状态（1：上架 0：下架） */
      status?: number;

      /** 科目id */
      subjectId?: number;

      /** 产品类型（1：单品 2：套餐） */
      type?: number;

      /** 修改时间 */
      updateTime?: string;

      /** 有效期（月） */
      validityPeriod?: number;
    }
    
      

        export class TikuProductInfoSaveReq {
      
      /** 考试domain */
      domain?: string;

      /** 产品id */
      id?: number;

      /** 产品名称 */
      name?: string;

      /** 最新价格 */
      newPrice?: number;

      /** 原始价格 */
      oldPrice?: number;

      /** 续费价格 */
      renewalPrice?: number;

      /** 单科产品id集合 */
      singleProductIds?: Array<number>;

      /** 排序 */
      sort?: number;

      /** 产品状态（0：下架 1：上架） */
      status?: number;

      /** 科目id */
      subjectId?: number;

      /** 产品类型（1：单品 2：套餐） */
      type?: number;

      /** 有效期（月） */
      validityPeriod?: number;
    }
    
      

        export class TikuProductInfoSingleRsp {
      
      /** 产品id */
      id?: number;

      /** 产品名称 */
      name?: string;
    }
    
      

        export class TikuProductMiniInfoRsp {
      
      /** 答疑次数 */
      askCount?: number;

      /** 站点英文名称 */
      domain?: string;

      /** 主键 */
      id?: number;

      /** 科目id */
      subjectId?: number;
    }
    
      

        export class TikuProductMonthRsp {
      
      /** 每日金额 */
      dayPrice?: number;

      /** 有效期 */
      expires?: number;

      /** 产品主键 */
      key?: string;

      /** 最新价格 */
      newPrice?: number;

      /** 原始价格 */
      oldPrice?: number;

      /** 产品数 */
      productCount?: number;

      /** 产品类型（1：单科 2：多科） */
      type?: number;
    }
    
      

        export class TikuProductSubjectRsp {
      
      /** 题库产品集合 */
      productFrontRspList?: Array<defs.TikuProductFrontRsp>;

      /** 科目名称 */
      subjectName?: string;
    }
    
      

        export class TikuSubjectBaseRsp {
      
      /** 科目中文名 */
      cname?: string;

      /** 站点domain */
      domain?: string;

      /** 主键id */
      id?: number;

      /** 父级id */
      parentId?: number;
    }
    
      

        export class TikuSubjectQuestionTypeBaseRsp {
      
      /** 基础题型类型（ 1：单选题 2：多选题 3：不定项 4：判断题 5：标准填空 6：普通填空 7：简答/论述/问答） */
      baseQuestionType?: number;

      /** 基础题型名称 */
      baseQuestionTypeName?: string;
    }
    
      

        export class TikuSubjectQuestionTypeListRsp {
      
      /** 基础题型集合 */
      subjectQuestionTypeBaseRspList?: Array<defs.TikuSubjectQuestionTypeBaseRsp>;

      /** 基础题型下的科目题型集合 */
      subjectQuestionTypeRspList?: Array<defs.TikuSubjectQuestionTypeRsp>;
    }
    
      

        export class TikuSubjectQuestionTypePaperRsp {
      
      /** 基础题型类型（ 1：单选题 2：多选题 3：不定项 4：判断题 7：简答/论述/问答） */
      baseQuestionType?: number;

      /** 基础题型下的科目题型集合 */
      subjectQuestionTypeRspList?: Array<defs.TikuSubjectQuestionTypeRsp>;
    }
    
      

        export class TikuSubjectQuestionTypeReq {
      
      /** 基础题型（1：单选题 2：多选题 3：不定项 4：判断题 7：简答/论述/问答） */
      baseQuestionType?: number;

      /** 题型说明 */
      explanation?: string;

      /** id */
      id?: number;

      /** 是否下线 */
      isOffline?: number;

      /** 题型名称 */
      name?: string;

      /** 科目id */
      subjectId?: number;
    }
    
      

        export class TikuSubjectQuestionTypeRsp {
      
      /** 基础题型类型 */
      baseQuestionType?: number;

      /** 题型说明 */
      explanation?: string;

      /** id */
      id?: number;

      /** 是否下线（0：否 1：是） */
      isOffline?: number;

      /** 科目题型名称 */
      name?: string;

      /** 科目id */
      subjectId?: number;
    }
    
      

        export class TikuSubjectSpotTimeRsp {
      
      /** 点题结束时间 */
      endTime?: string;

      /** 点题设置id */
      id?: number;

      /** 点题开始时间 */
      startTime?: string;

      /** 科目id */
      subjectId?: number;
    }
    
      

        export class TikuSubjectSpotTimeSaveReq {
      
      /** 点题结束时间 */
      endTime?: string;

      /** 点题开始时间 */
      startTime?: string;

      /** 科目id */
      subjectId?: number;
    }
    
      

        export class Timestamp {
      
    }
    
      

        export class TopicListReturnObjects {
      
      /** 题型ID */
      id?: number;

      /** 题型名称 */
      name?: string;

      /** 序列号 */
      seqNo?: number;
    }
    
      

        export class UpdateConfigReq {
      
      /** 主键 */
      id?: number;

      /** 拍照搜题总次数 */
      pictureMaxNum?: number;

      /** 每人每天拍照搜题次数 */
      userPictureMaxNum?: number;
    }
    
      

        export class UpdateTestRequestObject {
      
      /** 解析 */
      analysis?: string;

      /** 章节ID */
      chapterId?: number;

      /** 题目内容 */
      content?: string;

      /** 试题ID */
      id?: number;

      /** 选项列表 */
      options?: Array<defs.SubjectOptionsRequestObject>;

      /** 题型ID */
      typeId?: number;
    }
    
      

        export class UserNoteInsertReq {
      
      /** 来源终端（0：其他 1：PC 2：Android 3：IOS 4：Wap 5：小程序） */
      client?: number;

      /** 笔记内容 */
      content?: string;

      /** 笔记id（修改笔记用） */
      id?: number;

      /** 试题id */
      questionId?: number;

      /** 回复id（回复笔记用） */
      replyId?: number;
    }
    
      

        export class UserWrongFavChapterRsp {
      
      /** 章节id */
      chapterId?: number;

      /** 章节名称 */
      chapterName?: string;

      /** 子章节集合 */
      childList?: Array<defs.UserWrongFavChapterRsp>;

      /** 错题数 */
      questionCount?: number;

      /** 错题知识点集合 */
      wrongKnowledgeRspList?: Array<defs.UserWrongKnowledgeRsp>;
    }
    
      

        export class UserWrongFavQuestionTypeRsp {
      
      /** 基础题型（1：单选题 2：多选题 3：不定项 4：判断题 6：填空题 7：简答/论述/问答） */
      baseQuestionType?: number;

      /** 错题数 */
      questionCount?: number;
    }
    
      

        export class UserWrongKnowledgeRsp {
      
      /** 子知识点集合 */
      childList?: Array<defs.UserWrongKnowledgeRsp>;

      /** 知识点id */
      knowledgeId?: number;

      /** 知识点名称 */
      knowledgeName?: string;

      /** 错题数 */
      questionCount?: number;
    }
    
      

        export class UserWrongStatsRsp {
      
      /** 新增错题数 */
      addCount?: number;

      /** 现有错题数 */
      currentCount?: number;

      /** 已删除错题数 */
      delCount?: number;

      /** 累计错题数 */
      totalCount?: number;
    }
    
      

        export class keywordSearchReq {
      
      /** 文字搜索内容 */
      content?: string;

      /** 考试 */
      domain?: string;

      /** 分页参数：第几页，默认1 */
      pageNo?: number;

      /** 分页参数：每页显示条数，默认10 */
      pageSize?: number;

      /** 来源；1=小程序 */
      source?: string;
    }
    
      
    }
    
    

      
      declare namespace API {
        
          /**
           * 【中小学题库】前端答题接口
           */
          export namespace  {
            
      /**
        * 获取题目
获取题目
        * /zxx/exercise/get-topics
        */
      export namespace getTopics {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<Array<defs.DoGetQuestionsReturnObjects>>

      export const init: Response;

      export function request(params: Params, body: defs.DoGetQuestionsRequestObject, options?: any): Promise<Response>;
    
      }
    

      /**
        * 查看答案解析
查看答案解析
        * /zxx/exercise/show-analysis
        */
      export namespace showAnalysis {
        
      export class Params {
      
      /** 答题房间ID */
      roomId: number;
    }
  

      export type Response = defs.TheResponseData<Array<defs.CheckTheAnswerReturnObjects>>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 提交答案
提交答案
        * /zxx/exercise/submit-answer
        */
      export namespace submitAnswer {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<defs.SubmitTheAnswerReturnObjects>

      export const init: Response;

      export function request(params: Params, body: defs.SubmitTheAnswerTheRequestObject, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 【中小学题库】章节接口
           */
          export namespace  {
            
      /**
        * 新增章节
新增章节
        * /zxx/chapter/add
        */
      export namespace add {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.NewChapterRequestObject, options?: any): Promise<Response>;
    
      }
    

      /**
        * 删除章节
删除章节
        * /zxx/chapter/delete
        */
      export namespace remove {
        
      export class Params {
      
      /** 章节ID */
      id: number;
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 根据ID获取章节
根据ID获取章节
        * /zxx/chapter/get
        */
      export namespace get {
        
      export class Params {
      
      /** 章节ID */
      id: number;
    }
  

      export type Response = defs.TheResponseData<defs.SectionListsTheQueryResponseObject>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 章节移动
章节移动
        * /zxx/chapter/move
        */
      export namespace move {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<Array<defs.SectionListsTheQueryResponseObject>>

      export const init: Response;

      export function request(params: Params, body: defs.ChapterMobileRequestObject, options?: any): Promise<Response>;
    
      }
    

      /**
        * 章节树形列表
章节树形列表
        * /zxx/chapter/tree
        */
      export namespace tree {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<Array<defs.SectionListsTheQueryResponseObject>>

      export const init: Response;

      export function request(params: Params, body: defs.ChapterListQueryRequestObject, options?: any): Promise<Response>;
    
      }
    

      /**
        * 修改章节
修改章节
        * /zxx/chapter/update
        */
      export namespace update {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.TheRequestObjectUpdateChapters, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 【中小学题库】试题接口
           */
          export namespace  {
            
      /**
        * 新增试题
新增试题
        * /zxx/topic/add
        */
      export namespace add {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.NewTestRequestObject, options?: any): Promise<Response>;
    
      }
    

      /**
        * 试题审核、不审核（支持批量）
试题审核、不审核（支持批量）
        * /zxx/topic/check
        */
      export namespace check {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.ReviewQuestionsRequestObject, options?: any): Promise<Response>;
    
      }
    

      /**
        * 删除试题（支持批量）
删除试题（支持批量）
        * /zxx/topic/delete
        */
      export namespace remove {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.DeleteItemRequestObject, options?: any): Promise<Response>;
    
      }
    

      /**
        * 根据ID获取试题
根据ID获取试题
        * /zxx/topic/get
        */
      export namespace get {
        
      export class Params {
      
      /** 试题ID */
      id: number;
    }
  

      export type Response = defs.TheResponseData<defs.ItemReturnObjects>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 试题列表
试题列表
        * /zxx/topic/list
        */
      export namespace list {
        
      export class Params {
      
    }
  

      export type Response = defs.ApiPageResponse<defs.ItemReturnObjects>

      export const init: Response;

      export function request(params: Params, body: defs.ItemListRequestObject, options?: any): Promise<Response>;
    
      }
    

      /**
        * 试题批量移动
试题批量移动
        * /zxx/topic/move
        */
      export namespace move {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.MobileTestRequestObject, options?: any): Promise<Response>;
    
      }
    

      /**
        * 修改试题
修改试题
        * /zxx/topic/update
        */
      export namespace update {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.UpdateTestRequestObject, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 【公用接口】题型接口
           */
          export namespace  {
            
      /**
        * 新增题型
新增题型
        * /base/topic-type/add
        */
      export namespace add {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.AdditionalTopicRequestObject, options?: any): Promise<Response>;
    
      }
    

      /**
        * 列表查询题型
列表查询题型
        * /base/topic-type/list
        */
      export namespace list {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<Array<defs.TopicListReturnObjects>>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 修改题型
修改题型
        * /base/topic-type/update
        */
      export namespace update {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.ModifyTheTopicRequestObject, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 【用户端使用】前端试题相关接口（抽题、保存答案等）
           */
          export namespace  {
            
      /**
        * 读取做题记录答题卡数据
        * /front/extract/card
        */
      export namespace selectCard {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<Array<defs.ExtractQuestionCardRsp>>

      export const init: Response;

      export function request(params: Params, body: defs.ExtractQuestionCardReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 读取做题记录试题（.net后台调用）
        * /front/extract/do/page
        */
      export namespace doPage {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<defs.ExtractQuestionPageRsp>

      export const init: Response;

      export function request(params: Params, body: defs.ExtractQuestionDataReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 抽题接口（.net后台调用）
        * /front/extract/do/questions
        */
      export namespace doExtractQuestions {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<string>

      export const init: Response;

      export function request(params: Params, body: defs.ExtractQuestionReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 读取做题记录试题
        * /front/extract/page
        */
      export namespace page {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<defs.ExtractQuestionPageRsp>

      export const init: Response;

      export function request(params: Params, body: defs.ExtractQuestionDataReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 抽题接口
        * /front/extract/questions
        */
      export namespace extractQuestions {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<string>

      export const init: Response;

      export function request(params: Params, body: defs.ExtractQuestionReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 做题记录重做接口
        * /front/extract/redo
        */
      export namespace redo {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<string>

      export const init: Response;

      export function request(params: Params, body: defs.ExtractRedoQuestionReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 保存答案
        * /front/extract/save
        */
      export namespace save {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.ExtractQuestionSaveReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 交卷
        * /front/extract/submit
        */
      export namespace submitPaper {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.ExtractQuestionSubmitReq, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 【用户端使用】每日一练相关接口
           */
          export namespace  {
            
      /**
        * 每日一练时间列表
        * /front/daily/date
        */
      export namespace selectDate {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<Array<defs.DailyExerciseDateRsp>>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 每日一练详细
        * /front/daily/detailed
        */
      export namespace selectByDate {
        
      export class Params {
      
      /** 每日一练日期 */
      date: string;
      /** 科目id */
      subjectId: number;
    }
  

      export type Response = defs.TheResponseData<defs.DailyExerciseFrontRsp>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 【用户端使用】用户做题报告
           */
          export namespace  {
            
      /**
        * 记录报告接口
        * /report/init
        */
      export namespace getHistoryReport {
        
      export class Params {
      
      /** 科目id */
      subjectId: number;
    }
  

      export type Response = defs.TheResponseData<defs.HistoryReportRsp>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 记录报告接口
        * /report/init
        */
      export namespace headInit {
        
      export class Params {
      
      /** 科目id */
      subjectId: number;
    }
  

      export type Response = defs.TheResponseData<defs.HistoryReportRsp>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 记录报告接口
        * /report/init
        */
      export namespace postInit {
        
      export class Params {
      
      /** 科目id */
      subjectId: number;
    }
  

      export type Response = defs.TheResponseData<defs.HistoryReportRsp>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 记录报告接口
        * /report/init
        */
      export namespace putInit {
        
      export class Params {
      
      /** 科目id */
      subjectId: number;
    }
  

      export type Response = defs.TheResponseData<defs.HistoryReportRsp>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 记录报告接口
        * /report/init
        */
      export namespace deleteInit {
        
      export class Params {
      
      /** 科目id */
      subjectId: number;
    }
  

      export type Response = defs.TheResponseData<defs.HistoryReportRsp>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 记录报告接口
        * /report/init
        */
      export namespace optionsInit {
        
      export class Params {
      
      /** 科目id */
      subjectId: number;
    }
  

      export type Response = defs.TheResponseData<defs.HistoryReportRsp>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 记录报告接口
        * /report/init
        */
      export namespace patchInit {
        
      export class Params {
      
      /** 科目id */
      subjectId: number;
    }
  

      export type Response = defs.TheResponseData<defs.HistoryReportRsp>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 【用户端使用】用户做题记录相关接口
           */
          export namespace  {
            
      /**
        * 用户做题记录列表
        * /front/history/page
        */
      export namespace page {
        
      export class Params {
      
    }
  

      export type Response = defs.ApiPageResponse<defs.HistoryPageRsp>

      export const init: Response;

      export function request(params: Params, body: defs.HistoryPageReq, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 【用户端使用】用户笔记相关接口
           */
          export namespace  {
            
      /**
        * 添加、修改笔记接口
        * /front/note/save
        */
      export namespace save {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.UserNoteInsertReq, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 【用户端使用】用户试题收藏相关接口
           */
          export namespace  {
            
      /**
        * 用户试题收藏按章节知识点展示接口
        * /front/fav/chapter-tree
        */
      export namespace selectChapterFav {
        
      export class Params {
      
      /** 科目id */
      subjectId: number;
    }
  

      export type Response = defs.TheResponseData<Array<defs.UserWrongFavChapterRsp>>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 添加试题收藏
        * /front/fav/insert
        */
      export namespace insert {
        
      export class Params {
      
      /** 试题id */
      questionId: number;
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 用户试题收藏按题型展示接口
        * /front/fav/question-type
        */
      export namespace questionTypeWrong {
        
      export class Params {
      
      /** 科目id */
      subjectId: number;
    }
  

      export type Response = defs.TheResponseData<Array<defs.UserWrongFavQuestionTypeRsp>>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 移除试题收藏
        * /front/fav/remove
        */
      export namespace remove {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.FavQuestionRemoveReq, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 【用户端使用】用户错题集相关接口
           */
          export namespace  {
            
      /**
        * 用户错题集按章节知识点展示接口
        * /front/wrong/chapter-tree
        */
      export namespace chapterWrong {
        
      export class Params {
      
      /** 是否真题（1：是 查真题必传，不传查全部） */
      isReal?: number;
      /** 科目id */
      subjectId: number;
    }
  

      export type Response = defs.TheResponseData<Array<defs.UserWrongFavChapterRsp>>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 用户错题集按题型展示接口
        * /front/wrong/question-type
        */
      export namespace questionTypeWrong {
        
      export class Params {
      
      /** 是否真题（1：是 查真题必传，不传查全部） */
      isReal?: number;
      /** 科目id */
      subjectId: number;
    }
  

      export type Response = defs.TheResponseData<Array<defs.UserWrongFavQuestionTypeRsp>>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 移除错题集接口
        * /front/wrong/remove
        */
      export namespace remove {
        
      export class Params {
      
      /** 科目id */
      subjectId: number;
    }
  

      export type Response = defs.TheResponseData<defs.UserWrongStatsRsp>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 用户错题统计接口
        * /front/wrong/stats
        */
      export namespace wrongStats {
        
      export class Params {
      
      /** 科目id */
      subjectId: number;
    }
  

      export type Response = defs.TheResponseData<defs.UserWrongStatsRsp>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 【用户端使用】章节练习相关接口
           */
          export namespace  {
            
      /**
        * 章节列表接口
        * /front/chapter/do/list
        */
      export namespace list {
        
      export class Params {
      
      /** subjectId */
      subjectId: number;
    }
  

      export type Response = defs.TheResponseData<Array<defs.ChapterInfoFrontRsp>>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 【用户端使用】试卷相关接口
           */
          export namespace  {
            
      /**
        * 试卷详情接口
        * /front/paper/detailed
        */
      export namespace detailed {
        
      export class Params {
      
      /** 试卷id */
      paperId: number;
    }
  

      export type Response = defs.TheResponseData<defs.PaperFrontDetailedRsp>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 试卷列表接口
        * /front/paper/page
        */
      export namespace page {
        
      export class Params {
      
    }
  

      export type Response = defs.ApiPageResponse<defs.PaperFrontApiRsp>

      export const init: Response;

      export function request(params: Params, body: defs.PaperFrontApiReq, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 【用户端使用】题库产品相关接口
           */
          export namespace  {
            
      /**
        * 题库产品购买页接口
        * /front/product/buy
        */
      export namespace productBuy {
        
      export class Params {
      
      /** 考试domain */
      domain: string;
      /** 科目id */
      subjectId?: number;
    }
  

      export type Response = defs.TheResponseData<defs.TikuProductBuyRsp>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 公共基础数据接口
           */
          export namespace  {
            
      /**
        * 获取题库考试分类、考试、科目集合
        * /tiku-base/tree-siteinfo
        */
      export namespace tikuSiteInfo {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<Array<defs.SiteInfoBaseRsp>>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 拍照搜题次数配置表
           */
          export namespace  {
            
      /**
        * 获取配置表数据
        * /searchTimeConfig/get
        */
      export namespace get {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<defs.SearchTimeConfigRsp>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 更新配置表数据
        * /searchTimeConfig/update
        */
      export namespace update {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<ObjectMap>

      export const init: Response;

      export function request(params: Params, body: defs.UpdateConfigReq, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 用户搜题记录
           */
          export namespace  {
            
      /**
        * 当天剩余拍照次数/天
当天剩余拍照次数/天
        * /searchSubjectRecord/do/getDayPictureCount
        */
      export namespace getDayPictureCount {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<defs.PictureUserRsp>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 导出-搜题记录列表
导出-搜题记录后台列表
        * /searchSubjectRecord/exportData
        */
      export namespace exportData {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<defs.AliCloudUploadResponseObject>

      export const init: Response;

      export function request(params: Params, body: defs.SearchSubjectRecordReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 按年查看搜索次数
按年查看搜索次数
        * /searchSubjectRecord/get-year-report
        */
      export namespace yearReport {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<defs.SearchReportYearRsp>

      export const init: Response;

      export function request(params: Params, body: defs.SearchReportYearReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 用户拍照次数/天
用户拍照次数/天
        * /searchSubjectRecord/getUserPictureCount
        */
      export namespace getUserPictureCount {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<defs.PictureUserRsp>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 移动考点
移动考点
        * /searchSubjectRecord/moveDomain
        */
      export namespace moveDomain {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<ObjectMap>

      export const init: Response;

      export function request(params: Params, body: defs.SearchMoveReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 文字-用户搜题
        * /searchSubjectRecord/search/keywordQuestions
        */
      export namespace keywordQuestions {
        
      export class Params {
      
    }
  

      export type Response = defs.ApiPageResponse<Array<defs.ExamdaNewsEsRsp>>

      export const init: Response;

      export function request(params: Params, body: defs.keywordSearchReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 图片-用户搜题
        * /searchSubjectRecord/searchQuestions
        */
      export namespace searchQuestions {
        
      export class Params {
      
      /** 文字搜索内容 */
      content?: string;
      /** 考试 */
      domain: string;
      /** 用户图片 */
      imageFile?: File;
      /** 分页参数：第几页，默认1 */
      pageNo: number;
      /** 分页参数：每页显示条数，默认10 */
      pageSize: number;
      /** 来源；1=小程序 */
      source: string;
    }
  

      export type Response = defs.ApiPageResponse<Array<defs.ExamdaNewsEsRsp>>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 根据id查询数据
根据id查询数据
        * /searchSubjectRecord/select/get
        */
      export namespace get {
        
      export class Params {
      
      /** id */
      id: number;
    }
  

      export type Response = defs.TheResponseData<Array<defs.ExamdaNewsEsRsp>>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 清空搜索
清空搜索
        * /searchSubjectRecord/select/keyword
        */
      export namespace removeKeyword {
        
      export class Params {
      
      /** domain */
      domain: string;
    }
  

      export type Response = defs.TheResponseData<Array<defs.SearchRecordRsp>>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 用户搜题记录
用户搜题记录
        * /searchSubjectRecord/select/record
        */
      export namespace searchRecord {
        
      export class Params {
      
      /** domain */
      domain: string;
    }
  

      export type Response = defs.TheResponseData<Array<defs.SearchRecordRsp>>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 按时间段查询搜索成功率
按时间段查询搜索成功率
        * /searchSubjectRecord/selectDataReport
        */
      export namespace selectDataReport {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<Array<defs.SearchReportRsp>>

      export const init: Response;

      export function request(params: Params, body: defs.SearchTimePartReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 搜题记录后台列表
搜题记录后台列表
        * /searchSubjectRecord/selectList
        */
      export namespace selectList {
        
      export class Params {
      
    }
  

      export type Response = defs.ApiPageResponse<defs.SearchSubjectRecordRsp>

      export const init: Response;

      export function request(params: Params, body: defs.SearchSubjectRecordReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 按月查看搜索次数
按月查看搜索次数
        * /searchSubjectRecord/selectNumReport
        */
      export namespace selectNumReport {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<defs.SearchReportDateRsp>

      export const init: Response;

      export function request(params: Params, body: defs.SearchReportReq, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 真题征集Api
           */
          export namespace  {
            
      /**
        * 真题收集删除(逻辑删除)
        * /question-levy/delete
        */
      export namespace remove {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<ObjectMap>

      export const init: Response;

      export function request(params: Params, body: defs.IdsReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 真题收集详情
        * /question-levy/get
        */
      export namespace get {
        
      export class Params {
      
      /** 真题收集id */
      id: number;
    }
  

      export type Response = defs.TheResponseData<defs.QuestionLevyRsp>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 根据科目id获取正在运行真题收集活动(前端)
        * /question-levy/get-subject
        */
      export namespace getBySubjectId {
        
      export class Params {
      
      /** subjectId */
      subjectId: number;
    }
  

      export type Response = defs.TheResponseData<ObjectMap<string, ObjectMap>>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 真题收集列表(后台)
        * /question-levy/list
        */
      export namespace list {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<Array<defs.QuestionLevyPageRsp>>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 获取正在运行真题收集活动列表(前端)
        * /question-levy/list-front
        */
      export namespace postListFront {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<Array<defs.QuestionLevyListRsp>>

      export const init: Response;

      export function request(params: Params, body: defs.QuestionLevyListReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 真题收集分页列表
        * /question-levy/page
        */
      export namespace page {
        
      export class Params {
      
    }
  

      export type Response = defs.ApiPageResponse<defs.QuestionLevyPageRsp>

      export const init: Response;

      export function request(params: Params, body: defs.QuestionLevyPageReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 真题收集活动保存/修改
        * /question-levy/save
        */
      export namespace save {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<ObjectMap>

      export const init: Response;

      export function request(params: Params, body: defs.QuestionLevyReq, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 真题收集上传记录表
           */
          export namespace  {
            
      /**
        * 真题上传记录数据统计
        * /question-upload-record/count
        */
      export namespace count {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<defs.QuestionUploadRecordCountRsp>

      export const init: Response;

      export function request(params: Params, body: defs.QuestionUploadRecordCountReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 真题上传记录数据统计删除
        * /question-upload-record/deleted
        */
      export namespace deleted {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<ObjectMap>

      export const init: Response;

      export function request(params: Params, body: defs.IdsReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 是否有上传记录(前端)
        * /question-upload-record/exist
        */
      export namespace exist {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<boolean>

      export const init: Response;

      export function request(params: Params, body: defs.QuestionUploadRecordMyListReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 查看试题
        * /question-upload-record/get
        */
      export namespace get {
        
      export class Params {
      
      /** 真题收集id */
      id: number;
    }
  

      export type Response = defs.TheResponseData<defs.QuestionUploadRecordSimpleRsp>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 我的真题上传记录列表(前端)
        * /question-upload-record/list-my
        */
      export namespace myList {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<Array<defs.QuestionUploadRecordMyRsp>>

      export const init: Response;

      export function request(params: Params, body: defs.QuestionUploadRecordMyListReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 真题收集上传记录分页列表(后台)
        * /question-upload-record/page
        */
      export namespace page {
        
      export class Params {
      
    }
  

      export type Response = defs.ApiPageResponse<defs.QuestionUploadRecordPageRsp>

      export const init: Response;

      export function request(params: Params, body: defs.QuestionUploadRecordPageReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 真题上传记录审核保存/修改(后台)
        * /question-upload-record/save
        */
      export namespace save {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<ObjectMap>

      export const init: Response;

      export function request(params: Params, body: defs.QuestionUploadRecordSaveReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 打款记录保存/修改(后台)
        * /question-upload-record/save-pay
        */
      export namespace savePay {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<ObjectMap>

      export const init: Response;

      export function request(params: Params, body: defs.QuestionUploadRecordPaySaveReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 真题上传记录上传(前端)
        * /question-upload-record/save-record
        */
      export namespace saveRecord {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<ObjectMap>

      export const init: Response;

      export function request(params: Params, body: defs.QuestionUploadRecordReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 订阅通知(前端)
        * /question-upload-record/subscribe
        */
      export namespace subscribe {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<ObjectMap>

      export const init: Response;

      export function request(params: Params, body: defs.QuestionAppletsSubReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 顶部分类列表(前端)
        * /question-upload-record/top-list
        */
      export namespace topList {
        
      export class Params {
      
      /** 用户id */
      userId: number;
    }
  

      export type Response = defs.TheResponseData<Array<defs.SiteInfoMinRsp>>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 真题收集考试时间下拉配置
           */
          export namespace  {
            
      /**
        * 删除真题收集考试时间下拉配置
        * /question-exam-time-config/del
        */
      export namespace del {
        
      export class Params {
      
      /** id */
      id: number;
    }
  

      export type Response = defs.TheResponseData<ObjectMap>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 获取真题收集考试时间下拉配置
        * /question-exam-time-config/list
        */
      export namespace get {
        
      export class Params {
      
      /** domain */
      domain: string;
    }
  

      export type Response = defs.TheResponseData<Array<defs.QuestionExamTimeConfigRsp>>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 真题收集考试时间下拉配置保存/修改
        * /question-exam-time-config/save
        */
      export namespace save {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<ObjectMap>

      export const init: Response;

      export function request(params: Params, body: defs.QuestionExamTimeConfigSaveReq, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 真题收集规则配置
           */
          export namespace  {
            
      /**
        * 删除拒绝原因配置
        * /question-rule-config/del-refuse-msg
        */
      export namespace delRefuseMsg {
        
      export class Params {
      
      /** msg */
      msg: string;
    }
  

      export type Response = defs.TheResponseData<ObjectMap>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 获取真题收集规则配置
        * /question-rule-config/get
        */
      export namespace get {
        
      export class Params {
      
      /** domain */
      domain: string;
    }
  

      export type Response = defs.TheResponseData<defs.QuestionRuleConfigRsp>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 获取拒绝原因配置
        * /question-rule-config/get-refuse-msg
        */
      export namespace getRefuseMsg {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<Array<string>>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 真题收集规则配置保存/修改
        * /question-rule-config/save
        */
      export namespace save {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<ObjectMap>

      export const init: Response;

      export function request(params: Params, body: defs.QuestionRuleConfigReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 添加拒绝原因配置
        * /question-rule-config/save-refuse-msg
        */
      export namespace addRefuseMsg {
        
      export class Params {
      
      /** msg */
      msg: string;
    }
  

      export type Response = defs.TheResponseData<ObjectMap>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 科目题型相关接口
           */
          export namespace  {
            
      /**
        * 获取科目基础题型分类以及科目题型集合
        * /question-type/list
        */
      export namespace selectBySubjectId {
        
      export class Params {
      
      /** 科目id */
      subjectId: number;
    }
  

      export type Response = defs.TheResponseData<defs.TikuSubjectQuestionTypeListRsp>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 保存、修改科目题型
        * /question-type/save
        */
      export namespace save {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<defs.TikuSubjectQuestionTypeListRsp>

      export const init: Response;

      export function request(params: Params, body: defs.TikuSubjectQuestionTypeReq, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 考试分类管理
           */
          export namespace  {
            
      /**
        * 获取考试分类数据
        * /siteinfo/tree
        */
      export namespace tree {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<Array<defs.SiteInfoRsp>>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 考试科目点题时间相关接口
           */
          export namespace  {
            
      /**
        * 查询科目点题时间
        * /spot-time/model
        */
      export namespace modelBySubjectId {
        
      export class Params {
      
      /** 科目id */
      subjectId: number;
    }
  

      export type Response = defs.TheResponseData<defs.TikuSubjectSpotTimeRsp>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 保存科目点题时间设置
        * /spot-time/save
        */
      export namespace save {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.TikuSubjectSpotTimeSaveReq, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 试卷业务相关接口
           */
          export namespace  {
            
      /**
        * 审核/未审核试卷状态
        * /paper/audit-paper
        */
      export namespace auditPaper {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.PaperAuditReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 批量绑定章节、知识点
        * /paper/batch-bind-chapter
        */
      export namespace bindChapterOrKnow {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.PaperBindChapterReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 批量绑定课程产品
        * /paper/batch-bind-product
        */
      export namespace batchBindProduct {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.PaperBindProductReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 设置、取消源试卷
        * /paper/batch-update-source
        */
      export namespace updateIsSource {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.PaperSourceSiteReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 取消试卷试题章节、知识点绑定
        * /paper/cancel-bind-chapter
        */
      export namespace cancelBindChapterOrKnow {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.PaperCancelBindChapterReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 批量解除课程产品绑定
        * /paper/cancel-bind-product
        */
      export namespace cancelBindProduct {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.PaperListReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 批量取消校对标记
        * /paper/close-proof
        */
      export namespace closeProof {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.PaperListReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 试卷复制、粘贴
        * /paper/copy-paste
        */
      export namespace copyOrPaste {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.PaperCopyOrPasteReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 删除或撤销删除试卷
        * /paper/delete-revoke
        */
      export namespace deleteOrRevoke {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.PaperDeleteReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 试卷详情接口
        * /paper/detailed
        */
      export namespace detailed {
        
      export class Params {
      
      /** 试卷id */
      paperId: number;
    }
  

      export type Response = defs.TheResponseData<defs.PaperDetailedRsp>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * .net同步试卷pdf地址
        * /paper/do/net-update-pdf
        */
      export namespace netUpdatePdf {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.NetUpdatePdfReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 获取科目考试时间
        * /paper/exam-duration
        */
      export namespace selectExamDuration {
        
      export class Params {
      
      /** 科目id */
      subjectId: number;
    }
  

      export type Response = defs.TheResponseData<number>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 抽题组卷保存接口
        * /paper/group-volume/save
        */
      export namespace groupVolume {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.PaperGroupVolumeReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 抽题组卷数据展示接口
        * /paper/group-volume/view
        */
      export namespace groupVolumeView {
        
      export class Params {
      
      /** 试卷id */
      paperId: number;
    }
  

      export type Response = defs.TheResponseData<defs.PaperGroupVolumeRsp>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 获取试卷列表
        * /paper/list
        */
      export namespace list {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<Array<defs.PaperInfoApiRsp>>

      export const init: Response;

      export function request(params: Params, body: defs.PaperInfoApiReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 根据试卷id取试卷信息
根据试卷id取试卷信息
        * /paper/list-mini
        */
      export namespace listMini {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<Array<defs.PaperInfoMiniApiRsp>>

      export const init: Response;

      export function request(params: Params, body: defs.PaperInfoMiniApiReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 获取站点下试卷的年份列表
        * /paper/list-paper-years
        */
      export namespace listPaperYears {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<Array<number>>

      export const init: Response;

      export function request(params: Params, body: defs.PaperYearReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 分页获取试卷列表
        * /paper/page
        */
      export namespace page {
        
      export class Params {
      
    }
  

      export type Response = defs.ApiPageResponse<defs.PaperInfoRsp>

      export const init: Response;

      export function request(params: Params, body: defs.PaperInfoReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 生成试卷pdf
        * /paper/pdf/push
        */
      export namespace pushToPdfQueue {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.PaperListReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 获取科目基础题型
        * /paper/question-type
        */
      export namespace selectSubjectQuestionType {
        
      export class Params {
      
      /** 科目id */
      subjectId: number;
    }
  

      export type Response = defs.TheResponseData<Array<defs.TikuSubjectQuestionTypePaperRsp>>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 重置试卷题序
        * /paper/reset-sort
        */
      export namespace resetSort {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.PaperResetSortReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 删除试卷题型
        * /paper/rule/delete
        */
      export namespace deleteRules {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.IdsReq_1, options?: any): Promise<Response>;
    
      }
    

      /**
        * 保存试卷题型
        * /paper/rule/save
        */
      export namespace saveRule {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.PaperRuleSaveReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 试卷题型
        * /paper/rules
        */
      export namespace selectRules {
        
      export class Params {
      
      /** 试卷id */
      paperId: number;
    }
  

      export type Response = defs.TheResponseData<Array<defs.PaperRuleRsp>>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 保存试卷
        * /paper/save
        */
      export namespace savePaper {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.PaperSaveReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 保存科目考试时间
        * /paper/save-exam-duration
        */
      export namespace saveExamDuration {
        
      export class Params {
      
      /** 考试时长 */
      examDuration: number;
      /** 科目id */
      subjectId: number;
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 试题相关接口
           */
          export namespace  {
            
      /**
        * 关联试题章节或知识点
        * /question/bind-chapter
        */
      export namespace bindChapterOrKnow {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<defs.QuestionChapterRsp>

      export const init: Response;

      export function request(params: Params, body: defs.QuestionBindReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 取消关联试题章节或知识点
        * /question/cancel-bind-chapter
        */
      export namespace cancelBindChapterOrKnow {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.QuestionCancelBindChapterReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 删除或撤销删除试题
        * /question/delete-revoke
        */
      export namespace deleteOrRevoke {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.QuestionDeleteReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 获取试题详情
        * /question/detailed
        */
      export namespace detailed {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<defs.QuestionDetailedRsp>

      export const init: Response;

      export function request(params: Params, body: defs.QuestionDetailedReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 取消试题关联的章节知识点（.net兼职后台调用）
        * /question/do/net-delete-rel
        */
      export namespace netDeleteChapters {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.QuestionRelUpdReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 保存试题校对结果（.net兼职后台调用）
        * /question/do/net-proof-log-save
        */
      export namespace netSave {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.QuestionProofLogReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 修改试题内容、解析、选项、答案（.net兼职后台调用）
        * /question/do/net-update-content
        */
      export namespace updateQuestionContent {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.QuestionUpdateContentReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 保存试题章节、知识点关联（.net兼职后台调用）
        * /question/do/net-update-rel
        */
      export namespace updateRel {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.QuestionRelUpdReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 根据试题id查询关联试卷信息
根据试题id查询关联试卷信息
        * /question/get-mini-question-rel
        */
      export namespace getMiniQuestionRel {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<defs.GetQuestionInfoMiniApiRsp>

      export const init: Response;

      export function request(params: Params, body: defs.GetQuestionInfoMiniApiReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 根据试题id查询试题校对记录
根据试题id查询试题校对记录
        * /question/list-mini-question-proof-log
        */
      export namespace listMiniQuestionProofLog {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<Array<defs.ListQuestionProofLogMiniApiRsp>>

      export const init: Response;

      export function request(params: Params, body: defs.ListQuestionProofLogMiniApiReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 分页查询试题列表
        * /question/page
        */
      export namespace page {
        
      export class Params {
      
    }
  

      export type Response = defs.ApiPageResponse<defs.QuestionInfoRsp>

      export const init: Response;

      export function request(params: Params, body: defs.QuestionInfoReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 保存试题校对结果
        * /question/preview-proof-save
        */
      export namespace proofLogSave {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.QuestionProofLogReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 预览试题列表+答题卡
        * /question/preview-question
        */
      export namespace previewQuestion {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<defs.QuestionPreviewRsp>

      export const init: Response;

      export function request(params: Params, body: defs.QuestionPreviewReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 预览试题题型
        * /question/preview-rule
        */
      export namespace previewRule {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<defs.QuestionPreviewStatsRsp>

      export const init: Response;

      export function request(params: Params, body: defs.QuestionPreviewStatsReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 试题、试卷试题测重
        * /question/repeat
        */
      export namespace repeat {
        
      export class Params {
      
    }
  

      export type Response = defs.ApiPageResponse<defs.QuestionInfoRepeatRsp>

      export const init: Response;

      export function request(params: Params, body: defs.QuestionRepeatReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 保存、修改试题
        * /question/save
        */
      export namespace save {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<number>

      export const init: Response;

      export function request(params: Params, body: defs.QuestionSaveReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 批量试题
        * /question/save-batch
        */
      export namespace saveBatch {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.QuestionSaveBatchReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 获取试题统计数据
        * /question/stats
        */
      export namespace selectQuestionStats {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<defs.QuestionStatsRsp>

      export const init: Response;

      export function request(params: Params, body: defs.QuestionStatsReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 同步试题数据
        * /question/sys-question
        */
      export namespace sysQuestionData {
        
      export class Params {
      
      /** 科目id */
      subjectId?: number;
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 修改试题单个属性（连题、收费免费等）
        * /question/update-question
        */
      export namespace updateQuestion {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.QuestionUpdateReq, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 题库书籍相关接口
           */
          export namespace  {
            
      /**
        * 删除书籍接口
        * /book/delete
        */
      export namespace remove {
        
      export class Params {
      
      /** 书籍id */
      id: number;
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 题库书籍列表接口
        * /book/page
        */
      export namespace page {
        
      export class Params {
      
    }
  

      export type Response = defs.ApiPageResponse<defs.TikuBookInfoPageRsp>

      export const init: Response;

      export function request(params: Params, body: defs.TikuBookInfoPageReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 试题绑定书籍数据
        * /book/page-question
        */
      export namespace pageByQuestion {
        
      export class Params {
      
    }
  

      export type Response = defs.ApiPageResponse<defs.TikuBookInfoRsp>

      export const init: Response;

      export function request(params: Params, body: defs.TikuBookInfoReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 书籍保存接口
        * /book/save
        */
      export namespace save {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.TikuBookInfoSaveReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 删除书籍扫描数据接口
        * /book/scan/delete
        */
      export namespace deleteScan {
        
      export class Params {
      
      /** 书籍扫描id */
      id: number;
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 书籍扫描数据保存接口
        * /book/scan/save
        */
      export namespace saveScan {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.TikuBookScanningSaveReq, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 题库产品相关接口
           */
          export namespace  {
            
      /**
        * 删除题库产品
        * /product/delete
        */
      export namespace remove {
        
      export class Params {
      
      /** 产品id */
      id: number;
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 获取产品详细
        * /product/detailed
        */
      export namespace detailed {
        
      export class Params {
      
      /** 产品id */
      productId: number;
    }
  

      export type Response = defs.TheResponseData<defs.TikuProductInfoDetailedRsp>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 根据subjectId查询题库产品id
        * /product/get-id-by-subject-id
        */
      export namespace getTikuProductIdBySubjectId {
        
      export class Params {
      
      /** subjectId */
      subjectId: number;
    }
  

      export type Response = defs.TheResponseData<number>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 根据id 查询题库简易信息
        * /product/list-mini
        */
      export namespace listTikuProductMiniInfoById {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<Array<defs.TikuProductMiniInfoRsp>>

      export const init: Response;

      export function request(params: Params, body: Array<number>, options?: any): Promise<Response>;
    
      }
    

      /**
        * 获取某个考试下所有单科产品
        * /product/list-single
        */
      export namespace listByDomain {
        
      export class Params {
      
      /** 考试domain */
      domain: string;
    }
  

      export type Response = defs.TheResponseData<Array<defs.TikuProductInfoSingleRsp>>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 分页获取题库产品列表
        * /product/page
        */
      export namespace page {
        
      export class Params {
      
    }
  

      export type Response = defs.ApiPageResponse<defs.TikuProductInfoRsp>

      export const init: Response;

      export function request(params: Params, body: defs.TikuProductInfoReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 题库产品上下架
        * /product/rack-up-and-down
        */
      export namespace rackUpAndDown {
        
      export class Params {
      
      /** 产品id */
      id: number;
      /** 状态（0：下架 1：上架） */
      status: number;
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 添加、修改题库产品
        * /product/save
        */
      export namespace save {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.TikuProductInfoSaveReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 同步题库产品
        * /product/sys-data
        */
      export namespace sysData {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 题库知识点
           */
          export namespace  {
            
      /**
        * 根据id获取知识点
        * /knowledge/list-id
        */
      export namespace listById {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<Array<defs.ChapterKnowledgeInfoRsp>>

      export const init: Response;

      export function request(params: Params, body: defs.IdsReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 根据科目id获取章节-知识点
        * /knowledge/list-tree-subject
        */
      export namespace listTreeBySubjectId {
        
      export class Params {
      
      /** subjectId */
      subjectId: number;
    }
  

      export type Response = defs.TheResponseData<Array<defs.ChapterInfoRsp>>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 根据id获取父类章节知识点列表
        * /knowledge/parent-ids
        */
      export namespace getParentIds {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<Array<defs.ChapterInfoRsp>>

      export const init: Response;

      export function request(params: Params, body: defs.IdsReq, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 题库章节相关接口
           */
          export namespace  {
            
      /**
        * 删除章节
        * /chapter/delete
        */
      export namespace deleteChapter {
        
      export class Params {
      
      /** id */
      id: number;
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 获取章节列表（允许查所有科目及所有课程版本）
返回树形结构
        * /chapter/full-tree
        */
      export namespace fullTree {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<Array<defs.ChapterInfoRsp>>

      export const init: Response;

      export function request(params: Params, body: defs.ChapterInfoFullReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 删除知识点
        * /chapter/knowledge/delete
        */
      export namespace deleteKnowledge {
        
      export class Params {
      
      /** id */
      id: number;
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 添加、修改知识点
        * /chapter/knowledge/save
        */
      export namespace saveKnowledge {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<defs.ChapterKnowledgeBaseRsp>

      export const init: Response;

      export function request(params: Params, body: defs.ChapterKnowledgeSaveReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 获取章节试题
        * /chapter/list-question
        */
      export namespace listChapterQuestion {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<Array<defs.ChapterQuestionRsp>>

      export const init: Response;

      export function request(params: Params, body: Array<number>, options?: any): Promise<Response>;
    
      }
    

      /**
        * 根据ID获取章节信息
        * /chapter/list/ids
        */
      export namespace listByIds {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<Array<defs.ChapterInfoRsp>>

      export const init: Response;

      export function request(params: Params, body: Array<number>, options?: any): Promise<Response>;
    
      }
    

      /**
        * 重置章节、知识点排序
        * /chapter/resetsort
        */
      export namespace resetSort {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, body: defs.ChapterInfoReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 添加、修改章节
        * /chapter/save
        */
      export namespace saveChapter {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<defs.ChapterInfoBaseRsp>

      export const init: Response;

      export function request(params: Params, body: defs.ChapterSaveReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 同步章节后台题数
        * /chapter/sync-backend-chapter-question
        */
      export namespace syncChapterQuestionNum {
        
      export class Params {
      
      /** 科目id */
      subjectId: number;
      /** 章节版本id */
      versionId: string;
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 获取章节列表
返回树形结构
        * /chapter/tree
        */
      export namespace tree {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<Array<defs.ChapterInfoRsp>>

      export const init: Response;

      export function request(params: Params, body: defs.ChapterInfoReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 删除章节版本
        * /chapter/version/delete
        */
      export namespace deleteVersion {
        
      export class Params {
      
      /** id */
      id: number;
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 获取章节版本
        * /chapter/version/list
        */
      export namespace selectVersionList {
        
      export class Params {
      
      /** subjectId */
      subjectId: number;
    }
  

      export type Response = defs.TheResponseData<Array<defs.ChapterVersionRsp>>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 修改、添加章节版本
        * /chapter/version/save
        */
      export namespace saveVersion {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<defs.ChapterVersionRsp>

      export const init: Response;

      export function request(params: Params, body: defs.ChapterVersionReq, options?: any): Promise<Response>;
    
      }
    
          }
        


          /**
           * 高分值考点
           */
          export namespace  {
            
      /**
        * 删除数据
        * /deleteData
        */
      export namespace deleteData {
        
      export class Params {
      
      /** ids，用逗号隔开 */
      ids: string;
    }
  

      export type Response = defs.TheResponseData

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 导入excel数据
        * /examHighScore/importExcel
        */
      export namespace importExcel {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<ObjectMap>

      export const init: Response;

      export function request(params: Params, form: FormData, options?: any): Promise<Response>;
    
      }
    

      /**
        * 发布关键词
        * /examHighScore/publishKeywords
        */
      export namespace publishKeywords {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<defs.AliCloudUploadResponseObject>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    

      /**
        * 查询考点es
        * /examdaNewsEs/do/search
        */
      export namespace search {
        
      export class Params {
      
    }
  

      export type Response = defs.ApiPageResponse<Array<defs.ExamdaNewsEsRsp>>

      export const init: Response;

      export function request(params: Params, body: defs.ExamdaNewsEsReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 查询考点es
        * /examdaNewsEs/search
        */
      export namespace postExamdaNewsEsSearch {
        
      export class Params {
      
    }
  

      export type Response = defs.ApiPageResponse<Array<defs.ExamdaNewsEsRsp>>

      export const init: Response;

      export function request(params: Params, body: defs.ExamdaNewsEsReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 高分值考点保存
        * /saveData
        */
      export namespace saveData {
        
      export class Params {
      
    }
  

      export type Response = defs.TheResponseData<number>

      export const init: Response;

      export function request(params: Params, body: defs.ExamHighScoreSaveReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 高分值考点列表查询
        * /selectData
        */
      export namespace selectData {
        
      export class Params {
      
    }
  

      export type Response = defs.ApiPageResponse<defs.ExamHighScoreRsp>

      export const init: Response;

      export function request(params: Params, body: defs.ExamHighScoreReq, options?: any): Promise<Response>;
    
      }
    

      /**
        * 通过id查询数据
        * /selectDataById
        */
      export namespace selectDataById {
        
      export class Params {
      
      /** id */
      id: number;
    }
  

      export type Response = defs.TheResponseData<defs.ExamHighScoreRsp>

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    
      }
    
          }
        
      }
    
    
    