import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TeacherController } from './teachers.controller';
import { TeacherService } from './teachers.service';
import { teacherProvider } from './teachers.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [TeacherController],
  providers: [TeacherService, teacherProvider],
})
export class teacherModule {}
