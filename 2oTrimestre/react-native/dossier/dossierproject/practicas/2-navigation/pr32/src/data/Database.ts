import { DataSource } from "typeorm";
import { Persona } from "../entity/Persona";

export const dataSourcePr32 = new DataSource ({
    database: 'personasdb.db',
    entities: [Persona /*, Ejercicio*/],
    location: 'default',
    logging: [],
    //logging: ['error', 'query', 'schema'],
    synchronize: true,
    type: 'react-native',

});

export const PersonaRepository = dataSourcePr32.getRepository(Persona);
//export const EjercicioRepository = dataSource.getRepository(Ejercicio);
