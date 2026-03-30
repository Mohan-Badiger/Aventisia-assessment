import React from 'react';

const Card = ({ title, description, date }) => {
  return (
    <article className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md hover:border-primary/40 transition-all duration-200 flex flex-col h-[280px] group cursor-pointer relative">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-gray-900 text-[17px] tracking-tight">{title}</h3>
        <button className="text-gray-400 hover:text-gray-600 focus:outline-none p-1 rounded hover:bg-gray-100 transition-colors">
          {/* Vertical 3 dots icon */}
          <svg className="w-5 h-5 pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 10a2 2 0 100-4 2 2 0 000 4zm0 2a2 2 0 100 4 2 2 0 000-4zm0 6a2 2 0 100 4 2 2 0 000-4z" />
          </svg>
        </button>
      </div>
      <p className="text-gray-500 text-[15px] mb-6 flex-grow leading-relaxed font-normal">
        {description}
      </p>
      
      <div className="border-t border-gray-100 pt-4 mt-auto flex items-center justify-between">
        <span className="text-[13px] text-gray-400 font-medium tracking-wide">Created On: {date}</span>
      </div>
      
      {/* Subtle indicator strip on hover */}
      <div className="absolute left-0 bottom-0 top-0 w-1 bg-primary rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
    </article>
  );
};

export default Card;
