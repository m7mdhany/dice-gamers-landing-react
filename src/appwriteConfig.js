import { Client, Databases } from "appwrite";

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1") // أو لينك السيرفر بتاعك
  .setProject("68efae13002e1a3c9388"); // حط الـ ID بتاع المشروع

export const databases = new Databases(client);
export { client };
