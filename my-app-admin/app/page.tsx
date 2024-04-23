'use client'

import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";



export default function Home() {
 
  


    return (
       <main className="fle h-full flex-col items-center justify-center">
<div className="space-y-6">
  <h1 className="text-lg font-semibold">Home page</h1>
  <div>
    <LoginButton>
      <Button size='lg'>Sign in</Button>
    </LoginButton>
  </div>
</div>
       </main>
    )
}
