import { Router } from "express";
import {
  addMessage,
  createConversation,
  getConversation,
  getMessages
} from "../store/chatStore";

const conversationsRouter = Router();

function validationError(message: string): { error: string; message: string } {
  return {
    error: "validation_error",
    message
  };
}

function notFoundError(message: string): { error: string; message: string } {
  return {
    error: "not_found",
    message
  };
}

conversationsRouter.post("/conversations", (req, res) => {
  const { userId, title } = req.body ?? {};

  if (title !== undefined && (typeof title !== "string" || title.trim().length === 0)) {
    return res.status(400).json(validationError("Invalid request body"));
  }

  if (userId !== undefined && typeof userId !== "string") {
    return res.status(400).json(validationError("Invalid request body"));
  }

  const conversation = createConversation({
    userId,
    title
  });

  return res.status(201).json({
    conversationId: conversation.id,
    title: conversation.title,
    createdAt: conversation.createdAt
  });
});

conversationsRouter.post("/conversations/:id/messages", (req, res) => {
  const conversationId = req.params.id;
  const existingConversation = getConversation(conversationId);

  if (!existingConversation) {
    return res.status(404).json(notFoundError("Conversation not found"));
  }

  const { role, content } = req.body ?? {};
  const roleIsValid = role === "user" || role === "assistant";
  const contentIsValid = typeof content === "string" && content.trim().length >= 1 && content.trim().length <= 4000;

  if (!roleIsValid || !contentIsValid) {
    return res.status(400).json(validationError("Invalid request body"));
  }

  const message = addMessage({
    conversationId,
    role,
    content: content.trim()
  });

  return res.status(201).json({
    messageId: message.id,
    conversationId: message.conversationId,
    role: message.role,
    content: message.content,
    createdAt: message.createdAt
  });
});

conversationsRouter.get("/conversations/:id/messages", (req, res) => {
  const conversationId = req.params.id;
  const existingConversation = getConversation(conversationId);

  if (!existingConversation) {
    return res.status(404).json(notFoundError("Conversation not found"));
  }

  const messages = getMessages(conversationId).map((message) => ({
    messageId: message.id,
    role: message.role,
    content: message.content,
    createdAt: message.createdAt
  }));

  return res.status(200).json({
    conversationId,
    messages
  });
});

export { conversationsRouter };
