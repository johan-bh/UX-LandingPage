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
    description: "Advanced algorithms analyze your sleep stages to recommend actionable improvements, ensuring better rest within two weeks"
  },
  {
    id: 2,
    icon: sleepOnset,
    text: "Sleep Onset",
    description: "Smart environment controls and personalized wind-down routines help you fall asleep faster and maintain consistent sleep cycles"
  },
  {
    id: 3,
    icon: personalized,
    text: "Personalized",
    description: "Our AI learns your unique patterns and preferences to create a tailored sleep optimization plan that evolves with you"
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

      // Sleep Stages Chart
      const sleepCtx = document.getElementById('heroSleepChart')?.getContext('2d');
      if (sleepCtx) {
        new Chart(sleepCtx, {
          type: 'bar',
          data: {
            labels: ['Cycle 1', 'Cycle 2', 'Cycle 3', 'Cycle 4', 'Cycle 5', 'Awake'],
            datasets: [
              {
                label: 'Light (1st)',
                data: [15, 12, 8, 10, 5, 0],
                backgroundColor: '#4e9fee'
              },
              {
                label: 'Deep',
                data: [45, 35, 25, 15, 10, 0],
                backgroundColor: '#26367a'
              },
              {
                label: 'Light (2nd)',
                data: [20, 25, 30, 35, 40, 0],
                backgroundColor: '#4e9fee'
              },
              {
                label: 'REM',
                data: [10, 18, 27, 30, 35, 0],
                backgroundColor: '#6b4fa0'
              },
              {
                label: 'Awake',
                data: [0, 0, 0, 0, 0, 25],
                backgroundColor: '#bbb'
              }
            ]
          },
          options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                stacked: true,
                ticks: { 
                  color: '#fff',
                  font: { size: 10 },
                  callback: value => value + 'm'
                },
                grid: { display: false }
              },
              y: {
                stacked: true,
                ticks: { 
                  color: '#fff',
                  font: { size: 10 }
                },
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
      className="pt-[8rem] -mt-[5.25rem] bg-gray-900 dark:bg-gray-900"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        {/* Platform Section with Image and Info Boxes */}
        <div 
          ref={heroRef}
          className={`flex flex-col lg:flex-row items-start gap-0 mb-16 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 opacity-0 dark:bg-gray-800 ${
            heroInView ? 'animate-fade-in-up' : ''
          }`}
        >
          <div className="lg:w-[60%] order-2 lg:order-1 relative">
            <img 
              src={sleepingPerson} 
              alt="Peaceful Sleep Experience" 
              className="w-full h-full object-cover rounded-tl-3xl"
            />
            {/* Side Panel Overlay - Positioned higher */}
            <div className="hidden lg:block absolute left-4 w-[218px] bottom-[35%] h-[30%] lg:translate-y-[50px]">
              <div className="w-[218px] flex flex-col h-full">
                <div className="rounded-t-lg p-2 flex-1">
                  <div className="text-sm font-semibold mb-1 text-white">Core Body Temp</div>
                  <div className="h-[calc(100%-24px)] bg-black/20 rounded-lg">
                    <canvas id="heroTempChart"></canvas>
                  </div>
                </div>
                <div className="p-2 flex-1">
                  <div className="text-sm font-semibold mb-1 text-white">Heart Rate</div>
                  <div className="h-[calc(100%-24px)] bg-black/20 rounded-lg">
                    <canvas id="heroHeartChart"></canvas>
                  </div>
                </div>
                <div className="rounded-b-lg p-2 flex-1">
                  <div className="text-sm font-semibold mb-1 text-white">Audible Levels</div>
                  <div className="h-[calc(100%-24px)] bg-black/20 rounded-lg">
                    <canvas id="heroAudioChart"></canvas>
                  </div>
                </div>
              </div>
            </div>

            {/* Sleep Cycles Overlay - At the bottom */}
            <div className="absolute bottom-[20%] lg:bottom-[1%] left-0 w-full h-auto lg:h-[45%] rounded-bl-3xl">
              <div className="absolute bottom-0 left-0 w-full h-full p-2 lg:p-4 pb-3 lg:pb-6">
                <div className="flex h-full">
                  {/* Right side main chart */}
                  <div className="flex-1 flex flex-col items-center lg:items-start ml-0 lg:ml-[238px] text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start mb-2 lg:mb-1 w-full max-w-[280px] lg:max-w-none mx-auto">
                      <div>
                        <h3 className="text-[13px] lg:text-lg font-semibold text-white">Temperature: 18°C</h3>
                        <p className="text-[11px] lg:text-sm text-white"><strong>State:</strong> Light Sleep — Initiating wake-up process</p>
                        <div className="flex items-center justify-center lg:hidden mt-1">
                          <img src={spotifyIcon} alt="Spotify" className="w-2.5 h-2.5 mr-1" />
                          <span className="text-[9px] text-white">
                            Now Playing: What a Wonderful World
                          </span>
                        </div>
                      </div>
                      <div className="hidden lg:flex items-center text-sm text-white">
                        <img src={spotifyIcon} alt="Spotify" className="w-3.5 h-3.5 mr-1.5" />
                        <span className="flex items-center">
                          Now Playing: What a Wonderful World
                        </span>
                      </div>
                    </div>
                    <div className="hidden lg:flex flex-1 bg-black/20 rounded-lg p-0.5 lg:p-2 w-full">
                      <canvas id="heroSleepChart"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-[35%] text-left order-1 lg:order-2 p-6 lg:p-10">
            <h1 className="h1 mb-6 dark:text-white">
              Optimize Your Sleep with AI-Powered Insights
            </h1>
            <h2 className="body-1 mb-8 text-black/80 dark:text-gray-300">
              Track, analyze, and improve your sleep patterns with our <span className="text-blue-500">intelligent sleep assistant</span> that adapts to your unique rhythm
            </h2>
            
            {/* Added CTA Section */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
              <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                🌟 Free Sleep Assessment
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Get personalized insights and a 7-day free trial. No credit card required.
              </p>
              <Button 
                className="w-full sm:w-auto !bg-blue-500 hover:!bg-blue-600 !text-white font-semibold"
                onClick={handleSignupClick}
              >
                Start Free Assessment
              </Button>
            </div>
          </div>
        </div>

        {/* How REMedy Works Section */}
        <div 
          ref={howItWorksRef}
          className={`container relative mb-32 opacity-0 ${
            howItWorksInView ? 'animate-fade-in-up' : ''
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 text-white">
            How REMedy Works
          </h2>
          
          {/* Circular figure remains the same */}
          <div className="relative left-1/2 flex w-[20rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100 mb-16">
            {/* Logo container - centered vertically, right side */}
            <div className="absolute right-[-74px] top-1/2 -translate-y-1/2 flex items-center justify-center z-10">
              <img
                src={REMedyLogo}
                className="w-[60%] h-[60%] object-contain"
                alt="brainwave"
              />
            </div>

            {/* App icons circle */}
            <ul className="absolute inset-0">
              {collabApps.map((app, index) => {
                const angle = (index * (360 / collabApps.length));
                
                // Calculate tooltip position based on icon position
                const getTooltipPosition = (index) => {
                  switch(index) {
                    case 0: // Wind Down (top)
                      return "left-1/2 -translate-x-1/2 -top-32"; // Position above
                    case 1: // Wake Up (top right)
                      return "right-[-300px] md:right-[-300px] -translate-x-0 -top-10 max-md:right-[-80px]"; // Position to the right
                    case 2: // Temperature (right)
                      return "right-[-300px] md:right-[-300px] -translate-x-0 top-0 max-md:right-[-60px]"; // Position to the right
                    case 3: // Analytics (bottom right)
                      return "right-[-300px] md:right-[-300px] -translate-x-0 bottom-0 max-md:right-[-80px]"; // Position to the right
                    case 4: // Assessment (bottom left)
                      return "left-[-300px] md:left-[-300px] -translate-x-0 bottom-0 max-md:left-[-80px]"; // Position to the left
                    case 5: // IoT/Integrate (left)
                      return "left-[-300px] md:left-[-300px] -translate-x-0 top-0 max-md:left-[-60px]"; // Position to the left
                    default:
                      return "-bottom-20 left-1/2 -translate-x-1/2";
                  }
                };

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
                        onMouseEnter={() => {
                          console.log(`Hovering over ${app.title}`);
                          setHoveredIcon(app.id);
                        }}
                        onMouseLeave={() => {
                          console.log(`Leaving ${app.title}`);
                          setHoveredIcon(null);
                        }}
                      >
                        <img
                          className="m-auto relative z-10"
                          width={app.width}
                          height={app.height}
                          alt={app.title}
                          src={app.icon}
                        />
                      </button>

                      {/* Tooltip */}
                      <div 
                        className={`fixed ${getTooltipPosition(index)} transition-all duration-300 
                          bg-[#1E1E1E]/95 backdrop-blur-sm border border-[#1E9AFC]/20 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl text-sm 
                          whitespace-normal w-[200px] sm:w-[280px] text-center z-[200] shadow-xl pointer-events-none`}
                        style={{ 
                          opacity: hoveredIcon === app.id ? 1 : 0,
                          transform: `rotate(0deg)`, // Ensure tooltip stays level
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

            <LeftCurve />
            <RightCurve />
          </div>

          {/* Enhanced merged cards */}
          <div 
            ref={statsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <div className={`relative flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-[#1E9AFC]/10 to-[#1A75FF]/10 border border-gray-800 transition-all duration-300 hover:border-blue-500/30 opacity-0 translate-y-8 ${
              statsInView ? 'animate-fade-in-up delay-[200ms]' : ''
            }`}>
              <img 
                src={sleepingQuality} 
                alt="Sleep Quality"
                className="w-16 h-16 mb-6 text-blue-500"
              />
              <h3 className="text-xl font-semibold mb-4 text-white">Smart Sleep Analysis</h3>
              <p className="text-gray-300">
                Advanced AI algorithms monitor and analyze your sleep stages, including deep sleep and REM cycles, providing comprehensive insights for better rest within two weeks.
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
              <h3 className="text-xl font-semibold mb-4 text-white">Environment Optimization</h3>
              <p className="text-gray-300">
                Smart environment controls and personalized wind-down routines help you fall asleep faster, while AI analyzes environmental factors to improve your sleep cycles.
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
              <h3 className="text-xl font-semibold mb-4 text-white">Adaptive Recommendations</h3>
              <p className="text-gray-300">
                Our AI learns your unique patterns and preferences to create personalized suggestions, from optimal bedtime adjustments to lifestyle recommendations that evolve with you.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div 
          ref={testimonialsRef} 
          className={`relative pt-16 pb-8 opacity-0 ${
            testimonialsInView ? 'animate-fade-in-up' : ''
          }`}
        >
          <div className="relative max-w-[1440px] mx-auto">
            {/* Section Header */}
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">
              What Our Customers Say
            </h2>

            {/* Centered Slide Indicator - Responsive positioning */}
            {testimonialsInView && currentTestimonial === 0 && (
              <div className="absolute bottom-[0px] left-1/2 -translate-x-1/2 z-20">
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={arrowVariants}
                  className="flex items-center gap-2 text-[#1E9AFC]"
                >
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
                </motion.div>
              </div>
            )}

            {/* Testimonials container */}
            <div {...handlers} className="relative h-[800px] md:h-[500px] mb-8 cursor-grab active:cursor-grabbing overflow-hidden">
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
                    className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 relative"
                  >
                    {/* Testimonial text */}
                    <div className="w-full md:w-1/2 bg-gradient-to-br from-[#1E9AFC]/5 to-[#1A75FF]/5 rounded-2xl p-6 md:p-8 h-[360px] flex flex-col justify-center">
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
                    <div className="w-full md:w-1/2 bg-gray-800 rounded-2xl p-6 md:p-8 overflow-hidden flex flex-col h-[360px]">
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