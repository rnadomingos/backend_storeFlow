import { Seller } from "@modules/seller/entities/Seller";
import { Segment } from "@modules/segment/entities/Segment";
import { randomUUID } from "crypto";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

@Entity("stores")
export class Store {
  @PrimaryColumn()
  id: string;

  @Column()
  cnpj: string;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  is_active: boolean;

  @CreateDateColumn()
  create_at: Date;

  @OneToMany(() => Seller, seller => seller.store)
  sellers: Seller[];

  @ManyToMany(() => Segment, segment => segment.store)
  segments: Segment[];

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
      this.is_active = true;
    }
  }
}