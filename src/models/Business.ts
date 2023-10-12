import { Product } from "./Product";
import { RedSocial } from "./RedSocial";

export class Business{
    id?: string = ''
    name: string = '';
    image: string = '';
    address: string = '';
    description: string = '';
    social:RedSocial[] = [];
    products: Product[] = [];
}