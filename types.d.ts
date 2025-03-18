import { Connection } from "mongoose"  // A Connection object is used to interact with the database (e.g., opening/closing connections, running queries, and handling transactions).
declare global {
  var mongoose: { 
    conn: Connection | null // A Connection object that represents the default connection to the database.
    promise : Promise<Connection> | null // A Promise that resolves to a Connection (or null if no connection promise exists).
  }
}

export {};