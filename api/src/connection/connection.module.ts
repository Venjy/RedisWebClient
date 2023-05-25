import { Module } from '@nestjs/common';
import { ConnectionController } from './connection.controller';
import { ConnectionService } from './connection.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from './connection.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Connection])],
    controllers: [ConnectionController],
    providers: [ConnectionService],
})
export class ConnectionModule {}
