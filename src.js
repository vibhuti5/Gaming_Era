var url = "https://api.pandascore.co/lol/champions?token=t-3ciXXK5WaYsu600Xz0ZSAGXimWGlgTp78FXKlB9Af3oVCkXlI&content-type=text/json";


fetch(url)
  .then(response => response.json())
  .then(data => {
  console.log(data);
})