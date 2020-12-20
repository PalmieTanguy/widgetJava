var widgetList = [];
var index = 0;



function myclose(e) {
    closeId = e.getAttribute("value");
    console.log(closeId)
    $("#case" + closeId).html("");
    console.log($("#case" + closeId))
}

function reload(e) {
    reloadId = e.getAttribute("value");
    nameWidget = e.getAttribute("name");
    console.log("reload " + reloadId)
    console.log($("#case" + reloadId))
    let get = "";
    console.log(nameWidget)
    switch (nameWidget) {
        case "weather":
            get = indiceWeather();
            break;
        case "localisation":
            $.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
                ip = data;
            });
            get = indiceLocalisation(ip);
            break;
        case "insta":
            get = indiceInstagram();
            break;
        case "beer":
            get = indiceBeer();
            break;
        case "country":
            get = indiceCountry();
            break;
        case "word":
            get = indiceword();
            break;
        case "zipcode":
            get = indicezipcode();
            break;
        case "minecraft":
            get = indiceminecraft();
            break;
        case "pokemon":
            console.log("ll")
            get = indicepokemon();
            break;
    }
    $("#case" + reloadId).html(get);
}

function myIP() {
    url = "https://www.cloudflare.com/cdn-cgi/trace";
}


function add(e) {
    index++;
    lst = index;
    nameWidget = e.getAttribute("value");
    let get = "";
    switch (nameWidget) {
        case "weather":
            get = indiceWeather();
            break;
        case "localisation":
            ip = "90.91.54.226";
            get = indiceLocalisation(ip);
            break;
        case "insta":
            get = indiceInstagram();
            break;
        case "beer":
            get = indiceBeer();
            break;
        case "country":
            get = indiceCountry();
            break;
        case "word":
            get = indiceword();
            break;
        case "zipcode":
            get = indicezipcode();
            break;
        case "minecraft":
            get = indiceminecraft();
            break;
        case "pokemon":
            get = indicepokemon();
            break;
    }
    console.log("case : " + index);
    $("#case" + index).html(get);

}

function indiceWeather() {
    return '<div class="draggable" draggable="true">' +
        '<div class="card-body" id="fr">' +
        '<button class="btn btn-dark" value="' + index + '" onclick="myclose(this)">x</button> ' +
        '<button class="btn btn-info" name="weather" value="' + index + '" onclick="reload(this)">Reload</button> ' +
        '<center id="w' + index + '">' +
        '<h5 class="card-title text-danger ">Weather</h5>' +
        '<input type="text" class="form-control " id="city' + index + '" placeholder="Enter city "/>' +
        '<button class="card-link btn btn-info mt-2" name="weather" case="' + index + '" onclick="action(this)">Send</button>' +
        '</center>' +
        '</div>' +
        '</div>';
}

function indiceLocalisation(ip) {

    return '<div class="draggable" draggable="true">' +
        '<div class="card-body" id="fr">' +
        '<button class="btn btn-dark" value="' + index + '" id="close' + index + '" onclick="myclose(this)">x</button> ' +
        '<button class="btn btn-info" name="localisation" value="' + index + '" onclick="reload(this)">Reload</button> ' +
        '<center id="w' + index + '">' +
        '<h5 class="card-title text-danger ">Ip Localisation</h5>' +
        '<input type="text " class="form-control " id="ipL' + index + '" value="' + ip + '" placeholder="Enter ip ">' +
        '<button class="card-link btn btn-info mt-2" name="localisation" case="' + index + '" onclick="action(this)">Send</button>' +
        '</center>' +
        '</div>' +
        '</div>';
}

function indiceInstagram() {
    return '<div class="draggable" draggable="true">' +
        '<div class="card-body" id="fr">' +
        '<button class="btn btn-dark" value="' + index + '" id="close' + index + '" onclick="myclose(this)">x</button> ' +
        '<button class="btn btn-info" name="insta" value="' + index + '" onclick="reload(this)">Reload</button> ' +
        '<center id="w' + index + '">' +
        '<h5 class="card-title text-danger ">Instagram</h5>' +
        '<input type="text " class="form-control " id="instaName' + index + '" placeholder="Enter pseudo ">' +
        '<button class="card-link btn btn-info mt-2" name="insta" case="' + index + '" onclick="action(this)">Send</button>' +
        '</center>' +
        '</div>' +
        '</div>';
}

