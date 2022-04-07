import { Expose } from "class-transformer";
import { MaxLength, Min, MinLength } from "class-validator";

export class ProductDtoRequest {

    @MinLength(10)
    @MaxLength(100)
    @Expose()
    name: string;

    @MaxLength(200)
    @Expose()
    description: string;

    @Min(5)
    @Expose()
    price: number;
}