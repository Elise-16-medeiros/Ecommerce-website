import Image from "next/image";
import { Cards } from "../_components/_dashboard-layout/Cards";
import Heading from "../_components/heading";
import { CollectionsForm } from "../_components/_collections/CollectionsForm";

export default function Home() {
  return (
    <main>
      {/*   <Heading title="dashboard" subTitle="overview your store" />
      <Cards /> */}
      <CollectionsForm />
    </main>
  );
}
