import cors from 'cors'
import express from 'express'
import { giftcardsRoutes } from './routes/giftcards.routes.js'

const EXPRESS_PORT = 5000

// Inicializamos la app de Express
const app = express()

// Habilitamos el uso de cors (https://reflectoring.io/complete-guide-to-cors/)
app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use(express.urlencoded({ extended: true }));


// Insertamos las rutas de endpoints que nos interesa habilitar
// En lugar de declarar los endpoints acá, lo hacemos en un archivo de rutas por separado
app.use('/api/giftcards', giftcardsRoutes());

// Habilitamos una ruta "catchall" para retornar un contenido amigable cuando se intenta
// acceder a un endpoint que no existe
app.all('*', (req, res) => {
    res.status(200).send({ status: 'OK', data: 'No se encuentra el endpoint solicitado' })
})

// Finalmente ponemos a "escuchar" nuestro servidor en un puerto específico
app.listen(EXPRESS_PORT, () => {
    console.log(`Backend iniciado en puerto ${EXPRESS_PORT}`)
})