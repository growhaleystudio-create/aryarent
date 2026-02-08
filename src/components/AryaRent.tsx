import React, { useState, useEffect } from 'react';
import {
  Car,
  Calendar,
  Phone,
  MapPin,
  CheckCircle,
  Star,
  Menu,
  X,
  ChevronRight,
  Shield,
  Clock,
  Users,
  MessageCircle,
  Instagram,
  Facebook
} from 'lucide-react';

// --- DATABASE ARMADA (Sesuai PRD: City Car, MPV, Premium) ---
const carFleet = [
  {
    id: 1,
    name: "All New Avanza",
    type: "MPV",
    passengers: 7,
    transmission: "Manual/Matic",
    price12: 300000,
    price24: 450000,
    image: "/images/avanza.png",
    isPopular: true,
    available: true
  },
  {
    id: 2,
    name: "Honda Brio RS",
    type: "City Car",
    passengers: 5,
    transmission: "Matic",
    price12: 275000,
    price24: 400000,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600",
    isPopular: false,
    available: true
  },
  {
    id: 3,
    name: "Toyota Innova Reborn",
    type: "Premium MPV",
    passengers: 7,
    transmission: "Matic",
    price12: 450000,
    price24: 650000,
    image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=600",
    isPopular: true,
    available: true
  },
  {
    id: 4,
    name: "Mitsubishi Pajero Sport",
    type: "SUV",
    passengers: 7,
    transmission: "Matic",
    price12: 900000,
    price24: 1300000,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600",
    isPopular: false,
    available: true
  },
  {
    id: 5,
    name: "Toyota Hiace Commuter",
    type: "Minibus",
    passengers: 15,
    transmission: "Manual",
    price12: 1100000,
    price24: 1400000,
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=80&w=600",
    isPopular: false,
    available: true
  },
  {
    id: 6,
    name: "Toyota Alphard",
    type: "Luxury",
    passengers: 7,
    transmission: "Matic",
    price12: 2500000,
    price24: 3000000,
    image: "https://images.unsplash.com/photo-1609529669235-c07e4e1bd6e9?auto=format&fit=crop&q=80&w=600",
    isPopular: false,
    available: false // Simulasi unit keluar
  }
];

