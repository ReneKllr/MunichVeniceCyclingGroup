const COLLECTION_URL = 'https://www.komoot.com/de-de/collection/4714872/-mu-badtoelz-dolos-mestre-venedig?share_token=aT7o9THLhqHhdYPdLx1cVd1tM1IJHghPVbrp3KPV6sJkvXHXan&ref=collection&t_s=referral&t_cid=collection_share&t_ref_username=3475364858020';

const stages = [
  {day:1,date:'2026-09-30',from:'Bad Tölz',to:'Innsbruck',km:106,up:768,down:886,time:'5:00',speed:'21,2',highest:962,profile:[687,652,663,676,688,717,776,760,799,821,916,900,929,936,928,960,705,526,536,543,548,554,559,568],tour:3297674042,start:[47.760341,11.573465],high:[47.413334,11.763567],end:[47.274152,11.426855],map:'https://tourpic-vector.maps.komoot.net/r/big/eyc%5Cm%60aF@%60Jp%5BLlc@gTxS_C%7C%5Cvc@gFoGf@ml@jJoe@hCdBrOyOxu@_D%60X%7Bc@xAcPbEtCpCxTxP~%5EzRjRnBpVhH%60Ez@xXtHnQjEnd@%7CBj%5CaC~M/'},
  {day:2,date:'2026-10-01',from:'Innsbruck',to:'Sterzing',km:67,up:1172,down:800,time:'3:35',speed:'18,7',highest:1378,profile:[569,575,582,587,785,918,1043,1034,1040,1055,1022,992,1039,1084,1147,1224,1374,1319,1224,1108,1072,1000,950,941],tour:3297674043,start:[47.274152,11.426855],high:[47.002157,11.503426],end:[46.886327,11.433613],map:'https://tourpic-vector.maps.komoot.net/r/big/kiz%5Byd~EAzQ~BxBhAkHrDNe@qC%7C@Yt@dDnFlBhD%7DB%7CJo@fByAgA%7D@~MqGFwCjAdAxEyChDsJz@%7CCtIgD%7CBtCxMLt%5CoUhPtDpEaMrEwC%7CRxHzKvQ%60JvIyAb%5CpEcYlCaCjIvAdF~GnJuA/'},
  {day:3,date:'2026-10-02',from:'Sterzing',to:'St. Lorenzen',km:51,up:383,down:512,time:'2:08',speed:'23,8',highest:949,profile:[941,937,946,882,839,815,767,732,725,712,764,761,757,740,743,746,761,760,776,789,807,841,806,812],tour:3297674044,start:[46.886327,11.433613],high:[46.86563,11.499687],end:[46.783119,11.902055],map:'https://tourpic-vector.maps.komoot.net/r/big/%7Dvr%5B_i~EaAOxBaCdLcj@~Q%7BNrHgBlHo%60@fB_FpGeFzBeF_@qE%60EoDyAwIiDiBoG%7CAsD_E_EqFsAaL~D%7BjAnLcT%60@kEnD%7BBmCaM/'},
  {day:4,date:'2026-10-03',from:'St. Lorenzen',to:'Niederdorf',km:38,up:627,down:227,time:'2:08',speed:'17,7',highest:1211,profile:[811,819,846,906,939,904,948,971,1020,1047,1069,1066,1076,1091,1147,1112,1086,1111,1132,1148,1151,1183,1200,1211],tour:3297674045,start:[46.783119,11.902055],high:[46.724214,12.226694],end:[46.724214,12.226694],map:'https://tourpic-vector.maps.komoot.net/r/big/mvp%5BymgF%7BBcJgA%7B@qAaE%60@wDzCF%7D@gJf@NAoAj@_@iA%7BEf@qJjCsJbEyAd@l@hAgEvAcBNgC%7C@y@@gCu@UKgIeA_Dv@_Aa@uBv@gJnBcDeBuCp@pBKf@i@oBd@dCrAf@QeAbEmK~AgRh@iAp@cPX%7DA%60A@ZgAGwDxAuEXcE/'},
  {day:5,date:'2026-10-04',from:'Niederdorf',to:'Belluno',km:105,up:941,down:1765,time:'4:27',speed:'23,6',highest:1527,profile:[1211,1284,1404,1508,1424,1268,1190,1113,989,908,880,863,843,755,555,508,479,462,458,417,400,405,397,387],tour:3297674046,start:[46.724214,12.226694],high:[46.620492,12.18376],end:[46.147481,12.22545],map:'https://tourpic-vector.maps.komoot.net/r/big/sqo%5BuxmFr%60@nBlNcFnLrC%3FvSjLj%5EFlTdi@mUpKNfXse@fRmDtP%7BWhDiUyByMqC%5E%60BaFcDwa@dKpCfCdHvPV~ZnV%60J%7DC%60FvGhy@jC%60@%7CJbNzKfGxSjHdB/'},
  {day:6,date:'2026-10-05',from:'Belluno',to:'Limana',km:80,up:1037,down:1103,time:'4:39',speed:'17,2',highest:557,profile:[386,381,398,487,536,381,366,476,439,521,485,454,363,340,270,272,229,268,250,280,315,338,314,320],tour:3297674047,start:[46.147481,12.22545],high:[46.163651,12.170771],end:[46.090068,12.143778],map:'https://tourpic-vector.maps.komoot.net/r/big/eid%5B%7DwmFzApBhCu@Nj@iBtCAmB_@NHt@oC%60D%7BBnFwCdC%5DvCRrElCzAtAhCS%60Lz@%60CyA%7CBcAEsBvGrArDrAnJh@jAhDn@tCxDdH%60DzCpCq@b@d@%5Ci@HdA%5CvBrDbBhIEpAcAFQ%60ArEhC~A%60D%60A%60@KxC%5EC~BpG%5E~GxBjGxApBjB%60@EjD~@q@nDdHxExFg@tK%7C@lCjKwMdAQcAqE%7C@aAt@R@yAn@%7D@b@eFs@gCh@kCYgFp@kDcCeCwEs@mAxCP%60@_A%5EUm@aBwFLkIeBiF_AT%7D@%7DCtAwACwCyAiEo@kFaEuIBcEm@EyAmC%7DDgNZ%7B@lCLAwAYaAW%5EuCeA%7DBeC~AaJoAkCaBvE/'},
  {day:7,date:'2026-10-06',from:'Limana',to:'Treviso',km:119,up:821,down:1122,time:'5:22',speed:'22,2',highest:490,profile:[320,352,430,386,385,382,386,460,280,186,148,119,113,78,58,65,68,87,89,73,41,29,16,18],tour:3297674048,start:[46.090068,12.143778],high:[46.080782,12.336465],end:[45.664939,12.240682],map:'https://tourpic-vector.maps.komoot.net/r/big/iec%5B%7BdlFkEcZqFgFfE%7BNwF%7BIyErEsFcC%7BHwOoIgDaB_MzFuS~QYzEwOxYbMxCmCb@jFhb@xYnEElUaV%60FvRrH%3FbKoI%60QlAtVpd@%60InEtIwJbBxAcGn%5CdH%7CE%60Ppf@lDr@nZu%5EwG%7BLbCcUzI%7DCKdEhGj@pBoIvJiEhLbH/'},
  {day:8,date:'2026-10-07',from:'Treviso',to:'Mestre',km:51,up:87,down:101,time:'2:34',speed:'19,9',highest:21,profile:[18,15,8,7,2,6,4,1,2,4,2,1,2,2,2,1,-1,0,2,0,1,6,6,4],tour:3297674049,start:[45.664939,12.240682],high:[45.665571,12.245966],end:[45.482762,12.230614],map:'https://tourpic-vector.maps.komoot.net/r/big/q%7BzZmanFg@o@PkBnAQu@_Dj@%7B@Mo@nBgAeAqAD%7B@%7CAoDdD%7BCp@uEp@%7C@%3FnAjFuIcAiBR%7DAd@EFlAv@%3Fx@%7DCeAWWwAnAs@EfAt@VhBwChBHJq@ZbBfBB%60@sAdDnD_AiGlCSYmCbBq@w@gB%7CAgGv@%60BYuAbAuAPjAdHpEQ~A%60BlBnGfCdBQdBwDjEhAe@fP%60BbC%5BpCtFn@%5Cn@Y%7CDp@%5E@pD%7DAfHg@Tg@s@Sr@z@XYnDzAm@l@vA@u@lGhFr@MxG%60FO%7CA/'}
];

