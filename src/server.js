import express from 'express';
import {routes} from "./routes";
import {db} from "./db";
const app = express();
routes.forEach(route=>{
 app[route.method](route.path,route.handler)
})
const start = async () =>{
    await db.connect('mongodb://localhost:27017');
    await app.listen(8080);
        console.log("server is listening on 8080");
       }
       start();


