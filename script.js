const KEY_TIMER    = 'focus_timer_v1';
const KEY_SESSIONS = 'focus_sessions_v1';
const KEY_CONFIG   = 'focus_config_v1';
const KEY_DAY_PLAN = 'focus_day_plan_v1';

/* Quotes */
const QUOTES = [
  {t:'The secret of getting ahead is getting started.',s:'Mark Twain'},
  {t:'Success is the sum of small efforts, repeated day in and day out.',s:'Robert Collier'},
  {t:'Discipline is choosing between what you want now and what you want most.',s:'Abraham Lincoln (attributed)'},
  {t:'Well done is better than well said.',s:'Benjamin Franklin'},
  {t:'It always seems impossible until it is done.',s:'Nelson Mandela'},
  {t:'Focus is a matter of deciding what things you are not going to do.',s:'John Carmack'},
  {t:'The future depends on what you do today.',s:'Mahatma Gandhi'},
  {t:'Do what you can, with what you have, where you are.',s:'Theodore Roosevelt'},
  {t:'Quality is not an act, it is a habit.',s:'Aristotle (attributed)'},
  {t:'Small disciplines repeated with consistency lead to great achievements.',s:'John C. Maxwell'},
  {t:'Action is the foundational key to all success.',s:'Pablo Picasso'},
  {t:'Dreams do not work unless you do.',s:'John C. Maxwell'},
  {t:'Motivation gets you going, but discipline keeps you growing.',s:'John C. Maxwell'},
  {t:'Do not wish it were easier; wish you were better.',s:'Jim Rohn'},
  {t:'Either you run the day or the day runs you.',s:'Jim Rohn'},
  {t:'Success is never owned; it is rented, and rent is due every day.',s:'Rory Vaden'},
  {t:'Do the hard jobs first. The easy jobs will take care of themselves.',s:'Dale Carnegie'},
  {t:'You do not have to be great to start, but you have to start to be great.',s:'Zig Ziglar'},
  {t:'If you are going through hell, keep going.',s:'Winston Churchill'},
  {t:'Perseverance is not a long race; it is many short races one after the other.',s:'Walter Elliot'},
  {t:'The best way to predict your future is to create it.',s:'Peter Drucker'},
  {t:'Success usually comes to those who are too busy to be looking for it.',s:'Henry David Thoreau'},
  {t:'Do not count the days; make the days count.',s:'Muhammad Ali'},
  {t:'You miss one hundred percent of the shots you do not take.',s:'Wayne Gretzky'},
  {t:'The difference between ordinary and extraordinary is that little extra.',s:'Jimmy Johnson'},
  {t:'Start where you are. Use what you have. Do what you can.',s:'Arthur Ashe'},
  {t:'A little progress each day adds up to big results.',s:'Satya Nani'},
  {t:'Do something today that your future self will thank you for.',s:'Sean Patrick Flanery'},
  {t:'When you feel like quitting, remember why you started.',s:'Anonymous'},
  {t:'Your habits decide your future.',s:'Jack Canfield'},
  {t:'What gets scheduled gets done.',s:'Michael Hyatt'},
  {t:'Deep work is the ability to focus without distraction on a cognitively demanding task.',s:'Cal Newport'},
  {t:'Clarity about what matters provides clarity about what does not.',s:'Cal Newport'},
  {t:'To do two things at once is to do neither.',s:'Publilius Syrus'},
  {t:'Concentrate all your thoughts upon the work in hand.',s:'Alexander Graham Bell'},
  {t:'Energy and persistence conquer all things.',s:'Benjamin Franklin'},
  {t:'The man who moves a mountain begins by carrying away small stones.',s:'Confucius'},
  {t:'I can accept failure; everyone fails at something. But I cannot accept not trying.',s:'Michael Jordan'},
  {t:'Champions keep playing until they get it right.',s:'Billie Jean King'},
  {t:'The more difficult the victory, the greater the happiness in winning.',s:'Pele'},
  {t:'Hard work beats talent when talent does not work hard.',s:'Tim Notke'},
  {t:'Winners are not people who never fail but people who never quit.',s:'Edwin Louis Cole'},
  {t:'The will to win is important, but the will to prepare is vital.',s:'Joe Paterno'},
  {t:'Confidence comes from preparation.',s:'John Wooden'},
  {t:'Failing to prepare is preparing to fail.',s:'Benjamin Franklin'},
  {t:'Prepare while others are daydreaming.',s:'William Arthur Ward'},
  {t:'The pain of discipline weighs ounces; the pain of regret weighs tons.',s:'Jim Rohn'},
  {t:'Do not stop when you are tired. Stop when you are done.',s:'Marilyn Monroe (attributed)'},
  {t:'Great things are done by a series of small things brought together.',s:'Vincent van Gogh'},
  {t:'It is not that I am so smart. But I stay with the questions much longer.',s:'Albert Einstein'},
  {t:'Live as if you were to die tomorrow. Learn as if you were to live forever.',s:'Mahatma Gandhi'},
  {t:'Learning never exhausts the mind.',s:'Leonardo da Vinci'},
  {t:'An investment in knowledge pays the best interest.',s:'Benjamin Franklin'},
  {t:'The beautiful thing about learning is nobody can take it away from you.',s:'B.B. King'},
  {t:'Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.',s:'Richard Feynman'},
  {t:'Tell me and I forget. Teach me and I remember. Involve me and I learn.',s:'Benjamin Franklin'},
  {t:'The expert in anything was once a beginner.',s:'Helen Hayes'},
  {t:'Practice is the hardest part of learning, and training is the essence of transformation.',s:'Ann Voskamp'},
  {t:'There are no shortcuts to any place worth going.',s:'Beverly Sills'},
  {t:'Success is where preparation and opportunity meet.',s:'Bobby Unser'},
  {t:'Today a reader, tomorrow a leader.',s:'Margaret Fuller'},
  {t:'Knowledge is power.',s:'Francis Bacon'},
  {t:'The roots of education are bitter, but the fruit is sweet.',s:'Aristotle'},
  {t:'You are always a student, never a master. You have to keep moving forward.',s:'Conrad Hall'},
  {t:'In learning you will teach, and in teaching you will learn.',s:'Phil Collins'},
  {t:'Push yourself, because no one else is going to do it for you.',s:'Anonymous'},
  {t:'Doubt kills more dreams than failure ever will.',s:'Suzy Kassem'},
  {t:'Stay patient and trust your journey.',s:'Anonymous'},
  {t:'Be stronger than your strongest excuse.',s:'Anonymous'},
  {t:'Discomfort is the currency of your dreams.',s:'Brooke Castillo'},
  {t:'You do not need more time, you need more focus.',s:'Anonymous'},
  {t:'A year from now you may wish you had started today.',s:'Karen Lamb'},
  {t:'The beginning is always today.',s:'Mary Wollstonecraft'},
  {t:'Greatness is consistency over intensity.',s:'Anonymous'},
  {t:'One day or day one. You decide.',s:'Paulo Coelho (attributed)'},
  {t:'Progress is progress, no matter how small.',s:'Anonymous'},
  {t:'The comeback is always stronger than the setback.',s:'Anonymous'},
  {t:'Your only limit is your mind.',s:'Anonymous'},
  {t:'Keep your eyes on the goal and your feet on the ground.',s:'Theodore Roosevelt (attributed)'},
  {t:'When your why is clear, your how becomes easier.',s:'Jim Rohn'},
  {t:'Worry less, study more.',s:'Anonymous'},
  {t:'Be so prepared that luck has to find you.',s:'Anonymous'},
  {t:'You are one focused session away from momentum.',s:'Anonymous'},
  {t:'Discipline creates freedom.',s:'Jocko Willink'},
  {t:'Suffer the pain of discipline or suffer the pain of regret.',s:'Jim Rohn'},
  {t:'Great performers focus on what they can control.',s:'Anonymous'},
  {t:'Comparison is the thief of joy; consistency is the builder of results.',s:'Anonymous'},
  {t:'Your rank is hidden in your routine.',s:'Anonymous'},
  {t:'Read less randomly, revise more deliberately.',s:'Anonymous'},
  {t:'Mock tests are mirrors, not verdicts.',s:'Anonymous'},
  {t:'Make mistakes in practice so you can avoid them in the exam.',s:'Anonymous'},
  {t:'The chapter you avoid is often the chapter that raises your score.',s:'Anonymous'},
  {t:'Silence distractions and your mind gets louder in the best way.',s:'Anonymous'},
  {t:'Consistency is what turns effort into evidence.',s:'Anonymous'},
  {t:'Strong preparation looks boring from the outside and brilliant on result day.',s:'Anonymous'},
  {t:'Do today’s work today; tomorrow has its own syllabus.',s:'Anonymous'},
  {t:'Be present in this page, this problem, this minute.',s:'Anonymous'},
  {t:'Effort compounds when direction is clear.',s:'Anonymous'},
  {t:'Calm mind, clear steps, consistent execution.',s:'Anonymous'},
  {t:'You are not behind if you are improving daily.',s:'Anonymous'},
];

// Utility: randomize quote order so repeated refreshes feel fresh.
function shuffle(a){
  const b=[...a];
  for(let i=b.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [b[i],b[j]]=[b[j],b[i]];
  }
  return b;
}

// Runtime quote cursor state.
let pool=shuffle(QUOTES), qi=0;

function fitQuoteSingleLine(){
  const qt=document.getElementById('qt');
  qt.style.fontSize='1.15rem';
  // Shrink until it fits one line in the available width.
  for(let i=0;i<14 && qt.scrollWidth>qt.clientWidth;i++){
    const size=parseFloat(getComputedStyle(qt).fontSize);
    if(size<=11.5) break;
    qt.style.fontSize=(size-1)+'px';
  }
}

