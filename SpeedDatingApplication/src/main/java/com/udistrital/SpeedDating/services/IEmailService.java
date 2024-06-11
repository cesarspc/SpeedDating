/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.udistrital.SpeedDating.services;

import com.udistrital.SpeedDating.services.models.EmailDTO;
import jakarta.mail.MessagingException;

/**
 * Interfaz para el servicio de envío de correos electrónicos.
 * Define un método para enviar correos electrónicos con un objeto EmailDTO.
 * 
 * @author juan-dev
 */
public interface IEmailService {
    
    /**
     * Envía un correo electrónico utilizando la información proporcionada en el objeto EmailDTO.
     * 
     * @param email Objeto EmailDTO que contiene la información del correo a enviar.
     * @throws MessagingException en caso de error durante el envío del correo electrónico.
     */
    public void sendMail(EmailDTO email) throws MessagingException;
    
}
