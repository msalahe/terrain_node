
const { PrismaClient } = require("@prisma/client")
class TerrainDaoPrisma {
    constructor() {
        this.prisma = new PrismaClient;
    }
    async list() {

        return await this.prisma.terrain.findMany();

    }

    async insert() {

        return await this.prisma.terrain.create({
            data: {
                type: "8VS8",
                status: 1,
                numero: 3
            }

        });

    }
    async update() {

        //  return await this.prisma.terrain.findMany();

    }

    async update(id) {

        return await this.prisma.terrain.update({
            where: { idTerrain: id },
               data: {
                type: "12VS12",
            }

        });

    }

    async findTerrainById(id) {

        return await this.prisma.terrain.findMany({
            where: { idTerrain: id }
        });

    }


}

let terrainDaoPrisma = new TerrainDaoPrisma();
module.exports = terrainDaoPrisma;