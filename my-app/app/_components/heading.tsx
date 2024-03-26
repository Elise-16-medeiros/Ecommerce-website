interface HeadingProps {
  title: string;
  subTitle: string;
}

function Heading(props: HeadingProps) {
  return (
    <div className="m-5">
      <h1 className="text-2xl font-semibold uppercase">{props.title}</h1>
      <h4 className="text-lg font-semibold capitalize text-gray-300">
        {props.subTitle}
      </h4>
    </div>
  );
}

export default Heading;
