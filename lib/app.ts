import express from 'express';
import {Request, Response} from 'express';
import path from 'path';
import { request } from 'http';
import hbs from 'hbs';

class App {
    app: express.Application;

    constructor(){
        this.app = express();
        this.routes();
        this.config();
    }

    routes(): void{
        const router = express.Router(); 

        router.get('/', (req:Request, res:Response) => {
            res.send("<h1>Hello world</h2>");
            res.end();
            
      })

        router.get('/about', (req:Request, res:Response) => {
            res.render('about');
            
        })
            router.get('/contact', (req:Request, res:Response) => {
                res.render('contact', {
                    phoneNumber: '069069069',
                    email: 'mail@mail.com'
                });
      })


        this.app.use('/', router);

    }
    
    config():void{
        this.app.use(express.static(path.join(__dirname, "../public")));

        hbs.registerPartials(path.join(__dirname, '../views/partials'));
        this.app.set('view engine', 'hbs');
        this.app.set('views', path.join(__dirname, '../views'))
    }
}

export default new App().app;


