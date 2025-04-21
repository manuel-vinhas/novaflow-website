"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Mic, 
  BarChart, 
  Users, 
  PhoneCall, 
  LineChart, 
  CheckCircle, 
  DollarSign,
  Target,
  ChevronRight,
  Calendar,
  Sparkles,
  Award,
  Quote
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageWrapper from '@/components/wrapper/page-wrapper';

export default function LeadGenerationCaseStudy() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-400 dark:bg-purple-500 opacity-20 blur-[100px]"></div>
        </div>

        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column: text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-sm font-medium">
                  Case Study
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <div className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-medium">
                  Lead Generation
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 dark:from-white dark:via-purple-300 dark:to-white">
                AI-Powered Lead Generation Success
              </h1>

              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                How a national financial services firm increased qualified leads by 300% while reducing cost per acquisition by 60%.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-md">
                  Explore Our Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-md">
                  See More Case Studies
                </Button>
              </div>
            </motion.div>

            {/* Right column: stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl p-8"
            >
              <h3 className="text-xl font-bold mb-6 text-center">Key Results</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-3">
                    <Target className="h-8 w-8" />
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">300%</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Lead Volume Increase</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-3">
                    <DollarSign className="h-8 w-8" />
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">60%</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Lower Cost per Lead</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-3">
                    <Calendar className="h-8 w-8" />
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">45%</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Higher Conversion Rate</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 mb-3">
                    <Award className="h-8 w-8" />
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">$1.8M</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Revenue Increase</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Overview Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-bold mb-6">Client Overview</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                FinServe Capital is a mid-size financial services firm specializing in retirement planning, wealth management, and investment advisory services. With a team of 120 financial advisors across 15 branches, they were struggling to generate quality leads efficiently.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300">Founded in 2005, serving clients nationwide with $1.2B assets under management</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300">Target market: pre-retirees and retirees with $250K-$2M in investable assets</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300">Struggling with lead generation via traditional methods that were costly and inefficient</p>
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold mb-3">Key Challenges</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600 dark:text-gray-300">High Cost Per Acquisition</span>
                      <span className="text-sm font-medium">Critical</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Low Lead Quality</span>
                      <span className="text-sm font-medium">Severe</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Lead Follow-up Inefficiency</span>
                      <span className="text-sm font-medium">High</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Manual Qualification Process</span>
                      <span className="text-sm font-medium">Severe</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border border-gray-200 dark:border-gray-700 h-full">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-purple-500 mb-4" />
                  <blockquote className="text-lg italic mb-6">
                  &quot;Our lead generation was broken. We were spending too much to acquire low-quality leads, and our advisors were wasting time chasing prospects who weren&apos;t a good fit for our services. &quot;
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Michael Rodriguez</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Chief Marketing Officer, FinServe Capital</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Implementation Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The NovaFlow Solution</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              We implemented a multi-faceted AI-powered lead generation system
            </p>
          </motion.div>

          <Tabs defaultValue="voice" className="w-full">
            <TabsList className="grid grid-cols-3 max-w-2xl mx-auto">
              <TabsTrigger value="voice">
                <Mic className="h-4 w-4 mr-2" />
                AI Voice Agents
              </TabsTrigger>
              <TabsTrigger value="qualification">
                <Target className="h-4 w-4 mr-2" />
                Lead Qualification
              </TabsTrigger>
              <TabsTrigger value="analytics">
                <LineChart className="h-4 w-4 mr-2" />
                Predictive Analytics
              </TabsTrigger>
            </TabsList>
            
            <div className="mt-8">
              <TabsContent value="voice">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">AI Voice Outreach Agents</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      We implemented sophisticated AI voice agents that conduct natural, human-like conversations with potential leads via outbound calls.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">Natural-sounding voice with human-like intonation and conversation flow</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">Ability to respond intelligently to questions and objections in real-time</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">Customized scripts based on prospect data, with dynamic conversation paths</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">Seamless handoff to human advisors when prospects show high interest levels</p>
                      </div>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">Result:</span> The AI Voice Agents now conduct over 1,000 conversations daily, replacing the work of 15 full-time calling agents while maintaining a 42% higher engagement rate.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg">
                    <div className="border-b border-gray-200 dark:border-gray-700 pb-3 mb-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        <div className="flex-1"></div>
                        <PhoneCall className="h-5 w-5 text-purple-500" />
                      </div>
                    </div>
                    <div className="space-y-4 mb-4">
                      <div className="flex">
                        <div className="bg-purple-100 dark:bg-purple-900/30 text-gray-800 dark:text-gray-200 rounded-lg py-2 px-3 max-w-[80%]">
                          <p className="text-sm font-medium">AI Voice Agent</p>
                          <p className="text-sm">Hello, this is Alex from FinServe Capital. We help people like you make sure they&apos;re on track for a comfortable retirement. Do you have a few minutes to chat about your retirement planning?</p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg py-2 px-3 max-w-[80%]">
                          <p className="text-sm">I&apos;m actually interested in that, but I&apos;m not sure if I have enough saved to work with a financial advisor.</p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="bg-purple-100 dark:bg-purple-900/30 text-gray-800 dark:text-gray-200 rounded-lg py-2 px-3 max-w-[80%]">
                          <p className="text-sm font-medium">AI Voice Agent</p>
                          <p className="text-sm">That&apos;s a common concern. Many of our clients felt the same way before working with us. Actually, we work with clients at various stages of their retirement journey. If you don&apos;t mind me asking, are you currently contributing to any retirement accounts like a 401(k) or IRA?</p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg py-2 px-3 max-w-[80%]">
                          <p className="text-sm">Yes, I have about $320,000 in my 401(k) and another $75,000 in an IRA from a previous employer.</p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="bg-purple-100 dark:bg-purple-900/30 text-gray-800 dark:text-gray-200 rounded-lg py-2 px-3 max-w-[80%]">
                          <p className="text-sm font-medium">AI Voice Agent</p>
                          <p className="text-sm">That&apos;s excellent! You&apos;re actually in a great position to benefit from our services. Many of our advisors specialize in helping clients maximize their retirement accounts and develop strategies to ensure those funds last throughout retirement. Would you be interested in a complimentary retirement review with one of our advisors to see if we might be a good fit?</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <div className="flex items-center">
                        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg py-1 px-2 text-xs text-gray-500 dark:text-gray-400 mr-2">
                          Call duration: 4:12
                        </div>
                        <div className="bg-green-100 dark:bg-green-900/30 rounded-lg py-1 px-2 text-xs text-green-700 dark:text-green-400">
                          Lead Qualification: High
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="qualification">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">AI Lead Qualification System</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      We implemented an intelligent lead qualification system that automatically scores, prioritizes, and routes leads based on multiple factors.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">Advanced scoring algorithm using 35+ data points to identify high-potential prospects</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">Real-time qualification during conversations based on prospect responses</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">Intelligent routing that matches prospects with advisors based on specialization and fit</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">Automated follow-up scheduling and reminder system for qualified leads</p>
                      </div>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">Result:</span> Lead qualification accuracy improved by 68%, with advisor time spent on non-converting prospects dropping by 85%.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg">
                    <div className="bg-purple-600 text-white p-4">
                      <h4 className="font-bold">Lead Qualification Dashboard</h4>
                    </div>
                    <div className="p-6">
                      <div className="space-y-6">
                        {[
                          { 
                            name: "David Thompson", 
                            profile: "Age: 58, Assets: $750K-1M, Goal: Retirement in 5-7 years",
                            score: 94,
                            status: "High Priority"
                          },
                          { 
                            name: "Jennifer Martinez", 
                            profile: "Age: 62, Assets: $1M-2M, Goal: Estate planning & income",
                            score: 89,
                            status: "High Priority"
                          },
                          { 
                            name: "Robert Chen", 
                            profile: "Age: 51, Assets: $500-750K, Goal: College planning & retirement",
                            score: 76,
                            status: "Medium Priority"
                          },
                          { 
                            name: "Susan Wilson", 
                            profile: "Age: 45, Assets: $250-500K, Goal: Investment strategy review",
                            score: 65,
                            status: "Medium Priority"
                          }
                        ].map((lead, index) => (
                          <div key={index} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                              <h5 className="font-medium">{lead.name}</h5>
                              <div className={`px-2 py-1 rounded-full text-xs ${
                                lead.score > 80 
                                  ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" 
                                  : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
                              }`}>
                                {lead.status}
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{lead.profile}</p>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500 dark:text-gray-400">Qualification Score:</span>
                              <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div 
                                  className={`h-full ${
                                    lead.score > 80 
                                      ? "bg-green-500" 
                                      : lead.score > 60 
                                        ? "bg-yellow-500" 
                                        : "bg-red-500"
                                  }`} 
                                  style={{ width: `${lead.score}%` }}
                                ></div>
                              </div>
                              <span className="text-xs font-medium">{lead.score}/100</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Today&apos;s qualified leads: <span className="font-bold text-purple-600 dark:text-purple-400">27</span>
                        </div>
                        <Button variant="outline" size="sm">View All Leads</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="analytics">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Predictive Lead Analytics</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      We implemented a sophisticated predictive analytics system that identifies high-potential prospects before outreach begins.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">Machine learning algorithms that analyze behavioral and demographic data</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">Propensity modeling to predict likelihood of conversion and lifetime value</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">Custom targeting parameters aligned with FinServe&apos;s ideal client profile</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">Continuous system learning that improves targeting accuracy over time</p>
                      </div>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">Result:</span> Predictive targeting improved outreach efficiency by 215%, focusing resources on prospects with 4.3x higher conversion probability.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg">
                    <h4 className="font-bold mb-4">Predictive Lead Analytics</h4>
                    <div className="space-y-6">
                      <div>
                        <h5 className="font-medium mb-2">Conversion Probability by Segment</h5>
                        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Pre-Retirees (55-65)</span>
                                <span className="font-medium text-green-500">42% Conv. Rate</span>
                              </div>
                              <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500" style={{ width: '42%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>High Net Worth ({'>'}$1M)</span>
                                <span className="font-medium text-green-500">38% Conv. Rate</span>
                              </div>
                              <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500" style={{ width: '38%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Small Business Owners</span>
                                <span className="font-medium text-yellow-500">27% Conv. Rate</span>
                              </div>
                              <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-yellow-500" style={{ width: '27%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Young Professionals (35-45)</span>
                                <span className="font-medium text-yellow-500">19% Conv. Rate</span>
                              </div>
                              <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-yellow-500" style={{ width: '19%' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                          <h5 className="font-medium mb-2 text-sm">Best Contact Time</h5>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span>Weekday Mornings</span>
                              <span className="font-medium text-green-500">42%</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span>Weekday Afternoons</span>
                              <span className="font-medium text-yellow-500">28%</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span>Weekday Evenings</span>
                              <span className="font-medium text-green-500">38%</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span>Weekends</span>
                              <span className="font-medium text-red-500">12%</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                          <h5 className="font-medium mb-2 text-sm">Lead Source Quality</h5>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span>Referrals</span>
                              <span className="font-medium text-green-500">High</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span>Website Forms</span>
                              <span className="font-medium text-green-500">High</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span>Social Media</span>
                              <span className="font-medium text-yellow-500">Medium</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span>Purchased Lists</span>
                              <span className="font-medium text-red-500">Low</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                        <div className="text-sm">
                          <span className="font-medium">System Insight:</span> Target high-net-worth pre-retirees during morning and evening hours for optimal results.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Implementation Process</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              How we delivered transformative results in just 8 weeks
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                phase: "Phase 1",
                title: "Discovery & Analysis",
                duration: "2 Weeks",
                description: "We analyzed FinServe's existing lead generation processes, identified key bottlenecks, and defined success metrics.",
                activities: [
                  "Conducted stakeholder interviews",
                  "Analyzed conversion data",
                  "Identified ideal client profiles",
                  "Evaluated existing technology stack"
                ]
              },
              {
                phase: "Phase 2",
                title: "Solution Design",
                duration: "1 Week",
                description: "We designed a custom AI-powered lead generation solution aligned with FinServe's specific needs and objectives.",
                activities: [
                  "Created AI agent conversation flows",
                  "Designed lead scoring algorithms",
                  "Developed integration architecture",
                  "Built analytics framework"
                ]
              },
              {
                phase: "Phase 3",
                title: "Implementation",
                duration: "3 Weeks",
                description: "We deployed the solution components incrementally, ensuring seamless integration with existing systems and processes.",
                activities: [
                  "Trained voice AI with industry knowledge",
                  "Integrated with CRM and marketing tools",
                  "Configured lead routing system",
                  "Tested with sample prospect data"
                ]
              },
              {
                phase: "Phase 4",
                title: "Optimization",
                duration: "2 Weeks",
                description: "We fine-tuned the system based on initial performance data and advisor feedback to maximize results.",
                activities: [
                  "Analyzed conversation success rates",
                  "Adjusted qualification parameters",
                  "Optimized advisor matching logic",
                  "Trained staff on new workflows"
                ]
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-sm font-medium">
                        {phase.phase}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {phase.duration}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{phase.description}</p>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Results & Impact</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Transformative improvements in lead generation performance
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6">Performance Metrics</h3>
              <div className="space-y-6">
                {[
                  { metric: "Monthly Qualified Leads", before: "120", after: "468", improvement: "+290%" },
                  { metric: "Cost Per Qualified Lead", before: "$320", after: "$128", improvement: "-60%" },
                  { metric: "Lead-to-Appointment Ratio", before: "18%", after: "42%", improvement: "+133%" },
                  { metric: "Appointment-to-Client Conversion", before: "22%", after: "32%", improvement: "+45%" },
                  { metric: "Average Client Acquisition Cost", before: "$3,800", after: "$1,520", improvement: "-60%" }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <h4 className="font-medium">{item.metric}</h4>
                      <span className={`font-medium ${
                        item.improvement.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'
                      }`}>{item.improvement}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="w-1/2 pr-4 text-right text-sm text-gray-500 dark:text-gray-400">
                        Before: {item.before}
                      </div>
                      <div className="w-1/2 pl-4 text-left text-sm font-medium">
                        After: {item.after}
                      </div>
                    </div>
                    <Progress value={100} className="h-1.5" />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6">Business Impact</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Revenue Growth</h4>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span>New Client Revenue (6 Months)</span>
                      <span className="font-bold text-green-600 dark:text-green-400">$1.8 Million</span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Increased from $580,000 in the previous 6-month period
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Operational Efficiency</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                      <div className="text-center">
                        <h5 className="text-sm font-medium mb-2">Advisor Productivity</h5>
                        <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">+48%</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">More time spent with qualified prospects</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                      <div className="text-center">
                        <h5 className="text-sm font-medium mb-2">Support Team Size</h5>
                        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">-40%</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Reduced staff needed for lead management</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Strategic Benefits</h4>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0 mr-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Scalable Growth Model</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Ability to scale lead generation without proportional cost increases</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0 mr-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Market Differentiation</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Enhanced brand perception through innovative client acquisition approach</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0 mr-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Advisor Satisfaction</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Improved advisor retention due to higher quality leads and better work-life balance</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium mb-2">Return on Investment</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 dark:text-gray-200">Project ROI (6 months)</span>
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">580%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px]"></div>
            
            <div className="relative z-10">
              <Quote className="h-16 w-16 mx-auto mb-6 opacity-20" />
              <blockquote className="text-2xl md:text-3xl font-medium italic text-center mb-8 max-w-3xl mx-auto">
              &quot;NovaFlow&apos;s AI voice agents have completely transformed our lead generation process. Our advisors now spend their time with qualified prospects who are ready to engage, rather than cold calling for hours. The ROI has been extraordinary. &quot;
              </blockquote>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8" />
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-xl">Michael Rodriguez</h4>
                  <p className="text-purple-200">Chief Marketing Officer, FinServe Capital</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Lead Generation?</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Discover how NovaFlow can help your business achieve similar results with our AI-powered lead generation solutions.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300">Increase qualified lead volume by 2-3x</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300">Reduce cost per acquisition by 40-60%</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300">Improve conversion rates by 30-45%</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300">Implementation in as little as 6-8 weeks</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-md bg-purple-600 hover:bg-purple-500">
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-md">
                  Contact Sales
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 shadow-lg"
            >
              <Sparkles className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-6">Free Lead Generation Assessment</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get a personalized analysis of how NovaFlow&apos;s AI lead generation solutions could impact your business.
              </p>
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <div className="flex items-start">
                    <Target className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Lead Potential Analysis</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Estimated lead volume increase based on your market</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <div className="flex items-start">
                    <DollarSign className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Cost Reduction Forecast</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Projected savings in lead acquisition costs</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <div className="flex items-start">
                    <LineChart className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Implementation Roadmap</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Custom timeline and strategy for your business</p>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="w-full rounded-md bg-purple-600 hover:bg-purple-500">
                Request Free Assessment
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Case Studies Section */}
      <section className="py-16 border-t border-gray-200 dark:border-gray-800">
        <div className="container px-4 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-2">Related Case Studies</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Explore how other businesses have transformed with NovaFlow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Customer Support Excellence", 
                company: "E-commerce Platform", 
                description: "How an e-commerce company reduced response times by 85% and cut support costs by 40%",
                stats: ["85% faster response", "40% cost reduction", "38% satisfaction increase"],
                link: "/case-studies/customer-support" 
              },
              { 
                title: "Data Analysis Revolution", 
                company: "Healthcare Provider Network", 
                description: "Reducing analysis time from weeks to hours with intelligent data processing",
                stats: ["95% faster analysis", "42% cost reduction", "Healthcare compliance improvements"],
                link: "/case-studies/data-analysis" 
              },
              { 
                title: "Sales Pipeline Optimization", 
                company: "B2B Technology Firm", 
                description: "Using AI to identify high-potential deals and optimize the sales process",
                stats: ["37% higher close rate", "$4.2M revenue increase", "52% shorter sales cycles"],
                link: "/case-studies/sales-optimization" 
              }
            ].map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md overflow-hidden"
              >
                <div className="h-2 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="px-2 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-xs font-medium">
                      Case Study
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{study.company}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{study.description}</p>
                  <div className="space-y-2 mb-6">
                    {study.stats.map((stat, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{stat}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={study.link}>
                    <Button variant="outline" className="w-full rounded-md">
                      Read Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
