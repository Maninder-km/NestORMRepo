import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FormData } from './entities/form-data.entity';
import { CreateFormDataDto } from './dto/create-form-data.dto';

@Injectable()
export class FormDataService {
  constructor(
    @InjectRepository(FormData)
    private formDataRepository: Repository<FormData>,
  ) {}

  create(createFormDataDto: CreateFormDataDto): Promise<FormData> {
    const formData = this.formDataRepository.create(createFormDataDto);
    return this.formDataRepository.save(formData);
  }

  findAll(): Promise<FormData[]> {
    return this.formDataRepository.find();
  }
}
