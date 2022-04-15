import { Seller } from "@modules/seller/entities/Seller";
import { User } from "@modules/user/entities/User";
import { randomUUID } from "crypto";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";

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

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
      this.is_active = true;
    }
  }
}