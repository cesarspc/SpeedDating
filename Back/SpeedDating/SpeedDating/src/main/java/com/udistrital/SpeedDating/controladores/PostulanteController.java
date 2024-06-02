/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.udistrital.SpeedDating.controladores;


import com.udistrital.SpeedDating.modelos.Postulante;
import com.udistrital.SpeedDating.repositorios.PostulanteRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
/**
 *
 * @author juan-dev
 */

@RestController
public class PostulanteController {

    PostulanteRepository database;

    public PostulanteController(PostulanteRepository bd){
        
        this.database = bd;
    }

    @GetMapping("/api/crearPostualantes")
    public void crearCitas() {
        /*
        Cita cita1 = new Cita(LocalDateTime.of(2022, 5, 1, 0, 0), "126", "1312");
        Cita cita2 = new Cita(LocalDateTime.of(2022, 6, 1, 2, 3), "3214", "4214");

        database.save(cita1);
        database.save(cita2);
        
        Ejemplo introducción de datos
        */
    }   
    
    
    @GetMapping("/api/postulantes")
    public List<Postulante> obtenerPosutalantes(){
        return database.findAll();
    }
    
    @GetMapping("/api/postulantes/{id}")
    public ResponseEntity<Postulante> obtenerPostulanteById(@PathVariable Long id) {
        Optional<Postulante> optional = database.findById(id);

        if (optional.isEmpty()) {
            return ResponseEntity.badRequest().build();
        } else {
            return ResponseEntity.ok(optional.get());
        }

    }
    
    
    @PostMapping("/api/postulantes")
    public ResponseEntity<Postulante> guardarPostulante(@RequestBody Postulante postulante){
        if (postulante.getId() != null) {
            return ResponseEntity.badRequest().build();
        }
        
        database.save(postulante);
        return ResponseEntity.ok(postulante);
    }
    
    
    @PutMapping("/api/postulante")
    public ResponseEntity<Postulante> actualizarPostulante(@RequestBody Postulante postulante){
        if (postulante.getId() == null || !database.existsById(postulante.getId())) {
            return ResponseEntity.badRequest().build();
        }
        
        database.save(postulante);
        return ResponseEntity.ok(postulante);
    }

    @DeleteMapping("/api/postulante")
    public ResponseEntity<Postulante> eliminarPostulante(@RequestBody Postulante postulante){
        if (postulante.getId() == null || !database.existsById(postulante.getId())) {
            return ResponseEntity.badRequest().build();
        }
        
        database.delete(postulante);
        return ResponseEntity.noContent().build();
    }    
    
    
}
