type MessageRole = "user" | "assistant";

interface Conversation {
  id: string;
  userId?: string;
  title: string;
  createdAt: string;
}

interface Message {
  id: string;
  conversationId: string;
  role: MessageRole;
  content: string;
  createdAt: string;
}

export type { Conversation, Message, MessageRole };
