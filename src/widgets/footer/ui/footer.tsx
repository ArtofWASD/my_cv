import Link from "next/link";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-main-blue grid content-evenly justify-items-center">
      <p className="text-xs items-end text-center text-black">
        Develop and Disigned by <Link href="https://github.com/ArtofWASD">ArtofWASD</Link>
      </p>
      <p className="text-xs text-black">Copyright {year}</p>
    </footer>
  );
};
