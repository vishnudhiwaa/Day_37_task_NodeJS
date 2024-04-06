
const { response } = require("express");
const fs = require("fs");



var revil = [];

getDateString = () => {
    const monthNamelist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const date = new Date();
    let d = weekday[date.getDay()];
    var currentTimeInSeconds = Math.floor(Date.now() / 1000);
    const year = date.getFullYear();
    let month = `${date.getMonth()}`.padStart(2, '0');
    // let temp1 = month.split('');
    // let n = [];
    // for(let i = 0; i < temp1.length; i++ ){
    //     if(temp1[i]!=0){
    //         n.push(temp1[i]);
    //     }
    // }
    // let m = monthNamelist[n.join('')];
    month = month.split('').map(Number);
    month[month.length-1] = month[month.length-1]+1;
    month[1]= month[1].toString();
    month= month[0]+month[1];
    let m = monthNamelist[month-1];
    const day = `${date.getDate()}`.padStart(2, '0');
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    return `${year}(year), ${m}(${month})(month) ${day}(date), Time = ${hour}(h) ${minutes}(m) ${seconds}(s), ${d}(day)`
}

var data = getDateString();

const date = new Date();
let time = date.getTime();

const express = require("express");
const app = express();
const PORT = 3000;

fs.writeFile(`./files/Timestamp = ${time} && Date = ${data}`, `Timestamp = ${time} && Date = ${data}`,
    (err) => console.log("hi there project success"));
fs.writeFile(`writeMe`, `${time}`,
    (err) => console.log("The writeMe is updated."));
fs.readFile(`./files/${data}`, "utf-8", (err, data) => {
    console.log(data);
    app.get("/", (request, response) => {
        response.send(data);
    });
    app.listen(PORT, () => console.log("App is started", PORT));
}
);

const Store = './files';

fs.readdir(Store, (err, files) => {

    files.forEach(file => {
        console.log(file);
        revil.push(file);
    });

});

app.get("/files", (request, response) => {
    response.send(revil);
});