function indiceBeer() {
    return '<div class="draggable" draggable="true">' +
        '<div class="card-body" id="fr">' +
        '<button class="btn btn-dark" value="' + index + '" id="close' + index + '" onclick="myclose(this)">x</button> ' +
        '<button class="btn btn-info" name="beer" value="' + index + '" onclick="reload(this)">Reload</button> ' +
        '<center id="w' + index + '">' +
        '<h5 class="card-title text-danger ">Beer Random</h5>' +
        '<button  class="card-link btn btn-warning mt-2 "name="beer" case="' + index + '" onclick="action(this)">Generate</button>' +
        '</center>' +
        '</div>' +
        '</div>';
}

function indiceCountry() {
    return '<div class="draggable" draggable="true">' +
        '<div class="card-body" id="fr">' +
        '<button class="btn btn-dark" value="' + index + '" id="close' + index + '" onclick="myclose(this)">x</button> ' +
        '<button class="btn btn-info" name="country" value="' + index + '" onclick="reload(this)">Reload</button> ' +
        '<center id="w' + index + '">' +
        '<h5 class="card-title text-danger ">Country</h5>' +
        '<input type="text " class="form-control " id="country' + index + '" placeholder="Enter country " />' +
        '<button  class="card-link btn btn-info mt-2 "name="country" case="' + index + '" onclick="action(this)">Send</button>' +
        '</center>' +
        '</div>' +
        '</div>';
}

function indiceword() {
    return '<div class="draggable" draggable="true">' +
        '<div class="card-body" id="fr">' +
        '<button class="btn btn-dark" value="' + index + '" id="close' + index + '" onclick="myclose(this)">x</button> ' +
        '<button class="btn btn-info" name="word" value="' + index + '" onclick="reload(this)">Reload</button> ' +
        '<center id="w' + index + '">' +
        '<h5 class="card-title text-danger ">Word</h5>' +
        '<button  class="card-link btn btn-warning mt-2 "name="word" case="' + index + '" onclick="action(this)">Generate</button>' +
        '</center>' +
        '</div>' +
        '</div>';
}

function indicezipcode() {
    return '<div class="draggable" draggable="true">' +
        '<div class="card-body" id="fr">' +
        '<button class="btn btn-dark" value="' + index + '" id="close' + index + '" onclick="myclose(this)">x</button> ' +
        '<button class="btn btn-info" name="zipcode" value="' + index + '" onclick="reload(this)">Reload</button> ' +
        '<center id="w' + index + '">' +
        '<h5 class="card-title text-danger">Zip code</h5>' +
        '<input type="text " class="form-control " id="zip' + index + '" placeholder="Enter Zip Code " />' +
        '<button  class="card-link btn btn-info mt-2 "name="zipcode" case="' + index + '" onclick="action(this)">Send</button>' + '</center>' +
        '</div>' +
        '</div>';
}

function indiceminecraft() {
    return '<div class="draggable" draggable="true">' +
        '<div class="card-body" id="fr">' +
        '<button class="btn btn-dark" value="' + index + '" id="close' + index + '" onclick="myclose(this)">x</button> ' +
        '<button class="btn btn-info" name="minecraft" value="' + index + '" onclick="reload(this)">Reload</button> ' +
        '<center id="w' + index + '">' +
        '<h5 class="card-title text-danger">Minecraft</h5>' +
        '<input type="text " class="form-control " id="minecraft' + index + '" placeholder="Enter IP minecraft " />' +
        '<button class="card-link btn btn-success mt-2" name="minecraft" case="' + index + '" onclick="action(this)">Send</button>' +
        '</center>' +
        '</div>' +
        '</div>';
}

function indicepokemon() {
    return '<div class="draggable" draggable="true">' +
        '<div class="card-body" id="fr">' +
        '<button class="btn btn-dark" value="' + index + '" id="close' + index + '" onclick="myclose(this)">x</button> ' +
        '<button class="btn btn-info" name="pokemon" value="' + index + '" onclick="reload(this)">Reload</button> ' +
        '<center id="w' + index + '">' +
        '<h5 class="card-title text-danger">Pokemon</h5>' +
        '<input type="text" class="form-control" id="pokemon' + index + '" placeholder="Enter name pokemon EN" />' +
        '<button class="card-link btn btn-success mt-2" name="pokemon" case="' + index + '" onclick="action(this)">Send</button>' +
        '</center>' +
        '</div>' +
        '</div>';
}