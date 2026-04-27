export default function About() {
  const tools = [
    { name: 'Photoshop', icon: '🎨', color: 'from-blue-600 to-blue-400' },
    { name: 'Illustrator', icon: '✏️', color: 'from-orange-500 to-yellow-400' },
    { name: 'InDesign', icon: '📄', color: 'from-pink-600 to-rose-400' },
    { name: 'Figma', icon: '🖥️', color: 'from-purple-600 to-indigo-400' },
    { name: 'After Effects', icon: '🎬', color: 'from-indigo-600 to-purple-400' },
    { name: 'Premiere', icon: '🎞️', color: 'from-violet-600 to-pink-400' },
  ];

  return (
    <section id="about" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm tracking-widest uppercase">من أنا؟</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
            تعرف <span className="gradient-text">عليّ</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative flex justify-center">
            {/* Glow effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
            </div>

            {/* Rotating border ring */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/30 animate-spin-slow scale-110" />
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl shadow-purple-900/50 relative z-10">
                <img
                  src="/images/avatar.jpg"
                  alt="أحمد محمد"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass neon-border rounded-2xl px-4 py-3 z-20">
                <div className="text-2xl font-black gradient-text">3+</div>
                <div className="text-gray-400 text-xs">سنوات خبرة</div>
              </div>

              {/* Floating badge 2 */}
              <div className="absolute -top-4 -left-4 glass neon-border rounded-2xl px-4 py-3 z-20">
                <div className="text-2xl font-black gradient-text">100+</div>
                <div className="text-gray-400 text-xs">مشروع</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-black text-white mb-4">
                مصمم جرافيك{' '}
                <span className="gradient-text">إبداعي 🎨</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                أنا <span className="text-purple-400 font-bold">أحمد محمد</span>، مصمم جرافيك شغوف بالفن والإبداع. 
                بدأت مسيرتي في عالم التصميم منذ أكثر من 3 سنوات، وخلال هذه الرحلة عملت مع 
               عملاء من مختلفين .
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                أؤمن بأن كل تصميم يجب أن يحكي قصة ويترك أثراً. أتميز بالجمع بين 
                <span className="text-pink-400 font-semibold"> الإبداع الفني </span>
                و<span className="text-cyan-400 font-semibold">الدقة التقنية</span> لتقديم 
                أعمال تتجاوز توقعات العملاء.
              </p>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'الاسم', value: 'أحمد محمد', icon: '👤' },
                { label: 'الموقع', value: 'الشرقية_كفر صقر', icon: '📍' },
                { label: 'التخصص', value: 'جرافيك ديزين', icon: '🎨' },
                { label: 'البريد', value: 'ahmedcysec25@gmail.com', icon: '📧' },
              ].map((info) => (
                <div key={info.label} className="glass neon-border rounded-xl p-4 flex items-start gap-3">
                  <span className="text-xl">{info.icon}</span>
                  <div>
                    <div className="text-gray-500 text-xs mb-1">{info.label}</div>
                    <div className="text-white text-sm font-semibold">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tools */}
            <div>
              <h4 className="text-white font-bold mb-4 text-lg">الأدوات التي أستخدمها:</h4>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-2 glass neon-border px-4 py-2.5 rounded-xl hover:scale-105 transition-transform cursor-default"
                  >
                    <span className="text-lg">{tool.icon}</span>
                    <span className="text-white text-sm font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Download CV */}
          <a
href="/cv.pdf"
download
className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white font-bold"
>
  تحميل السيرة الذاتية📄 
</a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </section>
  );
}
