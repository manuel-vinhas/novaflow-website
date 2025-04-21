"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  MessageSquare, 
  BarChart, 
  Clock, 
  Users, 
  LineChart, 
  CheckCircle, 
  DollarSign,
  Quote,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageWrapper from '@/components/wrapper/page-wrapper';

export default function CustomerSupportCaseStudy() {
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
              <div className="flex items-center gap-2 mb-6">
                <div className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium">
                  Case Study
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <div className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-medium">
                  Customer Support
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white">
                Revolutionizing Customer Support with AI
              </h1>

              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                How a leading e-commerce company reduced response times by 85% and cut support costs by 40% while improving customer satisfaction.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-md">
                  Get Similar Results
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
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-3">
                    <Clock className="h-8 w-8" />
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">85%</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Faster Response Time</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-3">
                    <DollarSign className="h-8 w-8" />
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">40%</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Cost Reduction</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-3">
                    <Users className="h-8 w-8" />
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">38%</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Satisfaction Increase</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 mb-3">
                    <BarChart className="h-8 w-8" />
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">24/7</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Support Coverage</p>
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
                GlobalShop is a multinational e-commerce platform with over 5 million active users and 25,000+ monthly customer support inquiries across multiple channels including email, chat, phone, and social media.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300">Operating in 12 countries with support in 8 languages</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300">Product catalog of 50,000+ items across multiple categories</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300">Support team of 45 agents facing growing demand and increasing costs</p>
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold mb-3">Key Challenges</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Increasing Support Volume</span>
                      <span className="text-sm font-medium">Severe</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Long Response Times</span>
                      <span className="text-sm font-medium">High</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Rising Support Costs</span>
                      <span className="text-sm font-medium">Critical</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Limited Language Coverage</span>
                      <span className="text-sm font-medium">Moderate</span>
                    </div>
                    <Progress value={60} className="h-2" />
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
                  <Quote className="h-8 w-8 text-blue-500 mb-4" />
                  <blockquote className="text-lg italic mb-6">
                    &quot;Our customer support team was overwhelmed. Response times were increasing, costs were skyrocketing, and customer satisfaction was declining. We needed a solution that could scale with our global growth. &quot;
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Sarah Johnson</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Chief Customer Officer, GlobalShop</p>
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
              We implemented a comprehensive AI-powered customer support system with three integrated components
            </p>
          </motion.div>

          <Tabs defaultValue="chatbot" className="w-full">
            <TabsList className="grid grid-cols-3 max-w-2xl mx-auto">
              <TabsTrigger value="chatbot">
                <MessageSquare className="h-4 w-4 mr-2" />
                AI Chat Agent
              </TabsTrigger>
              <TabsTrigger value="voice">
                <Users className="h-4 w-4 mr-2" />
                Support Automation
              </TabsTrigger>
              <TabsTrigger value="analytics">
                <LineChart className="h-4 w-4 mr-2" />
                Analytics Dashboard
              </TabsTrigger>
            </TabsList>
            
            <div className="mt-8">
              <TabsContent value="chatbot">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">AI Chat Support Agent</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      We deployed our advanced Chat AI that can understand and respond to customer inquiries across multiple languages and channels instantaneously.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">Natural language understanding with 97% accuracy across 8 languages</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">Contextual awareness that retains conversation history for personalized responses</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">Seamless integration with product catalog, order history, and customer accounts</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">Automatic escalation to human agents for complex or sensitive issues</p>
                      </div>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">Result:</span> The AI Chat Agent now handles 78% of all customer inquiries without human intervention, with an average response time of under 3 seconds.
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
                        <MessageSquare className="h-5 w-5 text-blue-500" />
                      </div>
                    </div>
                    <div className="space-y-4 mb-4">
                      <div className="flex justify-end">
                        <div className="bg-blue-100 dark:bg-blue-900/30 text-gray-800 dark:text-gray-200 rounded-lg py-2 px-3 max-w-[80%]">
                          <p className="text-sm">I need to change the delivery address for my recent order #GT78901</p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg py-2 px-3 max-w-[80%]">
                          <p className="text-sm">I&apos;d be happy to help you change the delivery address for order #GT78901. I can see that this order hasn&apos;t been shipped yet, so we can still update the address. Could you please provide the new delivery address?</p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-blue-100 dark:bg-blue-900/30 text-gray-800 dark:text-gray-200 rounded-lg py-2 px-3 max-w-[80%]">
                          <p className="text-sm">123 New Street, Apartment 4B, New York, NY 10001</p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg py-2 px-3 max-w-[80%]">
                          <p className="text-sm">Thank you. I&apos;ve updated the delivery address for order #GT78901 to:</p>
                          <p className="text-sm mt-2">123 New Street, Apartment 4B<br/>New York, NY 10001</p>
                          <p className="text-sm mt-2">You&apos;ll receive a confirmation email shortly. The expected delivery date remains June 3rd. Is there anything else I can help you with today?</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <div className="flex items-center">
                        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg py-1 px-2 text-xs text-gray-500 dark:text-gray-400 mr-2">
                          Response time: 1.2s
                        </div>
                        <div className="bg-green-100 dark:bg-green-900/30 rounded-lg py-1 px-2 text-xs text-green-700 dark:text-green-400">
                          100% Automated
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="voice">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Support Process Automation</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      We implemented comprehensive workflow automation that streamlines the entire support process, from ticket creation to resolution and follow-up.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">Intelligent ticket routing based on issue type, language, and complexity</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">Automated handling of common processes like returns, refunds, and order modifications</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">Proactive issue detection through analysis of order and browsing patterns</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">Automatic follow-up system to ensure customer satisfaction after resolution</p>
                      </div>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">Result:</span> Process automation has reduced the average time to resolution by 85% and allowed support agents to focus on complex issues requiring human expertise.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg">
                    <div className="bg-blue-600 text-white p-4">
                      <h4 className="font-bold">Support Workflow Automation</h4>
                    </div>
                    <div className="p-6">
                      <div className="space-y-6">
                        {[
                          { step: "Ticket Creation & Classification", time: "2s", automation: "100%" },
                          { step: "Initial Response & Triage", time: "5s", automation: "94%" },
                          { step: "Issue Resolution - Common Cases", time: "1m 45s", automation: "82%" },
                          { step: "Issue Resolution - Complex Cases", time: "5m 30s", automation: "45%" },
                          { step: "Follow-up & Satisfaction Check", time: "2m 10s", automation: "90%" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between mb-1">
                                <h5 className="font-medium">{item.step}</h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400">~{item.time}</span>
                              </div>
                              <Progress value={parseInt(item.automation)} className="h-2 mb-2" />
                              <div className="text-xs text-right text-gray-500 dark:text-gray-400">
                                {item.automation} Automated
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="analytics">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Analytics & Insights Dashboard</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      We implemented a real-time analytics dashboard that provides comprehensive insights into customer support operations and enables continuous improvement.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">Real-time monitoring of key performance metrics for support operations</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">AI-powered sentiment analysis to identify customer satisfaction trends</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">Automatic identification of common issues and potential product improvements</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">Continuous learning system that improves AI agent effectiveness over time</p>
                      </div>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">Result:</span> The analytics system has identified 23 product improvement opportunities and increased AI agent effectiveness by 42% since implementation.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg">
                    <h4 className="font-bold mb-4">Support Analytics Dashboard</h4>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                        <h5 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Response Time</h5>
                        <p className="text-2xl font-bold text-green-600 dark:text-green-400">2.4s</p>
                        <span className="text-xs text-green-600 dark:text-green-400">↓ 93% from 35s</span>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                        <h5 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Resolution Rate</h5>
                        <p className="text-2xl font-bold text-green-600 dark:text-green-400">92%</p>
                        <span className="text-xs text-green-600 dark:text-green-400">↑ 27% from 65%</span>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                        <h5 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Satisfaction Score</h5>
                        <p className="text-2xl font-bold text-green-600 dark:text-green-400">9.2/10</p>
                        <span className="text-xs text-green-600 dark:text-green-400">↑ 38% from 6.7/10</span>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                        <h5 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Cost per Ticket</h5>
                        <p className="text-2xl font-bold text-green-600 dark:text-green-400">$1.20</p>
                        <span className="text-xs text-green-600 dark:text-green-400">↓ 40% from $2.00</span>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <h5 className="font-medium mb-3">Top Improvement Insights</h5>
                      <div className="space-y-2">
                        <div className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                          <span className="inline-block w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900/30 flex-shrink-0 mr-2"></span>
                          Product page shipping information clarity needs improvement
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                          <span className="inline-block w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900/30 flex-shrink-0 mr-2"></span>
                          Return policy page has confusing language for international customers
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                          <span className="inline-block w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900/30 flex-shrink-0 mr-2"></span>
                          Mobile checkout process causing abandoned carts
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

      {/* Results Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
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
              Quantifiable improvements across all key performance indicators
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
              <h3 className="text-xl font-bold mb-6">Performance Improvements</h3>
              <div className="space-y-6">
                {[
                  { metric: "Average Response Time", before: "35 minutes", after: "2.4 seconds", improvement: "99.9%" },
                  { metric: "Time to Resolution", before: "2.3 hours", after: "21 minutes", improvement: "85%" },
                  { metric: "Support Tickets per Agent", before: "45 daily", after: "12 daily", improvement: "73%" },
                  { metric: "First Contact Resolution Rate", before: "62%", after: "92%", improvement: "48%" },
                  { metric: "Customer Satisfaction Score", before: "6.7/10", after: "9.2/10", improvement: "37%" }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <h4 className="font-medium">{item.metric}</h4>
                      <span className="text-green-600 dark:text-green-400 font-medium">↑ {item.improvement}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="w-1/2 pr-4 text-right text-sm text-gray-500 dark:text-gray-400">
                        Before: {item.before}
                      </div>
                      <div className="w-1/2 pl-4 text-left text-sm text-gray-500 dark:text-gray-400">
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
                  <h4 className="font-medium mb-3">Cost Savings</h4>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span>Annual Support Cost Reduction</span>
                      <span className="font-bold text-green-600 dark:text-green-400">$840,000</span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Decreased from $2.1M to $1.26M per year through automation and efficiency
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Revenue Impact</h4>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span>Increased Conversion Rate</span>
                      <span className="font-bold text-green-600 dark:text-green-400">+23%</span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Real-time support availability increased checkout completion rates
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Operational Improvements</h4>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Support Coverage</span>
                        <span className="font-bold">24/7 in 8 languages</span>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Up from 16 hours/day in 3 languages
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Agent Focus Shift</span>
                        <span className="font-bold">78% to Complex Issues</span>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Agents now spend time on high-value interactions
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium mb-2">Return on Investment</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 dark:text-gray-200">Project ROI (12 months)</span>
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">430%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px]"></div>
            
            <div className="relative z-10">
              <Quote className="h-16 w-16 mx-auto mb-6 opacity-20" />
              <blockquote className="text-2xl md:text-3xl font-medium italic text-center mb-8 max-w-3xl mx-auto">
              &quot;NovaFlow&apos;s AI chat solution transformed our customer support from a bottleneck to a competitive advantage. We&apos;ve reduced costs while dramatically improving customer satisfaction and our team&apos;s morale.&quot;
              </blockquote>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8" />
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-xl">Robert Chen</h4>
                  <p className="text-blue-200">CEO, GlobalShop</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Customer Support?</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Discover how NovaFlow can help your business achieve similar results with our AI-powered customer support solutions.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300">Reduce support costs by 40% or more</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300">Achieve 24/7 support coverage in multiple languages</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300">Improve customer satisfaction by 30%+</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300">Implementation in as little as 4 weeks</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-md">
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
              <Sparkles className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-6">Free ROI Assessment</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get a personalized analysis of the potential impact NovaFlow&apos;s AI support solutions could have on your business.
              </p>
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <div className="flex items-start">
                    <DollarSign className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Cost Savings Estimate</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Detailed breakdown of potential support cost reductions</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <div className="flex items-start">
                    <BarChart className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Performance Projections</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Expected improvements in key support metrics</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <div className="flex items-start">
                    <LineChart className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Implementation Timeline</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Custom roadmap for your business needs</p>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="w-full rounded-md">
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
                title: "Lead Generation Transformation", 
                company: "Financial Services Inc.", 
                description: "How a financial company increased qualified leads by 300% with AI automation",
                stats: ["3x more leads", "60% lower cost", "$1.8M revenue increase"],
                link: "/case-studies/lead-generation" 
              },
              { 
                title: "Data Analysis Revolution", 
                company: "Healthcare Provider Network", 
                description: "Reducing analysis time from weeks to hours with intelligent data processing",
                stats: ["95% faster analysis", "42% cost reduction", "Healthcare compliance improvements"],
                link: "/case-studies/data-analysis" 
              },
              { 
                title: "Multilingual Support Expansion", 
                company: "Global Retail Brand", 
                description: "Expanding to 24 languages with AI agents for global customer coverage",
                stats: ["24 languages supported", "18% market expansion", "92% accuracy in translation"],
                link: "/case-studies/multilingual-support" 
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
                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="px-2 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-medium">
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
