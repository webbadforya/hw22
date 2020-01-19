import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Teacher } from './teachers.schema';
import { TeacherService } from './teachers.service';

@Controller('teacher')
export class TeacherController {
  constructor(public teacherService: TeacherService) {}
  @Get('/all')
  async getStudent() {
    return await this.teacherService.GetAllTeachers();
  }

  @Post('')
  async createTeacher(@Body() body: Teacher) {
    return await this.teacherService.createTeacher(body);
  }
}
