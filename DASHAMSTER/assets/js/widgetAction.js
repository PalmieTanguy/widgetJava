async function action(e) {
    let widgetCase = null;
    widgetCase = e.getAttribute("name");
    nbCase = e.getAttribute("case");
    let res = "";
    myHtml = "";
    value = "";
    console.table(widgetCase, nbCase)
    switch (widgetCase) {
        case "weather":
            city = $("#city" + nbCase).val();
            url = myUrl + "/weather?city=" + city;
            $.ajax({
                type: 'GET',
                dataType: 'json',
                url: url,
                success: function(value) {
                    myHtml = actionWeather(value.name, value.wind.deg, value.wind.speed, value.main.temp - 274, value.main.temp_min - 274, value.main.temp_max - 274, value.weather[0].main);
                    $("#w" + nbCase).html(myHtml)
                },
                error: function() {
                    myHtml = "none";
                    $("#w" + nbCase).html(myHtml)
                }
            });
            break;
        case "localisation":
            theIp = $("#ipL" + nbCase).val();
            url = myUrl + "/ip?ip=" + theIp;
            $.ajax({
                type: 'GET',
                dataType: 'json',
                url: url,
                success: function(value) {

                    myHtml = actionLocaliasation(value.country,
                        value.regionName,
                        value.city,
                        value.isp, value.query);
                    $("#w" + nbCase).html(myHtml)
                },
                error: function() {
                    myHtml = "None";
                    $("#w" + nbCase).html(myHtml)
                }
            });
            break;
        case "insta":
            pseudo = $("#instaName" + nbCase).val();
            url = myUrl + "/insta?pseudo=" + pseudo;
            $.ajax({
                type: 'GET',
                dataType: 'json',
                url: url,
                success: function(value) {
                    part = value.graphql.user

                    myHtml = actionInsta(part.full_name, part.is_private, part.edge_follow.count, part.edge_followed_by.count, part.profile_pic_url);
                    $("#w" + nbCase).html(myHtml)
                },
                error: function() {
                    myHtml = "Use nomber max call api or bad name";
                    $("#w" + nbCase).html(myHtml)
                }
            });
            break;
        case "beer":
            url = myUrl + "/beer";
            $.ajax({
                type: 'GET',
                dataType: 'json',
                url: url,
                success: function(value) {
                    myHtml = actionBeer(value[0].name, value[0].image_url);
                    $("#w" + nbCase).html(myHtml)
                },
                error: function() {
                    myHtml = "none";
                    $("#w" + nbCase).html(myHtml)
                }
            });
            break;
        case "country":
            value = $("#country" + nbCase).val();
            url = myUrl + "/country?country=" + value;
            $.ajax({
                type: 'GET',
                dataType: 'json',
                url: url,
                success: function(value) {
                    myHtml = actionCountry(value[0].capital,
                        value[0].currencies[0].name,
                        value[0].cioc,
                        value[0].flag);
                    $("#w" + nbCase).html(myHtml)
                },
                error: function() {
                    myHtml = "None";
                    $("#w" + nbCase).html(myHtml)
                }
            });
            myHtml = actionCountry(value);
            break;
        case "word":
            url = myUrl + "/word";
            $.ajax({
                type: 'GET',
                dataType: 'json',
                url: url,
                success: function(value) {
                    myHtml = actionWord(value);
                    $("#w" + nbCase).html(myHtml)
                },
                error: function() {
                    myHtml = "none";
                    $("#w" + nbCase).html(myHtml)
                }
            });
            break;
        case "zipcode":
            code = $("#zip" + nbCase).val();
            url = myUrl + "/zipcode?zipCode=" + code;
            $.ajax({
                type: 'GET',
                dataType: 'json',
                url: url,
                success: function(value) {
                    myHtml = actionZipCode(value.country, value.places[0].state, value.places[0]["place name"], value["post code"]);
                    $("#w" + nbCase).html(myHtml)
                },
                error: function() {
                    myHtml = "none";
                    $("#w" + nbCase).html(myHtml)
                }
            });
            break;
        case "minecraft":
            ipM = $("#minecraft" + nbCase).val();
            url = myUrl + "/minecraft?minecraft=" + ipM;
            $.ajax({
                type: 'GET',
                dataType: 'json',
                url: url,
                success: function(value) {
                    console.log(value.favicon)
                    myHtml = actionMinecraft(value.players.now, value.server.name, value.favicon);
                    console.log(myHtml)
                    $("#w" + nbCase).html(myHtml)
                },
                error: function() {
                    myHtml = "none";
                    $("#w" + nbCase).html(myHtml)
                }
            });
            break;
        case "pokemon":
            poke = $("#pokemon" + nbCase).val();
            poke = poke.toLowerCase();
            url = myUrl + "/pokemon?pokemon=" + poke;
            console.log(url)
            $.ajax({
                type: 'GET',
                dataType: 'json',
                url: url,
                success: function(value) {
                    console.log(value)
                    myHtml = actionPokemon(
                        value.sprites.back_default,
                        value.name, value.weight, value.height);
                    $("#w" + nbCase).html(myHtml)
                },
                error: function() {
                    myHtml = "none";
                    $("#w" + nbCase).html(myHtml)
                }
            });
            break;
    }
}

