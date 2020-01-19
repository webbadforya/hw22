// tslint:disable-next-line:no-var-requires
// const mongoose: any = require('mongoose');
import * as mongoose from 'mongoose';
import { ObjectId } from 'mongoose';

export const teacherSchema: any = new mongoose.Schema({
  name: String,
  age: Number,
  experience: Number,
  studentsId: [ObjectId],
});

// tslint:disable-next-line:interface-name
export interface Teacher {
  name: String;
  age: Number;
  experience: Number;
  studentsId: ObjectId[];
}

export interface ITicket extends Document, Teacher {}
