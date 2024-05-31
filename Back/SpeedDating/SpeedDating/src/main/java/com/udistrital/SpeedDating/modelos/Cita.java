/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.udistrital.SpeedDating.modelos;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

/**
 *
 * @author cesar
 */
@Data
@Entity
@RequiredArgsConstructor
public class Cita {
    public static final int MAS_QUE_AMISTAD = 1;
    public static final int AMISTAD = 2;
    public static final int NO_CONEXION = 3;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    // Para ingresar facilmente fecha y hora usar setFechaHora(LocalDateTime.of(año, mes, dia, hora, minuto))
    @NonNull
    private LocalDateTime fechaHora;
    
    @NonNull
    private String cedulaBuscador;
    
    @NonNull
    private String cedulaPostulante;
    
    private int calificacionBuscador;
    private int calificacionPostulante;
    private int resultadoCita;

    public Cita (){
        super();
    }
    
    
    
    
}
