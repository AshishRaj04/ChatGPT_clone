import dotenv from "dotenv";
dotenv.config();
const PORT = 4000;
import express, { json } from "express";
import cors from "cors";
const app = express();
app.use(json());
app.use(cors());

const API_KEY = process.env.VITE_SOME_KEY;

app.post("/completion", async(req, res) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: req.body.message },
      ],
      max_tokens: 100,
    }),
  };
  try {
   const response = await fetch("https://api.openai.com/v1/chat/completions", options);
   const data = await response.json();
   res.send(data)
  } catch (err) {
    console.log(err);
  }
});


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
