// External Dependencies
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

// Global Variables
export const collections: { waifus?: mongoDB.Collection } = {};

// Initialize Connection
export async function connectToDatabase() {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.DB_CONN_STRING as string
  );

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const waifuCollection: mongoDB.Collection = db.collection(
    process.env.GAMES_COLLECTION_NAME as string
  );

  collections.waifus = waifuCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${waifuCollection.collectionName}`
  );
}
