class TerrainsService{
    constructor(terrainDao){
       this.terrainDao = terrainDao;
    }
     async list(){
        let listTerrain  = await this.terrainDao.list();
        return listTerrain;
    
       
    }
}


module.exports = TerrainsService;