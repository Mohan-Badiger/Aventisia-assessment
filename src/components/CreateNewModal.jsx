import React from 'react';
import Drawer from './Drawer';

// Reusable Form Input Component
const FormInput = ({ label, placeholder, isRequired, isTextArea }) => (
  <div>
    <label className="block text-[14px] font-medium text-gray-700 mb-1.5">
      {label}{isRequired && <span className="text-red-500 ml-0.5">*</span>}
    </label>
    {isTextArea ? (
      <textarea 
        placeholder={placeholder} 
        rows={4}
        className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder-gray-400 resize-none transition-shadow"
      />
    ) : (
      <input 
        type="text" 
        placeholder={placeholder} 
        className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder-gray-400 transition-shadow"
      />
    )}
  </div>
);

// Reusable Form Select Component
const FormSelect = ({ label, options, isRequired }) => (
  <div>
    <label className="block text-[14px] font-medium text-gray-700 mb-1.5">
      {label}{isRequired && <span className="text-red-500 ml-0.5">*</span>}
    </label>
    <div className="relative">
      <select className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white text-gray-700 transition-shadow cursor-pointer">
        {options.map((opt, i) => (
          <option key={i} value={opt}>{opt}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </div>
);

const CreateNewModal = ({ isOpen, onClose }) => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      title="Create New Knowledge Base"
      subtitle="Best for quick answers from documents, websites and text files."
      footer={
        <>
          <button 
            onClick={onClose}
            className="px-5 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm focus:outline-none"
          >
            Cancel
          </button>
          <button 
            onClick={onClose}
            className="px-6 py-2.5 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-indigo-700 transition-colors shadow-sm focus:ring-4 focus:ring-primary/20 focus:outline-none"
          >
            Create
          </button>
        </>
      }
    >
      <FormInput 
        label="Name (Cannot be edited later)" 
        placeholder="Name" 
        isRequired={true} 
      />
      <FormInput 
        label="Description" 
        placeholder="Description" 
        isTextArea={true} 
      />
      <FormSelect 
        label="Vector Store" 
        options={['Qdrant', 'Pinecone', 'Weaviate']} 
        isRequired={true} 
      />
      <FormSelect 
        label="LLM Embedding Model" 
        options={['text-embedding-ada-002', 'cohere-embed-v3', 'titan-embed-text-v1']} 
        isRequired={true} 
      />
    </Drawer>
  );
};

export default CreateNewModal;
