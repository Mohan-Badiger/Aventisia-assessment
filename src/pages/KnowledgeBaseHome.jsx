import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Card from '../components/Card';
import CreateNewModal from '../components/CreateNewModal';

const KnowledgeBaseHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Exact replication of the dummy items from the image
  const mockData = Array(6).fill({
    title: 'Test',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    date: '14/07/2025'
  });

  return (
    <MainLayout>
      <div className="flex flex-col h-full bg-gray-50/50">
        <div className="px-10 py-4 flex justify-between items-center bg-white border-b border-gray-100 shadow-sm/50">
          <h1 className="text-[22px] font-bold text-gray-900 tracking-tight">Knowledge Base</h1>

          <div className="flex items-center space-x-4">
            <div className="relative group shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <svg className="h-[18px] w-[18px] text-gray-400 group-focus-within:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="block w-[280px] pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-shadow sm:text-[14px]"
                placeholder="Search..."
              />
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-semibold rounded-lg text-white bg-primary hover:bg-indigo-700 shadow-sm hover:shadow transition-all focus:outline-none focus:ring-4 focus:ring-primary/20 active:scale-[0.98]"
            >
              <svg className="w-5 h-5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Create New
            </button>
          </div>
        </div>

        <div className="flex-1 p-10 overflow-auto">
          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-7">
            {mockData.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                date={item.date}
              />
            ))}
          </div>
        </div>

        {/* Bottom Pagination Footer */}
        <div className="px-10 py-4 bg-white border-t border-gray-200 flex items-center justify-between text-[14px] text-gray-700 font-medium">
          <div>6 rows</div>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <span>Rows per page</span>
              <div className="relative">
                <select className="appearance-none border border-gray-300 rounded-md bg-white py-1 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary cursor-pointer shadow-sm">
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            <div>page 1 of 1</div>
            <div className="flex items-center space-x-1">
              <button className="p-1.5 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-50 transition-colors">
                <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
              </button>
              <button className="p-1.5 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-50 transition-colors">
                <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button className="p-1.5 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-50 transition-colors">
                <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
              <button className="p-1.5 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-50 transition-colors">
                <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <CreateNewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </MainLayout>
  );
};

export default KnowledgeBaseHome;
