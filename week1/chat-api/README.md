# chat-api (Week 1)

## Estado
Scaffold creado. Falta instalar Node.js para ejecutar dependencias.

## Requisitos
- Node.js 20+ (incluye npm)

## Instalacion y ejecucion
1. Abrir terminal en esta carpeta.
2. Ejecutar: npm install
3. Ejecutar: npm run dev
4. Verificar: GET http://localhost:3000/api/v1/health

## Scripts
- npm run dev: servidor en modo desarrollo
- npm run build: compila TypeScript a dist
- npm run start: ejecuta version compilada

## Estructura
- src/index.ts: arranque del servidor
- src/app.ts: configuracion de middlewares y rutas
- src/routes/health.ts: endpoint de health

## Proximo paso (Martes)
Implementar endpoints de conversaciones y mensajes segun week1/api/endpoints.md.
