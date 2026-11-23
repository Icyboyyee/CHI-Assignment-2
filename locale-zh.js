'use strict';

const chinese = {
  text: {
    skip: '跳到互动展区',
    brand: '一站式窗口',
    brandSub: '苏州工业园区',
    navigationExperiment: '流程对比',
    navigationExchange: '中新交流',
    sources: '史料',
    courseLabel: '互动历史展览',
    period: '苏州 × 新加坡 · 1994–2015',
    heroTitle: '同一个大厅，',
    heroQuestion: '谁来审批？',
    heroLeadPlace: '集中受理，改变了去哪里交材料。',
    heroLeadAuthority: '下放审批权，改变了由谁办理。',
    heroIntro: '依托政府间联合协调理事会与双边工作委员会等外交机制，苏州将新加坡的混合式投资者服务经验改造为本地授权审批制度，重塑了外商投资企业的市场准入渠道。',
    heroAction: '跟随一份申请',
    experimentIndex: '01 / 流程对比',
    experimentTitle: '从集中受理到授权审批',
    chooseSetting: '选择一个历史阶段',
    tab2000: '集中受理',
    tab2003: '授权审批',
    tab2005: '外资业务实例',
    park: '苏州工业园区',
    hall: '投资者服务大厅',
    oneAddress: '同一办事地点',
    departmentA: '部门 A',
    departmentB: '部门 B',
    departmentC: '部门 C',
    receive: '受理',
    centre: '一站式服务中心',
    departmentsNote: '部门设置为示意',
    sceneDisclaimer: '图中的机构和办理路径经过简化，仅展示史料记载的制度变化与部分业务。',
    institutionalChange: '制度变了什么',
    settingSource: '查看历史记录',
    economicLens: '经济维度',
    exchangeIndex: '02 / 中新交流',
    exchangeTitle: '服务经验如何',
    exchangeQuestion: '传到苏州？',
    exchangeIntro: '本地窗口的背后，是有组织的政府间外交渠道，连接了新加坡融汇联合国蓝图与英式文官传统的发展局治理经验，以及中国的行政改革。',
    agreementTitle: '签订合作协议',
    agreementSummary: '中新设立联合协调机构，在中国法律框架下有选择地借鉴新加坡经验。',
    agreementSource: '合作协议第 2–4 条 · EDB [1, 3]',
    proposalTitle: '方案进入双边讨论',
    proposalSummary: '苏州工业园区将一站式服务方案讨论稿提交给中新双边工作委员会。',
    chronicleSource: '《苏州工业园区志》，第 279 页',
    trainingTitle: '人员赴新加坡学习',
    trainingSummary: '八名园区工作人员赴新加坡参加一站式服务专项培训。',
    judgementIndex: '03 / 互鉴判断',
    judgementTitle: '怎样的交流',
    judgementConnector: '',
    judgementQuestion: '算得上互鉴？',
    criteriaIntro: '用史料逐项对照课程的三条判断依据。',
    criterionSelection: '主动选择',
    criterionAdaptation: '本地改造',
    criterionIntegration: '持续融入',
    criterionStatus: '这一条件有史料支持',
    criterionSource: '查看相关史料',
    judgementNote: '中国与新加坡虽有文化联系，但新加坡经济发展局模式源自 1961 年联合国工业化蓝图与英国普通法文官传统，本案实质上是不同制度文明之间“和而不同”的互鉴。现有史料最清楚地记录了苏州一侧的学习、改造与延续。',
    footerSubtitle: '· 苏州工业园区',
    coursePair: '国际关系 × 经济维度',
    footerSources: '史料与制作说明',
    dialogIndex: '史料索引',
    dialogTitle: '查阅原始记录',
    dialogIntro: '每项论述都有史料依据。下文分别标出了原书印刷页码和 PDF 中的页码。',
    productionTitle: '关于这个展览',
    productionDiagram: '这里用一家示意企业和简化的路径演示流程。图中的部门仅供示意，所列日期、机构和 2005 年实例的业务范围均有史料依据。',
    productionScope: '协调成本可能降低，是根据制度变化作出的解释。展览聚焦苏州的具体做法，两地审批权限的完整对照仍有待核实。',
    productionAI: '资料核验、双语本地化与界面代码使用了 AI 辅助。作品历经多轮迭代——从单线本地时间轴草图、静态双线信息图演进为当前的三阶段同布局互动展览，并主动剔除口径不明的办结天数，改以可核验的 2005 年 3000 万美元以下外资业务为锚点。原始史料于 2026 年 11 月 13 日核验，并于 2026 年 11 月 23 日完成全面审校。'
  },
  labels: {
    home: '一站式窗口首页',
    mainNav: '主导航',
    language: '显示语言',
    setting: '历史阶段',
    criteria: '文明互鉴的判断依据',
    closeSources: '关闭史料'
  },
  ui: {
    title: '一站式窗口｜谁来审批？',
    description: '通过互动展览，了解中新政府间外交合作与本地改造如何改变苏州工业园区的企业审批流程。',
    focus: '专注模式',
    exitFocus: '退出专注模式',
    stage: '阶段',
    chooseRoute: '选一个年份，再点击按钮查看申请流程。',
    follow: '跟随这份申请',
    following: '正在查看申请流程…',
    moving: '示意申请正被送到办理窗口。',
    followAgain: '再看一次申请流程',
    openOriginal: '打开原始资料 ↗'
  },
  settings: {
    '2000': {
      date: '2000 年 4 月 11 日',
      title: '各部门进驻<br><em>同一个大厅</em>',
      copy: '相关部门把各自的服务窗口设在同一个大厅，集中受理企业申请。',
      fact: '企业可以在同一地点提交申请。',
      authority: '各部门服务窗口',
      note: '大厅内设有不同部门的窗口。',
      insight: '集中受理改变了企业提交申请的地点。切换到后续年份，看看办理权限是怎样变化的。',
      firm: '企业',
      firmWidth: 104,
      centreLabel: '授权审批',
      centreSmall: '集中受理近 70 项授权业务',
      stamp: '已受理',
      status: '申请送到了大厅里对应部门的窗口。',
      description: '示意企业把申请交到同一大厅内的部门窗口。史料记载了 2000 年集中受理的安排。',
      location: '印刷第 279 页 · PDF 第 47 页'
    },
    '2003': {
      date: '2003 年 1 月 2 日',
      title: '服务中心开始<br><em>行使审批权</em>',
      copy: '2002 年明确了服务中心的职责与授权范围。2003 年 1 月起，中心开始对外行使行政审批职能，集中受理近 70 项授权业务。',
      fact: '服务中心承接近 70 项获授权审批事项。',
      authority: '获授权的审批职能',
      note: '对获得授权的事项，服务中心正式行使审批权。',
      insight: '变化在于谁在中国法律框架下有权审批。由此可能减轻企业在不同部门之间协调的负担。',
      firm: '企业',
      firmWidth: 104,
      centreLabel: '授权审批',
      centreSmall: '集中受理近 70 项授权业务',
      stamp: '中心审批',
      status: '这项获授权的审批由服务中心办理。',
      description: '示意企业把一项已获授权的业务交给一站式服务中心。中心于 2003 年 1 月开始行使近 70 项授权业务审批职能。',
      location: '印刷第 280 页 · PDF 第 48 页'
    },
    '2005': {
      date: '2005 年 4 月 6 日',
      title: '以外资企业<br><em>设立和变更为例</em>',
      copy: '经园区经济贸易发展局授权，中心承接总投资 3000 万美元以下外商投资企业设立、变更等业务。',
      fact: '符合条件的外资企业可通过服务中心办理设立与变更。',
      authority: '外资企业授权范围',
      note: '示例范围：总投资 3000 万美元以下外商投资企业设立、变更等业务。',
      insight: '史料列明了具体外资准入业务及其法定限额，证明市场准入渠道发生了改变，但不推估未经核实的节省天数或金额。',
      firm: '外资企业（3000万美元以下）',
      firmWidth: 236,
      centreLabel: '外资设立与变更',
      centreSmall: '3000 万美元以下 · 园区经贸局授权',
      stamp: '外资授权事项',
      status: '示例中的外资企业设立或变更事项由服务中心办理。',
      description: '2005 年的实例是总投资 3000 万美元以下的外商投资企业设立、变更事项。图示简化了办理路径。',
      location: '印刷第 283 页 · PDF 第 51 页'
    }
  },
  sources: {
    '1': {
      title: '1994 年中新政府间合作协议',
      description: '第 2–4 条涉及经验交流、在尊重中国主权与中国法律框架下有选择地借鉴，以及设立副总理级联合协调理事会与双边工作委员会。原始 PDF 载明签署日期为 1994 年 2 月 26 日。',
      location: '《苏州工业园区志》（2012）· 印刷第 1361–1362 页 · PDF 第 5–6 页'
    },
    '2': {
      title: '《苏州工业园区志》（2012）',
      description: '苏州工业园区地方志编纂委员会编，江苏人民出版社。第五篇“一站式”授权服务记载了 1995 年双边委员会讨论、2000 年服务大厅、2002 年培训、2003 年近 70 项授权审批及 2005 年 4 月 3000 万美元以下外资业务。',
      location: '第五篇 · 印刷第 279–283 页 · PDF 第 47–51 页（园区档案馆数字版）'
    },
    '3': {
      title: '李显龙在新加坡经济发展局 30 周年晚宴上的讲话（1991）',
      description: '1991 年 8 月 1 日的讲话追溯了经济发展局源于 1961 年联合国温斯缪斯报告，回顾了其在新加坡英式文官体系下的跨机构协调职责，以及 1990 年代向海外输出管理技能的区域化战略。',
      location: '新加坡国家档案馆 · PDF 第 1、4、7–8、11 页'
    },
    '4': {
      title: '《政务服务三十年》（2024）',
      description: '苏州工业园区管委会于 2024 年 12 月 5 日发布的回顾，记载了 2015 年行政审批局的设立和审批职能的进一步整合。',
      location: '园区官方回顾 · 开篇时间线'
    },
    '5': {
      title: 'Liu & Wang (2021)：跨国政策转移研究',
      description: 'Hong Liu、Ting-Yan Wang（2021），《跨国政策转移的制度化与成效：以中新苏州工业园区为例》（题名中译），Public Administration and Development，41 卷第 3 期，103–114 页。',
      location: '同行评审论文 · 第 3、4.1–4.3 节'
    }
  },
  criteria: {
    selection: {
      title: '在主权前提下主动选择，而非强加',
      copy: '1994 年协议第 3 条明确要求尊重中国主权、结合国情和法律有选择地借鉴。1995 年提交方案与 2002 年专项培训印证了主动、非强加的学习过程。',
      refs: '史料 1、2'
    },
    adaptation: {
      title: '从跨部门协调改造为法定授权审批',
      copy: '新加坡经济发展局依托小国体制与英式文官传统进行跨机构协调；苏州则超越 2000 年单纯物理集中的共享大厅，在中国行政法框架下创设部门审批权向服务中心的正式委托授权。',
      refs: '史料 2、3、5'
    },
    integration: {
      title: '持续二十余年的制度融入',
      copy: '中心 2003 年起集中行使近 70 项授权审批，2005 年承接 3000 万美元以下外资企业设立变更，至 2015 年进一步整合为行政审批局，沉淀为常规地方治理体制。',
      refs: '史料 2、4、5'
    }
  },
  events: {
    agreement: {
      title: '1994 · 建立政府间外交学习渠道',
      copy: '1994 年 2 月 26 日签署于中新建交（1990）与 1992 年中国深化开放之后，将中国的引资需求与新加坡融汇联合国蓝图和英式文官传统的发展局经验相连接。第 3 条要求尊重主权、有选择借鉴；第 4 条设立副总理级联合协调理事会和双边工作委员会。'
    },
    proposal: {
      title: '1995 · 一站式服务进入双边讨论',
      copy: '1995 年 8 月 10 日，园区将一站式服务方案讨论稿提交给第四次双边工作委员会会议，使地方具体服务方案直接进入政府间外交协调机制。'
    },
    training: {
      title: '2002 · 八人赴新加坡参加专项培训',
      copy: '2002 年 3 月，八名园区工作人员赴新加坡参加一站式服务专项培训，重点学习政府部门“亲商”观念；同年年底苏州明确了中心职能与审批授权。'
    }
  }
};
