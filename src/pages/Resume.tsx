import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-[#00ff00] font-mono p-8">
      <h1 className="text-2xl mb-8">~/resume $</h1>
      <div className="space-y-8">
        <section className="border border-[#00ff00] p-4 rounded-md">
          <h2 className="text-xl mb-4">Technical Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm mb-2">Languages & Frameworks</h3>
              <ul className="list-disc list-inside">
                <li>JavaScript/TypeScript</li>
                <li>Solidity</li>
                <li>React.js</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm mb-2">Tools & Technologies</h3>
              <ul className="list-disc list-inside">
                <li>Web3.js/Ethers.js</li>
                <li>MongoDB</li>
                <li>Docker</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="border border-[#00ff00] p-4 rounded-md">
          <h2 className="text-xl mb-4">Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">Full Stack Developer</h3>
              <p className="text-sm">Tech Company • 2022-Present</p>
              <ul className="list-disc list-inside mt-2">
                <li>Developed secure web applications</li>
                <li>Implemented blockchain solutions</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;