import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'Adobe Photoshop', level: 95, color: 'from-blue-500 to-blue-300', icon: '🎨' },
  { name: 'Adobe Illustrator', level: 90, color: 'from-orange-500 to-yellow-300', icon: '✏️' },
  { name: 'Adobe InDesign', level: 85, color: 'from-pink-600 to-rose-400', icon: '📄' },
  { name: 'Figma', level: 88, color: 'from-purple-500 to-violet-400', icon: '🖥️' },
  { name: 'After Effects', level: 75, color: 'from-indigo-500 to-purple-400', icon: '🎬' },
  { name: 'Adobe Premiere', level: 70, color: 'from-violet-600 to-pink-400', icon: '🎞️' },
];

const softSkills = [
  { icon: '💡', title: 'الإبداع', desc: 'تفكير خارج الصندوق وأفكار مبتكرة' },
  { icon: '⏱️', title: 'الالتزام بالمواعيد', desc: 'أسلم شغلك في الموعد دايماً' },
  { icon: '🔄', title: 'التعديلات', desc: 'غير محدود من التعديلات حتى الرضا' },
  { icon: '📞', title: 'التواصل', desc: 'متاح 24/7 للرد على استفساراتك' },
];

function SkillBar({ skill, animate }: { skill: typeof skills[0]; animate: boolean }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="text-white font-semibold text-sm">{skill.name}</span>
        </div>
        <span className="gradient-text font-bold text-sm">{skill.level}%</span>
      </div>
      <div className="h-3 bg-white/5 rounded-full overflow-hidden border border-white/10">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1500 ease-out relative overflow-hidden`}
          style={{
            width: animate ? `${skill.level}%` : '0%',
            transition: 'width 1.5s ease-out',
          }}
        >
          <div className="absolute inset-0 bg-white/20 shimmer" />
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-violet-400 font-semibold text-sm tracking-widest uppercase">Skills</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
            مهاراتي <span className="gradient-text">التقنية</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills Bars */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              البرامج والأدوات
            </h3>
            {skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} animate={animate} />
            ))}
          </div>

          {/* Right Side: Soft Skills + Experience */}
          <div className="space-y-8">
            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                لماذا تختارني؟
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill) => (
                  <div key={skill.title} className="glass neon-border rounded-2xl p-5 card-hover">
                    <div className="text-3xl mb-3">{skill.icon}</div>
                    <h4 className="text-white font-bold mb-2">{skill.title}</h4>
                    <p className="text-gray-400 text-sm">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience timeline */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                مسيرتي المهنية
              </h3>
              <div className="space-y-4">
                {[
                  { year: '2024 - الآن', role: 'مصمم جرافيك حر', company: 'Freelance', color: 'bg-purple-500' },
                  { year: '2022 - 2024', role: 'مصمم جرافيك أول', company: 'Creative Studio', color: 'bg-pink-500' },
                  { year: '2020 - 2022', role: 'مصمم جرافيك', company: 'Digital Agency', color: 'bg-cyan-500' },
                  { year: '2019 - 2020', role: 'مصمم جرافيك مبتدئ', company: 'Media Company', color: 'bg-orange-500' },
                ].map((exp, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full ${exp.color} mt-1.5 flex-shrink-0 shadow-lg`} />
                      {idx < 3 && <div className="w-0.5 h-10 bg-gradient-to-b from-white/20 to-transparent mt-1" />}
                    </div>
                    <div className="glass border border-white/10 rounded-xl p-4 flex-1 -mt-1">
                      <div className="text-xs text-gray-500 mb-1">{exp.year}</div>
                      <div className="text-white font-semibold text-sm">{exp.role}</div>
                      <div className="text-purple-400 text-xs mt-1">{exp.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
    </section>
  );
}
