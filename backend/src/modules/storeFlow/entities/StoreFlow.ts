import { Prospection } from "@modules/prospection/entities/Prospection";
import { Segment } from "@modules/segment/entities/Segment";
import { Seller } from "@modules/seller/entities/Seller";
import { ServiceType } from "@modules/serviceType/entities/ServiceType";
import { SocialMedia } from "@modules/socialMedia/entities/SocialMedia";
import { Store } from "@modules/store/entities/Store";
import { User } from "@modules/user/entities/User";
import { randomUUID } from "crypto";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity("store_flow")
export class StoreFlow {
  @PrimaryColumn()
  id: string;

  @Column()
  client_name: string;

  @Column()
  client_email: string;

  @Column()
  client_phone: string;

  @Column({ type: 'time' })
  time: string;

  @Column({ type: 'date' })
  date: string;

  @Column()
  test_driver: boolean;

  @Column()
  sold: boolean;

  @CreateDateColumn()
  create_at: Date;

  @ManyToOne(() => Store)
  @JoinColumn({ name: "id_store" })
  store: Store;

  @Column()
  id_store: string;

  @ManyToOne(() => Seller)
  @JoinColumn({ name: "id_seller" })
  seller: Seller;

  @Column()
  id_seller: string;

  @ManyToOne(() => Segment)
  @JoinColumn({ name: "id_store_segment" })
  segment: Seller;

  @Column()
  id_store_segment: string;

  @ManyToOne(() => ServiceType)
  @JoinColumn({ name: "id_type_service" })
  serviceType: ServiceType;

  @Column()
  id_type_service: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "id_user" })
  user: User;

  @Column()
  id_user: string;

  @ManyToOne(() => Prospection)
  @JoinColumn({ name: "id_prospection" })
  prospection: Prospection;

  @Column()
  id_prospection: string;

  @ManyToOne(() => SocialMedia)
  @JoinColumn({ name: "id_social_media" })
  socialMedia: SocialMedia;

  @Column({
    nullable: true
  })
  id_social_media: string

  @Column({
    nullable: true
  })
  comments: string

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}