// --- FITUR KEUNGGULAN (USP) ---
const features = [
  {
    icon: <Clock size={28} />,
    title: "Layanan 24 Jam",
    desc: "Butuh mobil dadakan tengah malam? Admin kami siap respon cepat."
  },
  {
    icon: <Shield size={28} />,
    title: "Unit Terawat & Wangi",
    desc: "Jaminan mobil bersih, bebas asap rokok, dan service rutin."
  },
  {
    icon: <MapPin size={28} />,
    title: "Antar Jemput Menganti",
    desc: "Gratis antar jemput unit untuk area Menganti dan sekitarnya."
  },
  {
    icon: <Users size={28} />,
    title: "Lepas Kunci / Driver",
    desc: "Bebas pilih setir sendiri atau duduk manis disupiri driver handal."
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Daftar Mobil', href: '#fleet' },
    { name: 'Keunggulan', href: '#features' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-red-600 p-2 rounded-lg shadow-lg shadow-red-600/20">
            <Car className="text-white" size={24} />
          </div>
          <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            Arya<span className="text-red-600">Rent</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium hover:text-red-500 transition-colors ${scrolled ? 'text-slate-700' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#fleet"
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-medium transition-all shadow-lg shadow-red-600/30 flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            Pesan Sekarang <ChevronRight size={16} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden ${scrolled ? 'text-slate-900' : 'text-white'}`}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsOpen(false)}></div>

      {/* Mobile Menu Content */}
      <div className={`absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center gap-4 md:hidden border-t transform transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full opacity-0'}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-slate-700 font-medium w-full text-center py-3 hover:bg-red-50 hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <div className="pt-2 w-full px-6">
          <a href="https://wa.me/6281997570478" className="w-full flex justify-center items-center gap-2 bg-red-600 text-white py-3 rounded-lg font-bold">
            <MessageCircle size={20} /> Chat WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[650px] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.png"
          alt="Rental Mobil Background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay: Darker on left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-red-900/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/50 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium text-red-100">
            <CheckCircle size={16} className="text-red-400" /> Solusi Transportasi Menganti & Surabaya
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Sewa Mobil <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Mudah & Cepat</span> Tanpa Ribet
          </h1>

          <p className="text-lg text-slate-300 max-w-lg leading-relaxed">
            Armada terbaru, bersih, dan wangi siap menemani perjalanan bisnis maupun liburan keluarga Anda. Melayani lepas kunci atau dengan supir.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#fleet" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-red-600/20 transform hover:-translate-y-1">
              Lihat Armada <ChevronRight size={20} />
            </a>
            <a href="https://wa.me/6281997570478" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center">
              Hubungi Kami
            </a>
          </div>
        </div>

        {/* Right Search Widget (Floating) */}
        <div className="hidden lg:block">
          <div className="bg-white p-8 rounded-3xl shadow-2xl border-t-4 border-red-600 transform translate-y-8 hover:translate-y-6 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Calendar className="text-red-600" /> Cek Ketersediaan
            </h3>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-500 mb-2">Lokasi Penjemputan</label>
                <div className="relative group">
                  <MapPin className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-red-600 transition-colors" size={20} />
                  <input
                    type="text"
                    placeholder="Cth: Perumahan Menganti Mas..."
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-500 mb-2">Tanggal</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none text-slate-700 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-500 mb-2">Durasi</label>
                  <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none text-slate-700 font-medium appearance-none">
                    <option>12 Jam</option>
                    <option>Full Day (24 Jam)</option>
                    <option>Mingguan</option>
                  </select>
                </div>
              </div>

              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 mt-2 shadow-lg">
                Cari Mobil <ChevronRight size={20} />
              </button>
              <p className="text-center text-xs text-slate-400 mt-2">*Admin kami akan konfirmasi via WhatsApp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Kenapa Memilih <span className="text-red-600">Arya Rent?</span></h2>
          <p className="text-slate-500 text-lg">Kami berkomitmen memberikan pengalaman sewa mobil terbaik di area Gresik dan Surabaya Barat.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-red-100 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300">
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Fleet = () => {
  return (
    <section id="fleet" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-red-600 font-bold tracking-wider uppercase text-sm">Katalog Armada</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Pilihan Mobil <span className="text-red-600">Ready</span></h2>
          </div>
          <button className="text-slate-600 hover:text-red-600 font-medium flex items-center gap-2 transition-colors">
            Lihat Semua Armada <ChevronRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {carFleet.map((car) => (
            <div key={car.id} className="bg-white rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 group overflow-hidden border border-slate-100 flex flex-col">
              {/* Image Section */}
              <div className="relative h-60 overflow-hidden bg-slate-200">
                <img
                  src={car.image}
                  alt={car.name}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${!car.available ? 'grayscale opacity-60' : ''}`}
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-white/90 backdrop-blur text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {car.type}
                  </span>
                </div>

                {car.isPopular && car.available && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                    <Star size={12} fill="currentColor" /> POPULER
                  </div>
                )}

                {!car.available && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                    <span className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold transform -rotate-6 border-2 border-white">SUDAH DISEWA</span>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">{car.name}</h3>
                </div>

                {/* Specs */}
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded"><Users size={16} className="text-red-500" /> {car.passengers} Seat</span>
                  <span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded"><Car size={16} className="text-red-500" /> {car.transmission}</span>
                </div>

                {/* Pricing - Using flex-1 to push footer down */}
                <div className="space-y-3 mt-auto mb-6">
                  <div className="flex justify-between items-center bg-red-50/50 px-4 py-2 rounded-lg border border-red-100/50">
                    <span className="text-sm font-medium text-slate-600">12 Jam</span>
                    <span className="font-bold text-red-600">Rp {car.price12.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between items-center px-4 py-2 rounded-lg border border-slate-100">
                    <span className="text-sm font-medium text-slate-600">Full Day (24 Jam)</span>
                    <span className="font-bold text-slate-900">Rp {car.price24.toLocaleString('id-ID')}</span>
                  </div>
                </div>

                {/* CTA Button */}
                {car.available ? (
                  <a
                    href={`https://wa.me/6281997570478?text=Halo%20Arya%20Rent,%20saya%20tertarik%20sewa%20${car.name}%20untuk%20tanggal...`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-green-600 text-white py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-slate-900/10 hover:shadow-green-600/30"
                  >
                    <MessageCircle size={20} /> Booking via WA
                  </a>
                ) : (
                  <button disabled className="w-full bg-slate-200 text-slate-400 py-3.5 rounded-xl font-bold cursor-not-allowed">
                    Tidak Tersedia
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-20 bg-red-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Untuk Perjalanan Anda?</h2>
        <p className="text-red-100 text-lg max-w-2xl mx-auto mb-8">
          Jangan biarkan rencana liburan atau bisnis Anda terganggu. Booking mobil sekarang dan dapatkan harga spesial untuk pemakaian mingguan.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://wa.me/6281997570478" className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl">
            Hubungi Admin Sekarang
          </a>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-red-600 p-1.5 rounded">
                <Car className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Arya<span className="text-red-600">Rent</span></span>
            </div>
            <p className="leading-relaxed mb-6">
              Partner perjalanan terpercaya di Menganti. Kami mengutamakan keselamatan dan kenyamanan dengan harga yang transparan.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Navigasi</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-red-500 transition-colors">Beranda</a></li>
              <li><a href="#fleet" className="hover:text-red-500 transition-colors">Daftar Mobil</a></li>
              <li><a href="#features" className="hover:text-red-500 transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="https://wa.me/6281997570478" className="hover:text-red-500 transition-colors">Hubungi Kami</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Alamat Pool</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-red-600 flex-shrink-0 mt-1" size={20} />
                <span>Jl. Raya Menganti No. 88, Menganti, Gresik, Jawa Timur 61174</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-red-600 flex-shrink-0" size={20} />
                <span>+62 819-9757-0478</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-red-600 flex-shrink-0" size={20} />
                <span>Buka 24 Jam (Senin - Minggu)</span>
              </li>
            </ul>
          </div>

          {/* Map Placeholder */}
          <div className="bg-slate-900 rounded-xl overflow-hidden h-48 relative group">
            {/* Mock Map Image */}
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity" alt="Peta Lokasi" />
            <div className="absolute inset-0 flex items-center justify-center">
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="bg-white/10 backdrop-blur border border-white/30 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-600 hover:border-red-600 transition-all flex items-center gap-2">
                <MapPin size={16} /> Buka Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; 2024 Arya Rent Car Menganti. All rights reserved.</p>
          <p>Designed for speed & comfort.</p>
        </div>
      </div>
    </footer>
  );
};

export default function AryaRent() {
  return (
    <div className="font-sans antialiased text-slate-600 bg-white selection:bg-red-100 selection:text-red-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Fleet />
        <CTASection />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6281997570478"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/40 transition-all hover:-translate-y-1 z-50 flex items-center justify-center group"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle size={32} className="group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
}
