import Sequelize from "sequelize";
import db from "../config/db.js";

export const Testimonial = db.define('testimonios_usuarios', {
    nombre: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
})