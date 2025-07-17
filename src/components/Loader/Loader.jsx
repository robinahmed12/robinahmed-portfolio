import React, { useEffect } from 'react';
import AOS from 'aos';

const Loader = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <div className="fixed inset-0 bg-white dark:bg-[#0F172A] flex items-center justify-center z-50">
            <div className="text-center" data-aos="fade-in">
                {/* Main Loading Animation */}
                <div className="relative mb-8">
                    {/* Outer Ring */}
                    <div className="w-20 h-20 border-4 border-[#FECACA] rounded-full animate-spin">
                        <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-[#DC2626] rounded-full animate-spin"></div>
                    </div>

                    {/* Inner Pulse */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 bg-[#DC2626] rounded-full animate-pulse"></div>
                    </div>

                    {/* Floating Dots */}
                    <div className="absolute -top-2 -left-2 w-3 h-3 bg-[#DC2626] rounded-full animate-bounce"></div>
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#DC2626] rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#DC2626] rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-[#DC2626] rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
                </div>

                {/* Loading Text */}
                <div className="space-y-2" data-aos="fade-up" data-aos-delay="300">
                    <h2 className="text-2xl font-bold text-[#1E293B] dark:text-[#F8FAFC]">
                        Robin Ahmed
                    </h2>
                    <p className="text-[#DC2626] font-medium tracking-wide">
                        MERN Stack Developer
                    </p>

                    {/* Animated Loading Dots */}
                    <div className="flex justify-center items-center space-x-1 mt-4">
                        <span className="text-[#1E293B] dark:text-[#F8FAFC]">Loading</span>
                        <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-[#DC2626] rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-[#DC2626] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 bg-[#DC2626] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-8 w-64 mx-auto" data-aos="fade-up" data-aos-delay="600">
                    <div className="w-full bg-[#FECACA] rounded-full h-2">
                        <div className="bg-[#DC2626] h-2 rounded-full animate-pulse" style={{ width: '100%', animation: 'progressBar 3s ease-in-out infinite' }}></div>
                    </div>
                    <p className="text-sm text-[#1E293B] dark:text-[#F8FAFC] mt-2 opacity-75">
                        Preparing your experience...
                    </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-[#FECACA] rounded-full opacity-20 animate-ping"></div>
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-[#DC2626] rounded-full opacity-20 animate-ping" style={{ animationDelay: '1s' }}></div>

                {/* Floating Code Symbols */}
                <div className="absolute top-20 left-20 text-[#DC2626] opacity-30 animate-float">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.293 6.293a1 1 0 011.414 0L12 8.586l2.293-2.293a1 1 0 111.414 1.414L13.414 10l2.293 2.293a1 1 0 01-1.414 1.414L12 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L10.586 10 8.293 7.707a1 1 0 010-1.414z" />
                    </svg>
                </div>

                <div className="absolute bottom-20 right-20 text-[#DC2626] opacity-30 animate-float" style={{ animationDelay: '2s' }}>
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                </div>
            </div>

            <style jsx>{`
                @keyframes progressBar {
                    0% { width: 0%; }
                    50% { width: 70%; }
                    100% { width: 100%; }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default Loader;