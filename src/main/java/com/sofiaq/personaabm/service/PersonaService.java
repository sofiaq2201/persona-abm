package com.sofiaq.personaabm.service;

import com.sofiaq.personaabm.models.Persona;
import com.sofiaq.personaabm.repository.PersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonaService {
    @Autowired
    PersonaRepository personaRepo;
    
    public void savePersona(Persona p){
        personaRepo.save(p);
    }
    
    public List<Persona> getAllPeople(){
        return personaRepo.findAll();
    }
    
    public void editPersona(int id, Persona p) throws Exception{
        Persona _p = personaRepo.findById(id).orElseThrow(() -> new Exception("Persona no encontrada"));
        p.setId(_p.getId());
        personaRepo.save(p);
    }
    
    public void deletePersona(int id)throws Exception{
        Persona _p = personaRepo.findById(id).orElseThrow(() -> new Exception("Persona no encontrada"));
        personaRepo.delete(_p);
    }
}
