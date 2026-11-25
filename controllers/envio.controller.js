const EnvioModel = require('../models/envio.model');
const envioController = {
    async list(req,res){
        try{
            const envios = await EnvioModel.find();
            res.json(envios);
        }catch(error){
            res.status(500).json({error: error.message});
        }
    },

    async active(req, res){
        try{
            const envios = await EnvioModel.find({
                estado: { $ne: 'entregado'}
            });
            res.json(envios);

        }catch(error){
            res.status(500).json({ error: error.message});
        }
    },

    async show(req, res){
        try{
            const id = req.params.id;
            const envio = await EnvioModel.findById(id);

            if(!envio)
                return res.status(404).json({ mensaje: 'Envio no encontrado'});
            res.json(envio);
        }catch (error){
            res.status(500).json({ error: error.message});
        }
    },

    async save(req, res){
        try{
            const envio = new EnvioModel(req.body);
            await envio.save();
            res.status(201).json(envio);
        }catch(error){
            res.status(500).json({ error: error.message});
        }
    },

    async edit(req, res){
        try{
            const envio = await EnvioModel.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

            if(!envio)
                return res.status(404).json({ mensaje: 'Envio no encontrado'});
            res.json(envio);

        }catch(error){
            res.status(500).json({ error: error.message});
        }
    },

    async remove(req, res){
        try{
            const envio = await EnvioModel.findByIdAndDelete(req.params.id);

            if(!envio)
                return res.status(404).json({ mensaje: 'Envio no encontrado'});
            res.json({ mensaje: 'Envío eliminado'});
        } catch(error){
            res.status(500).json({ error: error.message});
        }
    },
};


module.exports = envioController;