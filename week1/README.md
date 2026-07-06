# Semana 1 - Kickoff operativo

## Objetivo
Construir la base funcional de una app AI full-stack en TypeScript (backend + frontend + base de datos) y dejarla lista para integrar LLMs en la semana 2.

## Plan de hoy (Lunes, 2 horas)
1. Definir alcance del mini producto.
2. Cerrar arquitectura inicial.
3. Definir endpoints v1.
4. Definir esquema SQL v1.
5. Priorizar backlog de semana 1.

## Alcance del mini producto (MVP)
Caso de uso: chat interno con historial de conversaciones.

Incluye:
- Crear una conversacion nueva.
- Enviar mensajes de usuario.
- Consultar historial de una conversacion.
- Endpoint de health para operacion.

No incluye en semana 1:
- Autenticacion completa.
- Integracion con LLM.
- RAG y embeddings.
- Multi-tenant avanzado.

## Arquitectura inicial
- Frontend: React + TypeScript.
- Backend: Node.js + TypeScript (API REST).
- Base de datos: PostgreSQL.

Flujo:
1. Usuario escribe mensaje en UI.
2. UI llama API REST.
3. API valida entrada y persiste en PostgreSQL.
4. UI consulta historial por conversationId.

## Contrato minimo de API (v1)
Ver detalle en week1/api/endpoints.md.

## Esquema de base de datos (v1)
Ver SQL en week1/sql/schema_v1.sql.

## Backlog priorizado (semana 1)
P0
- Crear estructura backend TypeScript.
- Implementar GET /health.
- Implementar POST /conversations.
- Implementar POST /conversations/{id}/messages.
- Implementar GET /conversations/{id}/messages.
- Crear tablas users, conversations, messages.
- UI minima de chat conectada a API.

P1
- Logging estructurado.
- Manejo de timeouts y errores de red en UI.
- Datos seed para demo.

P2
- Prueba automatizada basica de API.
- Checklist de fallos conocidos.

## Definition of Done - Semana 1
- API y UI levantan localmente.
- Se puede crear conversacion y consultar historial.
- Entradas invalidas retornan errores consistentes.
- Existe un mini demo reproducible de 5 minutos.

## Siguiente paso recomendado (hoy mismo)
1. Revisar y ajustar este alcance en 15 minutos.
2. Arrancar implementacion backend P0.
