import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t-[8px] border-[var(--color-brand-red)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link href="#home" className="flex items-center gap-3">
              <div className="relative w-14 h-14 bg-white rounded-full flex items-center justify-center overflow-hidden shrink-0">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image src="/logo.png" alt="Nalanda High School Logo" fill className="object-cover scale-[1.03]" />
                </div>
              </div>
              <div>
                <span className="block font-heading font-bold text-xl text-white leading-none mb-1">Nalanda</span>
                <span className="block text-xs font-medium tracking-widest text-[var(--color-brand-gold)] uppercase">High School</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Shaping Bright Futures Since 1980. Quality Education, Discipline, Innovation & Excellence in Nizamabad.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/nalanda_high_school_nizamabad" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://youtube.com/@nalandahighschoolnyalkalro4661" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About School", href: "#about" },
                { name: "Academics", href: "#academics" },
                { name: "Facilities", href: "#facilities" },
                { name: "Gallery", href: "#gallery" },
                { name: "Admissions", href: "#admissions" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-[var(--color-brand-gold)] transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-teal)]"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 font-heading text-lg">Contact Information</h4>
            <div className="grid sm:grid-cols-2 gap-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm">
                  <MapPin className="w-5 h-5 text-[var(--color-brand-red)] shrink-0 mt-0.5" />
                  <span>Nyalkal Road, Nizamabad,<br />Telangana, India</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm">
                  <Phone className="w-5 h-5 text-[var(--color-brand-red)] shrink-0" />
                  <div className="flex flex-col">
                    <a href="tel:6281193396" className="hover:text-white transition-colors">6281193396</a>
                    <a href="tel:9963253400" className="hover:text-white transition-colors">9963253400</a>
                  </div>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Mail className="w-5 h-5 text-[var(--color-brand-red)] shrink-0" />
                  <a href="mailto:nalandahs1980@gmail.com" className="hover:text-white transition-colors">nalandahs1980@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-center sm:flex sm:justify-between sm:text-left text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Nalanda High School, Nizamabad. All rights reserved.</p>
          <div className="mt-4 sm:mt-0 space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
