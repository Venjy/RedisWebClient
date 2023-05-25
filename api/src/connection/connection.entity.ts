import { IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Connection {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty({ message: 'name cannot be empty' })
    @IsString({ message: 'name shoule be string' })
    name: string;

    @Column()
    url: string;
}