// Rotates the motivational quote shown near the timer.
function nextQuote(){
  const qt=document.getElementById('qt'), qs=document.getElementById('qs');
  qt.classList.remove('show'); qs.classList.remove('show');
  setTimeout(()=>{
    if(qi>=pool.length){pool=shuffle(QUOTES);qi=0;}
    const q=pool[qi++];
    qt.textContent='\u201C'+q.t+'\u201D';
    qs.textContent=q.s;
    fitQuoteSingleLine();
    qt.classList.add('show'); qs.classList.add('show');
  },500);
}
nextQuote();
setInterval(nextQuote,30000);
window.addEventListener('resize', ()=>{
  fitQuoteSingleLine();
  updateTasksListViewport();
  if(activeMainView==='graphs') renderGraphs();
});

/* ─── COUNTDOWN ───────────────────────────────────────────────── */
let _cdIv=null;
let appConfig={ countdownName:'Your Goal', countdownDate:'', countdownEnabled:true };

function loadConfig(){
  try{ appConfig={...appConfig,...JSON.parse(localStorage.getItem(KEY_CONFIG)||'{}')}; }catch(e){}
}
function saveConfig(){ localStorage.setItem(KEY_CONFIG,JSON.stringify(appConfig)); }
function applyCountdownVisibility(){
  const app=document.querySelector('.app');
  const on=appConfig.countdownEnabled!==false;
  app?.classList.toggle('no-countdown',!on);
  document.documentElement.classList.remove('preload-no-countdown');
  const btn=document.getElementById('cd-toggle-btn');
  if(btn) btn.textContent='Countdown: '+(on?'On':'Off');
}
function applyCountdownHeader(){
  document.getElementById('cd-label-name').textContent=(appConfig.countdownName||'Your Goal');
  if(appConfig.countdownDate){
    const d=new Date(appConfig.countdownDate+'T00:00:00');
    document.getElementById('cd-target-title').textContent='Time to '+(appConfig.countdownName||'Your Goal');
    document.getElementById('cd-target-date').textContent=d.toLocaleDateString(undefined,{year:'numeric',month:'short',day:'numeric'});
  } else {
    document.getElementById('cd-target-title').textContent='Time to '+(appConfig.countdownName||'Your Goal');
    document.getElementById('cd-target-date').textContent='Configure your countdown';
  }
}
function tickCD(){
  applyCountdownHeader();
  if(!appConfig.countdownDate){
    document.getElementById('cd-d').textContent='0';
    document.getElementById('cd-h').textContent='00';
    document.getElementById('cd-m').textContent='00';
    document.getElementById('cd-s').textContent='00';
    return;
  }
  const target=new Date(appConfig.countdownDate+'T00:00:00');
  const diff=target-Date.now();
  if(diff<=0){
    document.getElementById('cd-d').textContent='0';
    document.getElementById('cd-h').textContent='00';
    document.getElementById('cd-m').textContent='00';
    document.getElementById('cd-s').textContent='00';
    return;
  }
  const d=Math.floor(diff/86400000),
        h=Math.floor((diff%86400000)/3600000),
        m=Math.floor((diff%3600000)/60000),
        s=Math.floor((diff%60000)/1000);
  document.getElementById('cd-d').textContent=d;
  document.getElementById('cd-h').textContent=pad(h);
  document.getElementById('cd-m').textContent=pad(m);
  document.getElementById('cd-s').textContent=pad(s);
}
loadConfig();
applyCountdownVisibility();
tickCD(); _cdIv=setInterval(tickCD,1000);

function toggleCountdownVisibility(){
  appConfig.countdownEnabled=!(appConfig.countdownEnabled!==false);
  saveConfig();
  applyCountdownVisibility();
  showSettingsSaved();
}

/* ─── HELPERS ─────────────────────────────────────────────────── */
function pad(n){return String(n).padStart(2,'0');}

function switchRightPanel(name){
  document.querySelectorAll('.rp-tab').forEach(btn=>btn.classList.remove('active'));
  document.querySelectorAll('.r-panel').forEach(panel=>panel.classList.remove('active'));
  const tab=document.getElementById('tab-'+name);
  const panel=document.getElementById('panel-'+name);
  if(tab) tab.classList.add('active');
  if(panel) panel.classList.add('active');
  requestAnimationFrame(updateTasksListViewport);
}

let rightPanelOpen=true;
function toggleRightPanel(){
  rightPanelOpen=!rightPanelOpen;
  const main=document.querySelector('.main');
  main?.classList.toggle('right-collapsed',!rightPanelOpen);
  const btn=document.getElementById('rp-toggle');
  if(btn) btn.textContent=rightPanelOpen?'❯':'❮';
  setTimeout(()=>{
    fitQuoteSingleLine();
    if(activeMainView==='graphs') renderGraphs();
  },360);
}

let activeMainView='timer';
function switchMainView(name){
  activeMainView=name;
  document.getElementById('main-btn-timer')?.classList.toggle('active',name==='timer');
  document.getElementById('main-btn-graphs')?.classList.toggle('active',name==='graphs');
  document.getElementById('main-view-timer')?.classList.toggle('active',name==='timer');
  document.getElementById('main-view-graphs')?.classList.toggle('active',name==='graphs');
  if(name==='graphs') renderGraphs();
}

let mobileSection='main';
function switchMobileSection(name){
  const valid=['main','graphs','overview','tasks','log','misc'];
  if(!valid.includes(name)) name='main';
  mobileSection=name;
  const main=document.querySelector('.main');
  if(!main) return;
  ['mobile-main','mobile-graphs','mobile-overview','mobile-tasks','mobile-log','mobile-misc'].forEach(c=>main.classList.remove(c));
  main.classList.add('mobile-'+name);
  valid.forEach(id=>{
    document.getElementById('mnav-'+id)?.classList.toggle('active',id===name);
  });
  if(name==='graphs') switchMainView('graphs');
  if(name==='main') switchMainView('timer');
  if(name==='overview'||name==='tasks'||name==='log'||name==='misc') switchRightPanel(name);
}

function syncMobileLayout(){
  if(window.innerWidth<=900){
    switchMobileSection(mobileSection || 'main');
  } else {
    const main=document.querySelector('.main');
    ['mobile-main','mobile-graphs','mobile-overview','mobile-tasks','mobile-log','mobile-misc'].forEach(c=>main?.classList.remove(c));
  }
}
window.addEventListener('resize', syncMobileLayout);

function updateTasksListViewport(){
  const panel=document.getElementById('panel-tasks');
  const shell=document.getElementById('tasks-shell');
  const list=document.getElementById('tasks-list');
  if(!panel || !shell || !list) return;
  const panelActive=panel.classList.contains('active');
  if(!panelActive){
    list.style.maxHeight='';
    list.style.overflowY='visible';
    return;
  }
  const available=window.innerHeight - shell.getBoundingClientRect().top - 28;
  const sampleItem=list.querySelector('.task-item');
  const itemHeight=sampleItem ? sampleItem.getBoundingClientRect().height : 38;
  const listStyles=getComputedStyle(list);
  const rowGap=parseFloat(listStyles.rowGap || listStyles.gap || '6') || 6;
  const fourTaskCap=Math.round((itemHeight*4)+(rowGap*3));
  const capped=Math.max(120, Math.min(available, fourTaskCap));
  list.style.maxHeight=capped+'px';
  list.style.overflowY=list.scrollHeight>capped?'auto':'visible';
}

/* "YYYY-MM-DD" from a ms timestamp (defaults to now) */
function dk(ms){
  const d=new Date(ms??Date.now());
  return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());
}

/* Is a ms timestamp in the current Mon–Sun week? */
function inWeek(ms){
  const now=new Date(), dow=(now.getDay()+6)%7;
  const mon=new Date(now); mon.setDate(now.getDate()-dow); mon.setHours(0,0,0,0);
  const nextMon=new Date(mon); nextMon.setDate(mon.getDate()+7);
  const d=new Date(ms);
  return d>=mon&&d<nextMon;
}

/* Is a ms timestamp in the current calendar month? */
function inMonth(ms){
  const n=new Date(),d=new Date(ms);
  return d.getFullYear()===n.getFullYear()&&d.getMonth()===n.getMonth();
}

/* Format ms → "HH:MM:SS" */
function fmtDur(ms){
  const s=Math.floor(Math.max(0,ms)/1000);
  return pad(Math.floor(s/3600))+':'+pad(Math.floor((s%3600)/60))+':'+pad(s%60);
}

/* Format timestamp → "9:15 AM" */
function fmtT(ms){
  const d=new Date(ms); let h=d.getHours(),m=d.getMinutes();
  const ap=h>=12?'PM':'AM'; h=h%12||12;
  return h+':'+pad(m)+'\u202F'+ap;
}

/* Format ms → "Xh Ym" */
function fmtHM(ms){
  return Math.floor(ms/3600000)+'h\u202F'+Math.floor((ms%3600000)/60000)+'m';
}

/* ─── TIMER STATE ─────────────────────────────────────────────── */
/*
   ACCURACY GUARANTEE:
   elapsed = (now - sessionStart) - totalPaused - ongoingPauseDuration
   This is computed fresh on every read using real wall-clock timestamps.
   setInterval is ONLY used to refresh the visible display.
   Therefore: sleeping laptop, throttled background tab, page refresh —
   none of these affect accuracy. The number is always correct when read.
*/
let ts={status:'idle',sessionStart:null,pauseStart:null,totalPaused:0};
let _iv=null;

function saveTS(){localStorage.setItem(KEY_TIMER,JSON.stringify(ts));}
function loadTS(){
  try{const r=localStorage.getItem(KEY_TIMER);if(r)ts=JSON.parse(r);}catch(e){}
}

