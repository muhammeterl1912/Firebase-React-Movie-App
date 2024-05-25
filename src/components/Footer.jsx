function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-red-700 p-4 text-center dark:bg-gray-900 dark:text-white flex justify-between sm:text-sm fixed bottom-0 left-0 w-full">
      <h1>Muhammet Erol</h1>
      <p>&copy; {currentYear} Firebase Movie App</p>
      <p>Powered by Firebase & React</p>
    </footer>
  );
}

export default Footer;
