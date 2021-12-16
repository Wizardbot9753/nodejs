const {createPool} = require('mysql');
const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '#Mysql9701',
    database: 'companydb',
    connectionLimit: 10
})

pool.query(`select * from branch`, (err, result, fields) => {
    if (err) {
         console.log(err);
    }
    return console.log(result)
})