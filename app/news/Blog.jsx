import React from 'react';
import { 
  Calendar, 
  User, 
  MessageCircle, 
  Search, 
  ChevronRight, 
  ChevronsRight, 
  Plus 
} from 'lucide-react';

// --- Mock Data ---
const posts = [
  {
    id: 1,
    title: "What UK business brings to the table",
    category: "Industrial",
    date: "Oct 23, 2021",
    views: "340",
    comments: "5",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis."
  },
  {
    id: 2,
    title: "Best for any Industrial & Business Solution",
    category: "Factory",
    date: "Nov 12, 2021",
    views: "520",
    comments: "12",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    excerpt: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing."
  },
  {
    id: 3,
    title: "Understand what business thinks",
    category: "Business",
    date: "Dec 05, 2021",
    views: "210",
    comments: "3",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    excerpt: "Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit."
  },
  {
    id: 4,
    title: "Financing the transition to a sustainable future",
    category: "Finance",
    date: "Jan 18, 2022",
    views: "890",
    comments: "24",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
    excerpt: "Sustainability is no longer an option but a necessity. Explore how modern financing is driving the green industrial revolution."
  }
];

// --- Sub-Components ---

const SidebarSection = ({ title, children }) => (
  <div className="bg-white p-6 shadow-sm border border-gray-100 mb-8">
    <div className="flex items-center mb-6">
      <div className="w-1 h-6 bg-[#43bfb1] mr-3"></div>
      <h4 className="font-bold text-slate-900 uppercase tracking-wider text-sm">{title}</h4>
    </div>
    {children}
  </div>
);

const BlogCard = ({ post }) => (
  <div className="group bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
    <div className="relative overflow-hidden aspect-video">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute bottom-0 left-0 bg-[#43bfb1] text-white text-[10px] font-bold px-4 py-2 uppercase tracking-widest">
        {post.category}
      </div>
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <div className="flex flex-wrap items-center gap-4 text-gray-400 text-[11px] mb-4 font-medium uppercase tracking-tighter">
        <span className="flex items-center gap-1.5">
          <Calendar size={14} className="text-[#43bfb1]" /> {post.date}
        </span>
        <span className="flex items-center gap-1.5">
          <User size={14} className="text-[#43bfb1]" /> {post.views} Views
        </span>
        <span className="flex items-center gap-1.5">
          <MessageCircle size={14} className="text-[#43bfb1]" /> {post.comments} Comments
        </span>
      </div>

      <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#43bfb1] transition-colors leading-tight">
        {post.title}
      </h3>
      
      <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
        {post.excerpt}
      </p>

      <div className="mt-auto">
        <button className="bg-[#0a0d26] text-white px-6 py-3 text-[11px] font-black flex items-center gap-2 hover:bg-[#43bfb1] transition-colors uppercase tracking-widest">
          Read More <Plus size={16} />
        </button>
      </div>
    </div>
  </div>
);

// --- Main Page Component ---

export default function Blog() {
  return (
    <div className="bg-[#f9f9f9] min-h-screen pt-[5rem] font-sans">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Blog Grid */}
          <main className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex items-center gap-2 mt-12">
              <button className="w-12 h-12 bg-[#43bfb1] text-white font-bold flex items-center justify-center shadow-md">1</button>
              <button className="w-12 h-12 bg-white border border-gray-200 text-slate-900 font-bold hover:bg-[#43bfb1] hover:text-white transition-colors flex items-center justify-center">2</button>
              <button className="w-12 h-12 bg-white border border-gray-200 text-slate-900 font-bold hover:bg-[#43bfb1] hover:text-white transition-colors flex items-center justify-center">3</button>
              <button className="w-12 h-12 bg-white border border-gray-200 text-slate-900 font-bold hover:bg-[#43bfb1] hover:text-white transition-colors flex items-center justify-center">
                <ChevronsRight size={18} />
              </button>
            </div>
          </main>

          {/* Right Column: Sidebar */}
          <aside className="lg:col-span-4">
            
            {/* Search Widget */}
            <div className="bg-white p-2 shadow-sm border border-gray-100 mb-8 flex items-center">
              <input 
                type="text" 
                placeholder="Search Here..." 
                className="w-full p-4 outline-none text-sm text-gray-600 italic" 
              />
              <button className="bg-white px-4 text-gray-400 hover:text-[#43bfb1] transition-colors">
                <Search size={20} />
              </button>
            </div>

            <SidebarSection title="Categories">
              <ul className="space-y-4">
                {['Industry', 'Themeforest', 'Graphicriver', 'Building'].map((cat) => (
                  <li key={cat} className="flex justify-between items-center text-sm font-bold text-slate-700 hover:text-[#43bfb1] cursor-pointer group transition-colors">
                    <span className="flex items-center gap-2">
                       <ChevronRight size={12} className="text-gray-300 group-hover:text-[#43bfb1]" /> {cat}
                    </span>
                    <span className="bg-gray-50 px-2 py-1 text-[10px] text-gray-400 border group-hover:bg-[#43bfb1] group-hover:text-white transition-all">2</span>
                  </li>
                ))}
              </ul>
            </SidebarSection>

            <SidebarSection title="Archives">
              <ul className="space-y-4">
                {['November 2019', 'February 2020', 'September 2019'].map((date) => (
                  <li key={date} className="flex justify-between items-center text-sm font-bold text-slate-700 hover:text-[#43bfb1] cursor-pointer group">
                    <span className="flex items-center gap-2 font-bold uppercase tracking-tight">
                       <ChevronRight size={12} className="text-gray-300 group-hover:text-[#43bfb1]" /> {date}
                    </span>
                    <span className="text-gray-400 text-xs">(1)</span>
                  </li>
                ))}
              </ul>
            </SidebarSection>

            <SidebarSection title="Tags">
              <div className="flex flex-wrap gap-2">
                {['Maps', 'Cloud', 'Builder', 'Tower', 'Truck', 'Safety', 'Design'].map(tag => (
                  <span key={tag} className="bg-[#0a0d26] text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-[#43bfb1] cursor-pointer transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </SidebarSection>

          </aside>
        </div>
      </div>
    </div>
  );
}