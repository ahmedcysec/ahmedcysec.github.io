export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
             <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg">
<img
src="/images/avatar.jpg"
alt="Ahmed"
className="w-full h-full object-cover"
/>
</div>
              <span className="text-white font-bold text-xl">
               أحمد<span className="gradient-text">محمد</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              مصمم جرافيك إبداعي شغوف بتحويل الأفكار إلى تصاميم تترك أثراً لا يُنسى.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {[
                { label: 'الرئيسية', href: '#home' },
                { label: 'عني', href: '#about' },
                { label: 'أعمالي', href: '#portfolio' },
                { label: 'خدماتي', href: '#services' },
                { label: 'تواصل معي', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 text-sm hover:text-purple-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-white font-bold mb-4">ابدأ مشروعك الآن</h4>
            <p className="text-gray-500 text-sm mb-4">
              تواصل معي وهنحوّل فكرتك لواقع مبهر.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-sm hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            >
              تواصل معي الآن
              <span>✨</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} أحمد محمد. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <span>صُنع بـ</span>
           <span className="text-red-500"> كل حب </span>
            <span>وشغف لا حدود له</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
