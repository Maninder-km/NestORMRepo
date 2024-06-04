import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ItemsModule } from './items/items.module';
import { FormDataModule } from './items/form-data.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'nestjs-typeorm',
      autoLoadEntities: true,
      synchronize: true,
      logger: 'debug',
    }),
    DatabaseModule,
    ItemsModule,
    FormDataModule,
  ],
})
export class AppModule {}

