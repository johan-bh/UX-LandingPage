// import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { ScrollParallax } from "react-just-parallax";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import sleepingPerson from "../assets/hero/sleeping-person.png";
import sleepingQuality from "../assets/hero/sleeping_quality.svg";
import sleepOnset from "../assets/hero/sleep_onset.svg";
import personalized from "../assets/hero/personalized.svg";
import { useInView } from '../hooks/useInView';
import { Chart } from 'chart.js/auto';
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from 'react-swipeable';
import REMedyLogo from "../assets/REMedy_navbar_logo.svg";
import { collabApps } from "../constants";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import spotifyIcon from "../assets/hero/spotify.svg";

const stats = [
  {
    id: 1,
    icon: sleepingQuality,
    text: "Sleep Quality",
    description: "AI-powered sleep stage analysis provides actionable insights for better rest in just two weeks"
  },
  {
    id: 2,
    icon: sleepOnset,
    text: "Sleep Onset",
    description: "Smart IoT devices automate your environment for optimal sleep and wake cycles through temperature, light, and sound"
  },
  {
    id: 3,
    icon: personalized,
    text: "Personalized",
    description: "Our AI learns your patterns to create tailored recommendations that evolve with your sleep habits"
  }
];

const testimonials = [
  {
    content: "REMedy has transformed my sleep quality completely. The personalized recommendations helped me establish a consistent sleep schedule, and I'm waking up refreshed for the first time in years.",
    author: "Sarah Chen",
    role: "Senior Product Designer",
    company: "Novo Nordisk",
    highlight: "waking up refreshed",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    chartData: {
      quality: [50, 58, 54, 65, 72, 78, 85, 92],
      deepRem: [90, 98, 115, 108, 145, 158, 172, 185],
      improvement: "+42%",
      currentQuality: "92%",
      deepRemTotal: "185m"
    }
  },
  {
    content: "The sleep tracking is incredibly accurate, and the AI suggestions are spot-on. Within 8 weeks of using REMedy, my sleep efficiency improved by 24%, and my daytime energy levels are noticeably better.",
    author: "Michael Torres",
    role: "Lead Software Engineer",
    company: "Maersk Digital",
    highlight: "improved by 24%",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    chartData: {
      quality: [60, 63, 65, 71, 75, 79, 82, 84],
      deepRem: [100, 108, 115, 125, 135, 142, 150, 155],
      improvement: "+24%",
      currentQuality: "84%",
      deepRemTotal: "155m"
    }
  },
  {
    content: "As a medical resident with irregular shifts, getting quality sleep was always challenging. REMedy adapted to my changing schedule and helped me maximize my rest during odd hours. My focus during rounds has significantly improved.",
    author: "Emma Nielsen",
    role: "Medical Resident",
    company: "Rigshospitalet",
    highlight: "significantly improved",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    chartData: {
      quality: [45, 52, 58, 67, 73, 78, 83, 88],
      deepRem: [85, 95, 110, 125, 140, 155, 165, 175],
      improvement: "+35%",
      currentQuality: "88%",
      deepRemTotal: "175m"
    }
  }
];

