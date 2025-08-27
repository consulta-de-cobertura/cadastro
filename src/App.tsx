import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import CadastroModal from './components/CadastroModal';

function App() {
  const [isCadastroModalOpen, setIsCadastroModalOpen] = useState(true);

  const handleDirectRedirect = () => {
    setIsCadastroModalOpen(true);
  };

  return (
    <ThemeProvider>
      <div className="font-sans text-gray-900 overflow-x-hidden bg-white min-h-screen">
        {/* Cadastro Modal - sempre aberto */}
        <CadastroModal 
          isOpen={isCadastroModalOpen} 
          onClose={() => setIsCadastroModalOpen(false)} 
        />
      </div>
    </ThemeProvider>
  );
}

export default App;