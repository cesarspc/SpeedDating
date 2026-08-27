/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.udistrital.SpeedDating.modelos;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;
/**
 *
 * @author cesar
 */
@Data
@Entity
public class Buscador {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank(message = "nombre es obligatorio")
    @Size(max = 60, message = "nombre no puede superar 60 caracteres")
    private String nombre;
    
    @NotBlank(message = "apellido es obligatorio")
    @Size(max = 60, message = "apellido no puede superar 60 caracteres")
    private String apellido;
    
    @Pattern(regexp = "^(2[5-9]|3[0-5])$", message = "edad debe estar entre 25 y 35")
    private String edad;
    
    @Pattern(regexp = "^(1\\d{2}|2[0-4]\\d|250)$", message = "estatura debe ser un entero entre 100 y 250 cm")
    private String estatura;
    
    @NotBlank(message = "profesion es obligatoria")
    @Size(max = 100, message = "profesion no puede superar 100 caracteres")
    private String profesion;
    
    @NotBlank(message = "contextura es obligatoria")
    @Size(max = 40, message = "contextura no puede superar 40 caracteres")
    private String contextura;
    
    @NotBlank(message = "estadoCivil es obligatorio")
    @Size(max = 40, message = "estadoCivil no puede superar 40 caracteres")
    private String estadoCivil;
    
    @NotBlank(message = "identidadGenero es obligatoria")
    @Size(max = 60, message = "identidadGenero no puede superar 60 caracteres")
    private String identidadGenero;
    
    @NotBlank(message = "correo es obligatorio")
    @Email(message = "correo debe tener un formato valido")
    @Size(max = 254, message = "correo no puede superar 254 caracteres")
    private String correo;
    
    @Pattern(regexp = "^\\+?[0-9() -]{7,20}$", message = "telefono debe tener entre 7 y 20 caracteres validos")
    private String telefono;

    @NotBlank(message = "gustoContextura es obligatorio")
    @Size(max = 40, message = "gustoContextura no puede superar 40 caracteres")
    private String gustoContextura;
    
    @NotBlank(message = "gustoInteres es obligatorio")
    @Size(max = 60, message = "gustoInteres no puede superar 60 caracteres")
    private String gustoInteres;
    
    @Pattern(regexp = "^(1\\d{2}|2[0-4]\\d|250)$", message = "gustoEstatura debe ser un entero entre 100 y 250 cm")
    private String gustoEstatura;
    
    @NotBlank(message = "gustoIdentidad es obligatorio")
    @Size(max = 60, message = "gustoIdentidad no puede superar 60 caracteres")
    private String gustoIdentidad;
    
    @Pattern(regexp = "^(2[5-9]|3[0-5])$", message = "gustoEdad debe estar entre 25 y 35")
    private String gustoEdad;

    private boolean pagoHecho;
    
    public Buscador() {
        super();
    }
       
}