const startTimes = {
 1:{ideal:'07:45',latest:'12:00',arrival:'etwa 13:45',checkin:'bis 21:00'},
 2:{ideal:'09:30',latest:'14:00',arrival:'etwa 14:05',checkin:'14:00–00:00'},
 3:{ideal:'10:00',latest:'15:00',arrival:'etwa 13:00',checkin:'12:00–21:00'},
 4:{ideal:'11:30',latest:'13:30',arrival:'etwa 14:30',checkin:'15:00–20:00'},
 5:{ideal:'08:30',latest:'12:00',arrival:'etwa 14:00',checkin:'ab 15:00'},
 6:{ideal:'10:30',latest:'13:30',arrival:'etwa 16:10',checkin:'16:30–20:00'},
 7:{ideal:'08:00',latest:'11:00',arrival:'etwa 14:20',checkin:'14:00–00:00'},
 8:{ideal:'07:00 / 10:30',latest:'07:45 / 11:45',arrival:'10:20 / 13:50',checkin:'Zug 11:47 / 15:47'}
};

const stays = [
 {day:1,date:'30.09.',place:'Innsbruck',name:'Jugendherberge Innsbruck',address:'Reichenauerstraße 147, Innsbruck',breakfast:'Ja',cancel:'30.09., 14:00',checkin:'bis 21:00',phone:'+43512346179',cost:'263,00 €',link:'https://www.youth-hostel-innsbruck.at/'},
 {day:2,date:'01.10.',place:'Sterzing',name:'Hotel Brenner – Stop & Go',address:'Autohof Sadobre, 39049 Sterzing',breakfast:'Ja',cancel:'27.09., 23:59',checkin:'14:00–00:00',phone:'+390472760620',cost:'310,10 €',link:'https://www.booking.com/Share-Jz194gK'},
 {day:3,date:'02.10.',place:'St. Lorenzen',name:'Gasthof Traube',address:'Via J.-Renzler-Straße 13, 39030 St. Lorenzen',breakfast:'Ja',cancel:'24.09., 23:59',checkin:'12:00–21:00',phone:'+390474474013',cost:'286,00 €'},
 {day:4,date:'03.10.',place:'Niederdorf',name:'Montanaris Apartments · SpaDay',address:'Bahnhofstr. 6/1, 39039 Niederdorf',breakfast:'Ja',cancel:'18.09., 23:59',checkin:'15:00–20:00',phone:'+390474745163',cost:'637,24 €'},
 {day:5,date:'04.10.',place:'Belluno',name:'Hotel Europa Belluno',address:'Via Vittorio Veneto 158/O, 32100 Belluno',breakfast:'Ja',cancel:'01.10.',checkin:'ab 15:00',phone:'+390437930196',cost:'146,51 €',link:'https://www.booking.com/hotel/it/europa-executive.de.html'},
 {day:6,date:'05.10.',place:'Limana',name:'Agriturismo Antica Pieve',address:'Via Pieve di Limana 13, 32020 Limana',breakfast:'Ja',cancel:'20.09., 23:59',checkin:'16:30–20:00',phone:'+498962826568',cost:'189,00 €'},
 {day:7,date:'06.10.',place:'Treviso',name:'B&B Hotel Treviso',address:'Via Gabriele D’Annunzio 35, 31100 Treviso',breakfast:'Ja',cancel:'04.10.',checkin:'14:00–00:00',phone:'+3904221990313',cost:'258,00 €',link:'https://www.booking.com/Share-cDAnduk'}
];

