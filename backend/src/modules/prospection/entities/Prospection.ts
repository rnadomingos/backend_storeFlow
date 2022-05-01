import { randomUUID } from "crypto"
import { Column, CreateDateColumn, Entity, PrimaryColumn, Unique } from "typeorm";

@Entity("prospection")

export class Prospection {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    is_active: boolean;

    @CreateDateColumn()
    created_at: Date;


    constructor() {
        if (!this.id) {
            this.id = randomUUID();
            this.is_active = true;
        }
    }
}