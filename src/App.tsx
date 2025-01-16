import React, { useState } from 'react';
import Terminal from './components/Terminal';
import Socials from './components/Socials';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import './App.css';

const App: React.FC = () => {
  const [terminals, setTerminals] = useState<number[]>([]);
  const [showHelp, setShowHelp] = useState(false);

  const addTerminal = () => {
    setTerminals(prevTerminals => [...prevTerminals, prevTerminals.length]);
  };

  const closeTerminal = (id: number) => {
    setTerminals(terminals.filter(t => t !== id));
  };

  const handleCommand = (command: string) => {
    const [cmd, arg] = command.toLowerCase().trim().split(' ');
    switch (cmd) {
      case 'ls':
        return 'blog projects socials resume home';
      case 'cd':
        if (['blog', 'projects', 'socials', 'resume', 'home'].includes(arg)) {
          if (arg === 'home') {
            document.getElementById('home')?.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center'
            });
          } else {
            const element = document.getElementById(arg);
            element?.scrollIntoView({ behavior: 'smooth' });
          }
          return `Navigated to ${arg}`;
        }
        return 'Invalid directory';
      case 'clear':
        return 'CLEAR';
      default:
        return 'Command not found';
    }
  };

  const helpContent = (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1e1e2e] p-6 rounded-lg border border-[#00ff00] text-[#00ff00] font-mono max-w-md">
        <h2 className="text-xl mb-4">Terminal Commands</h2>
        <ul className="space-y-2">
          <li><span className="font-bold">ls</span> - List all available sections</li>
          <li><span className="font-bold">cd [section]</span> - Navigate to a section (blog/projects/socials/resume/home)</li>
          <li><span className="font-bold">clear</span> - Clear terminal output</li>
        </ul>
        <div className="mt-4 p-3 border border-[#00ff00] bg-black bg-opacity-40 rounded">
          <p className="text-sm">
            <span className="text-yellow-400">Note:</span> Navigation between sections can be done using terminal commands. 
            Use <span className="font-bold">cd [section]</span> to move between different sections of the page.
          </p>
        </div>
        <button 
          onClick={() => setShowHelp(false)}
          className="mt-6 px-4 py-2 border border-[#00ff00] hover:bg-[#2d2d3d] rounded"
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-[#00ff00] font-mono p-8">
      {/* Main Header */}

      {/* Fixed Social Icons */}
      <div className="fixed top-4 left-4 z-50">
        <Socials />
      </div>

      {/* Main Scrollable Content */}
      <div className="w-full ">
        <div className="p-8">
      <h1 className="text-6xl mb-8 text-blue-500 font-bold text-center">Portfolio</h1>
          {/* Profile Section */}
          <div id="home" className="flex gap-8 mt-16">
            <div className="w-1/3">
              <img 
                src="https://gateway.pinata.cloud/ipfs/Qmc9kNtwqJZqDpyaEteioBkfPfdN9WQFP41s6MzJv1oKdm" 
                alt="Profile"
                className="rounded-lg w-full"
              />
            </div>
            
            <div className="w-2/3 text-[#00ff00] font-mono">
              <div className="space-y-4">
                <p>
                  Forward-thinking developer with expertise in blockchain, cybersecurity, 
                  and full-stack development. I am passionate about building secure and 
                  scalable solutions across multiple domains.
                </p>
                <p>
                  My experience includes: • Full-stack development using MERN stack 
                  • Smart contract development and security auditing • Penetration 
                  testing and vulnerability assessment • System architecture and 
                  implementation • Security best practices and optimization
                </p>
                <p>
                  Currently expanding expertise in: • Blockchain and Web3 technologies 
                  • Advanced cybersecurity techniques • DevSecOps practices 
                  • Cloud security solutions • Zero-knowledge proofs 
                  • Distributed systems architecture
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <section id="blog" className="min-h-screen py-16">
            <Blog />
          </section>
          <section id="projects" className="min-h-screen py-16">
            <Projects />
          </section>
          <section id="resume" className="min-h-screen py-16">
            <Resume />
          </section>
        </div>
      </div>

      {/* Terminal Overlay */}
      <div className="fixed inset-0 pointer-events-none z-40">
  <div className="relative w-full h-full">
    {terminals.map((id) => (
      <div key={id} className="pointer-events-auto">
        <Terminal 
          id={id} 
          handleCommand={handleCommand} 
          closeTerminal={() => closeTerminal(id)}
        />
      </div>
    ))}
  </div>
</div>

      {/* Fixed Terminal Button and Help */}
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-[#1e1e2e] flex justify-center items-center gap-4 z-50">
        <button 
          onClick={addTerminal}
          className="px-8 bg-transparent hover:bg-[#2d2d3d] text-[#00ff00] font-mono py-2 rounded border border-[#00ff00]"
        >
          Open Terminal
        </button>
        <button 
          onClick={() => setShowHelp(true)}
          className="px-4 bg-transparent hover:bg-[#2d2d3d] text-[#00ff00] font-mono py-2 rounded border border-[#00ff00]"
        >
          Help
        </button>
      </div>

      {/* Help Modal */}
      {showHelp && helpContent}

      {/* Additional Styles for Text Size and Font */}
      <style>
        {`
          .font-mono {
            font-family: 'Courier New', Courier, monospace; /* Change to your desired font */
            font-size: 1.5rem; /* Increase text size */
          }
          .terminal-text {
            font-size: 1.5rem; /* Increase terminal text size */
          }
        `}
      </style>
    </div>
  );
};

export default App;