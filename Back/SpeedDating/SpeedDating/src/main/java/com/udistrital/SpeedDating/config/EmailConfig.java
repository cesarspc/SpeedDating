/*
 * Click nbfs://nbhost/SystemFileSystem/kkTemplates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.udistrital.SpeedDating.config;

import java.util.Properties;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.io.DefaultResourceLoader;
import org.springframework.core.io.ResourceLoader;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

/**
 * Configuración para el envío de correos electrónicos.
 * Configura el bean de JavaMailSender para enviar correos electrónicos
 * utilizando el servidor SMTP de Gmail.
 * 
 * @author juan-dev
 */

@Configuration
@PropertySource("classpath:email.properties")
public class EmailConfig {

    @Value("${email.username}")
    private String email;

    @Value("${email.password}")
    private String password;

    /**
     * Obtiene las propiedades de configuración del servidor de correo.
     * 
     * @return Propiedades de configuración del servidor de correo.
     */
    private Properties getMailProperties() {
        Properties properties = new Properties();
        properties.put("mail.smtp.auth","true");
        properties.put("mail.smtp.starttls.enable","true");
        properties.put("mail.smtp.host","smtp"+".gmail.com");
        properties.put("mail.smtp.port","587");
        return properties;
    }

    /**
     * Configura y devuelve un bean de JavaMailSender para enviar correos electrónicos.
     * 
     * @return Bean de JavaMailSender configurado.
     */
    @Bean
    public JavaMailSender javaMailSender(){
        JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();

        javaMailSender.setJavaMailProperties(getMailProperties());

        javaMailSender.setUsername(email);
        javaMailSender.setPassword(password);

        return javaMailSender;
    }

    /**
     * Configura y devuelve un bean ResourceLoader para cargar recursos.
     * 
     * @return Bean ResourceLoader configurado.
     */
    @Bean
    public ResourceLoader resourceLoader(){
        return new DefaultResourceLoader();
    }
}
