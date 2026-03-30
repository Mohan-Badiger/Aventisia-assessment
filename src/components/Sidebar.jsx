import React from 'react';

// Reusable Navigation Item Component
const NavItem = ({ item }) => {
  const isActive = item.active;
  
  return (
    <li>
      <a
        href="#"
        className={`flex items-center px-6 py-2.5 text-sm font-medium transition-all duration-200 ${
          isActive
            ? 'bg-indigo-50 text-primary border-l-4 border-primary'
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-l-4 border-transparent'
        }`}
      >
        <svg
          className={`mr-3 h-5 w-5 ${isActive ? 'text-primary' : 'text-gray-400 group-hover:text-gray-500'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
        </svg>
        {item.name}
      </a>
    </li>
  );
};

// Reusable Navigation Section Component
const NavSection = ({ section }) => (
  <div className="mb-6">
    <h3 className="px-6 text-xs font-semibold text-gray-400 tracking-wider mb-2 uppercase">
      {section.title}
    </h3>
    <ul className="space-y-0.5">
      {section.items.map((item, idx) => (
        <NavItem key={idx} item={item} />
      ))}
    </ul>
  </div>
);

const Sidebar = () => {
  const menuSections = [
    {
      title: 'MY PROJECTS',
      items: [
        { name: 'Agents', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
        { name: 'AI Models', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
        { name: 'Library', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
      ],
    },
    {
      title: 'ORCHESTRATOR',
      items: [
        { name: 'Published', icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12' },
        { name: 'Machines', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
        { name: 'Queues', icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
        { name: 'Triggers', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
        { name: 'Jobs', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
        { name: 'Executions', icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
        { name: 'Vault', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
        { name: 'Knowledge Base', active: true, icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
        { name: 'Key Store', icon: 'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z' },
      ],
    },
    {
      title: 'ADMIN',
      items: [
        { name: 'Tenant', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
        { name: 'Integrations', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
      ],
    },
  ];

  return (
    <aside className="w-[260px] flex-shrink-0 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="py-6">
        {menuSections.map((section, idx) => (
           <NavSection key={idx} section={section} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
