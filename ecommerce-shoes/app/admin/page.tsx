import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCurrency, formatNumber } from "@/lib/formatters";
import prisma from "@/lib/prisma";

async function getSalesData() {
  const data = await prisma.order.aggregate({
    _sum: { totalAmount: true },
    _count: true,
  });

  return {
    amount: data._sum.totalAmount || 0,
    numberOfSales: data._count,
  };
}

async function getUserData() {
  const [userCount, orderData] = await Promise.all([
    prisma.user.count(),
    prisma.order.aggregate({
      _sum: { totalAmount: true },
    }),
  ]);
  return {
    userCount,
    avarageValuePerUser:
      userCount === 0 ? 0 : (orderData._sum.totalAmount || 0) / userCount / 100,
  };
}

async function getProductData() {
  const [activeCount, inactiveCount] = await Promise.all([
    prisma.product.count({ where: { isDisposable: true } }),
    prisma.product.count({ where: { isDisposable: false } }),
  ]);

  return { activeCount, inactiveCount };
}

export default async function AdminDashboard() {
  const [salesData, userData, productoData] = await Promise.all([
    getSalesData(),
    getUserData(),
    getProductData(),
  ]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <DashboardCard
          title="Sales"
          subtitle={`${formatNumber(salesData.numberOfSales)} Orders`}
          body={formatCurrency(salesData.amount)}
        />
        <DashboardCard
          title="Customers"
          subtitle={`${formatCurrency(userData.avarageValuePerUser)} Average Value`}
          body={formatNumber(userData.userCount)}
        />
        <DashboardCard
          title="Products"
          subtitle={`${formatNumber(productoData.inactiveCount)} Inactive`}
          body={formatNumber(productoData.activeCount)}
        />
      </div>
    </>
  );
}

type DashboardCardProps = {
  title: string;
  subtitle: string;
  body: string;
};

function DashboardCard({ title, subtitle, body }: DashboardCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
    </Card>
  );
}
