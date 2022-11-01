const { Router } = require("express");
const terrainDao =  require("../../dao/terrain-dao");
const TerrainsService = require("../../services/terrains-service");
let routes = new Router();
let terrainService = new TerrainsService(terrainDao);
routes.get("/",(req,res) => {
   res.send(terrainService.list());
});

module.exports = routes;
