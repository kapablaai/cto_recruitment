import React from 'react';
import { ArrowRight, Database, Zap, Globe, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="container mx-auto py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">CTO Recruitment</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-300">Services</a></li>
            <li><a href="#" className="hover:text-gray-300">About</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="relative">
        {/* Hero section with GIF background */}
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* GIF background */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/path/to/your/gif.gif')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          {/* Content */}
          <div className="container mx-auto text-center relative z-20">
            <h1 className="text-6xl font-bold mb-6">Leading Experts in Tech Leadership Talent</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Sweden's most experienced and respected executive search firm specializing exclusively in CTO and tech leadership roles.
            </p>
            <Button className="bg-white text-black hover:bg-gray-200">
              Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="container mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Database className="h-8 w-8" />}
            title="Extensive Network"
            description="Access to top tech leaders not available on the open market"
          />
          <FeatureCard
            icon={<Zap className="h-8 w-8" />}
            title="Tailored Solutions"
            description="Customized recruitment strategies for your unique needs"
          />
          <FeatureCard
            icon={<Globe className="h-8 w-8" />}
            title="Global Expertise"
            description="Experience in placing leaders for international corporations"
          />
          <FeatureCard
            icon={<Shield className="h-8 w-8" />}
            title="Confidential Process"
            description="Discreet and thorough evaluation of candidates"
          />
        </div>
      </main>

      <footer className="container mx-auto mt-20 py-6 text-center text-gray-500">
        <p>&copy; 2023 CTO Recruitment. All rights reserved.</p>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default Index;