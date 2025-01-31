import { DataSource } from "typeorm";
import { Producto } from "../entity/Producto";

export const dataSourcePr34 = new DataSource ({
    database: 'productosdb.db',
    entities: [Producto /*, Ejercicio*/],
    location: 'default',
    logging: [],
    //logging: ['error', 'query', 'schema'],
    synchronize: true,
    type: 'react-native',

});

export const ProductoRepository = dataSourcePr34.getRepository(Producto);