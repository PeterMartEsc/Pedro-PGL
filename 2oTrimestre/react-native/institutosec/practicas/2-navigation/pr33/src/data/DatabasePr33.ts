import { DataSource } from "typeorm";
import { Nota } from "../entity/Nota";

export const dataSourcePr33 = new DataSource ({
    database: 'notasdb.db',
    entities: [Nota /*, Ejercicio*/],
    location: 'default',
    logging: [],
    //logging: ['error', 'query', 'schema'],
    synchronize: true,
    type: 'react-native',

});

export const NotaRepository = dataSourcePr33.getRepository(Nota);