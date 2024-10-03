import React from 'react';
import { ArrowRight, Database, Zap, Globe, Shield, CheckCircle } from 'lucide-react';
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

        {/* New section: Expertise in CTO and Tech Leadership Recruitment */}
        <div className="bg-gray-100 text-black py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Expertise in CTO and Tech Leadership Recruitment</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-6">
                At CTO Recruitment, we specialize in identifying and attracting top-tier talent for CTO and senior tech leadership roles. With years of experience in executive search and headhunting, we understand that every company has unique needs. That's why we provide tailored solutions, whether you're a startup seeking a visionary leader for digital transformation or an enterprise requiring a strategic tech expert to drive global growth.
              </p>
              <p className="text-lg">
                Our exclusive network of candidates sets us apart. We connect you with top tech leaders who are not available on the open market, ensuring that you have access to the best talent in the industry. With our thorough and discreet process, we find the right individual to propel your business forward with precision and confidentiality.
              </p>
            </div>
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

        {/* Process Section */}
        <div className="bg-gray-100 text-black py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Process – Efficient, Confidential, and Tech-Focused</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProcessStep
                icon={<CheckCircle className="h-8 w-8 text-blue-600" />}
                title="Analysis and Needs Assessment"
                description="We start by understanding your business, culture, and the specific challenges you face in your technical landscape."
              />
              <ProcessStep
                icon={<CheckCircle className="h-8 w-8 text-blue-600" />}
                title="Network-Based Search"
                description="We leverage our extensive network of CTOs and tech leaders, using modern search methods to identify potential candidates."
              />
              <ProcessStep
                icon={<CheckCircle className="h-8 w-8 text-blue-600" />}
                title="Thorough Evaluation"
                description="Each candidate undergoes a comprehensive evaluation to ensure they possess the skills, experience, and leadership qualities required for success."
              />
              <ProcessStep
                icon={<CheckCircle className="h-8 w-8 text-blue-600" />}
                title="Confidential Presentation"
                description="We only present candidates who align with your high standards, ensuring a structured and confidential process."
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Tap into an exclusive pool of Tech Leaders across Sweden</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <div className="md:w-1/3 flex flex-col items-center">
                <img src="/jonas-axelsson.jpg" alt="Jonas Axelsson" className="w-48 h-48 rounded-full mb-6 object-cover" />
                <h3 className="text-2xl font-bold mb-2">Jonas Axelsson</h3>
                <p className="text-xl mb-4">Head of Tech Recruitment</p>
                <p className="text-lg mb-2">
                  <a href="mailto:jonas@startuprecruitment.se" className="text-blue-400 hover:underline">
                    jonas@startuprecruitment.se
                  </a>
                </p>
                <p className="text-lg">
                  <a href="https://www.linkedin.com/in/jonasaxelssonsthlm/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    LinkedIn Profile
                  </a>
                </p>
              </div>
              <div className="md:w-2/3">
                <p className="text-xl font-light leading-relaxed mb-8 text-gray-300">
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
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
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

const ProcessStep = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-bold ml-2">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Index;