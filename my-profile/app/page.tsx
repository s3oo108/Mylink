import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-purple-900 selection:text-white pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-32">

        {/* Navigation / Header */}
        <header className="flex justify-center items-center py-6 backdrop-blur-md bg-[#050505]/60 sticky top-0 border-b border-white/5 z-50 px-6 -mx-6 rounded-b-2xl">
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <Link href="#about" className="hover:text-purple-400 transition-colors">About</Link>
            <Link href="#tech" className="hover:text-purple-400 transition-colors">Tech Stack</Link>
            <Link href="#contact" className="hover:text-purple-400 transition-colors">Contact</Link>
          </nav>
        </header>

        {/* 1. Hero Section */}
        <section className="flex flex-col justify-center min-h-[70vh] items-center text-center pt-10 group relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-8 backdrop-blur-sm transition-transform hover:scale-105 cursor-default relative z-10">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            070926 • 로봇학부 AI로봇전공
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 relative z-10">
            안녕하세요,<br />
            <span className="inline-block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 py-1">
              임석준
            </span>
            입니다.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed relative z-10 mt-2">
            AI와 로봇 기술을 배우는 한 학생.
          </p>

          <div className="mt-12 flex justify-center gap-4 relative z-10">
            <Link href="#about" className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-medium transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:-translate-y-1 flex items-center gap-2">
              알아보기
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </section>

        {/* 2. About Me */}
        <section id="about" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">About Me</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed border-l-2 border-purple-500/30 pl-6">
              <p>
                <strong className="text-white font-semibold flex items-center gap-2">
                  <span className="inline-block p-1 bg-purple-500/10 rounded-md">
                    <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  AI에 큰 관심이 있으며
                </strong>
                <br />관련 기술 및 코딩을 배우며 로봇과 같은 기술을 구현해내고 싶은 학생입니다.
              </p>
              <div className="h-px bg-white/5 my-4"></div>
              <p>
                다양한 경험을 겪으면서, <span className="text-purple-400 font-medium">미래의 문제를 해결하고자 하는 개발자</span>로 성장하고 싶은 학습자입니다.
              </p>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-square md:aspect-video bg-[#0a0a0a] ring-1 ring-white/10 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent opacity-50"></div>

                {/* Futuristic aesthetic element */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute w-32 h-32 border border-purple-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute w-24 h-24 border border-indigo-500/30 rounded-full animate-[spin_7s_linear_infinite_reverse]"></div>
                  <svg className="w-12 h-12 text-purple-400/80 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Tech Stack */}
        <section id="tech" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Tech Stack</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
          </div>

          <div className="mb-10">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 shadow-inner">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
              </span>
              <span className="font-medium tracking-wide">Currently Learning & Exploring</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            <TechCard name="Python" icon="🐍" color="hover:border-yellow-500/50 hover:bg-yellow-500/10 hover:shadow-[0_0_15px_rgba(234,179,8,0.1)]" progress="w-[65%]" />
            <TechCard name="C" icon="⚙️" color="hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]" progress="w-[50%]" />
            <TechCard name="Robotics" icon="🤖" color="hover:border-purple-500/50 hover:bg-purple-500/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.1)]" progress="w-[35%]" />
            <TechCard name="HTML" icon="🌐" color="hover:border-orange-500/50 hover:bg-orange-500/10 hover:shadow-[0_0_15px_rgba(249,115,22,0.1)]" progress="w-[20%]" />
            <TechCard name="CSS" icon="🎨" color="hover:border-sky-500/50 hover:bg-sky-500/10 hover:shadow-[0_0_15px_rgba(14,165,233,0.1)]" progress="w-[20%]" />
          </div>
        </section>

        {/* 4. Contact */}
        <section id="contact" className="scroll-mt-32 pb-12">
          <div className="p-8 md:p-16 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 relative overflow-hidden text-center backdrop-blur-md">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70"></div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Let's Connect</h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              기발한 아이디어, 새로운 기술, 그리고 미래에 대한 이야기. <br className="hidden md:block" />
              어떤 주제든 환영합니다.
            </p>

            <a
              href="mailto:sept1087@naver.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium transition-all group border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400 group-hover:scale-110 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-lg tracking-wide">sept1087@naver.com</span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 pb-4 text-center border-t border-white/10 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Seokjun Lim. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}

function TechCard({ name, icon, color, progress = "w-[50%]" }: { name: string, icon: string, color: string, progress?: string }) {
  return (
    <div className={`p-6 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/10 transition-all duration-300 group cursor-default flex flex-col items-center text-center gap-4 ${color}`}>
      <div className="text-5xl my-2 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300 drop-shadow-xl">{icon}</div>
      <div className="w-full">
        <h3 className="text-white font-bold text-lg">{name}</h3>
      </div>
      <div className="mt-auto w-full pt-4 border-t border-white/5">
        <div className="flex items-center justify-between text-[11px] mb-2 uppercase tracking-wider font-semibold">
          <span className="text-gray-500">Status</span>
          <span className="text-purple-400">Learning</span>
        </div>
        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
          <div className={`h-full bg-gradient-to-r from-purple-600 to-indigo-500 ${progress} rounded-full relative overflow-hidden transition-all duration-1000`}>
            <div className="absolute inset-0 bg-white/20 animate-[pulse_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
