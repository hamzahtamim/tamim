const menu=document.querySelector('.menu'), links=document.querySelector('.links');
menu.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

// Scroll-reveal animations
const revealEls = document.querySelectorAll('.reveal');
revealEls.forEach((el,i)=>el.style.setProperty('--i', i % 8));
if('IntersectionObserver' in window){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  },{threshold:0.15, rootMargin:'0px 0px -40px 0px'});
  revealEls.forEach(el=>io.observe(el));
} else {
  revealEls.forEach(el=>el.classList.add('in-view'));
}

// Hero ambient glow follows cursor
const hero = document.querySelector('.hero');
if(hero){
  hero.addEventListener('pointermove', (e)=>{
    const r = hero.getBoundingClientRect();
    hero.style.setProperty('--mx', ((e.clientX - r.left)/r.width*100)+'%');
    hero.style.setProperty('--my', ((e.clientY - r.top)/r.height*100)+'%');
  });
}

// Back-to-top button
const totop = document.createElement('a');
totop.href = '#home';
totop.className = 'totop';
totop.setAttribute('aria-label','Back to top');
totop.innerHTML = '↑';
document.body.appendChild(totop);
window.addEventListener('scroll', ()=>{
  totop.classList.toggle('show', window.scrollY > 600);
});
