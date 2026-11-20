import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { env } from './utils/env.js';
import router from './routers/index.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';

export const setupServer = () => {
  const app = express();

  // JSON verilerini okuyabilmek için body-parser
  app.use(express.json());
  7;
  app.use(express.json());
  app.use(cookieParser());
  app.use(router);

  // CORS ayarı: Farklı domainlerden gelen isteklere izin verir
  app.use(cors());

  // Pino Logger: Gelen istekleri terminale detaylı şekilde loglar
  app.use(
    pino({
      transport: {
        target: 'pino-pretty', // Logları daha okunaklı yapar
      },
    }),
  );
  // Rotaları (Router) projeye dahil etme
  app.use(router);


  // Bulunamayan rotalar (404) için middleware
  app.use(notFoundHandler);

  // Genel hata yönetimi (Error Handler) middleware'i (en sonda olmalı)
  app.use(errorHandler);

  // PORT değişkenini çevresel değişkenlerden al, yoksa 3000 kullan
  const PORT = Number(env('PORT', '3000'));

  // Sunucuyu başlat
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
