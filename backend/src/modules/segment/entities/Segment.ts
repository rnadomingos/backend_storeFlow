import { randomUUID } from "crypto";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("segments")
export class Segment {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

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