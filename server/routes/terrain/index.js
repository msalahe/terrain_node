const { Router } = require("express");
const terrainDao = require("../../dao/terrain-dao");
const terrainDaoPrisma = require("../../dao/terrain-dao-prisma");

const TerrainsService = require("../../services/terrains-service");
let routes = new Router();
let terrainService = new TerrainsService(terrainDao, terrainDaoPrisma);
routes.get("/", (req, res) => {
   let data = terrainService.list();
   data.then(result => res.send(result));

});
routes.get("/prismaDao", (req, res) => {
   let data = terrainService.listPrisma();
   data.then(result => res.send(result));

});
routes.get("/prismaDao/create", (req, res) => {


   let data = terrainService.addTerrain();
   data.then(result => res.send(result));

});

routes.get("/prismaDao/find/:id", (req, res) => {

   const terrainIdString = req.params.id;
   const terrainId = parseInt(terrainIdString);

   let data = terrainService.findTerrainById(terrainId);
   data.then(result => res.send(result));

});

routes.get("/prismaDao/update/:id", (req, res) => {

   const terrainIdString = req.params.id;
   const terrainId = parseInt(terrainIdString);

   let data = terrainService.updateTerrain(terrainId);
   data.then(result => res.send(result));

});
routes.get("/about", (req, res) => {
   res.send("about");
});
module.exports = routes;
