import { randomUUID } from "node:crypto";
import { sql } from "./db.js";

export class DatabasePostgres {
    //Lista os videos, caso search seja passado, filtra pelo título
    async list(search) {
        let videos

        if (search) {
            videos = await sql`select * from videos where title ilike ${'%'+ search + '%'}`;
        } else {
            videos = await sql`select * from videos`
        }

        return videos
    }

    // cria um novo video
    async create(video) {
        const videoId = randomUUID()
        const { title, description, duration } = video

        await sql`insert into videos (id, title, description, duration) VALUES (${videoId}, ${title}, ${description}, ${duration})`
    }

    // atualiza um video
    async update(id,video) {
        const { title, description, duration } = video
        await sql`update videos set title = ${title}, description = ${description}, duration = ${duration} where id = ${id}`
    }

    // deleta um video
    async delete(id) {
        await sql`delete from videos where id = ${id}`
    }
}