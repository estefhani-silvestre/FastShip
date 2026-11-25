# FastShip - API de gestión de envíos
## DESCRIPCIÓN
FastShip es un proyecto desarrollado con Node.js, Express y MongoDB que permite gestionar los envíos de paquetes. La API permite registrar nuevos envíos, consultar la información, actualizar sus estados y eliminar registros.

## REQUISITOS
- Node.js
- npm
- MongoDB Atlas

## INSTALACIÓN
1. Clonar o descargar el repositorio.
2. Abrir una terminal dentro de la carpeta `api-node`.
3. Instalar las dependencias:
```bash
npm install
```
4. Crear un archivo `.env` y configurar la conexión a MongoDB: 
```env
MONGODB_URI=[PEGA AQUI TU URL DE CONEXION MONGO DB]
```
5. Iniciar el servidor en modo desarrollo: 
```bash
npm run dev
```
El servidor se ejecutará en: `http://localhost:3000`

## RUTAS DE LA API

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/envios` | Listar todos los envíos. |
| GET | `/api/envios/activos` | Listar los envíos que no han sido entregados. |
| GET | `/api/envios/:id` | Buscar un envío por su ID. |
| POST | `/api/envios` | Registrar un nuevo envío. |
| PUT | `/api/envios/:id` | Actualizar los datos de un envío. |
| DELETE | `/api/envios/:id` | Eliminar un envío. |

## EJEMPLO DE REGISTRO DE UN ENVÍO

Método: POST

Ruta: `http://localhost:3000/api/envios`

Cuerpo de la solicitud (JSON):

```json
{
    "pedidoId": "PED005",
    "remitente": "Juan Perez",
    "destinatario": "Maria Lopez",
    "direccionEntrega": "Av. Arequipa 123, Lima",
    "estado": "pendiente"
}
```