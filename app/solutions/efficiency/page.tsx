"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Clock, 
  DollarSign, 
  LineChart, 
  BarChart, 
  PieChart, 
  TrendingUp, 
  Check, 
  User, 
  Briefcase,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import PageWrapper from '@/components/wrapper/page-wrapper';

export default function CostTimeEfficiencyPage() {
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
                  <DollarSign className="h-4 w-4" />
                  <span>NovaFlow Solutions</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white">
                Cost & Time Efficiency
              </h1>

              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                Reduce operational costs and reclaim valuable time with AI-powered automation that transforms how your business runs.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-md">
                  Calculate Your Savings
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-md">
                  View Case Studies
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
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-xl">
                <h3 className="text-xl font-bold mb-6 text-center">Average Client Savings</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Time Savings</span>
                      <span className="font-medium text-green-600">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Cost Reduction</span>
                      <span className="font-medium text-green-600">40%</span>
                    </div>
                    <Progress value={40} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Productivity Increase</span>
                      <span className="font-medium text-green-600">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Error Reduction</span>
                      <span className="font-medium text-green-600">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                </div>
                <div className="mt-8 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-sm text-gray-600 dark:text-gray-300 text-center">
                  Based on average results across all client implementations in 2025
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section (Simplified) */}
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
              See Your Potential Savings
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Use our ROI calculator to estimate the savings you could achieve with NovaFlow
            </p>
          </motion.div>

          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Calculate Your ROI</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Fill out the form to see your estimated monthly and annual savings with NovaFlow's AI solutions.
                </p>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg mb-6">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm">
                      Our customers typically see ROI within 3-6 months
                    </span>
                  </div>
                </div>
                <Button size="lg" className="rounded-md w-full">
                  Get Detailed Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                <h4 className="font-semibold mb-4 text-center">Average Monthly Savings</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <span>Labor Hours</span>
                    </div>
                    <span className="font-bold text-green-600">120 hrs</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <span>Labor Costs</span>
                    </div>
                    <span className="font-bold text-green-600">$5,400</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <div className="flex items-center gap-3">
                      <BarChart className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <span>Error Reduction</span>
                    </div>
                    <span className="font-bold text-green-600">$2,800</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <div className="flex items-center gap-3">
                      <LineChart className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <span>Efficiency Gain</span>
                    </div>
                    <span className="font-bold text-green-600">$3,200</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Total Annual Savings:</span>
                    <span className="font-bold text-xl text-green-600">$136,800</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
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
              Key Efficiency Benefits
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              NovaFlow's AI solutions deliver measurable improvements across all aspects of your operations
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
                <Card className="h-full border border-gray-200 dark:border-gray-800 hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{benefit.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{benefit.description}</p>
                    <ul className="space-y-2">
                      {benefit.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{bullet}</span>
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

      {/* Case Studies Section */}
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
              Success Stories
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Real-world results from our client implementations
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all"
              >
                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                      {study.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{study.company}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{study.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.stats.map((stat, i) => (
                      <div key={i} className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                        <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                        <p className="text-xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm" className="rounded-md">
                      Read Full Story
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Chart Section */}
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
              Traditional vs. AI-Powered Operations
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              See how NovaFlow transforms your business operations
            </p>
          </motion.div>

          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
            <div className="grid grid-cols-3 text-center font-bold p-4 bg-gray-50 dark:bg-gray-900">
              <div>Process</div>
              <div>Traditional Approach</div>
              <div>With NovaFlow AI</div>
            </div>
            {comparisonData.map((item, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-3 p-4 ${index % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-900/50"} border-t border-gray-200 dark:border-gray-700`}
              >
                <div className="font-medium">{item.process}</div>
                <div className="text-red-500 dark:text-red-400">{item.traditional}</div>
                <div className="text-green-500 dark:text-green-400">{item.withNovaFlow}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Sparkles className="h-10 w-10 mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Operational Efficiency?</h2>
              <p className="text-xl mb-8">
                Join hundreds of businesses that have significantly reduced costs and saved time with NovaFlow's AI solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100 rounded-md">
                  Get Started Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 rounded-md">
                  Schedule a Demo
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <h3 className="text-2xl font-bold mb-6">Efficiency Guarantee</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold">30%</span>
                <p className="text-xl mt-2">Minimum Efficiency Improvement</p>
              </div>
              <p className="mb-6">
                We guarantee at least a 30% improvement in operational efficiency or your first three months are free.
              </p>
              <div className="flex justify-center">
                <Link href="/guarantee-terms">
                  <Button variant="link" className="text-white underline">View Terms</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

const benefits = [
  {
    icon: <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Time Optimization",
    description: "Drastically reduce the time spent on repetitive tasks and processes.",
    bullets: [
      "Automate routine tasks and workflows",
      "Reduce processing time by up to 85%",
      "Enable 24/7 operation without human oversight",
      "Free up staff for high-value activities"
    ]
  },
  {
    icon: <DollarSign className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Cost Reduction",
    description: "Significantly lower operational expenses across your business.",
    bullets: [
      "Reduce labor costs for routine processes",
      "Minimize errors and associated expenses",
      "Lower training and onboarding costs",
      "Optimize resource allocation"
    ]
  },
  {
    icon: <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Human Resource Optimization",
    description: "Maximize the value and satisfaction of your team members.",
    bullets: [
      "Redirect talent to creative and strategic work",
      "Reduce employee burnout from repetitive tasks",
      "Enhance job satisfaction and retention",
      "Scale operations without proportional hiring"
    ]
  },
  {
    icon: <PieChart className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Resource Allocation",
    description: "Ensure your resources are deployed where they create maximum value.",
    bullets: [
      "Identify underutilized assets and capabilities",
      "Optimize inventory and supply management",
      "Dynamically adjust resource allocation",
      "Eliminate waste across operations"
    ]
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Scalability",
    description: "Grow your operations without proportional cost increases.",
    bullets: [
      "Handle volume increases without adding staff",
      "Maintain consistent quality at any scale",
      "Quickly adapt to seasonal or unexpected demands",
      "Seamlessly expand into new markets or offerings"
    ]
  },
  {
    icon: <LineChart className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Predictive Optimization",
    description: "Use AI to anticipate needs and optimize proactively.",
    bullets: [
      "Forecast resource requirements accurately",
      "Identify inefficiencies before they impact operations",
      "Implement preventative measures automatically",
      "Continuously improve based on performance data"
    ]
  }
];

const caseStudies = [
  {
    icon: <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
    company: "Financial Services Corp.",
    description: "Implemented AI document processing and customer service automation, dramatically reducing manual processing time and costs.",
    stats: [
      { label: "Time Saved", value: "75%" },
      { label: "Cost Reduction", value: "$1.2M/yr" },
      { label: "Error Rate", value: "-92%" },
      { label: "ROI", value: "410%" }
    ]
  },
  {
    icon: <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
    company: "Healthcare Provider Network",
    description: "Deployed AI for patient scheduling, record management, and billing processes, improving efficiency across all departments.",
    stats: [
      { label: "Admin Hours Saved", value: "12,000/yr" },
      { label: "Cost Savings", value: "$950K/yr" },
      { label: "Patient Satisfaction", value: "+38%" },
      { label: "Billing Accuracy", value: "99.8%" }
    ]
  },
  {
    icon: <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
    company: "E-commerce Retailer",
    description: "Implemented AI for inventory management, customer service, and order processing, creating a more streamlined operation.",
    stats: [
      { label: "Order Processing", value: "5x faster" },
      { label: "Support Costs", value: "-65%" },
      { label: "Inventory Accuracy", value: "99.9%" },
      { label: "Annual Savings", value: "$2.8M" }
    ]
  }
];

const comparisonData = [
  {
    process: "Customer Support",
    traditional: "Minutes to hours response time",
    withNovaFlow: "Instant 24/7 responses"
  },
  {
    process: "Document Processing",
    traditional: "30-45 minutes per document",
    withNovaFlow: "3-5 seconds per document"
  },
  {
    process: "Data Analysis",
    traditional: "Days to weeks",
    withNovaFlow: "Minutes to hours"
  },
  {
    process: "Error Rate",
    traditional: "3-5% average",
    withNovaFlow: "< 0.1%"
  },
  {
    process: "Scalability",
    traditional: "Linear cost increases",
    withNovaFlow: "Minimal marginal cost"
  },
  {
    process: "Operational Hours",
    traditional: "Business hours only",
    withNovaFlow: "24/7/365 coverage"
  }
];
