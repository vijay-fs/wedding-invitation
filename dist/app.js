(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const embedded = JSON.parse($('embedded-assets')?.textContent || '{}');
  const objectAssets = new Map();
  const asset = path => {
    if (!embedded[path]) return path;
    if (!path.endsWith('.pdf')) return embedded[path];
    if (!objectAssets.has(path)) {
      const bytes=Uint8Array.from(atob(embedded[path].split(',')[1]),char=>char.charCodeAt(0));
      objectAssets.set(path,URL.createObjectURL(new Blob([bytes],{type:'application/pdf'})));
    }
    return objectAssets.get(path);
  };
  document.querySelectorAll('a[data-embedded-href]').forEach(link=>{link.href=asset(link.dataset.embeddedHref);});
  const text = {
    en: {
      skip:'Skip the opening animation',menu:'Menu',navCouple:'The couple',navDay:'Our day',navVenue:'The venue',navInvite:'Your invitation',
      openingEyebrow:'A celebration of faith & love',openingTitle:'A little faith.\nA lifetime of love.',openingDate:'07 JANUARY 2027 · CHENNAI',openInvite:'Take me inside',
      ribbonRequest:'Help us open\nthe way?',ribbonScroll:'Scroll to cut the ribbon',ribbonSwipe:'Swipe up to cut the ribbon',ribbonHigher:'Just a little more…',ribbonThanks:'Thank you!\nSee you inside.',ribbonReady:'The way is open',ribbonTap:'or tap the scissors',ribbonPlaying:'A new beginning awaits…',ribbonAction:'Cut the ribbon and open the invitation',meetCouple:'Keep scrolling to meet the couple',
      welcomeEyebrow:'WITH JOYFUL HEARTS, WE WELCOME YOU',groomName:'Ragulbabu',brideName:'Lydiya',welcomeIntro:'Together with our families, we invite you to celebrate the beginning of our forever.',
      thursday:'Thursday',january2027:'January 2027',january:'January',celebrate:'Come celebrate with us',welcomePlace:'Pallavaram, Chennai · 4:00 PM onwards',welcomeBottom:'A DAY OF BLESSINGS. A LIFETIME OF TOGETHERNESS.',
      coupleEyebrow:'TWO HEARTS. ONE BEAUTIFUL PROMISE.',coupleTitle:'The beginning of\nour forever.',viewPhoto:'A closer look',portraitCaption:'By His grace, together.',groomLabel:'THE GROOM',brideLabel:'THE BRIDE',coupleNote:'With the love of our families and the blessings of God, a new chapter begins.',
      parentsOne:'Mr. Nagarajan & Mrs. Sumathi',parentsJoin:'together with',parentsTwo:'Mr. Kesavan & Mrs. Vasugi (Late)',
      verse:'“I have found the one\nmy soul loves.”',verseReference:'SONG OF SOLOMON 3:4',dayEyebrow:'SAVE A LITTLE SPACE IN YOUR HEART',dayTitle:'One day.\nA thousand memories.',dayIntro:'Your presence will make our celebration even more beautiful.',
      time:'4:00 PM onwards',eventName:'WEDDING & RECEPTION',timeNote:'All celebrations at New Life Celebration Center, Pallavaram, Chennai.',calendar:'Keep the date',countdownIntro:'Every moment brings us closer.',days:'days',hours:'hours',minutes:'minutes',seconds:'seconds',
      venueEyebrow:'WHERE OUR FOREVER BEGINS',venueTitle:'A beautiful place.\nAn even more beautiful beginning.',venueName:'New Life Celebration Center',venueAddress:'Pallavaram, Chennai, Tamil Nadu',directions:'Let’s get you there',venueCaption:'A warm welcome awaits you at NLCC.',
      familyEyebrow:'WITH OPEN HEARTS & OPEN ARMS',familyTitle:'Our families\nwelcome you.',familyOne:'Mr. Nagarajan M.A.',familyTwo:'Mrs. Sumathi Nagarajan M.A.; CNI (ICDS SW), Rt.',familyThree:'Mr. Rakeshbabu B.Tech; Vice President (BNY Mellon)',familyFour:'Mr. & Mrs. Lordson Joshua and family',familyWelcome:'Join us with your love, prayers, and blessings.',
      invitationEyebrow:'A LITTLE SOMETHING TO KEEP',invitationTitle:'An invitation,\nfrom our hearts to yours.',invitationIntro:'Keep our invitation close, and bring your blessings closer.',downloadInvite:'Download invitation',previewInvite:'Take a closer look',bothLanguages:'Both languages',
      footerEyebrow:'WE CAN’T WAIT TO SEE YOU',footerDate:'7 January 2027 · Pallavaram, Chennai',share:'Share the joy',backTop:'Back to the beginning ↑',music:'Music',
      copySuccess:'Invitation details copied. Share the joy!',copyFallback:'Share this HTML file with your loved ones.',calendarSuccess:'Your calendar invitation is ready.',musicError:'Music could not be played. Please try again.',motionOn:'Gentle view enabled. Animation is reduced.',motionOff:'Cinematic opening enabled.',celebrationToday:'Our celebration begins today.',celebrationPast:'A day to remember. A love to celebrate.'
    },
    ta: {
      skip:'தொடக்கத்தைத் தவிர்க்கவும்',menu:'பட்டி',navCouple:'மணமக்கள்',navDay:'மணநாள்',navVenue:'நிகழ்விடம்',navInvite:'அழைப்பிதழ்',
      openingEyebrow:'இறையருளில் இணையும் இதயங்கள்',openingTitle:'இறையருளில் தொடங்கி,\nஇணைந்தே ஒரு வாழ்வு.',openingDate:'07 ஜனவரி 2027 · சென்னை',openInvite:'உள்ளே அழைத்துச் செல்லுங்கள்',
      ribbonRequest:'வழியைத் திறக்க\nஉதவுகிறீர்களா?',ribbonScroll:'கீழே நகர்த்தி ரிப்பனை வெட்டுங்கள்',ribbonSwipe:'மேலே ஸ்வைப் செய்து ரிப்பனை வெட்டுங்கள்',ribbonHigher:'இன்னும் சிறிது…',ribbonThanks:'நன்றி!\nஉள்ளே வரவேற்கிறோம்.',ribbonReady:'வழி திறந்துவிட்டது',ribbonTap:'அல்லது கத்தரிக்கோலைத் தொடுங்கள்',ribbonPlaying:'ஓர் இனிய தொடக்கம் காத்திருக்கிறது…',ribbonAction:'ரிப்பனை வெட்டி அழைப்பிதழைத் திறக்கவும்',meetCouple:'மணமக்களைச் சந்திக்க கீழே வாருங்கள்',
      welcomeEyebrow:'மகிழ்ச்சி நிறைந்த இதயங்களுடன் வரவேற்கிறோம்',groomName:'ராகுல்பாபு',brideName:'லிடியா',welcomeIntro:'எங்கள் இல்லத் திருமண விழாவில் கலந்து கொண்டு, உங்கள் அன்பையும் ஆசிகளையும் வழங்க அன்புடன் அழைக்கிறோம்.',
      thursday:'வியாழக்கிழமை',january2027:'ஜனவரி 2027',january:'ஜனவரி',celebrate:'எங்கள் மகிழ்வில் இணையுங்கள்',welcomePlace:'பல்லாவரம், சென்னை · மாலை 4:00 மணி முதல்',welcomeBottom:'ஆசிகள் நிறைந்த நாள். அன்பில் இணைந்த வாழ்வு.',
      coupleEyebrow:'இரு இதயங்கள். ஓர் அழகிய உறவு.',coupleTitle:'இணைந்த வாழ்வின்\nஇனிய தொடக்கம்.',viewPhoto:'புகைப்படத்தைப் பார்க்க',portraitCaption:'இறையருளால் இணைகிறோம்.',groomLabel:'மணமகன்',brideLabel:'மணமகள்',coupleNote:'பெற்றோரின் அன்புடனும் இறைவனின் ஆசியுடனும் எங்கள் புதிய பயணம் தொடங்குகிறது.',
      parentsOne:'திரு. நாகராஜன் & திருமதி. சுமதி',parentsJoin:'மற்றும்',parentsTwo:'திரு. கேசவன் & திருமதி. வாசுகி (Late)',
      verse:'“என் ஆத்துமா நேசிக்கிறவரைக்\nகண்டேன்.”',verseReference:'உன்னதப்பாட்டு 3:4',dayEyebrow:'எங்கள் மகிழ்வில் நீங்களும் இணையுங்கள்',dayTitle:'ஓர் இனிய நாள்.\nஆயிரம் நினைவுகள்.',dayIntro:'உங்கள் வருகை எங்கள் கொண்டாட்டத்திற்கு மேலும் அழகு சேர்க்கும்.',
      time:'மாலை 4:00 மணி முதல்',eventName:'திருமணம் & வரவேற்பு',timeNote:'திருமணம் மற்றும் வரவேற்பு: நியூ லைஃப் செலிப்ரேஷன் சென்டர், பல்லாவரம், சென்னை.',calendar:'நாளைச் சேமிக்கவும்',countdownIntro:'எங்கள் மணநாளை நோக்கி…',days:'நாட்கள்',hours:'மணி',minutes:'நிமிடம்',seconds:'நொடி',
      venueEyebrow:'எங்கள் இனிய பயணம் தொடங்கும் இடம்',venueTitle:'அழகிய இடத்தில்\nஅன்பான தொடக்கம்.',venueName:'நியூ லைஃப் செலிப்ரேஷன் சென்டர்',venueAddress:'பல்லாவரம், சென்னை, தமிழ்நாடு',directions:'வழியைக் காணவும்',venueCaption:'NLCC-யில் உங்களை அன்புடன் வரவேற்கிறோம்.',
      familyEyebrow:'அன்புடனும் மகிழ்வுடனும்',familyTitle:'எங்கள் குடும்பத்தினர்\nவரவேற்கிறோம்.',familyOne:'திரு. நாகராஜன் M.A.',familyTwo:'திருமதி. சுமதி நாகராஜன் M.A.; CNI (ICDS SW), Rt.',familyThree:'திரு. ராகேஷ்பாபு B.Tech; Vice President (BNY Mellon)',familyFour:'திரு. & திருமதி. லார்ட்சன் ஜோஷ்வா மற்றும் குடும்பத்தினர்',familyWelcome:'உங்கள் அன்புடனும் பிரார்த்தனைகளுடனும் ஆசிகளுடனும் வருக.',
      invitationEyebrow:'எங்கள் அன்பின் அழைப்பு',invitationTitle:'எங்கள் இதயத்திலிருந்து\nஓர் அன்பான அழைப்பு.',invitationIntro:'எங்கள் அழைப்பை ஏற்று, உங்கள் ஆசிகளுடன் வருக.',downloadInvite:'அழைப்பிதழைப் பதிவிறக்க',previewInvite:'அழைப்பிதழைப் பார்க்க',bothLanguages:'இரு மொழிகளிலும்',
      footerEyebrow:'உங்கள் வருகையை எதிர்நோக்குகிறோம்',footerDate:'7 ஜனவரி 2027 · பல்லாவரம், சென்னை',share:'மகிழ்வைப் பகிரவும்',backTop:'தொடக்கத்திற்குச் செல்ல ↑',music:'இசை',
      copySuccess:'அழைப்பு விவரங்கள் நகலெடுக்கப்பட்டன.',copyFallback:'இந்த HTML கோப்பை உங்கள் அன்புக்குரியவர்களுடன் பகிரவும்.',calendarSuccess:'நாள்காட்டி அழைப்பு தயாராக உள்ளது.',musicError:'இசையை இயக்க முடியவில்லை. மீண்டும் முயற்சிக்கவும்.',motionOn:'அசைவுகள் குறைக்கப்பட்டன.',motionOff:'அசைவுகளுடன் தொடக்கம் இயக்கப்பட்டது.',celebrationToday:'எங்கள் கொண்டாட்டம் இன்று தொடங்குகிறது.',celebrationPast:'நினைவில் நிற்கும் நாள். அன்பில் நிறைந்த வாழ்வு.'
    }
  };
  let language = 'en';
  const toast = message => {
    $('toast').textContent = message;
    $('toast').classList.add('show');
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => $('toast').classList.remove('show'), 4500);
  };
  function setLanguage(lang) {
    language = lang === 'ta' ? 'ta' : 'en';
    document.documentElement.lang = language;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const value = text[language][el.dataset.i18n];
      if (value !== undefined) el.textContent = value;
    });
    document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
    const tamil = language === 'ta';
    $('invitation-image').src = asset(tamil ? 'assets/invitation-tamil.png' : 'assets/invitation-english.png');
    $('invitation-image').alt = tamil ? 'தமிழ் திருமண அழைப்பிதழ்' : 'English printed wedding invitation';
    document.querySelectorAll('.download-current').forEach(link => {
      link.href = asset(tamil ? 'assets/invitation-tamil.pdf' : 'assets/invitation-english.pdf');
      link.download = 'Ragulbabu-Lydiya-' + (tamil ? 'Tamil' : 'English') + '.pdf';
    });
    try { localStorage.setItem('rl-invitation-language', language); } catch {}
    guidePhase = -1;
    requestTick();
    updateCountdown();
  }
  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  try { language = localStorage.getItem('rl-invitation-language') || 'en'; } catch {}
  const opening = $('opening');
  const scene = $('church-scene');
  const copy = $('opening-copy');
  const portal = $('welcome-portal');
  const welcome = $('welcome-content');
  const scrollCue = $('scroll-cue');
  const bloom = $('gold-bloom');
  const crossLight = $('cross-light');
  const ribbon = $('pathway-ribbon');
  const characters = $('pathway-couple');
  const pathwayStory = $('pathway-story');
  const coupleRequest = $('couple-request');
  const ribbonInstruction = $('ribbon-instruction');
  const waitingCouple = $('couple-waiting'), happyCouple = $('couple-happy');
  const closedRibbon = $('ribbon-closed'), cutRibbon = $('ribbon-cut');
  const scissors = $('ribbon-scissors');
  let guidePhase = -1, guidedFrame = 0, guidePlaying = false;
  let reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  try { const preference = localStorage.getItem('rl-invitation-motion'); if (preference !== null) reduce = preference === 'reduced'; } catch {}
  let dimensions = {};
  const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));
  const smooth = (a, b, v) => { const t = clamp((v-a)/(b-a)); return t*t*(3-2*t); };
  function measure() {
    const w = innerWidth, h = innerHeight;
    const portrait=w<=760;
    const artwork=portrait
      ? {src:'assets/anime-church-narrow-phone.webp',width:1024,height:1536,crossX:.528,crossY:.295,pathX:.517,pathTop:.735,pathFarWidth:.073,pathNearWidth:.444,positionX:.5}
      : {src:'assets/anime-church-narrow-wide.webp',width:1586,height:992,crossX:.614,crossY:.217,pathX:.608,pathTop:.84,pathFarWidth:.063,pathNearWidth:.236,positionX:.6};
    const churchImage=$('church-image');
    if(scene.dataset.artwork!==artwork.src){churchImage.src=asset(artwork.src);scene.dataset.artwork=artwork.src;}
    // Reserve the header's full height before fitting the illustrated building.
    const safeTop=Math.max(portrait?68:86,$('header').offsetHeight)+12;
    const imageHeight=Math.max(1,h-safeTop);
    opening.style.setProperty('--church-safe-top',safeTop+'px');
    // Fit the full height so laptop aspect ratios cannot crop away the walkway.
    const scale=imageHeight/artwork.height;
    const rw=artwork.width*scale,rh=imageHeight;
    const imageLeft=rw<w?w-rw:(w-rw)*artwork.positionX;
    churchImage.style.width=rw+'px';churchImage.style.height=rh+'px';
    churchImage.style.left=imageLeft+'px';churchImage.style.top='0px';
    scene.classList.toggle('has-side-space',rw<w);
    const pathCenter=imageLeft+rw*artwork.pathX;
    const roadTop=safeTop+rh*artwork.pathTop;
    const roadBottom=safeTop+rh*.99;
    const feetY=Math.min(h-42,roadTop+(roadBottom-roadTop)*.78);
    const preferredWidth=portrait?(h<=740?48:54):clamp(w*.05,46,74);
    const figureHeight=Math.min(preferredWidth*1.5,Math.max(24,feetY-roadTop-8));
    const ribbonY=feetY-figureHeight*.53;
    const ribbonDepth=clamp((ribbonY-roadTop)/Math.max(1,roadBottom-roadTop));
    const roadWidth=rw*(artwork.pathFarWidth+(artwork.pathNearWidth-artwork.pathFarWidth)*ribbonDepth);
    const ribbonWidth=Math.min(portrait?158:clamp(w*.16,135,220),roadWidth*.9);
    opening.style.setProperty('--pathway-center',pathCenter+'px');
    opening.style.setProperty('--pathway-figure-width',(figureHeight/1.5)+'px');
    opening.style.setProperty('--pathway-feet-bottom',(h-feetY)+'px');
    opening.style.setProperty('--pathway-ribbon-bottom',(h-ribbonY-9)+'px');
    opening.style.setProperty('--pathway-ribbon-width',ribbonWidth+'px');
    opening.style.setProperty('--pathway-dialogue-bottom',(h-feetY+figureHeight+6)+'px');
    dimensions = {
      w,h, x:imageLeft+rw*artwork.crossX, y:safeTop+rh*artwork.crossY,
      distance:Math.max(1,opening.offsetHeight-h), top:opening.offsetTop
    };
    scene.style.transformOrigin = dimensions.x + 'px ' + (dimensions.y-safeTop) + 'px';
    requestTick();
  }
  function updateGuide(p) {
    // Both character frames and both ribbon frames stay on the same ground plane.
    const cut=smooth(.055,.115,p),happy=smooth(.105,.17,p);
    closedRibbon.style.opacity=String(1-cut);cutRibbon.style.opacity=String(cut);
    waitingCouple.style.opacity=String(1-happy);happyCouple.style.opacity=String(happy);
    scissors.style.opacity=String(1-smooth(.11,.16,p));
    const bladeAngle=18*(1-smooth(.015,.085,p));
    $('scissor-left').style.transform='rotate('+bladeAngle+'deg)';
    $('scissor-right').style.transform='rotate('+(-bladeAngle)+'deg)';
    pathwayStory.style.opacity=String(1-smooth(.31,.39,p));
    coupleRequest.style.opacity=String(1-smooth(.29,.36,p));
    ribbonInstruction.style.opacity=String(1-smooth(.28,.35,p));
    scrollCue.inert=p>.29;
    ribbon.setAttribute('aria-hidden',String(p>.29));
    const phase=p<.035?0:p<.115?1:2;
    if (guidePhase===phase) return;
    guidePhase=phase;
    scrollCue.setAttribute('aria-label',text[language].ribbonAction);
    const keys=phase===0?['ribbonScroll','ribbonSwipe']:phase===1?['ribbonHigher','ribbonHigher']:['ribbonReady','ribbonReady'];
    for(const [idx,selector] of ['.instruction-mouse','.instruction-touch'].entries()) {
      const label=$('ribbon-label').querySelector(selector);label.dataset.i18n=keys[idx];label.textContent=text[language][keys[idx]];
    }
    const requestKey=phase===2?'ribbonThanks':'ribbonRequest';
    $('couple-line').dataset.i18n=requestKey;$('couple-line').textContent=text[language][requestKey];
    const captionKey=guidePlaying?'ribbonPlaying':'ribbonTap';
    $('ribbon-caption').dataset.i18n=captionKey;$('ribbon-caption').textContent=text[language][captionKey];
  }
  function stopGuidedEntry() {
    if (guidedFrame) cancelAnimationFrame(guidedFrame);
    guidedFrame=0;guidePlaying=false;guidePhase=-1;
    scrollCue.removeAttribute('aria-busy');
    document.body.classList.remove('journey-playing');requestTick();
  }
  function enterInvitation(event) {
    if (reduce) return;
    event.preventDefault();
    if (guidePlaying) return;
    guidePlaying=true;guidePhase=-1;
    document.body.classList.add('journey-playing');
    scrollCue.setAttribute('aria-busy','true');
    const start=scrollY,target=dimensions.top+dimensions.distance*.97;
    const duration=Math.max(850,Math.min(4200,Math.abs(target-start)/dimensions.distance*4200));
    const started=performance.now();
    function advance(now) {
      const t=clamp((now-started)/duration),ease=t*t*(3-2*t);
      window.scrollTo({top:start+(target-start)*ease,behavior:'instant'});
      if (t<1) guidedFrame=requestAnimationFrame(advance);
      else {
        stopGuidedEntry();
        window.scrollTo({top:target,behavior:'instant'});
        requestAnimationFrame(()=>{window.scrollTo({top:target,behavior:'instant'});requestTick();});
      }
    }
    guidedFrame=requestAnimationFrame(advance);requestTick();
  }
  let frame = 0;
  function requestTick() { if (!frame) frame = requestAnimationFrame(paint); }
  function paint() {
    frame = 0;
    const { w,h,x,y,distance,top } = dimensions;
    const pageProgress = clamp(scrollY / Math.max(1,document.documentElement.scrollHeight-h));
    document.querySelector('.reading-progress i').style.transform = 'scaleX(' + pageProgress + ')';
    $('header').classList.toggle('scrolled', scrollY > 50);
    if (reduce) return;
    const p = clamp((scrollY-top)/distance);
    updateGuide(p);
    const camera = smooth(.42,.84,p);
    const travel = smooth(.42,.8,p);
    const scale = Math.exp(camera*Math.log(16));
    const tx = (w*.5-x)*travel;
    const ty = (h*.43-y)*travel;
    scene.style.transform = 'translate3d(' + tx + 'px,' + ty + 'px,0) scale(' + scale + ')';
    scene.style.opacity = String(1-smooth(.85,.96,p));
    copy.style.opacity = String(1-smooth(.16,.28,p));
    copy.style.transform = 'translateY(' + (w <= 760 ? -p*90 : -41-p*60) + (w <= 760 ? 'px)' : '%)');
    copy.inert = p > .18;
    copy.setAttribute('aria-hidden',String(p > .25));
    $('scene-wash').style.opacity = String(1-smooth(.35,.55,p));
    crossLight.style.left = (x+tx) + 'px';
    crossLight.style.top = (y+ty) + 'px';
    crossLight.style.opacity = String(smooth(.48,.68,p)*(1-smooth(.82,.95,p)));
    crossLight.style.transform = 'translate(-50%,-50%) scale(' + (1+camera*7) + ')';
    bloom.style.opacity = String(smooth(.72,.88,p)*(1-smooth(.92,.99,p))*.9);
    const growth = smooth(.78,.95,p);
    const unit = growth*growth*Math.max(w,h)*1.8;
    const cx = x+tx, cy = y+ty;
    const points = [[cx-unit*.5,cy-unit*3],[cx+unit*.5,cy-unit*3],[cx+unit*.5,cy-unit*.5],[cx+unit*3,cy-unit*.5],[cx+unit*3,cy+unit*.5],[cx+unit*.5,cy+unit*.5],[cx+unit*.5,cy+unit*6],[cx-unit*.5,cy+unit*6],[cx-unit*.5,cy+unit*.5],[cx-unit*3,cy+unit*.5],[cx-unit*3,cy-unit*.5],[cx-unit*.5,cy-unit*.5]];
    portal.style.clipPath = 'polygon(' + points.map(point => point[0]+'px '+point[1]+'px').join(',') + ')';
    const welcomeProgress = smooth(.88,.98,p);
    welcome.style.opacity = String(welcomeProgress);
    welcome.style.transform = 'translateY(' + (1-welcomeProgress)*24 + 'px)';
    portal.classList.toggle('is-visible',p>.94);
    portal.inert = p < .94;
    portal.setAttribute('aria-hidden',String(p<.88));
    $('opening-dust').style.opacity = String(1-smooth(.82,.96,p));
  }
  function applyMotion() {
    stopGuidedEntry();
    document.body.classList.toggle('reduced-motion',reduce);
    $('motion-toggle').setAttribute('aria-pressed',String(reduce));
    $('motion-toggle').setAttribute('aria-label',reduce ? 'Enable cinematic animation' : 'Reduce animation');
    $('motion-toggle').title = reduce ? 'Enable cinematic animation' : 'Reduce animation';
    if (reduce) { portal.inert=false;portal.setAttribute('aria-hidden','false');copy.inert=true;copy.setAttribute('aria-hidden','true'); }
    measure();
  }
  $('motion-toggle').addEventListener('click',() => {
    const inOpening = scrollY < opening.offsetHeight-innerHeight;
    reduce = !reduce;
    try { localStorage.setItem('rl-invitation-motion',reduce?'reduced':'cinematic'); } catch {}
    applyMotion();
    if (inOpening) window.scrollTo({top:0,behavior:'instant'});
    toast(text[language][reduce?'motionOn':'motionOff']);
  });
  $('enter-invitation').addEventListener('click',enterInvitation);
  scrollCue.addEventListener('click',enterInvitation);
  const takeControl=()=>stopGuidedEntry();
  window.addEventListener('wheel',takeControl,{passive:true});
  window.addEventListener('touchstart',takeControl,{passive:true});
  window.addEventListener('keydown',event=>{if(['ArrowDown','ArrowUp','PageDown','PageUp','Home','End',' ','Escape'].includes(event.key))takeControl();});
  const menu = $('menu-toggle');
  const nav = $('main-nav');
  const closeMenu = () => {menu.setAttribute('aria-expanded','false');nav.classList.remove('open');};
  menu.addEventListener('click',() => {const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
  document.addEventListener('click',event=>{if(!event.target.closest('.site-header'))closeMenu();});
  window.addEventListener('scroll',requestTick,{passive:true});
  window.addEventListener('resize',measure,{passive:true});
  if (window.visualViewport) window.visualViewport.addEventListener('resize',measure,{passive:true});
  for (let i=0;i<22;i++) {
    const dust=document.createElement('i');
    dust.style.left=((i*37.7)%100)+'%';dust.style.top=((i*21.3)%100)+'%';
    dust.style.setProperty('--speed',(3+i%5)+'s');dust.style.setProperty('--delay',(-i*.7)+'s');
    $('opening-dust').appendChild(dust);
  }
  if ('IntersectionObserver' in window) {
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.1,rootMargin:'0px 0px -20px 0px'});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
    document.body.classList.add('js-ready');
  }
  const date = new Date('2027-01-07T16:00:00+05:30');
  function updateCountdown() {
    const diff=Math.max(0,date.getTime()-Date.now());
    const parts=[Math.floor(diff/86400000),Math.floor(diff/3600000)%24,Math.floor(diff/60000)%60,Math.floor(diff/1000)%60];
    ['days','hours','minutes','seconds'].forEach((key,i)=>{$(key+'-count').textContent=String(parts[i]).padStart(2,'0');});
    if (!diff) {const today=new Date().toLocaleDateString('en-CA',{timeZone:'Asia/Kolkata'})==='2027-01-07';document.querySelector('[data-i18n=countdownIntro]').textContent=text[language][today?'celebrationToday':'celebrationPast'];}
  }
  $('calendar-button').addEventListener('click',() => {
    const lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Ragulbabu and Lydiya//Wedding Invitation//EN','CALSCALE:GREGORIAN','METHOD:PUBLISH','BEGIN:VEVENT','UID:ragulbabu-lydiya-20270107@wedding-invitation','DTSTAMP:20261027T000000Z','DTSTART:20270107T103000Z','SUMMARY:Ragulbabu & Lydiya — Wedding and Reception','LOCATION:New Life Celebration Center (NLCC)\\, Pallavaram\\, Chennai','DESCRIPTION:Join Ragulbabu and Lydiya for their wedding and reception. 4:00 PM onwards (India Standard Time).','STATUS:CONFIRMED','END:VEVENT','END:VCALENDAR'];
    const encoder=new TextEncoder();
    const folded=lines.map(line=>{let result='',part='';for(const char of line){if(encoder.encode(part+char).length>74){result+=part+'\r\n ';part='';}part+=char;}return result+part;});
    const blob=new Blob([folded.join('\r\n')+'\r\n'],{type:'text/calendar;charset=utf-8'});
    const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download='Ragulbabu-Lydiya-Wedding.ics';link.click();setTimeout(()=>URL.revokeObjectURL(url),10000);toast(text[language].calendarSuccess);
  });
  const dialog=$('image-dialog');
  function openImage(src,alt,caption,portrait=false) {
    dialog.classList.toggle('portrait-dialog',portrait);
    dialog.classList.toggle('artwork',portrait);
    $('dialog-image').src=src;$('dialog-image').alt=alt;$('dialog-caption').textContent=caption;
    dialog.showModal();document.body.style.overflow='hidden';
  }
  const invitePreview=()=>openImage($('invitation-image').src,$('invitation-image').alt,language==='ta'?'எங்கள் திருமண அழைப்பிதழ்':'With love, from our families to yours.');
  $('portrait-button').addEventListener('click',()=>openImage($('couple-image').src,$('couple-image').alt,'Ragulbabu & Lydiya',true));
  $('preview-invite').addEventListener('click',invitePreview);
  $('invitation-image-button').addEventListener('click',invitePreview);
  $('dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
  dialog.addEventListener('close',()=>{document.body.style.overflow='';});
  $('share-button').addEventListener('click',async()=>{
    const details=language==='ta'?'ராகுல்பாபு & லிடியா\nதிருமணம் மற்றும் வரவேற்பு\n7 ஜனவரி 2027 · மாலை 4:00 மணி முதல்\nNew Life Celebration Center (NLCC), பல்லாவரம், சென்னை.':'Ragulbabu & Lydiya\nWedding & Reception\n7 January 2027 · 4:00 PM onwards\nNew Life Celebration Center (NLCC), Pallavaram, Chennai.';
    try {
      if (navigator.share) {await navigator.share({title:'Ragulbabu & Lydiya',text:details});return;}
      await navigator.clipboard.writeText(details);toast(text[language].copySuccess);
    } catch(error) {if(error.name!=='AbortError')toast(text[language].copyFallback);}
  });
  const audio=$('wedding-audio');
  const music=$('music-button');
  if (audio.dataset.available==='true') {
    music.hidden=false;
    music.addEventListener('click',async()=>{
      try {
        if (audio.paused) {audio.volume=.45;await audio.play();music.setAttribute('aria-pressed','true');music.setAttribute('aria-label','Pause wedding music');}
        else {audio.pause();music.setAttribute('aria-pressed','false');music.setAttribute('aria-label','Play wedding music');}
      } catch {toast(text[language].musicError);}
    });
  }
  setLanguage(language);
  applyMotion();
  updateCountdown();
  setInterval(updateCountdown,1000);
  document.fonts?.ready.then(measure);
})();
