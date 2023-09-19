// imports
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
import express from "express";
import cors from "cors";

// allow to access env variables that are defined in .env files
dotenv.config();

// create a configuration Object that requires the API Key
const configuration = new Configuration({
    apiKey: process.env.OPENAI,
})

// initialize OpenAI SDK
const openai = new OpenAIApi(configuration);

// express server
const app = express();

// middleware
app.use(cors());
app.use(express.json()); // only json format requests

// creat endpoint
app.post("/dream", async (req, res) => {
    const prompt = req.body.prompt;
    
    const aiResponse = await openai.createImage({
        prompt,
        n: 1,
        size: "1024x1024",
    });
    const image = aiResponse.data.data[0].url;
    res.send({ image }); // send image back to client
});

// start up server
app.listen(8080, () => console.log("Server is running on port 8080. Make your own Art on http://localhost:8080/dream"));




