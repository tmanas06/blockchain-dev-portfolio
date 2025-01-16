import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-[#00ff00] font-mono p-8">
      <h1 className="text-2xl mb-8">~/resume $</h1>
      <div className="space-y-8">
        <section className="border border-[#00ff00] p-4 rounded-md">
          <h2 className="text-xl mb-4 font-bold">Technical Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm mb-2 font-bold">Languages & Frameworks</h3>
              <ul className="list-disc list-inside">
                <li>JavaScript/TypeScript</li>
                <li>Solidity</li>
                <li>React.js</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm mb-2 font-bold">Tools & Technologies</h3>
              <ul className="list-disc list-inside">
                <li>Web3.js/Ethers.js</li>
                <li>MongoDB</li>
                <li>Docker</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="border border-[#00bfff] p-4 rounded-md">
          <h2 className="text-xl mb-4 text-[#00fff7] font-bold">Experience</h2>
          <div className="space-y-4 text-[#00fff7] font-bold">
            <div>
              <h3 className="font-bold">Timechain Labs (Blockchain Developer)</h3>
              <p className="text-sm">Developed decentralized applications, contributing to the advancement of blockchain technology and its practical applications.</p>
            </div>
            <div>
              <h3 className="font-bold">Wallet Hunter ✈️ Token 2049 (Full Stack Developer)</h3>
              <p className="text-sm">Worked as a Full Stack Developer focusing on Python, API integration, and automation.</p>
            </div>
            <div>
              <h3 className="font-bold">Oraichain Labs (Evangelist)</h3>
              <p className="text-sm">Advocated for innovative blockchain solutions, promoting the adoption of cutting-edge technologies.</p>
            </div>
            <div>
              <h3 className="font-bold">Threat Prism (Cybersecurity Intern)</h3>
              <p className="text-sm">Gained hands-on experience in implementing cybersecurity strategies, strengthening organizational defenses against potential threats.</p>
            </div>
            <div>
              <h3 className="font-bold">Snowflake (Squad Member)</h3>
              <p className="text-sm">Part of the Snowflake community in Hyderabad.</p>
            </div>
          </div>
        </section>

        <section className="border border-[#00ff00] p-4 rounded-md">
          <h2 className="text-xl mb-4 font-bold">Technical Skills and Certifications</h2>
          <p>I hold a diverse range of certifications that underscore my commitment to continuous learning and technical proficiency:</p>
          <ul className="list-disc list-inside mt-4">
            <li><strong>Cybersecurity:</strong> Fortinet Certified Associate in Cybersecurity (Oct 2024 - Oct 2026), Fortinet FortiGate 7.4 Operator (Issued Oct 2024).</li>
            <li><strong>Blockchain:</strong> Intro to Phantom by EasyA (Nov 2024 - Nov 2026), Bitcoin Script Course Certificate by BSV Academy (Issued Jun 2024), Bitcoin Enterprise Course Certificate by BSV Academy (Issued May 2024).</li>
            <li><strong>Full Stack Development:</strong> Red Hat Certified Enterprise Application Developer (Jun 2024 - Jun 2027), MongoDB Node.js Developer Path (Issued Feb 2024).</li>
            <li><strong>AI and Automation:</strong> Essentials Automation Certification - 2024 by Automation Anywhere (Sep 2024 - Sep 2026), Advanced Automation Certification - 2024 by Automation Anywhere (Sep 2024 - Sep 2026), AI for India 2.0 by GUVI Geek Networks, IITM Research Park.</li>
            <li><strong>Cloud Computing:</strong> AWS Academy Graduate - Cloud Architecting and Cloud Foundations (Issued Feb 2023), Google Cloud Skills Boost - App Engine: 3 Ways, Getting Started with Go on Google Cloud (Issued Jul 2023).</li>
            <li><strong>Database Management:</strong> Database Management Essentials by Coursera (Issued Oct 2023).</li>
            <li><strong>Project Management:</strong> Jira Project Management by Great Learning (Issued Oct 2023).</li>
            <li><strong>API Development:</strong> Postman API Fundamentals Student Expert by Canvas Credentials (Issued Mar 2024).</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;