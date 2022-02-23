import { getRepository } from 'typeorm';
import { Product } from './../models/product.model';

export type ProductRequest = {
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
}