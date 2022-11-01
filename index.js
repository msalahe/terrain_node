const Controller = require("./server/controller");

let controller = new Controller(8080);
controller.start();