import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('persona')
export class Persona extends BaseEntity {
    //Si no queremos autogenerado: @PrimaryColumn
    @PrimaryGeneratedColumn() id :  number;
    @Column('text') nombre : string;
    @Column('int') edad : number;

}