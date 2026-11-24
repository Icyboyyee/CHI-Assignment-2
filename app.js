'use strict';

const settings = {
  '2000': {
    date:'11 APRIL 2000',title:'Together<br><em>in place.</em>',
    copy:'Departments set up separate service counters inside one hall and centrally received applications.',
    fact:'Departmental counters received applications in a common hall.',
    authority:'DEPARTMENTAL WINDOWS',note:'One hall, with each department receiving applications at its own counter.',
    insight:'Co-location changes where applications are received. Compare it with the later authorization to decide selected matters.',
    firm:'FIRM',firmWidth:104,
    centreLabel:'Selected approvals',centreSmall:'NEARLY 70 AUTHORIZED MATTERS',
    route:'M450 395V337L260 268',line:'M450 406V337L260 286',stamp:'RECEIVED',
    status:'The application reaches a departmental counter in the shared hall.',
    description:'An illustrative firm sends an application to departmental counters in a common hall. The source records centralized receipt in 2000.',
    location:'Printed p. 279 · PDF p. 47'
  },
  '2003': {
    date:'2 JANUARY 2003',title:'Authority<br><em>moves too.</em>',
    copy:'After defining the centre’s duties in 2002, the park authorized it in January 2003 to exercise approval powers on selected matters while centrally receiving applications across nearly 70 authorized matters.',
    fact:'The centre exercised approval powers on selected matters and received applications across nearly 70 authorized matters.',
    authority:'SELECTED APPROVAL POWERS',note:'Authorized to decide selected matters · centrally receiving nearly 70 authorized items.',
    insight:'The institutional change concerns who was authorized to decide selected applications. Lower coordination costs are a grounded interpretation of this shift.',
    firm:'FIRM',firmWidth:104,
    centreLabel:'Selected approvals',centreSmall:'NEARLY 70 AUTHORIZED MATTERS',
    route:'M450 395V282',line:'M450 406V292',stamp:'CENTRE APPROVAL',
    status:'For an authorized approval matter, the decision is handled through the centre.',
    description:'An illustrative firm submits a selected authorized matter to the one-stop centre, which began exercising approval powers on selected items and receiving applications across nearly 70 authorized matters in January 2003.',
    location:'Printed p. 280 · PDF p. 48'
  },
  '2005': {
    date:'6 APRIL 2005',title:'A specific<br><em>business use.</em>',
    copy:'Authorized by the park’s Economic and Trade Development Bureau, the centre handled establishment and amendment applications for foreign-invested enterprises (FIEs) with total investment up to US$30 million.',
    fact:'Eligible foreign-invested enterprises could apply at the centre to establish or amend their business.',
    authority:'AUTHORIZED FIE MATTERS',note:'Example scope · FIE establishment & amendment, total investment threshold up to US$30m.',
    insight:'The chronicle names a concrete foreign-investment activity and its US$30 million total-investment threshold—supporting a change in approval channel without claiming unspecified time or cost savings.',
    firm:'FOREIGN FIRM (≤US$30M)',firmWidth:232,
    centreLabel:'FIE setup & changes',centreSmall:'UP TO US$30M · ECON. & TRADE BUREAU',
    route:'M450 395V282',line:'M450 406V292',stamp:'FIE AUTHORIZED',
    status:'The eligible FIE establishment or amendment application is handled through the centre.',
    description:'The 2005 example covers establishment and amendment applications for foreign-invested enterprises (FIEs) with total investment up to US$30 million. The route is schematic.',
    location:'Printed p. 283 · PDF p. 51'
  }
};

