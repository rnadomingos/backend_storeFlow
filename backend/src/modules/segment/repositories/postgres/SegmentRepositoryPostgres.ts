import { ICreateSegmentDTO } from "../../dtos/ICreateSegmentDTO";
import { getRepository, Repository } from "typeorm";
import { ISegmentRepository } from "../ISegmentRepository";
import { Segment } from "@modules/segment/entities/Segment";
import { Segment } from "@modules/segment/entities/Segment";
import { Store } from "@modules/store/entities/Store";
import { getRepository, Repository } from "typeorm";
import { ISegmentRepository } from "../ISegmentRepository";
import { IJoinSegmentStoreDTO } from "@modules/segment/dtos/IJoinSegmentStoreDTO";
import { IUpdateSegmentByIdDTO } from "@modules/segment/dtos/IUpdateSegmentByIdDTO";



export class SegmentRepositoryPostgres implements ISegmentRepository {

    private repository: Repository<Segment>;
    private storeRepository: Repository<Store>;

    constructor() {
        this.repository = getRepository(Segment)
        this.repository = getRepository(Segment);
        this.storeRepository = getRepository(Store)

    }

    async create({
        name,
        description
    }: ICreateSegmentDTO): Promise<void> {
        const newSegment = this.repository.create({
            name,
            description
        });
        await this.repository.save(newSegment);
    }

    async findByName(name: string): Promise<Segment> {
        return this.repository.findOne({ name })
    }

    list(): Promise<Segment[]> {
        throw new Error("Method not implemented.");
    }

    async joinSegmentStore({
        segmentId,
        storeId
    }: IJoinSegmentStoreDTO): Promise<void> {

        await this.repository.createQueryBuilder()
            .relation(Segment, "store")
            .of(segmentId)
            .add(storeId)
    }

    async getSegmentByStoreId(id: string): Promise<Store[]> {
        return await this.storeRepository.find({
            where: {
                id
            },
            relations: ["segments"]
        })
    }

    async updateSegmentById({
        id,
        name,
        description,
        is_active
    }: IUpdateSegmentByIdDTO): Promise<void> {
        const newSegment = this.repository.create({
            id,
            name,
            description,
            is_active
        })
        await this.repository.save(newSegment)

    }
}

