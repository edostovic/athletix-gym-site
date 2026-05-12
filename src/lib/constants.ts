export const siteConfig = {
  name: "ATHLETIX",
  fullName: "ATHLETIX Gym",
  tagline: "Bez izgovora. Samo rezultati.",
  taglineEn: "No excuses. Only results.",
  location: "Banovići",
  description: "Moderna teretana sa vrhunskim trenerima i opremom.",
  hours: "Pon-Pet: 06:00-22:00 | Sub: 08:00-20:00 | Ned: 10:00-16:00",
  phone: "+387 61 954 069",
  email: "atheltixgym.info@gmail.com",
  address: "Banovići, Bosna i Hercegovina",
  social: { instagram: "#", facebook: "#", youtube: "#" },
};

export const trainers = [
  { name: "Trener 1", title: "Personal Trainer", bio: "Specijalizovan za snagu i kondiciju.", image: "/insta_post_2.jpg" },
  { name: "Trener 2", title: "Fitness Instruktor", bio: "Stručnjak za grupne treninge.", image: "/insta_post_3.jpg" },
  { name: "Trener 3", title: "Nutricionista", bio: "Planiranje ishrane i suplementacija.", image: "/insta_post_5.jpg" },
];

export const pricing = [
  { name: "Dnevna", price: "5 KM", period: "dan", features: ["Pristup teretani", "Osnovna oprema"] },
  { name: "Mjesečna", price: "45 KM", period: "mjesec", features: ["Neograničen pristup", "Sva oprema", "Grupni treninzi", "Sauna"], popular: true },
  { name: "Godišnja", price: "399 KM", period: "godina", features: ["Sve iz mjesečne", "+3 PT treninga", "Prehrambeni plan", "Prioritetna podrška"] },
];

export const facilities = [
  { name: "Cardio Zona", desc: "Moderne sprave za kardio trening", icon: "🏃" },
  { name: "Free Weights", desc: "Kompletna oprema za slobodne utege", icon: "🏋️" },
  { name: "Studio", desc: "Prostor za grupne treninge i jogu", icon: "🧘" },
  { name: "Sauna", desc: "Opustite se nakon treninga", icon: "🧖" },
  { name: "Parking", desc: "Besplatan parking za članove", icon: "🅿️" },
  { name: "WiFi", desc: "Besplatan bežični internet", icon: "📶" },
];

export const testimonials = [
  { quote: "ATHLETIX mi je promijenio život. Izgubio sam 15kg za 3 mjeseca!", author: "Marko K.", role: "Član" },
  { quote: "Najbolji treneri u gradu. Svaka preporuka!", author: "Amela S.", role: "Članica" },
  { quote: "Vrhunska oprema i odlična atmosfera. Osjećam se kao kod kuće.", author: "Ivan H.", role: "Član" },
];
