/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.udistrital.SpeedDating.controladores;

import com.udistrital.SpeedDating.modelos.Buscador;
import com.udistrital.SpeedDating.repositorios.BuscadorRepository;
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
public class BuscadorController {

    BuscadorRepository database;

    /**
     * Constructor que inyecta el repositorio de Buscador
     *
     * @param bd Repositorio de Buscador
     */
    public BuscadorController(BuscadorRepository bd) {

        this.database = bd;
    }

     /**
     * Crea y guarda dos instancias de Buscador en la base de datos
     */
    @CrossOrigin("${allowed.origin}")
    @PostMapping("/api/crearBuscadores")
    public void crearBuscadores() {
        /*
    Ejemplo introducción de datos
         */
        Buscador buscador1 = new Buscador();
        buscador1.setNombre("Alex");
        buscador1.setApellido("Demo");
        buscador1.setEdad("25");
        buscador1.setEstatura("170");
        buscador1.setProfesion("Disenador");
        buscador1.setContextura("Media");
        buscador1.setEstadoCivil("Soltero");
        buscador1.setIdentidadGenero("No binario");
        buscador1.setCorreo("alex.demo@example.com");
        buscador1.setTelefono("0000000001");
        buscador1.setGustoContextura("Delgada");
        buscador1.setGustoInteres("Musica");
        buscador1.setGustoEstatura("180");
        buscador1.setGustoIdentidad("Mujer");
        buscador1.setGustoEdad("30");
        buscador1.setPagoHecho(true);

        Buscador buscador2 = new Buscador();
        buscador2.setNombre("Sam");
        buscador2.setApellido("Demo");
        buscador2.setEdad("30");
        buscador2.setEstatura("180");
        buscador2.setProfesion("Ingeniero");
        buscador2.setContextura("Atletica");
        buscador2.setEstadoCivil("Soltero");
        buscador2.setIdentidadGenero("Hombre");
        buscador2.setCorreo("sam.demo@example.com");
        buscador2.setTelefono("0000000002");
        buscador2.setGustoContextura("Media");
        buscador2.setGustoInteres("Viajes");
        buscador2.setGustoEstatura("170");
        buscador2.setGustoIdentidad("No binario");
        buscador2.setGustoEdad("25");
        buscador2.setPagoHecho(true);

        database.save(buscador1);
        database.save(buscador2);
    }

     /**
     * Obtiene una lista de todos los Buscadores almacenados
     *
     * @return Lista de Buscadores
     */
    @CrossOrigin("${allowed.origin}")
    @GetMapping("/api/buscadores")
    public List<Buscador> obtenerBuscadores() {
        return database.findAll();
    }

    /**
     * Obtiene un Buscador específico por su ID
     *
     * @param id ID del Buscador
     * @return ResponseEntity con el Buscador encontrado o un error si no se encontró
     */
    @CrossOrigin("${allowed.origin}")
    @GetMapping("/api/buscadores/{id}")
    public ResponseEntity<Buscador> obtenerBuscadoresById(@PathVariable Long id) {
        Optional<Buscador> optional = database.findById(id);

        if (optional.isEmpty()) {
            return ResponseEntity.badRequest().build();
        } else {
            return ResponseEntity.ok(optional.get());
        }

    }

    /**
     * Guarda un nuevo Buscador en la base de datos
     *
     * @param buscador Objeto Buscador a guardar
     * @return ResponseEntity con el Buscador guardado o un error si ya tiene un ID asignado
     */
    @CrossOrigin("${allowed.origin}")
    @PostMapping("/api/buscadores")
    public ResponseEntity<Buscador> guardarBuscador(@Valid @RequestBody Buscador buscador) {
        if (buscador.getId() != null) {
            return ResponseEntity.badRequest().build();
        }

        database.save(buscador);
        return ResponseEntity.ok(buscador);
    }

    /**
     * Actualiza un Buscador existente en la base de datos
     *
     * @param buscador Objeto Buscador con los datos actualizados
     * @return ResponseEntity con el Buscador actualizado o un error si no se encontró el ID
     */
    @CrossOrigin("${allowed.origin}")
    @PutMapping("/api/buscadores")
    public ResponseEntity<Buscador> actualizarBuscador(@Valid @RequestBody Buscador buscador) {
        if (buscador.getId() == null || !database.existsById(buscador.getId())) {
            return ResponseEntity.badRequest().build();
        }

        database.save(buscador);
        return ResponseEntity.ok(buscador);
    }

    
    /**
     * Elimina un Buscador de la base de datos
     *
     * @param buscador Objeto Buscador a eliminar
     * @return ResponseEntity vacío si se eliminó correctamente, o un error si no se encontró el ID
     */
    @CrossOrigin("${allowed.origin}")
    @DeleteMapping("/api/buscadores")
    public ResponseEntity<Buscador> eliminarBuscador(@RequestBody Buscador buscador) {
        if (buscador.getId() == null || !database.existsById(buscador.getId())) {
            return ResponseEntity.badRequest().build();
        }

        database.delete(buscador);
        return ResponseEntity.noContent().build();
    }

}