const pack = {
 'Werkzeug':['Multitool','Schläuche','Pumpe','Flickzeug','Kettenwachs','Kettenschloss','Bremsbeläge','Bremssicherung'],
 'Erste Hilfe':['Ibuprofen','Pflaster / Blasenpflaster','Infektionsspray','Rettungsdecke'],
 'Klamotten':['Radhose','Trikot','Baselayer','Sport-BH (2)','Socken','Radschuhe','Helm','Weste','Armlinge','Beinlinge','Regenjacke','Regenhose','Daunenjacke','Handschuhe','Stirnband','Buff','Kleid','Strumpfhose','Merino','Slip','Schlafzeug','Schuhe / Schlappen','Badesachen für SpaDay'],
 'IT':['Garmin','Handy','Lampen','Ladekabel: Stella, Handy, Garmin','Powerbank','Batterien: Schaltung, PM','Kopfhörer'],
 'Kosmetik':['Zahnbürste','Zahnpasta','Haarbürste','Haargummis','Shampoo','Deo','Rei','Sonnencreme','Zinkcreme / Arschcreme · jede Person selbst','Nagelschere','Rasierer','Tampons'],
 'Sonstiges':['Sonnenbrille','Flaschen','Riegel','Magnesium','Taschentücher','Jutebeutel','Schloss','Handtuch','Ausweis / Geld','Schlüssel','Messer']
};

