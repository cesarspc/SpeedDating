/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.udistrital.SpeedDating.controladores;

import com.udistrital.SpeedDating.services.IEmailService;
import com.udistrital.SpeedDating.services.models.EmailDTO;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controlador para el manejo de envíos de correo electrónico.
 * Permite recibir peticiones para enviar correos electrónicos utilizando
 * el servicio de email configurado en la aplicación.
 * 
 * @autor juan-dev
 */

@RestController
public class EmailController {

    // Inyección del servicio de correo electrónico
    @Autowired
    IEmailService emailService;

    /**
     * Método para manejar las peticiones POST en la ruta "/send-email".
     * Este método recibe un objeto EmailDTO en el cuerpo de la petición,
     * y utiliza el servicio de correo para enviar el email.
     * 
     * @param email Objeto que contiene la información del email a enviar.
     * @return ResponseEntity con un mensaje de éxito y el estado HTTP correspondiente.
     * @throws MessagingException en caso de que ocurra un error durante el envío del email.
     */
    @CrossOrigin("${allowed.origin}")
    @PostMapping("api/send-email")
    public ResponseEntity<String> sendEmail(@RequestBody EmailDTO email) throws MessagingException {
        emailService.sendMail(email);
        return new ResponseEntity<>("Correo enviado exitosamente", HttpStatus.OK);
    }
    
}
