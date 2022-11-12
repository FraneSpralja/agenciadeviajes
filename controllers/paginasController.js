import { Viajes } from '../models/Viaje.js'
import { Testimonial } from '../models/Testimoniales.js';

const paginaInicio = async (req, res) => {

    const promiseDB = []

    promiseDB.push(Viajes.findAll({limit: 3}))
    promiseDB.push(Testimonial.findAll({limit: 3}))

    try {
        const resultado = await Promise.all( promiseDB );

        res.render('inicio',{
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        })
    } catch (error) {
        console.log(error)
    }
};

const paginaNosotros = (req, res) => {    
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
};

const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = await Testimonial.findAll();        
        res.render('testimoniales', {
            pagina: 'Testimonios',
            testimoniales
        })
    } catch (error) {
        console.log(error)
    }    
};

const paginaViajes = async (req, res) => {
    const viajes = await Viajes.findAll();

    console.log(viajes)
    
    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes
    })
};

// Muestra Viaje por su Slug

const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;
    try {
        const viaje = await Viajes.findOne({ where : { slug }});

        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.log(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaTestimoniales,
    paginaViajes,
    paginaDetalleViaje
};