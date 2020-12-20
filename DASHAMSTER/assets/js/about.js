setInterval(
    function() {
        $.ajax({
            type: 'GET',
            url: "http://localhost:8080/about.JSON",
            success: function(value) {
                let ip = "";
                $.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
                    ip = data;
                });
                client = '"client:"{' + '"host":' + ip + "}";
                $(".main").html(client + '"server:"{' + value + "}")
            },
            error: function(e) {
                console.log(e)
                myJSON = "None";
                $(".main").html(myJSON)
            }
        });
    }, 3000);