"use client";
import React, { useState, useEffect } from "react";
import {
    BookOpen,
    Search,
    Clock,
    ArrowRight,
    Bookmark,
    Globe,
    Sparkles,
    Star,
    Zap,
    TrendingUp,
    CheckCircle,
    XCircle,
    Brain,
    Trophy,
    Flame,
    PlayCircle,
    Quote,
    MoreHorizontal,
    ChevronRight,
    LayoutGrid,
    List as ListIcon,
    // New icons for the article section
    Scroll,
    MessageCircle,
    Layers,
    Lightbulb,
    UserCheck,
    Scale,
} from "lucide-react";
import Navbar from "../navbar/navbar";
import Link from "next/link";
// --- TYPES ---
interface Category {
    id: string;
    title: string;
    description: string;
    progress: number;
    totalItems: number;
    icon: React.ElementType;
    theme: "amber" | "blue" | "emerald" | "rose" | "violet";
}

const CATEGORIES: Category[] = [
    {
        id: "1",
        title: "Essential Wisdom",
        description: "The 50 proverbs used in 80% of daily conversations.",
        progress: 65,
        totalItems: 50,
        icon: Star,
        theme: "amber",
    },
    {
        id: "2",
        title: "Time & Timing",
        description: "Mastering the art of patience and punctuality.",
        progress: 30,
        totalItems: 24,
        icon: Clock,
        theme: "blue",
    },
    {
        id: "3",
        title: "Business & Success",
        description: "Corporate idioms and sayings for the workplace.",
        progress: 10,
        totalItems: 40,
        icon: TrendingUp,
        theme: "emerald",
    },
    {
        id: "4",
        title: "Social Connections",
        description: "Friendship, family, and relationship advice.",
        progress: 0,
        totalItems: 35,
        icon: Globe,
        theme: "rose",
    },
];

// --- UTILS ---
const getThemeStyles = (theme: string) => {
    const styles = {
        amber:
            "bg-amber-100 text-amber-600 border-amber-200 hover:border-amber-400",
        blue: "bg-blue-100 text-blue-600 border-blue-200 hover:border-blue-400",
        emerald:
            "bg-emerald-100 text-emerald-600 border-emerald-200 hover:border-emerald-400",
        rose: "bg-rose-100 text-rose-600 border-rose-200 hover:border-rose-400",
        violet:
            "bg-violet-100 text-violet-600 border-violet-200 hover:border-violet-400",
    };
    return styles[theme as keyof typeof styles] || styles.amber;
};

