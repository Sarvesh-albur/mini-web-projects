const screen = document.getElementById('screen');
let expr = '';
document.querySelectorAll('.btn[data-val]').forEach(b=>{
  b.addEventListener('click', ()=>{ expr += b.dataset.val; screen.value = expr; });
});
document.getElementById('clr').addEventListener('click', ()=>{ expr=''; screen.value=''; });
document.getElementById('eq').addEventListener('click', ()=>{ try{ screen.value = eval(expr); expr = screen.value+'' }catch(e){ screen.value='Error' } });