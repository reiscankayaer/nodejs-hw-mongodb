import 'dotenv/config';
import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';

const bootstrap = async () => {
  // Önce veritabanına bağlan
  await initMongoConnection();

  // Bağlantı başarılı olduktan sonra sunucuyu başlat
  setupServer();
};

bootstrap();
