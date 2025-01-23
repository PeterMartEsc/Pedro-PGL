import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

export class Producto extends BaseEntity{
        @PrimaryGeneratedColumn() id : number;
        @Column('text') nombre : string;
        @Column('float') precio : number;
        @Column('int') stock : number;
        @Column('boolean') descontinuado : boolean;
}