/*************************************************************************
* BTI325– Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic
Policy. No part * of this assignment has been copied manually or electronically from any
other source
* (including 3rd party web sites) or distributed to other students.
*
* Name: Humaira Shaikh Student ID: 139877203 Date: 10/09/2022
*
* Your app’s URL (from Cyclic) : 
*
*************************************************************************/ 


const express = require('express')
const path = require('path')
const app = express();
const {initialize} = require('./data-service')

//PORT definition
const PORT = process.env.PORT || 8080;

//onServerStart function
const onServerStart = () => console.log(`Express http server listening on port: ${PORT}`);

//serving static files like css
app.use(express.static(__dirname + '/public'))

//all the routes are defined under routes/routes.js
app.use('/', require('./routes/routes'))

//start the server only if the data was populated to the global array 
initialize()
.then(() => app.listen(PORT, onServerStart))
.catch(e => console.log(e, 'server is offline'))