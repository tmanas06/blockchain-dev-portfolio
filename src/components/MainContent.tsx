import React from 'react';

interface MainContentProps {
  currentSection: string;
}

const MainContent: React.FC<MainContentProps> = ({ currentSection }) => {
  const renderContent = () => {
    switch (currentSection) {
      case 'blog':
        return (
          <section id="blog">
            <h2>$ cat blog.txt</h2>
            <p>Here are my latest blog posts:</p>
            <ul>
              <li>Understanding Smart Contracts</li>
              <li>The Future of DeFi</li>
              <li>Optimizing Gas Fees in Solidity</li>
            </ul>
          </section>
        );
      case 'projects':
        return (
          <section id="projects">
            <h2>$ ls projects/</h2>
            <ul>
              <li>decentralized-exchange/</li>
              <li>nft-marketplace/</li>
              <li>yield-farming-protocol/</li>
            </ul>
          </section>
        );
      case 'socials':
        return (
          <section id="socials">
            <h2>$ echo $SOCIALS</h2>
            <p>GitHub: github.com/blockchain-dev</p>
            <p>Twitter: @blockchain_dev</p>
            <p>LinkedIn: linkedin.com/in/blockchain-dev</p>
          </section>
        );
      case 'resume':
        return (
          <section id="resume">
            <h2>$ cat resume.md</h2>
            <pre>
              {`# John Doe
Blockchain Developer

## Skills
- Solidity
- React.js
- Hardhat
- Ethers.js

## Experience
- Senior Smart Contract Developer @ DeFi Protocol (2021-Present)
- Blockchain Consultant @ Web3 Agency (2019-2021)

## Education
- M.S. Computer Science, Blockchain Focus (2019)
- B.S. Computer Science (2017)`}
            </pre>
          </section>
        );
      default:
        return (
          <section>
            <h2>Welcome to my blockchain developer portfolio</h2>
            <p>Use the terminal below to navigate:</p>
            <ul>
              <li>ls - list available sections</li>
              <li>cd [section] - navigate to a section</li>
            </ul>
          </section>
        );
    }
  };

  return <main className="p-4">{renderContent()}</main>;
};

export default MainContent;
