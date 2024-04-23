'use client'

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function Page() {
    const router = useRouter();

    const handleClick = () => {
      router.push('/admin');
    };
  


    return (
       <Button className="m-4"
       onClick={handleClick}>Admin</Button>
    )
}
