"use client"

import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  User, 
  MessageCircle, 
  Search, 
  ChevronRight, 
  ChevronsRight, 
  Plus 
} from 'lucide-react';

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

const BlogCard = ({ post }) => {
  // Format Date from ISO string
  const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  });

  // Placeholder image if coverImage is just a string/title instead of a URL
  const imageUrl = post.coverImage?.startsWith('http') 
    ? post.coverImage 
    : "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800";

  return (
    <div className="group bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={imageUrl} 
          alt={post.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute bottom-0 left-0 bg-[#43bfb1] text-white text-[10px] font-bold px-4 py-2 uppercase tracking-widest">
          {post.type}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap items-center gap-4 text-gray-400 text-[11px] mb-4 font-medium uppercase tracking-tighter">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-[#43bfb1]" /> {formattedDate}
          </span>
          <span className="flex items-center gap-1.5">
            <User size={14} className="text-[#43bfb1]" /> {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <MessageCircle size={14} className="text-[#43bfb1]" /> 0 Comments
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
};

// --- Main Page Component ---

export default function Blog() {
  const [apiPosts, setApiPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://vil-cms-dhct.vercel.app/api/posts");
        const data = await response.json();
        setApiPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center font-bold text-[#43bfb1]">Loading...</div>;
  }

  return (
    <div className="bg-[#f9f9f9] min-h-screen pt-[5rem] font-sans">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Blog Grid */}
          <main className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {apiPosts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex items-center gap-2 mt-12">
              <button className="w-12 h-12 bg-[#43bfb1] text-white font-bold flex items-center justify-center shadow-md">1</button>
              <button className="w-12 h-12 bg-white border border-gray-200 text-slate-900 font-bold hover:bg-[#43bfb1] hover:text-white transition-colors flex items-center justify-center">2</button>
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
                {['News', 'Blog', 'Updates', 'Industry'].map((cat) => (
                  <li key={cat} className="flex justify-between items-center text-sm font-bold text-slate-700 hover:text-[#43bfb1] cursor-pointer group transition-colors">
                    <span className="flex items-center gap-2">
                       <ChevronRight size={12} className="text-gray-300 group-hover:text-[#43bfb1]" /> {cat}
                    </span>
                    <span className="bg-gray-50 px-2 py-1 text-[10px] text-gray-400 border group-hover:bg-[#43bfb1] group-hover:text-white transition-all">
                      {apiPosts.filter(p => p.type === cat).length}
                    </span>
                  </li>
                ))}
              </ul>
            </SidebarSection>

            <SidebarSection title="Archives">
              <ul className="space-y-4">
                {['April 2026'].map((date) => (
                  <li key={date} className="flex justify-between items-center text-sm font-bold text-slate-700 hover:text-[#43bfb1] cursor-pointer group">
                    <span className="flex items-center gap-2 font-bold uppercase tracking-tight">
                       <ChevronRight size={12} className="text-gray-300 group-hover:text-[#43bfb1]" /> {date}
                    </span>
                    <span className="text-gray-400 text-xs">({apiPosts.length})</span>
                  </li>
                ))}
              </ul>
            </SidebarSection>

            <SidebarSection title="Tags">
              <div className="flex flex-wrap gap-2">
                {/* Dynamically extract unique tags from API data */}
                {[...new Set(apiPosts.flatMap(p => p.tags))].map(tag => (
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