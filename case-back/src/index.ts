import { getStock } from './endpoints/stock';
import { createOrder } from './endpoints/createOrder';
import { getAllProducts } from './endpoints/allProducts';
import { getAllClients } from './endpoints/allClients';
import { createClient } from './endpoints/createClient';
import { ping } from './endpoints/ping';
import express from "express";
import cors from "cors";
import {AddressInfo} from "net";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    }else{
        console.error(`Failure upon starting server.`)
    }
});

app.get("/ping",ping );

//retorna dados dos clientes
app.get("/clients",getAllClients);
//retorna dados dos produtos
app.get("/products",getAllProducts);
//retorna estoque
app.get("/stock",getStock);



//retorna dados dos produtos
app.post("/order",createOrder);
//add client
app.post("/client",createClient);
