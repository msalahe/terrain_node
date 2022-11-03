const { Router } = require("express");
const terrainDao =  require("../../dao/terrain-dao");
const TerrainsService = require("../../services/terrains-service");
let routes = new Router();
let terrainService = new TerrainsService(terrainDao);
routes.get("/",(req,res) => {
   let data = terrainService.list();
   data.then(result => res.send(result));

});

module.exports = routes;
