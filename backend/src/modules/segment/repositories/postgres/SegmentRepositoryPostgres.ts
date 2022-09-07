import { ICreateSegmentDTO } from "../../../../domain/segment/dto/ICreateSegmentDTO";
import { getRepository, ILike, Repository } from "typeorm";
import { ISegmentRepository } from "../../../../domain/segment/repository/ISegmentRepository";
import { Segment } from "@modules/segment/entities/Segment";
import { Store } from "@modules/store/entities/Store";
import { IUpdateDTO } from "@domain/segment/dto/IUpdateSegmentDTO";
import { ISegment } from "@domain/segment/model/ISegment";



export class SegmentRepositoryPostgres implements ISegmentRepository {

    private repository: Repository<Segment>;

    constructor() {
        this.repository = getRepository(Segment)
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

    async findByName(name: string): Promise<ISegment> {
        return this.repository.findOne({ name })
    }

    async findById(id: string): Promise<ISegment> {
        return this.repository.findOne({ id })
    }

    async list(args?: any, page?: number, rowsPerPage?: number): Promise<ISegment[]> {
        return this.repository.find({
            where: [
                {name: ILike(`%${args}%`)},
                {description: ILike(`%${args}%`)}
            ],
            skip: rowsPerPage * (page-1),
            take: rowsPerPage
        })
    }

    async update({
        id,
        name,
        description,
        is_active
    }: IUpdateDTO): Promise<void> {
        name = name.toLocaleLowerCase()
        const newSegment = this.repository.create({
            id,
            name,
            description,
            is_active
        })
        await this.repository.save(newSegment)

    }


    async delete(id: string): Promise<void> {

        await this.repository.delete(id)

    }
}

