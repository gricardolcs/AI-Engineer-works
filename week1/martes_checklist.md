# Martes - Checklist operativo (3h)

## Estado actual
- [x] Endpoint GET /api/v1/health operativo.
- [x] Endpoint POST /api/v1/conversations implementado.
- [x] Endpoint POST /api/v1/conversations/{id}/messages implementado.
- [x] Endpoint GET /api/v1/conversations/{id}/messages implementado.
- [x] Validaciones de entrada para role/content/title.
- [x] Respuestas de error estandar (validation_error, not_found, internal_error).
- [x] Pruebas manuales positivas y negativas ejecutadas.

## Notas tecnicas
- El almacenamiento actual es en memoria para avanzar rapido sin bloqueo de DB.
- Miércoles corresponde conectar a PostgreSQL usando week1/sql/schema_v1.sql.

## Pendientes para Miércoles (3h)
- [ ] Levantar PostgreSQL local.
- [ ] Ejecutar schema_v1.sql.
- [ ] Reemplazar store en memoria por repositorio SQL.
- [ ] Mantener el mismo contrato de API definido en week1/api/endpoints.md.
