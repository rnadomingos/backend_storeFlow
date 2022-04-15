import { ICreateSegmentDTO } from "../../dtos/ICreateSegmentDTO";
import { getRepository, Repository } from "typeorm";
import { ISegmentRepository } from "../ISegmentRepository";
import { Segment } from "@modules/segment/entities/Segment";



export class SegmentRepositoryPostgres implements ISegmentRepository {

    private repository: Repository<Segment>;

    constructor() {
        this.repository = getRepository(Segment)
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

    findByName(name: string): Promise<Segment> {
        return this.repository.findOne({ name })
    }

    list(): Promise<Segment[]> {
        throw new Error("Method not implemented.");
    }

}