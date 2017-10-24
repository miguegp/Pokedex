function pokedex(){
  var pokemones = [
    {
      "id": "001",
      "name":"Pikachu",
      "photo":"01",
      "type": "electric"
    },
    {
      "id": "002",
      "name":"Charmander",
      "photo":"02",
      "type": "fire"
    },
    {
      "id": "003",
      "name":"Squirtle",
      "photo":"03",
      "type": "water"
    },
    {
      "id": "004",
      "name":"Bulbasaur",
      "photo":"04",
      "type": "grass"
    }
  ];
var contentPhoto = "";
var contentInfo = "";
var content = "";
var infoName = "";
var infoPhoto = "";
var infoType = "";
var infoId = "";
var emptyDiv = "";

for (var i = 0; i < pokemones.length; i++) {
  id = pokemones[i].id;
  name = pokemones[i].name;
  photo = pokemones[i].photo;
  type = pokemones[i].type;

  console.log(id + name + photo + type);

  contentPhoto = "<div class='photo'>" + "<img src='imgs/photos/" + photo + ".png'>" + "</div>";

  infoName = "<h2>" + name + "</h2>";
  infoId = "<span>" + id + "</span>";
  contentInfo = "<div class='info'>" + infoName + "</div>";

  infoType = "<img src='imgs/types/" + type + ".png'>";
  emptyDiv = "<div class='d-flex justify-content-between data'>" + infoId + infoType + "</div>";
  contentInfo = "<div class='info'>" + infoName + emptyDiv + "</div>";
  content = content + "<div class='pokemon'>" + contentPhoto + contentInfo + "</div>";

  }

  document.getElementById('container').innerHTML = content;

}
