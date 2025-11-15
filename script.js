const postsKey = 'simple_blogs';
function render(){
  const posts = JSON.parse(localStorage.getItem(postsKey)||'[]');
  document.getElementById('posts').innerHTML = posts.map(p=>`<article><h3>${p.title}</h3><p>${p.content}</p></article>`).join('\n');
}
document.getElementById('post').addEventListener('click', ()=>{
  const t=document.getElementById('title').value.trim();
  const c=document.getElementById('content').value.trim();
  if(!t||!c) return alert('Add title and content');
  const posts = JSON.parse(localStorage.getItem(postsKey)||'[]');
  posts.unshift({title:t,content:c});
  localStorage.setItem(postsKey, JSON.stringify(posts));
  render();
});
render();