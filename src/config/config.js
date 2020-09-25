import dotenv from "dotenv";

dotenv.config();

const development = {
  MONGODB_URI: process.env.MONGO_URI_DEV,
  host: process.env.DEV_URI,
};
const production = {
  MONGODB_URI: process.env.MONGODB_URI,
};

export { development, production };
