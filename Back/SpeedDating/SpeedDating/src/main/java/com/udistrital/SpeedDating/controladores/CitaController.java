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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author cesar
 */
@RestController
public class CitaController {
    CitaRepository bd;

    public CitaController(CitaRepository bd) {
        this.bd = bd;
    }
       
    @GetMapping("/api/crearCitas")
    public void crearCitas(){
        Cita cita1 = new Cita(LocalDateTime.of(2022, 5, 1, 0, 0),"126","1312");
        Cita cita2 = new Cita(LocalDateTime.of(2022, 6, 1, 2, 3),"3214","4214");
        
        bd.save(cita1);
        bd.save(cita2);
        
    }
    
    @GetMapping("/api/citas")
    public List<Cita> obtenerCitas(){
        return bd.findAll();
    }
}