function elapsed(){
  if(!ts.sessionStart)return 0;
  // If currently paused, include ongoing pause duration in the subtraction
  const op=(ts.status==='paused'&&ts.pauseStart)?(Date.now()-ts.pauseStart):0;
  return Math.max(0,Date.now()-ts.sessionStart-ts.totalPaused-op);
}

function refreshDisplay(){
  const t=fmtDur(elapsed());
  document.getElementById('timer').textContent=t;
  if(ts.status==='running') document.title='\u25B6\uFE0E '+t+' \u00B7 Dream Study';
  else if(ts.status==='paused') document.title='\u23F8\uFE0E '+t+' \u00B7 Dream Study';
  // Load sessions once and share across all dependent updates to avoid 4× localStorage reads per tick
  const _sessions=loadSessions();
  if(activeMainView==='graphs') renderGraphs();
  checkBreakReminder();
  // BUG FIX: Update stat card elements live so they tick every second during a session.
  // Previously these were only set inside renderLog() (called at boot and after Stop),
  // so they froze at the boot value for the entire duration of a session.
  if(ts.status==='running'||ts.status==='paused'){
    const todayKey=dk(), e=elapsed();
    const _todayMs =_sessions.filter(s=>(s.date||dk(s.startTs))===todayKey).reduce((a,s)=>a+s.duration,0)+e;
    const _weekMs  =_sessions.filter(s=>inWeek(s.startTs)).reduce((a,s)=>a+s.duration,0)+e;
    const _monthMs =_sessions.filter(s=>inMonth(s.startTs)).reduce((a,s)=>a+s.duration,0)+e;
    const _allTime =_sessions.reduce((a,s)=>a+s.duration,0)+e;
    const _byDay={};
    _sessions.forEach(s=>{ const k=s.date||dk(s.startTs); _byDay[k]=(_byDay[k]||0)+s.duration; });
    _byDay[todayKey]=(_byDay[todayKey]||0)+e;
    const _avgMs=Object.keys(_byDay).length?Object.values(_byDay).reduce((a,v)=>a+v,0)/Object.keys(_byDay).length:0;
    document.getElementById('s-today').textContent  =fmtHM(_todayMs);
    document.getElementById('s-week').textContent   =fmtHM(_weekMs);
    document.getElementById('s-month').textContent  =fmtHM(_monthMs);
    document.getElementById('s-alltime').textContent=fmtHM(_allTime);
    document.getElementById('s-avg').textContent    =fmtHM(_avgMs);
  }
}

/* Sync all button states and visuals to current status */
function applyUI(st){
  const bs=document.getElementById('b-start'),
        bp=document.getElementById('b-pause'),
        bx=document.getElementById('b-stop'),
        td=document.getElementById('timer'),
        tl=document.getElementById('tline');
  bs.disabled = st!=='idle';
  bp.disabled = st==='idle';
  bx.disabled = st==='idle';
  bp.textContent = st==='paused'?'Resume':'Pause';
  td.classList.toggle('paused', st==='paused');
  tl.classList.toggle('on',     st==='running');
}

/* ─── START ───────────────────────────────────────────────────── */
function timerStart(){
  if(ts.status!=='idle')return;
  ts={status:'running',sessionStart:Date.now(),pauseStart:null,totalPaused:0};
  // Hide any previous session summary card and clear its content
  const sc=document.getElementById('scard');
  sc.classList.remove('show');
  document.getElementById('sc-dur').textContent='';
  document.getElementById('sc-body').textContent='';
  document.getElementById('tmeta').textContent='Started at\u202F'+fmtT(ts.sessionStart);
  saveTS(); applyUI('running');
  clearInterval(_iv); _iv=setInterval(refreshDisplay,1000); refreshDisplay();
}

/* ─── PAUSE / RESUME ──────────────────────────────────────────── */
function timerPause(){
  if(ts.status==='running'){
    ts.pauseStart=Date.now(); ts.status='paused';
    clearInterval(_iv); _iv=null;
    // Snap display to exact elapsed at the moment of pause before freezing
    refreshDisplay();
  } else if(ts.status==='paused'){
    ts.totalPaused+=Date.now()-ts.pauseStart;
    ts.pauseStart=null; ts.status='running';
    clearInterval(_iv); _iv=setInterval(refreshDisplay,1000); refreshDisplay();
  }
  saveTS(); applyUI(ts.status);
}

/* ─── STOP ────────────────────────────────────────────────────── */
function timerStop(){
  if(ts.status==='idle')return;
  const endTs=Date.now(), dur=elapsed(), startTs=ts.sessionStart;

  document.querySelector('#scard .sc-lbl').textContent='Session Logged';
  document.getElementById('sc-dur').textContent=fmtDur(dur);
  document.getElementById('sc-body').textContent=
    fmtT(startTs)+'\u2009→\u2009'+fmtT(endTs);
  const scard=document.getElementById('scard');
  scard.classList.add('show');
  if(window.matchMedia('(max-width: 980px)').matches){
    requestAnimationFrame(()=>scard.scrollIntoView({behavior:'smooth',block:'nearest'}));
  }

  // Only persist sessions longer than 30 seconds (avoids accidental clicks)
  if(dur>=30000){
    const arr=loadSessions();
    arr.push({date:dk(startTs),startTs,endTs,duration:dur});
    try{
      localStorage.setItem(KEY_SESSIONS,JSON.stringify(arr));
    }catch(e){
      // Storage quota exceeded — warn user so data isn't silently lost
      console.error('Storage quota exceeded:',e);
      alert('⚠️ Storage full — this session could not be saved.\nPlease export your data and clear it to free up space.');
    }
  } else {
    // Silently discard sessions under 30 seconds — update card to inform user
    document.getElementById('sc-body').textContent='(Session under 30 seconds — not saved to log)';
  }

  // Full reset
  ts={status:'idle',sessionStart:null,pauseStart:null,totalPaused:0};
  clearInterval(_iv); _iv=null;
  localStorage.removeItem(KEY_TIMER);
  document.getElementById('timer').textContent='00:00:00';
  document.getElementById('tmeta').textContent='\u00a0';
  document.title='Dream Study'; // reset tab title
  _breakShown=false; // reset break reminder for next session
  dismissBreak();
  applyUI('idle');
  renderLog();
}

/* ─── DISCARD LIVE SESSION ────────────────────────────────────── */
/*
   Used after a power cut or accidental start — throws away the current
   session without saving it, and resets the timer to idle.
*/
function discardLive(){
  if(ts.status==='idle')return;
  const ok=confirm('Discard current session without saving?\n\nUse this after a power cut or accidental start.');
  if(!ok)return;
  ts={status:'idle',sessionStart:null,pauseStart:null,totalPaused:0};
  clearInterval(_iv); _iv=null;
  localStorage.removeItem(KEY_TIMER);
  document.getElementById('timer').textContent='00:00:00';
  document.getElementById('tmeta').textContent='\u00a0';
  document.title='Dream Study';
  _breakShown=false;
  dismissBreak();
  applyUI('idle');
  renderLog();
}

/* ─── DISCARD SAVED SESSION ───────────────────────────────────── */
/*
   Removes a specific saved session by its startTs (unique timestamp).
   Called from the ✕ button on each today's-session row.
*/
function discardSession(startTs){
  const ok=confirm('Remove this session from the log?\n\nThis cannot be undone.');
  if(!ok)return;
  const arr=loadSessions().filter(s=>s.startTs!==startTs);
  localStorage.setItem(KEY_SESSIONS,JSON.stringify(arr));
  renderLog();
}

/* ─── SESSION STORAGE ─────────────────────────────────────────── */
function loadSessions(){
  try{
    const raw=JSON.parse(localStorage.getItem(KEY_SESSIONS))||[];
    const out=raw
      .filter(s=>s && Number.isFinite(s.startTs) && Number.isFinite(s.duration) && s.duration>=0)
      .map(s=>{
        const startTs=Number(s.startTs);
        const duration=Number(s.duration);
        const endTs=Number.isFinite(s.endTs) ? Number(s.endTs) : startTs+duration;
        const date=(typeof s.date==='string' && /^\d{4}-\d{2}-\d{2}$/.test(s.date)) ? s.date : dk(startTs);
        return {...s,startTs,duration,endTs,date};
      });
    out.sort((a,b)=>a.startTs-b.startTs);
    return out;
  }catch(e){return[];}
}

/* ─── STREAK ──────────────────────────────────────────────────── */
/*
   Counts consecutive days (ending today or yesterday) with ≥1 session.
   If today has study: count from today backward.
   If today has no study yet: count from yesterday backward.
   Safety cap: 730 iterations (2 years max).
*/
function calcStreak(byDay){
  const cur=new Date();
  if(!byDay[dk(cur.getTime())])cur.setDate(cur.getDate()-1);
  let streak=0;
  for(let i=0;i<730;i++){
    if(!byDay[dk(cur.getTime())])break;
    streak++; cur.setDate(cur.getDate()-1);
  }
  return streak;
}

/* ─── RENDER LOG ──────────────────────────────────────────────── */
let logRange='today';
function setLogRange(range){
  logRange=range;
  document.getElementById('log-range-today')?.classList.toggle('active',range==='today');
  document.getElementById('log-range-week')?.classList.toggle('active',range==='week');
  document.getElementById('log-range-month')?.classList.toggle('active',range==='month');
  const hdr=document.getElementById('log-hdr');
  if(hdr){
    hdr.textContent=range==='today'?'Today’s Sessions':range==='week'?'This Week’s Sessions':'This Month’s Sessions';
  }
  renderLog();
}

