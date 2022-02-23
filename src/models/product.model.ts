import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("product")
export class Product {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ type: "decimal" })
    price: number;

    @CreateDateColumn()
    created_at: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}