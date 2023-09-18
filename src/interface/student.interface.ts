import { Document } from 'mongoose';

// interface : In other words, an interface defines the syntax that any entity must adhere to.
// readonly : be modified in any case after they are initialized with some fixed value.
export interface IStudent extends Document {
  readonly name: string;
  readonly roleName: number;
}
