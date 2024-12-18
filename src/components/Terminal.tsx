// components/Terminal.tsx
import React, { useState } from 'react';
import Draggable from 'react-draggable';

interface TerminalProps {
  id: number;
  handleCommand: (command: string) => string;
  closeTerminal: () => void;
}

const Terminal: React.FC<TerminalProps> = ({ id, handleCommand, closeTerminal }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const result = handleCommand(input);
    if (result === 'CLEAR') {
      setHistory([]);
    } else {
      setHistory([...history, `$ ${input}`, result]);
    }
    setInput('');
  };

  return (
    <Draggable handle=".handle">
      <div className="absolute w-80 bg-[#1e1e2e] border border-[#00ff00] rounded">
        <div className="handle bg-[#1e1e2e] p-2 flex justify-between items-center border-b border-[#00ff00] cursor-move">
          <span className="text-[#00ff00]">Terminal {id + 1}</span>
          <button onClick={closeTerminal} className="text-red-500 hover:text-red-700">×</button>
        </div>
        <div className="p-4 h-48 overflow-y-auto bg-[#1e1e2e] text-[#00ff00] font-mono">
          {history.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
          <form onSubmit={handleSubmit} className="flex mt-2">
            <span className="mr-2">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none text-[#00ff00]"
              autoFocus
            />
          </form>
        </div>
      </div>
    </Draggable>
  );
};

export default Terminal;
