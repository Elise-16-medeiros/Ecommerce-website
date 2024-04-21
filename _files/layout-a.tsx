import { redirect } from "next/navigation";
import { useSession } from "next-auth/react"

import prismadb from "@/lib/prismadb";

export default async function SetupLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const { data: status } = useSession()

    if (!status) {
        redirect('/sign-in');
    }
    const store = await prismadb.store.findFirst({
        where: {
           
        }
    });

    if (store) {
        redirect(`/${store.id}`);
    }

    return (
        <>
            {children}
        </>
    );
}
