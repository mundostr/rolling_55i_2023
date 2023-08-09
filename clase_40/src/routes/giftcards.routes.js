import { Router } from 'express'
import giftcards_data from '../helpers/giftcards.js'

// Es muy común utilizar distintos archivos de rutas para organizar los endpoints,
// luego agregaremos el uso de clases.
export const giftcardsRoutes = ()  => {
    const router = Router()

    router.get('/', (req, res) => {
        res.status(200).send({ status: 'OK', data: giftcards_data })
    })

    return router
}