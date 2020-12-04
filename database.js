const { createConnection } = require("net");
const { now } = require('./utils');
const shortid = require('shortid');
const connectionString = 'postgres://oclyoebh:EYkkYZVx_c2mhQ8Qz4w0DVWr9UMqEuaV@john.db.elephantsql.com:5432/oclyoebh'
const pool = new Pool({
  connectionString,
  max: 5,
})

function resetTables() {
  /**
   * return a promise that resolves when the database is successfully reset, and rejects if there was any error.
   */
  return new Promise(function (resolve, reject) {
    client.query(
      `DROP TABLE IF EXISTS customer_table CASCADE;
            CREATE TABLE customer_table(
                customer_id BIGINT PRIMARY KEY CHECK (customer_id between 0 and 9999999999),
                queue_id VARCHAR(10) UNIQUE NOT NULL 
            );
            DROP TABLE IF EXISTS company_table;
          CREATE TABLE company_table(
              company_id BIGINT PRIMARY KEY CHECK (company_id between 0 and 9999999999),
              queue_id VARCHAR(10) UNIQUE NOT NULL,
              status VARCHAR,
              timestamp TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
              duration INT CHECK (duration between 0 and 1441),
               CONSTRAINT fk_queue
                FOREIGN KEY(queue_id) 
                REFERENCES customer_table(queue_id)
                ON DELETE SET NULL
          );`,
      (err) => {
        if (err) {
          reject(err.stack);
        } else {
          resolve("Database Reset!");
        }
      }
    );
  });
}

function closeDatabaseConnections() {
  /**
   * return a promise that resolves when all connection to the database is successfully closed, and rejects if there was any error.
   */
  return new Promise(function (resolve, reject) {
    const connection = new createConnection({
      user: "butbeajc",
      host: "john.db.elephantsql.com",
      database: "butbeajc",
      password: "rMQNj4puKBx13X26hwFCwZ6kelmkAqXW",
      port: 5432,
    });
    connection.end(function (err) {
      if (err) {
        return reject("error:" + err.message);
      }
      resolve("Close the database connection.");
    });
  });
}

module.exports = {
  resetTables,
  closeDatabaseConnections,
};