// 2. MODERN CATEGORY CARD
const CategoryCard = ({ item }: { item: Category }) => {
    const themeClass = getThemeStyles(item.theme);

    return (
        <div className="group relative bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            {/* Background Decor */}
            <div
                className={`absolute top-0 right-0 w-32 h-32 opacity-10 rounded-bl-full transition-transform group-hover:scale-110 ${themeClass
                    .split(" ")[0]
                    .replace("bg-", "bg-")}`}
            />

            <div className="flex justify-between items-start mb-4">
                <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${themeClass} shadow-sm group-hover:scale-110 transition-transform duration-300`}
                >
                    <item.icon size={24} strokeWidth={2.5} />
                </div>

                {/* Progress Badge */}
                <div className="flex flex-col items-end">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Level 1
                    </span>
                    <span className="text-sm font-black text-slate-800">
                        {item.progress}%
                    </span>
                </div>
            </div>

            <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
                {item.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                {item.description}
            </p>

            {/* Dynamic Progress Bar */}
            <div className="relative w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-4">
                <div
                    className={`absolute left-0 top-0 h-full rounded-full transition-all duration-1000 ease-out ${item.theme === "amber"
                            ? "bg-amber-400"
                            : item.theme === "blue"
                                ? "bg-blue-400"
                                : item.theme === "emerald"
                                    ? "bg-emerald-400"
                                    : "bg-rose-400"
                        }`}
                    style={{ width: `${item.progress}%` }}
                />
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs font-medium text-slate-400">
                    <ListIcon size={14} />
                    <span>{item.totalItems} Lessons</span>
                </div>
                <button className="text-slate-300 hover:text-amber-500 transition-colors">
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

// 3. INTERACTIVE QUIZ WIDGET
const QuizWidget = () => {
    const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");

    const handleGuess = (isCorrect: boolean) => {
        setStatus(isCorrect ? "correct" : "wrong");
        setTimeout(() => setStatus("idle"), 2000);
    };

    return (
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 text-white relative overflow-hidden shadow-2xl shadow-slate-900/20">
            {/* Decorative blobs */}
            <div className="absolute top-[-50%] left-[-20%] w-64 h-64 bg-amber-500/20 blur-3xl rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-20%] right-[-20%] w-40 h-40 bg-blue-500/20 blur-3xl rounded-full pointer-events-none"></div>

            <div className="relative z-10">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                        <Sparkles className="text-amber-400" size={18} />
                        <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                            Daily Quiz
                        </span>
                    </div>
                    <span className="bg-white/10 px-2 py-1 rounded text-xs font-mono">
                        +50 XP
                    </span>
                </div>

                <h4 className="text-lg font-medium text-slate-100 mb-6 leading-relaxed">
                    "Make hay while the{" "}
                    <span className="text-amber-400 font-bold border-b-2 border-amber-400/30">
                        ____
                    </span>{" "}
                    shines."
                </h4>

                <div className="grid grid-cols-2 gap-3">
                    {["Moon", "Sun", "Star", "Light"].map((opt) => (
                        <button
                            key={opt}
                            onClick={() => handleGuess(opt === "Sun")}
                            className={`py-3 rounded-xl text-sm font-bold transition-all duration-200 border border-white/5 hover:bg-white/10 active:scale-95
                ${status === "correct" && opt === "Sun"
                                    ? "!bg-emerald-500 !border-emerald-400"
                                    : ""
                                }
                ${status === "wrong" && opt !== "Sun" ? "opacity-50" : ""}
              `}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

// 4. LEARNING TABS (Dynamic Content Replacement)
const LearningTabs = () => {
    const [activeTab, setActiveTab] = useState<"proverb" | "idiom">("proverb");

    return (
        <div className="mt-12 bg-white rounded-3xl border border-slate-100 shadow-sm p-1">
            {/* Tab Switcher */}
            <div className="flex p-1 bg-slate-50/80 rounded-2xl mb-6">
                <button
                    onClick={() => setActiveTab("proverb")}
                    className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2
            ${activeTab === "proverb"
                            ? "bg-white text-slate-800 shadow-sm"
                            : "text-slate-400 hover:text-slate-600"
                        }`}
                >
                    <Quote
                        size={16}
                        className={activeTab === "proverb" ? "text-amber-500" : ""}
                    />
                    Proverbs
                </button>
                <button
                    onClick={() => setActiveTab("idiom")}
                    className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2
            ${activeTab === "idiom"
                            ? "bg-white text-slate-800 shadow-sm"
                            : "text-slate-400 hover:text-slate-600"
                        }`}
                >
                    <Brain
                        size={16}
                        className={activeTab === "idiom" ? "text-blue-500" : ""}
                    />
                    Idioms
                </button>
            </div>

            {/* Content Area */}
            <div className="px-6 pb-6 min-h-[200px]">
                {activeTab === "proverb" ? (
                    <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">
                            Literal Wisdom
                        </h3>
                        <p className="text-slate-500 mb-6 max-w-lg">
                            Proverbs state a general truth or piece of advice. They are often
                            literal instructions for life.
                        </p>
                        <div className="bg-amber-50 rounded-xl p-5 border border-amber-100 flex gap-4 items-start">
                            <div className="bg-white p-2 rounded-full shadow-sm text-xl">
                                🍯
                            </div>
                            <div>
                                <p className="font-bold text-slate-800 text-lg">
                                    "You catch more flies with honey than vinegar."
                                </p>
                                <p className="text-amber-700/80 text-sm mt-1">
                                    Being polite gets you what you want faster than being rude.
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">
                            Figurative Language
                        </h3>
                        <p className="text-slate-500 mb-6 max-w-lg">
                            Idioms act as metaphors. You cannot understand the meaning just by
                            reading the individual words.
                        </p>
                        <div className="bg-blue-50 rounded-xl p-5 border border-blue-100 flex gap-4 items-start">
                            <div className="bg-white p-2 rounded-full shadow-sm text-xl">
                                ❄️
                            </div>
                            <div>
                                <p className="font-bold text-slate-800 text-lg">
                                    "Break the ice"
                                </p>
                                <p className="text-blue-700/80 text-sm mt-1">
                                    To do or say something to relieve tension or start a
                                    conversation.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const ProverbGuide = () => {
    return (
        <div className="mt-16 space-y-16">
            {/* Introduction */}
            <section className="relative">
                <div className="absolute -left-4 top-0 w-1 h-12 bg-amber-500 rounded-r-full"></div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    What Are Proverbs?
                </h2>
                <p className="text-lg text-slate-600 leading-8 mb-8">
                    Proverbs are succinct expressions of wisdom or advice, often rooted in
                    centuries of cultural and social experience. They stand out for their{" "}
                    <span className="font-semibold text-slate-800">
                        brevity, clarity, and ability
                    </span>{" "}
                    to convey profound meanings with just a few words.
                </p>

                <div className="bg-white border-l-4 border-amber-400 p-6 rounded-r-2xl shadow-sm italic text-slate-700">
                    <div className="flex gap-4 mb-4">
                        <div className="flex-1">
                            <p className="font-serif text-lg mb-1">
                                "A stitch in time saves nine"
                            </p>
                            <p className="text-sm text-slate-400 font-sans not-italic">
                                Emphasizing the value of timely action.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <p className="font-serif text-lg mb-1">
                                "Actions speak louder than words"
                            </p>
                            <p className="text-sm text-slate-400 font-sans not-italic">
                                Highlighting the importance of deeds over promises.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Origins */}
            <section>
                <div className="flex items-center gap-3 mb-8">
                    <div className="bg-indigo-100 text-indigo-600 p-2 rounded-lg">
                        <Scroll size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">
                        Where Do They Come From?
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Ancient Texts",
                            icon: BookOpen,
                            desc: "Roots in religious or philosophical writings like the Bible or Confucian teachings.",
                            color: "bg-orange-50 text-orange-600",
                        },
                        {
                            title: "Oral Traditions",
                            icon: MessageCircle,
                            desc: "Passed down through generations, reflecting shared community wisdom.",
                            color: "bg-blue-50 text-blue-600",
                        },
                        {
                            title: "Folklore",
                            icon: Sparkles,
                            desc: "Emerging from myths, fables, or historical events to capture lessons.",
                            color: "bg-emerald-50 text-emerald-600",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white p-5 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors"
                        >
                            <div
                                className={`${item.color} w-10 h-10 rounded-xl flex items-center justify-center mb-4`}
                            >
                                <item.icon size={20} />
                            </div>
                            <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Comparisons */}
            <section className="bg-slate-900 text-slate-300 rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
                {/* Background effects */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                        <div>
                            <div className="inline-flex items-center gap-2 text-amber-400 font-bold text-sm uppercase tracking-wider mb-2">
                                <Scale size={16} />
                                <span>Structural Analysis</span>
                            </div>
                            <h2 className="text-3xl font-bold text-white">
                                Know the Difference
                            </h2>
                        </div>
                        <p className="max-w-md text-sm text-slate-400">
                            While proverbs, idioms, and collocations are all integral to
                            language, they differ significantly in purpose and form.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {/* Card 1 */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <div className="bg-amber-500/20 text-amber-400 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                                <Quote size={20} />
                            </div>
                            <h3 className="text-white font-bold mb-2">Proverbs</h3>
                            <p className="text-sm leading-relaxed mb-4">
                                Universal truths or advice. Direct and usually a complete
                                sentence.
                            </p>
                            <div className="text-xs font-mono bg-black/30 p-2 rounded text-amber-200">
                                "A penny saved is a penny earned."
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <div className="bg-blue-500/20 text-blue-400 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                                <Brain size={20} />
                            </div>
                            <h3 className="text-white font-bold mb-2">Idioms</h3>
                            <p className="text-sm leading-relaxed mb-4">
                                Figurative expressions where meanings differ from literal words.
                            </p>
                            <div className="text-xs font-mono bg-black/30 p-2 rounded text-blue-200">
                                "Spill the beans"
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <div className="bg-rose-500/20 text-rose-400 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                                <Layers size={20} />
                            </div>
                            <h3 className="text-white font-bold mb-2">Collocations</h3>
                            <p className="text-sm leading-relaxed mb-4">
                                Natural word pairings that enhance fluency but are literal.
                            </p>
                            <div className="text-xs font-mono bg-black/30 p-2 rounded text-rose-200">
                                "Make a decision"
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Usage Tips */}
            <section className="bg-indigo-50/50 rounded-3xl p-8 border border-indigo-50">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-white p-2 rounded-full shadow-sm text-indigo-600">
                        <Lightbulb size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">
                        How to Use Proverbs
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <p className="text-slate-600 leading-relaxed">
                            Proverbs are versatile tools. They can be used in casual
                            conversations, creative writing, or formal speeches to:
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Enhance Authenticity: Make your language relatable.",
                                "Enrich Expression: Add depth and elegance.",
                                "Bridge Cultural Gaps: Connect with native speakers.",
                            ].map((tip, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-3 text-slate-700 font-medium"
                                >
                                    <CheckCircle
                                        size={18}
                                        className="text-emerald-500 flex-shrink-0"
                                    />
                                    {tip}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <h4 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
                            <UserCheck size={18} />
                            Quick Tip
                        </h4>
                        <p className="text-slate-600 text-sm mb-4">
                            Context is key. Using proverbs appropriately ensures they
                            complement your message without causing confusion.
                        </p>
                        <div className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-2 rounded-lg inline-block">
                            Start with LanGeek's categorized lessons above!
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// --- MAIN PAGE LAYOUT ---
export default function ProverbsPage() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="min-h-screen bg-[#F8FAFC] relative overflow-x-hidden font-sans selection:bg-amber-200 selection:text-amber-900">
            <Navbar/>
            {/* Background Decor */}
            <div className="hidden lg:flex flex-col gap-6 absolute left-6 top-40 opacity-20 select-none pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="text-indigo-600 text-xl font-bold">
                        ~ ~ ~
                    </div>
                ))}
            </div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-purple-50 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

            {/* Content Wrapper */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8">
                {/* Header/Breadcrumbs Section */}
                <div className="mb-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="flex-1">
                            {/* Breadcrumb */}
                            <div className="inline-flex flex-wrap items-center gap-2 text-xs font-semibold bg-white px-4 py-1.5 rounded-full shadow-sm border border-slate-100 text-slate-500 mb-6">
                                <a href="/" className="hover:text-blue-500 transition-colors">
                                    Home
                                </a>
                                <span className="text-slate-300">/</span>
                                <Link href="/expressions" className="hover:text-blue-500 transition-colors">
                                    Expressions
                                </Link>
                                <span className="text-slate-300">/</span>
                                <span className="text-indigo-600">English Proverbs</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 tracking-tight leading-tight">
                                English{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                                    Proverbs
                                </span>
                            </h1>
                            <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
                                Here you will find a selection of English proverbs categorized
                                by topic for easier access and better understanding.
                            </p>
                        </div>

                        {/* Search Bar */}
                        <div className="w-full md:w-auto min-w-[300px]">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-indigo-500 transition-colors" />
                                    <input
                                        type="text"
                                        placeholder="Search for a word pair..."
                                        className="w-full pl-12 pr-6 py-3.5 bg-white border border-slate-100 rounded-full shadow-lg shadow-slate-200/50 focus:outline-none focus:ring-4 focus:ring-indigo-50 transition-all text-slate-700 placeholder-slate-400 font-medium"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <main>
                    {/* Main Content Grid */}
                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* Left Column (Content) */}
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                                    <LayoutGrid className="text-amber-500" />
                                    Learning Paths
                                </h2>
                                <button className="text-sm font-bold text-slate-400 hover:text-amber-600 transition-colors">
                                    View All
                                </button>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {CATEGORIES.map((cat) => (
                                    <CategoryCard key={cat.id} item={cat} />
                                ))}
                            </div>

                            {/* Dynamic Tab Section */}
                            <LearningTabs />

                            {/* NEW EDUCATIONAL SECTION INSERTED HERE */}
                            <ProverbGuide />
                        </div>

                        {/* Right Column (Sidebar) */}
                        <div className="w-full lg:w-80 space-y-8">
                            {/* Quiz Box */}
                            <QuizWidget />

                            {/* Stats / Progress */}
                            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="font-bold text-slate-800">Your Progress</h3>
                                    <MoreHorizontal size={20} className="text-slate-300" />
                                </div>

                                <div className="flex items-end gap-2 mb-2">
                                    <span className="text-4xl font-black text-slate-800">32</span>
                                    <span className="text-slate-400 text-sm font-medium mb-1.5">
                                        / 150 mastered
                                    </span>
                                </div>

                                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden mb-4">
                                    <div className="h-full bg-slate-800 w-[22%] rounded-full"></div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group">
                                        <div className="bg-amber-100 text-amber-600 p-2 rounded-lg group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                            <Trophy size={16} />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs font-bold text-slate-400 uppercase">
                                                Next Achievement
                                            </p>
                                            <p className="text-sm font-bold text-slate-800">
                                                Wise Owl Badge
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pro Tip Card */}
                            <div className="bg-indigo-50 rounded-3xl p-6 border border-indigo-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-indigo-200 rounded-full opacity-50 blur-xl"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-2 mb-3 text-indigo-700">
                                        <PlayCircle size={20} />
                                        <span className="font-bold">Pro Tip</span>
                                    </div>
                                    <p className="text-indigo-900/80 text-sm leading-relaxed mb-4">
                                        Try using one new proverb in a conversation today. Context
                                        creates memory!
                                    </p>
                                    <button className="text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-white px-3 py-2 rounded-lg shadow-sm">
                                        View Daily Examples
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
