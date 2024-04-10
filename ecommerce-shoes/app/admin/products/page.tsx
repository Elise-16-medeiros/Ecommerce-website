import PageHeader from "../_components/PageHeader";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/lib/prisma";
import { CheckCircle2, MoreVertical, XCircle } from "lucide-react";
import { formatCurrency, formatNumber } from "@/lib/formatters";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";


export default function AdminProductsPage() {
  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <PageHeader title="products" />
        <Button asChild>
          <Link href="/admin/products/new">Add Product</Link>
        </Button>
      </div>
      <ProductsTable />
    </>
  );
}


async function ProductsTable() {

  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      price: true,
      isDisposable: true,
      _count: {select: { orders: true }}
    },
    orderBy: { name: 'asc'}
  })

if(products.length === 0) return <p>Products not found</p>

  

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-0">
            <span className="sr-only">Available For Buy</span>
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Orders</TableHead>
          <TableHead className="w-0">
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map(product =>
          <TableRow key={product.id}>
            <TableCell>
              {product.isDisposable ? (
              <>
              <span className="sr-only">Available</span>
              <CheckCircle2/>
              </>
            ) : (
            <>
             <span className="sr-only">Unavailable</span>
            <XCircle/>
            </>
            )}
            </TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{formatCurrency(product.price)}</TableCell>
            <TableCell>{formatNumber(product._count.orders)}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger>
                <MoreVertical/>
              <span className="sr-only">Actions</span>

                </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <a download href={`/admin/products/${product.id}/download`}>Download</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/admin/products/${product.id}./edit`}>Edit</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>

        )}
      </TableBody>
    </Table>
  );
}
