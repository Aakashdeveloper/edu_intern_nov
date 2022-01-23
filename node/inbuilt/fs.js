var fs = require('fs');

fs.writeFile('Mycode.txt','My Code File',(err)=>{
    if(err) throw err;
    console.log('File is created')
})