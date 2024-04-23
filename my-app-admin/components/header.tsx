type HeaderProps = {
    title: string;
    subtitle?: string;
  };
  
  export default function Header({ title, subtitle }: HeaderProps) {
    return (
      <div className="w-full flex flex-col gap-y-4 items-center justify-center">
        <h1 className="semi-bold text-3xl uppercase text-gray-900">{title}</h1>
        <h3 className="semi-bold text-xl text-muted-foreground">{subtitle}</h3>
      </div>
    );
  }
  