/* eslint-disable prettier/prettier */
import { Mongoose } from 'mongoose';
import { UserSchema } from '../schemas/user.schema';

export const usersProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (mongoose: Mongoose) =>
      mongoose.model('Users', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
