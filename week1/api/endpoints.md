# API v1 - Endpoints base

## Convenciones
- Base path: /api/v1
- Content-Type: application/json
- Fechas en formato ISO 8601 UTC

## GET /api/v1/health
Respuesta 200
{
  "status": "ok",
  "service": "chat-api",
  "timestamp": "2026-07-06T12:00:00Z"
}

## POST /api/v1/conversations
Request
{
  "userId": "uuid-opcional",
  "title": "string-opcional"
}

Respuesta 201
{
  "conversationId": "uuid",
  "title": "Nueva conversacion",
  "createdAt": "ISO_DATE"
}

## POST /api/v1/conversations/{id}/messages
Request
{
  "role": "user",
  "content": "texto del mensaje"
}

Validaciones
- role requerido y solo user o assistant
- content requerido, 1..4000 caracteres

Respuesta 201
{
  "messageId": "uuid",
  "conversationId": "uuid",
  "role": "user",
  "content": "texto del mensaje",
  "createdAt": "ISO_DATE"
}

## GET /api/v1/conversations/{id}/messages
Respuesta 200
{
  "conversationId": "uuid",
  "messages": [
    {
      "messageId": "uuid",
      "role": "user",
      "content": "hola",
      "createdAt": "ISO_DATE"
    }
  ]
}

## Errores estandar
400
{
  "error": "validation_error",
  "message": "Invalid request body"
}

404
{
  "error": "not_found",
  "message": "Conversation not found"
}

500
{
  "error": "internal_error",
  "message": "Unexpected server error"
}
