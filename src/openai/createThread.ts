import OpenAi from 'openai';
import { Thread } from 'openai/resources/beta/threads/threads.mjs';

export async function createThread(client: OpenAi, message: string): Promise<Thread> {
    const thread = await client.beta.threads.create();

    await client.beta.threads.messages.create(thread.id, {
        role: "user",
        content: "message"
    })

    return thread;
}