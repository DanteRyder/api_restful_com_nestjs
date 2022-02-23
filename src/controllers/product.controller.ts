import { ProductService } from './../services/product.service';
import { Request, Response } from "express";

export class ProductController {

    async create(request: Request, response: Response) {
        const { name, description, price } = request.body;

        const service = new ProductService();

        const result = await service.create({ name, description, price });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        else {
            return response.json(result);
        }
    }
}