const formatDate = value => new Intl.DateTimeFormat('de-DE',{weekday:'short',day:'2-digit',month:'2-digit'}).format(new Date(value+'T12:00:00'));
const stageUrl = id => `https://www.komoot.com/tour/${id}`;

function renderRoute(){
 const stops=[
  {name:'München',date:'30.09.',icon:'🚆',note:'Regio'},
  {name:'Bad Tölz',date:'30.09.',stage:1},{name:'Innsbruck',date:'30.09.',stage:1},
  {name:'Sterzing',date:'01.10.',stage:2},{name:'St. Lorenzen',date:'02.10.',stage:3},
  {name:'Niederdorf',date:'03.10.',stage:4,note:'♨ SpaDay',special:true},
  {name:'Belluno',date:'04.10.',stage:5},{name:'Limana',date:'05.10.',stage:6},
  {name:'Treviso',date:'06.10.',stage:7,note:'🎂 BirthDay',special:true},
  {name:'Mestre',date:'07.10.',stage:8,icon:'🚆',note:'Rückzug'}
 ];
 document.querySelector('#routeLine').innerHTML=stops.map((s,i)=>{const href=s.stage?`#stage-${s.stage}`:'#zuege';return `<a class="route-stop ${i>=4&&i<=6?'highlight':''} ${s.special?'special':''}" href="${href}"><span class="route-dot">${s.icon||s.stage}</span><b>${s.name}</b><small>${s.date}${s.note?` · ${s.note}`:''}</small></a>`}).join('');
}

function profileSvg(values){const min=Math.min(...values),max=Math.max(...values),range=Math.max(max-min,1),pts=values.map((v,i)=>`${(i/(values.length-1)*100).toFixed(1)},${(44-(v-min)/range*38).toFixed(1)}`).join(' ');return `<div class="elevation-profile"><div><b>Höhenprofil</b></div><svg viewBox="0 0 100 48" preserveAspectRatio="none" role="img" aria-label="Höhenprofil der Etappe"><polygon points="0,48 ${pts} 100,48"/><polyline points="${pts}"/></svg></div>`}

const actualStarts=JSON.parse(localStorage.getItem('venice-actual-starts')||'{}');
const pauseMinutes={1:60,2:60,3:50,4:50,5:60,6:60,7:60,8:45};
const checkinDeadlines={1:21*60,2:24*60,3:21*60,4:20*60,5:null,6:20*60,7:24*60};
const toMinutes=value=>{const [h,m]=value.split(':').map(Number);return h*60+m};
const clock=value=>`${String(Math.floor(value/60)%24).padStart(2,'0')}:${String(value%60).padStart(2,'0')}`;
const durationText=value=>`${Math.floor(value/60)}:${String(value%60).padStart(2,'0')} h`;
const ridingMinutes=stage=>{const [h,m]=stage.time.split(':').map(Number);return h*60+m};

