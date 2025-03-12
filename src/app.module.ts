import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistrationModule } from './registration/registration.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 4000,
      username: 'postgres',
      password: '188227',
      database: 'Demo12',
      autoLoadEntities: true,
      synchronize: true,
    }),
    RegistrationModule,
    AuthModule,
  ],
})
export class AppModule {}
