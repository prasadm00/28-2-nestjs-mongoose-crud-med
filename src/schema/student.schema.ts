import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
//Schema: This decorator fixes the class as the schema definition. here whatever name we give this class will appear as the name of the collection. This will map our Student class to the MongoDB Student collection
export class Student {
  @Prop()
  name: string;
  @Prop()
  roleNumber: number;
  @Prop()
  class: number;
  @Prop()
  gender: string;
  @Prop()
  marks: number;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
