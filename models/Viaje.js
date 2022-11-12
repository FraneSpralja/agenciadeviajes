import Sequelize from  'sequelize';
import db from '../config/db.js'

export const Viajes = db.define('viajes', {
    destino: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.STRING
    },
    fecha_vuelta: {
        type: Sequelize.STRING
    },
    imagen: {
        type: Sequelize.STRING
    },
    cantidad: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    },
    comentario: {
        type: Sequelize.STRING
    },
})