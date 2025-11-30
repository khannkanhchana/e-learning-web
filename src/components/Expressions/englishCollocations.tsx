"use client";
import React, { useState } from 'react';
import { 
  BookOpen, Search, Clock, ArrowRight, Bookmark, Globe, 
  Sparkles, Star, Zap, TrendingUp, CheckCircle, XCircle, 
  Layers, AlertTriangle, Briefcase, Handshake, Puzzle, 
  MessageCircle, Link as LinkIcon, Target
} from 'lucide-react';

// --- TYPE DEFINITIONS ---
interface Category {
  title: string;
  description: string;
  progress: number;
  lessons: number;
  words: number;
  time: string;
  icon: React.ElementType; // Changed from string image to Icon component for flexibility
  color: string;
  shadow: string;
}

// --- STATIC DATA: COLLOCATIONS ---
const CATEGORIES: Category[] = [
  {
    title: "Collocations with 'Make' & 'Do'",
    description: "The most confusing pair in English. Learn when to 'make a mistake' vs 'do your homework'.",
    progress: 45,
    lessons: 14,
    words: 180,
    time: "1h 30m",
    icon: Layers,
    color: "from-violet-300 via-violet-200 to-purple-200",
    shadow: "shadow-violet-200"
  },
  {
    title: "Business & Work",
    description: "Professional pairings like 'close a deal', 'chair a meeting', and 'meet a deadline'.",
    progress: 10,
    lessons: 25,
    words: 320,
    time: "2h 45m",
    icon: Briefcase,
    color: "from-blue-300 via-blue-200 to-sky-200",
    shadow: "shadow-blue-200"
  },
  {
    title: "Have, Take & Give",
    description: "Essential verbs used in daily life: 'have a party', 'take a break', 'give a speech'.",
    progress: 0,
    lessons: 18,
    words: 210,
    time: "2h 10m",
    icon: Handshake,
    color: "from-orange-300 via-orange-200 to-amber-200",
    shadow: "shadow-orange-200"
  },
  {
    title: "Adjective + Noun Pairs",
    description: "Natural descriptions like 'heavy rain' (not strong rain) or 'high quality'.",
    progress: 0,
    lessons: 12,
    words: 150,
    time: "1h 15m",
    icon: Puzzle,
    color: "from-emerald-300 via-emerald-200 to-teal-200",
    shadow: "shadow-emerald-200"
  },
];

// --- COMPONENT: CATEGORY CARD ---
const CategoryCard = ({ category }: { category: Category }) => (
  <div className="group bg-white rounded-[2rem] p-5 border border-slate-100 hover:border-blue-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 cursor-pointer flex gap-6 overflow-hidden relative">
    {/* Card Icon Design */}
    <div className={`hidden sm:flex w-28 shrink-0 rounded-2xl bg-gradient-to-br ${category.color} p-4 flex-col items-center justify-center relative shadow-lg ${category.shadow} group-hover:scale-105 transition-transform duration-300`}>
      <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
      <div className="absolute top-3 w-8 h-1 bg-white/30 rounded-full"></div>
      <div className="relative z-10 text-center flex flex-col items-center">
        <category.icon className="w-10 h-10 text-slate-800 mb-1 opacity-80" strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-3 right-3 bg-white/90 p-1.5 rounded-full shadow-sm">
        <ArrowRight className="w-3 h-3 text-slate-700" />
      </div>
    </div>

    {/* Content */}
    <div className="flex-1 flex flex-col py-1">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1">
          {category.title}
        </h3>
        <button className="text-slate-300 hover:text-amber-400 transition-colors">
          <Bookmark className="w-6 h-6 fill-current opacity-20 hover:opacity-100" />
        </button>
      </div>

      <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-2 font-medium">
        {category.description}
      </p>

      {/* Stats */}
      <div className="mt-auto">
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400 mb-4 bg-slate-50 w-fit px-3 py-1.5 rounded-full border border-slate-100">
          <div className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5 text-blue-400" /><span>{category.lessons}</span></div>
          <div className="hidden sm:block w-px h-3 bg-slate-200"></div>
          <div className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-emerald-400" /><span>{category.words}</span></div>
          <div className="hidden sm:block w-px h-3 bg-slate-200"></div>
          <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-orange-400" /><span>{category.time}</span></div>
        </div>
        {/* Progress Bar */}
        <div className="flex items-center gap-3">
          <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-full rounded-full" style={{ width: `${category.progress}%` }}></div>
          </div>
          <span className="text-xs font-bold text-slate-400">{category.progress}%</span>
        </div>
      </div>
    </div>
  </div>
);

