/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.udistrital.SpeedDating.controladores;

import com.udistrital.SpeedDating.modelos.Cita;
import com.udistrital.SpeedDating.repositorios.CitaRepository;
import java.time.DateTimeException;
import java.time.LocalDateTime;
import java.time.Month;
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
 * @author cesar
 */
@RestController
public class CitaController {

    CitaRepository database;

    /**
     * Constructor de la clase CitaController que inyecta el repositorio de citas.
     *
     * @param bd el repositorio de citas a inyectar
     */
    public CitaController(CitaRepository bd) {
        this.database = bd;
    }//

     /**
     * Crea y guarda dos citas de ejemplo en la base de datos.
     */
    @GetMapping("/api/crearCitas")
    public void crearCitas() {
        Cita cita1 = new Cita(LocalDateTime.of(2022, 5, 1, 0, 0), "126", "1312");
        Cita cita2 = new Cita(LocalDateTime.of(2022, 6, 1, 2, 3), "3214", "4214");
        cita1.setIdBuscador((long)1);
        cita1.setIdPostulante((long)1);
        cita2.setIdBuscador((long)1);
        cita2.setIdPostulante((long)1);

        database.save(cita1);
        database.save(cita2);

    }
    /**
    * Obtiene una lista de todas las citas almacenadas en la base de datos.
     *
     * @return una lista de objetos Cita
     */
    @CrossOrigin("http://localhost:8080")
    @GetMapping("/api/citas")
    public List<Cita> obtenerCitas() {
        return database.findAll();
    }

    /**
     * Obtiene una cita específica por su ID.
     *
     * @param id el ID de la cita a obtener
     * @return un objeto ResponseEntity con la cita si se encuentra, o un código de error si no se encuentra
     */
    @CrossOrigin("http://localhost:8080")
    @GetMapping("/api/citas/{id}")
    public ResponseEntity<Cita> obtenerCitaById(@PathVariable Long id) {
        Optional<Cita> optional = database.findById(id);

        if (optional.isEmpty()) {
            return ResponseEntity.badRequest().build();
        } else {
            return ResponseEntity.ok(optional.get());
        }

    }

    /**
     * Guarda una nueva cita en la base de datos.
     *
     * @param cita el objeto Cita a guardar
     * @return un objeto ResponseEntity con la cita guardada, o un código de error si ocurre algún problema
     */
    @CrossOrigin("http://localhost:8080")
    @PostMapping("/api/citas")
    public ResponseEntity<Cita> guardarCita(@RequestBody Cita cita) {
        if (cita.getId() != null) {
            return ResponseEntity.badRequest().build();
        }

        database.save(cita);
        return ResponseEntity.ok(cita);
    }

    /**
     * Actualiza el resultado de una cita existente en la base de datos.
     *
     * @param cita el objeto Cita con los resultados actualizados
     * @return un objeto ResponseEntity con la cita actualizada, o un código de error si ocurre algún problema
     */
    @CrossOrigin("http://localhost:8080")
    @PutMapping("/api/citas")
    public ResponseEntity<Cita> resultadosCita(@RequestBody Cita cita) {
        if (cita.getId() == null || !database.existsById(cita.getId())) {
            return ResponseEntity.badRequest().build();
        }

        if (cita.getCalificacionBuscador() != Cita.MAS_QUE_AMISTAD
                && cita.getCalificacionBuscador() != Cita.AMISTAD
                && cita.getCalificacionBuscador() != Cita.NO_CONEXION) {
            
            return ResponseEntity.badRequest().build();
            
        }
        
        if (cita.getCalificacionPostulante() != Cita.MAS_QUE_AMISTAD
                && cita.getCalificacionPostulante() != Cita.AMISTAD
                && cita.getCalificacionPostulante() != Cita.NO_CONEXION) {
            
            return ResponseEntity.badRequest().build();
            
        }
        
        if(cita.getCalificacionBuscador() == cita.getCalificacionPostulante()){
            cita.setResultadoCita(cita.getCalificacionBuscador());
        } else {
            cita.setResultadoCita(Cita.NO_CONEXION);
        }

        database.save(cita);
        return ResponseEntity.ok(cita);
    }

     /**
     * Elimina una cita existente de la base de datos.
     *
     * @param cita el objeto Cita a eliminar
     * @return un objeto ResponseEntity sin contenido si la operación fue exitosa, o un código de error si ocurre algún problema
     */

    @CrossOrigin("http://localhost:8080")
    @DeleteMapping("/api/citas")
    public ResponseEntity<Cita> eliminarCita(@RequestBody Cita cita) {
        if (cita.getId() == null || !database.existsById(cita.getId())) {
            return ResponseEntity.badRequest().build();
        }

        database.delete(cita);
        return ResponseEntity.noContent().build();
    }

}
