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
      title: "Seo analytics and automatic email sending",
      description: "Extra info from Google search console,Google search engine and twitter",
      tech: ["python","flask","api integrations","Nitter","Ntscapper"],
      github: "https://github.com/tmanas06/Report-nd-mail/blob/main/twitter.py"
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

  const telegramProjects = [
    {
      title: "Telegram Bot",
      description: "A bot for Telegram that automates tasks , provides information and analyses your message sentiment.",
      tech: "python, Telegraf, Telegram Bot API",
      github: "https://github.com/tmanas06/Telegram__bot"
    },
    {
      title: "Telegram messages extraction",
      description: "This script uses the Telethon library to interact with the Telegram API and continuously update a CSV file with messages from chats. It retrieves messages, processes them to extract relevant information, and appends this data to telegram_messages_complete.csv.",
      tech: "Python, Telethon, Telegram API",
      github: "https://github.com/yourusername/telegram-notification-service"
    },
    {
      title: "Telegram Dashboard",
      description: "This Streamlit application provides an interactive dashboard to analyze Telegram and Twitter data. It allows users to upload data files, perform text analysis, and visualize the results.",
      tech: "Python, Streamlit, Telegram API",
      github: "https://github.com/yourusername/telegram-notification-service"
    },
    {
      title: "Social Analytics extraction nd automated email report",
      description: "This Python project automates the process of sending reports via email. It is specifically designed to send social reports, but can be adapted for various types of email reports. The script uses Python's smtplib for email sending, ssl for secure connections, and configparser for configuration management.",
      tech: "Python, smtplib, html, google cloud service account, json, Telegram API",
      github: "https://github.com/yourusername/telegram-notification-service"
    },
    {
      title: "Pyhton sql connection",
      description: "A Pyhton sql connection, uses:for api calls with telegrams.",
      tech: "python, sql, Telegram Bot API",
      github: "https://github.com/tmanas06/python_sql_connection_only/blob/main/gr.py"
    },
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

        <div className="border border-[#00ff00] p-4 rounded-md col-span-1 md:col-span-2">
          <h2 className="text-xl mb-4 text-yellow-500">Telegram Projects</h2>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="border-b border-[#00ff00] py-2">Title</th>
                <th className="border-b border-[#00ff00] py-2">Description</th>
                <th className="border-b border-[#00ff00] py-2">Tech Stack</th>
                <th className="border-b border-[#00ff00] py-2">GitHub</th>
              </tr>
            </thead>
            <tbody>
              {telegramProjects.map((project, index) => (
                <tr key={index} className="hover:bg-[#2d2d3d]">
                  <td className="py-2">{project.title}</td>
                  <td className="py-2">{project.description}</td>
                  <td className="py-2">{project.tech}</td>
                  <td className="py-2">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#00ff00] hover:text-green-400"
                    >
                      View Source
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Projects;