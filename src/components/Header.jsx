import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between h-[60px] bg-secondary text-white px-5 border-b border-indigo-900/40 flex-shrink-0 shadow-sm z-10 relative">
      <div className="flex items-center space-x-6">
        <div className="flex items-center text-primary-200">
          <div className="w-[30px] h-[30px] rounded-md bg-primary/20 flex items-center justify-center mr-2.5">
            <svg className="w-5 h-5 text-indigo-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className="font-bold text-[17px] tracking-tight">Worscpace</span>
        </div>
        
        <div className="flex items-center space-x-1.5 cursor-pointer hover:bg-white/5 px-2.5 py-1.5 rounded-md transition-colors">
          <span className="text-[14px] text-gray-200 font-medium">Worcspace 1</span>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div className="flex-1 max-w-2xl px-8 w-full flex justify-center">
        <div className="relative group w-full max-w-[560px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-[18px] w-[18px] text-indigo-300/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-12 py-[7px] border border-white/10 rounded-lg leading-5 bg-indigo-950/40 text-indigo-100 placeholder-indigo-300/70 focus:outline-none focus:bg-indigo-900/60 focus:ring-1 focus:ring-indigo-400/50 transition-all sm:text-[14px]"
            placeholder="Search..."
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-indigo-400 group-focus-within:text-indigo-300 sm:text-[11px] font-medium border border-indigo-700 bg-indigo-900/50 rounded px-1.5 py-0.5 tracking-wide shadow-sm">⌘K</span>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-5">
        <button className="text-indigo-300 hover:text-white transition-colors relative">
          <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          {/* Notification dot */}
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-secondary"></span>
        </button>
        <div className="w-[34px] h-[34px] rounded-full bg-[#3730A3] flex items-center justify-center text-sm font-semibold tracking-wide border border-indigo-500/30 cursor-pointer shadow-sm hover:shadow-md hover:bg-[#4338CA] transition-all">
          GK
        </div>
      </div>
    </header>
  );
};

export default Header;
