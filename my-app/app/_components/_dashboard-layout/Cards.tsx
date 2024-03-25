import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, DollarSign, UsersRound } from "lucide-react";

export const Cards = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-5 md:flex-row">
      <Card className="w-64 shadow-xl">
        <CardHeader>
          <CardTitle className="flex justify-between gap-5 text-lg">
            <p className="text-gray-700 capitalize">total revenue</p>
            <DollarSign className="text-gray-400" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl font-semibold">Card Content</p>
        </CardContent>
      </Card>

      <Card className="w-64 shadow-xl">
        <CardHeader>
          <CardTitle className="flex justify-between gap-5 text-lg">
            <p className="text-gray-700 capitalize">total sales</p>
            <CreditCard className="text-gray-400" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl font-semibold">Card Content</p>
        </CardContent>
      </Card>

      <Card className="w-64 shadow-xl">
        <CardHeader>
          <CardTitle className="flex justify-between gap-5 text-lg">
            <p className="text-gray-700 capitalize">total customers</p>
            <UsersRound className="text-gray-400" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl font-semibold">Card Content</p>
        </CardContent>
      </Card>
    </div>
  );
};
