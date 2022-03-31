import { ProductDtoResponse } from './../dtos/responses/product.dto.response';
import { ProductRequest, ProductRepository } from './../repositories/product.repository';

export class ProductService {

    async create(productRequest: ProductRequest) {
        const repository = new ProductRepository();
        const product = await repository.create(productRequest);
        const data: ProductDtoResponse = {
            id: product.id,
            name: product.name,
            price: product.price
        }
        return data
    }

    async list() {
        const repository = new ProductRepository();
        return await repository.list();
    }

    async get(id: string) {
        const repository = new ProductRepository();
        return await repository.get(id);
    }

    async update(productRequest: ProductRequest) {
        const repository = new ProductRepository();
        return await repository.update(productRequest);
    }

    async delete(id: string) {
        const repository = new ProductRepository();
        return await repository.delete(id);
    }
}