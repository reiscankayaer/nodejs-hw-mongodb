import mongoose from 'mongoose';

export const initMongoConnection = async () => {
  try {
    const user = process.env.MONGODB_USER;
    const pwd = process.env.MONGODB_PASSWORD;
    const url = process.env.MONGODB_URL;
    const db = process.env.MONGODB_DB;

    // MongoDB Atlas bağlantı dizesini (URI) oluşturuyoruz
    const DB_URI = `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority`;

    await mongoose.connect(DB_URI);
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.error('MongoDB bağlantısı sırasında bir hata oluştu:', error);
    process.exit(1); // Hata varsa uygulamayı durdur
  }
};
