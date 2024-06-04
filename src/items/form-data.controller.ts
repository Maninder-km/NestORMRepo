import { Controller, Post, Body, Get } from '@nestjs/common';
import { FormDataService } from './form-data.service';
import { CreateFormDataDto } from './dto/create-form-data.dto';

@Controller('form-data')
export class FormDataController {
  constructor(private readonly formDataService: FormDataService) {}

  @Post()
  create(@Body() createFormDataDto: CreateFormDataDto) {
    return this.formDataService.create(createFormDataDto);
  }

  @Get()
  findAll() {
    return this.formDataService.findAll();
  }
}
