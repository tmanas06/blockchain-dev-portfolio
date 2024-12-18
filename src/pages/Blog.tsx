import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="text-[#00ff00] font-mono">
      <h2 className="text-2xl mb-8">Blog Posts</h2>
      <div className="space-y-6">
        <div className="border border-[#00ff00] p-4 rounded">
          <h3 className="text-xl mb-2">Understanding Zero-Knowledge Proofs</h3>
          <p>An introduction to ZK-proofs and their applications in blockchain...</p>
        </div>
        <div className="border border-[#00ff00] p-4 rounded">
          <h3 className="text-xl mb-2">Securing Smart Contracts</h3>
          <p>Best practices for writing secure smart contracts...</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;