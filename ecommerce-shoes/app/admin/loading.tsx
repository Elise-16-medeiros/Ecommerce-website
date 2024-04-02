import { LoaderCircle } from "lucide-react";

export default function AdminLoading() {
  return (
    <div className="flex justify-center">
      <LoaderCircle size={24} className="animate-spin" />
    </div>
  );
}
