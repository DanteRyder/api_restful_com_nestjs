import { ProductController } from './controllers/product.controller';
import { Router } from "express";

const router = Router();

router.post("/product", new ProductController().create);

export { router }