import mongoose from 'mongoose';
import { env } from '../utils/env.js';

export const initMongoConnection = async () => {
  try {
    const connectionString = env('MONGODB_URL');

    await mongoose.connect(connectionString);
    console.log('Mongo connection successfully established!');
  } catch (e) {
    console.log('MongoDB bağlantısı sırasında bir hata oluştu:', e);
    throw e;
  }
};
