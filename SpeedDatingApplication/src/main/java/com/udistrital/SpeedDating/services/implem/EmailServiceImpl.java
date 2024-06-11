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
 *
 * @author juan-dev
 */
@Service
public class EmailServiceImpl implements IEmailService{
    
    private final JavaMailSender javaMailSender;
    
    private final TemplateEngine templateEngine;

    public EmailServiceImpl(JavaMailSender javaMailSender, TemplateEngine templateEngine) {
        this.javaMailSender = javaMailSender;
        this.templateEngine = templateEngine;
    }
    
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
