function add_cards_item(item) {
    // Selecting a parent container for the article
        var parent_containter = document.getElementById("menu_container");
    // Setting up a variable and assigning a tag to it
        var menu_card = document.createElement("article");
    // Assgning a class to new element
        menu_card.classList.add("card_container");
        menu_card.setAttribute('onclick', `store_pokemon_cookie('${JSON.stringify(item)}')`);
        //var item_json = JSON.stringify(item);
        //menu_card.setAttribute('onclick', `handle_click('${item_json}')`);
        //menu_card['onclick'] = handle_click;
     
        var card_image = document.createElement("img");
        card_image.src = item.image_src;
    
        var card_title = document.createElement("h3");
        card_title.innerText = item.name;
    
        var card_description = document.createElement('p');
        card_description.innerText = item.description;
    
        var card_points = document.createElement('h5');
        card_points.innerText = item.hit_points;
    
        menu_card.appendChild(card_image);
        menu_card.appendChild(card_title);
        menu_card.appendChild(card_description);
        menu_card.appendChild(card_points);
        parent_containter.appendChild(menu_card);
    
    }

   // function store_pokemon_cookie(pokemon_json) {
   //     Cookies.set("selected_pokemon", pokemon_json);

   // }

    function store_pokemon_cookie(pokemon_json) {
        Cookies.set("selected_pokemon", pokemon_json);
        var user_pokemon = JSON.parse(pokemon_json);
        var game_state = {
            user_max_health: 50,
            user_current_health: 50,
            computer_max_health: 40,
            computer_current_health: 40,
            user_selection: user_pokemon,
            computer_selection: user_pokemon[2],
        }
        game_state_json = JSON.stringify(game_state);
        Cookies.set("game_state", game_state_json);
        window.location = "/pages/battle.html";

    }


var pok_items = [
    {
        name: "Pikachu",
        description: "Mouse",
        image_src: "../images/1.jpg",
        hit_points: 30
    },
    {
        name: "Buneary",
        description: "Rabbit",
        image_src: "../images/2.jpg",
        hit_points: 35
    },
    {
        name: "Pachirisu",
        description: "EEleSquirrel",
        image_src: "../images/3.jpg",
        hit_points: 40
    },
]

for(var i=0; i < pok_items.length; i++) {
    add_cards_item(pok_items[i]);

}