function formatSessionRangeLabel(session,range){
  const base=fmtT(session.startTs)+' – '+fmtT(session.endTs);
  if(range==='today') return base;
  const d=new Date(session.startTs);
  const monthYear=d.toLocaleDateString(undefined,{month:'short',year:'numeric'});
  const dayOfMonth=d.getDate();
  const firstOfMonth=new Date(d.getFullYear(),d.getMonth(),1);
  const dayOffsetToMonday=(firstOfMonth.getDay()+6)%7;
  const firstWeekMonday=new Date(firstOfMonth);
  firstWeekMonday.setDate(firstOfMonth.getDate()-dayOffsetToMonday);
  firstWeekMonday.setHours(0,0,0,0);

  const thisDateMidnight=new Date(d.getFullYear(),d.getMonth(),d.getDate());
  const msPerDay=24*60*60*1000;
  const weekOfMonth=Math.floor((thisDateMidnight-firstWeekMonday)/(7*msPerDay))+1;

  const weekStartDate=new Date(firstWeekMonday);
  weekStartDate.setDate(firstWeekMonday.getDate()+((weekOfMonth-1)*7));
  const weekEndDate=new Date(weekStartDate);
  weekEndDate.setDate(weekStartDate.getDate()+6);

  const monthStart=new Date(d.getFullYear(),d.getMonth(),1);
  const monthEnd=new Date(d.getFullYear(),d.getMonth()+1,0);
  const visibleStart=weekStartDate<monthStart ? monthStart : weekStartDate;
  const visibleEnd=weekEndDate>monthEnd ? monthEnd : weekEndDate;

  const weekStart=visibleStart.toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'});
  const weekEnd=visibleEnd.toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'});
  const weekBadge=`<span title="${weekStart} – ${weekEnd}">W${weekOfMonth}</span>`;
  return `${base} (${dayOfMonth} ${monthYear}, ${weekBadge})`;
}

function renderLog(){
  const sessions=loadSessions();
  const today=dk();
  let todayMs=0,weekMs=0,monthMs=0,allTime=0;
  let todaySessions=[];
  const byDay={};

  sessions.forEach(s=>{
    const key=s.date||dk(s.startTs);
    allTime+=s.duration;
    byDay[key]=(byDay[key]||0)+s.duration;
    if(key===today){todayMs+=s.duration;todaySessions.push(s);}
    if(inWeek(s.startTs)) weekMs+=s.duration;
    if(inMonth(s.startTs)) monthMs+=s.duration;
  });

  // BUG FIX: Include the currently running/paused session in all stat totals and byDay.
  // Without this: stats freeze at boot value; streak won't count today until you Stop.
  if(ts.status==='running'||ts.status==='paused'){
    const e=elapsed();
    todayMs+=e; weekMs+=e; monthMs+=e; allTime+=e;
    byDay[today]=(byDay[today]||0)+e; // ensures calcStreak counts today's live session
  }
  const allDays=Object.keys(byDay).length;
  const avgMs=allDays>0?Object.values(byDay).reduce((a,v)=>a+v,0)/allDays:0;

  const streak=calcStreak(byDay);

  document.getElementById('s-today').textContent  =fmtHM(todayMs);
  document.getElementById('s-week').textContent   =fmtHM(weekMs);
  document.getElementById('s-month').textContent  =fmtHM(monthMs);
  document.getElementById('s-avg').textContent    =fmtHM(avgMs);
  document.getElementById('s-streak').textContent =streak+(streak===1?'\u202Fday':'\u202Fdays');
  document.getElementById('s-alltime').textContent=fmtHM(allTime);

  renderGraphs();

  // Sessions list by selected range, newest first
  const listEl=document.getElementById('log-list');
  const shownSessions=
    logRange==='today' ? todaySessions :
    logRange==='week'  ? sessions.filter(s=>inWeek(s.startTs)) :
                         sessions.filter(s=>inMonth(s.startTs));
  if(!shownSessions.length){
    listEl.innerHTML='<div class="log-empty">No sessions yet.<br>Start your first focused session.</div>';
    return;
  }
  listEl.innerHTML=shownSessions.slice().sort((a,b)=>b.startTs-a.startTs).map(s=>
    `<div class="log-row">
      <span class="log-time">${formatSessionRangeLabel(s,logRange)}</span>
      <span class="log-dur">${fmtDur(s.duration)}</span>
      <button class="log-discard" onclick="discardSession(${s.startTs})" title="Discard this session">✕</button>
    </div>`
  ).join('');
}

/* ─── BREAK REMINDER ──────────────────────────────────────────── */
/*
   After 90 continuous minutes, show a gentle toast.
   Fires once per session — dismissed state resets on Stop/Start.
   Why: research shows 90-min ultradian cycles; a break boosts retention.
*/
let _breakShown=false;
let _breakTimer=null;
const BREAK_MS=90*60*1000;
function checkBreakReminder(){
  if(_breakShown||ts.status!=='running') return;
  if(elapsed()>=BREAK_MS){
    _breakShown=true;
    document.getElementById('break-toast').classList.add('show');
    // Auto-dismiss after 12 seconds — clear any existing timer first
    if(_breakTimer) clearTimeout(_breakTimer);
    _breakTimer=setTimeout(dismissBreak,12000);
  }
}
function dismissBreak(){
  if(_breakTimer){clearTimeout(_breakTimer);_breakTimer=null;}
  document.getElementById('break-toast').classList.remove('show');
}

function openCountdownSettings(){
  document.getElementById('cd-name-input').value=appConfig.countdownName||'';
  document.getElementById('cd-date-input').value=appConfig.countdownDate||'';
  document.getElementById('countdown-settings-modal').classList.add('open');
}
function closeCountdownSettings(){
  document.getElementById('countdown-settings-modal').classList.remove('open');
}
let saveToastTimer=null;
function showSettingsSaved(){
  const toast=document.getElementById('settings-save-toast');
  if(!toast) return;
  toast.classList.add('show');
  if(saveToastTimer) clearTimeout(saveToastTimer);
  saveToastTimer=setTimeout(()=>toast.classList.remove('show'),1400);
}
function saveCountdownSettings(){
  const name=(document.getElementById('cd-name-input').value||'').trim();
  const date=(document.getElementById('cd-date-input').value||'').trim();
  appConfig.countdownName=name||'Your Goal';
  appConfig.countdownDate=date;
  saveConfig();
  closeCountdownSettings();
  tickCD();
  showSettingsSaved();
}

/* ─── DATA EXPORT ─────────────────────────────────────────────── */
function openExport(){
  const sessions=loadSessions();
  const total=sessions.reduce((a,s)=>a+s.duration,0);
  const days=new Set(sessions.map(s=>s.date||dk(s.startTs))).size;
  document.getElementById('exp-sub').textContent=
    sessions.length+' session'+(sessions.length===1?'':'s')+' across '+days+' day'+(days===1?'':'s');
  document.getElementById('exp-stats').textContent=
    'Total studied: '+fmtHM(total)+
    '  ·  Avg/day: '+fmtHM(days>0?total/days:0);
  document.getElementById('export-modal').classList.add('open');
}
function closeExport(){
  document.getElementById('export-modal').classList.remove('open');
}

function openClear(){
  document.getElementById('clear-modal').classList.add('open');
}
function closeClear(){
  document.getElementById('clear-modal').classList.remove('open');
}

/* ─── ADD HOURS MANUALLY ──────────────────────────────────────── */
function openAddHours(){
  // Default date to today
  const d=new Date();
  const dateStr=d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());
  document.getElementById('ah-date').value=dateStr;
  document.getElementById('ah-start').value='09:00';
  document.getElementById('ah-end').value='10:00';
  syncManualDuration();
  document.getElementById('add-hours-modal').classList.add('open');
}
function closeAddHours(){
  document.getElementById('add-hours-modal').classList.remove('open');
}
function syncManualDuration(){
  const dateVal=document.getElementById('ah-date')?.value;
  const startVal=document.getElementById('ah-start')?.value;
  const endVal=document.getElementById('ah-end')?.value;
  const hrsEl=document.getElementById('ah-hours');
  const minsEl=document.getElementById('ah-minutes');
  if(!hrsEl||!minsEl) return;
  if(!dateVal||!startVal||!endVal){
    hrsEl.value='0'; minsEl.value='0';
    return;
  }
  const startTs=new Date(`${dateVal}T${startVal}:00`).getTime();
  const endTs=new Date(`${dateVal}T${endVal}:00`).getTime();
  if(!Number.isFinite(startTs)||!Number.isFinite(endTs)||endTs<=startTs){
    hrsEl.value='0'; minsEl.value='0';
    return;
  }
  const totalMins=Math.round((endTs-startTs)/60000);
  hrsEl.value=String(Math.floor(totalMins/60));
  minsEl.value=String(totalMins%60);
}

