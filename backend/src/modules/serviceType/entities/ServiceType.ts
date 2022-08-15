import { randomUUID } from "crypto";
import { IServiceType } from "@domain/serviceType/model/IServiceType";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";


@Entity("service_type")
export class ServiceType implements IServiceType {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    is_active: boolean;

    @CreateDateColumn()
    create_at: Date;

    constructor() {
        if (!this.id) {
            this.id = randomUUID();
            this.is_active = true;
        }
    }
}