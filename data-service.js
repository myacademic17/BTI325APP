let employees = [];
let departments = [];

//const fs = require('fs').promises;
const fs = require('fs');


function initialize() {

    return new Promise((resolve, reject) => {
        fs.readFile('./data/employees.json', 'utf-8', function (error, data) {
            if (error) 
                reject('File cannot be found,')
            else {
                if(!data) 
                    reject('No data found,')
                else {
                    employees = JSON.parse(data)
                    resolve()
                }
            }
        })

        fs.readFile('./data/departments.json', 'utf-8', function (error, data) {
            if (error) 
                reject('File cannot be found,')
            else {
                if(!data) 
                    reject('No data found,')
                else {
                    departments = JSON.parse(data)
                    resolve()
                }
            }
        })
    })   

}

function getAllEmployees() {
    return new Promise((resolve, reject) => {
        if(employees == undefined || employees.length === 0)
            reject('no results returned') 
        else 
            resolve(employees)
    })
}

function getManagers() {
    return new Promise((resolve, reject) => {
        let manager = employees.filter(emp => emp.isManager === true)
        if(manager == undefined || manager.length === 0)
           reject('No results returned') 
        else
            resolve(manager)
    })
}

function getDepartments() {
    return new Promise((resolve, reject) => {
        if(departments == undefined || departments.length === 0)
           reject('No results returned') 
        else
            resolve(departments)
    })
}

module.exports = {initialize, getAllEmployees, getManagers, getDepartments} 