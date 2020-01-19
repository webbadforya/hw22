import { Connection, Document, Model } from 'mongoose';
import { teacherSchema } from './teachers.schema';

export const teacherProvider: any = {
  provide: 'TeacherModelToken',
  useFactory: (connection: Connection): Model<Document> =>
    connection.model('TeacherModel', teacherSchema),
  inject: ['DbConnectionToken'],
};
