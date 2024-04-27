
function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-red-main p-4 text-center  dark:text-white flex justify-between sm:text-sm'>
       <h1>Muhammet Erol</h1>
      <p>&copy;  {currentYear} Firebase Movie App</p>
      <p>Powered by Firebase & React</p>
   
    </footer>
  );
}


export default Footer;
