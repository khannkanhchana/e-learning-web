"use client";
import React, { useState } from 'react';
import { 
  BookOpen, Search, Clock, ArrowRight, Bookmark, Globe, 
  Sparkles, Star, Zap, TrendingUp, CheckCircle, XCircle, 
  HelpCircle, Layers, AlertTriangle, Lightbulb, Target
} from 'lucide-react';
import Navbar from '../navbar/navbar';

// --- TYPE DEFINITIONS ---
interface Category {
  title: string;
  description: string;
  progress: number;
  lessons: number;
  words: number;
  time: string;
  image: string;
  color: string;
  shadow: string;
}

// --- STATIC DATA ---
const CATEGORIES: Category[] = [
  {
    title: "Phrasal Verbs Using 'Up'",
    description: "In this section, we have prepared a list of phrasal verbs that contain 'up' as their particle.",
    progress: 75,
    lessons: 22,
    words: 289,
    time: "2h 25m",
    image: "UP",
    color: "from-emerald-300 via-emerald-200 to-teal-200",
    shadow: "shadow-emerald-200"
  },
  {
    title: "Phrasal Verbs Using 'Out'",
    description: "List of phrasal verbs with 'out' as their particle, such as turn out, carry out, etc.",
    progress: 10,
    lessons: 15,
    words: 215,
    time: "1h 48m",
    image: "OUT",
    color: "from-orange-300 via-orange-200 to-amber-200",
    shadow: "shadow-orange-200"
  },
  {
    title: "Phrasal Verbs Using 'Off' & 'In'",
    description: "Verbs with 'off' and 'in', such as wash off, kick off, shut in, fill in, etc.",
    progress: 0,
    lessons: 18,
    words: 256,
    time: "2h 10m",
    image: "OFF",
    color: "from-yellow-300 via-yellow-200 to-amber-200",
    shadow: "shadow-yellow-200"
  },
  {
    title: "Phrasal Verbs Using 'On'",
    description: "Particles 'on' or 'upon', such as go on, hang on, touch up, fall upon, etc.",
    progress: 0,
    lessons: 16,
    words: 198,
    time: "1h 35m",
    image: "ON",
    color: "from-cyan-300 via-cyan-200 to-sky-200",
    shadow: "shadow-cyan-200"
  },
];

