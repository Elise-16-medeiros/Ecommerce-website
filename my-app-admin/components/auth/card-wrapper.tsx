"use client";

import { LockKeyhole } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

type CardWrapperProps = {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
};

export default function CardWrapper({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) {
  return (
    <Card className="w-[400px] shadow-sm">
      <CardHeader className="flex items-center justify-center">
        <HeaderAuth label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <div className="flex w-full items-center gap-x-2">
            <Button
              size="default"
              className="w-full"
              variant="outline"
              onClick={() => {}}
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
              onClick={() => {}}
            >
              <Image
                src="/icons8-facebook.svg"
                width={35}
                height={35}
                alt="Logo facebook"
              />
            </Button>
          </div>
        </CardFooter>
      )}

      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
}

type HeaderAuthProps = {
  label: string;
};
function HeaderAuth({ label }: HeaderAuthProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-4">
      <span className="flex items-center gap-x-2">
      <LockKeyhole />
        <h1 className="text-3xl font-semibold">Authentication</h1>
      </span>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

type BackButtonProps = {
  href: string;
  label: string;
};
function BackButton({ href, label }: BackButtonProps) {
  return (
    <Button variant="link" className="w-full font-normal" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
}
