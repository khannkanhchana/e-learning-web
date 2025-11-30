"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Search,
  TrendingUp,
  Star,
  CheckCircle2,
  Mail
} from "lucide-react";
import Navbar from "../navbar/navbar";

export default function Expressions() {
  const [activeTab, setActiveTab] = React.useState("All");

  return (
    // Changed main wrapper to relative and overflow-hidden to contain the background shapes
    <div className="min-h-screen bg-white relative overflow-hidden font-sans text-slate-900 selection:bg-orange-100">
      <Navbar />
      {/* ========== BACKGROUND DECORATIONS ========== */}
      <div className="absolute inset-0 pointer-events-none -z-10">

        {/* 1. Subtle Dot Pattern (Technical/Academic Feel) */}
        <div className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}>
        </div>

        {/* 2. Left Side "Glow" (Matches the Orange Phrasal Verbs theme) */}
        <div className="absolute -top-[10%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-r from-orange-100/80 to-yellow-100/80 blur-[80px] opacity-60 mix-blend-multiply animate-pulse-slow"></div>

        {/* 3. Right Side "Glow" (Matches the Cyan Proverbs theme) */}
        <div className="absolute top-[10%] -right-[10%] w-[35vw] h-[50vw] rounded-full bg-gradient-to-l from-cyan-100/80 to-blue-100/80 blur-[90px] opacity-60 mix-blend-multiply"></div>

        {/* 4. Bottom/Center Depth (Adds weight to the footer area) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-t from-white via-white to-transparent"></div>
      </div>
      {/* ========================================= */}


      <div className="py-12 px-6">
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-10 relative">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-orange-400 animate-pulse" />
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Master English Expressions
            </h1>
            <Sparkles className="w-6 h-6 text-orange-400 animate-pulse" />
          </div>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Unlock the secrets of native fluency with our curated lists of idioms, proverbs, and collocations.
          </p>
        </div>

        {/* --- SEARCH & TAGS COMPONENT --- */}
        <div className="max-w-4xl mx-auto mb-16 relative z-10">
          {/* Search Bar */}
          <div className="relative group mb-6 shadow-xl shadow-blue-500/5 rounded-2xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-gray-100 focus:border-blue-200 text-gray-900 rounded-2xl transition-all duration-300 outline-none hover:shadow-lg focus:shadow-xl focus:bg-white placeholder-gray-400"
              placeholder="Search for 'raining cats and dogs' or 'business idioms'..."
            />
            <button className="absolute right-2 top-2 bottom-2 bg-blue-600 text-white px-6 rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg transform active:scale-95">
              Search
            </button>
          </div>

          {/* Trending Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 text-gray-400 text-sm font-semibold uppercase tracking-wider mr-2">
              <TrendingUp className="w-4 h-4" /> Trending:
            </div>
            {["Business", "Weather", "Food", "Emotions", "Slang"].map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTab(tag)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${activeTab === tag
                    ? "bg-gray-900 text-white border-gray-900 shadow-lg scale-105"
                    : "bg-white/60 backdrop-blur-sm text-gray-600 border-gray-200 hover:border-gray-400 hover:bg-white"
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">

          {/* --- MAIN GRID LAYOUT --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

            {/* LEFT COLUMN: Stacked Cards */}
            <div className="flex flex-col gap-8">

              <div className="bg-[#FFF8EE]/90 backdrop-blur-sm rounded-[32px] p-8 md:p-10 flex flex-col justify-between hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300 border border-orange-100/50">

                <div className="flex flex-col-reverse md:flex-row md:items-start justify-between gap-6">
                  <div className="md:w-3/5">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-500">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                      Phrasal Verbs
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
                      Master the tricky verbs that change meaning with particles like 'up', 'down', and 'out'.
                    </p>
                  </div>

                  {/* Puzzle Visual */}
                  <div className="flex items-center justify-center relative h-24 w-32 mx-auto md:mx-0 shrink-0">
                    <div className="absolute left-2 top-2 bg-[#EEF8F0] text-gray-800 font-handwriting text-xl font-bold p-4 rounded-l-lg rounded-r-sm shadow-sm border-r-2 border-dashed border-gray-300 z-10 transform -rotate-3 hover:rotate-0 transition-transform">
                      sign
                    </div>
                    <div className="absolute right-0 top-2 bg-[#E0F2FE] text-gray-800 font-handwriting text-xl font-bold p-4 rounded-r-lg rounded-l-sm shadow-sm z-0 transform rotate-3 hover:rotate-0 transition-transform">
                      up
                    </div>
                  </div>
                </div>

                <div>
                  <Link
                    href="/phrasalVerbs"
                    className="group border border-orange-200 text-orange-600 px-6 py-2 rounded-full font-medium hover:bg-orange-50 transition flex items-center gap-2 text-sm bg-transparent w-fit"
                  >
                    Explore Verbs
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>


              {/* 2. English Collocations */}
              <div className="bg-[#FAFAFA]/90 backdrop-blur-sm rounded-[32px] p-8 md:p-10 flex flex-col justify-between hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 border border-white/50 grow">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    English Collocations
                  </h2>

                  {/* Math Visual */}
                  <div className="flex flex-col items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
                    <div className="flex flex-wrap justify-center items-center gap-2 text-lg font-medium text-gray-500">
                      <span className="bg-[#FFF8E1] text-gray-700 px-3 py-1 rounded-md border border-yellow-100 text-sm">make</span>
                      <span className="text-gray-300 font-bold">+</span>
                      <span className="bg-[#E3F2FD] text-gray-700 px-3 py-1 rounded-md border border-blue-100 text-sm">decision</span>
                    </div>
                    <div className="text-gray-300 my-1 text-lg">↓</div>
                    <div>
                      <span className="bg-gradient-to-r from-purple-50 to-pink-50 text-purple-800 px-6 py-2 rounded-xl text-lg font-bold shadow-sm inline-block">
                        make a decision
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
                    Learn which words naturally go together to sound more like a native speaker.
                  </p>
                </div>
                <div>
                  <button className="group border border-gray-300 text-gray-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition flex items-center gap-2 text-sm w-fit">
                    Start Learning <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Tall Card */}
            <div className="flex flex-col h-full">
              {/* 3. English Proverbs (Full Height) */}
              <div className="bg-[#E0F7FA]/90 backdrop-blur-sm rounded-[32px] p-8 md:p-10 relative overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300 border border-cyan-100/50">
                {/* Background Decoration */}
                <div className="absolute top-[-50px] right-[-50px] w-64 h-64 border-[3px] border-dashed border-teal-200/50 rounded-full pointer-events-none animate-spin-slow"></div>

                <div className="relative z-10 flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-teal-100 rounded-lg text-teal-600">
                          <Sparkles className="w-5 h-5" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">
                          English Proverbs
                        </h2>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-sm mb-8">
                        Timeless wisdom passed down through generations. Explore meanings and origins.
                      </p>
                    </div>
                  </div>

                  {/* Visuals */}
                  <div className="relative h-64 w-full mt-4">
                    <div className="absolute top-0 right-0 left-0 space-y-4">
                      {/* Chat Bubble 1 */}
                      <div className="bg-white p-4 rounded-2xl rounded-tr-none shadow-md border-b-4 border-teal-100 transform translate-x-4 hover:translate-x-2 transition-transform">
                        <p className="text-gray-800 font-medium text-sm">"Better late than never"</p>
                        <p className="text-gray-400 text-xs mt-1">Doing something late is better than not doing it.</p>
                      </div>
                      {/* Chat Bubble 2 */}
                      <div className="bg-teal-600 p-4 rounded-2xl rounded-tl-none shadow-md border-b-4 border-teal-800 transform -translate-x-2 hover:-translate-x-0 transition-transform">
                        <p className="text-white font-medium text-sm">"Actions speak louder than words"</p>
                        <p className="text-teal-200 text-xs mt-1">What you do is more significant than what you say.</p>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="mt-auto pt-8">
                  <button className="group bg-teal-600 text-white px-8 py-3 rounded-full font-medium hover:bg-teal-700 hover:shadow-lg transition-all flex items-center gap-2 text-sm w-fit">
                    Read Proverbs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* --- INTERACTIVE "DAILY CHALLENGE" BAR --- */}
          <div className="w-full bg-[#1e293b] rounded-[32px] p-8 md:p-12 mb-8 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between shadow-2xl hover:scale-[1.01] transition-transform duration-500">
            {/* Decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

            <div className="relative z-10 max-w-xl">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Star className="text-yellow-400 w-5 h-5 fill-yellow-400" />
                <span className="text-blue-200 font-bold uppercase tracking-widest text-xs">Daily Challenge</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Quiz: "Break a ____"</h3>
              <p className="text-slate-300 mb-6">
                Which word completes this idiom meaning "Good luck"?
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <button className="px-6 py-2 rounded-xl bg-slate-700 text-slate-300 hover:bg-red-500 hover:text-white transition font-medium border border-slate-600">Glass</button>
                <button className="px-6 py-2 rounded-xl bg-slate-700 text-slate-300 hover:bg-green-500 hover:text-white transition font-medium border border-slate-600">Leg</button>
                <button className="px-6 py-2 rounded-xl bg-slate-700 text-slate-300 hover:bg-red-500 hover:text-white transition font-medium border border-slate-600">Stick</button>
              </div>
            </div>

            <div className="mt-8 md:mt-0 relative">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
                <span className="text-4xl">🎭</span>
              </div>
            </div>
          </div>

          {/* 4. English Idioms (Full Width Bottom) */}
          <div className="bg-[#FFF0F0]/90 backdrop-blur-sm rounded-[32px] p-8 md:p-10 relative overflow-hidden flex flex-col md:flex-row items-center md:items-start justify-between hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300 border border-red-100/50">
            <div className="md:w-3/5 z-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                English Idioms
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 md:mb-0 text-sm md:text-base">
                Learn English idioms with clear meanings, examples, and explanations
                to understand how native speakers use them in everyday conversations.
              </p>
              <div className="mt-8 hidden md:block">
                <button className="group border border-red-300 text-red-600 px-6 py-2 rounded-full font-medium hover:bg-red-50 transition flex items-center gap-2 text-sm bg-transparent">
                  Explore Idioms <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="md:w-2/5 flex flex-col items-center md:items-end justify-center relative h-full w-full min-h-[160px]">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-red-200 rounded-full opacity-50"></div>
              <div className="relative z-10 flex flex-col items-end gap-3">
                <div className="bg-[#FFE082] text-yellow-900 px-4 py-1.5 rounded-tl-2xl rounded-br-2xl shadow-sm transform -rotate-3 text-xs font-medium hover:scale-105 transition-transform cursor-pointer">
                  Dog eat dog
                </div>
                <div className="bg-[#F8BBD0] text-pink-900 px-5 py-6 rounded-full shadow-md text-base font-bold flex items-center justify-center relative translate-x-4 border-4 border-white">
                  Idioms
                </div>
                <div className="bg-[#FFCCBC] text-orange-900 px-4 py-1.5 rounded-tr-2xl rounded-bl-2xl shadow-sm transform rotate-3 text-xs font-medium translate-x-[-20px] hover:scale-105 transition-transform cursor-pointer">
                  Wild and woolly
                </div>
              </div>
              <div className="mt-6 md:hidden">
                <button className="border border-red-300 text-red-600 px-6 py-2 rounded-full font-medium hover:bg-red-50 transition flex items-center gap-2 text-sm bg-transparent">
                  Explore <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* --- NEWSLETTER FOOTER --- */}
          <div className="mt-20 text-center border-t border-gray-200/60 pt-16 pb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Get an Idiom in your inbox daily</h2>
            <p className="text-gray-500 mb-6">Join 10,000+ learners improving their English.</p>
            <div className="flex max-w-md mx-auto gap-2">
              <div className="relative grow">
                <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                <input type="email" placeholder="you@example.com" className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition shadow-sm" />
              </div>
              <button className="bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-black transition shadow-lg hover:shadow-xl transform active:scale-95">Subscribe</button>
            </div>
            <p className="text-xs text-gray-400 mt-8">© 2024 English Expressions. All rights reserved.</p>
          </div>

        </div>
      </div>
    </div>
  );
}