var fs = require('fs');

/*
fs.writeFile('Mycode.txt','My Code File',(err)=>{
    if(err) throw err;
    console.log('My First Add')
})


fs.appendFile('Mycode1.txt','My Code File \n',(err)=>{
    if(err) throw err;
    console.log('My First Add')
})


fs.readFile('Mycode1.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data)
})
fs.rename('Mycode1.txt','Mytext.txt',(err) =>{
    if(err) throw err;
    console.log('File Renamed')
})
*/
fs.unlink('Mytext.txt',(err) =>{
    if(err) throw err;
    console.log('File Deleting')
})
