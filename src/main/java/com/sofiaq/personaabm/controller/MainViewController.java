package com.sofiaq.personaabm.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainViewController {
    
    @RequestMapping("/")
    public String mainView(){
        return "index";
    }
    
    @RequestMapping("/addPersonView")
    public String addPersonView(){
        return "persona_alta";
    }
    
    @RequestMapping("/editPersonView/{id}")
    public String editPersonView(){
         return "persona_alta";
    }
}
