'use client'

import { useParams, usePathname } from "next/navigation"
import Link from "next/link";
import { cn } from "@/lib/utils"
export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    const pathname = usePathname();
    const params = useParams();

const routes = [
    {
        href: "/admin/settings",   
        label:"Settings",
        active: pathname === "/admin/settings"
    },
    
];

    return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
{routes.map((route) => (
    <Link key={route.href}
    href={route.href}
        className={cn("text-sm font-medium transition-colors hover:text-primary",
            route.active ? "text-black dark:text-white" : "text-muted-foreground"
        )}>
        {route.label}
    </Link>
))}
    </nav>
    )
}

/* const routes = [
    {
        href: `/${params.storedId}/settings`,   
        label:'Settings',
        active: pathname === `/${params.storedId}/settings`
    },
]; */