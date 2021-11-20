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

    function store_pokemon_cookie(pokemon_json) {
        Cookies.set("selected_pokemon", pokemon_json);

    }


var pok_items = [
    {
        name: "Pikachu",
        description: "Quick Attack",
        image_src: "../images/1.jpg",
        hit_points: 30
    },
    {
        name: "Oshawott",
        description: "Water Gun",
        image_src: "../images/2.jpg",
        hit_points: 35
    },
    {
        name: "Tepig",
        description: "Ember",
        image_src: "../images/3.jpg",
        hit_points: 30
    },
]

for(var i=0; i < pok_items.length; i++) {
    add_cards_item(pok_items[i]);

}