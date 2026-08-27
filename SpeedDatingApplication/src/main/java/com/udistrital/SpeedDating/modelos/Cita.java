/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.udistrital.SpeedDating.modelos;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import java.time.LocalDateTime;
import lombok.Data;

/**
 *
 * @author cesar
 */
@Data
@Entity
public class Cita {
    public static final int MAS_QUE_AMISTAD = 1;
    public static final int AMISTAD = 2;
    public static final int NO_CONEXION = 3;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    // Para ingresar facilmente fecha y hora usar setFechaHora(LocalDateTime.of(año, mes, dia, hora, minuto))
    @NotNull(message = "fechaHora es obligatoria")
    private LocalDateTime fechaHora;
    
    @NotBlank(message = "nombreCompletoBuscador es obligatorio")
    @Size(max = 120, message = "nombreCompletoBuscador no puede superar 120 caracteres")
    private String nombreCompletoBuscador;
    
    @NotBlank(message = "nombreCompletoPostulante es obligatorio")
    @Size(max = 120, message = "nombreCompletoPostulante no puede superar 120 caracteres")
    private String nombreCompletoPostulante;
    
    private int calificacionBuscador;
    private int calificacionPostulante;
    private int resultadoCita;
    @NotNull(message = "idBuscador es obligatorio")
    @Positive(message = "idBuscador debe ser positivo")
    private Long idBuscador;

    @NotNull(message = "idPostulante es obligatorio")
    @Positive(message = "idPostulante debe ser positivo")
    private Long idPostulante;

    public Cita (){
        super();
    }
    
}
