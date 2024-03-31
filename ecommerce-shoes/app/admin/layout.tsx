import Navbar, { NavLink } from "@/components/Navbar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar>
        <NavLink href="/admin">Dashboard</NavLink>
        <NavLink href="/admin/collections">Collections</NavLink>
        <NavLink href="/admin/products">Products</NavLink>
        <NavLink href="/admin/orders">Sales</NavLink>
        <NavLink href="/admin/customers">Customers</NavLink>
        <NavLink href="/admin/settings">Login</NavLink>
      </Navbar>

      <div className="container my-6">{children}</div>
    </>
  );
}
