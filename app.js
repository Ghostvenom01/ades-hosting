const express = require('express'); // DO NOT DELETE
const cors = require('cors');
const morgan = require('morgan');
const app = express(); // DO NOT DELETE

const database = require('./database');

app.use(morgan('dev'));
app.use(cors());

/**
 * =====================================================================
 * ========================== CODE STARTS HERE =========================
 * =====================================================================
 */
const { Client } = require('pg');

/**
 * ========================== SETUP APP =========================
 */

/**
 * JSON Body
 */
const errors = {
    QUEUE_EXISTS: {
        body: { error: 'Queue already exists', code: 'QUEUE_EXISTS' },
        status: 400,
    },
    INVALID_BODY: {
        body: { error: 'Something wrong with your request body', code: 'INVALID_JSON_BODY' },
        status: 400,
    },
    NON_EXISTENT:{
        body: {error: 'Queue not found', code: 'UNKNOWN_QUEUE'},
        status: 404
    },
    ALREADY_IN: {
        body: { error: 'Customer already in Queue', code: 'ALREADY_IN_QUEUE' },
        status: 422,
    },
    WRONG_ID: {
       body: {
            error: "Customer Id should be 10-digits",
            code: "INVALID_JSON_BODY"
        },
        status: 400
    },
    QUEUE_ALREADY:{
        body: { error: 'Queue already exists', code: 'QUEUE_EXISTS' },
        status: 422,
    },
    WRONG_ID2: {
        body: {
             error: "Company Id should be 10-digits",
             code: "INVALID_JSON_BODY"
         },
         status: 400
     },
     SERVER_ERROR: {
        body: { error: 'Unable to establish connection with database', code: 'UNEXPECTED_ERROR' },
        status: 500,
    },
};

/**
 * ========================== RESET API =========================
 */

/**
 * Reset API
 */

/**
 * ========================== COMPANY =========================
 */

/**
 * Company: Create Queue
 */
app.post('company/queue', function (req,res) {
    const client = new Client({
        host: 'john.db.elephantsql.com',
        port: '5432',
        user: 'butbeajc',
        password: 'rMQNj4puKBx13X26hwFCwZ6kelmkAqWX',
        database: 'butbeajc',
    });
    let company_id = req.body.company_id;
    let queue_id = req.body.queue_id;
    client.connect();
    const sql = `Insert into queue(company_id, queue_id) values($1,$2)`;
    client.query(sql, [company_id, queue_id]).then(function (result) {
        client.end();
        if (company_id.length != 10) {
            res.status(errors.WRONG_ID2.status);
            res.send(errors.WRONG_ID2);
        }
        else{
            res.status(201)
            console.log(result);
        }
        
    }).catch(function (error) {
        if (error == 'ER_DUP_ENTRY') {
            res.status(errors.QUEUE_ALREADY.status);
            res.send(errors.QUEUE_ALREADY);
        }else {
            res.status(errors.SERVER_ERROR.status);
            res.send(errors.SERVER_ERROR);
        }
    })
})
/**
 * Company: Update Queue
 */

const error = {
    QUEUE_NOT_FOUND: {
        body: { error: 'Queue ID Not Found', code: 'UNKNOWN_QUEUE' },
        status: 404,
    },
    INVALID_BODY: {
        body: { error: 'Customer ID should be 10-character alphanumeric', code: 'INVALID_QUERY_STRING' },
        status: 400,
    },
    CONNECTION_ERROR: {
        body: { error: 'Unable to establish connection with database', code: 'UNEXPECTED_ERROR' },
        status: 500,
    }
};
const { Client } = require('pg');
const { log } = require('async');
app.put('/company/queue?queue_id=QUEUE12345', function (req, res) {
    const client = new Client({
        host: 'john.db.elephantsql.com',
        port: '5432',
        user: 'butbeajc',
        password: 'rMQNj4puKBx13X26hwFCwZ6kelmkAqXW',
        database: 'butbeajc',
    });
    client.connect();
    const sql = ` 'Update customer_table Set customer_id = $1, where queue_id = $2'`;

    if (res = ! /^[a-z0-9]+$/) throw errors.INVALID_BODY;
    res.send(status.INVALID_BODY);
    client
        .query(sql, [customer_id, queue_id])
        .then(function (response) {
            return res.status(200).send("OK");
            /*  if (!err) {
                 res.status(200).send("Success");
             } */

        })

        .catch(function (error) {
            console.log(error)
            if (!response.status) throw errors.QUEUE_NOT_FOUND
            res.send(status.QUEUE_NOT_FOUND);

        });
},
);

