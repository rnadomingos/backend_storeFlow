import { ISeller } from "@domain/seller/model/ISeller";
import { Store } from "@modules/store/entities/Store";
import { randomUUID } from "crypto";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity("sellers")
export class Seller implements ISeller{
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  user_dms: string;

  @Column()
  is_active: boolean;

  @CreateDateColumn()
  create_at: Date;

  @ManyToOne(() => Store)
  @JoinColumn({ name: "id_store" })
  store: Store;

  @Column()
  id_store: string;


  constructor() {
    if (!this.id) {
      this.id = randomUUID();
      this.is_active = true;
    }
  }
}