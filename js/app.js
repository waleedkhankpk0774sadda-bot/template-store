(function(){
const C=window.CONFIG, T=(window.TEMPLATES||[]).slice();
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const param=k=>new URLSearchParams(location.search).get(k);

$$('[data-store]').forEach(e=>e.textContent=C.storeName);
$$('[data-tagline]').forEach(e=>e.textContent=C.tagline);
document.title=document.title.replace('{store}',C.storeName);
const y=$('#year'); if(y) y.textContent=new Date().getFullYear();

const m=$('.menu'), n=$('.nav nav');
if(m){m.onclick=()=>{const o=n.classList.toggle('open');m.setAttribute('aria-expanded',o)};
 $$('nav a').forEach(a=>a.addEventListener('click',()=>n.classList.remove('open')));}

if($('#owner')){$('#ownerName').textContent=C.ownerName;$('#ownerRole').textContent=C.ownerRole;$('#ownerBio').textContent=C.ownerBio;}

const grad=['p1','p2','p3','p4','p5','p6'];
function card(t,i){
  const img=t.image?`<img src="${esc(t.image)}" alt="${esc(t.name)} template preview" loading="lazy">`:`<div class="preview ${grad[i%6]}">${esc(t.category)}<strong>${esc(t.name)}</strong></div>`;
  return `<article class="tcard">${img}<div class="tinfo"><h3>${esc(t.name)}</h3><span>${esc(t.category)}</span>${t.description?`<p>${esc(t.description)}</p>`:''}
  <div class="tbtns">${t.preview?`<a class="ghost" href="${esc(t.preview)}" target="_blank" rel="noopener">Live Preview</a>`:''}<a class="pick" href="index.html?template=${encodeURIComponent(t.name)}#contact">Choose Design →</a></div></div></article>`;
}
const empty=`<div class="empty"><div>🛠️</div><h3>New templates are coming soon</h3><p>We add new website designs regularly. Contact us now and we can design something for your business.</p><a class="btn primary" href="index.html#contact">Contact Us</a></div>`;

const fg=$('#featuredGrid');
if(fg){const f=T.filter(t=>t.featured).slice(0,6); fg.innerHTML=f.length?f.map(card).join(''):empty;
 const more=$('#viewAll'); if(more&&!T.length) more.style.display='none';}

const cg=$('#catalogGrid');
if(cg){
  let cat=param('cat')||'All', q='', sort='new', shown=12;
  const cats=['All',...new Set([...C.categories,...T.map(t=>t.category)])];
  const bar=$('#filters'); bar.innerHTML=cats.map(c=>`<button data-c="${esc(c)}">${esc(c)}</button>`).join('');
  const lm=$('#loadMore'), cnt=$('#count');
  function draw(){
    $$('button',bar).forEach(b=>b.classList.toggle('on',b.dataset.c===cat));
    let l=T.filter(t=>(cat==='All'||t.category===cat)&&(t.name+' '+t.category+' '+(t.description||'')).toLowerCase().includes(q));
    l.sort((a,b)=>sort==='az'?a.name.localeCompare(b.name):String(b.date||'').localeCompare(String(a.date||'')));
    cnt.textContent=T.length?`${l.length} template${l.length===1?'':'s'}`:'';
    cg.innerHTML=!T.length?empty:l.length?l.slice(0,shown).map(card).join(''):`<div class="empty"><h3>No templates found</h3><p>Try another category or search word.</p></div>`;
    lm.style.display=l.length>shown?'inline-flex':'none';
  }
  bar.onclick=e=>{if(e.target.dataset.c){cat=e.target.dataset.c;shown=12;draw()}};
  $('#search').oninput=e=>{q=e.target.value.toLowerCase().trim();shown=12;draw()};
  $('#sort').onchange=e=>{sort=e.target.value;draw()};
  lm.onclick=()=>{shown+=12;draw()};
  draw();
}

const f=$('#form');
if(f){
  const sel=$('[name=template]');
  sel.innerHTML=['Not sure yet / Custom design',...T.map(t=>t.name)].map(x=>`<option>${esc(x)}</option>`).join('');
  const pre=param('template'); if(pre) sel.value=pre;
  const wa=$('#wa'); if(wa&&C.whatsapp){wa.href='https://wa.me/'+C.whatsapp;wa.style.display='inline-flex'}
  const msg=$('#msg'), btn=$('button',f);
  f.onsubmit=async e=>{
    e.preventDefault();
    if(!C.web3formsKey){msg.className='err';msg.textContent='Form is not connected yet. Add your Web3Forms key in js/config.js.';return;}
    btn.disabled=true;btn.textContent='Sending...';
    const d=new FormData(f);d.append('access_key',C.web3formsKey);d.append('subject','New template request - '+C.storeName);
    try{const r=await fetch('https://api.web3forms.com/submit',{method:'POST',body:d});const j=await r.json();
      if(j.success){msg.className='ok';msg.textContent='Thank you! Your request was sent. We will contact you soon.';f.reset();if(pre)sel.value=pre;}
      else throw 0;
    }catch(x){msg.className='err';msg.textContent='Could not send. Please try again or contact us on WhatsApp.';}
    btn.disabled=false;btn.textContent='Send →';
  };
}
})();