/**
 * Company: Server Available
 */

const error = {
    QUEUE_NOT_FOUND: {
        body: { error: 'Queue ID Not Found', code: 'UNKNOWN_QUEUE' },
        status: 404,
    },
    INVALID_BODY: {
        body: { error: 'Customer ID should be 10-character alphanumeric', code: 'INVALID_QUERY_STRING' },
        status: 400,
    },
    CONNECTION_ERROR: {
        body: { error: 'Unable to establish connection with database', code: 'UNEXPECTED_ERROR' },
        status: 500,
    }
};
const { Client } = require('pg');
const { log } = require('async');
app.put('/company/queue?queue_id=QUEUE12345', function (req, res) {
    const client = new Client({
        host: 'john.db.elephantsql.com',
        port: '5432',
        user: 'butbeajc',
        password: 'rMQNj4puKBx13X26hwFCwZ6kelmkAqXW',
        database: 'butbeajc',
    });
    client.connect();
    const sql = ` 'select customer_table Set customer_id = $1, where queue_id = $2'`;

    if (res = ! /^[a-z0-9]+$/) throw errors.INVALID_BODY;
    res.send(status.INVALID_BODY);
    client
        .query(sql, [customer_id, queue_id])
        .then(function (response) {
            var x = sql = '`select queue_id from customer_table`'

            return res.status(200).send("OK"), console.log("queue_id:" + queue_id);  
            /*  if (!err) {
                 res.status(200).send("Success");
             } */

        })
        .then(function (response) {
            
            var x = sql = '`select customer_id from customer_table`'
            return res.status(200).send("OK"), console.log("customer_id:" + customer_id);  
            /*  if (!err) {
                 res.status(200).send("Success");
             } */

        })

        .catch(function (error) {
            console.log(error)
            if (!response.status) throw errors.QUEUE_NOT_FOUND
            res.send(status.QUEUE_NOT_FOUND);

        });
},
);
/**
 * Company: Arrival Rate
 */

/**
 * ========================== CUSTOMER =========================
 */

/**
 * Customer: Join Queue
 */
app.post('customer/queue', function (req,res) {
    const client = new Client({
        host: 'john.db.elephantsql.com',
        port: '5432',
        user: 'butbeajc',
        password: 'rMQNj4puKBx13X26hwFCwZ6kelmkAqWX',
        database: 'butbeajc',
    });
    let customer_id = req.body.customer_id;
    let queue_id = req.body.queue_id;
    client.connect();
    const sql = `Insert into queue(customer_id, queue_id) values($1,$2)`;
    client.query(sql, [customer_id, queue_id]).then(function (result) {
        client.end();
        if (customer_id.lengths != 10) {
            res.status(errors.WRONG_ID.status);
            res.send(errors.WRONG_ID)
        }
        else{
            res.status(201);
            res.send(result);
        }
    }).catch(function (error) {
        if (error == 'ER_BAD_FIELD_ERROR') {
            res.status(errors.ALREADY_IN.status);
            res.send(errors.ALREADY_IN);
        } 
        else{
            res.status(errors.SERVER_ERROR.status);
            res.send(errors.SERVER_ERROR);
        }
    })
})
    

/**
 * Customer: Check Queue
 */
app.get('customer/queue', function (res, req) { 
    const client = new Client({
        host: 'john.db.elephantsql.com',
        port: '5432',
        user: 'butbeajc',
        password: 'rMQNj4puKBx13X26hwFCwZ6kelmkAqWX',
        database: 'butbeajc',
    });
    let customer_id = req.body.customer_id;
    let queue_id = req.body.queue_id;
    client.connect();
    const sql = `SELECT * from queue`; //Do for loop to find position for the ahead
    client.query(sql, [customer_id, queue_id]).then(function (result) {
        const customerID = [];
            for (let i = 0; i < result.rows.length; i++) {
                customerID.push(result.rows[i].customer_id);
            }
        let a = customerID.indexOf(customer_id);
        let ahead = 0
        for (let i = 0; i < customerID.length; i++) {
            ahead = ahead + 1
            if (customerID[i] == customerID[a]) {
                break
            }
        }
        ahead = ahead - 1
        console.log(ahead)
        
    }).catch(function (error) {
        console.log(error)
        
    }) 
    client.end();
})
  

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
