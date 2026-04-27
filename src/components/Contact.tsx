import { useState } from 'react';
import {
FaBehance,
FaInstagram,
FaWhatsapp,
FaXTwitter
} from "react-icons/fa6";

export default function Contact() {
 const [formData, setFormData] = useState({
 name:'',
 email:'',
 service:'',
 budget:'',
 message:''
});

  const socials = [
{
 icon: FaBehance,
 name:'Behance',
 handle:'@ahmed.cysec',
 href:'...'
},

{
 icon: FaInstagram,
 name:'Instagram',
 handle:'@ahmed_cysec',
 href:'...'
},

{
 icon: FaXTwitter,
 name:'Twitter',
 handle:'@ahmed.cysec',
 href:'...'
},

{
 icon: FaWhatsapp,
 name:'WhatsApp',
 handle:'+201064858547',
 href:'...'
}
];
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-green-400 font-semibold text-sm tracking-widest uppercase">Contact</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
            تواصل <span className="gradient-text">معي</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-6 text-lg">
            عندك مشروع؟ تعال نتكلم! 🚀
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Info + Socials */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info cards */}
            <div className="glass neon-border rounded-2xl p-6 space-y-4">
              <h3 className="text-white font-bold text-xl mb-4">معلومات التواصل</h3>
              {[
                { icon: '📧', label: 'البريد الإلكتروني', value: 'ahmedcysec25@gmail.com' },
                { icon: '📱', label: 'الواتساب', value: '01064858547' },
                { icon: '📍', label: 'الموقع', value: 'الشرقيه-كفر صقر' },
                { icon: '⏰', label: 'وقت الرد', value: 'خلال 24 ساعة' },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                  <span className="text-xl">{info.icon}</span>
                  <div>
                    <div className="text-gray-500 text-xs">{info.label}</div>
                    <div className="text-white text-sm font-semibold mt-0.5">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="glass neon-border rounded-2xl p-6">
              <h3 className="text-white font-bold text-xl mb-4">تابعني على</h3>
              <div className="space-y-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all group"
                  >
<div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">  <s.icon size={20} className="text-white" />
</div>
              <div className="flex-1">
                      <div className="text-white font-semibold text-sm">{s.name}</div>
                      <div className="text-gray-400 text-xs">{s.handle}</div>
                    </div>
                    <svg className="w-4 h-4 text-gray-500 group-hover:text-purple-400 transition-colors rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass neon-border rounded-2xl p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-bold">متاح للعمل الآن</span>
              </div>
              <p className="text-gray-400 text-sm">
                حالياً متاح لاستقبال مشاريع جديدة. التسليم زي ما اتفقنا علي الموعد.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="glass neon-border rounded-3xl p-8">
              <h3 className="text-white font-bold text-2xl mb-6">ابعتلي رسالة 💬</h3>

              <form
 action="https://formspree.io/f/xjgjdqln"
 method="POST"
>
   <div className="grid md:grid-cols-2 gap-5">
<div>
<label className="text-gray-400 text-sm font-medium mb-2 block">
اسمك
</label>

<input
name="name"
type="text"
required
placeholder="اسمك"
value={formData.name}
onChange={(e)=>setFormData({
...formData,
name:e.target.value
})}
className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600"
/>
</div>

<div>
<label className="text-gray-400 text-sm font-medium mb-2 block">
رقم الواتساب
</label>

<input
name="phone"
type="tel"
required
placeholder="010xxxxxxxx"
value={formData.email}
onChange={(e)=>setFormData({
...formData,
email:e.target.value
})}
className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600"
dir="ltr"
/>
</div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-gray-400 text-sm font-medium mb-2 block">نوع الخدمة</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/60 transition-all text-sm"
                    >
                      <option value="">اختر الخدمة</option>
                      <option value="identity">هوية بصرية</option>
                      <option value="social">سوشيال ميديا</option>
                      <option value="print">مطبوعات</option>
                      <option value="packaging">تغليف منتج</option>
                      <option value="ui">تصميم UI/UX</option>
                      <option value="motion">موشن جرافيك</option>
                      <option value="other">غير ذلك</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm font-medium mb-2 block">الميزانية التقريبية</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/60 transition-all text-sm"
                    >
                      <option value="">اختر الميزانية</option>
                      <option value="under-200">أقل من 200$</option>
                      <option value="200-500">200$ - 500$</option>
                      <option value="500-1000">500$ - 1000$</option>
                      <option value="over-1000">أكثر من 1000$</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-gray-400 text-sm font-medium mb-2 block">تفاصيل مشروعك</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="اشرحلي مشروعك بالتفاصيل... إيه اللي محتاجه؟ إيه الهدف؟ في موعد تسليم معين؟"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/60 focus:bg-purple-500/5 transition-all resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <span>ابعت الرسالة</span>
                  <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
    </section>
  );
}
