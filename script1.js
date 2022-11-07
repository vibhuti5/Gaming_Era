let url = "https://api.rawg.io/api/games?dates=2020-01-01%2C2020-12-31&ordering=-added&page=1";

let games = document.getElementById("games");

fetch(url)
  .then(response => response.json())
  .then(data => {
  console.log(data);
  
 data.results.map(article =>{

    console.log(article.slug);
    
    su = "https://rawg.io/games/";
    du = article.slug;
    ur = su + du;
    let a = document.createElement("a");
    a.setAttribute('href', ur);
    a.innerHTML = article.name;

    let img = document.createElement("img");
    img.setAttribute('src', article.background_image);

    games.appendChild(img);
    games.appendChild(a); 
  }) 
  
})