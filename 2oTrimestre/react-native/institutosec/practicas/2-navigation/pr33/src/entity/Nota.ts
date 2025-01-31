import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('persona')
export class Nota extends BaseEntity{
    @PrimaryGeneratedColumn() id : number;
    @Column('text') nombre : string;
    @Column('text') contenido : string;
    @Column('boolean') acabada: boolean;

}