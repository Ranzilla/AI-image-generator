// imports
import * as dotenv from "dotenv";
import OpenAI from "openai"; // OpenAI NodeJS SDK v4
import express from "express";
import cors from "cors";

// allow to access env variables that are defined in .env files
dotenv.config();

// create a configuration Object that requires the API Key
// initialize OpenAI SDK
const openai = new OpenAI({
    apiKey: process.env.OPENAI,
});

// express server
const app = express();

// middleware
app.use(cors());
app.use(express.json()); // only json format requests

// creat endpoint
app.post("/dream", async (req, res) => {
    const prompt = req.body.prompt;
    
    try {
        const aiResponse = await openai.images.generate({
            prompt,
            n: 1,
            size: "1024x1024",
        });
        const image = aiResponse.data[0].url;
        res.send({ image }); // send image back to client
    } catch (error) { // error handling
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
});

// start up server
app.listen(8080, () => console.log("Server is running on port 8080. Make your own Art on http://localhost:8080/dream"));




