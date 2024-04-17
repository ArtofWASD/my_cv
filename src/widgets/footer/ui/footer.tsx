export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-blue-500 grid content-evenly justify-items-center">
      <p className="text-md items-end text-center text-white">
        Develop and Disigned by Chunl3e666
      </p>
      <p className="text-md text-white">Copyright {year}</p>
    </footer>
  );
};
