import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Connection } from './connection.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ConnectionService {
    constructor(
        @InjectRepository(Connection)
        private repository: Repository<Connection>,
    ) {}

    async getall(): Promise<Connection[]> {
        return this.repository.find();
    }

    async create(conn: Connection) {
        return this.repository.save(conn);
    }

    async update(conn: Connection) {
        if (conn.id == undefined) {
            throw new HttpException(
                'Please provide id',
                HttpStatus.BAD_REQUEST,
            );
        }
        const res = await this.repository.findBy({ id: conn.id });
        if (res.length == 0) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
        if (res.length > 1) {
            throw new HttpException(
                'Found more than one entity',
                HttpStatus.BAD_REQUEST,
            );
        }
        const oldEntity = res[0];
        oldEntity.name = conn.name;
        oldEntity.url = conn.url;
        await this.repository.save(oldEntity);
        return 'ok';
    }

    async delete(conn: Connection) {
        await this.repository.remove([conn]);
        return 'ok';
    }
}
