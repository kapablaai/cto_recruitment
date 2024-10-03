import React, { useEffect, useState } from 'react';
import { ArrowRight, Database, Zap, Globe, Shield, Search, FileCheck, UserCheck, Lock } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="container mx-auto py-6 flex justify-between items-center">
        <div className="text-2xl font-medium">CTO Recruitment</div>
        <nav>
          <ul className="flex space-x-6 text-sm font-light">
            <li><a href="#" className="hover:text-gray-300 transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Contact</a></li>
          </ul>
        </nav>
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

        <div className="bg-gray-100 text-black py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Expertise in CTO and Tech Leadership Recruitment</h2>
            <p className="text-xl font-light leading-relaxed max-w-4xl mx-auto text-center text-gray-700">
              With extensive experience in headhunting and executive search, CTO Recruitment excels in identifying and attracting the most qualified talent for CTO and other senior tech leadership positions. Whether your company requires a visionary leader for digital transformation, a strategic mind for technical innovation, or expertise in scaling global systems, we ensure precision and confidentiality in every step of the process.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 text-white py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Tailored Solutions for Your Unique Needs</h2>
            <p className="text-xl font-light leading-relaxed max-w-4xl mx-auto text-center text-gray-300">
              We understand that every organization has unique requirements. That's why we work closely with you to create tailored solutions that address your specific needs. From startups looking for a forward-thinking CTO to global enterprises seeking a strategic tech leader with operational excellence – we find the right individual to drive your business forward.
            </p>
          </div>
        </div>

        <div className="bg-white text-black py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">An Exclusive Network of Top Tech Leaders</h2>
            <p className="text-xl font-light leading-relaxed max-w-4xl mx-auto text-center text-gray-700">
              Our reputation is built on our exclusive network of top candidates, specializing in CTO and tech leadership roles that are not available on the open market. Through our thorough and discreet process, we ensure your organization gains access to the best technical leaders in the industry.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 text-white py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Process – Efficient, Confidential, and Tech-Focused</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <ProcessStep
                icon={<Search className="h-8 w-8" />}
                title="Analysis and Needs Assessment"
                description="We start by understanding your business, culture, and the specific challenges you face in your technical landscape."
              />
              <ProcessStep
                icon={<Globe className="h-8 w-8" />}
                title="Network-Based Search"
                description="We leverage our extensive network of CTOs and tech leaders, using modern search methods to identify potential candidates."
              />
              <ProcessStep
                icon={<FileCheck className="h-8 w-8" />}
                title="Thorough Evaluation"
                description="Each candidate undergoes a comprehensive evaluation to ensure they possess the skills, experience, and leadership qualities required for success."
              />
              <ProcessStep
                icon={<Lock className="h-8 w-8" />}
                title="Confidential Presentation"
                description="We only present candidates who align with your high standards, ensuring a structured and confidential process."
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 text-black py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Why Choose CTO Recruitment?</h2>
            <p className="text-xl font-light leading-relaxed max-w-4xl mx-auto text-center text-gray-700">
              With the same precision and personal commitment as leading firms like Novare and Michaël Berglund, CTO Recruitment has established itself as the premier partner for companies in search of future tech leaders. Our success in CTO recruitment is built on deep expertise, a genuine dedication to our clients, and our unmatched network of top-tier tech talent.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 text-white py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Contact Us for a Confidential Consultation</h2>
            <p className="text-xl font-light leading-relaxed max-w-4xl mx-auto text-center text-gray-300">
              Choose CTO Recruitment – Sweden's leading partner for CTO and tech leadership recruitment. Contact us today for a confidential consultation and discover how we can help you secure the right technical leader for your organization's future.
            </p>
            <div className="mt-8 text-center">
              <Button className="bg-white text-black hover:bg-gray-200 font-medium">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
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

const ProcessStep = ({ icon, title, description }) => {
  return (
    <div className="text-center">
      <div className="mb-4 flex justify-center text-blue-400">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 font-light">{description}</p>
    </div>
  );
};

export default Index;
