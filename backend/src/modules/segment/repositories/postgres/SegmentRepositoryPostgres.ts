import { ICreateSegmentDTO } from "../../../../domain/segment/dto/ICreateSegmentDTO";
import { getRepository, Repository } from "typeorm";
import { ISegmentRepository } from "../../../../domain/segment/repository/ISegmentRepository";
import { Segment } from "@modules/segment/entities/Segment";
import { Store } from "@modules/store/entities/Store";
import { IUpdateSegmentByIdDTO } from "@domain/segment/dto/IUpdateSegmentByIdDTO";



export class SegmentRepositoryPostgres implements ISegmentRepository {

    private repository: Repository<Segment>;
    private storeRepository: Repository<Store>;

    constructor() {
        this.repository = getRepository(Segment)
        this.storeRepository = getRepository(Store)

    }

    async create({
        name,
        description
    }: ICreateSegmentDTO): Promise<void> {
        name = name.toLocaleLowerCase()
        const newSegment = this.repository.create({
            name,
            description
        });
        await this.repository.save(newSegment);
    }

    async findByName(name: string): Promise<Segment> {
        return this.repository.findOne({ name })
    }

    async findById(id: string): Promise<Segment> {
        return this.repository.findOne({ id })
    }

    async list(): Promise<Segment[]> {
        return this.repository.find()
    }

    async updateSegmentById({
        id,
        name,
        description,
        is_active
    }: IUpdateSegmentByIdDTO): Promise<void> {
        name = name.toLocaleLowerCase()
        const newSegment = this.repository.create({
            id,
            name,
            description,
            is_active
        })
        await this.repository.save(newSegment)

    }


    async deleteSegmentById(id: string): Promise<void> {

        await this.repository.delete(id)

    }
}

