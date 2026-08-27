# SpeedDating

SpeedDating es un evento de citas con desconocidos, esta aplicación está pensada para la administración de dicho evento.

La aplicación muestra el flujo de buscadores, postulantes y citas. La persistencia usa H2 en memoria y usa repositorios JPA para los modelos de los servicios.

## API disponible

La documentación está organizada para recorrer el flujo funcional del sistema. Empieza por los recursos de buscadores y postulantes, revisa sus respuestas JSON y continúa con las citas para ver cómo se relacionan mediante sus IDs.

### Buscadores y postulantes

- `GET /api/buscadores` — listar buscadores.
- `GET /api/buscadores/{id}` — consultar un buscador.
- `POST /api/buscadores` — registrar un buscador.
- `PUT /api/buscadores` — actualizar un buscador.
- `DELETE /api/buscadores` — eliminar un buscador.
- `GET /api/postulantes` — listar postulantes.
- `GET /api/postulantes/{id}` — consultar un postulante.
- `POST /api/postulantes` — registrar un postulante.
- `PUT /api/postulantes` — actualizar un postulante.
- `DELETE /api/postulantes` — eliminar un postulante.

### Citas

- `GET /api/citas` — listar citas.
- `GET /api/citas/{id}` — consultar una cita.
- `POST /api/citas` — registrar una cita.
- `PUT /api/citas` — actualizar calificaciones y resultado.
- `DELETE /api/citas` — eliminar una cita.

Las rutas `/api/crearBuscadores`, `/api/crearPostulantes` y `/api/crearCitas` tienen datos de ejemplo para su uso.

## Validación y diseño

La API valida las solicitudes en el servidor, independientemente del cliente que la consuma:

- Edad y edad preferida: enteros entre 25 y 35.
- Estatura y estatura preferida: enteros entre 100 y 250 cm.
- Correos: formato de email válido.
- Teléfonos: entre 7 y 20 caracteres numéricos o de formato telefónico.
- Campos de texto: obligatorios y con longitudes máximas.
- Disponibilidad del postulante: `Fines de Semana` o `Entre Semana`.
- Citas: fecha, nombres e IDs positivos obligatorios.

Las solicitudes inválidas reciben `400 Bad Request` con un JSON que identifica cada campo inválido. Por ejemplo:

```json
{
  "message": "La solicitud no cumple las validaciones requeridas.",
  "errors": {
    "edad": "edad debe estar entre 25 y 35"
  }
}
```

## Ejecución

El `Dockerfile` de la raíz empaqueta únicamente el backend y está preparado para ejecutarse como un servicio HTTP gestionado. La aplicación utiliza el puerto `PORT` y no necesita una base de datos externa para esta demostración.
