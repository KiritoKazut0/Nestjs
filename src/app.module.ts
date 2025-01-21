import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { AuthMiddleware } from './middleware/authMiddleware';

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
    UsersModule,
    AuthModule],
  controllers: [],
  providers: [],
})

export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer){
      consumer
        .apply(AuthMiddleware)
        .forRoutes({path: 'users', method: RequestMethod.POST})
    }
}
