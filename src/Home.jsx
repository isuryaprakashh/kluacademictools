import React, { useState, useEffect } from 'react';
import SEO from './SEO';


const Home = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);

  useEffect(() => {
    // Check if iOS
    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    setIsIOS(ios);

    // Capture install prompt
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      alert('Installation is not supported on this browser or the app is already installed. Use your browser menu to install.');
      return;
    }
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
    }
  };
  return (
    <div className="font-sans text-text-main w-full min-h-screen" style={{
      backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.60), rgba(255, 255, 255, 0.60)), url('/hero-bg.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat'
    }}>
      <SEO
        title="Home"
        description="Master your semester with KLU Academic Tools. Calculate attendance, SGPA, and CGPA securely on your device."
      />
      {/* Hero Section */}
      <section className="text-center py-24 px-4">

        <h1 className="text-6xl font-extrabold mb-6 max-w-4xl mx-auto tracking-tight leading-[1.1]">
          MASTER YOUR <br />
          <span className="text-[#ccc]">SEMESTER.</span>
        </h1>
        <p className="text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Track <span className="font-bold text-black">Attendance</span>, calculate <span className="font-bold text-black">SGPA/CGPA</span>, <span className="font-bold text-black">CGPA to Percentage</span> and stay ahead of your academic goals with tools designed for modern students.
        </p>
        <div className="flex gap-4 justify-center mb-16">
          <a href="/attendance" className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-200 cursor-pointer bg-primary text-white border border-primary hover:bg-[#8a161d]">Check Attendance</a>
          <a href="/sgpacgpa" className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-200 cursor-pointer bg-transparent text-text-main border border-border-color hover:bg-secondary-bg">Calculate GPA</a>
        </div>


      </section>





      {/* Install App Section */}
      <section className="text-center py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="max-w-[700px] mx-auto mb-10 text-center">
            <h2 className="text-[2.5rem] font-bold mb-4 tracking-tight">Add to home screen</h2>
          </div>

          <div className="max-w-[800px] mx-auto text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              {/* Windows Button */}
              <button
                className="group flex items-center justify-center gap-3 px-6 py-4 bg-white border-2 border-text-main rounded-full text-text-main font-semibold text-lg transition-all hover:bg-gray-50 hover:shadow-lg hover:scale-105 active:scale-95 min-w-[180px]"
                onClick={() => handleInstallClick()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-text-main">
                  <path d="M0 3.449L9.75 2.1v9.451H0v-8.102zm10.949-1.551L24 0v11.023h-13.051V1.898zm-10.949 11.229H9.75v8.324l-9.75-1.349V13.127zm10.949 0h13.051v9.648L10.949 21.498V13.127z" />
                </svg>
                Windows
              </button>

              <div className="hidden md:block w-px h-12 bg-gray-300 mx-2"></div>

              {/* Android Button */}
              <button
                className="group flex items-center justify-center gap-3 px-6 py-4 bg-white border-2 border-text-main rounded-full text-text-main font-semibold text-lg transition-all hover:bg-gray-50 hover:shadow-lg hover:scale-105 active:scale-95 min-w-[180px]"
                onClick={() => handleInstallClick()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-[#3DDC84]">
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1527-.5676.416.416 0 00-.5676.1527l-2.0225 3.503c-1.6365-.7496-3.4862-1.1664-5.438-1.1664-1.9515 0-3.8012.4168-5.4376 1.1664l-2.0229-3.503a.416.416 0 00-.5676-.1527.416.416 0 00-.1527.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
                </svg>
                Android
              </button>

              <div className="hidden md:block w-px h-12 bg-gray-300 mx-2"></div>

              {/* iOS Button */}
              <button
                className="group flex items-center justify-center gap-3 px-6 py-4 bg-white border-2 border-text-main rounded-full text-text-main font-semibold text-lg transition-all hover:bg-gray-50 hover:shadow-lg hover:scale-105 active:scale-95 min-w-[180px]"
                onClick={() => setShowIOSInstructions(!showIOSInstructions)}
              >
                <img src="/apple-logo.png" alt="iOS" className="h-6 object-contain" />
                iOS
              </button>
            </div>

            {/* iOS Instructions */}
            {(isIOS || showIOSInstructions) && (
              <div className="inline-block bg-white p-8 rounded-[2rem] border border-border-color shadow-sm mt-4 animate-fade-in">
                <div className="text-[3rem] mb-4 bg-secondary-bg w-20 h-20 flex items-center justify-center rounded-full mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 0 0-7.75 4.5" /><path d="M12 2a10 10 0 0 1 7.75 4.5" /><path d="M12 2v20" /><path d="M4.93 19.07a10 10 0 0 0 14.14 0" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Install on iOS</h3>
                <p className="text-text-muted text-base mb-2">1. Tap the <strong>Share</strong> button <span className="inline-block bg-[#007aff] text-white px-1 rounded text-sm"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" /></svg></span></p>
                <p className="text-text-muted text-base mb-2">2. Scroll down and tap <strong>"Add to Home Screen"</strong></p>
              </div>
            )}

            {/* Fallback Instructions */}
            {!deferredPrompt && !isIOS && !showIOSInstructions && (
              <div className="flex flex-col items-center justify-center p-8 bg-white border border-border-color rounded-[2rem] shadow-sm max-w-sm mx-auto mt-8 transition-all hover:shadow-md">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4 border border-green-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-green-700">App Installed</h3>
                <p className="text-text-muted text-base font-medium">Launch from your home screen</p>
              </div>
            )}
          </div>
        </div>
      </section>


      {/* Help Us Improve Section
      <section className="py-24 px-4">
        <div className="max-w-[600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[2.5rem] font-bold mb-4 tracking-tight">Help Us Improve</h2>
            <p className="text-text-muted text-lg mb-8">Do you satisfy with our tools?</p>

            <div className="flex justify-center gap-6 mb-8">
              <button
                className="flex items-center gap-2 px-6 py-3 bg-green-50 text-green-700 rounded-full border border-green-200 hover:bg-green-100 transition-colors font-semibold shadow-sm"
                onClick={() => { }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>
                Yes, I like it
              </button>
              <button
                className="flex items-center gap-2 px-6 py-3 bg-red-50 text-red-700 rounded-full border border-red-200 hover:bg-red-100 transition-colors font-semibold shadow-sm"
                onClick={() => { }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" /></svg>
                No, needs improv.
              </button>
            </div>
          </div>

          <form className="bg-white/80 backdrop-blur-md p-8 rounded-[2rem] border border-border-color shadow-sm" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col sm:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label htmlFor="name" className="block font-semibold mb-2 text-text-main pl-2">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your good name..."
                  className="w-full p-4 bg-white border border-transparent rounded-full outline-none focus:border-primary focus:shadow-sm transition-all text-lg"
                />
              </div>

              <div className="flex-1">
                <label htmlFor="email" className="block font-semibold mb-2 text-text-main pl-2">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className="w-full p-4 bg-white border border-transparent rounded-full outline-none focus:border-primary focus:shadow-sm transition-all text-lg"
                />
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="feedback" className="block font-semibold mb-2 text-text-main pl-2">Feedback</label>
              <textarea
                id="feedback"
                rows="4"
                placeholder="Your suggestions are valuable to us!"
                className="w-full p-4 bg-white border border-transparent rounded-3xl outline-none focus:border-primary focus:shadow-sm transition-all text-lg resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-xl hover:bg-[#8a161d] transition-colors shadow-lg shadow-primary/20">
              Submit Feedback
            </button>
          </form>
        </div>
      </section> */}

      {/* Footer CTA */}
      <section className="bg-black text-white py-24 px-4 text-left">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-[3.5rem] font-black uppercase italic max-w-[800px] leading-[0.9] mb-12">PRIVACY FIRST.<br /><span className="text-[#9ca3af]">YOUR DATA STAYS YOURS.</span></h2>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-12 border-t border-[#333] pt-12">
            <div>
              <h4 className="text-white mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                SECURE ON DEVICE
              </h4>
              <p className="text-[#9ca3af] text-sm">Your data never leaves your device. Everything is stored locally.</p>
            </div>
            <div className="footer-item">
              <h4 className="text-white mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                ULTRA FAST
              </h4>
              <p className="text-[#9ca3af] text-sm">Instant calculations with no loading times.</p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#333] flex justify-between text-[#6b7280] text-sm">
            <div>Designed & Developed by <span className="font-bold text-white">Surya</span> & <span className="font-bold text-white">Akhil</span> © 2026</div>
            <div>
              <a href="/privacy" className="mr-4 hover:text-white transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
}

export default Home;
