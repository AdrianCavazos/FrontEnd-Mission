const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput  = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res); 
            pokeImage("images/pikachuSad.jpg");
        }
        else{
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);

        let pokeId = data.id;
        console.log(pokeId);
        pokemonId(pokeId);

        let pokeType = data.types[0].type.name;
        console.log(pokeType);
        pokemonType(pokeType);

        let pokeStats = {
            Hp: data.stats[0].base_stat,
            Attack: data.stats[1].base_stat,
            Defense: data.stats[2].base_stat,
            SpecialAttack: data.stats[3].base_stat,
            SpecialDefense: data.stats[4].base_stat,
            Speed: data.stats[5].base_stat
        }

        console.log(pokeStats);
        pokemonStats(pokeStats.Hp, pokeStats.Attack, pokeStats.Defense, pokeStats.SpecialAttack, pokeStats.SpecialDefense, pokeStats.Speed);

        let pokeMoves = {
            one: data.moves[0].move.name,
            two: data.moves[1].move.name,
            three: data.moves[2].move.name,
            four: data.moves[3].move.name,
            five: data.moves[4].move.name,
            six: data.moves[5].move.name,
        }

        console.log(pokeMoves);
        pokemonMoves(pokeMoves.one, pokeMoves.two, pokeMoves.three, pokeMoves.four, pokeMoves.five, pokeMoves.six)
    })
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

const pokemonId = (id) => {
    const input = document.getElementById("pokeName");
    let name = input.value.toLowerCase().trim();
    id = document.getElementById('nombre').innerHTML = `#${id} - ${upperCase(name)}`;
}

function upperCase(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function upperCaseAll(word) {
    return word.toUpperCase();
}

const pokemonType = (type) => {
    // const input = document.getElementById("pokeName");
    // let name = input.value.toLowerCase().trim();
    document.getElementById("tipo").innerHTML = `Tipo: <br><br> ${upperCaseAll(type)}`;  
}

const pokemonStats = (hp, attack, defense, specialAttack, specialDefense, speed) => {
    document.getElementById("estadisticas").innerHTML = `Stats: <br><br> Hp: ${hp} <br> Attack: ${attack} <br> Defense: ${defense} <br> Special-Attack: ${specialAttack} <br> Special-Defense: ${specialDefense} <br> Speed: ${speed}`;
}

const pokemonMoves = (one, two, three, four, five, six) => {
    document.getElementById("movimientos").innerHTML = `Movimientos: <br><br> ${upperCase(one)} <br> ${upperCase(two)} <br> ${upperCase(three)} <br> ${upperCase(four)} <br> ${upperCase(five)} <br> ${upperCase(six)}`;
}
