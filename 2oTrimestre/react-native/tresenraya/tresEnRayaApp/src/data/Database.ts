
import { DataSource } from 'typeorm';

import { EjemploEntity } from './entity/EjemploEntity';
import Partida from './entity/Partida';



export const dataSource = new DataSource({
  database: 'partidas2.db',
  entities: [
    Partida,
  ],
  location: 'default',
  logging: ['error', 'query', 'schema'],
  synchronize: true,
  type: 'react-native',
});


export const PartidaRepository = dataSource.getRepository(Partida);