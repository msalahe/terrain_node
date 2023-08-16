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
        this.app.use((req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            next();
          });
          
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