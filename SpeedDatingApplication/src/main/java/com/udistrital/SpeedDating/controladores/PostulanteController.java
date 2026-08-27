/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.udistrital.SpeedDating.controladores;

import com.udistrital.SpeedDating.modelos.Postulante;
import com.udistrital.SpeedDating.repositorios.PostulanteRepository;
import jakarta.validation.Valid;
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

    /**
 * Controlador REST para manejar las operaciones CRUD relacionadas con los postulantes.
 *
 * @author juan-dev
 */
    public PostulanteController(PostulanteRepository bd) {

        this.database = bd;
    }

    /**
     * Crea y guarda varios postulantes de ejemplo en la base de datos.
     */
    @CrossOrigin("${allowed.origin}")
    @PostMapping("/api/crearPostulantes")
    public void crearPostulantes() {
        /*
        Ejemplo introducción de datos
         */
        Postulante postulante1 = new Postulante();
        postulante1.setNombre("Taylor");
        postulante1.setApellido("Demo");
        postulante1.setEdad("25");
        postulante1.setEstatura("170");
        postulante1.setProfesion("Analista");
        postulante1.setContextura("Delgada");
        postulante1.setEstadoCivil("Soltero");
        postulante1.setIdentidadGenero("Mujer");
        postulante1.setCorreo("taylor.demo@example.com");
        postulante1.setTelefono("0000000011");
        postulante1.setInteresPrincipal("Musica");
        postulante1.setDisponibilidad("Fines de Semana");
        postulante1.setPagoHecho(true);

        Postulante postulante2 = new Postulante();
        postulante2.setNombre("Jordan");
        postulante2.setApellido("Demo");
        postulante2.setEdad("30");
        postulante2.setEstatura("180");
        postulante2.setProfesion("Arquitecto");
        postulante2.setContextura("Media");
        postulante2.setEstadoCivil("Soltero");
        postulante2.setIdentidadGenero("No binario");
        postulante2.setCorreo("jordan.demo@example.com");
        postulante2.setTelefono("0000000012");
        postulante2.setInteresPrincipal("Viajes");
        postulante2.setDisponibilidad("Fines de Semana");
        postulante2.setPagoHecho(true);
        
        Postulante postulante3 = new Postulante();
        postulante3.setNombre("Casey");
        postulante3.setApellido("Demo");
        postulante3.setEdad("30");
        postulante3.setEstatura("180");
        postulante3.setProfesion("Docente");
        postulante3.setContextura("Atletica");
        postulante3.setEstadoCivil("Soltero");
        postulante3.setIdentidadGenero("Mujer");
        postulante3.setCorreo("casey.demo@example.com");
        postulante3.setTelefono("0000000013");
        postulante3.setInteresPrincipal("Lectura");
        postulante3.setDisponibilidad("Entre Semana");
        postulante3.setPagoHecho(true);
        
        Postulante postulante4 = new Postulante();
        postulante4.setNombre("Morgan");
        postulante4.setApellido("Demo");
        postulante4.setEdad("30");
        postulante4.setEstatura("180");
        postulante4.setProfesion("Investigador");
        postulante4.setContextura("Media");
        postulante4.setEstadoCivil("Soltero");
        postulante4.setIdentidadGenero("Hombre");
        postulante4.setCorreo("morgan.demo@example.com");
        postulante4.setTelefono("0000000014");
        postulante4.setInteresPrincipal("Deporte");
        postulante4.setDisponibilidad("Entre Semana");
        postulante4.setPagoHecho(true);

        database.save(postulante1);
        database.save(postulante2);
        database.save(postulante3);
        database.save(postulante4);
    }

    /**
     * Obtiene una lista de todos los postulantes almacenados en la base de datos.
     *
     * @return una lista de objetos Postulante
     */
    @CrossOrigin("${allowed.origin}")
    @GetMapping("/api/postulantes")
    public List<Postulante> obtenerPosutalantes() {
        return database.findAll();
    }

    /**
     * Obtiene un postulante específico por su ID.
     *
     * @param id el ID del postulante a obtener
     * @return un objeto ResponseEntity con el postulante si se encuentra, o un código de error si no se encuentra
     */
    @CrossOrigin("${allowed.origin}")
    @GetMapping("/api/postulantes/{id}")
    public ResponseEntity<Postulante> obtenerPostulanteById(@PathVariable Long id) {
        Optional<Postulante> optional = database.findById(id);

        if (optional.isEmpty()) {
            return ResponseEntity.badRequest().build();
        } else {
            return ResponseEntity.ok(optional.get());
        }

    }

    /**
     * Guarda un nuevo postulante en la base de datos.
     *
     * @param postulante el objeto Postulante a guardar
     * @return un objeto ResponseEntity con el postulante guardado, o un código de error si ocurre algún problema
     */
    @CrossOrigin("${allowed.origin}")
    @PostMapping("/api/postulantes")
    public ResponseEntity<Postulante> guardarPostulante(@Valid @RequestBody Postulante postulante) {
        if (postulante.getId() != null) {
            return ResponseEntity.badRequest().build();
        }
        
        database.save(postulante);
        return ResponseEntity.ok(postulante);
    }

    /**
     * Actualiza un postulante existente en la base de datos.
     *
     * @param postulante el objeto Postulante con los datos actualizados
     * @return un objeto ResponseEntity con el postulante actualizado, o un código de error si ocurre algún problema
     */
    @CrossOrigin("${allowed.origin}")
    @PutMapping("/api/postulantes")
    public ResponseEntity<Postulante> actualizarPostulante(@Valid @RequestBody Postulante postulante) {
        if (postulante.getId() == null || !database.existsById(postulante.getId())) {
            return ResponseEntity.badRequest().build();
        }
        database.save(postulante);
        return ResponseEntity.ok(postulante);
    }

    /**
     * Elimina un postulante existente de la base de datos.
     *
     * @param postulante el objeto Postulante a eliminar
     * @return un objeto ResponseEntity sin contenido si la operación fue exitosa, o un código de error si ocurre algún problema
     */
    @CrossOrigin("${allowed.origin}")
    @DeleteMapping("/api/postulantes")
    public ResponseEntity<Postulante> eliminarPostulante(@RequestBody Postulante postulante) {
        if (postulante.getId() == null || !database.existsById(postulante.getId())) {
            return ResponseEntity.badRequest().build();
        }

        database.delete(postulante);
        return ResponseEntity.noContent().build();
    }

}
