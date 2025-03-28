"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Brain, 
  Code, 
  Database, 
  FileCode, 
  LineChart, 
  MessageSquare, 
  Mic, 
  Settings, 
  Shield, 
  Sparkles 
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import PageWrapper from '@/components/wrapper/page-wrapper';

export default function CustomAIPage() {
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
                  <Brain className="h-4 w-4" />
                  <span>NovaFlow Solutions</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white">
                Custom AI Solutions
              </h1>

              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                Tailor-made AI agents designed specifically for your industry, business processes, and operational challenges.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-md">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-md">
                  View Sample Solutions
                </Button>
              </div>
            </motion.div>

            {/* Right column: interactive elements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-xl overflow-hidden"
            >
              <div className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-6 text-center">AI Solution Categories</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <MessageSquare className="h-8 w-8" />, label: "Conversational AI" },
                    { icon: <Mic className="h-8 w-8" />, label: "Voice Agents" },
                    { icon: <LineChart className="h-8 w-8" />, label: "Predictive Analytics" },
                    { icon: <Database className="h-8 w-8" />, label: "Data Processing" },
                    { icon: <Code className="h-8 w-8" />, label: "Code Generation" },
                    { icon: <Settings className="h-8 w-8" />, label: "Process Automation" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center justify-center bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg cursor-pointer transition-colors hover:bg-blue-100 dark:hover:bg-blue-900/40"
                    >
                      <div className="text-blue-600 dark:text-blue-400 mb-2">
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium text-center">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
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
              Our Approach to Custom AI
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              We build AI solutions that address your specific challenges with a comprehensive development methodology
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {approach.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                  <div className="text-blue-600 dark:text-blue-400">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <div className="text-green-500 mr-2 mt-1">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Showcase Section */}
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
              Solution Showcase
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our custom AI solutions across different industries
            </p>
          </motion.div>

          <Tabs defaultValue="healthcare" className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-5 max-w-3xl mx-auto">
              <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
              <TabsTrigger value="finance">Finance</TabsTrigger>
              <TabsTrigger value="manufacturing">Manufacturing</TabsTrigger>
              <TabsTrigger value="retail">Retail</TabsTrigger>
              <TabsTrigger value="logistics">Logistics</TabsTrigger>
            </TabsList>
            
            {showcaseContent.map((content) => (
              <TabsContent key={content.id} value={content.id} className="mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid lg:grid-cols-2 gap-8 items-center"
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{content.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{content.description}</p>
                    <div className="space-y-4 mb-6">
                      {content.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <div className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button size="lg" className="rounded-md">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 h-full">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 bg-opacity-90 dark:bg-opacity-90">
                      <h4 className="text-lg font-semibold mb-4">{content.caseStudy.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{content.caseStudy.description}</p>
                      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Implementation Time</p>
                            <p className="font-semibold">{content.caseStudy.stats.implementationTime}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">ROI</p>
                            <p className="font-semibold">{content.caseStudy.stats.roi}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Efficiency Gain</p>
                            <p className="font-semibold">{content.caseStudy.stats.efficiencyGain}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">User Satisfaction</p>
                            <p className="font-semibold">{content.caseStudy.stats.userSatisfaction}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Technologies & Frameworks Section */}
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
              Technologies & Frameworks
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              We leverage cutting-edge AI technologies to build robust, scalable solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <div className="text-blue-600 dark:text-blue-400">
                    {tech.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{tech.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{tech.category}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Custom AI Solution?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our team of AI specialists is ready to help you transform your business with custom-built AI agents.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100 rounded-md">
                  Schedule a Consultation
                </Button>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 rounded-md">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}

const approach = [
  {
    icon: <FileCode className="h-8 w-8" />,
    title: "Discovery & Analysis",
    description: "We start by understanding your specific challenges and objectives through in-depth analysis.",
    bullets: [
      "Business process assessment",
      "Data evaluation & mapping",
      "Objective definition",
      "Technical requirements gathering"
    ]
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Custom Development",
    description: "Our AI architects design and build solutions specifically for your needs and environment.",
    bullets: [
      "Tailored AI model development",
      "Custom algorithm creation",
      "Integration framework design",
      "Prototype testing & validation"
    ]
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Deployment & Optimization",
    description: "We implement your solution and continuously refine it based on real-world performance.",
    bullets: [
      "Seamless system integration",
      "Performance monitoring",
      "Ongoing optimization",
      "Knowledge transfer & training"
    ]
  }
];

const showcaseContent = [
  {
    id: "healthcare",
    title: "Healthcare AI Solutions",
    description: "Custom AI systems that enhance patient care, optimize administrative processes, and improve diagnostic accuracy.",
    features: [
      "Predictive patient admission modeling",
      "Medical imaging analysis assistants",
      "Automated clinical documentation",
      "Patient engagement chatbots"
    ],
    caseStudy: {
      title: "Regional Hospital Network",
      description: "Implemented AI-driven patient triage and scheduling system that reduced wait times and improved resource allocation.",
      stats: {
        implementationTime: "12 weeks",
        roi: "312%",
        efficiencyGain: "47%",
        userSatisfaction: "92%"
      }
    }
  },
  {
    id: "finance",
    title: "Financial Services AI",
    description: "Intelligent systems for risk assessment, fraud detection, and customer service automation in the finance sector.",
    features: [
      "Fraud detection and prevention",
      "Automated underwriting",
      "Personalized financial advising",
      "Regulatory compliance monitoring"
    ],
    caseStudy: {
      title: "National Banking Institution",
      description: "Deployed AI fraud detection system that identified patterns human analysts missed, preventing over $2.3M in fraud attempts.",
      stats: {
        implementationTime: "10 weeks",
        roi: "485%",
        efficiencyGain: "62%",
        userSatisfaction: "94%"
      }
    }
  },
  {
    id: "manufacturing",
    title: "Manufacturing Intelligence",
    description: "AI solutions that optimize production processes, predictive maintenance, and quality control in manufacturing.",
    features: [
      "Predictive maintenance systems",
      "Production optimization",
      "Quality control automation",
      "Supply chain intelligence"
    ],
    caseStudy: {
      title: "Automotive Parts Manufacturer",
      description: "Implemented AI-driven predictive maintenance system that reduced unplanned downtime by 78% and extended equipment lifespan.",
      stats: {
        implementationTime: "16 weeks",
        roi: "275%",
        efficiencyGain: "38%",
        userSatisfaction: "89%"
      }
    }
  },
  {
    id: "retail",
    title: "Retail & E-commerce AI",
    description: "Custom intelligence solutions for inventory management, customer experience, and sales optimization in retail environments.",
    features: [
      "Intelligent inventory management",
      "Personalized shopping experiences",
      "Customer behavior analytics",
      "Dynamic pricing optimization"
    ],
    caseStudy: {
      title: "Multi-channel Retailer",
      description: "Developed custom recommendation engine that increased average order value by 23% and improved customer retention rates.",
      stats: {
        implementationTime: "8 weeks",
        roi: "340%",
        efficiencyGain: "42%",
        userSatisfaction: "95%"
      }
    }
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    description: "AI-powered systems that optimize routing, warehouse operations, and delivery scheduling in logistics networks.",
    features: [
      "Route optimization & planning",
      "Warehouse automation systems",
      "Demand forecasting",
      "Last-mile delivery optimization"
    ],
    caseStudy: {
      title: "Global Logistics Provider",
      description: "Implemented AI route optimization system that reduced fuel costs by 31% and improved on-time delivery performance.",
      stats: {
        implementationTime: "14 weeks",
        roi: "290%",
        efficiencyGain: "45%",
        userSatisfaction: "91%"
      }
    }
  }
];

const technologies = [
  { icon: <Brain className="h-6 w-6" />, name: "TensorFlow", category: "ML Framework" },
  { icon: <Brain className="h-6 w-6" />, name: "PyTorch", category: "ML Framework" },
  { icon: <MessageSquare className="h-6 w-6" />, name: "OpenAI", category: "LLM" },
  { icon: <MessageSquare className="h-6 w-6" />, name: "Claude", category: "LLM" },
  { icon: <Code className="h-6 w-6" />, name: "Hugging Face", category: "NLP" },
  { icon: <Code className="h-6 w-6" />, name: "Langchain", category: "Agent Framework" },
  { icon: <Database className="h-6 w-6" />, name: "Pinecone", category: "Vector Database" },
  { icon: <Database className="h-6 w-6" />, name: "Neo4j", category: "Graph Database" },
  { icon: <Settings className="h-6 w-6" />, name: "FastAPI", category: "Backend" },
  { icon: <Mic className="h-6 w-6" />, name: "Whisper", category: "Speech-to-Text" },
  { icon: <LineChart className="h-6 w-6" />, name: "Prophet", category: "Forecasting" },
  { icon: <Shield className="h-6 w-6" />, name: "MLflow", category: "ML Ops" }
];
