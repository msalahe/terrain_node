class TerrainsService{
    constructor(terrainDao){
       this.terrainDao = terrainDao;
    }
    async list(){
        let listTerrain  = await this.terrainDao.list();
        console.log(listTerrain);
       return listTerrain;
    }
}


module.exports = TerrainsService;