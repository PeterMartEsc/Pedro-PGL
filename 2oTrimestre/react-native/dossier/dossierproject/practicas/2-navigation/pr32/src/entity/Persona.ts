import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('persona')
export default class Persona {
    //Si no queremos autogenerado: @PrimaryColumn
    @PrimaryGeneratedColumn() id :  number;
    @Column('text') nombre : string;
    @Column('int') edad : number;

}