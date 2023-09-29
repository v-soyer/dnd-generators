import { config } from "dotenv";
config();
import OpenAI from "openai";
import * as fs from 'fs';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function getResponse(promptValue) {

  const response = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: promptValue,
    max_tokens: 2000,
    temperature: 1.5,
  });

  return response;
}

let prompt = "";

fs.readFile('prompts/generate_character.txt', 'utf-8', async (err, data) => {
  if (err) throw err;
  const char = await getResponse(data)

  console.log(char);
});

