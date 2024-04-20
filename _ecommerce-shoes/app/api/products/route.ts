
import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

type CreateProductRequest = {
    name: string;
    price: number;
    description: string;
    category: string;
    tags: string[];
    sizes: string[];
    colors: string[];
    image: string;
    isDisposable: boolean;  
}
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, price, description, category, tags, sizes, colors,image, isDisposable } :CreateProductRequest = req.body;
    const product = await prisma.product.create({
      data: {
        
        name,
        price,
        description,
        category,
        tags,
        sizes,
        colors,
        image:[image],
        isDisposable
      },
    });
    res.status(201).json(product);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}


