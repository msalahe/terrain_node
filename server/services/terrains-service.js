class TerrainsService{
    constructor(terrainDao,terrainDaoPrisma){
       this.terrainDao = terrainDao;
       this.terrainDaoPrisma = terrainDaoPrisma ;

    }
     async list(){
        let listTerrain  = await this.terrainDao.list();
        return listTerrain;
    
       
    }
    async listPrisma(){
        let listTerrain  = await this.terrainDaoPrisma.list();
        return listTerrain;
    
       
    }

    async addTerrain(){
        let listTerrain  = await this.terrainDaoPrisma.insert();
        return listTerrain;
    
       
    }
    async updateTerrain(id){
        let resultat  = await this.terrainDaoPrisma.update(id);
        return resultat;
    }
    async findTerrainById(id) {

        let listTerrain  = await this.terrainDaoPrisma.findTerrainById(id);
        return listTerrain;
    

    }

    
}


module.exports = TerrainsService;