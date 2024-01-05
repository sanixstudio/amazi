import Image from "next/image";

const Spinner = () => {
  return (
    <Image
      src="/images/logo.png"
      width={100}
      height={100}
      alt="loading spinner"
      className="animate-spin"
    />
  );
};

export default Spinner;
