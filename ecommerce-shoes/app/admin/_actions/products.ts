"use server";

import { notFound, redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { z } from "zod";
import fs from 'fs/promises';
import prisma from "@/lib/prisma";





 const fileSchema = z.instanceof(File, {message:'Required'})
const imageSchema = fileSchema.refine(
    file => file.size === 0 || file.type.startsWith("image/")
  ) 
  

const addSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.coerce.number().int().min(1),
  image: imageSchema.refine(file => file.size > 0, "Required"), 
  category: z.string().min(1),
  /* tags: z.string().min(1),
  sizes: z.string().min(1),
  colors: z.string().min(1), */

  /* tags: z.array(z.string()),
  sizes: z.array(z.string()),
  colors: z.array(z.string()), */
});



export async function addProduct(prevState:unknown, formData: FormData) {
    const result = addSchema.safeParse(Object.fromEntries(formData.entries()))
    if (result.success === false) {
        return result.error.formErrors.fieldErrors
      }
    
    const data = result.data

    await fs.mkdir("public/products", { recursive: true })
    const image = `/products/${crypto.randomUUID()}-${data.image.name}`
    await fs.writeFile(
      `public${image}`,
      Buffer.from(await data.image.arrayBuffer())
    )

      await prisma.product.create({
        data: {
          isDisposable: false,
            name: data.name,
            description: data.description,
            image: [],
            category: data.category,
            price: data.price,
           /*  tags: data.tags,
            sizes: data.sizes,
            colors: data.colors, */
        }
    })

    
 
     revalidatePath("/")
    revalidatePath("/products")
  
    redirect("/admin/products") 
}
