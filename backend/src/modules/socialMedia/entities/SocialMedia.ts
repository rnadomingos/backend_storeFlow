
import { Prospection } from "@modules/prospection/entities/Prospection";
import { randomUUID } from "crypto"
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";



@Entity("social_media")

export class SocialMedia {
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

    @ManyToOne(() => Prospection)
    @JoinColumn({ name: "id_prospection" })
    prospection: Prospection;

    @Column()
    id_prospection: string;


    constructor() {
        if (!this.id) {
            this.id = randomUUID();
            this.is_active = true;

        }
    }
}