import { Product, ProductWithID } from './../../types.d';

export const getProduct = async () => {
    const response = await fetch('https://api.jsonbin.io/v3/b/65ce8aba1f5677401f2fe09d', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': '$2a$10$0xARPdxvK/aB2C7TNXsjGuRDT7xBDHpvc.OconIsIiu4AKf7msYLq',
        },
    });
    const data: ProductWithID = await response.json();
    return data;
}

export const addProduct = async (product: Product) => {
    const id = crypto.randomUUID();
    const productWithID = { ...product, id };
    const response = await fetch(import.meta.env.VITE_PRODUCTS_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': 'import.meta.env.VITE_X_MASTER_KEY',
            'x-access-key': 'import.meta.env.VITE_X_ACCESS_KEY',
        },
        body: JSON.stringify(productWithID),
    });
    const data: ProductWithID = await response.json();
    return data;
}