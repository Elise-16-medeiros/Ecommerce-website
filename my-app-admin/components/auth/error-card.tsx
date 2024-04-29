import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardFooter, CardHeader } from "../ui/card";

export default function ErrorCard() {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
              <HeaderAuth label="Something wrong"/>
            </CardHeader>
            <CardFooter>
                <BackButton label="Back to login"
                href="/auth/login" />
            </CardFooter>

        </Card>
    )
}

type HeaderAuthProps = {
  label: string;
};
function HeaderAuth({ label }: HeaderAuthProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-4">
      <h2 className="text-lg text-muted-foreground">{label}</h2>
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
  