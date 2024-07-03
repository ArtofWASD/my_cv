export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-main-blue grid content-evenly justify-items-center">
      <p className="text-md items-end text-center text-black">
        Develop and Disigned by Chunl3e666
      </p>
      <p className="text-md text-black">Copyright {year}</p>
    </footer>
  );
};
