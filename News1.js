
let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=esports&api-key=MGTTHAFaDPJut8YlIJfDcP4X4LBIStGV";

let headlines = document.getElementById("headlines");

fetch(url)
  .then(response => response.json())
  .then(data => {
  console.log(data);

  data.response.docs.map(article =>{

    console.log(article.headline.main);

    let a = document.createElement("a");
    a.setAttribute('href', article.web_url);
    a.innerHTML = article.headline.main;

    let p = document.createElement("p");
    p.innerHTML = article.abstract;

    let img = document.createElement("img");
    su = "https://static01.nyt.com/";
    du = article.multimedia[0].url;
    ur = su + du;
    img.setAttribute('src', ur);

    headlines.appendChild(img);
    headlines.appendChild(a);
    headlines.appendChild(p);

  }) 
  
})