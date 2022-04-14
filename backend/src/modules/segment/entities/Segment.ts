import { Store } from "@modules/store/entities/Store";
import { randomUUID } from "crypto";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";

Entity("Segment")
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

  @ManyToMany(() => Store)
  @JoinTable()
  stores: Store[];

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
      this.is_active = true;
    }
  }
}