export class Notification {
  id: string;
  message: any;
  type: string;
  visible: boolean;

  constructor(message, type = "info") {
    this.id = Math.random().toString(36).substring(2, 11);
    this.message = message;
    this.type = type;
    this.visible = true;
  }
}
