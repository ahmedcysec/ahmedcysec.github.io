const services = [
  {
    icon: '🎯',
    title: 'هوية بصرية متكاملة',
    description: 'تصميم شعار احترافي وهوية بصرية متكاملة تعكس شخصية علامتك التجارية وتميزها عن المنافسين.',
    features: ['شعار بصيغ متعددة', 'دليل الهوية البصرية', 'بطاقات أعمال', 'ستيشنري كامل'],
    color: 'from-purple-600 to-indigo-600',
    glow: 'purple',
    price: 'تبدأ من 500$',
  },
  {
    icon: '📱',
    title: 'سوشيال ميديا',
    description: 'تصميم محتوى بصري جذاب لجميع منصات التواصل الاجتماعي يزيد من التفاعل ويقوي حضورك الرقمي.',
    features: ['بوستات إنستجرام', 'ستوريات مميزة', 'غلاف فيسبوك', 'تمبلت قابل للتعديل'],
    color: 'from-pink-600 to-rose-600',
    glow: 'pink',
    price: 'تبدأ من 200$',
  },
  {
    icon: '🖨️',
    title: 'مطبوعات إحترافية',
    description: 'تصميم كل ما يحتاجه نشاطك التجاري من مطبوعات احترافية جاهزة للطباعة بجودة عالية.',
    features: ['كتيبات وبروشورات', 'فلايرز', 'لوحات إعلانية', 'فواتير وأوراق رسمية'],
    color: 'from-orange-500 to-yellow-500',
    glow: 'orange',
    price: 'تبدأ من 150$',
  },
  {
    icon: '📦',
    title: 'تصميم التغليف',
    description: 'تصميم تغليف مبتكر يجذب العملاء ويعكس قيمة منتجك ويميزه على الرفوف.',
    features: ['تغليف للمنتجات', 'موكاب ثلاثي الأبعاد', 'تصاميم للطباعة', 'تصميم علامات المنتج'],
    color: 'from-cyan-500 to-blue-500',
    glow: 'cyan',
    price: 'تبدأ من 300$',
  },
  {
    icon: '🖥️',
    title: 'تصميم UI/UX',
    description: 'تصميم واجهات مستخدم جذابة وسهلة الاستخدام للمواقع والتطبيقات بأحدث المعايير.',
    features: ['تصميم الشاشات', 'Wireframing', 'نموذج تفاعلي', 'دليل التصميم'],
    color: 'from-violet-600 to-purple-600',
    glow: 'violet',
    price: 'تبدأ من 800$',
  },
  {
    icon: '🎬',
    title: 'موشن جرافيك',
    description: 'إنتاج محتوى متحرك وجذاب يروي قصة علامتك التجارية بطريقة ديناميكية ومثيرة.',
    features: ['فيديو إنترو', 'أنيميشن للسوشيال', 'فيديو إعلاني', 'GIFs متحركة'],
    color: 'from-green-500 to-teal-500',
    glow: 'green',
    price: 'تبدأ من 400$',
  },
];

const glowColors: Record<string, string> = {
  purple: 'shadow-purple-500/20 hover:shadow-purple-500/40 border-purple-500/20 hover:border-purple-500/50',
  pink: 'shadow-pink-500/20 hover:shadow-pink-500/40 border-pink-500/20 hover:border-pink-500/50',
  orange: 'shadow-orange-500/20 hover:shadow-orange-500/40 border-orange-500/20 hover:border-orange-500/50',
  cyan: 'shadow-cyan-500/20 hover:shadow-cyan-500/40 border-cyan-500/20 hover:border-cyan-500/50',
  violet: 'shadow-violet-500/20 hover:shadow-violet-500/40 border-violet-500/20 hover:border-violet-500/50',
  green: 'shadow-green-500/20 hover:shadow-green-500/40 border-green-500/20 hover:border-green-500/50',
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#080808] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      {/* Background orbs */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-sm tracking-widest uppercase">Services</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
            خدماتي <span className="gradient-text">الإبداعية</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            أقدم حلول تصميمية شاملة تناسب احتياجاتك وميزانيتك
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group relative bg-[#111111] border rounded-2xl p-6 shadow-xl transition-all duration-500 card-hover ${glowColors[service.glow]}`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price + CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-gray-500 text-sm">{service.price}</span>
                <a
                  href="#contact"
                  className={`text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent hover:underline`}
                >
                  اطلبها الآن →
                </a>
              </div>

              {/* Corner decoration */}
              <div className={`absolute top-0 left-0 w-20 h-20 bg-gradient-to-br ${service.color} opacity-5 rounded-br-full pointer-events-none`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center glass neon-border rounded-3xl p-10">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
            محتاج تصميم مخصص؟ 🚀
          </h3>
          <p className="text-gray-400 mb-8 text-lg">
            تواصل معي وهنتكلم عن مشروعك بالتفصيل ونوصل لأحسن حل ليك
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300"
          >
            ابدأ مشروعك معي
            <span>✨</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </section>
  );
}
