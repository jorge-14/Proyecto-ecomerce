import { Router } from 'express';

class GameRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/',(req, res) => res.send('GAME'));
    }
}

const gameRoutes = new GameRoutes();
export default gameRoutes.router;
