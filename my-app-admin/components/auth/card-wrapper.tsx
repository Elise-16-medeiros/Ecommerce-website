"use client";

import { LockKeyhole } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
import Link from "next/link";
import { Social } from "./social";

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
        <Social />
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
