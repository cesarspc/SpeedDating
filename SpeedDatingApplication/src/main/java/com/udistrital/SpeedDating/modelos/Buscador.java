/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.udistrital.SpeedDating.modelos;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
public class Buscador {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NonNull
    private String nombre;
    
    @NonNull
    private String apellido;
    
    @NonNull
    private String edad;
    
    @NonNull
    private String estatura;
    
    @NonNull
    private String profesion;
    
    @NonNull
    private String contextura;
    
    @NonNull
    private String estadoCivil;
    
    @NonNull
    private String identidadGenero;
    
    @NonNull
    private String correo;
    
    @NonNull
    private String telefono;

    @NonNull
    private String gustoContextura;
    
    @NonNull
    private String gustoInteres;
    
    @NonNull
    private String gustoEstatura;
    
    @NonNull
    private String gustoIdentidad;
    
    @NonNull
    private String gustoEdad;

    private boolean pagoHecho;
    
    public Buscador() {
        super();
    }
       
}
