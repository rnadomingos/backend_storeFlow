import { SocialMedia } from "@modules/socialMedia/entities/SocialMedia";
import { randomUUID } from "crypto"
import { IProspection } from "domain/prospection/model/IProspection";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity("prospection")

export class Prospection implements IProspection{
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

    @OneToMany(() => SocialMedia, socialMedia => socialMedia.prospection)
    socialMedia: SocialMedia[];

    constructor() {
        if (!this.id) {
            this.id = randomUUID();
            this.is_active = true;
        }
    }
}