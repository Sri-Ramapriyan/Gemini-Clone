// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
  GoogleGenAI,
} from '@google/genai';
const apiKey="AIzaSyByZv-YvBjDFRTim5fiTyBMNMduxkF4E7Y"
async function main(prompt) {
  const ai = new GoogleGenAI({
    apiKey:apiKey,
  });
  const config = {
  };
  const model = 'gemini-2.0-flash-lite';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  let finalResponse = '';
  for await (const chunk of response) {
    finalResponse+=chunk.text;
    console.log(chunk.text);
  }
  return finalResponse;
  

}

export default main;
