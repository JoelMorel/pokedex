var pokemonSearch;

$(document).ready(function() {
  var initFunc = function() {
    // Iniitial function that runs at start-up.
  };

  $(".btn").on("click", function() {
    pokemonSearch = $(".pokedex input[type=text]").val();

    var request = $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/" + pokemonSearch,
      method: "GET"
    });

    request.done(function(data) {
      $(".pokedex h3").text(data.name.toUpperCase());
      $(".poke-img img").attr("src", data.sprites.front_default);
      console.log(data);
    });

    request.fail(function(jqXHR, textStatus, error) {
      alert("Request failed: " + textStatus + " " + error);
    });
  });
});
