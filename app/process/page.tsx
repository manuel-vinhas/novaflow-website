"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ClipboardCheck, 
  Users, 
  Code, 
  Layers, 
  Settings, 
  BarChart,
  Zap,
  UserPlus,
  CheckCircle2,
  Clock,
  FileText,
  MessageSquare,
  Activity,
  Repeat,
  Sparkles,
  Search
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageWrapper from '@/components/wrapper/page-wrapper';
import { BorderBeam } from '@/components/magicui/border-beam';

export default function ProcessPage() {
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
                  <ClipboardCheck className="h-4 w-4" />
                  <span>NovaFlow Methodology</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white">
                Our Process
              </h1>

              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                A systematic, collaborative approach to developing custom AI solutions that deliver exceptional results for your business.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-md">
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-md">
                  Schedule a Consultation
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
              <div className="relative w-full h-[400px] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 opacity-90"></div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="relative w-full max-w-sm">
                    {/* Process Circle */}
                    <div className="relative w-72 h-72 mx-auto">
                      {/* Center circle */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center z-20 shadow-lg">
                        <Sparkles className="h-8 w-8 text-indigo-600" />
                      </div>
                      
                      {/* Orbit */}
                      <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-white/30"></div>
                      
                      {/* Process points */}
                      {processSteps.slice(0, 5).map((step, index) => {
                        const angle = (index * (2 * Math.PI)) / 5;
                        const x = 36 + 36 * Math.cos(angle - Math.PI / 2);
                        const y = 36 + 36 * Math.sin(angle - Math.PI / 2);
                        
                        return (
                          <div 
                            key={index}
                            className="absolute w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10"
                            style={{ 
                              left: `${x}%`, 
                              top: `${y}%`,
                              animation: `pulse 2s infinite ${index * 0.5}s`
                            }}
                          >
                            {step.icon}
                          </div>
                        );
                      })}
                      
                      {/* Connecting lines */}
                      <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 100 100">
                        {processSteps.slice(0, 5).map((_, index) => {
                          const angle1 = (index * (2 * Math.PI)) / 5;
                          const x1 = 50 + 36 * Math.cos(angle1 - Math.PI / 2);
                          const y1 = 50 + 36 * Math.sin(angle1 - Math.PI / 2);
                          
                          return (
                            <line
                              key={index}
                              x1="50"
                              y1="50"
                              x2={x1}
                              y2={y1}
                              stroke="rgba(255, 255, 255, 0.5)"
                              strokeWidth="1"
                            />
                          );
                        })}
                      </svg>
                    </div>
                    
                    {/* Text below */}
                    <div className="text-center text-white mt-4">
                      <h3 className="text-xl font-bold">Collaborative AI Development</h3>
                      <p className="mt-2 text-white/80">A proven methodology for transformative results</p>
                    </div>
                  </div>
                </div>
                <BorderBeam className="z-10" duration={15} colorFrom="#6366f1" colorTo="#8b5cf6" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Overview Section */}
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
              The NovaFlow Process
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Our comprehensive approach ensures successful AI implementation from concept to deployment
            </p>
          </motion.div>

          <div className="space-y-20">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:rtl' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:text-right lg:ltr' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-lg font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                      {step.description}
                    </p>
                    <div className="space-y-4 mb-6">
                      {step.activities.map((activity, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold">{activity.title}</h4>
                            <p className="text-gray-600 dark:text-gray-300">{activity.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-4 items-center">
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                        <Clock className="h-5 w-5" />
                        <span>{step.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                        <Users className="h-5 w-5" />
                        <span>{step.participants}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                        <FileText className="h-5 w-5" />
                        <span>{step.deliverables}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg ltr">
                    <h4 className="text-xl font-semibold mb-5 flex items-center">
                      {step.icon}
                      <span className="ml-2">{step.cardTitle}</span>
                    </h4>
                    
                    <div className="space-y-6">
                      {step.keyPoints.map((point, i) => (
                        <div key={i} className="flex items-start">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-3 ${point.iconBg}`}>
                            {point.icon}
                          </div>
                          <div>
                            <h5 className="font-semibold">{point.title}</h5>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">{point.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h5 className="font-semibold mb-3">Case Example:</h5>
                      <p className="text-gray-600 dark:text-gray-300 text-sm italic">
                      &quot;{step.caseExample} &quot;
                      </p>
                    </div>
                  </div>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center my-8">
                    <div className="h-12 border-l-2 border-dashed border-gray-300 dark:border-gray-700"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white">
              Project Timeline
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              A typical implementation timeline for NovaFlow&apos;s AI solutions
            </p>
          </motion.div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-lg">
            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                <div className="grid grid-cols-5 gap-4">
                  <div className="col-span-1"></div>
                  {timelinePhases.map((phase, index) => (
                    <div key={index} className="col-span-1 text-center">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3"
                      >
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300">{phase}</h4>
                      </motion.div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 space-y-10">
                  {timelineSteps.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="grid grid-cols-5 gap-4 items-center">
                        <div className="col-span-1">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3">
                              {item.icon}
                            </div>
                            <span className="font-semibold">{item.task}</span>
                          </div>
                        </div>
                        
                        <div className={`col-span-${item.span} col-start-${item.start} bg-${item.color}-100 dark:bg-${item.color}-900/20 border border-${item.color}-200 dark:border-${item.color}-800 rounded-lg p-3`}>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.duration}</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{item.team}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="grid grid-cols-5 gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="col-span-1 font-medium text-gray-500 dark:text-gray-400">Timeframe:</div>
                  {[2, 4, 6, 8, 10].map((week, index) => (
                    <div key={index} className="col-span-1 text-center font-medium text-gray-500 dark:text-gray-400">
                      Week {week}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold">Timeline Note:</h5>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    This represents an average timeline for a mid-sized implementation. Actual timelines may vary based on project complexity, scope, and your organization&apos;s specific requirements. Our team will provide a customized timeline during the initial consultation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Collaboration Section */}
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
              Collaborative Approach
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Our implementation process is built on strong collaboration between our team and yours
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Your Implementation Team</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                At NovaFlow, we believe successful AI implementation requires close collaboration between our experts and your team members. Here&apos;s how we work together:
              </p>
              
              <div className="space-y-6">
                {collaborationPoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3 flex-shrink-0">
                      {point.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{point.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Tabs defaultValue="novaflow" className="w-full">
                <TabsList className="grid grid-cols-2 mb-6">
                  <TabsTrigger value="novaflow">NovaFlow Team</TabsTrigger>
                  <TabsTrigger value="client">Your Team</TabsTrigger>
                </TabsList>
                
                <TabsContent value="novaflow" className="mt-0">
                  <Card className="border border-gray-200 dark:border-gray-700">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-6">Our Implementation Experts</h4>
                      
                      <div className="space-y-6">
                        {novaflowTeam.map((member, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-4 flex-shrink-0 text-white">
                              {member.icon}
                            </div>
                            <div>
                              <h5 className="font-semibold">{member.role}</h5>
                              <p className="text-gray-600 dark:text-gray-300 mb-2">{member.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {member.responsibilities.map((resp, i) => (
                                  <span key={i} className="text-xs px-2 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                                    {resp}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="client" className="mt-0">
                  <Card className="border border-gray-200 dark:border-gray-700">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-6">Your Key Stakeholders</h4>
                      
                      <div className="space-y-6">
                        {clientTeam.map((member, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mr-4 flex-shrink-0 text-white">
                              {member.icon}
                            </div>
                            <div>
                              <h5 className="font-semibold">{member.role}</h5>
                              <p className="text-gray-600 dark:text-gray-300 mb-2">{member.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {member.involvement.map((inv, i) => (
                                  <span key={i} className="text-xs px-2 py-1 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400">
                                    {inv}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Communication & Reporting Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white">
              Communication & Reporting
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Transparent, regular communication ensures your project stays on track
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communicationElements.map((element, index) => (
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
                      {element.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{element.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{element.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Frequency:</span>
                        <span className="font-medium">{element.frequency}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Format:</span>
                        <span className="font-medium">{element.format}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Participants:</span>
                        <span className="font-medium">{element.participants}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Sparkles className="h-10 w-10 mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your AI Journey?</h2>
              <p className="text-xl mb-8">
                Let&apos;s start with a consultation to understand your needs and explore how our AI solutions can transform your business.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100 rounded-md">
                  Schedule a Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 rounded-md">
                  View Case Studies
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-6">Our Commitment</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold">Transparency</h4>
                    <p className="text-white/80">Clear communication and expectations throughout the process</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold">Collaboration</h4>
                    <p className="text-white/80">Working closely with your team to ensure alignment and success</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold">Results-Focused</h4>
                    <p className="text-white/80">Delivering measurable business value and ROI</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

// Define the steps in the process
const processSteps = [
  {
    title: "Discovery & Assessment",
    description: "We begin by deeply understanding your business, challenges, and objectives to ensure our AI solution addresses your specific needs.",
    icon: <Search className="h-6 w-6 text-indigo-600" />,
    activities: [
      {
        title: "Stakeholder Interviews",
        description: "Conversations with key team members to understand pain points and requirements."
      },
      {
        title: "Process Evaluation",
        description: "Analysis of existing workflows and identification of optimization opportunities."
      },
      {
        title: "Data Assessment",
        description: "Evaluation of available data sources, quality, and integration possibilities."
      }
    ],
    duration: "2-3 weeks",
    participants: "Business & Technical Teams",
    deliverables: "Detailed Assessment Report",
    cardTitle: "Key Elements of Discovery",
    keyPoints: [
      {
        icon: <Users className="h-5 w-5 text-blue-600" />,
        iconBg: "bg-blue-100 dark:bg-blue-900/30",
        title: "Stakeholder Mapping",
        description: "Identifying all relevant parties and their specific needs and expectations."
      },
      {
        icon: <ClipboardCheck className="h-5 w-5 text-green-600" />,
        iconBg: "bg-green-100 dark:bg-green-900/30",
        title: "Success Metrics Definition",
        description: "Establishing clear, measurable outcomes for your AI implementation."
      },
      {
        icon: <BarChart className="h-5 w-5 text-purple-600" />,
        iconBg: "bg-purple-100 dark:bg-purple-900/30",
        title: "Technical Landscape Analysis",
        description: "Evaluating your current systems and integration requirements."
      }
    ],
    caseExample: "For a retail client, our discovery process revealed that their inventory management challenges were more complex than initially thought. By interviewing store managers, we identified specific pain points that helped shape a more effective AI solution."
  },
  {
    title: "Solution Design",
    description: "Our team designs a custom AI solution tailored to your specific challenges, business processes, and technical environment.",
    icon: <Layers className="h-6 w-6 text-indigo-600" />,
    activities: [
      {
        title: "AI Architecture Planning",
        description: "Designing the optimal AI architecture based on your requirements and constraints."
      },
      {
        title: "Data Strategy Development",
        description: "Planning for data collection, processing, and utilization within the solution."
      },
      {
        title: "Integration Blueprint",
        description: "Mapping how the AI solution will connect with your existing systems."
      }
    ],
    duration: "3-4 weeks",
    participants: "Solution Architects & Data Scientists",
    deliverables: "Solution Blueprint & Prototype",
    cardTitle: "Design Considerations",
    keyPoints: [
      {
        icon: <Settings className="h-5 w-5 text-blue-600" />,
        iconBg: "bg-blue-100 dark:bg-blue-900/30",
        title: "Scalability Planning",
        description: "Ensuring the solution can grow with your business needs over time."
      },
      {
        icon: <Users className="h-5 w-5 text-red-600" />,
        iconBg: "bg-red-100 dark:bg-red-900/30",
        title: "Security Framework",
        description: "Building in robust data protection and access controls from the start."
      },
      {
        icon: <Users className="h-5 w-5 text-green-600" />,
        iconBg: "bg-green-100 dark:bg-green-900/30",
        title: "User Experience Design",
        description: "Creating intuitive interfaces and interactions for all stakeholders."
      }
    ],
    caseExample: "For a healthcare provider, we designed a modular AI architecture that allowed for staged implementation, starting with patient scheduling optimization before expanding to clinical documentation assistance, minimizing disruption to their operations."
  },
  {
    title: "Development & Training",
    description: "We build and train your custom AI solution, incorporating your specific data, business rules, and integration requirements.",
    icon: <Code className="h-6 w-6 text-indigo-600" />,
    activities: [
      {
        title: "Model Development",
        description: "Building and customizing AI models specifically for your use case."
      },
      {
        title: "Data Integration",
        description: "Connecting to relevant data sources and implementing processing pipelines."
      },
      {
        title: "Interface Development",
        description: "Creating user interfaces and system integration points."
      }
    ],
    duration: "6-8 weeks",
    participants: "Development Team & Subject Matter Experts",
    deliverables: "Working Solution & Documentation",
    cardTitle: "Development Approach",
    keyPoints: [
      {
        icon: <Zap className="h-5 w-5 text-yellow-600" />,
        iconBg: "bg-yellow-100 dark:bg-yellow-900/30",
        title: "Agile Methodology",
        description: "Iterative development with regular stakeholder feedback and adjustments."
      },
      {
        icon: <Activity className="h-5 w-5 text-blue-600" />,
        iconBg: "bg-blue-100 dark:bg-blue-900/30",
        title: "Continuous Testing",
        description: "Rigorous validation throughout the development process to ensure quality."
      },
      {
        icon: <Settings className="h-5 w-5 text-purple-600" />,
        iconBg: "bg-purple-100 dark:bg-purple-900/30",
        title: "Custom Model Training",
        description: "Using your specific data to train AI models for optimal performance."
      }
    ],
    caseExample: "For a financial services client, we developed a fraud detection AI that integrated with their existing transaction processing system. By training the model on their historical data, we achieved 94% accuracy in identifying fraudulent transactions within the first month."
  },
  {
    title: "Implementation & Integration",
    description: "We deploy your AI solution into your environment, ensuring seamless integration with existing systems and processes.",
    icon: <Settings className="h-6 w-6 text-indigo-600" />,
    activities: [
      {
        title: "Deployment Planning",
        description: "Developing a strategic rollout plan to minimize disruption."
      },
      {
        title: "System Integration",
        description: "Connecting the AI solution with your existing technical ecosystem."
      },
      {
        title: "User Acceptance Testing",
        description: "Validating the solution with end users to ensure it meets requirements."
      }
    ],
    duration: "3-4 weeks",
    participants: "Implementation Specialists & IT Team",
    deliverables: "Deployed Solution & Integration Documentation",
    cardTitle: "Implementation Strategy",
    keyPoints: [
      {
        icon: <Layers className="h-5 w-5 text-blue-600" />,
        iconBg: "bg-blue-100 dark:bg-blue-900/30",
        title: "Phased Deployment",
        description: "Strategic rollout in stages to minimize business disruption."
      },
      {
        icon: <UserPlus className="h-5 w-5 text-green-600" />,
        iconBg: "bg-green-100 dark:bg-green-900/30",
        title: "User Onboarding",
        description: "Comprehensive training and support for all system users."
      },
      {
        icon: <BarChart className="h-5 w-5 text-purple-600" />,
        iconBg: "bg-purple-100 dark:bg-purple-900/30",
        title: "Performance Monitoring",
        description: "Setting up analytics to track system performance and impact."
      }
    ],
    caseExample: "When implementing an AI customer service solution for a telecommunications provider, we used a phased approach starting with email inquiries before expanding to chat and voice. This allowed staff to gradually adapt while maintaining service levels."
  },
  {
    title: "Optimization & Evolution",
    description: "We continuously monitor, optimize, and evolve your AI solution to ensure it delivers maximum value over time.",
    icon: <Repeat className="h-6 w-6 text-indigo-600" />,
    activities: [
      {
        title: "Performance Monitoring",
        description: "Tracking key metrics to ensure the solution delivers expected value."
      },
      {
        title: "Continuous Improvement",
        description: "Regular updates and enhancements based on feedback and performance data."
      },
      {
        title: "Knowledge Transfer",
        description: "Training your team to manage and evolve the solution independently."
      }
    ],
    duration: "Ongoing",
    participants: "Support Team & Business Stakeholders",
    deliverables: "Performance Reports & Enhancement Recommendations",
    cardTitle: "Long-term Success Factors",
    keyPoints: [
      {
        icon: <Activity className="h-5 w-5 text-blue-600" />,
        iconBg: "bg-blue-100 dark:bg-blue-900/30",
        title: "Proactive Monitoring",
        description: "Continuous tracking of performance metrics and early issue detection."
      },
      {
        icon: <MessageSquare className="h-5 w-5 text-green-600" />,
        iconBg: "bg-green-100 dark:bg-green-900/30",
        title: "Feedback Loops",
        description: "Regular collection and incorporation of user feedback and insights."
      },
      {
        icon: <Sparkles className="h-5 w-5 text-purple-600" />,
        iconBg: "bg-purple-100 dark:bg-purple-900/30",
        title: "Technology Updates",
        description: "Keeping your solution current with the latest AI advancements."
      }
    ],
    caseExample: "For a manufacturing client, our ongoing optimization process identified an opportunity to enhance their predictive maintenance AI with additional sensor data. This update reduced unplanned downtime by an additional 23% beyond the initial implementation results."
  }
];

const timelinePhases = [
  "Discovery",
  "Design",
  "Development",
  "Implementation",
  "Optimization"
];

const timelineSteps = [
  {
    icon: <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
    task: "Stakeholder Interviews",
    start: 2,
    span: 1,
    duration: "1-2 weeks",
    team: "Business Analysts",
    color: "blue"
  },
  {
    icon: <ClipboardCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
    task: "Requirements Documentation",
    start: 2,
    span: 2,
    duration: "2 weeks",
    team: "Solutions Architects",
    color: "blue"
  },
  {
    icon: <Layers className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />,
    task: "Solution Design",
    start: 3,
    span: 2,
    duration: "3 weeks",
    team: "AI Architects",
    color: "indigo"
  },
  {
    icon: <Code className="h-5 w-5 text-purple-600 dark:text-purple-400" />,
    task: "AI Model Development",
    start: 3,
    span: 3,
    duration: "5 weeks",
    team: "Data Scientists",
    color: "purple"
  },
  {
    icon: <Settings className="h-5 w-5 text-green-600 dark:text-green-400" />,
    task: "Integration & Testing",
    start: 4,
    span: 2,
    duration: "3 weeks",
    team: "Engineering Team",
    color: "green"
  },
  {
    icon: <UserPlus className="h-5 w-5 text-green-600 dark:text-green-400" />,
    task: "User Training",
    start: 5,
    span: 1,
    duration: "1 week",
    team: "Training Specialists",
    color: "green"
  },
  {
    icon: <Activity className="h-5 w-5 text-red-600 dark:text-red-400" />,
    task: "Performance Monitoring",
    start: 5,
    span: 1,
    duration: "Ongoing",
    team: "Support Team",
    color: "red"
  }
];

const collaborationPoints = [
  {
    icon: <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Cross-Functional Teams",
    description: "We combine our AI expertise with your business knowledge to form effective implementation teams."
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Regular Communication",
    description: "Structured check-ins and progress updates ensure alignment and transparency throughout the project."
  },
  {
    icon: <CheckCircle2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Clear Roles & Responsibilities",
    description: "Well-defined responsibilities for both teams create accountability and ensure all aspects are covered."
  },
  {
    icon: <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Knowledge Transfer",
    description: "We focus on building your team's capabilities to manage and evolve the AI solution independently."
  }
];

const novaflowTeam = [
  {
    icon: <Users className="h-6 w-6" />,
    role: "Project Manager",
    description: "Oversees the entire implementation process, ensuring timelines, deliverables, and communication are on track.",
    responsibilities: ["Project Planning", "Risk Management", "Stakeholder Communication", "Resource Coordination"]
  },
  {
    icon: <Layers className="h-6 w-6" />,
    role: "AI Solutions Architect",
    description: "Designs the AI solution architecture based on your specific requirements and technical environment.",
    responsibilities: ["Technical Design", "Integration Planning", "Scalability Engineering", "Security Framework"]
  },
  {
    icon: <Code className="h-6 w-6" />,
    role: "AI Engineers & Data Scientists",
    description: "Build and train the custom AI models that power your solution using your specific data and use cases.",
    responsibilities: ["Model Development", "Algorithm Design", "Data Processing", "Performance Tuning"]
  }
];

const clientTeam = [
  {
    icon: <Users className="h-6 w-6" />,
    role: "Executive Sponsor",
    description: "Provides strategic direction and ensures organizational alignment for the AI initiative.",
    involvement: ["Strategic Direction", "Resource Allocation", "Milestone Approval", "Organizational Alignment"]
  },
  {
    icon: <Settings className="h-6 w-6" />,
    role: "IT/Technical Team",
    description: "Works alongside our engineers to facilitate system integration and data access.",
    involvement: ["System Access", "Integration Support", "Technical Requirements", "Security Protocols"]
  },
  {
    icon: <ClipboardCheck className="h-6 w-6" />,
    role: "Business Process Experts",
    description: "Provide domain expertise and validate that the solution addresses business needs effectively.",
    involvement: ["Requirements Definition", "Process Knowledge", "User Acceptance Testing", "Change Management"]
  }
];

const communicationElements = [
  {
    icon: <MessageSquare className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Status Meetings",
    description: "Regular check-ins to discuss progress, address questions, and align on next steps.",
    frequency: "Weekly",
    format: "Virtual or In-Person",
    participants: "Core Team Members"
  },
  {
    icon: <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Progress Reports",
    description: "Detailed documentation of project status, milestones, and any issues requiring attention.",
    frequency: "Bi-weekly",
    format: "Written Report",
    participants: "All Stakeholders"
  },
  {
    icon: <Activity className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Executive Updates",
    description: "High-level summaries of project progress, business impact, and strategic considerations.",
    frequency: "Monthly",
    format: "Presentation",
    participants: "Leadership Team"
  },
  {
    icon: <Layers className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Technical Reviews",
    description: "In-depth discussion of technical implementation, challenges, and solutions.",
    frequency: "As Needed",
    format: "Workshop",
    participants: "Technical Teams"
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "User Feedback Sessions",
    description: "Gathering input from end-users to validate and refine the solution.",
    frequency: "Phase Completion",
    format: "Focus Group",
    participants: "End Users"
  },
  {
    icon: <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Success Reviews",
    description: "Evaluation of project outcomes against defined success metrics and business objectives.",
    frequency: "Quarterly",
    format: "Scorecard Review",
    participants: "All Stakeholders"
  }
];

// Add a style for the pulse animation
const styles = `
  @keyframes pulse {
    0% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.1); }
    100% { transform: translate(-50%, -50%) scale(1); }
  }
`;
