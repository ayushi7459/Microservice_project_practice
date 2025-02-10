import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") }); 

console.log("Loaded MONGO_URI:", process.env.MONGO_URI);
console.log("Loaded PORT:", process.env.PORT);

const { MONGO_URI, PORT, JWT_SECRET, NODE_ENV, MESSAGE_BROKER_URL } = process.env;

if (!MONGO_URI) {
    throw new Error("❌ MONGO_URI is not defined in .env file");
}

if (!PORT) {
    throw new Error("❌ PORT is not defined in .env file");
}

export default {
    MONGO_URI,
    PORT: Number(PORT),
    JWT_SECRET,
    env: NODE_ENV,
    msgBrokerURL: MESSAGE_BROKER_URL,
};
