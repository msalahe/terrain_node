const fs = require("fs");
const  JSONReader = require("../json-reader");
class TerrainDao{
    constructor(){

    }
    async list(){
    let jr = new JSONReader();
      await jr.read("C:/Users/Public/ws_node/services_list_terrain/terrain.json")
     .then((data) => {
        return data;
     }).catch((err) => console.log(err));
    }
}
let terrainDao = new TerrainDao();
module.exports = terrainDao;