const sources = [
  {id:'1',title:'The 1994 intergovernmental agreement',description:'Articles 2–4 support experience transfer, selective adaptation under Chinese law with respect for PRC sovereignty, a Joint Steering Council led by two Vice Premiers, and a Suzhou–JTC Bilateral Working Committee. Original PDF confirms signing date 26 February 1994.',location:'SIP Chronicle (2012) · printed pp. 1361–1362 · PDF pp. 5–6',url:'https://www.sipac.gov.cn/szdaglzx/yqfzszgyyqz/202102/4a600d918f844554b00b6ad58fc35ea8/files/283d782ccf054e82a9afcfac4ad24fda.pdf'},
  {id:'2',title:'Suzhou Industrial Park Chronicle (2012)',description:'Compiled by the SIP Local Chronicles Compilation Committee (Jiangsu People’s Publishing House). Chapter 5 records the 1995 committee draft, 2000 shared hall, 2002 Singapore training, 2003 approval powers alongside nearly 70 authorized matters (classified on p. 282 into direct approvals, filings, and referrals), and the April 2005 FIE scope up to US$30m.',location:'Chapter 5 · printed pp. 279–283 · PDF pp. 47–51 (SIP Archives digital edition)',url:'https://www.sipac.gov.cn/szdaglzx/yqfzszgyyqz/202102/fc57b418f4204a7f9dd72254a6a180fa/files/4a713be5ea3f4469afc70fe72b55c1bc.pdf'},
  {id:'3',title:'Lee Hsien Loong’s EDB anniversary speech (1991)',description:'The 1 August 1991 speech traces EDB’s origin to the 1961 UN Winsemius Report, explains cross-ministry coordination in serving investors, notes that industrial-estate services were progressively hived off from EDB to agencies like JTC, and outlines Singapore’s 1990s overseas push.',location:'National Archives of Singapore · PDF pp. 1, 4, 7–8, 11',url:'https://www.nas.gov.sg/archivesonline/data/pdfdoc/lhl19910801s.pdf'},
  {id:'4',title:'Thirty years of government services (2024)',description:'The SIP Administrative Committee’s 5 December 2024 retrospective specifically credits JTC’s customer-service experience in founding the 2002 one-stop centre and records the 2015 establishment of the Administrative Approval Bureau.',location:'Official retrospective · opening chronology',url:'https://www.sipac.gov.cn/szgyyq/tsyq/202412/e47d0d61d9234349989c90e23fb3042d.shtml'},
  {id:'5',title:'Liu & Wang (2021) · transnational policy transfer',description:'Hong Liu and Ting-Yan Wang (2021), “The institutionalization and effectiveness of transnational policy transfer: The China–Singapore Suzhou Industrial Park as a case study.” Public Administration and Development, 41(3), 103–114.',location:'Peer-reviewed research · sections 3, 4.1–4.3',url:'https://doi.org/10.1002/pad.1956'}
];

const criteria = {
  selection:{title:'Chosen and studied, not imposed.',copy:'Article 3 of the 1994 agreement mandated selective adoption under Chinese law while respecting PRC sovereignty. Submitting Suzhou’s own 1995 draft to the working committee and sending eight officials for 2002 Singapore training provide concrete behavioral evidence of active selection.',source:'1,2',refs:'Sources 1 and 2'},
  adaptation:{title:'Customer-service practice gained local approval power.',copy:'Singapore’s EDB coordinated investor services across agencies and hived off industrial-estate services to JTC, whose customer-service approach Suzhou studied. Moving beyond a 2000 shared intake hall, the park authorized its centre in 2003–2005 to exercise approval powers on selected matters under Chinese law.',source:'2,3,4,5',refs:'Sources 2, 3, 4 and 5'},
  integration:{title:'Sustained centralization from 1995 to 2015 and beyond.',copy:'One-stop services evolved across two decades: from the 1995 draft to 2003 approval powers (receiving nearly 70 authorized matters) and 2005 FIE setup and change approvals. In 2015, the park carried centralization further by establishing an Administrative Approval Bureau.',source:'2,4,5',refs:'Sources 2, 4 and 5'}
};

