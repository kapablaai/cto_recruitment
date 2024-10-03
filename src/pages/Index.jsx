import React from 'react';
import { ArrowRight, Database, Zap, Globe, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="container mx-auto py-6 flex justify-between items-center">
        <div className="text-2xl font-light">CTO Recruitment</div>
        <nav>
          <ul className="flex space-x-6 text-sm font-light">
            <li><a href="#" className="hover:text-gray-300 transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="relative">
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/path/to/your/gif.gif')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="container mx-auto text-center relative z-20">
            <h1 className="text-6xl font-light mb-6 leading-tight">Leading Experts in Tech Leadership Talent</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto font-light">
              Sweden's most experienced and respected executive search firm specializing exclusively in CTO and tech leadership roles.
            </p>
            <Button className="bg-white text-black hover:bg-gray-200 font-light">
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

        <div className="bg-gray-100 text-black py-20 mt-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-light mb-8 text-center">Our Expertise in CTO and Tech Leadership Recruitment</h2>
            <p className="text-xl font-light leading-relaxed max-w-4xl mx-auto text-center">
              With extensive experience in headhunting and executive search, CTO Recruitment excels in identifying and attracting the most qualified talent for CTO and other senior tech leadership positions. Whether your company requires a visionary leader for digital transformation, a strategic mind for technical innovation, or expertise in scaling global systems, we ensure precision and confidentiality in every step of the process.
            </p>
          </div>
        </div>
      </main>

      <footer className="container mx-auto mt-20 py-6 text-center text-gray-500 font-light">
        <p>&copy; 2023 CTO Recruitment. All rights reserved.</p>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-light mb-2">{title}</h3>
      <p className="text-gray-400 font-light">{description}</p>
    </div>
  );
};

export default Index;