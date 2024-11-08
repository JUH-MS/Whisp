import { Chat } from "./Chat";
import { Message } from "./Message";
import { User } from "./User";
import { File } from "./File";

export class MessageService {
  userId: number;
  chats: Chat[];

  constructor(userId: number, chats: Chat[] = []) {
    this.userId = userId;
    this.chats = chats;
  }

  createChat(participants: User[]): Chat {
    const chat = new Chat(Date.now(), participants);
    this.chats.push(chat);
    return chat;
  }

  joinChat(chat: Chat): void {
    console.log(`User joined chat ${chat.id}`);
  }

  leaveChat(chat: Chat): void {
    console.log(`User left chat ${chat.id}`);
  }

  sendMessage(chat: Chat, message: Message): void {
    chat.sendMessage(message);
  }

  sendFile(chat: Chat, file: File): void {
    console.log(`File sent: ${file.url}`);
  }
}
