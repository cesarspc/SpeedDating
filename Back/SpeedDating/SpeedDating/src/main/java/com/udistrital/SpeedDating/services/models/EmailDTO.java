/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.udistrital.SpeedDating.services.models;

/**
 * Modelo que representa un correo electrónico.
 * Contiene la información necesaria para enviar un correo electrónico,
 * incluyendo el destinatario, el asunto y el mensaje.
 * 
 * @author juan-dev
 */
public class EmailDTO {
    
    private String destinatario; // Dirección de correo del destinatario
    
    private String asunto; // Asunto del correo
    
    private String mensaje; // Cuerpo del mensaje del correo
    

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
