import { ProductRequest, ProductRepository } from './../repositories/product.repository';

export class ProductService {

    async create(productRequest: ProductRequest) {
        const repository = new ProductRepository();
        return await repository.create(productRequest);
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