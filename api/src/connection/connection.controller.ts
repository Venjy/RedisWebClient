import {
    Controller,
    Get,
    Post,
    Body,
    ValidationPipe,
    Delete,
    Put,
} from '@nestjs/common';
import { Connection } from './connection.entity';
import { ConnectionService } from './connection.service';

@Controller('connection')
export class ConnectionController {
    constructor(private service: ConnectionService) {}

    @Get()
    getAll() {
        return this.service.getall();
    }

    @Post()
    async create(@Body(new ValidationPipe()) body: Connection) {
        return this.service.create(body);
    }

    @Put()
    async update(@Body(new ValidationPipe()) body: Connection) {
        return this.service.update(body);
    }

    @Delete()
    async delete(@Body() body: Connection) {
        return this.service.delete(body);
    }
}
