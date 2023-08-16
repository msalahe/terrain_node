const Controller = require("./server/controller");

let controller = new Controller(8082);
controller.start();