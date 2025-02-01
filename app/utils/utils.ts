import {createOpenAI} from '@ai-sdk/openai';
import {generateText} from 'ai';

const openai = createOpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, // lowkey dunno how to put in backend oops
  compatibility: 'strict',

});

export async function GetChatResponse(message: string): Promise<string> {
  const prompt = `
  You are a helpful assistant who reads student sample emails regarding financial aid. Your job is to determine whether or not the content suggests that a student has submitted their financial aid material or not. 
  I want you to give the result in a simple form as such: {[COLLEGE_NAME]: [FINANCIAL_AID_STATUS]}. The text will have multiple emails, so create a JSON array of maps. Use either true or false as the value.
  
  Here are the emails:
  ${message}
  
  Provide the response strictly as a valid JSON array.`;

  try {
    const {text} = await generateText({
      model: openai("gpt-4-turbo"),
      prompt: prompt
    });

    return text;
  } catch (error) {
    console.error("Error generating response:", error);
    return "Sorry, I couldn't generate a response.";
  }
}