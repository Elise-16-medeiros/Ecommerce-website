import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export const Cards = () => {
  return (
    <>
      <Card className="w-80 shadow-xl mt-10">
        <CardHeader>
          <CardTitle className="flex justify-between gap-5">
            <h3>total revenue</h3>
            <DollarSign />
          </CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </>
  );
};
