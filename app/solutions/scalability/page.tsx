"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Expand, 
  BarChart, 
  Shield, 
  Cloud, 
  Zap, 
  LineChart, 
  Terminal, 
  Settings, 
  Check,
  FileJson,
  Network,
  Database,
  Globe,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import PageWrapper from '@/components/wrapper/page-wrapper';
import { BorderBeam } from '@/components/magicui/border-beam';

export default function ScalableFutureProofPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 dark:bg-blue-500 opacity-20 blur-[100px]"></div>
        </div>

        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column: text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Pill badge */}
              <div className="mb-6 w-fit rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/30 px-4 py-1">
                <div className="flex items-center gap-2 text-sm font-medium text-blue-900 dark:text-blue-200">
                  <Expand className="h-4 w-4" />
                  <span>NovaFlow Solutions</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white">
                Scalable & Future-Proof
              </h1>

              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                Build AI solutions that grow with your business and adapt to changing technologies and market demands.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-md">
                  Discover Our Architecture
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-md">
                  Talk to an Expert
                </Button>
              </div>
            </motion.div>

            {/* Right column: illustration */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600">
                  <div className="relative w-4/5 h-4/5">
                    {/* Abstract network visualization */}
                    <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-white/80 dark:bg-white/90 rounded-full shadow-lg shadow-indigo-500/50 animate-pulse z-10"></div>
                    <div className="absolute top-2/3 left-1/2 w-8 h-8 bg-white/80 dark:bg-white/90 rounded-full shadow-lg shadow-indigo-500/50 animate-pulse z-10"></div>
                    <div className="absolute top-1/3 right-1/4 w-10 h-10 bg-white/80 dark:bg-white/90 rounded-full shadow-lg shadow-indigo-500/50 animate-pulse z-10"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-7 h-7 bg-white/80 dark:bg-white/90 rounded-full shadow-lg shadow-indigo-500/50 animate-pulse z-10"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-white/80 dark:bg-white/90 rounded-full shadow-lg shadow-indigo-500/50 animate-pulse z-10"></div>
                    
                    {/* Connect the nodes with lines */}
                    <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <line x1="25" y1="25" x2="50" y2="66" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" />
                      <line x1="25" y1="25" x2="75" y2="33" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" />
                      <line x1="75" y1="33" x2="50" y2="66" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" />
                      <line x1="33" y1="75" x2="50" y2="66" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" />
                      <line x1="33" y1="75" x2="66" y2="66" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" />
                      <line x1="75" y1="33" x2="66" y2="66" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" />
                    </svg>
                    
                    {/* Central element */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl z-20">
                      <Network className="h-8 w-8 text-indigo-600" />
                    </div>
                  </div>
                </div>
                <BorderBeam className="z-10" duration={20} colorFrom="#6366f1" colorTo="#8b5cf6" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Architecture Highlights Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white">
              Architecture Highlights
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Our AI solutions are built on a robust, scalable architecture designed for long-term adaptability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {architectureFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scalability Diagram Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white">
                Designed for Infinite Scale
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                NovaFlow&apos;s AI solutions are built to scale seamlessly with your business needs, from startup to enterprise level, with no performance degradation.
              </p>
              <div className="space-y-4 mb-8">
                {scalabilityPoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">{point.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="rounded-md">
                View Scaling Capabilities
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6 text-center">Scalability Comparison</h3>
              
              <div className="space-y-8 mb-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Traditional Solutions</span>
                    <span className="text-sm text-red-500">Linear Scaling</span>
                  </div>
                  <div className="h-8 w-full bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
                    <div className="flex h-full">
                      <div className="h-full bg-blue-200 dark:bg-blue-900/50" style={{ width: '10%' }}>
                        <div className="h-full w-full flex items-center justify-center text-xs font-medium">1x</div>
                      </div>
                      <div className="h-full bg-blue-300 dark:bg-blue-800/50" style={{ width: '20%' }}>
                        <div className="h-full w-full flex items-center justify-center text-xs font-medium">2x</div>
                      </div>
                      <div className="h-full bg-blue-400 dark:bg-blue-700/50" style={{ width: '30%' }}>
                        <div className="h-full w-full flex items-center justify-center text-xs font-medium">3x</div>
                      </div>
                      <div className="h-full bg-red-300 dark:bg-red-900/50" style={{ width: '40%' }}>
                        <div className="h-full w-full flex items-center justify-center text-xs font-medium">4x Cost</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1 text-center">Cost increases linearly with scale</div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">NovaFlow Solutions</span>
                    <span className="text-sm text-green-500">Exponential Scaling</span>
                  </div>
                  <div className="h-8 w-full bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
                    <div className="flex h-full">
                      <div className="h-full bg-blue-200 dark:bg-blue-900/50" style={{ width: '10%' }}>
                        <div className="h-full w-full flex items-center justify-center text-xs font-medium">1x</div>
                      </div>
                      <div className="h-full bg-blue-300 dark:bg-blue-800/50" style={{ width: '15%' }}>
                        <div className="h-full w-full flex items-center justify-center text-xs font-medium">2x</div>
                      </div>
                      <div className="h-full bg-blue-400 dark:bg-blue-700/50" style={{ width: '17%' }}>
                        <div className="h-full w-full flex items-center justify-center text-xs font-medium">3x</div>
                      </div>
                      <div className="h-full bg-green-300 dark:bg-green-900/50" style={{ width: '18%' }}>
                        <div className="h-full w-full flex items-center justify-center text-xs font-medium">4x Scale</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1 text-center">Minimal marginal cost increase with scale</div>
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">10x Scale Example</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Traditional:</p>
                    <p className="font-bold text-red-500">+900% cost</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">NovaFlow:</p>
                    <p className="font-bold text-green-500">+40% cost</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future-Proof Technologies Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white">
              Future-Proof Technologies
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Our solutions are built on cutting-edge technology with continuous adaptation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="col-span-1 lg:col-span-2"
            >
              <Card className="h-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Technology Evolution Timeline</h3>
                  
                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                    
                    <div className="space-y-12">
                      {timelineEvents.map((event, index) => (
                        <div key={index} className="relative pl-14">
                          {/* Timeline dot */}
                          <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center z-10">
                            {event.icon}
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold mb-1">{event.title}</h4>
                            <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">{event.year}</p>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">{event.description}</p>
                            
                            <div className="flex flex-wrap gap-2">
                              {event.tags.map((tag, i) => (
                                <span key={i} className="text-xs px-2 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="col-span-1"
            >
              <Card className="h-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Continuous Evolution</h3>
                  
                  <div className="space-y-6">
                    {evolutionPoints.map((point, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3 flex-shrink-0">
                          {point.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{point.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{point.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h4 className="font-semibold mb-2">Future-Ready Guarantee</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Our solutions are designed to incorporate new AI advancements as they emerge, ensuring your investment remains cutting-edge.</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Learn About Our Update Policy
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="inline-block mb-6 px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium">Case Study</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white">
                E-commerce Giant Scales 50x with NovaFlow
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                A rapidly growing e-commerce platform needed AI solutions that could scale from handling thousands to millions of transactions while maintaining performance.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300">Deployed elastic AI infrastructure that automatically scales with demand</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300">Maintained 99.99% uptime even during 50x growth in transaction volume</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300">Processing costs increased only 15% despite 50x transaction growth</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300">Successfully adapted to three major AI technology upgrades without service disruption</p>
                </div>
              </div>
              <Button className="rounded-md">
                Read Full Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center p-8">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-full">
                    <h3 className="text-lg font-bold mb-4">Scaling Performance</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Transaction Volume</span>
                          <span className="font-medium">50x Growth</span>
                        </div>
                        <div className="h-3 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Response Time</span>
                          <span className="font-medium">Consistent</span>
                        </div>
                        <div className="h-3 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Cost Increase</span>
                          <span className="font-medium">Only 15%</span>
                        </div>
                        <div className="h-3 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: '15%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Uptime</span>
                          <span className="font-medium">99.99%</span>
                        </div>
                        <div className="h-3 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: '99.99%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Our streamlined approach to building scalable, future-proof AI solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 h-full">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <ArrowUpRight className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {index < implementationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-blue-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px]"></div>
            
            <div className="relative z-10">
              <Sparkles className="h-10 w-10 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Limitless Growth?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Build AI solutions that scale with your business and adapt to future technologies. Start your journey with NovaFlow today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100 rounded-md">
                  Schedule a Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 rounded-md">
                  View Technical Specs
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}

const architectureFeatures = [
  {
    icon: <Cloud className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Cloud-Native Architecture",
    description: "Built from the ground up for cloud environments, enabling dynamic scaling, high availability, and resilience."
  },
  {
    icon: <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Elastic Data Processing",
    description: "Automatically scales compute resources based on demand, ensuring optimal performance during usage peaks."
  },
  {
    icon: <FileJson className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "API-First Design",
    description: "Comprehensive API architecture enables seamless integration with existing and future systems and technologies."
  },
  {
    icon: <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Security by Design",
    description: "Advanced security measures built into every layer, with continuous updates to address emerging threats."
  },
  {
    icon: <Settings className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Modular Components",
    description: "Loosely coupled components allow for targeted updates and replacements without system-wide disruptions."
  },
  {
    icon: <Terminal className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Continuous Evolution",
    description: "Regular updates and improvements ensure your AI solutions leverage the latest technological advancements."
  }
];

const scalabilityPoints = [
  {
    title: "Horizontal Scaling",
    description: "Add capacity by deploying additional instances rather than upgrading existing ones, eliminating bottlenecks and single points of failure."
  },
  {
    title: "Auto-Scaling Capabilities",
    description: "Intelligent resource allocation that automatically adjusts based on current and predicted loads, optimizing both performance and cost."
  },
  {
    title: "Multi-Region Deployment",
    description: "Solutions can be deployed across multiple geographical regions for improved performance, redundancy, and compliance with data regulations."
  },
  {
    title: "Microservices Architecture",
    description: "Decomposed functionality allows independent scaling of components based on their specific resource requirements."
  }
];

const timelineEvents = [
  {
    icon: <BarChart className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Distributed AI Processing",
    year: "Current Generation",
    description: "Our current architecture leverages distributed processing across specialized AI models, ensuring high performance and reliability.",
    tags: ["Microservices", "Container Orchestration", "API Gateway", "Load Balancing"]
  },
  {
    icon: <Network className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Federated Learning Integration",
    year: "Next 12 Months",
    description: "Upcoming enhancements will incorporate federated learning capabilities, enabling AI model training across distributed data sources while preserving privacy.",
    tags: ["Federated Learning", "Edge Computing", "Privacy Preservation", "Distributed Training"]
  },
  {
    icon: <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Quantum-Ready Framework",
    year: "2026-2027 Roadmap",
    description: "Our forward-looking architecture is being designed to seamlessly integrate with quantum computing resources as they become commercially viable.",
    tags: ["Quantum Computing", "Hybrid Processing", "Future-Proofing", "Advanced Algorithms"]
  }
];

const evolutionPoints = [
  {
    icon: <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
    title: "Quarterly Updates",
    description: "Regular updates incorporate the latest AI advancements and security enhancements."
  },
  {
    icon: <LineChart className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
    title: "Performance Optimization",
    description: "Continuous monitoring and tuning for optimal efficiency and resource utilization."
  },
  {
    icon: <Settings className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
    title: "Component Upgradeability",
    description: "Modular design allows individual components to be upgraded without system-wide disruption."
  },
  {
    icon: <Database className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
    title: "Data Format Evolution",
    description: "Flexible data schemas adapt to changing requirements and new data sources."
  }
];

const implementationSteps = [
  {
    title: "Assessment",
    description: "We analyze your current systems, growth projections, and future requirements.",
    points: [
      "Technical environment evaluation",
      "Scaling requirement analysis",
      "Future technology roadmap planning",
      "Integration point identification"
    ]
  },
  {
    title: "Architecture Design",
    description: "Our experts design a scalable, future-proof solution tailored to your needs.",
    points: [
      "Cloud-native architecture planning",
      "Scalability pattern selection",
      "Technology stack specification",
      "Integration blueprint development"
    ]
  },
  {
    title: "Implementation",
    description: "We build and deploy your solution with minimal disruption to operations.",
    points: [
      "Iterative development approach",
      "Continuous testing and validation",
      "Phased deployment strategy",
      "Performance benchmarking"
    ]
  },
  {
    title: "Optimization & Evolution",
    description: "Ongoing monitoring, optimization, and updates ensure long-term value.",
    points: [
      "Continuous performance monitoring",
      "Regular technology updates",
      "Capacity planning adjustments",
      "Proactive enhancement recommendations"
    ]
  }
];
