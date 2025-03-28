"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  BarChart, 
  PieChart, 
  LineChart, 
  BarChart2, 
  Database, 
  FileText, 
  Search, 
  TrendingUp,
  AlertTriangle,
  Check,
  Eye,
  Zap,
  Cpu,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageWrapper from '@/components/wrapper/page-wrapper';
import { BorderBeam } from '@/components/magicui/border-beam';

export default function DataAnalysisPage() {
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
                  <BarChart className="h-4 w-4" />
                  <span>Data Intelligence Suite</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white">
                Data Analysis & Intelligence
              </h1>

              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                Transform raw data into actionable insights with AI-powered analytics that reveal patterns, trends, and opportunities human analysis might miss.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-md">
                  Explore Capabilities
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-md">
                  Request a Demo
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
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-700 opacity-90"></div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="bg-white/90 dark:bg-gray-900/90 rounded-xl p-6 w-full max-w-md shadow-xl">
                    <h3 className="text-lg font-bold mb-4 flex items-center">
                      <BarChart2 className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                      Sales Performance Analysis
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Q1 2025</span>
                          <span className="text-sm font-medium">$1.2M</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Q2 2025</span>
                          <span className="text-sm font-medium">$1.5M</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Q3 2025 (Projected)</span>
                          <span className="text-sm font-medium">$1.8M</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg mt-4">
                        <div className="flex items-start">
                          <TrendingUp className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium">AI Insight:</p>
                            <p className="text-xs text-gray-600 dark:text-gray-300">20% growth trend detected. Recommend increasing inventory for Q3 peak products by 15%.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <BorderBeam className="z-10" duration={20} colorFrom="#6366f1" colorTo="#8b5cf6" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
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
              Key Capabilities
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              NovaFlow's Data Intelligence Suite transforms how you understand and utilize your data
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
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
                      {capability.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{capability.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{capability.description}</p>
                    <ul className="space-y-2">
                      {capability.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
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

      {/* Use Cases Section */}
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
              Industry Use Cases
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              See how our data intelligence solutions are transforming various industries
            </p>
          </motion.div>

          <Tabs defaultValue="retail" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 max-w-3xl mx-auto">
              <TabsTrigger value="retail">Retail</TabsTrigger>
              <TabsTrigger value="finance">Finance</TabsTrigger>
              <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
              <TabsTrigger value="manufacturing">Manufacturing</TabsTrigger>
            </TabsList>
            
            {useCases.map((useCase) => (
              <TabsContent key={useCase.id} value={useCase.id} className="mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium">
                        {useCase.industry}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">{useCase.description}</p>
                      
                      <div className="space-y-4 mb-6">
                        {useCase.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold">{benefit.title}</h4>
                              <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <Button className="rounded-md">
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
                      <h4 className="text-lg font-semibold mb-6 flex items-center">
                        <useCase.icon className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                        {useCase.dashboardTitle}
                      </h4>
                      
                      <div className="space-y-6">
                        {useCase.metrics.map((metric, i) => (
                          <div key={i}>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">{metric.label}</span>
                              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{metric.value}</span>
                            </div>
                            <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full">
                              <div className={`h-full rounded-full ${metric.color}`} style={{ width: metric.percentage }}></div>
                            </div>
                          </div>
                        ))}
                        
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                          <h5 className="font-medium mb-2 flex items-center">
                            <Sparkles className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                            AI-Generated Insights
                          </h5>
                          <ul className="space-y-2 text-sm">
                            {useCase.insights.map((insight, i) => (
                              <li key={i} className="flex items-start">
                                <Eye className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-1 mr-2 flex-shrink-0" />
                                <span className="text-gray-600 dark:text-gray-300">{insight}</span>
                              </li>
                            ))}
                          </ul>
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

      {/* How It Works Section */}
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
              How Our Data Analysis Works
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              A powerful, efficient process that delivers actionable insights with minimal hassle
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 h-full">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4 text-xl font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mt-12"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Ready to unlock insights from your data?</h3>
                  <p className="text-gray-600 dark:text-gray-300">Our team can handle complex data sources and deliver actionable intelligence quickly.</p>
                </div>
                <Button size="lg" className="rounded-md">
                  Start Your Data Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
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
              Technology Stack
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Our data intelligence solutions leverage cutting-edge technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-semibold mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{tech.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Turn Your Data into Actionable Intelligence</h2>
              <p className="text-xl mb-8">
                Discover insights that drive business growth, cost savings, and competitive advantage with NovaFlow's Data Intelligence Suite.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100 rounded-md">
                  Schedule a Data Analysis
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
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <h3 className="text-2xl font-bold mb-6">Data Success Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-2">85%</div>
                  <p>Faster Analysis</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-2">42%</div>
                  <p>Cost Reduction</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-2">37%</div>
                  <p>Revenue Growth</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-2">93%</div>
                  <p>Accuracy Rate</p>
                </div>
              </div>
              <p className="mt-6 text-sm">
                *Based on average results from our enterprise clients
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

const capabilities = [
  {
    icon: <BarChart className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Predictive Analytics",
    description: "Forecast future trends and outcomes with AI-powered predictive models.",
    features: [
      "Sales and demand forecasting",
      "Customer behavior prediction",
      "Risk assessment and mitigation",
      "Resource requirement planning"
    ]
  },
  {
    icon: <Search className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Pattern Recognition",
    description: "Identify hidden patterns and correlations in complex data sets.",
    features: [
      "Anomaly detection and alerts",
      "Trend identification across datasets",
      "Behavioral pattern analysis",
      "Performance correlation discovery"
    ]
  },
  {
    icon: <AlertTriangle className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Anomaly Detection",
    description: "Automatically identify outliers and unusual patterns that require attention.",
    features: [
      "Real-time operational monitoring",
      "Fraud detection and prevention",
      "Quality control automation",
      "Security threat identification"
    ]
  },
  {
    icon: <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Data Enrichment",
    description: "Enhance your existing data with additional insights and connections.",
    features: [
      "Automated data cleaning and normalization",
      "External data integration",
      "Missing data imputation",
      "Contextual information addition"
    ]
  },
  {
    icon: <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Automated Reporting",
    description: "Generate comprehensive reports and visualizations automatically.",
    features: [
      "Custom dashboard creation",
      "Scheduled report generation",
      "Interactive visualization",
      "Natural language summaries"
    ]
  },
  {
    icon: <PieChart className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Segmentation Analysis",
    description: "Divide data into meaningful segments for targeted strategies.",
    features: [
      "Customer segmentation",
      "Market analysis and targeting",
      "Product usage patterns",
      "Performance clustering"
    ]
  }
];

const useCases = [
  {
    id: "retail",
    industry: "Retail & E-commerce",
    title: "Customer Behavior Analysis for Personalized Shopping",
    description: "Our retail analytics solution helps businesses understand customer behavior patterns to optimize inventory, pricing, and marketing strategies.",
    icon: BarChart2,
    dashboardTitle: "Retail Performance Dashboard",
    benefits: [
      {
        title: "Inventory Optimization",
        description: "Reduce stockouts by 65% and excess inventory by 42% with AI-driven demand forecasting."
      },
      {
        title: "Customer Segmentation",
        description: "Increase conversion rates by 27% with personalized recommendations and targeted promotions."
      },
      {
        title: "Price Optimization",
        description: "Improve profit margins by 18% with dynamic pricing based on market conditions and customer behavior."
      }
    ],
    metrics: [
      { label: "Inventory Accuracy", value: "97.8%", percentage: "97.8%", color: "bg-green-500" },
      { label: "Customer Retention", value: "+32%", percentage: "80%", color: "bg-blue-500" },
      { label: "Conversion Rate", value: "5.7%", percentage: "57%", color: "bg-blue-500" },
      { label: "Average Order Value", value: "+23%", percentage: "70%", color: "bg-green-500" }
    ],
    insights: [
      "New customers show 35% higher engagement with limited-time promotions",
      "Customers who purchase product A have a 72% likelihood of purchasing product B within 30 days",
      "Evening shoppers spend 27% more on average than morning shoppers"
    ]
  },
  {
    id: "finance",
    industry: "Financial Services",
    title: "Risk Analysis and Fraud Detection",
    description: "Our financial analytics solution helps institutions identify risks, detect fraud, and optimize investment strategies with advanced AI algorithms.",
    icon: LineChart,
    dashboardTitle: "Financial Risk Dashboard",
    benefits: [
      {
        title: "Fraud Detection",
        description: "Identify fraudulent transactions with 99.2% accuracy, reducing losses by over $2.3M annually."
      },
      {
        title: "Risk Assessment",
        description: "Improve underwriting accuracy by 47% with comprehensive risk profiles and predictive modeling."
      },
      {
        title: "Investment Optimization",
        description: "Enhance portfolio performance by 12% with AI-driven market analysis and opportunity identification."
      }
    ],
    metrics: [
      { label: "Fraud Prevention", value: "99.2%", percentage: "99.2%", color: "bg-green-500" },
      { label: "Risk Assessment Accuracy", value: "94.7%", percentage: "94.7%", color: "bg-green-500" },
      { label: "Processing Time", value: "-85%", percentage: "85%", color: "bg-blue-500" },
      { label: "Cost Reduction", value: "$1.7M", percentage: "75%", color: "bg-blue-500" }
    ],
    insights: [
      "Unusual transaction patterns detected in Midwest region, suggesting potential fraud ring",
      "Credit risk models show 28% improvement when incorporating alternative data sources",
      "Customer segment C shows highest likelihood of early loan repayment (37% probability)"
    ]
  },
  {
    id: "healthcare",
    industry: "Healthcare",
    title: "Patient Outcome Prediction and Resource Optimization",
    description: "Our healthcare analytics solution helps providers predict patient outcomes, optimize resource allocation, and improve operational efficiency.",
    icon: PieChart,
    dashboardTitle: "Healthcare Operations Dashboard",
    benefits: [
      {
        title: "Patient Care Optimization",
        description: "Reduce readmission rates by 32% with predictive patient monitoring and proactive interventions."
      },
      {
        title: "Resource Allocation",
        description: "Optimize staffing and equipment utilization, reducing costs by 24% while improving care quality."
      },
      {
        title: "Treatment Effectiveness",
        description: "Identify most effective treatment pathways, improving recovery rates by 28% for key conditions."
      }
    ],
    metrics: [
      { label: "Readmission Rate", value: "-32%", percentage: "68%", color: "bg-green-500" },
      { label: "Resource Utilization", value: "+41%", percentage: "85%", color: "bg-blue-500" },
      { label: "Prediction Accuracy", value: "92.3%", percentage: "92.3%", color: "bg-green-500" },
      { label: "Cost Savings", value: "$3.2M", percentage: "80%", color: "bg-blue-500" }
    ],
    insights: [
      "Patients with condition X show 45% better outcomes when treatment Y is administered within 6 hours",
      "Staffing optimization model suggests 18% reallocation of nursing resources to improve patient care",
      "Predictive model identifies high-risk patients with 92% accuracy, enabling proactive intervention"
    ]
  },
  {
    id: "manufacturing",
    industry: "Manufacturing",
    title: "Production Optimization and Predictive Maintenance",
    description: "Our manufacturing analytics solution helps companies optimize production processes, predict equipment failures, and improve quality control.",
    icon: BarChart,
    dashboardTitle: "Manufacturing Performance Dashboard",
    benefits: [
      {
        title: "Predictive Maintenance",
        description: "Reduce unplanned downtime by 78% with AI-driven equipment monitoring and failure prediction."
      },
      {
        title: "Quality Control",
        description: "Improve product quality by identifying process variations, reducing defects by 62%."
      },
      {
        title: "Production Optimization",
        description: "Increase throughput by 35% with optimized production scheduling and resource allocation."
      }
    ],
    metrics: [
      { label: "Equipment Uptime", value: "+78%", percentage: "92%", color: "bg-green-500" },
      { label: "Defect Rate", value: "-62%", percentage: "38%", color: "bg-green-500" },
      { label: "Production Efficiency", value: "+35%", percentage: "85%", color: "bg-blue-500" },
      { label: "Maintenance Costs", value: "-45%", percentage: "55%", color: "bg-blue-500" }
    ],
    insights: [
      "Machine A shows early warning signs of bearing failure, maintenance recommended within 72 hours",
      "Production line 3 efficiency could improve by 23% with process parameter adjustments",
      "Current quality issues correlate with specific material batch - 87% confidence in root cause"
    ]
  }
];

const workflowSteps = [
  {
    title: "Data Collection & Integration",
    description: "We securely gather data from multiple sources and integrate it into our analysis platform, handling various formats and structures."
  },
  {
    title: "AI-Powered Analysis",
    description: "Our advanced AI models analyze your data to identify patterns, trends, anomalies, and actionable insights that drive business value."
  },
  {
    title: "Insight Delivery & Action",
    description: "We deliver clear, actionable intelligence through interactive dashboards, automated reports, and direct integration with your business systems."
  }
];

const technologies = [
  {
    icon: <Cpu className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    name: "TensorFlow",
    description: "Advanced deep learning models"
  },
  {
    icon: <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    name: "Snowflake",
    description: "Scalable data warehousing"
  },
  {
    icon: <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    name: "Apache Spark",
    description: "Big data processing"
  },
  {
    icon: <Search className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    name: "Elasticsearch",
    description: "Advanced search and analytics"
  },
  {
    icon: <LineChart className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    name: "R & Python",
    description: "Statistical modeling"
  },
  {
    icon: <BarChart className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    name: "Tableau",
    description: "Interactive visualization"
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    name: "Prophet",
    description: "Time series forecasting"
  },
  {
    icon: <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    name: "NLP Models",
    description: "Text and document analysis"
  }
];
