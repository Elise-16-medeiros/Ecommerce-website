"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { formatCurrency } from "@/lib/formatters";
import { useState } from "react";
import { addProduct } from "../../_actions/products";
import { useFormState, useFormStatus } from "react-dom";

export default function ProductForm() {
  const [error, action] = useFormState(addProduct,{})
  const [price, setPrice] = useState<number>(0);

  return (
    <form action={action} className="space-y-8">
      <div className="space-y-2 w-96">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" required />
        {error?.name && (<div className="text-destructive">{error.name}</div>)}
      </div>
      <div className="space-y-2 w-96">
        <Label htmlFor="price">Price</Label>
        <Input
          type="number"
          id="price"
          name="price"
          required
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value) as number)}
        />
        <div className="text-muted-forefround">
          {formatCurrency(price || 0)}
        </div>
        {error?.price && (<div className="text-destructive">{error.price}</div>)}
      </div>
      <div className="space-y-2 w-96">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" required />
        {error?.description && (<div className="text-destructive">{error.description}</div>)}
      </div>
      <div className="space-y-2 w-96">
        <Label htmlFor="image">Image</Label>
        <Input type="file" id="image" name="image" required />
        {error?.image && (<div className="text-destructive">{error.image}</div>)}
      </div>

      <div className="grid grid-cols-4 gap-3">
      <div className="space-y-2 w-48">
        <Label htmlFor="category">Category</Label>
        <Input type="text" id="category" name="category" required />
        {error?.category && (<div className="text-destructive">{error.category}</div>)}
      </div>
     {/*  <div className="space-y-2 w-48">
        <Label htmlFor="tags">Tags</Label>
        <Input type="text" id="tags" name="Tags" required />
        {error?.tags && (<div className="text-destructive">{error.tags}</div>)}
      </div>
      <div className="space-y-2 w-48">
        <Label htmlFor="sizes">Sizes</Label>
        <Input type="text" id="sizes" name="sizes" required />
        {error?.sizes && (<div className="text-destructive">{error.sizes}</div>)}
      </div>
      <div className="space-y-2 w-48">
        <Label htmlFor="colors">Colors</Label>
        <Input type="text" id="colors" name="colors" required />
        {error?.colors && (<div className="text-destructive">{error.colors}</div>)}
      </div> */}
      </div>

      <SubmitButton/>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus()
return  <Button type="submit" variant='default' disabled={pending}>{pending ? 'Saving...' : 'Save'}</Button>
}