const events = {
  agreement:{title:'1994 · An intergovernmental channel for learning',copy:'Signed 26 February 1994—following 1990 diplomatic ties and Deng Xiaoping’s 1992 call to learn from Singapore—the agreement supported selective adaptation under Chinese law while respecting PRC sovereignty (Art. 3). Article 4 created a Joint Steering Council led by two Vice Premiers and a Bilateral Working Committee linking Suzhou and Singapore’s Jurong Town Corporation (JTC).',source:'1,3,4,5'},
  proposal:{title:'1995 · Local draft entered the bilateral committee',copy:'On 10 August 1995, Suzhou Industrial Park submitted its draft one-stop service proposal to the fourth Suzhou–JTC bilateral working committee meeting, placing a concrete local service plan inside the government-to-government channel.',source:'2'},
  training:{title:'2002 · Eight officials studied in Singapore & JTC model',copy:'In March 2002, eight park officials travelled to Singapore for dedicated one-stop service training on pro-business investor services; the park’s official retrospective specifically identifies JTC’s customer service as a model for founding the one-stop centre.',source:'2,4'}
};

const $ = (selector) => document.querySelector(selector);
const scene = $('#scene');
const apply = $('#apply-button');
const dialog = $('#source-dialog');
const descriptionMeta = $('meta[name="description"]');
const englishUI = {
  title: document.title,
  description: descriptionMeta.content,
  focus: 'Focus view',
  exitFocus: 'Exit focus view',
  stage: 'SETTING',
  chooseRoute: 'Choose a setting, then follow the route.',
  follow: 'Follow an application',
  following: 'Following the route…',
  moving: 'The illustrative application moves to the service point.',
  followAgain: 'Follow the route again',
  openOriginal: 'Open original source ↗'
};
const translatableText = Array.from(document.querySelectorAll('[data-i18n]'), element => {
  // Keep the icons, line breaks and graphic elements next to the text intact.
  const node = Array.from(element.childNodes).find(child => child.nodeType === Node.TEXT_NODE && child.data.trim());
  return { node, key: element.dataset.i18n, english: node.data };
});
const translatableLabels = Array.from(document.querySelectorAll('[data-i18n-label]'), element => ({
  element,
  key: element.dataset.i18nLabel,
  english: element.getAttribute('aria-label')
}));
const languageButtons = document.querySelectorAll('[data-language]');
let currentMode = '2000';
let currentCriterion = 'selection';
let language = 'en';
let runVersion = 0;
let currentTimer;
let previousScroll = 0;

function ui() {
  return language === 'zh' ? chinese.ui : englishUI;
}

function renderFocusLabel() {
  const focused = document.body.classList.contains('exhibit-focus');
  $('#focus-label').textContent = focused ? ui().exitFocus : ui().focus;
}

function setFocusView(enabled) {
  if (enabled) previousScroll = window.scrollY;
  document.body.classList.toggle('exhibit-focus',enabled);
  $('#focus-button').setAttribute('aria-pressed',String(enabled));
  renderFocusLabel();
  window.scrollTo({top:enabled ? 0 : previousScroll,behavior:'instant'});
}

function selectSetting(mode) {
  runVersion += 1;
  clearTimeout(currentTimer);
  currentMode = mode;
  scene.classList.remove('running','complete');
  scene.dataset.scene = mode;
  $('#paper-motion').endElement();
  for (const tab of document.querySelectorAll('[data-mode]')) {
    const selected = tab.dataset.mode === mode;
    tab.setAttribute('aria-selected',String(selected));
    tab.tabIndex = selected ? 0 : -1;
  }
  $('#exhibit-panel').setAttribute('aria-labelledby',`mode-${mode}`);
  $('#route-line').setAttribute('d',settings[mode].line);
  $('#paper-motion').setAttribute('path',settings[mode].route);
  renderSetting();
}

function settingCopy() {
  return language === 'zh' ? chinese.settings[currentMode] : settings[currentMode];
}

