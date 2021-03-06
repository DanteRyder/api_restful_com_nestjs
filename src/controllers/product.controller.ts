import { ProductDtoRequest } from './../dtos/requests/product.dto.request';
import { ProductService } from './../services/product.service';
import { Request, Response } from "express";
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

export class ProductController {

    async create(request: Request, response: Response) {
        const data = plainToClass(ProductDtoRequest, request.body);

        validate(data, { skipMissingProperties: true }).then(async errors => {
            if (errors.length > 0) {
                let errorTexts = Array();
                for (const errorItem of errors) {
                    errorTexts = errorTexts.concat(errorItem.constraints);
                }
                return response.status(400).send(errorTexts);
            }
            else {
                const service = new ProductService();

                const result = await service.create(data);

                if (result instanceof Error) {
                    return response.status(400).json(result.message);
                }
                else {
                    return response.json(result);
                }
            }
        })
    }

    async list(request: Request, response: Response) {
        const service = new ProductService();

        const result = await service.list();

        return response.json(result);
    }

    async get(request: Request, response: Response) {
        const { id } = request.params;

        const service = new ProductService();

        const result = await service.get(id);

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        else {
            return response.json(result);
        }
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { name, description, price } = request.body;

        const service = new ProductService();

        const result = await service.update({ id, name, description, price });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        else {
            return response.json(result);
        }
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;

        const service = new ProductService();

        const result = await service.delete(id);

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        else {
            return response.status(204).end();
        }
    }
}