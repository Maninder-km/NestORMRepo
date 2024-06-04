import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormData } from './entities/form-data.entity';
import { FormDataService } from './form-data.service';
import { FormDataController } from './form-data.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FormData])],
  providers: [FormDataService],
  controllers: [FormDataController],
})
export class FormDataModule {}
