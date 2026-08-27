package com.udistrital.SpeedDating;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class SpeedDatingApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void contextLoads() {
    }

    @Test
    void rootExplainsTheDemoFlow() throws Exception {
        mockMvc.perform(get("/"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value("SpeedDating API demo"))
                .andExpect(jsonPath("$.flow[0].method").value("POST"));
    }

    @Test
    void invalidParticipantIsRejectedByTheServer() throws Exception {
        mockMvc.perform(post("/api/buscadores")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                  "nombre": "Alex",
                                  "apellido": "Demo",
                                  "edad": "20",
                                  "estatura": "170",
                                  "profesion": "Disenador",
                                  "contextura": "Media",
                                  "estadoCivil": "Soltero",
                                  "identidadGenero": "No binario",
                                  "correo": "alex.demo@example.com",
                                  "telefono": "0000000001",
                                  "gustoContextura": "Delgada",
                                  "gustoInteres": "Musica",
                                  "gustoEstatura": "180",
                                  "gustoIdentidad": "Mujer",
                                  "gustoEdad": "30"
                                }
                                """))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.errors.edad").value("edad debe estar entre 25 y 35"));
    }

    @Test
    void seedEndpointsDoNotAcceptGetRequests() throws Exception {
        mockMvc.perform(get("/api/crearBuscadores"))
                .andExpect(status().isMethodNotAllowed());
    }

}
