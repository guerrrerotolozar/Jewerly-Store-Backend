import {
    dbDeleteCollectionById,
    dbGetAllCollections,
    dbGetCollectionById,
    dbRegisterCollection,
} from '../services/collection.services.js';

const registerCollection = async (req, res) => {
    try {
        const inputData = req.body;
        console.log(inputData);

        const collectionRegistered = await dbRegisterCollection(inputData);

        res.status(201).json({
            msg: 'Colección creada correctamente',
            collection: collectionRegistered,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error: no se pudo crear la colección',
            error: error.message,
        });
    }
};

const getAllCollections = async (req, res) => {
    try {
        const collections = await dbGetAllCollections();

        res.status(200).json({
            msg: 'Lista de colecciones',
            data: collections,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error: no se pudieron obtener las colecciones',
            error: error.message,
        });
    }
};

const getCollectionById = async (req, res) => {
    try {
        const { idcollection: idCollection } = req.params;

        const collection = await dbGetCollectionById(idCollection);

        if (!collection) {
            return res.status(404).json({
                msg: 'Colección no encontrada',
            });
        }

        res.status(200).json({
            collection,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error: no se pudo obtener la colección',
            error: error.message,
        });
    }
};

const deleteCollectionById = async (req, res) => {
    try {
        const { idcollection: idCollection } = req.params;

        const deleted = await dbDeleteCollectionById(idCollection);

        if (!deleted) {
            return res.status(404).json({
                msg: 'Colección no encontrada',
            });
        }

        res.status(200).json({
            msg: 'Colección eliminada correctamente',
            collectionDeleted: deleted,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error: no se pudo eliminar la colección',
            error: error.message,
        });
    }
};

export {
    registerCollection,
    getAllCollections,
    getCollectionById,
    deleteCollectionById,
};
