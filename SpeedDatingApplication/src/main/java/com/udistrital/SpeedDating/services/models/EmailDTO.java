/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.udistrital.SpeedDating.services.models;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

/**
 *
 * @author juan-dev
 */
public class EmailDTO {
    
    @NotBlank(message = "destinatario es obligatorio")
    @Email(message = "destinatario debe tener un formato valido")
    private String destinatario;
    
    @NotBlank(message = "asunto es obligatorio")
    @Size(max = 150, message = "asunto no puede superar 150 caracteres")
    private String asunto;
    
    @NotBlank(message = "mensaje es obligatorio")
    @Size(max = 5000, message = "mensaje no puede superar 5000 caracteres")
    private String mensaje;
    

    public String getDestinatario() {
        return destinatario;
    }

    public void setDestinatario(String destinatario) {
        this.destinatario = destinatario;
    }

    public String getAsunto() {
        return asunto;
    }

    public void setAsunto(String asunto) {
        this.asunto = asunto;
    }

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }
    
    
}