function actualStartHtml(stage){
 if(stage.day===8) return `<div class="actual-schedule"><div><b>Tatsächliche Abfahrt</b><small>Die Ankunft und der Bahnhofspuffer passen sich an.</small></div><div class="actual-inputs"><label>2 Personen · Zug 11:47<input type="time" data-actual-start="8" data-group="early" value="${actualStarts['8-early']||''}"></label><label>3 Personen · Zug 15:47<input type="time" data-actual-start="8" data-group="late" value="${actualStarts['8-late']||''}"></label></div><p id="flow-8-early">Startzeit eingeben.</p><p id="flow-8-late">Startzeit eingeben.</p></div>`;
 return `<div class="actual-schedule"><div><b>Tatsächliche Abfahrt</b><small>Berechnet die voraussichtliche Ankunft inklusive Pausenreserve.</small></div><label class="single-time">Start<input type="time" data-actual-start="${stage.day}" value="${actualStarts[stage.day]||''}"></label><p id="flow-${stage.day}">Startzeit eingeben.</p></div>`;
}

function updateStageFlow(input){
 const day=Number(input.dataset.actualStart),stage=stages[day-1],group=input.dataset.group||'',key=group?`${day}-${group}`:String(day);
 actualStarts[key]=input.value;localStorage.setItem('venice-actual-starts',JSON.stringify(actualStarts));
 const output=document.querySelector(`#flow-${day}${group?`-${group}`:''}`);if(!input.value){output.textContent='Startzeit eingeben.';return}
 const arrival=toMinutes(input.value)+ridingMinutes(stage)+pauseMinutes[day];
 if(day===8){const train=group==='early'?11*60+47:15*60+47,buffer=train-arrival;output.className=buffer>=45?'flow-ok':'flow-risk';output.textContent=`Voraussichtliche Ankunft ${clock(arrival)} Uhr · ${buffer>=0?`${durationText(buffer)} Bahnhofspuffer`:`Zug wäre bereits ${durationText(-buffer)} abgefahren`}`;return}
 const deadline=checkinDeadlines[day],buffer=deadline===null?null:deadline-arrival;output.className=buffer===null||buffer>=60?'flow-ok':'flow-risk';output.textContent=`Voraussichtliche Ankunft ${clock(arrival)} Uhr${buffer===null?' · Check-in ab 15:00 Uhr':` · ${buffer>=0?`${durationText(buffer)} bis Check-in-Ende`:`Check-in-Ende um ${durationText(-buffer)} überschritten`}`}`;
}

function bindActualStarts(){document.querySelectorAll('[data-actual-start]').forEach(input=>{input.addEventListener('input',()=>updateStageFlow(input));if(input.value)updateStageFlow(input)})}