const Hero = () => {
  const parallaxRef = useRef(null);
  const navigate = useNavigate();
  const [heroRef, heroInView] = useInView();
  const [statsRef, statsInView] = useInView();
  const [testimonialsRef, testimonialsInView] = useInView();
  const [ctaRef, ctaInView] = useInView();
  const chartRef = useRef(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const canvasRefs = useRef([null, null]); // Keep track of both canvases
  const [howItWorksRef, howItWorksInView] = useInView();
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Configure swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentTestimonial < testimonials.length - 1) {
        setCurrentTestimonial(prev => prev + 1);
      }
    },
    onSwipedRight: () => {
      if (currentTestimonial > 0) {
        setCurrentTestimonial(prev => prev - 1);
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const handleSignupClick = () => {
    navigate('/signup');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSleepChart = (chartData, canvasId) => {
    const ctx = document.getElementById(canvasId)?.getContext('2d');
    if (!ctx) return;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, 'rgba(30, 154, 252, 0.2)');
    gradient.addColorStop(1, 'rgba(30, 154, 252, 0)');

    const deepRemGradient = ctx.createLinearGradient(0, 0, 0, 200);
    deepRemGradient.addColorStop(0, 'rgba(100, 58, 167, 0.2)');
    deepRemGradient.addColorStop(1, 'rgba(100, 58, 167, 0)');

    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
        datasets: [{
          label: 'Sleep Quality',
          data: chartData.quality,
          borderColor: '#1E9AFC',
          backgroundColor: gradient,
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          yAxisID: 'y'
        },
        {
          label: 'Deep + REM Sleep',
          data: chartData.deepRem,
          borderColor: '#643AA7',
          backgroundColor: deepRemGradient,
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          yAxisID: 'y1'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 15,
            right: 15,
            top: 10,
            bottom: 20
          }
        },
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                if (ctx.datasetIndex === 0) {
                  return `Quality: ${ctx.raw}%`;
                }
                return `Deep + REM: ${ctx.raw}min`;
              }
            }
          }
        },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            min: 0,
            max: 100,
            ticks: {
              callback: v => `${v}%`,
              font: { size: 11, weight: 600 },
              stepSize: 20,
              color: '#555',
              padding: 8
            },
            grid: { color: 'rgba(0,0,0,0.03)' }
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            min: 0,
            max: 200,
            ticks: {
              callback: v => `${v}m`,
              font: { size: 11, weight: 600 },
              stepSize: 40,
              color: '#555',
              padding: 8
            },
            grid: { display: false }
          },
          x: {
            grid: { display: false },
            ticks: { 
              font: { size: 11, weight: 600 },
              color: '#555',
              padding: 8
            }
          }
        }
      }
    });
  };

  useEffect(() => {
    if (testimonialsInView) {
      // Clear any existing charts first
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }

      const testimonial = testimonials[currentTestimonial];
      if (testimonial?.chartData) {
        const canvas = canvasRefs.current[currentTestimonial];
        if (!canvas) {
          console.warn(`Canvas ref ${currentTestimonial} not found`);
          return;
        }

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          console.warn('Could not get 2d context from canvas');
          return;
        }

        try {
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, 'rgba(30, 154, 252, 0.2)');
          gradient.addColorStop(1, 'rgba(30, 154, 252, 0)');

          const deepRemGradient = ctx.createLinearGradient(0, 0, 0, 200);
          deepRemGradient.addColorStop(0, 'rgba(100, 58, 167, 0.2)');
          deepRemGradient.addColorStop(1, 'rgba(100, 58, 167, 0)');

          chartRef.current = new Chart(ctx, {
            type: 'line',
            data: {
              labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
              datasets: [{
                label: 'Sleep Quality',
                data: testimonial.chartData.quality,
                borderColor: '#1E9AFC',
                backgroundColor: gradient,
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                yAxisID: 'y'
              },
              {
                label: 'Deep + REM Sleep',
                data: testimonial.chartData.deepRem,
                borderColor: '#643AA7',
                backgroundColor: deepRemGradient,
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                yAxisID: 'y1'
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              layout: {
                padding: {
                  left: 15,
                  right: 15,
                  top: 10,
                  bottom: 20
                }
              },
              interaction: {
                mode: 'index',
                intersect: false,
              },
              plugins: {
                legend: { display: false },
                tooltip: {
                  callbacks: {
                    label: (ctx) => {
                      if (ctx.datasetIndex === 0) {
                        return `Quality: ${ctx.raw}%`;
                      }
                      return `Deep + REM: ${ctx.raw}min`;
                    }
                  }
                }
              },
              scales: {
                y: {
                  type: 'linear',
                  display: true,
                  position: 'left',
                  min: 0,
                  max: 100,
                  ticks: {
                    callback: v => `${v}%`,
                    font: { size: 11, weight: 600 },
                    stepSize: 20,
                    color: '#555',
                    padding: 8
                  },
                  grid: { color: 'rgba(0,0,0,0.03)' }
                },
                y1: {
                  type: 'linear',
                  display: true,
                  position: 'right',
                  min: 0,
                  max: 200,
                  ticks: {
                    callback: v => `${v}m`,
                    font: { size: 11, weight: 600 },
                    stepSize: 40,
                    color: '#555',
                    padding: 8
                  },
                  grid: { display: false }
                },
                x: {
                  grid: { display: false },
                  ticks: { 
                    font: { size: 11, weight: 600 },
                    color: '#555',
                    padding: 8
                  }
                }
              }
            }
          });
        } catch (error) {
          console.error('Error initializing chart:', error);
        }
      }
    }
  }, [testimonialsInView, currentTestimonial]);

  // Update the arrow animation variants
  const arrowVariants = {
    initial: { x: 0, opacity: 0 },
    animate: {
      x: [0, -100, 0, 0, -100, 0], // Changed back to negative for leftward motion
      opacity: [0, 1, 0, 0, 1, 0],
      transition: {
        duration: 8,
        times: [
          0,     // First slide start
          0.25,  // First slide end
          0.3,   // First fade out
          0.5,   // Second slide start
          0.75,  // Second slide end
          0.8    // Final fade out
        ],
        ease: "easeOut",
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  useEffect(() => {
    if (heroInView) {
      // Temperature Chart
      const tempCtx = document.getElementById('heroTempChart')?.getContext('2d');
      if (tempCtx) {
        new Chart(tempCtx, {
          type: 'line',
          data: {
            labels: ['10 PM','12 AM','2 AM','4 AM','6 AM'],
            datasets: [{
              label: 'Core Temp (°C)',
              data: [37.1, 36.8, 36.6, 36.7, 36.9],
              borderColor: '#f5a623',
              backgroundColor: '#f5a62388',
              fill: true,
              tension: 0.3
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            scales: {
              x: {
                ticks: { 
                  color: '#fff',
                  maxRotation: 0,
                  autoSkip: true,
                  maxTicksLimit: 5,
                  font: { size: 10 }
                },
                grid: { display: false }
              },
              y: {
                ticks: { 
                  color: '#fff',
                  font: { size: 10 },
                  callback: value => value + '°C'
                },
                suggestedMin: 35.5,
                suggestedMax: 38,
                grid: { display: false }
              }
            },
            plugins: {
              legend: { display: false }
            }
          }
        });
      }

      // Heart Rate Chart
      const heartCtx = document.getElementById('heroHeartChart')?.getContext('2d');
      if (heartCtx) {
        new Chart(heartCtx, {
          type: 'line',
          data: {
            labels: ['10 PM','12 AM','2 AM','4 AM','6 AM'],
            datasets: [{
              label: 'Heart Rate (bpm)',
              data: [65, 60, 58, 62, 65],
              borderColor: '#ff4466',
              backgroundColor: '#ff446688',
              fill: true,
              tension: 0.3
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            scales: {
              x: {
                ticks: { 
                  color: '#fff',
                  maxRotation: 0,
                  autoSkip: true,
                  maxTicksLimit: 5,
                  font: { size: 10 }
                },
                grid: { display: false }
              },
              y: {
                ticks: { 
                  color: '#fff',
                  font: { size: 10 },
                  callback: value => value + ' bpm'
                },
                suggestedMin: 50,
                suggestedMax: 80,
                grid: { display: false }
              }
            },
            plugins: {
              legend: { display: false }
            }
          }
        });
      }

      // Audio Levels Chart
      const audioCtx = document.getElementById('heroAudioChart')?.getContext('2d');
      if (audioCtx) {
        new Chart(audioCtx, {
          type: 'line',
          data: {
            labels: ['10 PM','12 AM','2 AM','4 AM','6 AM'],
            datasets: [{
              label: 'Audible (dB)',
              data: [30, 25, 20, 22, 28],
              borderColor: '#7b61ff',
              backgroundColor: '#7b61ff88',
              fill: true,
              tension: 0.3
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            scales: {
              x: {
                ticks: { 
                  color: '#fff',
                  maxRotation: 0,
                  autoSkip: true,
                  maxTicksLimit: 5,
                  font: { size: 10 }
                },
                grid: { display: false }
              },
              y: {
                ticks: { 
                  color: '#fff',
                  font: { size: 10 },
                  callback: value => value + ' dB'
                },
                suggestedMin: 0,
                suggestedMax: 50,
                grid: { display: false }
              }
            },
            plugins: {
              legend: { display: false }
            }
          }
        });
      }
    }
  }, [heroInView]);

  return (
    <Section
      className="pt-[6rem] -mt-[4rem] bg-gray-900 dark:bg-gray-900 scale-90 origin-top"
      crosses
      crossesOffset="lg:translate-y-[4rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative max-w-[1440px] mx-auto px-8" ref={parallaxRef}>
        {/* Platform Section with Image and Info Boxes */}
        <div 
          ref={heroRef}
          className={`flex flex-col lg:flex-row items-start gap-0 mb-24 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 opacity-0 dark:bg-gray-800 max-w-[1200px] mx-auto ${
            heroInView ? 'animate-fade-in-up' : ''
          }`}
        >
          <div className="lg:w-[65%] order-2 lg:order-1 relative">
            <img 
              src={sleepingPerson} 
              alt="Peaceful Sleep Experience" 
              className="w-full h-full object-cover rounded-tl-3xl max-h-[500px]"
            />
            
            {/* Temperature and Spotify Overlay */}
            <div className="absolute bottom-[25%] lg:bottom-[5%] left-0 w-full">
              <div className="absolute bottom-0 left-0 w-full p-2 lg:p-3 pb-3">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end max-w-[280px] lg:max-w-none mx-auto 
                  bg-gradient-to-t from-gray-900/95 via-gray-800/85 to-transparent 
                  backdrop-blur-lg rounded-lg p-3">
                  <div>
                    <h3 className="text-[13px] lg:text-lg font-semibold text-white drop-shadow-lg">
                      Temperature: 18°C
                    </h3>
                    <p className="text-[11px] lg:text-sm text-white drop-shadow-lg">
                      <strong>State:</strong> Light Sleep — Initiating wake-up process
                    </p>
                    <div className="flex items-center justify-center lg:hidden mt-1">
                      <img src={spotifyIcon} alt="Spotify" className="w-2.5 h-2.5 mr-1" />
                      <span className="text-[9px] text-white drop-shadow-lg">
                        Now Playing: What a Wonderful World
                      </span>
                    </div>
                  </div>
                  <div className="hidden lg:flex items-center text-sm text-white drop-shadow-lg">
                    <img src={spotifyIcon} alt="Spotify" className="w-3.5 h-3.5 mr-1.5" />
                    <span className="flex items-center">
                      Now Playing: What a Wonderful World
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-[35%] text-center order-1 lg:order-2 p-4 lg:p-6 lg:pt-24">
            <h1 className="h1 mb-4 lg:mb-6 dark:text-white text-3xl lg:text-4xl">
              Better Sleep with REMedy
            </h1>
            <h2 className="body-1 mb-6 lg:mb-8 text-black/80 dark:text-gray-300 text-base lg:text-lg">
              Your personal sleep AI assistant that learns and adapts to your unique patterns
            </h2>
            
            {/* CTA Button */}
            <Button 
              className="w-full sm:w-auto !bg-blue-500 hover:!bg-blue-600 !text-white font-semibold text-sm py-2 mx-auto"
              onClick={handleSignupClick}
            >
              🌟 Start Free Assessment
            </Button>
          </div>
        </div>

        {/* How REMedy Works Section */}
        <div 
          ref={howItWorksRef}
          className={`container relative mb-16 opacity-0 ${
            howItWorksInView ? 'animate-fade-in-up' : ''
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 text-white">
            How REMedy Works
          </h2>
          
          {/* Enhanced merged cards - Moved up */}
          <div 
            ref={statsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24"
          >
            <div className={`relative flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-[#1E9AFC]/10 to-[#1A75FF]/10 border border-gray-800 transition-all duration-300 hover:border-blue-500/30 opacity-0 translate-y-8 ${
              statsInView ? 'animate-fade-in-up delay-[200ms]' : ''
            }`}>
              <img 
                src={sleepingQuality} 
                alt="Sleep Quality"
                className="w-16 h-16 mb-6 text-blue-500"
              />
              <h3 className="text-lg font-semibold mb-4 text-white">Smart Sleep Analysis</h3>
              <p className="text-sm text-gray-300">
                AI-powered sleep stage analysis provides actionable insights for better rest in just two weeks
              </p>
            </div>

            <div className={`relative flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-[#1E9AFC]/10 to-[#1A75FF]/10 border border-gray-800 transition-all duration-300 hover:border-blue-500/30 opacity-0 translate-y-8 ${
              statsInView ? 'animate-fade-in-up delay-[400ms]' : ''
            }`}>
              <img 
                src={sleepOnset} 
                alt="Sleep Onset"
                className="w-16 h-16 mb-6 text-blue-500"
              />
              <h3 className="text-lg font-semibold mb-4 text-white">Environment Control</h3>
              <p className="text-sm text-gray-300">
                Smart IoT devices automate your environment for optimal sleep and wake cycles through temperature, light, and sound
              </p>
            </div>

            <div className={`relative flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-[#1E9AFC]/10 to-[#1A75FF]/10 border border-gray-800 transition-all duration-300 hover:border-blue-500/30 opacity-0 translate-y-8 ${
              statsInView ? 'animate-fade-in-up delay-[600ms]' : ''
            }`}>
              <img 
                src={personalized} 
                alt="Personalized"
                className="w-16 h-16 mb-6 text-blue-500"
              />
              <h3 className="text-lg font-semibold mb-4 text-white">Smart Adaptation</h3>
              <p className="text-sm text-gray-300">
                Our AI learns your patterns to create tailored recommendations that evolve with your sleep habits
              </p>
            </div>
          </div>

          {/* Circular figure section with headline */}
          <div className="flex items-center justify-center gap-20 mb-24 max-w-[1200px] mx-auto">
            {/* Left side headline */}
            <div className="w-1/3 max-w-[400px] pr-20">
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                Check out the REMedy sleep flow
              </h3>
              <p className="mt-4 text-gray-300 text-sm lg:text-base">
                See how our integrated system works together to optimize your sleep experience
              </p>
            </div>

            {/* Circular figure - Centered */}
            <div className="relative flex w-[20rem] aspect-square scale-75 md:scale-100">
              {/* Connection Arrows */}
              <svg className="absolute inset-0 w-full h-full" style={{ transform: 'rotate(30deg)' }}>
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="7"
                    markerHeight="7"
                    refX="5"
                    refY="3.5"
                    orient="auto"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <polygon points="0 0, 7 3.5, 0 7" fill="#1E9AFC" />
                  </marker>
                </defs>
                
                {/* Curved arrows following the circle */}
                <g transform="translate(160, 160)">
                  <path
                    d="M 0,-155 A 155 155 0 0 1 134,-77"
                    fill="none"
                    stroke="#1E9AFC"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    markerEnd="url(#arrowhead)"
                    className="opacity-70"
                  />
                  <path
                    d="M 134,-77 A 155 155 0 0 1 134,77"
                    fill="none"
                    stroke="#1E9AFC"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    markerEnd="url(#arrowhead)"
                    className="opacity-70"
                  />
                  <path
                    d="M 134,77 A 155 155 0 0 1 0,155"
                    fill="none"
                    stroke="#1E9AFC"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    markerEnd="url(#arrowhead)"
                    className="opacity-70"
                  />
                  <path
                    d="M 0,155 A 155 155 0 0 1 -134,77"
                    fill="none"
                    stroke="#1E9AFC"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    markerEnd="url(#arrowhead)"
                    className="opacity-70"
                  />
                  <path
                    d="M -134,77 A 155 155 0 0 1 -134,-77"
                    fill="none"
                    stroke="#1E9AFC"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    markerEnd="url(#arrowhead)"
                    className="opacity-70"
                  />
                  <path
                    d="M -134,-77 A 155 155 0 0 1 0,-155"
                    fill="none"
                    stroke="#1E9AFC"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    markerEnd="url(#arrowhead)"
                    className="opacity-70"
                  />
                </g>
              </svg>

              {/* App icons circle */}
              <ul className="absolute inset-0 z-10">
                {collabApps.map((app, index) => {
                  const getTooltipPosition = (index) => {
                    switch(index) {
                      case 0: // Integrate (moved further up)
                        return "left-[-300px] md:left-[-300px] -translate-x-0 -top-20 max-md:left-[-80px]";
                      case 1: // Temperature
                        return "right-[-300px] md:right-[-300px] -translate-x-0 -top-10 max-md:right-[-80px]";
                      case 2: // Smart Light
                        return "right-[-300px] md:right-[-300px] -translate-x-0 top-0 max-md:right-[-60px]";
                      case 3: // Wind Down
                        return "right-1/2 md:right-[-350px] -translate-x-0 -top-[100px] z-[999999]";
                      case 4: // Wake Up (adjusted halfway)
                        return "right-[-400px] md:right-[-0px] -translate-x-0 bottom-[-150px] max-md:right-[-80px] z-[999999]";
                      case 5: // Analytics
                        return "left-[-300px] md:left-[-300px] -translate-x-0 bottom-0 max-md:left-[-80px]";
                      default:
                        return "-bottom-20 left-1/2 -translate-x-1/2";
                    }
                  };

                  const angle = (index * (360 / collabApps.length));
                  
                  return (
                    <li
                      key={app.id}
                      className="absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom"
                      style={{ transform: `rotate(${angle}deg)` }}
                    >
                      <div
                        className="relative -top-[1.6rem] z-50"
                        style={{ transform: `rotate(-${angle}deg)` }}
                      >
                        {/* Icon Container */}
                        <button 
                          className="relative flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl transition-all duration-300 
                            hover:border-[#1E9AFC] hover:shadow-[0_0_15px_rgba(30,154,252,0.25)]
                            animate-subtle-pulse cursor-pointer
                            before:absolute before:inset-0 before:rounded-xl before:border-2 before:border-[#1E9AFC]/20 before:animate-border-pulse"
                          onMouseEnter={() => setHoveredIcon(app.id)}
                          onMouseLeave={() => setHoveredIcon(null)}
                        >
                          <img
                            className="m-auto relative z-10"
                            width={app.width}
                            height={app.height}
                            alt={app.title}
                            src={app.icon}
                          />
                          {/* Number Badge - Repositioned to top center */}
                          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#1E9AFC] border-2 border-gray-900 flex items-center justify-center z-20">
                            <span className="text-[10px] font-bold text-white">
                              {Number(app.id) + 1}
                            </span>
                          </div>
                        </button>

                        {/* Tooltip */}
                        <div 
                          className={`fixed ${getTooltipPosition(index)} transition-all duration-300 
                            bg-[#1E1E1E]/95 backdrop-blur-sm border border-[#1E9AFC]/20 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl text-sm 
                            whitespace-normal w-[200px] sm:w-[280px] text-center z-[999999] shadow-xl pointer-events-none`}
                          style={{ 
                            opacity: hoveredIcon === app.id ? 1 : 0,
                            transform: `rotate(0deg)`,
                          }}
                        >
                          <h4 className="font-semibold text-[#1E9AFC] mb-1 text-xs sm:text-sm">{app.title}</h4>
                          <p className="text-gray-300 text-[10px] sm:text-sm leading-relaxed">{app.description}</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* Logo container */}
              <div className="absolute right-[-74px] top-1/2 -translate-y-1/2 flex items-center justify-center z-20">
                <img
                  src={REMedyLogo}
                  className="w-[60%] h-[60%] object-contain"
                  alt="brainwave"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div 
          ref={testimonialsRef} 
          className={`relative pt-4 -mb-40 opacity-0 ${
            testimonialsInView ? 'animate-fade-in-up' : ''
          }`}
        >
          <div className="relative max-w-[1440px] mx-auto">
            {/* Section Header */}
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-white">
              What Our Customers Say
            </h2>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mb-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentTestimonial === index 
                      ? 'bg-[#1E9AFC] w-6' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Centered Slide Indicator - Hide on last testimonial */}
            {testimonialsInView && currentTestimonial < testimonials.length - 1 && (
              <div className="absolute bottom-[0px] left-1/2 -translate-x-1/2 z-20">
                <div className="flex items-center gap-2 text-[#1E9AFC]">
                  <svg 
                    width="32" 
                    height="24" 
                    viewBox="0 0 32 24" 
                    fill="none"
                  >
                    <path 
                      d="M30 12H8M12 4L4 12l8 8"
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm text-gray-400">Swipe to see more</span>
                </div>
              </div>
            )}

            {/* Testimonials container */}
            <div 
              {...handlers} 
              className="relative h-[600px] md:h-[400px] cursor-grab active:cursor-grabbing overflow-hidden"
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
                    currentTestimonial === index 
                      ? 'opacity-100 translate-x-0 translate-y-0 z-10' 
                      : 'opacity-0 pointer-events-none z-0 translate-y-8'
                  }`}
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ 
                      opacity: currentTestimonial === index ? 1 : 0,
                      y: currentTestimonial === index ? 0 : 30
                    }}
                    transition={{ 
                      duration: 0.7,
                      delay: 0.2,
                      ease: "easeOut" 
                    }}
                    className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 relative"
                  >
                    {/* Testimonial text */}
                    <div className="w-full md:w-1/2 bg-gradient-to-br from-[#1E9AFC]/5 to-[#1A75FF]/5 rounded-2xl p-6 md:p-8 h-[320px] flex flex-col justify-center">
                      <p className="text-lg leading-relaxed mb-8 text-gray-200 max-w-[90%] text-left pt-8">
                        {testimonial.content.split(testimonial.highlight).map((part, i, arr) => (
                          <span key={`testimonial-${index}-part-${i}`}>
                            {part}
                            {i < arr.length - 1 && (
                              <span className="font-bold text-[#1E9AFC]">
                                {testimonial.highlight}
                              </span>
                            )}
                          </span>
                        ))}
                      </p>
                      <div className="flex items-center gap-4 mt-auto">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1E9AFC]/30 to-[#1A75FF]/30 flex items-center justify-center">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.author}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <h4 className="font-bold text-lg dark:text-white truncate">{testimonial.author}</h4>
                          <p className="text-n-4 dark:text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</p>
                        </div>
                      </div>
                    </div>

                    {/* Chart container */}
                    <div className="w-full md:w-1/2 bg-gray-800 rounded-2xl p-6 md:p-8 overflow-hidden flex flex-col h-[320px]">
                      <div className="metrics grid grid-cols-3 gap-3 md:gap-6 mb-6">
                        <div className="text-center">
                          <div className="text-lg font-bold text-[#1E9AFC]">{testimonial.chartData.improvement}</div>
                          <div className="text-sm text-gray-400">Improvement</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-[#1E9AFC]">{testimonial.chartData.currentQuality}</div>
                          <div className="text-sm text-gray-400">Current Quality</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-[#1E9AFC]">{testimonial.chartData.deepRemTotal}</div>
                          <div className="text-sm text-gray-400">Deep + REM</div>
                        </div>
                      </div>
                      <div className="flex-1 min-h-0">
                        <canvas 
                          id={`sleepChart-${index}`}
                          ref={el => canvasRefs.current[index] = el}
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;