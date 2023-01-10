// mongodb
import { MongoClient } from "mongodb";
import { MONGO_URI } from "./environment";

export const client = new MongoClient(MONGO_URI!);
export const db = client.db();
