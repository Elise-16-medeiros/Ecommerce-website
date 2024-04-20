type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="m-5">
      <h1 className="semi-bold text-3xl uppercase text-gray-900">{title}</h1>
      <h3 className="semi-bold text-xl text-gray-300">{subtitle}</h3>
    </div>
  );
}
