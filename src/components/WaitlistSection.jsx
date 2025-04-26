
import React, { useState } from "react";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log("Submitted:", { email, country });
    setSubmitted(true);
    setEmail("");
    setCountry("");
    
    // Reset the submitted state after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="waitlist" className="py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Waitlist
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Be among the first to access our global payment solution when we launch. Enter your details below to secure your spot.
          </p>

          {submitted ? (
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 animate-fade-in">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white mx-auto mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
              <p className="text-white/90">
                You've been added to our waitlist. We'll contact you when we're ready to launch.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-white text-left mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/20 text-white placeholder:text-white/50 border border-white/20 focus:border-white rounded-md p-3"
                  />
                </div>
                
                <div>
                  <label htmlFor="country" className="block text-white text-left mb-2">
                    Your Country
                  </label>
                  <input
                    id="country"
                    placeholder="e.g., India, Pakistan, Nepal"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full bg-white/20 text-white placeholder:text-white/50 border border-white/20 focus:border-white rounded-md p-3"
                  />
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-white text-xc-purple hover:bg-white/90 font-medium py-3 rounded-md"
                  >
                    Join Waitlist
                  </button>
                </div>
              </div>
              <p className="text-white/80 text-sm mt-4">
                By signing up, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
