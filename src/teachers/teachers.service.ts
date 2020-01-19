import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { Teacher } from './teachers.schema';

@Injectable()
export class TeacherService {
  constructor(
    @Inject('TeacherModelToken') private readonly teacherModel: Model<Teacher>,
  ) {}
  async createTeacher(teacher: Teacher) {
    return await this.teacherModel.create(teacher);
  }
  async GetAllTeachers() {
    return await this.teacherModel.find();
  }
}
