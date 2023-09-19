import express from 'express';
import {getCrypto} from './modules/fetchdata.js';
const app = express();
app.get("/api/:id", async (req, res) => {
    try {
        const name = req.params.id;
        if (!name) {
            res.status(404).send({ "error": "invalid token" });
        }
        const getCoin = await getCrypto(name);
        if (getCoin != null) {
            res.status(200).send(getCoin);
        }
        else {
            res.status(404).send({ "error": "coin not found" });
        }
    } catch (e) {
        res.send(e)
        return res.status(500).send({ "error": "server not found" })
    }
});
app.get("/api",async (req,res)=>{
    try{
        const {q}=req.query;
        console.log(q);
        if (!q) {
            res.status(404).send({ "error": "invalid token" });
        }
        const getCoin = await getCrypto(q);
        if (getCoin != null) {
            res.status(200).send(getCoin);
        }
        else {
            res.status(404).send({ "error": "coin not found" });
        }
    }catch(e){
    }
});
app.listen(3000, () => {
    console.log("Listening...");
});