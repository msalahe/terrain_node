const fs  = require('fs');



class JSONReader {
  constructor(){

  }
   read(source){
    return new Promise((resolve,reject) =>{
         fs.readFile(source,"utf-8",(err,data)=>{
             if(err){
                 reject(err);
             }else{
                 resolve(JSON.parse(data));
             }
         });
    }) 
   }
}

module.exports = JSONReader;