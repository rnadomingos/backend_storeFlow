import { SocialMedia } from "@modules/socialMedia/entities/SocialMedia"
import { randomUUID } from "crypto"
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, Unique } from "typeorm";

@Entity("prospection")

export class Prospection {
    @PrimaryColumn()
    id: string;

    @Column(Unique)
    name: string;

    @Column()
    description: string;

    @Column()
    is_active: boolean;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => SocialMedia)
    @JoinColumn({ name: "id_media" })

    @Column()
    id_media: string;

    constructor() {
        if (!this.id) {
            this.id = randomUUID();
            this.is_active = true;
        }
    }
}