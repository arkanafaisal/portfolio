

export default function Header(){
    return <header className="fixed top-0 left-0 w-full flex justify-center h-14 flex-col z-1000">
        <div className="text-[26px] text-white/80 flex cursor-default h-full">
            <div className="flex-1 bg-gradient-to-l from-black/60 via-black/20 to-black/0"></div>
            <nav className="bg-black/60 flex gap-5 items-center">
                <div className="w-40 flex justify-center"><a className="hover:text-white hover:text-3xl transition-all duration-200 linear" href="#hero-section">Introduction</a></div>
                <div className="w-30 flex justify-center"><a className="hover:text-white hover:text-3xl transition-all duration-200 linear" href="#project-list-section">Projects</a></div>
            </nav>
            <div className="flex-1 bg-gradient-to-r from-black/60 via-black/20 to-black/0"></div>    
        </div>
    </header>
}