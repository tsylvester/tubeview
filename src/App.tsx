import React from 'react';
import VideoEmbedder from './components/VideoEmbedder';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectsCard from './components/ProjectsCard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 flex flex-col">
      <Header />
      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 flex items-center justify-center">
            <VideoEmbedder />
          </div>
          <div className="lg:col-span-4">
            <ProjectsCard />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;