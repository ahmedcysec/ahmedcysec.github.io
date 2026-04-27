import { useState } from 'react';

const testimonials = [
  {
    name: 'أحمد السيد',
    role: 'مؤسس شركة TechStart',
    avatar: '👨‍💼',
    rating: 5,
    text: 'أحمد من أحسن المصممين اللي تعاملت معاهم. شغله دقيق، ملتزم بالمواعيد، وعنده حس إبداعي عالي جداً. صمم لنا هوية بصرية رائعة غيرت مظهر شركتنا تماماً.',
    project: 'هوية بصرية متكاملة',
  },
  {
    name: 'سارة المنصور',
    role: 'مديرة تسويق - Fashion Brand',
    avatar: '👩‍💼',
    rating: 5,
    text: 'تعاملت مع أحمد في تصميم محتوى السوشيال ميديا لتاني مرة متتالية، وكل مرة يتفوق على نفسه. الشغل احترافي والتسليم قبل الموعد!',
    project: 'سوشيال ميديا',
  },
  {
    name: 'محمود العمري',
    role: 'صاحب مطعم Flavors',
    avatar: '👨‍🍳',
    rating: 5,
    text: 'صمم لنا المينيو والهوية البصرية الكاملة للمطعم. الزباين بيتكلموا عن التصميم قبل الأكل! شغل يستاهل كل قرش.',
    project: 'هوية بصرية للمطعم',
  },
  {
    name: 'نورا الحمدان',
    role: 'مدونة وإنفلوانسر',
    avatar: '👩‍🎨',
    rating: 5,
    text: 'أحمد بيفهمك من نص كلمة ويجيب اللي في دماغك بالظبط وأحسن. تصميم بريستيزات الانستجرام بتاعي عملت ضجة!',
    project: 'تصميم سوشيال ميديا',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-[#080808] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-semibold text-sm tracking-widest uppercase">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
            رأي <span className="gradient-text">عملائي</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Main testimonial */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="glass neon-border rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote icon */}
            <div className="absolute top-6 right-8 text-purple-500/20 text-[120px] font-serif leading-none select-none">"</div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">★</span>
              ))}
            </div>

            {/* Text */}
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 relative z-10">
              "{testimonials[activeIndex].text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl">
                {testimonials[activeIndex].avatar}
              </div>
              <div>
                <div className="text-white font-bold text-lg">{testimonials[activeIndex].name}</div>
                <div className="text-gray-400 text-sm">{testimonials[activeIndex].role}</div>
                <div className="text-purple-400 text-xs mt-1">📋 {testimonials[activeIndex].project}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-3 mb-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === idx
                  ? 'w-8 h-3 bg-gradient-to-r from-purple-500 to-pink-500'
                  : 'w-3 h-3 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Thumbnail list */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {testimonials.map((t, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`glass border rounded-2xl p-4 text-right transition-all duration-300 hover:scale-105 ${
                activeIndex === idx
                  ? 'border-purple-500/50 shadow-lg shadow-purple-500/20'
                  : 'border-white/10 opacity-60 hover:opacity-100'
              }`}
            >
              <div className="text-2xl mb-2">{t.avatar}</div>
              <div className="text-white font-semibold text-sm">{t.name}</div>
              <div className="text-gray-500 text-xs mt-1">{t.role}</div>
              <div className="flex gap-0.5 mt-2">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xs">★</span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
    </section>
  );
}
