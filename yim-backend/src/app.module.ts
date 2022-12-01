/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { TaskModule } from './task/task.module';
import { GroupModule } from './group/group.module';
import { Group } from './group/entities/group.entity';
import { Task } from './task/entities/task.entity';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './role/roles.guard';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '11012544',
      database: 'yim_api',
      entities: [User, Group, Task],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    TaskModule,
    GroupModule,
    AuthModule,
  ],
  controllers: [],
  providers: [{
    provide: APP_GUARD,
    useClass: RolesGuard
  }],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
