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

    public PostulanteController(PostulanteRepository bd) {

        this.database = bd;
    }

    @GetMapping("/api/crearPostulantes")
    public void crearPostulantes() {
        /*
    Ejemplo introducción de datos
         */
        Postulante postulante1 = new Postulante();
        postulante1.setNombre("Nombre1");
        postulante1.setApellido("Apellido1");
        postulante1.setEdad("25");
        postulante1.setEstatura("1.70");
        postulante1.setProfesion("Profesion1");
        postulante1.setContextura("Contextura1");
        postulante1.setEstadoCivil("Soltero");
        postulante1.setIdentidadGenero("IdentidadGenero1");
        postulante1.setCorreo("correo1@example.com");
        postulante1.setTelefono("3121234567");
        postulante1.setInteresPrincipal("Interes1");
        postulante1.setDiponibilidad("Disponible");
        postulante1.setPagoHecho(false);

        Postulante postulante2 = new Postulante();
        postulante2.setNombre("Nombre2");
        postulante2.setApellido("Apellido2");
        postulante2.setEdad("30");
        postulante2.setEstatura("1.80");
        postulante2.setProfesion("Profesion2");
        postulante2.setContextura("Contextura2");
        postulante2.setEstadoCivil("Soltero");
        postulante2.setIdentidadGenero("IdentidadGenero1");
        postulante2.setCorreo("correo2@example.com");
        postulante2.setTelefono("3121234568");
        postulante2.setInteresPrincipal("Interes2");
        postulante2.setDiponibilidad("No disponible");
        postulante2.setPagoHecho(true);

        database.save(postulante1);
        database.save(postulante2);
    }

    @CrossOrigin("http://localhost:8080")
    @GetMapping("/api/postulantes")
    public List<Postulante> obtenerPosutalantes() {
        return database.findAll();
    }

    @CrossOrigin("http://localhost:8080")
    @GetMapping("/api/postulantes/{id}")
    public ResponseEntity<Postulante> obtenerPostulanteById(@PathVariable Long id) {
        Optional<Postulante> optional = database.findById(id);

        if (optional.isEmpty()) {
            return ResponseEntity.badRequest().build();
        } else {
            return ResponseEntity.ok(optional.get());
        }

    }

    @CrossOrigin("http://localhost:8080")
    @PostMapping("/api/postulantes")
    public ResponseEntity<Postulante> guardarPostulante(@RequestBody Postulante postulante) {
        if (postulante.getId() != null) {
            return ResponseEntity.badRequest().build();
        }

        database.save(postulante);
        return ResponseEntity.ok(postulante);
    }

    @CrossOrigin("http://localhost:8080")
    @PutMapping("/api/postulantes")
    public ResponseEntity<Postulante> actualizarPostulante(@RequestBody Postulante postulante) {
        if (postulante.getId() == null || !database.existsById(postulante.getId())) {
            return ResponseEntity.badRequest().build();
        }

        database.save(postulante);
        return ResponseEntity.ok(postulante);
    }

    @CrossOrigin("http://localhost:8080")
    @DeleteMapping("/api/postulantes")
    public ResponseEntity<Postulante> eliminarPostulante(@RequestBody Postulante postulante) {
        if (postulante.getId() == null || !database.existsById(postulante.getId())) {
            return ResponseEntity.badRequest().build();
        }

        database.delete(postulante);
        return ResponseEntity.noContent().build();
    }

}
