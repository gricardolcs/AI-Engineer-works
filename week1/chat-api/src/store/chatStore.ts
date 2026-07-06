import { randomUUID } from "crypto";
import type { Conversation, Message, MessageRole } from "../types/chat";

const conversations = new Map<string, Conversation>();
const messagesByConversation = new Map<string, Message[]>();

function createConversation(input: { userId?: string; title?: string }): Conversation {
  const conversation: Conversation = {
    id: randomUUID(),
    userId: input.userId,
    title: input.title?.trim() || "Nueva conversacion",
    createdAt: new Date().toISOString()
  };

  conversations.set(conversation.id, conversation);
  messagesByConversation.set(conversation.id, []);

  return conversation;
}

function getConversation(conversationId: string): Conversation | undefined {
  return conversations.get(conversationId);
}

function addMessage(input: {
  conversationId: string;
  role: MessageRole;
  content: string;
}): Message {
  const message: Message = {
    id: randomUUID(),
    conversationId: input.conversationId,
    role: input.role,
    content: input.content,
    createdAt: new Date().toISOString()
  };

  const existing = messagesByConversation.get(input.conversationId) ?? [];
  existing.push(message);
  messagesByConversation.set(input.conversationId, existing);

  return message;
}

function getMessages(conversationId: string): Message[] {
  return messagesByConversation.get(conversationId) ?? [];
}

export { addMessage, createConversation, getConversation, getMessages };
