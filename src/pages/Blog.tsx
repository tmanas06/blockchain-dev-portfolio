import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="text-[#00ff00] font-mono">
      <h2 className="text-2xl mb-8">Blog Posts</h2>
      <div className="space-y-6">
        <div className="border border-[#00ff00] p-4 rounded">
          <h3 className="text-xl mb-2">Deep Dive into CosmWasm Contract Standards: CW20, CW721, CW4, and CW3</h3>
          <p>An introduction to CosmWasm Contract Standards in blockchain...</p>
        </div>
        <div className="border border-[#00ff00] p-4 rounded">
          <h3 className="text-xl mb-2">Oraichain Architecture</h3>
          <p>In-Depth Overview of Oraichain Architecture</p>
        </div>
      </div>
      <footer className="mt-8">
        <p className="text-lg font-bold">Check out my blog:</p>
        <p>
          <a href="https://techieresearch.blogspot.com/" className="text-blue-500 underline text-xl">Techie Research</a>
        </p>
      </footer>
    </div>
  );
};

export default Blog;