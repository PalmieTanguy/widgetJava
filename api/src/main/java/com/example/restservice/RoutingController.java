package com.example.restservice;


import com.fasterxml.jackson.databind.jsonFormatVisitors.JsonValueFormatVisitor;
import org.springframework.web.bind.annotation.*;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;

@RestController
@CrossOrigin
public class RoutingController {

    private JsonValueFormatVisitor.Base Json;

    @RequestMapping(value = "/show",method = RequestMethod.GET)
    public String get() {
        String text= "Hello on my api !\nFor use the api, here is routes:\n /insta\n /minecraft \n /pokemon \n /beer";
        return text;
    }
    @RequestMapping(value = "/weather",method = RequestMethod.GET)
    public String getWeather(@RequestParam(required = false) String city) throws IOException {
        String theUrl = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=c&appid="+"27a7819b7aad62361821424c0e887f17";
        return getJSON(theUrl);
    }
    @RequestMapping(value = "/insta",method = RequestMethod.GET)
    public String getInsta(@RequestParam(required = false) String pseudo) throws IOException {
        String theUrl = "https://instagram.com/"+pseudo+"/?__a=1";
        return getJSON(theUrl);
    }
    @RequestMapping(value = "/minecraft",method = RequestMethod.GET)
    public String getMinecraft(@RequestParam(required = false) String minecraft) throws IOException {
        String theUrl = "http://mcapi.us/server/status?ip="+minecraft+"&port=25565";
        return getJSON(theUrl);
    }
    @RequestMapping(value = "/pokemon",method = RequestMethod.GET)
    public String getPokemon(@RequestParam(required = false) String pokemon) throws IOException {
        String theUrl = "https://pokeapi.co/api/v2/pokemon/"+pokemon;
        return getJSON(theUrl);
    }
    @RequestMapping(value = "/beer",method = RequestMethod.GET)
    public String getBeer() throws IOException {
        String theUrl = "https://api.punkapi.com/v2/beers/random";
        return getJSON(theUrl);
    }
    @RequestMapping(value = "/zipcode",method = RequestMethod.GET)
    public String getZipCode(@RequestParam(required = false) String zipCode) throws IOException {
        String theUrl = "http://api.zippopotam.us/fr/"+zipCode;
        return getJSON(theUrl);
    }
    @RequestMapping(value = "/country",method = RequestMethod.GET)
    public String getCountry(@RequestParam(required = false) String country) throws IOException {
        String theUrl = "https://restcountries.eu/rest/v2/name/"+country+"?fullText=true";
        return getJSON(theUrl);
    }

    @RequestMapping(value = "/ip",method = RequestMethod.GET)
    public String getIp(@RequestParam(required = false) String ip) throws IOException {
        String theUrl = "http://ip-api.com/json/"+ip;
        return getJSON(theUrl);
    }
    @RequestMapping(value = "/word",method = RequestMethod.GET)
    public String getWord() throws IOException {
        String theUrl = "https://random-word-api.herokuapp.com/word?number=1";
        return getJSON(theUrl);
    }
    private String getJSON(String theUrl) {
        StringBuilder content = new StringBuilder();

        try{
            URL url = new URL(theUrl);
            URLConnection urlConnection = url.openConnection();
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));
            String line;
            while ((line = bufferedReader.readLine()) != null)
            {
                content.append(line + "\n");
            }
            bufferedReader.close();
        }catch(Exception e) {
            System.out.print(e);
        }
        return content.toString();
    }
}