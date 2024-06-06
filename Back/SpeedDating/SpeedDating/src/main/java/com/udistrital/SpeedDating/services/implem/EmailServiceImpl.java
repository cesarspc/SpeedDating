/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.udistrital.SpeedDating.services.implem;

import com.udistrital.SpeedDating.services.IEmailService;
import com.udistrital.SpeedDating.services.models.EmailDTO;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;

/**
 * Implementación del servicio de envío de correos electrónicos.
 * Utiliza JavaMailSender para enviar correos electrónicos
 * y TemplateEngine para procesar plantillas de correo.
 * 
 * @author juan-dev
 */
@Service
public class EmailServiceImpl implements IEmailService {
    
    private final JavaMailSender javaMailSender;
    
    private final TemplateEngine templateEngine;

    /**
     * Constructor para inyectar JavaMailSender y TemplateEngine.
     * 
     * @param javaMailSender JavaMailSender para enviar correos electrónicos.
     * @param templateEngine TemplateEngine para procesar plantillas de correo.
     */
    public EmailServiceImpl(JavaMailSender javaMailSender, TemplateEngine templateEngine) {
        this.javaMailSender = javaMailSender;
        this.templateEngine = templateEngine;
    }
    
    /**
     * Método para enviar un correo electrónico.
     * 
     * @param email Objeto EmailDTO que contiene la información del correo a enviar.
     * @throws MessagingException en caso de error durante el envío del correo electrónico.
     */
    @Override
    public void sendMail(EmailDTO email) throws MessagingException {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
        helper.setTo(email.getDestinatario());
        helper.setSubject(email.getAsunto());
        helper.setText(email.getMensaje());
        javaMailSender.send(message);
    }
}
