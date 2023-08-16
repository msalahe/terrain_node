-- CreateTable
CREATE TABLE `Terrain` (
    `idTerrain` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL,
    `numero` INTEGER NOT NULL,

    PRIMARY KEY (`idTerrain`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
