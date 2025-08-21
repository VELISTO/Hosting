const cards = document.getElementById("pokebox");
const searchn = document.getElementById("searchname");
const inpfrom = document.getElementById("from");
const inpto = document.getElementById("to");
const sortSelect = document.getElementById("selectwl");
const typeSelect = document.getElementById("select-type");
const favTab = document.getElementById("favTab");
const favButton = document.querySelector("header button");
const favContainer = document.getElementById("favContainer");
const closeFavTabButton = document.getElementById("closeFavTab");

let favorites = [];

function create(charapters) {
  cards.innerHTML = "";
  charapters.forEach((entity) => {
    const box = document.createElement("div");

    box.innerHTML = `
      <div class="idn">
          <p class="pid">${entity.id}</p>
      </div>
      <div class="ns">
          <img class="bom" src="https://www.iconpacks.net/icons/1/free-star-icon-346-thumb.png" />
          <h1 class="namet">${entity.name}</h1>
      </div>
      <img class="pokeimg" src="${entity.img}" />
      <p class="sp">${entity.type[0]}</p>
      <div class="infor">
          <h4>Candy Count: ${entity.candy_count}</h4>
          <h4>${entity.weight}</h4>
          <p>${entity.weaknesses}</p>
      </div>
      <div class="tn">
          <p class="tnum">${entity.spawn_time}</p>
      </div>
    `;

    box.className = "box";
    const starIcon = box.querySelector(".bom");

    starIcon.addEventListener("click", () => toggleFavorite(entity, starIcon));

    cards.appendChild(box);
  });
}

function toggleFavorite(pokemon, starElement) {
  const index = favorites.findIndex((fav) => fav.id === pokemon.id);

  if (index === -1) {
    favorites.push(pokemon);
    starElement.style.filter = "invert(40%)";
  } else {
    favorites.splice(index, 1);
    starElement.style.filter = "invert(1)";
  }

  updateFavoriteCount();
}

function updateFavoriteCount() {
  const favoriteCount = favorites.length;
  const span = document.querySelector("header span");
  span.textContent = favoriteCount;

  if (favoriteCount > 0) {
    span.style.display = "block";
  } else {
    span.style.display = "none";
  }
}

function displayFavorites() {
  favContainer.innerHTML = "";

  favorites.forEach((pokemon) => {
    const box = document.createElement("div");

    box.innerHTML = `
      <div class="idn">
          <p class="pid">${pokemon.id}</p>
      </div>
      <div class="ns">
          <h1 class="namet">${pokemon.name}</h1>
      </div>
      <img class="pokeimg" src="${pokemon.img}" />
      <p class="sp">${pokemon.type[0]}</p>
      <div class="infor">
          <h4>Candy Count: ${pokemon.candy_count}</h4>
          <h4>${pokemon.weight}</h4>
          <p>${pokemon.weaknesses}</p>
      </div>
      <div class="tn">
          <p class="tnum">${pokemon.spawn_time}</p>
      </div>
    `;

    box.className = "box";
    favContainer.appendChild(box);
  });
}

function sortCards(pokemons) {
  const selectedOption = sortSelect.value;

  switch (selectedOption) {
    case "name-asc":
      pokemons.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      pokemons.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "weight-asc":
      pokemons.sort((a, b) => a.weight - b.weight);
      break;
    case "weight-desc":
      pokemons.sort((a, b) => b.weight - a.weight);
      break;
  }

  create(pokemons);
}

function search() {
  const namefs = searchn.value.trim().toLowerCase();
  const inpnumFrom = parseInt(inpfrom.value.trim()) || 0;
  const inpnumTo = parseInt(inpto.value.trim()) || Infinity;
  const selectedType = typeSelect.value;

  const all = document.querySelectorAll(".box");

  all.forEach((con) => {
    const name = con.querySelector(".namet").textContent.toLowerCase();
    const id = parseInt(con.querySelector(".pid").textContent);
    const type = con.querySelector(".sp").textContent.toLowerCase();

    if (
      (name.includes(namefs) || namefs === "") &&
      id >= inpnumFrom &&
      id <= inpnumTo &&
      (selectedType === "" || type.includes(selectedType.toLowerCase()))
    ) {
      con.style.display = "flex";
    } else {
      con.style.display = "none";
    }
  });
}

searchn.addEventListener("input", search);
inpfrom.addEventListener("input", search);
inpto.addEventListener("input", search);

sortSelect.addEventListener("change", function () {
  sortCards(pokemons);
});

typeSelect.addEventListener("change", function () {
  search();
});

favButton.addEventListener("click", () => {
  favTab.classList.toggle("open");
  displayFavorites();
});

closeFavTabButton.addEventListener("click", () => {
  favTab.classList.remove("open");
});

create(pokemons);
