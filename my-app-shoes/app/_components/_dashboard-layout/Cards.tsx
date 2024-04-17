import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, DollarSign, UsersRound } from "lucide-react";

export const Cards = () => {
  return (
    <div className=" m-5 flex flex-col items-center justify-around gap-5 md:flex-row">
      <Card className="w-64 border border-gray-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex justify-between gap-5">
            <p className="text-base font-semibold capitalize text-gray-700">
              total revenue
            </p>
            <DollarSign size={18} className="text-gray-500" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl font-semibold">Card Content</p>
        </CardContent>
      </Card>

      <Card className="w-64 border border-gray-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex justify-between gap-5">
            <p className="text-base font-semibold capitalize text-gray-700">
              total sales
            </p>
            <CreditCard size={18} className="text-gray-500" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl font-semibold">Card Content</p>
        </CardContent>
      </Card>

      <Card className="w-64 border border-gray-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex justify-between gap-5">
            <p className="text-base font-semibold capitalize text-gray-700">
              total customers
            </p>
            <UsersRound size={18} className="text-gray-500" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl font-semibold">Card Content</p>
        </CardContent>
      </Card>
    </div>
  );
};
