/*function add_cards_item(item) {
    // Selecting a parent container for the article
        var parent_containter = document.getElementById("menu_container");
    // Setting up a variable and assigning a tag to it
        var menu_card = document.createElement("article");
    // Assgning a class to new element
        menu_card.classList.add("card_container");
        //menu_card.setAttribute('onclick', `store_pokemon_cookie('${JSON.stringify(item)}')`);
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

    var selected_pokemon_json = Cookies.get('selected_pokemon');
    var selected_card = JSON.parse(selected_pokemon_json);
    add_cards_item(selected_card);

    /*var enemy = {
        name: "Gible",
        description: "Land Shark",
        image_src: "../images/4.jpg",
        hit_points: 40
    }


// HTML sample of the Battle page
    <div class="user_hp">
    <p>cur_hp / max_hp</p>
    </div>
    <img src="" alt="" class="user_image">
    <div class="user_moves">
    <button>Attack</button>
    </div>
add_cards_item(enemy);*/


    var selected_pokemon_json = Cookies.get('selected_pokemon');
    var selected_card = JSON.parse(selected_pokemon_json);
    //add_cards_item(selected_card);


    function inject_user_pokemon() {
        var container = document.getElementById('user_pokemon_container');

        var game_state_json = Cookies.get("game_state");
        var game_state = JSON.parse(game_state_json);
        var user_pokemon = game_state.user_selection;

        var user_hp = document.createElement('div');
        user_hp.classList.add("user_hp");
        user_hp.classList.add("card_container");
        var hp_text = document.createElement('p');
        hp_text.innerText = `${game_state.user_current_health} / ${game_state.user_max_health}`;

        var user_img = document.createElement('img');
        user_img.classList.add("card_container");
        user_img.src = user_pokemon.image_src;
        user_img.classList.add('user_image');

        var user_moves = document.createElement('div');
        user_moves.classList.add("user_moves");
        user_moves.classList.add("card_container");

        var user_attack = document.createElement('button');
        user_attack.innerText = "Attack";

        user_hp.appendChild(hp_text);
        user_moves.appendChild(user_attack);

        container.appendChild(user_hp);
        container.appendChild(user_img);
        container.appendChild(user_moves);

    }

    function inject_computer_pokemon() {
        var container = document.getElementById('computer_pokemon_container');

        var game_state_json = Cookies.get('game_state');
        var game_state = JSON.parse(game_state_json);
        var computer_pokemon = game_state.computer_selection;

        }



    inject_user_pokemon();
