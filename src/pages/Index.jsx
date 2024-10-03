import React from 'react';
import { ArrowRight, Database, Zap, Globe, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="container mx-auto py-6 flex justify-between items-center">
        <div className="text-2xl font-medium">CTO Recruitment</div>
      </header>

      <main className="relative">
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 to-black"
            style={{
              backgroundImage: "url('path/to/your/background-image.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.5,
            }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="container mx-auto text-center relative z-20">
            <h1 className="text-6xl font-bold mb-6 leading-tight animated-text">
              Leading Experts in Tech Leadership Talent
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto font-light text-gray-300">
              Sweden's most experienced and respected executive search firm specializing exclusively in CTO and tech leadership roles.
            </p>
            <Button className="bg-white text-black hover:bg-gray-200 font-medium">
              Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="container mx-auto py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        <div className="bg-gray-900 text-white py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Tap in to an exclusive pool of Tech Leaders across Sweden</h2>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <img src="/jonas-axelsson.jpg" alt="Jonas Axelsson" className="w-64 h-64 rounded-full mb-6 mx-auto object-cover" />
                <h3 className="text-2xl font-bold mb-2 text-center">Jonas Axelsson</h3>
                <p className="text-xl mb-4 text-center">Head of Tech Recruitment</p>
                <p className="text-lg mb-2 text-center">
                  <a href="mailto:jonas@startuprecruitment.se" className="text-blue-400 hover:underline">
                    jonas@startuprecruitment.se
                  </a>
                </p>
                <p className="text-lg text-center">
                  <a href="https://www.linkedin.com/in/jonasaxelssonsthlm/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    LinkedIn Profile
                  </a>
                </p>
              </div>
              <div className="md:w-1/2">
                <p className="text-xl font-light leading-relaxed mb-6 text-gray-300">
                  Choose CTO Recruitment – Sweden's leading partner for CTO and tech leadership recruitment. Contact us today for a confidential consultation and discover how we can help you secure the right technical leader for your organization's future.
                </p>
                <div className="text-center">
                  <Button className="bg-white text-black hover:bg-gray-200 font-medium">
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      <footer className="bg-black py-10 text-center text-gray-500 font-light">
        <div className="container mx-auto">
          <p>&copy; 2023 CTO Recruitment. All rights reserved.</p>
        </div>
      </footer>
      
      <style jsx>{`
        @keyframes textGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animated-text {
          background: linear-gradient(270deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: textGradient 10s ease infinite;
        }
      `}</style>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg transition-transform hover:scale-105">
      <div className="mb-4 text-blue-400">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 font-light">{description}</p>
    </div>
  );
};

export default Index;