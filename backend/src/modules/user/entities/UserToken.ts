import { User } from "./User";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { randomUUID } from "crypto";


@Entity("users_tokens")
export class UserToken {
  @PrimaryColumn()
  id: string;

  @Column()
  refresh_token: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  expires_token: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = randomUUID()
    }
  }
}
