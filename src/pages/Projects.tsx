// src/pages/Projects.tsx
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Flight Application",
      description: "A decentralized Flight Application using XRPL Protocol",
      tech: ["XRP Ledger", "React", "Node.js", "Wagmi","Xaman Wallet","Pinate","IPFS"],
      Website:"https://iitb-hackathon-timl.vercel.app/",
      github: "https://github.com/tmanas06/IITB_Hackathon",
    },
    {
      title: "Deep Revenue Sharing System",
      description: "Minimum Viable Product (MVP) for a deep revenue sharing system. This platform enables automatic split payment disbursement for referrals in a multi-level marketing (MLM) scheme. It provides salespeople with a dashboard to view their statistics, leaderboard rankings, and allows businesses to register and launch product pages with revenue split percentages.",
      tech: ["svelte","vercel","Nest JS"],
      github: "https://github.com/tmanas06/Tsoc-project"
    },
    {
      title: "BSV wallet integration svelte",
      description: "Timechain labs, BSV wallet integrated using svelte web application",
      tech: ["svelte","bsv blockchain","vercel","Nest JS","etc"],
      github: "https://github.com/tmanas06/Tsoc-project"
    },
    {
      title: "Flight Application",
      description: "A decentralized Flight Application using Wallet Connector",
      tech: ["React", "Node.js", "Wagmi","metamask wallet","Pinate","sepolia-testnet","wallet connector"],
      Website:"https://flight-ticketing-dapp.vercel.app/",
      github: "https://github.com/tmanas06/Flight_ticketing_Dapp"
    },
    {
      title: "Attendance register",
      description: "A simple Attendance register implemented in aleph zero blockchain",
      tech: ["rust","Aleph zero testnet"],
      github: "https://github.com/tmanas06/attendance_registry"
    },
    {
      title: "To-do-list",
      description: "A simple to-do list application",
      tech: ["solidity","remix ide"],
      github: "https://github.com/tmanas06/Tsoc-project"
    },
    {
      title: "Music application",
      description: "Music application with Real-time Chat feature",
      tech: ["MERN Stack"],
      github: "https://github.com/tmanas06/Steller-Society"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-[#00ff00] font-mono p-8">
      <h1 className="text-2xl mb-8">~/projects $</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-[#00ff00] p-4 rounded-md">
            <h2 className="text-xl mb-2 text-yellow-500">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
            <div className="mb-4">
              <h3 className="text-sm mb-2">Tech Stack:</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="border border-[#00ff00] px-2 py-1 text-sm rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {project.Website && (
              <a 
                href={project.Website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 underline"
              >
                View Project Website
              </a>
            )}
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00ff00] hover:text-green-400"
            >
              <span className="text-green-400">View Source</span> → <span className="text-blue-500">View Project</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;