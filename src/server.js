import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import {
  getContactsController,
  getContactByIdController,
} from './controllers/contacts.js';
export const setupServer = () => {
  const app = express();

  // CORS ayarı: Farklı domainlerden (örneğin frontend'den) gelen isteklere izin verir
  app.use(cors());

  // Pino Logger: Gelen istekleri terminale detaylı şekilde loglar
  app.use(
    pino({
      transport: {
        target: 'pino-pretty', // Logları daha okunaklı yapar
      },
    }),
  );
  app.get('/contacts', getContactsController);
  // JSON verilerini okuyabilmek için
  app.use(express.json());
  app.get('/contacts/:contactId', getContactByIdController);
  // Bulunamayan rotalar (404) için middleware
  app.use((req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  // PORT değişkenini çevresel değişkenlerden (.env) al, yoksa 3000 kullan
  const PORT = process.env.PORT || 3000;

  // Sunucuyu başlat
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
