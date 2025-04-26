
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background element */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-[30%] bottom-[10%] w-[600px] h-[600px] rounded-full bg-xc-purple/20 blur-[80px]" />
        <div className="absolute -left-[20%] top-[5%] w-[400px] h-[400px] rounded-full bg-xc-blue/20 blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1 md:max-w-[600px] space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <p className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-xc-purple/10 text-xc-purple">
                Now Open for Waitlist
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                <span className="block">Receive global payments,</span>
                <span className="gradient-text block">no matter where you are.</span>
              </h1>
            </div>
            
            <p className="text-lg text-gray-600 md:text-xl md:pr-6">
              XCollaber helps creators and freelancers in unsupported countries access global payment platforms. We handle the complexities, you collect your earnings.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#waitlist" className="gradient-bg text-white px-8 py-3 font-medium rounded-md text-center">
                Join Waitlist
              </a>
              <a href="#how-it-works" className="group border border-gray-300 px-8 py-3 rounded-md flex items-center justify-center">
                How It Works
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-gray-500 flex items-center justify-center md:justify-start">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse-light mr-2"></span>
                Currently supporting freelancers in India, Nepal, and Pakistan
              </p>
            </div>
          </div>
          
          <div className="flex-1 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-xc-purple/30 to-xc-blue/30 rounded-xl blur-xl"></div>
              <div className="relative bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">Create Listing</h3>
                    <p className="text-sm text-gray-500">Start collecting payments globally</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                    <div className="h-8 w-8 rounded-full bg-xc-purple/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-xc-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">Stripe Connect Available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                    <div className="h-8 w-8 rounded-full bg-xc-purple/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-xc-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">Direct Bank Deposits</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                    <div className="h-8 w-8 rounded-full bg-xc-purple/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-xc-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">Mobile Wallet Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
