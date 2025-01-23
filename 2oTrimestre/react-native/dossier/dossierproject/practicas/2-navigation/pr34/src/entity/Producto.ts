import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('productos')
export class Producto extends BaseEntity{
        @PrimaryGeneratedColumn() id : number;
        @Column('text') nombre : string;
        @Column('float') precio : number;
        @Column('int') stock : number;
        @Column('boolean') descontinuado : boolean;
}