function renderSetting() {
  const state = settingCopy();
  const base = settings[currentMode];
  $('#setting-date').textContent = state.date;
  $('#setting-title').innerHTML = state.title;
  $('#setting-copy').textContent = state.copy;
  $('#setting-fact').textContent = state.fact;
  $('#authority-label').textContent = state.authority;
  $('#scene-note').textContent = state.note;
  $('#insight').textContent = state.insight;
  $('#stamp-text').textContent = state.stamp;
  $('#centre-label').textContent = state.centreLabel;
  $('#centre-small').textContent = state.centreSmall;
  $('#firm-label').textContent = state.firm;
  const fw = state.firmWidth || base.firmWidth || 104;
  $('#firm-rect').setAttribute('width', String(fw));
  $('#firm-rect').setAttribute('x', String(-fw / 2));
  $('#scene-year').textContent = `${ui().stage} / ${currentMode}`;
  $('#diagram-title').textContent = `${currentMode} · ${state.fact}`;
  $('#diagram-desc').textContent = state.description;
  const label = language === 'zh' ? `查看历史记录。 ${state.location}` : `Read the historical record. ${state.location}`;
  $('#setting-source').setAttribute('aria-label', label);
  renderApplication();
}

function renderApplication() {
  const running = scene.classList.contains('running');
  const complete = scene.classList.contains('complete');
  const copy = ui();
  apply.setAttribute('aria-disabled',String(running));
  apply.firstElementChild.textContent = running ? copy.following : complete ? copy.followAgain : copy.follow;
  $('#application-status').textContent = running ? copy.moving : complete ? settingCopy().status : copy.chooseRoute;
}

function runApplication() {
  if (apply.getAttribute('aria-disabled') === 'true') return;
  const version = ++runVersion;
  scene.classList.remove('complete');
  scene.classList.add('running');
  renderApplication();
  $('#paper-motion').beginElement();
  const delay = matchMedia('(prefers-reduced-motion: reduce)').matches ? 30 : 2200;
  currentTimer = setTimeout(() => {
    if (version !== runVersion) return;
    scene.classList.remove('running');
    scene.classList.add('complete');
    renderApplication();
  },delay);
}

function showSources(sourceIds, eventKey) {
  const eventNote = $('#event-note');
  eventNote.hidden = !eventKey;
  eventNote.replaceChildren();
  if (eventKey) {
    const event = language === 'zh' ? chinese.events[eventKey] : events[eventKey];
    const title = document.createElement('h3');
    const copy = document.createElement('p');
    title.textContent = event.title;
    copy.textContent = event.copy;
    eventNote.append(title,copy);
  }
  for (const item of document.querySelectorAll('.source-item')) item.classList.remove('highlight');
  if (!dialog.open) dialog.showModal();
  const ids = String(sourceIds || '').split(',').map(s => s.trim()).filter(Boolean);
  let firstTarget = null;
  for (const id of ids) {
    const target = $(`#source-${id}`);
    if (target) {
      target.classList.add('highlight');
      if (!firstTarget) firstTarget = target;
    }
  }
  if (firstTarget && !eventKey) {
    firstTarget.scrollIntoView({block:'center',behavior:'instant'});
  } else {
    dialog.scrollTop = 0;
  }
  $('#dialog-close').focus({preventScroll:true});
}

function selectCriterion(key) {
  currentCriterion = key;
  for (const tab of document.querySelectorAll('[data-criterion]')) {
    const selected = tab.dataset.criterion === key;
    tab.setAttribute('aria-selected',String(selected));
    tab.tabIndex = selected ? 0 : -1;
  }
  $('#criterion-panel').setAttribute('aria-labelledby',`criterion-${key}`);
  renderCriterion();
}

function renderCriterion() {
  const criterion = criteria[currentCriterion];
  const copy = language === 'zh' ? chinese.criteria[currentCriterion] : criterion;
  $('#criterion-title').textContent = copy.title;
  $('#criterion-copy').textContent = copy.copy;
  $('#criterion-source').dataset.source = criterion.source;
  const label = language === 'zh' ? `查看相关史料。 ${copy.refs}` : `View supporting sources. ${copy.refs}`;
  $('#criterion-source').setAttribute('aria-label', label);
}