// --- COMPONENT: CATEGORY CARD ---
const CategoryCard = ({ category }: { category: Category }) => (
  <div className="group bg-white rounded-[2rem] p-5 border border-slate-100 hover:border-blue-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 cursor-pointer flex gap-6 overflow-hidden relative">
    {/* Book Cover Design */}
    <div className={`hidden sm:flex w-28 shrink-0 rounded-2xl bg-gradient-to-br ${category.color} p-4 flex-col items-center justify-center relative shadow-lg ${category.shadow} group-hover:scale-105 transition-transform duration-300`}>
      <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
      <div className="absolute top-3 w-8 h-1 bg-white/30 rounded-full"></div>
      <div className="relative z-10 text-center">
        <span className="block text-[10px] font-black tracking-widest text-slate-800/60 mb-1">PARTICLE</span>
        <span className="block text-2xl font-black text-slate-800 tracking-tighter drop-shadow-sm">{category.image}</span>
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

// --- COMPONENT: EDUCATIONAL CONTENT (NEW) ---
const EducationalContent = () => {
  return (
    <div className="space-y-12 mt-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. Intro Section */}
      <div className="relative">
        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-violet-500 rounded-full"></div>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">What Are Phrasal Verbs?</h2>
        <p className="text-slate-600 text-lg leading-relaxed mb-6">
          Phrasal verbs are a cornerstone of English fluency. They consist of two or more words: 
          <span className="font-bold text-slate-800"> a verb + a particle </span> 
          (preposition or adverb). While the verb provides the base, the particle alters the meaning—sometimes drastically.
        </p>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm grid md:grid-cols-3 gap-6">
          {[
            { word: "Put off", meaning: "To postpone", icon: Clock, color: "text-orange-500", bg: "bg-orange-50" },
            { word: "Run into", meaning: "To encounter unexpectedly", icon: Zap, color: "text-blue-500", bg: "bg-blue-50" },
            { word: "Look after", meaning: "To take care of", icon: Star, color: "text-purple-500", bg: "bg-purple-50" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className={`p-3 rounded-xl ${item.bg} ${item.color}`}>
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-slate-800 text-lg">{item.word}</div>
                <div className="text-slate-500 text-sm">{item.meaning}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Importance vs Challenges (Grid) */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Why Important */}
        <div className="bg-emerald-50/50 rounded-[2rem] p-8 border border-emerald-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Why They Matter</h3>
          </div>
          <ul className="space-y-4">
            {[
              { title: "Naturalness", desc: "Makes speech sound authentic, not robotic." },
              { title: "Understanding", desc: "Essential for movies, books, and daily chat." },
              { title: "Expressiveness", desc: "Conveys nuances single words cannot." }
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-700">{item.title}:</span>
                  <span className="text-slate-600 ml-1">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges */}
        <div className="bg-amber-50/50 rounded-[2rem] p-8 border border-amber-100">
          <div className="flex items-center gap-3 mb-6">
             <div className="bg-amber-100 p-2 rounded-lg text-amber-600">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Common Challenges</h3>
          </div>
          <ul className="space-y-4">
            {[
              { title: "Non-Literal Meanings", desc: "Cannot always deduce meaning from words." },
              { title: "Abundance", desc: "English contains thousands of them." },
              { title: "Variability", desc: "Some are separable, others are not." }
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <XCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-700">{item.title}:</span>
                  <span className="text-slate-600 ml-1">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 3. How to Master (Timeline Style) */}
      <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
        <div className="flex items-center gap-3 mb-8">
           <Layers className="w-6 h-6 text-blue-500" />
           <h3 className="text-2xl font-bold text-slate-800">How to Master Phrasal Verbs</h3>
        </div>
        
        <div className="relative pl-4 md:pl-8 space-y-10">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-8 top-2 bottom-2 w-0.5 bg-slate-100 -translate-x-1/2"></div>

          {[
            { step: "01", title: "Start with Common Verbs", text: "Focus on everyday verbs like 'get', 'take', and 'put'." },
            { step: "02", title: "Learn in Context", text: "Study examples to understand how they function in real sentences." },
            { step: "03", title: "Practice Regularly", text: "Use quizzes and flashcards to reinforce your memory." },
            { step: "04", title: "Engage with Native Materials", text: "Watch TV shows or read books to see them in action." }
          ].map((item, idx) => (
            <div key={idx} className="relative flex gap-6 items-start group">
              <div className="w-8 h-8 rounded-full bg-white border-4 border-blue-100 text-blue-600 font-bold text-xs flex items-center justify-center relative z-10 group-hover:border-blue-500 group-hover:scale-110 transition-all duration-300">
                {idx + 1}
              </div>
              <div className="flex-1 -mt-1 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                <h4 className="font-bold text-slate-800 text-lg mb-1">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

// --- COMPONENT: DAILY CHALLENGE ---
const DailyChallenge = () => {
  const [answered, setAnswered] = useState<number | null>(null);
  const correctAnswer = 1; 

  const options = ["To vomit", "To mention/introduce", "To lift something"];

  return (
    <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -z-0"></div>
      
      <div className="flex items-center gap-2 mb-4 relative z-10">
        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-2 rounded-lg shadow-md shadow-purple-200">
           <Zap className="w-5 h-5" />
        </div>
        <h3 className="font-bold text-lg text-slate-800">Daily Challenge</h3>
      </div>

      <div className="space-y-4 relative z-10">
        <p className="text-slate-600 font-medium">What is the meaning of <span className="text-purple-600 font-bold bg-purple-50 px-2 rounded">"Bring up"</span>?</p>
        
        <div className="space-y-2">
          {options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => setAnswered(idx)}
              disabled={answered !== null}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 border flex items-center justify-between
                ${answered === null 
                  ? "bg-slate-50 border-slate-100 text-slate-600 hover:bg-purple-50 hover:border-purple-200 hover:text-purple-700" 
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
            🎉 Correct! Usually used in conversation.
          </div>
        )}
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
export default function PhrasalVerbs() {
  return (
    <>
      <div className="min-h-screen bg-[#F8FAFC] relative overflow-x-hidden font-sans">
        <Navbar/>
        {/* Background Decor */}
        <div className="hidden lg:flex flex-col gap-6 absolute left-6 top-40 opacity-20 select-none pointer-events-none">
          {[...Array(8)].map((_, i) => <div key={i} className="text-blue-600 text-xl font-bold">+ + +</div>)}
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-blue-50 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

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
                  <span className="text-blue-600">Phrasal Verbs</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 tracking-tight leading-tight">
                  Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Phrasal Verbs</span>
                </h1>
                <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
                  Explore lists of phrasal verbs organized by particle. Speak like a native.
                </p>
              </div>

              {/* Search Bar */}
              <div className="w-full md:w-auto min-w-[300px]">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                    <input type="text" placeholder="Search for a particle..." className="w-full pl-12 pr-6 py-3.5 bg-white border border-slate-100 rounded-full shadow-lg shadow-slate-200/50 focus:outline-none focus:ring-4 focus:ring-blue-50 transition-all text-slate-700 placeholder-slate-400 font-medium" />
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
                <div className="md:col-span-1 xl:col-span-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-[2rem] p-6 border border-blue-100 flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-blue-900 text-lg">Did you know?</h3>
                      <p className="text-blue-700/80 text-sm mt-1">Native speakers use phrasal verbs more often than formal verbs in daily conversation.</p>
                    </div>
                    <div className="bg-white p-3 rounded-full shadow-sm text-2xl">💡</div>
                </div>
              </div>

              {/* NEW EDUCATIONAL TEXT SECTION */}
              <EducationalContent />
            </div>

            {/* Right Column: Sidebar */}
            <div className="w-full lg:w-80 flex flex-col gap-6 shrink-0">
               <DailyChallenge />

               {/* Progress Summary */}
               <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-5 h-5 text-emerald-500" />
                    <h3 className="font-bold text-slate-800">Your Progress</h3>
                  </div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-3xl font-black text-slate-800">12%</span>
                    <span className="text-xs font-bold text-slate-400 mb-1">Total Mastery</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2 mb-4">
                     <div className="bg-emerald-400 h-full rounded-full w-[12%]"></div>
                  </div>
                  <button className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-bold hover:bg-slate-50 transition-colors">
                    View Full Stats
                  </button>
               </div>
               
               {/* LanGeek Badge (Optional context helper based on your text) */}
               <div className="bg-slate-800 text-white rounded-[2rem] p-6 shadow-xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full"></div>
                 <h3 className="font-bold text-lg mb-2 relative z-10">Powered by LanGeek</h3>
                 <p className="text-slate-300 text-sm relative z-10">Comprehensive database and contextual examples.</p>
               </div>
            </div>

          </div>

          {/* Bottom CTA */}
          <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-indigo-600 to-emerald-700 rounded-3xl shadow-[0_20px_60px_rgba(168,85,247,0.4)] w-full">
             <div className="p-8 md:p-12 text-center text-white relative z-10">
                <h2 className="text-2xl md:text-3xl font-black mb-4">Ready to level up?</h2>
                <p className="mb-6 opacity-90 text-sm md:text-base">Join thousands of learners making their English sound natural.</p>
                <button className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-black/20">Start Learning Free</button>
             </div>
             {/* Background Effects */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          </div> 

        </main>
      </div>
    </>
  );
}