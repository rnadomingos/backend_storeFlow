import { ISegment } from "@domain/segment/model/ISegment";
import { Store } from "@modules/store/entities/Store";
import { randomUUID } from "crypto";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";

@Entity("segments")
export class Segment implements ISegment {
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

  @ManyToMany(() => Store, store => store.segments)
  store: Store[];

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
      this.is_active = true;
    }
  }
}