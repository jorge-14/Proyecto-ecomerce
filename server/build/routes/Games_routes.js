"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class GameRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('GAME'));
    }
}
const gameRoutes = new GameRoutes();
exports.default = gameRoutes.router;
