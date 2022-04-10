import { randomUUID } from "crypto";

export class Segment {
  id: string;
  name: string;
  description: string;
  is_active: boolean;
  create_at: Date;

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
      this.is_active = true;
    }
  }
}