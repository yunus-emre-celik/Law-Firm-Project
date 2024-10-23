import React from "react";

const servicesData = [
  {
    id: 1,
    title: "Sözleşme Hazırlama",
    description:
      "Profesyonel sözleşme şablonları ile hukuki güvenliğinizi artırın.",
  },
  {
    id: 2,
    title: "Danışmanlık Hizmeti",
    description: "Hukuk alanında uzman ekibimizle danışmanlık hizmeti alın.",
  },
  {
    id: 3,
    title: "Vasiyetname Oluşturma",
    description:
      "Geleceğinizi güvence altına almak için vasiyetname düzenleme.",
  },
  {
    id: 4,
    title: "Muvafakatname",
    description:
      "Gerekli durumlarda kullanılmak üzere muvafakatname düzenleme.",
  },
  {
    id: 5,
    title: "Aile Hukuku",
    description:
      "Nafaka, çocuğun velayeti ve  mal paylaşımı haklarının alınması.",
  },
  {
    id: 6,
    title: "Tazminat Hukuku",
    description:
      "Hukuka aykırı bir olay kapsamında meydana gelen maddi ve manevi hasar için tazminat kapsamında yanınızdayız.",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Hizmetlerimiz</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {servicesData.map((service) => (
          <div key={service.id} className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
