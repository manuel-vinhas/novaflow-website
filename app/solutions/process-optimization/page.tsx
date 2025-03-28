"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ArrowRight, Bot, CheckCircle, Clock, FileText, Sparkles, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import PageWrapper from '@/components/wrapper/page-wrapper';
import { BorderBeam } from '@/components/magicui/border-beam';

export default function ProcessOptimizationPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
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
                  <Zap className="h-4 w-4" />
                  <span>NovaFlow Solutions</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white">
                Process Optimization
              </h1>

              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                Eliminate inefficiencies and bottlenecks with AI-powered process automation that adapts to your business needs.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-md">
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-md">
                  Explore Use Cases
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
              <div className="relative w-full h-[400px] rounded-xl overflow-hidden bg-blue-600 dark:bg-blue-800">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-90"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center px-6">
                    <Bot className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">AI-Powered Optimization</h3>
                    <p className="max-w-md">Our AI agents analyze your workflows to identify inefficiencies and automatically suggest improvements</p>
                  </div>
                </div>
                <BorderBeam className="z-10" duration={20} colorFrom="#6366f1" colorTo="#8b5cf6" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
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
              Key Benefits
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Transform your operations with NovaFlow's process optimization solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-1 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{benefit.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
              How It Works
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Our systematic approach to optimizing your business processes
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 h-full">
                  <div className="absolute -top-3 left-6 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-blue-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white">
                Success Story: Global Manufacturing Inc.
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                A leading manufacturing company struggled with production delays and quality issues due to disconnected processes and manual data entry.
              </p>
              <div className="mb-6 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300">Reduced production cycle time by 32% through automated workflow optimization</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300">Decreased quality issues by 45% with AI-powered predictive maintenance</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300">Achieved 28% cost reduction in operational expenses within 6 months</p>
                </div>
              </div>
              <Button size="lg" className="rounded-md">
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
              <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 aspect-video">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 p-8 rounded-lg max-w-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold">Results at a Glance</h3>
                      <Activity className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300">Time Saved</span>
                        <span className="font-bold text-blue-600">32%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300">Quality Improvement</span>
                        <span className="font-bold text-blue-600">45%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300">Cost Reduction</span>
                        <span className="font-bold text-blue-600">28%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300">ROI</span>
                        <span className="font-bold text-blue-600">317%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px]"></div>
            <div className="relative z-10">
              <Sparkles className="h-10 w-10 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business Processes?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get started with NovaFlow and see the difference AI-powered optimization can make in your operations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100 rounded-md">
                  Request a Demo
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 rounded-md">
                  Contact Sales
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}

const benefits = [
  {
    icon: <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Time Savings",
    description: "Reduce manual tasks by up to 80% with intelligent workflow automation that identifies and eliminates bottlenecks."
  },
  {
    icon: <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Improved Accuracy",
    description: "Minimize errors with AI-powered validation and quality checks that ensure consistency across all processes."
  },
  {
    icon: <Activity className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Enhanced Productivity",
    description: "Enable your team to focus on high-value tasks while our AI handles repetitive, time-consuming activities."
  },
  {
    icon: <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Real-time Insights",
    description: "Gain visibility into your operations with analytics dashboards that highlight optimization opportunities."
  },
  {
    icon: <Bot className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Adaptive Learning",
    description: "Our AI continuously learns from your processes, improving recommendations and automations over time."
  },
  {
    icon: <Sparkles className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Custom Solutions",
    description: "Tailor-made optimizations designed specifically for your industry and business requirements."
  }
];

const steps = [
  {
    title: "Process Assessment",
    description: "We analyze your current workflows to identify inefficiencies and bottlenecks."
  },
  {
    title: "AI Solution Design",
    description: "Our team designs custom AI agents tailored to your specific process needs."
  },
  {
    title: "Integration & Deployment",
    description: "Seamless implementation with minimal disruption to your operations."
  },
  {
    title: "Continuous Improvement",
    description: "Ongoing optimization based on performance metrics and business changes."
  }
];
