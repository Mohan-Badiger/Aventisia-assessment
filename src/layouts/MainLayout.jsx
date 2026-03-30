import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-50 font-sans text-gray-900">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto bg-gray-50 flex flex-col">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
