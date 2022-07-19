import { Store } from "@modules/store/entities/Store";
import { randomUUID } from "crypto";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  user_dms: string;

  @Column()
  is_admin: boolean;

  @Column()
  is_active: boolean;

  @CreateDateColumn()
  create_at: Date;

  @ManyToOne(() => Store)
  @JoinColumn({ name: "id_store" })
  store: Store;


  @Column({ nullable: true })
  id_store: string;

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
      this.is_active = true;
      this.is_admin = false;
    }
  }

}