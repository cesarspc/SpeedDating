package com.udistrital.SpeedDating.controladores;

import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {

    @GetMapping("/")
    public Map<String, Object> overview() {
        return Map.of(
                "title", "SpeedDating API demo",
                "description", "API REST para gestionar buscadores, postulantes y citas.",
                "flow", List.of(
                        Map.of("step", 1, "method", "POST", "path", "/api/crearBuscadores", "description", "Carga dos buscadores ficticios."),
                        Map.of("step", 2, "method", "POST", "path", "/api/crearPostulantes", "description", "Carga cuatro postulantes ficticios."),
                        Map.of("step", 3, "method", "GET", "path", "/api/buscadores y /api/postulantes", "description", "Consulta los IDs creados."),
                        Map.of("step", 4, "method", "POST", "path", "/api/crearCitas", "description", "Carga citas ficticias que usan IDs de la demo."),
                        Map.of("step", 5, "method", "PUT", "path", "/api/citas", "description", "Registra calificaciones 1=pareja, 2=amistad, 3=sin conexion.")),
                "documentation", "Consulta README.md para ejemplos de solicitudes y despliegue en Cloud Run.");
    }
}
