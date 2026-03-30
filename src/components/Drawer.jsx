import React, { useEffect, useRef } from 'react';

const Drawer = ({ isOpen, onClose, title, subtitle, children, footer }) => {
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Only close if click is outside the drawer AND the drawer is actually open
      if (isOpen && drawerRef.current && !drawerRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Slight delay to prevent immediate close if the trigger button propagation reaches document
    if (isOpen) {
      setTimeout(() => {
        document.addEventListener('mousedown', handleOutsideClick);
      }, 0);
    }

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        aria-hidden="true"
      />

      {/* Right-aligned Drawer Panel */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full z-50 w-full md:w-[400px] lg:w-1/3 bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Header */}
        <div className="px-6 py-5 flex items-center justify-between border-b border-gray-100 shrink-0">
          <div>
            <h2 className="text-[19px] font-semibold text-gray-900 tracking-tight">{title}</h2>
            {subtitle && <p className="text-[13px] text-gray-500 mt-1">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full p-2 transition-colors focus:outline-none"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {children}
        </div>

        {/* Footer Area */}
        {footer && (
          <div className="px-6 py-5 flex justify-end gap-3 border-t border-gray-100 bg-gray-50/50 shrink-0">
            {footer}
          </div>
        )}
      </div>
    </>
  );
};

export default Drawer;