function renderStages(){
 document.querySelector('#stageGrid').innerHTML=stages.map(s=>`<article class="stage-card ${s.day>=4&&s.day<=6?'dolomites':''}" id="stage-${s.day}">
   <div class="stage-map"><img src="${s.map}?width=900&height=420&crop=true" alt="Komoot Karte Etappe ${s.day}" loading="lazy"><span class="stage-number">TAG ${s.day}</span>${s.day===4?'<span class="stage-badge">DOLOMITEN · SpaDay</span>':s.day===7?'<span class="stage-badge special-badge">BirthDay 🎂</span>':s.day>=5&&s.day<=6?'<span class="stage-badge">DOLOMITEN</span>':''}</div>
   <div class="stage-body"><span class="stage-date">${formatDate(s.date)} · 2026</span><h3>${s.from} → ${s.to}</h3>
   <span class="effort-badge ${[3,4,8].includes(s.day)?'light':'power'}">${[3,4,8].includes(s.day)?'Light Day':'Power Day'}</span><div class="metrics"><div><b>${s.km} km</b><small>Distanz</small></div><div><b>${s.up} hm</b><small>Bergauf</small></div><div><b>${s.down} hm</b><small>Bergab</small></div><div><b>${s.speed}</b><small>km/h Schnitt · moderat</small></div></div><div class="departure-plan"><span><small>Ideale Abfahrt</small><b>${startTimes[s.day].ideal} Uhr</b></span><span><small>Späteste Abfahrt</small><b>${startTimes[s.day].latest} Uhr</b></span><em>Ankunft ${startTimes[s.day].arrival}<br>${s.day===8?'Abfahrt':'Check-in'} ${startTimes[s.day].checkin}</em></div>${actualStartHtml(s)}${profileSvg(s.profile)}
   <div class="weather-title">Wetter entlang der Strecke</div><div class="weather-row" id="weather-${s.day}"><div class="weather-point"><b>Start</b><span>…</span><small>${s.from}</small></div><div class="weather-point"><b>Höchster Punkt</b><span>…</span><small>${s.highest} m</small></div><div class="weather-point"><b>Ziel</b><span>…</span><small>${s.to}</small></div></div><p class="weather-state" id="weather-state-${s.day}">Prognose wird geladen …</p>
   <div class="stage-actions"><a class="text-link" href="${stageUrl(s.tour)}" target="_blank" rel="noopener">Etappe in Komoot ↗</a>${s.highest>=1200?'<span class="warning">Alpine Bedingungen prüfen</span>':''}</div></div></article>`).join('');bindActualStarts();
}

async function loadWeather(stage){
 const lats=[stage.start[0],stage.high[0],stage.end[0]].join(','), lons=[stage.start[1],stage.high[1],stage.end[1]].join(',');
 const url=`https://api.open-meteo.com/v1/forecast?latitude=${lats}&longitude=${lons}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max&timezone=auto&start_date=${stage.date}&end_date=${stage.date}`;
 try{
  const response=await fetch(url); if(!response.ok) throw new Error('forecast unavailable');
  const result=await response.json(); const data=Array.isArray(result)?result:[result];
  const labels=[stage.from,`${stage.highest} m`,stage.to];
  document.querySelector(`#weather-${stage.day}`).innerHTML=data.map((p,i)=>{const d=p.daily;return `<div class="weather-point"><b>${['Start','Höchster Punkt','Ziel'][i]}</b><span>${Math.round(d.temperature_2m_min[0])}–${Math.round(d.temperature_2m_max[0])} °C</span><small>${labels[i]} · Regen ${d.precipitation_probability_max[0]??'–'} % · Wind ${Math.round(d.wind_speed_10m_max[0])} km/h</small></div>`}).join('');
  document.querySelector(`#weather-state-${stage.day}`).textContent='Live Prognose von Open-Meteo · zuletzt geladen '+new Date().toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'});
 }catch(e){document.querySelector(`#weather-state-${stage.day}`).textContent='Für diesen Tag ist aktuell noch keine Prognose verfügbar. Kurz vor der Etappe erneut öffnen.';}
}

function renderStays(){
 document.querySelector('#stayList').innerHTML=stays.map(s=>`<article class="stay-row"><div class="stay-day">Tag ${s.day}<small>${s.date}</small></div><div class="stay-name"><b>${s.link?`<a href="${s.link}" target="_blank" rel="noopener">${s.name} ↗</a>`:s.name}</b><small>${s.place} · Frühstück ${s.breakfast}</small></div><div class="stay-address">${s.address}<br><a href="tel:${s.phone}">${s.phone}</a></div><div class="stay-meta"><b>Check-in ${s.checkin}</b><br>Storno bis ${s.cancel}</div><div class="stay-price">${s.cost}</div></article>`).join('');
}

