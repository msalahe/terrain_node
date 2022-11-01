const express = require("express");

class Controller{
    constructor(port){
        this.port = port;
        this.app = express();
        this.config();
    }
    config(){

    }
    start(){
       this.app.listen(this.port,()=>{
               console.log("test demarer !!! ")
       });
    }
}