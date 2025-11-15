const API_KEY = 'YOUR_OPENWEATHER_API_KEY'; // <- Replace with your API key
document.getElementById('search').addEventListener('click', async ()=>{
  const city = document.getElementById('city').value.trim();
  const out = document.getElementById('result');
  out.textContent = 'Loading...';
  if(!city){ out.textContent='Please enter a city'; return; }
  try{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`);
    if(!res.ok) throw new Error('City not found');
    const data = await res.json();
    out.innerHTML = `<strong>${data.name}</strong><br>${data.main.temp} °C — ${data.weather[0].description}`;
  }catch(e){
    out.textContent = 'Error: ' + e.message;
  }
});