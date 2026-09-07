// Atelier — minimal, no fake timers
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-accordion]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const p=btn.nextElementSibling;
      p.classList.toggle('hidden');
      const i=btn.querySelector('i');
      if(i) i.className = p.classList.contains('hidden') ? 'ri-add-line' : 'ri-subtract-line';
    });
  });
});
