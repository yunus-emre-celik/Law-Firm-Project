const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
        {/* İletişim */}
        <div className="md:flex-1">
          <h3 className="font-bold text-lg">İletişim</h3>
          <p>Email: info@hukuksite.com</p>
          <p>Telefon: +90 123 456 78 90</p>
        </div>

        {/* Telif Hakkı */}
        <div className="md:flex-1">
          <p>© 2024 Hukuk Şablon Sitesi. Tüm hakları saklıdır.</p>
        </div>

        {/* Sosyal Medya */}
        <div className="md:flex-1">
          <h3 className="font-bold text-lg">Sosyal Medya</h3>
          <p>Facebook | Twitter | Instagram</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
