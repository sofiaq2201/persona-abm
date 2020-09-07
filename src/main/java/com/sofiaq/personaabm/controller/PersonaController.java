package com.sofiaq.personaabm.controller;

import com.sofiaq.personaabm.dto.ServiceResponse;
import com.sofiaq.personaabm.models.Persona;
import com.sofiaq.personaabm.service.PersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonaController {
    @Autowired
    PersonaService personaService;
    
    @GetMapping("/getAllPeople")
    public ResponseEntity<List<Persona>> getAllPeople(){
        List<Persona> personas = personaService.getAllPeople();
       
        if(personas.isEmpty()){
             return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }else{
             return new ResponseEntity<>(personas, HttpStatus.OK);
        }
    }
    
    @PostMapping("/savePerson")
    public ResponseEntity<Object> savePersona(@RequestBody Persona p){
        personaService.savePersona(p);
        ServiceResponse<Persona> response = new ServiceResponse<Persona>("success", p);
        return new ResponseEntity<Object>(response, HttpStatus.OK);
        //return new ResponseEntity<>(HttpStatus.OK);
    }
    
    @PutMapping("/editPerson/{id}")
    public ResponseEntity<Object> editPerson(@PathVariable("id") int id, @RequestBody Persona p) throws Exception{
        personaService.editPersona(id, p);
        //return new ResponseEntity<>(HttpStatus.OK);
        ServiceResponse<Persona> response = new ServiceResponse<Persona>("success", p);
        return new ResponseEntity<Object>(response, HttpStatus.OK);
    }
    
    @DeleteMapping("/deletePerson/{id}")
    public ResponseEntity<Persona> deletePerson(@PathVariable int id) throws Exception{
        personaService.deletePersona(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
