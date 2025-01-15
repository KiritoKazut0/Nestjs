import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: 'admin',
      database: 'prueba2',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,      
      port: 3306,
    }),
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
