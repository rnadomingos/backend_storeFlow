import { randomUUID } from "crypto";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("stores")
export class Store {
  @PrimaryColumn()
  id: string;

  @Column()
  cnpj: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  is_active: boolean;

  @CreateDateColumn()
  create_at: Date;

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
      this.is_active = true;
    }
  }
}