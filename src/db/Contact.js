import { Schema, model } from 'mongoose';

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enum: ['work', 'home', 'personal'],
      required: true,
      default: 'personal',
    },
  },
  {
    timestamps: true, // createdAt ve updatedAt alanlarını MongoDB'de otomatik oluşturur
    versionKey: false, // Çıktılarda gereksiz __v alanının görünmesini engeller
  },
);

// Mongoose "Contact" ismini veritabanında otomatik olarak çoğul yapıp "contacts" koleksiyonuna bağlar
export const Contact = model('Contact', contactSchema);