function saveManualHours(){
  const dateVal=document.getElementById('ah-date').value;
  const startVal=document.getElementById('ah-start').value;
  const endVal=document.getElementById('ah-end').value;
  if(!dateVal){alert('Please select a date.');return;}
  if(!startVal||!endVal){alert('Please enter both start and end time.');return;}

  const startTs=new Date(`${dateVal}T${startVal}:00`).getTime();
  const endTs=new Date(`${dateVal}T${endVal}:00`).getTime();
  if(!Number.isFinite(startTs)||!Number.isFinite(endTs)||endTs<=startTs){
    alert('End time must be later than start time on the same date.');
    return;
  }

  const durMs=endTs-startTs;

  const arr=loadSessions();
  const used=new Set(arr.map(s=>s.startTs));
  let uniqueStartTs=startTs;
  while(used.has(uniqueStartTs)) uniqueStartTs+=1;
  const adjustedEndTs=uniqueStartTs+durMs;
  const dateKey=dateVal; // already in YYYY-MM-DD

  arr.push({date:dateKey,startTs:uniqueStartTs,endTs:adjustedEndTs,duration:durMs});
  try{
    localStorage.setItem(KEY_SESSIONS,JSON.stringify(arr));
  }catch(e){
    alert('Storage full — could not save. Please export and clear old data.');
    return;
  }
  closeAddHours();
  renderLog();
}
const MODAL_CLOSE_HANDLERS={
  'export-modal': closeExport,
  'add-hours-modal': closeAddHours,
  'clear-modal': closeClear,
  'countdown-settings-modal': closeCountdownSettings,
  'day-settings-modal': closeDaySettings
};
function anyModalOpen(){
  return Object.keys(MODAL_CLOSE_HANDLERS).some(id=>document.getElementById(id)?.classList.contains('open'));
}
document.addEventListener('click',e=>{
  for(const [id,closeFn] of Object.entries(MODAL_CLOSE_HANDLERS)){
    const modal=document.getElementById(id);
    if(e.target===modal){ closeFn(); break; }
  }
});
// Close on Escape (captured early so timer shortcuts won't fire)
document.addEventListener('keydown',e=>{
  if(e.code!=='Escape') return;
  for(const [id,closeFn] of Object.entries(MODAL_CLOSE_HANDLERS)){
    if(document.getElementById(id)?.classList.contains('open')){
      e.stopImmediatePropagation();
      closeFn();
      break;
    }
  }
},{capture:true});

function exportCSV(){
  const sessions=loadSessions();
  if(!sessions.length){alert('No sessions to export yet.');return;}
  const header='Date,Start Time,End Time,Duration (HH:MM:SS),Duration (minutes)';
  const rows=sessions.map(s=>{
    const d=new Date(s.startTs);
    const date=s.date|| (d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate()));
    const durMins=Math.round(s.duration/60000);
    return [date,fmtT(s.startTs),fmtT(s.endTs),fmtDur(s.duration),durMins].join(',');
  });
  const csv=[header,...rows].join('\n');
  const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url; a.download='focus-session-log-'+dk()+'.csv';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(()=>URL.revokeObjectURL(url), 250);
  closeExport();
}

function exportJSON(){
  const sessions=loadSessions();
  if(!sessions.length){alert('No sessions to export yet.');return;}
  const payload={
    exportedAt:new Date().toISOString(),
    totalSessions:sessions.length,
    totalMs:sessions.reduce((a,s)=>a+s.duration,0),
    sessions
  };
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url; a.download='focus-session-backup-'+dk()+'.json';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(()=>URL.revokeObjectURL(url), 250);
  closeExport();
}

function copyText(){
  const sessions=loadSessions();
  const total=sessions.reduce((a,s)=>a+s.duration,0);
  const days=new Set(sessions.map(s=>s.date||dk(s.startTs))).size;
  const byDay={};
  sessions.forEach(s=>{const k=s.date||dk(s.startTs);byDay[k]=(byDay[k]||0)+s.duration;});
  const streak=calcStreak(byDay);
  const allTime=fmtHM(total);
  const avgDay=fmtHM(days>0?total/days:0);
  const todayMs=byDay[dk()]||0;

  const text=[
    'Focus Session Summary ('+new Date().toDateString()+')',
    '─────────────────────────────',
    'Today         : '+fmtHM(todayMs),
    'All-Time      : '+allTime,
    'Days Studied  : '+days,
    'Avg / Day     : '+avgDay,
    'Current Streak: '+streak+(streak===1?' day':' days'),
    '─────────────────────────────',
    'Exported from Dream Study'
  ].join('\n');

  navigator.clipboard.writeText(text)
    .then(()=>{
      const btn=document.getElementById('copy-btn-title');
      const orig=btn.textContent;
      btn.textContent='✅ Copied!';
      setTimeout(()=>{btn.textContent=orig;},2000);
    })
    .catch(()=>alert('Copy failed — please copy manually:\n\n'+text));
}

function confirmClear(scope){
  const sessions=loadSessions();
  if(!sessions.length){alert('Nothing to clear.');return;}

  let filtered, label;
  if(scope==='today'){
    const today=dk();
    filtered=sessions.filter(s=>(s.date||dk(s.startTs))===today);
    label="today's";
  } else if(scope==='week'){
    filtered=sessions.filter(s=>inWeek(s.startTs));
    label="this week's";
  } else if(scope==='month'){
    filtered=sessions.filter(s=>inMonth(s.startTs));
    label="this month's";
  } else {
    filtered=sessions;
    label='ALL';
  }

  if(!filtered.length){alert('No sessions found for that period.');return;}

  const ok=confirm(
    'Delete '+filtered.length+' '+label+' session'+(filtered.length===1?'':'s')+'?\n\n'+
    (scope==='all'?'Download a backup first — ':'')+'This cannot be undone.'
  );
  if(!ok)return;

  let remaining;
  if(scope==='today'){
    const today=dk();
    remaining=sessions.filter(s=>(s.date||dk(s.startTs))!==today);
  } else if(scope==='week'){
    remaining=sessions.filter(s=>!inWeek(s.startTs));
  } else if(scope==='month'){
    remaining=sessions.filter(s=>!inMonth(s.startTs));
  } else {
    remaining=[];
  }

  if(remaining.length){
    localStorage.setItem(KEY_SESSIONS,JSON.stringify(remaining));
  } else {
    localStorage.removeItem(KEY_SESSIONS);
  }

  // If clearing all, also reset live timer state
  if(scope==='all'){
    localStorage.removeItem(KEY_TIMER);
    ts={status:'idle',sessionStart:null,pauseStart:null,totalPaused:0};
    clearInterval(_iv); _iv=null;
    _breakShown=false;
    dismissBreak();
    document.getElementById('timer').textContent='00:00:00';
    document.getElementById('tmeta').textContent='\u00a0';
    document.title='Dream Study';
    applyUI('idle');
  }

  renderLog();
  closeClear();
  closeExport();
}

