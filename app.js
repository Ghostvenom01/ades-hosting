const express = require('express'); // DO NOT DELETE
const cors = require('cors');
const morgan = require('morgan');
const app = express(); // DO NOT DELETE
const { Client } = require("pg");

const database = require('./database');
const { resetTables } = require('./database');

app.use(morgan('dev'));
app.use(cors());

/**
 * =====================================================================
 * ========================== CODE STARTS HERE =========================
 * =====================================================================
 */

/**
 * ========================== SETUP APP =========================
 */

/**
 * JSON Body
 */

/**
 * ========================== RESET API =========================
 */

/**
 * Reset API
 */
app.post('/reset', function (req,res) {
    resetTables();
        if (err) {
            res.status(errors.SERVER_ERROR.status);
            res.send(errors.SERVER_ERROR);
        }
        else{
            res.status(200)
            console.log(result);
        }
})

/**
 * ========================== COMPANY =========================
 */

/**
 * Company: Create Queue
 */

/**
 * Company: Update Queue
 */x

/**
 * Company: Server Available
 */

/**
 * Company: Arrival Rate
 */

/**
 * ========================== CUSTOMER =========================
 */

/**
 * Customer: Join Queue
 */

/**
 * Customer: Check Queue
 */

/**
 * ========================== UTILS =========================
 */

/**
 * 404
 */

/**
 * Error Handler
 */

function tearDown() {
    // DO NOT DELETE
    return database.closeDatabaseConnections();
}

/**
 *  NOTE! DO NOT RUN THE APP IN THIS FILE.
 *
 *  Create a new file (e.g. server.js) which imports app from this file and run it in server.js
 */

module.exports = { app, tearDown }; // DO NOT DELETE
