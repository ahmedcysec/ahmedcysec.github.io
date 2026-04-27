import { useState } from "react";
const categories = ['الكل', 'هوية بصرية', 'سوشيال ميديا', 'مطبوعات', 'تصميم رقمي', 'تغليف'];

const projects = [
  {
    id: 1,
    title: 'هوية بصرية - Luxe Brand',
    category: 'هوية بصرية',
    image: '/images/project1.jpg',
    tags: ['Logo', 'Branding', 'Stationery'],
    description: 'تصميم هوية بصرية متكاملة لعلامة تجارية فاخرة',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    id: 2,
    title: 'حملة سوشيال ميديا',
    category: 'سوشيال ميديا',
    image: '/images/project2.jpg',
    tags: ['Instagram', 'Social Media', 'Campaign'],
    description: 'تصميم محتوى إبداعي لحملة تسويقية على السوشيال ميديا',
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 3,
    title: 'مجلة إيديتوريال',
    category: 'مطبوعات',
    image: '/images/project3.jpg',
    tags: ['Editorial', 'Magazine', 'Layout'],
    description: 'تصميم تخطيط وإخراج فني لمجلة فاشن',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    id: 4,
    title: 'تغليف منتج فاخر',
    category: 'تغليف',
    image: '/images/project4.jpg',
    tags: ['Packaging', '3D Mockup', 'Product'],
    description: 'تصميم تغليف إبداعي لمنتج تجميلي فاخر',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 5,
    title: 'تصميم تطبيق موبايل',
    category: 'تصميم رقمي',
    image: '/images/project5.jpg',
    tags: ['UI/UX', 'Mobile', 'App Design'],
    description: 'تصميم واجهة مستخدم عصرية لتطبيق موبايل',
    color: 'from-violet-500 to-purple-500',
  },
  {
    id: 6,
    title: 'بوستر فعالية',
    category: 'مطبوعات',
    image: '/images/project6.jpg',
    tags: ['Poster', 'Event', 'Print'],
    description: 'تصميم بوسترات إبداعية لفعاليات وحفلات',
    color: 'from-green-500 to-teal-500',
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('الكل');

  const filtered = activeCategory === 'الكل'
    ? projects
    : projects.filter((p) => p.category === activeCategory);
const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-pink-400 font-semibold text-sm tracking-widest uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
            أحدث <span className="gradient-text">أعمالي</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            كل مشروع هو رحلة إبداعية فريدة. شوف بنفسك!
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 scale-105'
                  : 'glass text-gray-400 hover:text-white border border-white/10 hover:border-purple-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            
            <div
 key={project.id}
 onClick={() => setSelectedImage(project.image)}
 className="group relative rounded-2xl overflow-hidden cursor-pointer card-hover"
>
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 project-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`} />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 glass text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-white font-bold text-lg">{project.title}</h3>
                <p className="text-gray-400 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                  {project.description}
                </p>
              </div>

              {/* View button */}
              <div className={`absolute top-4 left-4 w-10 h-10 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100 shadow-lg`}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>

              {/* Category badge */}
              <div className="absolute top-4 right-4">
                <span className="glass text-xs text-gray-300 px-3 py-1 rounded-full border border-white/10">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 glass neon-border text-white rounded-2xl font-bold hover:scale-105 hover:bg-white/5 transition-all duration-300"
          >
            <span>اطلب مشروعك الآن</span>
            <svg className="w-5 h-5 text-purple-400 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
      {selectedImage && (
<div
onClick={() => setSelectedImage(null)}
className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
>
<img
src={selectedImage}
alt=""
className="max-w-full max-h-[90vh] rounded-2xl"
/>
</div>
)}
    </section>
  );
}