function actionPokemon(img, name, poid, taille) {
    return "<center><div class='text-secondary'>" +
        "Name: <strong>" + name + "</br></strong>" +
        "Height: " + taille + "</br>" +
        "Weight: " + poid + "</br>" +
        "</div></center>" +
        '<img src="' + img + '"width="70%" height="70%"></center>';
}

function actionLocaliasation(country, region, city, isp, query) {
    return "<center><div class='text-secondary'>" +
        "IP: <strong>" + query + "</br></strong>" +
        "Country: " + country + "</br>" +
        "Region: " + region + "</br>" +
        "City: " + city + "</br>" +
        "Purveyor: " + isp + "</br>" +
        "</div></center>"
}

function actionInsta(firstname, prive, follow, followBy, img) {
    if (prive == true) {
        cadena = "Yes 🔐";
    } else {
        cadena = "Nope 🔓";
    }

    return "<center><h3 class='color-red'>" +
        "Firstname: " + firstname + "</br>Private: " +
        cadena + "</br>Follow: " + follow + "</br>Follow by: " + followBy + "</h3></h5>" +
        "</h5></center>" + '<img src="' + img + '"width="30%" height="30%">';
}

function actionZipCode(country, dep, city, postCode) {
    return "<center><div class='text-secondary'>" +
        "Ville: <strong>" + city + "</br></strong>" +
        "Country: " + country + "</br>" +
        "Region: " + dep + "</br>" +
        "Post Code: " + postCode + "</br>" +
        "</div></center>";
}

function actionWeather(ville, deg, speed, temp, temp_min, temp_max, imageWeather) {
    if (imageWeather == "Clouds") {
        img = "https://cdn.pixabay.com/photo/2020/05/11/12/48/cloud-5158044_960_720.png";
    } else {
        img = "https://www.mpa-pro.fr/resize/360x360/zc/3/f/0/src/sites/mpapro/files/products/d12471.png";
    }
    return "<center><div class='text-secondary'>" +
        "Ville: <strong>" + ville + "</br></strong>" +
        "<u>Wind:</u>" + "</br>" +
        "degre: " + deg + "°</br>" +
        "speed: " + speed +
        "</br>" +
        "<u>Temp:</u>" + "</br>" +
        "Medium: " + Math.round(temp) + "°</br>" +
        "Min: " + Math.round(temp_min) + "°</br>" +
        "Max: " + Math.round(temp_max) + "°" +
        "</div>" +
        '<img src="' + img + '"width="15%" height="15%"></center>';
}

function actionMinecraft(player, name, flag) {
    console.log(flag)
    return "<center class='text-secondary'>" +
        "Player connected: <strong>" + player + "</br></strong></br>" +
        "<br>name server: <strong>" + name + "</br></strong>" +
        "</center>" +
        '<img src="' + flag + '" width="30%" height="30%" >';
}

function actionBeer(value, bg) {
    if (!bg) {
        return "<center><h1 class='text-info'><u>beer:</u></h1><h2 class='text-danger'>" + value + "</h2></center>";
    }
    return "<center><h1 class='text-info'><u>beer:</u></h1><h2 class='text-danger'>" + value + "</h2></center>" + '<img src="' + bg + '"width="10%" height="10%">';;
}

function actionWord(value) {
    return "<center><h3 class='text-info'>The random word is: <u class='text-danger'>" + value + "</u></h3></center>";
}

function actionCountry(capital, money, cioc, flag) {
    return '<div class="flag"style="background-image: url(' + flag + ');background-size: 100% 100%;" width="100%" height="100%"' +
        "<center>" +
        "Capital: <strong>" + capital + "</br></strong>" +
        "<br>Money: <strong>" + money + "</br></strong>" +
        "<br>Initial: <strong>" + cioc + "</strong>" +
        "</center>" +
        "</div>";
}