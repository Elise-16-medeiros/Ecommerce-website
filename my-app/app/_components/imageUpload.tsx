import { Button } from "@/components/ui/button";
import { url } from "inspector";
import { CirclePlus, Trash2 } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

interface ImageUploadProps {
  value: string[];
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  onRemove,
  value,
}) => {
  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-4">
        {value.map((url) => (
          <div key={url} className="relative h-52 w-52">
            <div className="absolute right-0 top-0 z-10 p-2">
              <Button
                variant="destructive"
                onClick={() => onRemove(url)}
                size="icon"
              >
                <Trash2 />
              </Button>
            </div>
            <Image
              src={url}
              alt="collections"
              fill
              className="rounded-md object-cover"
            />
          </div>
        ))}
      </div>
      <CldUploadWidget uploadPreset="qxqygm2l" onSuccess={onUpload}>
        {({ open }) => {
          return (
            <Button size="sm" onClick={() => open()}>
              <CirclePlus className="mr-2" size={16} />
              Upload
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};
