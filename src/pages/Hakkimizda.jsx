import React from "react";

const Hakkimizda = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Hakkımızda</h1>

      {/* Şirket Tanıtımı - Üç Başlık */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Vizyonumuz</h2>
        <p className="mb-6">
          Şirket olarak hukuki alanda en kapsamlı ve güvenilir hizmeti sunma
          misyonuyla hareket ediyoruz. Uzman kadromuzla birlikte, her türlü
          hukuki sorunlarınıza çözüm üretmek için buradayız.
        </p>

        <h2 className="text-3xl font-semibold mb-4">Değerlerimiz</h2>
        <p className="mb-6">
          Güvenilirlik, şeffaflık ve müşteri memnuniyeti bizim için en önemli
          değerlerdir. Müvekkillerimize dürüst ve kapsamlı hizmet sunmak bizim
          birincil önceliğimizdir.
        </p>

        <h2 className="text-3xl font-semibold mb-4">Yaklaşımımız</h2>
        <p>
          Hukuki süreçleri hızlı ve verimli şekilde yürütmek adına,
          müvekkillerimizle sıkı bir işbirliği içerisinde çalışıyoruz. Her vaka
          özelinde en doğru çözümleri sunuyoruz.
        </p>
      </section>

      {/* Avukatlar Tanıtımı */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-8">Avukatlarımız</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Ahmet Yılmaz</h3>
            <p className="text-gray-600 mb-4">
              Kıdemli Avukat & Ticaret Hukuku Uzmanı
            </p>
            <a href="#" className="text-blue-500">
              Daha Fazla
            </a>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Ayşe Demir</h3>
            <p className="text-gray-600 mb-4">Ceza Hukuku Uzmanı</p>
            <a href="#" className="text-blue-500">
              Daha Fazla
            </a>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Mehmet Kaya</h3>
            <p className="text-gray-600 mb-4">Şirketler Hukuku Uzmanı</p>
            <a href="#" className="text-blue-500">
              Daha Fazla
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hakkimizda;