function renderPack(){
 const saved=JSON.parse(localStorage.getItem('venice-pack')||'{}');
 const owners=JSON.parse(localStorage.getItem('venice-pack-owners')||'{}');
 const custom=JSON.parse(localStorage.getItem('venice-custom-pack')||'{}');
 const sharedCategories=['Werkzeug','Erste Hilfe'];
 const escapeHtml=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
 const itemsHtml=(category,shared)=>[...pack[category].map(text=>({text,index:null})),...(custom[category]||[]).map((text,index)=>({text,index}))].map(entry=>{const id=encodeURIComponent(`${category}-${entry.text}`),label=escapeHtml(entry.text);const check=`<label class="check-item"><input type="checkbox" data-pack="${id}" ${saved[id]?'checked':''}><span>${label}</span></label>`;const owner=shared?`<input data-owner="${id}" value="${escapeHtml(owners[id]||'')}" placeholder="Wer nimmt es?" aria-label="Zuständigkeit für ${label}">`:'';const remove=entry.index===null?'':`<button class="custom-delete" type="button" data-custom-delete="${encodeURIComponent(category)}" data-index="${entry.index}" aria-label="${label} löschen">×</button>`;return `<div class="${shared?'shared-item':'pack-item-row'}">${check}${owner}${remove}</div>`}).join('');
 const addForm=category=>`<form class="pack-add-form" data-pack-form="${encodeURIComponent(category)}"><input maxlength="60" placeholder="${escapeHtml(category)} ergänzen …" aria-label="Neuen Punkt zu ${escapeHtml(category)} hinzufügen"><button type="submit" aria-label="Hinzufügen">+</button></form>`;
 const sharedCard=`<section class="check-card shared-pack-card"><h3>Werkzeug & Erste Hilfe <small>in der Gruppe aufteilen</small></h3>${sharedCategories.map(category=>`<div class="pack-subgroup"><h4>${category}</h4>${itemsHtml(category,true)}${addForm(category)}</div>`).join('')}</section>`;
 const otherCards=Object.keys(pack).filter(category=>!sharedCategories.includes(category)).map(category=>`<section class="check-card"><h3>${category}</h3>${itemsHtml(category,false)}${addForm(category)}</section>`).join('');
 document.querySelector('#packGrid').innerHTML=sharedCard+otherCards;
 document.querySelectorAll('[data-pack]').forEach(box=>box.addEventListener('change',()=>{saved[box.dataset.pack]=box.checked;localStorage.setItem('venice-pack',JSON.stringify(saved));updatePackProgress()}));
 document.querySelectorAll('[data-owner]').forEach(input=>input.addEventListener('input',()=>{owners[input.dataset.owner]=input.value;localStorage.setItem('venice-pack-owners',JSON.stringify(owners))}));
 document.querySelectorAll('[data-pack-form]').forEach(form=>form.addEventListener('submit',event=>{event.preventDefault();const category=decodeURIComponent(form.dataset.packForm),input=form.querySelector('input'),value=input.value.trim();if(!value)return;custom[category]=custom[category]||[];if(![...pack[category],...custom[category]].some(item=>item.toLowerCase()===value.toLowerCase()))custom[category].push(value);localStorage.setItem('venice-custom-pack',JSON.stringify(custom));renderPack()}));
 document.querySelectorAll('[data-custom-delete]').forEach(button=>button.addEventListener('click',()=>{const category=decodeURIComponent(button.dataset.customDelete);custom[category].splice(Number(button.dataset.index),1);localStorage.setItem('venice-custom-pack',JSON.stringify(custom));renderPack()}));updatePackProgress();
}
function updatePackProgress(){const boxes=[...document.querySelectorAll('[data-pack]')],done=boxes.filter(b=>b.checked).length;document.querySelector('#packProgress').textContent=`${done} / ${boxes.length}`;document.querySelector('#packProgressBar').style.width=`${done/boxes.length*100}%`;}