/* ─── NIGHT SKY BACKGROUND ────────────────────────────────────── */
(function(){
  const canvas = document.getElementById('star-canvas');
  const ctx    = canvas.getContext('2d');
  const W = ()=>canvas.width, H = ()=>canvas.height;

  // BUG FIX: nebulaDone must reset on resize so nebula rebuilds at new size.
  // Previously it stayed true after resize, so the old wrong-sized canvas
  // kept being stamped onto the resized main canvas.
  let nebulaDone=false, nebulaCanvas=null;

  function resize(){
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    nebulaDone=false;         // force nebula rebuild at new dimensions
  }
  resize();
  window.addEventListener('resize', resize);

  /* ── 1. STARS ────────────────────────────────────────────────── */
  const COLOURS=[
    'rgba(196,162,70,','rgba(222,187,96,',
    'rgba(116,96,42,', 'rgba(219,211,190,',
  ];
  function mkStar(){
    const type=Math.random()<0.6?'drift':'twinkle';
    return {
      type,
      x:Math.random()*window.innerWidth,
      y:Math.random()*window.innerHeight,
      r:Math.random()*1.1+0.3,
      col:COLOURS[Math.floor(Math.random()*COLOURS.length)],
      vx:(Math.random()-0.5)*0.18, vy:(Math.random()-0.5)*0.12,
      phase:Math.random()*Math.PI*2,
      freq:0.004+Math.random()*0.008,
      baseAlpha:0.1+Math.random()*0.35,
    };
  }
  const stars=Array.from({length:110},mkStar);

  /* ── 1b. FIREFLIES ───────────────────────────────────────────── */
  /*
     Slow golden lantern-like motes drifting in the dark.
     Much larger than stars, very slow movement, soft radial glow.
     Add depth and warmth to the night atmosphere.
  */
  function mkFirefly(){
    return {
      x: Math.random()*window.innerWidth,
      y: Math.random()*window.innerHeight,
      r: 1.4+Math.random()*1.2,
      vx: (Math.random()-0.5)*0.22,
      vy: (Math.random()-0.5)*0.14,
      phase: Math.random()*Math.PI*2,
      freq:  0.003+Math.random()*0.005,
      baseAlpha: 0.18+Math.random()*0.22,
    };
  }
  const fireflies=Array.from({length:18},mkFirefly);
  /* ── 3. SHOOTING STARS ───────────────────────────────────────── */
  let shooters=[];
  let nextShoot=300+Math.floor(Math.random()*300);

  function spawnShooter(){
    const sx=Math.random()*W()*0.6;
    const sy=Math.random()*H()*0.35;
    const angle=(Math.PI/6)+(Math.random()*Math.PI/9);
    const speed=5+Math.random()*4;
    shooters.push({
      x:sx, y:sy,
      vx:Math.cos(angle)*speed, vy:Math.sin(angle)*speed,
      length:90+Math.random()*80, life:1.0,
      decay:0.022+Math.random()*0.012,
    });
  }

  function drawShooters(){
    shooters=shooters.filter(s=>s.life>0);
    for(const s of shooters){
      s.x+=s.vx; s.y+=s.vy; s.life-=s.decay;
      const alpha=s.life*0.6;
      const ang=Math.atan2(s.vy,s.vx);
      const tx=s.x-Math.cos(ang)*s.length;
      const ty=s.y-Math.sin(ang)*s.length;
      const grad=ctx.createLinearGradient(tx,ty,s.x,s.y);
      grad.addColorStop(0,'rgba(222,187,96,0)');
      grad.addColorStop(0.6,`rgba(222,187,96,${(alpha*0.4).toFixed(3)})`);
      grad.addColorStop(1,`rgba(235,215,140,${alpha.toFixed(3)})`);
      ctx.save();
      ctx.strokeStyle=grad; ctx.lineWidth=1.2; ctx.lineCap='round';
      ctx.beginPath(); ctx.moveTo(tx,ty); ctx.lineTo(s.x,s.y); ctx.stroke();
      ctx.beginPath(); ctx.arc(s.x,s.y,1.1,0,Math.PI*2);
      ctx.fillStyle=`rgba(240,220,160,${(alpha*0.9).toFixed(3)})`; ctx.fill();
      ctx.restore();
    }
  }

  /* ── 4. NEBULA WISPS ─────────────────────────────────────────── */
  /*
     BUG FIX 3 — broken scale+coordinate math made wisps invisible.
       Previous code called nc.scale(rx/max, ry/max) to make an ellipse,
       then manually divided the arc center by those same scale factors —
       which is wrong (you don't divide coords when using ctx.scale()).
       Also the radialGradient was created in unscaled space while the
       arc was drawn in scaled space, so gradient and shape mismatched.
     BUG FIX 4 — opacity was 0.015–0.022 (completely invisible).
       Now using 0.07–0.10, still soft and non-distracting.
     Fix: use ctx.ellipse() which needs no manual coordinate juggling,
       and create the gradient in the same unscaled coordinate space.
  */
  function buildNebula(){
    nebulaCanvas=document.createElement('canvas');
    nebulaCanvas.width=W(); nebulaCanvas.height=H();
    const nc=nebulaCanvas.getContext('2d');
    const wisps=[
      {x:W()*0.14,y:H()*0.20,rx:W()*0.20,ry:H()*0.13,col:[196,162,70],a:0.09},
      {x:W()*0.72,y:H()*0.54,rx:W()*0.16,ry:H()*0.11,col:[116, 96,42],a:0.07},
      {x:W()*0.42,y:H()*0.80,rx:W()*0.22,ry:H()*0.09,col:[196,162,70],a:0.07},
    ];
    for(const w of wisps){
      // Gradient uses the larger radius so it fills the ellipse properly
      const maxR=Math.max(w.rx,w.ry);
      const g=nc.createRadialGradient(w.x,w.y,0,w.x,w.y,maxR);
      g.addColorStop(0,`rgba(${w.col},${w.a})`);
      g.addColorStop(1,'rgba(0,0,0,0)');
      nc.save();
      // Scale y-axis to squash circle into ellipse — gradient stays in original space
      nc.translate(w.x,w.y);
      nc.scale(1, w.ry/w.rx);
      nc.translate(-w.x,-w.y);
      nc.fillStyle=g;
      nc.beginPath();
      nc.arc(w.x,w.y,w.rx,0,Math.PI*2);
      nc.fill();
      nc.restore();
    }
    nebulaDone=true;
  }

  /* ── MAIN LOOP ───────────────────────────────────────────────── */
  let frame=0;
  function draw(){
    frame++;
    ctx.clearRect(0,0,W(),H());

    // Nebula (pre-rendered offscreen, rebuilt on resize)
    if(!nebulaDone) buildNebula();
    if(nebulaCanvas) ctx.drawImage(nebulaCanvas,0,0);

    // Moon intentionally removed per UI preference.

    // Stars
    for(const p of stars){
      if(p.type==='drift'){
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<-4) p.x=W()+4; if(p.x>W()+4) p.x=-4;
        if(p.y<-4) p.y=H()+4; if(p.y>H()+4) p.y=-4;
      }
      const alpha=p.baseAlpha*(0.45+0.55*Math.abs(Math.sin(frame*p.freq+p.phase)));
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=p.col+alpha.toFixed(3)+')'; ctx.fill();
    }

    // Fireflies — slow-drifting golden motes with soft glow
    for(const f of fireflies){
      f.x+=f.vx; f.y+=f.vy;
      if(f.x<-10) f.x=W()+10; if(f.x>W()+10) f.x=-10;
      if(f.y<-10) f.y=H()+10; if(f.y>H()+10) f.y=-10;
      const a=f.baseAlpha*(0.3+0.7*Math.abs(Math.sin(frame*f.freq+f.phase)));
      // Soft radial halo
      const g=ctx.createRadialGradient(f.x,f.y,0,f.x,f.y,f.r*5);
      g.addColorStop(0,`rgba(222,187,96,${(a*0.9).toFixed(3)})`);
      g.addColorStop(0.4,`rgba(196,162,70,${(a*0.25).toFixed(3)})`);
      g.addColorStop(1,'rgba(196,162,70,0)');
      ctx.beginPath(); ctx.arc(f.x,f.y,f.r*5,0,Math.PI*2);
      ctx.fillStyle=g; ctx.fill();
      // Bright core
      ctx.beginPath(); ctx.arc(f.x,f.y,f.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(240,215,140,${(a*1.0).toFixed(3)})`; ctx.fill();
    }

    // Shooting stars
    if(--nextShoot<=0){
      spawnShooter();
      nextShoot=480+Math.floor(Math.random()*540);
    }
    drawShooters();

    // Horizon mist — subtle warm glow at the bottom edge
    const mist=ctx.createLinearGradient(0,H()*0.78,0,H());
    mist.addColorStop(0,'rgba(0,0,0,0)');
    mist.addColorStop(1,'rgba(18,12,4,0.38)');
    ctx.fillStyle=mist;
    ctx.fillRect(0,H()*0.78,W(),H()*0.22);

    requestAnimationFrame(draw);
  }
  draw();
})();

document.addEventListener('keydown', e=>{
  if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA') return;
  if(anyModalOpen()) return;
  if(e.code==='Space'){
    e.preventDefault();
    if(ts.status==='idle') timerStart();
    else timerPause();
  } else if(e.code==='Escape'){
    if(ts.status!=='idle') timerStop();
  }
});

/* ─── CONFIGURE DAY / RIGHT NOW ───────────────────────────────── */
const DEFAULT_DAY_PLAN=[
  {start:'09:00',end:'11:00',label:'Deep Work'}
];
function loadDayPlan(){
  try{
    const p=JSON.parse(localStorage.getItem(KEY_DAY_PLAN)||'null');
    if(Array.isArray(p)&&p.length) return p;
    return DEFAULT_DAY_PLAN;
  }catch(e){ return DEFAULT_DAY_PLAN; }
}
function saveDayPlan(plan){ localStorage.setItem(KEY_DAY_PLAN,JSON.stringify(plan)); }
function toMinutes(hhmm){ const [h,m]=(hhmm||'').split(':').map(Number); return h*60+m; }
function fmtMinLeft(mins){
  const h=Math.floor(mins/60), m=mins%60;
  if(h>0&&m>0) return h+'h '+m+'m left';
  if(h>0) return h+'h left';
  return m+'m left';
}
function openDaySettings(){
  renderDayPlanFields(loadDayPlan());
  document.getElementById('day-settings-modal').classList.add('open');
}
function closeDaySettings(){ document.getElementById('day-settings-modal').classList.remove('open'); }
function renderDayPlanFields(plan){
  const host=document.getElementById('day-plan-fields');
  host.innerHTML=(plan||[]).map((row,i)=>`<div class="ah-row" style="margin-bottom:8px;align-items:center">
    <input class="ah-input" type="time" value="${row.start||''}" id="dp-start-${i}" />
    <input class="ah-input" type="time" value="${row.end||''}" id="dp-end-${i}" />
    <input class="ah-input" type="text" maxlength="40" placeholder="Activity" value="${(row.label||'').replace(/"/g,'&quot;')}" id="dp-label-${i}" />
    <button class="day-row-del" type="button" onclick="removeDayPlanRow(${i})" title="Delete block">✕</button>
  </div>`).join('');
}
function removeDayPlanRow(idx){
  const rows=[...document.querySelectorAll('#day-plan-fields .ah-row')].map((_,i)=>({
    start:document.getElementById('dp-start-'+i)?.value||'',
    end:document.getElementById('dp-end-'+i)?.value||'',
    label:(document.getElementById('dp-label-'+i)?.value||'').trim()
  }));
  rows.splice(idx,1);
  renderDayPlanFields(rows);
}
function addDayPlanRow(){
  const existing=[...document.querySelectorAll('#day-plan-fields .ah-row')].map((_,i)=>({
    start:document.getElementById('dp-start-'+i)?.value||'',
    end:document.getElementById('dp-end-'+i)?.value||'',
    label:(document.getElementById('dp-label-'+i)?.value||'').trim()
  }));
  const plan=existing.length?existing:loadDayPlan();
  plan.push({start:'',end:'',label:''});
  renderDayPlanFields(plan);
}
function saveDaySettings(){
  const rows=[...document.querySelectorAll('#day-plan-fields .ah-row')].map((_,i)=>({
    start:document.getElementById('dp-start-'+i)?.value||'',
    end:document.getElementById('dp-end-'+i)?.value||'',
    label:(document.getElementById('dp-label-'+i)?.value||'').trim()
  })).filter(r=>r.start&&r.end&&r.label);
  if(!rows.length){ alert('Please add at least one valid block.'); return; }
  rows.sort((a,b)=>toMinutes(a.start)-toMinutes(b.start));
  saveDayPlan(rows);
  closeDaySettings();
  tickNow();
  showSettingsSaved();
}
function tickNow(){
  const now=new Date();
  const cur=now.getHours()*60+now.getMinutes();
  const plan=loadDayPlan();
  const blocks=plan.map(p=>({
    start:toMinutes(p.start),
    end:toMinutes(p.end),
    label:p.label
  })).filter(p=>Number.isFinite(p.start)&&Number.isFinite(p.end)&&p.label).map(p=>({
    start:p.start,
    end:p.end<=p.start?p.end+1440:p.end,
    label:p.label
  })).sort((a,b)=>a.start-b.start);

  const wrap=document.getElementById('now-wrap');
  if(!blocks.length){
    wrap.className='now-wrap';
    document.getElementById('now-label').textContent='No block active';
    document.getElementById('now-block-name').textContent='No activity scheduled right now';
    document.getElementById('now-time-left').textContent='—';
    document.getElementById('now-next').textContent='Open settings to configure your day';
    document.getElementById('now-progress-fill').style.width='0%';
    return;
  }

  const timeline=[];
  for(const b of blocks){
    timeline.push({start:b.start,end:b.end,label:b.label});
    timeline.push({start:b.start+1440,end:b.end+1440,label:b.label});
  }

  const curCandidates=[cur,cur+1440];
  let active=null, activeCur=null;
  for(const cc of curCandidates){
    const found=timeline.find(b=>cc>=b.start&&cc<b.end);
    if(found){ active=found; activeCur=cc; break; }
  }

  if(!active){
    let next=null;
    for(const cc of curCandidates){
      const candidate=timeline.find(b=>b.start>cc);
      if(candidate && (!next||candidate.start<next.start)) next=candidate;
    }
    wrap.className='now-wrap';
    document.getElementById('now-label').textContent='No block active';
    document.getElementById('now-block-name').textContent='No activity scheduled right now';
    document.getElementById('now-time-left').textContent='—';
    document.getElementById('now-next').textContent=next?('Next: '+next.label):'Last block of the day';
    document.getElementById('now-progress-fill').style.width='0%';
    return;
  }

  const next=timeline.find(b=>b.start>=active.end);
  const pct=Math.min(100,Math.round(((activeCur-active.start)/(active.end-active.start))*100));
  wrap.className='now-wrap study-block';
  document.getElementById('now-label').textContent='Current Block';
  document.getElementById('now-block-name').textContent=active.label;
  document.getElementById('now-time-left').textContent=fmtMinLeft(active.end-activeCur);
  document.getElementById('now-next').textContent=next?('Next: '+next.label):'Last block of the day';
  document.getElementById('now-progress-fill').style.width=pct+'%';
}
tickNow();
setInterval(tickNow, 30000); // refresh every 30s

/* ─── GRAPHS ──────────────────────────────────────────────────── */
let graphRange='weekly';
let graphMonthOffset=0;
let graphStyle='bar';

function setGraphRange(range){
  graphRange=range;
  document.getElementById('graph-range-7')?.classList.toggle('active',range==='weekly');
  document.getElementById('graph-range-14')?.classList.toggle('active',range==='biweekly');
  document.getElementById('graph-range-month')?.classList.toggle('active',range==='monthly');
  document.getElementById('graph-month-nav')?.classList.toggle('show',range==='monthly');
  renderGraphs();
}

function setGraphStyle(style){
  graphStyle=style;
  document.getElementById('graph-style-bar')?.classList.toggle('active',style==='bar');
  document.getElementById('graph-style-line')?.classList.toggle('active',style==='line');
  document.getElementById('graph-style-area')?.classList.toggle('active',style==='area');
  renderGraphs();
}

function changeGraphMonth(delta){
  graphMonthOffset+=delta;
  renderGraphs();
}

function getRangeDays(){
  const now=new Date();
  if(graphRange==='weekly') return {days:7, end:new Date(now.getFullYear(),now.getMonth(),now.getDate())};
  if(graphRange==='biweekly') return {days:14, end:new Date(now.getFullYear(),now.getMonth(),now.getDate())};
  const base=new Date(now.getFullYear(), now.getMonth()+graphMonthOffset, 1);
  const daysInMonth=new Date(base.getFullYear(), base.getMonth()+1, 0).getDate();
  const end=new Date(base.getFullYear(), base.getMonth(), daysInMonth);
  return {days:daysInMonth, end, monthBase:base};
}

function renderGraphs(){
  const canvas=document.getElementById('graph-canvas');
  if(!canvas) return;
  const rect=canvas.getBoundingClientRect();
  const dpr=window.devicePixelRatio||1;
  const targetW=Math.max(640, Math.floor(rect.width*dpr));
  const targetH=Math.max(420, Math.floor(rect.height*dpr));
  if(canvas.width!==targetW||canvas.height!==targetH){
    canvas.width=targetW;
    canvas.height=targetH;
  }
  const ctx=canvas.getContext('2d');
  const sessions=loadSessions();
  const todayKey=dk();
  const byDay={};
  sessions.forEach(s=>{
    const k=s.date||dk(s.startTs);
    byDay[k]=(byDay[k]||0)+s.duration;
  });
  if(ts.status==='running'||ts.status==='paused'){
    byDay[todayKey]=(byDay[todayKey]||0)+elapsed();
  }

  const {days,end,monthBase}=getRangeDays();
  const gTitle=document.getElementById('graph-title');
  if(gTitle){
    gTitle.textContent=graphRange==='weekly'?'Last 7 Days':graphRange==='biweekly'?'Last 14 Days':'This Month';
  }
  const start=new Date(end); start.setDate(end.getDate()-(days-1));
  let points=[];
  if(graphRange==='monthly'){
    const firstOfMonth=new Date(monthBase.getFullYear(),monthBase.getMonth(),1);
    const monthEnd=new Date(monthBase.getFullYear(),monthBase.getMonth()+1,0);
    const dayOffsetToMonday=(firstOfMonth.getDay()+6)%7;
    const firstWeekMonday=new Date(firstOfMonth);
    firstWeekMonday.setDate(firstOfMonth.getDate()-dayOffsetToMonday);
    firstWeekMonday.setHours(0,0,0,0);

    const weekBuckets=[];
    for(let i=0;i<6;i++){
      const weekStart=new Date(firstWeekMonday);
      weekStart.setDate(firstWeekMonday.getDate()+i*7);
      const weekEnd=new Date(weekStart);
      weekEnd.setDate(weekStart.getDate()+6);
      if(weekStart>monthEnd) break;
      const visibleStart=weekStart<firstOfMonth ? firstOfMonth : weekStart;
      const visibleEnd=weekEnd>monthEnd ? monthEnd : weekEnd;
      weekBuckets.push({index:i+1,weekStart:visibleStart,weekEnd:visibleEnd,ms:0});
    }
    sessions.forEach(s=>{
      const d=new Date(s.startTs);
      if(d.getFullYear()!==monthBase.getFullYear()||d.getMonth()!==monthBase.getMonth()) return;
      const thisDateMidnight=new Date(d.getFullYear(),d.getMonth(),d.getDate());
      const msPerDay=24*60*60*1000;
      const weekIndex=Math.floor((thisDateMidnight-firstWeekMonday)/(7*msPerDay))+1;
      const bucket=weekBuckets.find(w=>w.index===weekIndex);
      if(bucket) bucket.ms+=s.duration;
    });
    if(ts.status==='running'||ts.status==='paused'){
      const d=new Date();
      if(d.getFullYear()===monthBase.getFullYear()&&d.getMonth()===monthBase.getMonth()){
        const thisDateMidnight=new Date(d.getFullYear(),d.getMonth(),d.getDate());
        const msPerDay=24*60*60*1000;
        const weekIndex=Math.floor((thisDateMidnight-firstWeekMonday)/(7*msPerDay))+1;
        const bucket=weekBuckets.find(w=>w.index===weekIndex);
        if(bucket) bucket.ms+=elapsed();
      }
    }
    points=weekBuckets.map(w=>({date:w.weekStart,ms:w.ms,label:`W${w.index}`,tooltip:`${w.weekStart.toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'})} – ${w.weekEnd.toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'})}`}));
  } else {
    for(let i=0;i<days;i++){
      const d=new Date(start); d.setDate(start.getDate()+i);
      const key=dk(d.getTime());
      const ms=byDay[key]||0;
      points.push({date:d,ms});
    }
  }
  const rawMax=Math.max(...points.map(p=>p.ms), 0);
  const maxScale=Math.max(3600000, Math.ceil(rawMax/1800000)*1800000); // 30-min scale steps
  ctx.clearRect(0,0,canvas.width,canvas.height);
  const bg=ctx.createLinearGradient(0,0,canvas.width,canvas.height);
  bg.addColorStop(0,'rgba(20,30,56,0.85)');
  bg.addColorStop(1,'rgba(11,17,35,0.95)');
  ctx.fillStyle=bg;
  ctx.fillRect(0,0,canvas.width,canvas.height);

  const padX=64, padY=34, h=canvas.height-100, w=canvas.width-padX*2;
  ctx.strokeStyle='rgba(129,211,255,0.16)';
  ctx.lineWidth=1;
  for(let i=0;i<4;i++){
    const y=padY+(h/3)*i;
    ctx.beginPath(); ctx.moveTo(padX,y); ctx.lineTo(padX+w,y); ctx.stroke();
  }
  const bw=Math.max(5, (w/points.length)-6);
  points.forEach((_,i)=>{
    const x=padX+i*(w/points.length)+bw/2;
    ctx.beginPath();
    ctx.moveTo(x,padY);
    ctx.lineTo(x,padY+h);
    ctx.strokeStyle='rgba(129,211,255,0.10)';
    ctx.stroke();
  });
  if(graphStyle==='bar'){
    const palette=['#ffd36b','#7bf29e','#78d8ff','#b996ff','#ffa4de','#82ffe8'];
    points.forEach((p,i)=>{
      const x=padX+i*(w/points.length)+2;
      const bh=(p.ms/maxScale)*h;
      const y=padY+h-bh;
      const col=palette[i%palette.length];
      const grad=ctx.createLinearGradient(0,y,0,padY+h);
      grad.addColorStop(0,col);
      grad.addColorStop(1,'rgba(31,54,96,0.35)');
      if(p.ms>0){
        ctx.fillStyle=grad;
        const r=Math.min(8,bw/2,bh/2);
        ctx.beginPath();
        ctx.moveTo(x,y+bh);
        ctx.lineTo(x,y+r);
        ctx.quadraticCurveTo(x,y,x+r,y);
        ctx.lineTo(x+bw-r,y);
        ctx.quadraticCurveTo(x+bw,y,x+bw,y+r);
        ctx.lineTo(x+bw,y+bh);
        ctx.closePath();
        ctx.fill();
      }
    });
  } else {
    const pts=points.map((p,i)=>({
      x:padX+i*(w/points.length)+bw/2,
      y:padY+h-(p.ms/maxScale)*h
    }));
    const drawSmoothPath=(closeForArea=false)=>{
      if(!pts.length) return;
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for(let i=0;i<pts.length-1;i++){
        const cx=(pts[i].x+pts[i+1].x)/2;
        const cy=(pts[i].y+pts[i+1].y)/2;
        ctx.quadraticCurveTo(pts[i].x, pts[i].y, cx, cy);
      }
      ctx.lineTo(pts[pts.length-1].x, pts[pts.length-1].y);
      if(closeForArea){
        ctx.lineTo(pts[pts.length-1].x,padY+h);
        ctx.lineTo(pts[0].x,padY+h);
        ctx.closePath();
      }
    };
    if(graphStyle==='area'){
      const areaGrad=ctx.createLinearGradient(0,padY,0,padY+h);
      areaGrad.addColorStop(0,'rgba(110,219,255,0.22)');
      areaGrad.addColorStop(0.6,'rgba(110,219,255,0.09)');
      areaGrad.addColorStop(1,'rgba(110,219,255,0.01)');
      drawSmoothPath(true);
      ctx.fillStyle=areaGrad;
      ctx.fill();
    }
    ctx.strokeStyle='rgba(121,229,255,0.88)';
    ctx.lineWidth=2.6;
    drawSmoothPath(false);
    ctx.stroke();
    pts.forEach((p)=>{
      ctx.beginPath();
      ctx.arc(p.x,p.y,4.5,0,Math.PI*2);
      ctx.fillStyle='rgba(125,243,255,0.98)';
      ctx.fill();
      ctx.strokeStyle='rgba(8,16,36,0.95)';
      ctx.lineWidth=1.6;
      ctx.stroke();
    });
  }

  const isMobileGraph=window.innerWidth<=900;
  const xAxisFontSize=isMobileGraph?20:12;
  const yAxisFontSize=isMobileGraph?18:12;

  ctx.fillStyle='rgba(197,213,255,0.82)';
  ctx.font=`${xAxisFontSize}px Manrope`;
  points.forEach((p,i)=>{
    const x=padX+i*(w/points.length)+bw/2;
    const lbl=graphRange==='monthly' ? (p.label||'') : (p.date.toLocaleDateString(undefined,{weekday:'short'}).slice(0,3));
    ctx.fillText(lbl, x-10, canvas.height-24);
  });

  // Y labels (hours)
  ctx.fillStyle='rgba(197,213,255,0.7)';
  ctx.font=`${yAxisFontSize}px Manrope`;
  for(let i=0;i<4;i++){
    const val=((maxScale*(3-i))/3)/3600000;
    const y=padY+(h/3)*i+4;
    const pretty=Number.isInteger(val)?val.toString():val.toFixed(1).replace(/\.0$/,'');
    ctx.fillText(pretty+'h', 24, y);
  }

  if(monthBase){
    document.getElementById('graph-month-label').textContent=monthBase.toLocaleDateString(undefined,{month:'long',year:'numeric'});
  }
  if(graphRange==='monthly'){
    canvas.onmousemove=(e)=>{
      const r=canvas.getBoundingClientRect();
      const relX=(e.clientX-r.left)*(canvas.width/r.width);
      const idx=Math.max(0,Math.min(points.length-1,Math.floor((relX-padX)/(w/points.length))));
      const p=points[idx];
      if(!p) return;
      canvas.title=`${p.label}: ${p.tooltip}`;
    };
  } else {
    canvas.onmousemove=null;
    canvas.title='';
  }
}

/* ─── BACKGROUND TAB ──────────────────────────────────────────── */
/*
   When switching back from a lecture tab, Chrome may throttle
   setInterval for up to 1 minute. visibilitychange catches the
   return and immediately snaps the display to the correct time.
   The underlying elapsed() is always correct since it uses Date.now().
*/
document.addEventListener('visibilitychange',()=>{
  if(!document.hidden){
    if(ts.status==='running'||ts.status==='paused')refreshDisplay();
    tickNow(); // Right Now block could be stale after background tab
  }
});

/* ─── BOOT ────────────────────────────────────────────────────── */
loadTS();

if(ts.status==='running'){
  // Do not auto-resume a previously running timer after refresh.
  // Keep the session, but move it to paused until the user explicitly resumes.
  ts.pauseStart=Date.now();
  ts.status='paused';
  saveTS();
  document.getElementById('tmeta').textContent='Started at\u202F'+fmtT(ts.sessionStart);
  refreshDisplay();
  applyUI('paused');
} else if(ts.status==='paused'){
  document.getElementById('tmeta').textContent='Started at\u202F'+fmtT(ts.sessionStart);
  refreshDisplay(); applyUI('paused');
} else {
  applyUI('idle');
}

setLogRange('today');
setGraphRange('weekly');
setGraphStyle('bar');
switchMainView('timer');

/* ─── TODAY'S TASKS ───────────────────────────────────────────── */
const KEY_TASKS = 'focus_tasks_v1';

function loadTasks(){
  try{ return JSON.parse(localStorage.getItem(KEY_TASKS))||[]; }
  catch(e){ return []; }
}
function saveTasks(tasks){ localStorage.setItem(KEY_TASKS,JSON.stringify(tasks)); }

function updateTasksStat(){
  const tasks=loadTasks();
  const todayKey=dk();
  const todayTasks=tasks.filter(t=>t.date===todayKey);
  const done=todayTasks.filter(t=>t.done).length;
  const total=todayTasks.length;
  const el=document.getElementById('s-tasks');
  if(el) el.textContent=done+'\u202F/\u202F'+total;
  const lbl=document.getElementById('tasks-count-lbl');
  if(lbl) lbl.textContent=total>0?(done+'/'+total+' done'):'';
}

function renderTasks(){
  const tasks=loadTasks();
  const todayKey=dk();
  const todayTasks=tasks.filter(t=>t.date===todayKey);
  const el=document.getElementById('tasks-list');
  const emptyHtml='<div class="tasks-empty">No tasks yet — start with one focused task.</div>';
  if(!todayTasks.length){
    if(el) el.innerHTML=emptyHtml;
    updateTasksStat();
    updateTasksListViewport();
    return;
  }
  // Undone first, done last
  const sorted=[...todayTasks.filter(t=>!t.done),...todayTasks.filter(t=>t.done)];
  const taskMarkup=sorted.map(t=>`
    <div class="task-item${t.done?' done':''}" id="task-${t.id}" onclick="toggleTask(${t.id})">
      <div class="task-cb"><span class="task-tick">✓</span></div>
      <span class="task-label">${escHtml(t.text)}</span>
      <button class="task-del" onclick="event.stopPropagation();deleteTask(${t.id})" title="Delete task">✕</button>
    </div>`).join('');
  if(el) el.innerHTML=taskMarkup;
  updateTasksStat();
  updateTasksListViewport();
}

function escHtml(s){
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function addTask(){
  const inp=document.getElementById('task-input');
  const text=(inp.value||'').trim();
  if(!text) return;
  const tasks=loadTasks();
  let id=Date.now();
  const used=new Set(tasks.map(t=>t.id));
  while(used.has(id)) id+=1;
  tasks.push({id,text,done:false,date:dk()});
  saveTasks(tasks);
  inp.value='';
  renderTasks();
}

function toggleTask(id){
  const source=document.getElementById('task-'+id);
  const tasks=loadTasks();
  const idx=tasks.findIndex(t=>t.id===id);
  if(idx===-1) return;
  tasks[idx].done=!tasks[idx].done;
  const justCompleted=tasks[idx].done;
  saveTasks(tasks);
  if(justCompleted && source) spawnTaskStars(source);
  renderTasks();
}

function deleteTask(id){
  const tasks=loadTasks();
  saveTasks(tasks.filter(t=>t.id!==id));
  renderTasks();
}

function spawnTaskStars(sourceEl){
  const r=sourceEl.getBoundingClientRect();
  const cx=r.left+r.width/2;
  const cy=r.top+r.height/2;
  const stars=34;
  for(let i=0;i<stars;i++){
    const s=document.createElement('span');
    s.className='task-star';
    s.textContent='✦';
    const ang=(Math.PI*2)*(i/stars)+(Math.random()*0.32);
    const dist=80+Math.random()*Math.max(window.innerWidth,window.innerHeight)*0.35;
    s.style.left=cx+'px';
    s.style.top=cy+'px';
    s.style.setProperty('--dx', (Math.cos(ang)*dist)+'px');
    s.style.setProperty('--dy', (Math.sin(ang)*dist)+'px');
    s.style.color=['#87e2ff','#9ef7bb','#f7f78f','#c3a8ff'][i%4];
    document.body.appendChild(s);
    setTimeout(()=>s.remove(), 920);
  }
}

// Keep Add Hours duration auto-synced with selected start/end time
document.getElementById('ah-date')?.addEventListener('input',syncManualDuration);
document.getElementById('ah-start')?.addEventListener('input',syncManualDuration);
document.getElementById('ah-end')?.addEventListener('input',syncManualDuration);

renderTasks();
syncMobileLayout();