function tabKeyboard(event, attribute) {
  if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
  event.preventDefault();
  const tabs = [...event.currentTarget.querySelectorAll(`[${attribute}]`)];
  const index = tabs.indexOf(event.target);
  let next = index;
  if (event.key === 'ArrowRight') next = (index+1)%tabs.length;
  if (event.key === 'ArrowLeft') next = (index+tabs.length-1)%tabs.length;
  if (event.key === 'Home') next = 0;
  if (event.key === 'End') next = tabs.length-1;
  tabs[next].focus();
  tabs[next].click();
}

function renderSources() {
  const items = sources.map(source => {
    const copy = language === 'zh' ? chinese.sources[source.id] : source;
    const item = document.createElement('section');
    item.className = 'source-item';
    item.id = `source-${source.id}`;
    const title = document.createElement('h3');
    const number = document.createElement('span');
    number.textContent = `[${source.id}]`;
    title.append(number,document.createTextNode(copy.title));
    const description = document.createElement('p');
    description.textContent = copy.description;
    const location = document.createElement('p');
    location.className = 'source-location';
    location.textContent = copy.location;
    const link = document.createElement('a');
    link.href = source.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = ui().openOriginal;
    item.append(title,description,location,link);
    return item;
  });
  $('#sources-list').replaceChildren(...items);
}

function setLanguage(nextLanguage) {
  language = nextLanguage;
  const useChinese = language === 'zh';
  document.documentElement.lang = useChinese ? 'zh-CN' : 'en';
  document.title = ui().title;
  descriptionMeta.content = ui().description;
  for (const { node, key, english } of translatableText) {
    const translated = chinese.text[key];
    node.data = useChinese ? (translated === '' ? '' : english.replace(english.trim(), translated)) : english;
  }
  for (const { element, key, english } of translatableLabels) {
    element.setAttribute('aria-label',useChinese ? chinese.labels[key] : english);
  }
  for (const button of languageButtons) {
    button.setAttribute('aria-pressed',String(button.dataset.language === language));
  }
  renderFocusLabel();
  renderSetting();
  renderCriterion();
  renderSources();
}

for (const tab of document.querySelectorAll('[data-mode]')) tab.addEventListener('click',() => selectSetting(tab.dataset.mode));
for (const tab of document.querySelectorAll('[data-criterion]')) tab.addEventListener('click',() => selectCriterion(tab.dataset.criterion));
for (const button of document.querySelectorAll('[data-open-sources]')) button.addEventListener('click',() => showSources());
for (const button of document.querySelectorAll('[data-source]')) button.addEventListener('click',() => showSources(button.dataset.source));
for (const button of document.querySelectorAll('[data-event]')) button.addEventListener('click',() => showSources(events[button.dataset.event].source,button.dataset.event));
$('.mode-tabs').addEventListener('keydown',(event) => tabKeyboard(event,'data-mode'));
$('.criteria').addEventListener('keydown',(event) => tabKeyboard(event,'data-criterion'));
apply.addEventListener('click',runApplication);
$('#dialog-close').addEventListener('click',() => dialog.close());
$('#focus-button').addEventListener('click',() => setFocusView(!document.body.classList.contains('exhibit-focus')));
document.addEventListener('keydown',(event) => {
  if (event.key === 'Escape' && !dialog.open && document.body.classList.contains('exhibit-focus')) setFocusView(false);
});
dialog.addEventListener('click',(event) => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});

const smallScreen = matchMedia('(max-width: 540px)');
function updateDiagramFrame() {
  $('.scene-svg').setAttribute('viewBox',smallScreen.matches ? '150 100 620 350' : '0 0 900 460');
}
smallScreen.addEventListener('change',updateDiagramFrame);
updateDiagramFrame();
selectSetting('2000');
if (typeof chinese !== 'undefined') {
  for (const toggle of document.querySelectorAll('.language-toggle')) toggle.hidden = false;
  for (const button of languageButtons) {
    button.addEventListener('click',() => setLanguage(button.dataset.language));
  }
  const initialLanguage = new URLSearchParams(location.search).get('lang');
  setLanguage(initialLanguage === 'zh' ? 'zh' : 'en');
} else {
  renderSources();
}
