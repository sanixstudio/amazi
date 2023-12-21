import Image from "next/image";

const Empty = ({ label }: { label: string }) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <Image
        src="/images/wait.jpg"
        alt="Empty"
        width={400}
        height={400}
        className="object-contain min-w-[350px]"
      />
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};

export default Empty;
