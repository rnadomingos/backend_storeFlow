import { randomUUID } from "crypto";

export class Store {
  id: string;
  cnpj: number;
  name: string;
  brand: string;
  is_active: boolean;
  create_at: Date;

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
      this.is_active = true;
    }
  }
}