export class DataInfo{
    id?: string = ''
    name: string = '';
    description: string = '';
    image: string = '';
    address: string = '';
    social:RedSocial[] = [];
    products: Product[] = [];
}

export class Product{
    name: string = '';
    image: string = '';
}
export class RedSocial{
    name: string = '';
    access: string = '';
    isEnabled: boolean = false;
}

export class BlogInfo{
    address: string = '';
    email: string = '';
    phone: string = '';
}