import Navbar, { NavLink } from "@/components/Navbar";
import { UserButton } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar>
        <div>Logo</div>
        <div>
          <NavLink href="/admin">Dashboard</NavLink>
          <NavLink href="/admin/collections">Collections</NavLink>
          <NavLink href="/admin/products">Products</NavLink>
          <NavLink href="/admin/orders">Sales</NavLink>
          <NavLink href="/admin/customers">Customers</NavLink>
        </div>
        <div>
          <UserButton />
        </div>
      </Navbar>

      <div className="container my-6">{children}</div>
    </>
  );
}
