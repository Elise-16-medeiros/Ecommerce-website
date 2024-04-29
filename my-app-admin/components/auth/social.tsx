'use client'

import Image from "next/image";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";


export const Social = () => {
    const onClick = (provider: "google" | "facebook") => {
signIn(provider, {
    callbackUrl: DEFAULT_LOGIN_REDIRECT
})
    }

    return (
          <div className="flex w-full items-center gap-x-2">
            <Button
              size="default"
              className="w-full"
              variant="outline"
              onClick={() => onClick("google")}
            >
              <Image
                src="/icons8-google.svg"
                width={30}
                height={30}
                alt="Logo google"
              />
            </Button>
            <Button
              size="default"
              className="w-full"
              variant="outline"
              onClick={() => onClick("facebook")}
            >
              <Image
                src="/icons8-facebook.svg"
                width={35}
                height={35}
                alt="Logo facebook"
              />
            </Button>
          </div>
    )
}