// --- COMPONENT: EDUCATIONAL CONTENT (COLLOCATIONS) ---
const EducationalContent = () => {
  return (
    <div className="space-y-12 mt-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. Intro Section */}
      <div className="relative">
        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-violet-500 rounded-full"></div>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">The Art of Word Pairing</h2>
        <p className="text-slate-600 text-lg leading-relaxed mb-6">
          A <span className="font-bold text-slate-800">collocation</span> is a combination of words that naturally go together. 
          Native speakers use them instinctively. If you swap a word, you might be understood, but you won't sound "right".
        </p>
        
        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6">
           <div className="bg-green-50 p-6 rounded-2xl border border-green-100 flex items-center gap-4">
              <div className="bg-white p-3 rounded-full shadow-sm text-green-600"><CheckCircle className="w-6 h-6" /></div>
              <div>
                 <div className="font-bold text-slate-800 text-lg">"Fast Food"</div>
                 <div className="text-slate-500 text-sm">Correct. This is the natural pair.</div>
              </div>
           </div>
           <div className="bg-red-50 p-6 rounded-2xl border border-red-100 flex items-center gap-4">
              <div className="bg-white p-3 rounded-full shadow-sm text-red-600"><XCircle className="w-6 h-6" /></div>
              <div>
                 <div className="font-bold text-slate-800 text-lg">"Quick Food"</div>
                 <div className="text-slate-500 text-sm">Incorrect. We simply don't say this.</div>
              </div>
           </div>
        </div>
      </div>

      {/* 2. Common Types of Collocations */}
      <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
        <div className="flex items-center gap-3 mb-8">
           <LinkIcon className="w-6 h-6 text-blue-500" />
           <h3 className="text-2xl font-bold text-slate-800">Common Structures</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { type: "Adverb + Adjective", example: "Fully aware", wrong: "Completely aware (ok, but less common)", color: "bg-blue-50 text-blue-600" },
            { type: "Verb + Noun", example: "Make a mistake", wrong: "Do a mistake", color: "bg-purple-50 text-purple-600" },
            { type: "Noun + Noun", example: "Round of applause", wrong: "Circle of applause", color: "bg-orange-50 text-orange-600" },
            { type: "Adjective + Noun", example: "Heavy rain", wrong: "Strong rain", color: "bg-emerald-50 text-emerald-600" },
            { type: "Verb + Preposition", example: "Believe in", wrong: "Believe on", color: "bg-pink-50 text-pink-600" },
            { type: "Noun + Verb", example: "Dogs bark", wrong: "Dogs shout", color: "bg-cyan-50 text-cyan-600" },
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors hover:shadow-md bg-slate-50/50">
               <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${item.color} w-fit px-2 py-1 rounded-md`}>{item.type}</div>
               <div className="font-bold text-slate-800 text-lg mb-1">{item.example}</div>
               <div className="text-slate-400 text-xs line-through decoration-slate-400/50">{item.wrong}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Why Learn Collocations? (Grid) */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-indigo-50/50 rounded-[2rem] p-8 border border-indigo-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600"><Sparkles className="w-6 h-6" /></div>
            <h3 className="text-xl font-bold text-slate-800">Sound More Natural</h3>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Using "strong coffee" instead of "powerful coffee" makes you sound like a native speaker immediately. It shows you understand the <em>nuance</em> of the language.
          </p>
        </div>

        <div className="bg-amber-50/50 rounded-[2rem] p-8 border border-amber-100">
          <div className="flex items-center gap-3 mb-6">
             <div className="bg-amber-100 p-2 rounded-lg text-amber-600"><Target className="w-6 h-6" /></div>
            <h3 className="text-xl font-bold text-slate-800">Precision</h3>
          </div>
          <p className="text-slate-600 leading-relaxed">
            English is rich. There is a specific word for everything. You don't just "say" a story, you <strong>tell</strong> a story. You don't "make" a photo, you <strong>take</strong> a photo.
          </p>
        </div>
      </div>

    </div>
  );
};

// --- COMPONENT: DAILY CHALLENGE (UPDATED) ---
const DailyChallenge = () => {
  const [answered, setAnswered] = useState<number | null>(null);
  const correctAnswer = 0; // "Make" is correct for "decision"

  const options = ["Make", "Do", "Create"];

  return (
    <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-0"></div>
      
      <div className="flex items-center gap-2 mb-4 relative z-10">
        <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white p-2 rounded-lg shadow-md shadow-blue-200">
           <Puzzle className="w-5 h-5" />
        </div>
        <h3 className="font-bold text-lg text-slate-800">Daily Challenge</h3>
      </div>

      <div className="space-y-4 relative z-10">
        <p className="text-slate-600 font-medium">Which word collocates with <span className="text-blue-600 font-bold bg-blue-50 px-2 rounded">"a decision"</span>?</p>
        
        <div className="space-y-2">
          {options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => setAnswered(idx)}
              disabled={answered !== null}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 border flex items-center justify-between
                ${answered === null 
                  ? "bg-slate-50 border-slate-100 text-slate-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700" 
                  : answered === idx && idx === correctAnswer 
                    ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                    : answered === idx && idx !== correctAnswer 
                      ? "bg-red-50 border-red-200 text-red-600"
                      : idx === correctAnswer
                        ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                        : "opacity-50"
                }
              `}
            >
              {opt}
              {answered === idx && idx === correctAnswer && <CheckCircle className="w-4 h-4" />}
              {answered === idx && idx !== correctAnswer && <XCircle className="w-4 h-4" />}
            </button>
          ))}
        </div>
        
        {answered === correctAnswer && (
          <div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-2 rounded-lg animate-in fade-in slide-in-from-top-2">
            🎉 Correct! You "make" a decision.
          </div>
        )}
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
export default function CollocationsPage() {
  return (
    <>
      <div className="min-h-screen bg-[#F8FAFC] relative overflow-x-hidden font-sans">
        <Navbar/>
        {/* Background Decor */}
        <div className="hidden lg:flex flex-col gap-6 absolute left-6 top-40 opacity-20 select-none pointer-events-none">
          {[...Array(8)].map((_, i) => <div key={i} className="text-indigo-600 text-xl font-bold">~ ~ ~</div>)}
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-purple-50 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          
          {/* Header Section */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex-1">
                {/* Breadcrumb */}
                <div className="inline-flex flex-wrap items-center gap-2 text-xs font-semibold bg-white px-4 py-1.5 rounded-full shadow-sm border border-slate-100 text-slate-500 mb-6">
                  <a href="#" className="hover:text-blue-500 transition-colors">Home</a>
                  <span className="text-slate-300">/</span>
                  <a href="#" className="hover:text-blue-500 transition-colors">Expressions</a>
                  <span className="text-slate-300">/</span>
                  <span className="text-indigo-600">English Collocations</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 tracking-tight leading-tight">
                  Master English <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Collocations</span>
                </h1>
                <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
                  Words that naturally go together. Learn to speak with precision and flow like a native speaker.
                </p>
              </div>

              {/* Search Bar */}
              <div className="w-full md:w-auto min-w-[300px]">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-indigo-500 transition-colors" />
                    <input type="text" placeholder="Search for a word pair..." className="w-full pl-12 pr-6 py-3.5 bg-white border border-slate-100 rounded-full shadow-lg shadow-slate-200/50 focus:outline-none focus:ring-4 focus:ring-indigo-50 transition-all text-slate-700 placeholder-slate-400 font-medium" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 mb-20">
            
            {/* Left Column: Main Content */}
            <div className="flex-1 min-w-0">
              {/* Category Grid */}
              <div className="grid md:grid-cols-1 xl:grid-cols-2 gap-6">
                {CATEGORIES.map((category, index) => (
                  <CategoryCard key={index} category={category} />
                ))}
                
                {/* Educational Note */}
                <div className="md:col-span-1 xl:col-span-2 bg-gradient-to-r from-violet-50 to-fuchsia-50 rounded-[2rem] p-6 border border-violet-100 flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-violet-900 text-lg">Quick Tip</h3>
                      <p className="text-violet-700/80 text-sm mt-1">Don't memorize single words. Memorize "chunks" of language to learn faster.</p>
                    </div>
                    <div className="bg-white p-3 rounded-full shadow-sm text-2xl">🧠</div>
                </div>
              </div>

              {/* NEW EDUCATIONAL TEXT SECTION (COLLOCATIONS) */}
              <EducationalContent />
            </div>

            {/* Right Column: Sidebar */}
            <div className="w-full lg:w-80 flex flex-col gap-6 shrink-0">
               <DailyChallenge />

               {/* Progress Summary */}
               <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-5 h-5 text-indigo-500" />
                    <h3 className="font-bold text-slate-800">Your Stats</h3>
                  </div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-3xl font-black text-slate-800">8%</span>
                    <span className="text-xs font-bold text-slate-400 mb-1">Fluency Level</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2 mb-4">
                     <div className="bg-indigo-400 h-full rounded-full w-[8%]"></div>
                  </div>
                  <button className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-bold hover:bg-slate-50 transition-colors">
                    View Mastery Map
                  </button>
               </div>
               
               {/* LanGeek Badge */}
               <div className="bg-slate-800 text-white rounded-[2rem] p-6 shadow-xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full"></div>
                 <h3 className="font-bold text-lg mb-2 relative z-10">Powered by LanGeek</h3>
                 <p className="text-slate-300 text-sm relative z-10">2,000+ collocations categorized by topic and type.</p>
               </div>
            </div>

          </div>

          {/* Bottom CTA */}
          <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 rounded-3xl shadow-[0_20px_60px_rgba(129,140,248,0.4)] w-full">
             <div className="p-8 md:p-12 text-center text-white relative z-10">
                <h2 className="text-2xl md:text-3xl font-black mb-4">Stop translating word-for-word.</h2>
                <p className="mb-6 opacity-90 text-sm md:text-base">Start thinking in English chunks today.</p>
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-black/20">Start Learning Free</button>
             </div>
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          </div> 

        </main>
      </div>
    </>
  );
}