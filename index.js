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
    temperature: 0,
  });

  console.log(response);
}

let prompt = "";

fs.readFile('prompts/generate_character.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data)

})
getResponse("I'm a Dungeon Master for a Dungeon & Dragons Campaign, and I want to integrate original and convincing Non playable Character (Stated as NPC) into my stories with an interresting background. Generate one of those  NPC, you are free to choose any Dungeon & Dragons race, class and statistics that meet the rule requirements. Once done, you'll display the NPC level and it's FORCE, CHARISMA, INTELLIGENCE, WISDOW, CONSTITUTION and DEXTERITY Statistics. After that, i want you to generate a story for this character that is relevant with its statistics. Write this as A .json file containing all the usefull fields to get those information");
