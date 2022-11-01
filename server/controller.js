const express = require("express");
const terrainRouter = require("./routes/terrain");
class Controller{
    constructor(port){
        this.port = port;
        this.app = express();
        this.config();
        this.routes();
    }
    config(){

    }
    routes(){
        this.app.use("/terrain",terrainRouter);
    }
    start(){
       this.app.listen(this.port,()=>{
               console.log("test demarer !!! ")
       });
    }
}
module.exports = Controller;