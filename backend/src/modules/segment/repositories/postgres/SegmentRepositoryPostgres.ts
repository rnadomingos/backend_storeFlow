import { ICreateSegmentDTO } from "../../dtos/ICreateSegmentDTO";
import { Segment } from "@modules/segment/entities/Segment";
import { getRepository, Repository } from "typeorm";
import { ISegmentRepository } from "../ISegmentRepository";



export class SegmentRepositoryPostgres implements ISegmentRepository {

    private repository: Repository<Segment>;

    constructor() {
        this.repository = getRepository(Segment);
    }

    async create({
        name,
        description
    }: ICreateSegmentDTO): Promise<void> {
        const newSegment = this.repository.create({
            name,
            description
        })
        await this.repository.save(newSegment)

    }

    async findByName(name: string): Promise<Segment> {
        return this.repository.findOne(name)
    }

    async list(): Promise<Segment[]> {
        return this.repository.find()
    }
}