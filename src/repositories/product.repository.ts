import { getRepository } from 'typeorm';
import { Product } from './../models/product.model';

export type ProductRequest = {
    id?: string,
    name: string,
    description: string,
    price: number
}

export class ProductRepository {

    async create({ name, description, price }: ProductRequest): Promise<Product> {
        const repository = getRepository(Product);

        const product = repository.create({
            name,
            description,
            price
        });

        return await repository.save(product);
    }

    async list(): Promise<Product[]> {
        const repository = getRepository(Product);
        return await repository.find();
    }

    async get(id: string) {
        const repository = getRepository(Product);

        const product = await repository.findOne(id);

        if (!product) {
            return new Error("Produto não existe!!!");
        }

        return product;
    }

    async update({ id, name, description, price }: ProductRequest) {
        const repository = getRepository(Product);

        const product = await repository.findOne(id);

        if (!product) {
            return new Error("Produto não existe!!!");
        }

        product.name = name;
        product.description = description;
        product.price = price;

        return await repository.save(product);
    }

    async delete(id: string) {
        const repository = getRepository(Product);

        const product = await repository.findOne(id);

        if (!product) {
            return new Error("Produto não existe!!!");
        }

        return await repository.delete(id);
    }
}