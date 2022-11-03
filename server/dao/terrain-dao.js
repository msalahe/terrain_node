const fs = require("fs");
const  JSONReader = require("../json-reader");
class TerrainDao{
    constructor(){

    }
    async list(){
    let jr = new JSONReader();
       let data = await jr.read("C:/Users/Public/ws_node/services_list_terrain/terrain.json");
   
        return data;
     
    }
}
let terrainDao = new TerrainDao();
module.exports = terrainDao;