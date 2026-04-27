import { useEffect, useRef } from 'react';

const roles = ['مصمم جرافيك', 'مصمم هوية بصرية', 'مصمم سوشيال ميديا', 'مصمم UI/UX'];

export default function Hero() {
  const roleRef = useRef<HTMLSpanElement>(null);
  const roleIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const type = () => {
      const current = roles[roleIndexRef.current];
      if (!roleRef.current) return;

      if (!deletingRef.current) {
        roleRef.current.textContent = current.slice(0, charIndexRef.current + 1);
        charIndexRef.current++;
        if (charIndexRef.current === current.length) {
          deletingRef.current = true;
          timeout = setTimeout(type, 2000);
          return;
        }
      } else {
        roleRef.current.textContent = current.slice(0, charIndexRef.current - 1);
        charIndexRef.current--;
        if (charIndexRef.current === 0) {
          deletingRef.current = false;
          roleIndexRef.current = (roleIndexRef.current + 1) % roles.length;
        }
      }
      timeout = setTimeout(type, deletingRef.current ? 60 : 100);
    };

    timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/60 via-transparent to-[#080808]" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-pink-600/15 rounded-full blur-3xl animate-float-delay pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl animate-float-delay2 pointer-events-none" />

      {/* Floating design elements */}
      <div className="absolute top-20 right-10 w-12 h-12 border-2 border-purple-500/30 rounded-lg rotate-45 animate-spin-slow opacity-50" />
      <div className="absolute bottom-32 left-16 w-8 h-8 bg-pink-500/30 rounded-full animate-float-delay" />
      <div className="absolute top-40 left-20 w-6 h-6 bg-cyan-400/40 rounded animate-float" />
      <div className="absolute bottom-48 right-20 w-10 h-10 border border-pink-500/30 rounded-full animate-float-delay2" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass neon-border px-4 py-2 rounded-full mb-8 text-sm text-purple-300 font-medium animate-fade-in">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          متاح للعمل الآن
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 leading-tight animate-slide-up">
          مرحباً، أنا{' '}
          <span className="gradient-text block mt-2">أحمد محمد</span>
        </h1>

        {/* Typewriter */}
        <div className="text-xl md:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center gap-2 font-semibold">
          <span ref={roleRef} className="gradient-text-blue" />
          <span className="w-0.5 h-8 bg-purple-400 animate-pulse" />
        </div>

        {/* Description */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          أحول أفكارك إلى تصاميم إبداعية تترك أثراً لا يُنسى. أكثر من{' '}
          <span className="text-purple-400 font-bold">5 سنوات</span>{' '}
          من الخبرة في عالم التصميم الجرافيكي.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#portfolio"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 animate-pulse-glow"
          >
            <span>شوف أعمالي</span>
            <svg className="w-5 h-5 rotate-180 group-hover:translate-x-[-4px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-3 px-8 py-4 glass neon-border text-white rounded-2xl font-bold text-lg hover:scale-105 hover:bg-white/10 transition-all duration-300"
          >
            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>تواصل معي</span>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { num: '+100', label: 'مشروع منجز' },
            { num: '+50', label: 'عميل سعيد' },
            { num: '5+', label: 'سنوات خبرة' },
          ].map((stat) => (
            <div key={stat.label} className="text-center glass rounded-2xl p-4 neon-border">
              <div className="text-3xl font-black gradient-text">{stat.num}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs font-medium">اسكرول للأسفل</span>
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-purple-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
