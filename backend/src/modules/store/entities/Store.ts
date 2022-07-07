import { Seller } from "@modules/seller/entities/Seller";
import { Segment } from "@modules/segment/entities/Segment";
import { User } from "@modules/user/entities/User";
import { randomUUID } from "crypto";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";

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

  @OneToMany(() => User, user => user.store)
  users: User[];

  @ManyToMany(() => Segment, segment => segment.store)
  @JoinTable()
  segments: Segment[];

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
      this.is_active = true;
    }
  }
}