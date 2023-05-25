import { Injectable } from '@nestjs/common';
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

    async delete(conn: Connection) {
        await this.repository.remove([conn]);
        return 'ok';
    }
}