let tasks=JSON.parse(localStorage.getItem('venice-tasks')||'null')||[
 {text:'Hinzug München → Bad Tölz auswählen',done:false},{text:'Räder und Bremsbeläge prüfen',done:false},{text:'Offline Karten auf Garmin und Handy laden',done:false},{text:'Verpflegung kaufen',done:false}
];
const removedTasks=['Fahrradmitnahme für Hinzug prüfen','Tickets und Fahrradreservierungen Rückfahrt verteilen','Stornofristen der Unterkünfte prüfen'];
tasks=tasks.filter(task=>!removedTasks.includes(task.text));
if(!tasks.some(task=>task.text==='Verpflegung kaufen')) tasks.push({text:'Verpflegung kaufen',done:false});
localStorage.setItem('venice-tasks',JSON.stringify(tasks));
function saveTasks(){localStorage.setItem('venice-tasks',JSON.stringify(tasks));}
function renderTasks(){document.querySelector('#taskList').innerHTML=tasks.map((t,i)=>`<label class="task ${t.done?'done':''}"><input type="checkbox" data-task="${i}" ${t.done?'checked':''}><span>${t.text}</span><button type="button" data-delete="${i}" aria-label="Aufgabe löschen">×</button></label>`).join('');document.querySelectorAll('[data-task]').forEach(el=>el.addEventListener('change',()=>{tasks[+el.dataset.task].done=el.checked;saveTasks();renderTasks()}));document.querySelectorAll('[data-delete]').forEach(el=>el.addEventListener('click',()=>{tasks.splice(+el.dataset.delete,1);saveTasks();renderTasks()}));}

function renderToday(){
 const now=new Date(), start=new Date('2026-09-30T00:00:00'), end=new Date('2026-10-07T23:59:59');
 const today=stages.find(s=>s.date===new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Berlin'}).format(now));
 const card=document.querySelector('#todayCard');
 if(today){card.innerHTML=`<div><span class="stage-date">HEUTE · TAG ${today.day}</span><h3>${today.from} → ${today.to}</h3><p>${today.km} km durch ${today.day>=4&&today.day<=6?'die Dolomiten':'Alpen und Voralpen'}.</p><div class="today-meta"><span><b>${today.km} km</b><small>Distanz</small></span><span><b>${today.up} hm</b><small>Bergauf</small></span><span><b>${today.down} hm</b><small>Bergab</small></span></div></div><a class="button" href="${stageUrl(today.tour)}" target="_blank" rel="noopener">Navigation öffnen ↗</a>`}
 else if(now<start){card.innerHTML=`<div><span class="stage-date">VORBEREITUNG</span><h3>Die Reise beginnt am 30. September</h3><p>Jetzt Züge festlegen, Stornofristen im Blick behalten und Packliste vervollständigen.</p></div><a class="button" href="#aufgaben">Aufgaben ansehen</a>`}
 else if(now>end){card.innerHTML=`<div><span class="stage-date">TOUR BEENDET</span><h3>617 Kilometer bis Mestre</h3><p>Die Etappen bleiben als Reiseübersicht erhalten.</p></div><a class="button" href="${COLLECTION_URL}" target="_blank" rel="noopener">Komoot öffnen ↗</a>`}
}

function countdown(){const days=Math.ceil((new Date('2026-09-30T00:00:00+02:00')-new Date())/86400000),n=document.querySelector('#countdownNumber'),l=document.querySelector('#countdownLabel');if(days>0){n.textContent=days;l.textContent=days===1?'Tag bis zum Start':'Tage bis zum Start'}else if(days>=-7){n.textContent='GO';l.textContent='Die Tour läuft'}else{n.textContent='617';l.textContent='Kilometer geschafft'}}

document.querySelector('.menu-button').addEventListener('click',e=>{document.querySelector('.nav').classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',document.querySelector('.nav').classList.contains('open'))});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.nav').classList.remove('open')));
document.querySelector('#taskForm').addEventListener('submit',e=>{e.preventDefault();const input=document.querySelector('#taskInput'),text=input.value.trim();if(text){tasks.push({text,done:false});input.value='';saveTasks();renderTasks()}});
document.querySelector('#resetPack').addEventListener('click',()=>{if(confirm('Alle Häkchen der Packliste zurücksetzen?')){localStorage.removeItem('venice-pack');renderPack()}});
document.querySelectorAll('input[name="outbound"]').forEach(r=>{r.checked=localStorage.getItem('venice-outbound')===r.value;r.addEventListener('change',()=>localStorage.setItem('venice-outbound',r.value))});

renderRoute();renderStages();renderStays();renderPack();renderTasks();renderToday();countdown();stages.forEach(loadWeather);
