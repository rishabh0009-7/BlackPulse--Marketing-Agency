"use client"

import { motion } from "framer-motion"
import { BarChart3, TrendingUp, Users, Target, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Squares } from "./ui/squares-background"

const dashboardData = {
  metrics: [
    { label: "Total Revenue", value: "$124,500", change: "+12.5%", trend: "up" },
    { label: "Conversion Rate", value: "3.24%", change: "+0.8%", trend: "up" },
    { label: "Cost Per Lead", value: "$45.20", change: "-15.2%", trend: "down" },
    { label: "Active Campaigns", value: "24", change: "+3", trend: "up" },
  ],
  campaigns: [
    { name: "Google Ads - Tech", spend: "$12,450", conversions: 156, roas: "4.2x" },
    { name: "Facebook - Retargeting", spend: "$8,920", conversions: 89, roas: "3.8x" },
    { name: "LinkedIn - B2B", spend: "$15,600", conversions: 67, roas: "5.1x" },
  ],
  chartData: [
    { month: "Jan", value: 65 },
    { month: "Feb", value: 78 },
    { month: "Mar", value: 82 },
    { month: "Apr", value: 95 },
    { month: "May", value: 88 },
    { month: "Jun", value: 102 },
  ],
}

export function DashboardSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
      {/* Animated Squares Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Squares direction="up" speed={0.2} squareSize={80} borderColor="#1a1a1a" hoverFillColor="#111" />
      </div>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Real-Time Marketing Dashboard</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Track your marketing performance with our comprehensive analytics dashboard. Get insights that drive
            results.
          </p>
        </motion.div>

        {/* Dashboard Container */}
        <motion.div
          className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {dashboardData.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="bg-black/30 rounded-2xl p-4 sm:p-6 border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">{metric.label}</span>
                  <div
                    className={`flex items-center text-sm ${metric.trend === "up" ? "text-green-400" : "text-red-400"}`}
                  >
                    {metric.trend === "up" ? (
                      <ArrowUpRight className="w-4 h-4 mr-1" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 mr-1" />
                    )}
                    {metric.change}
                  </div>
                </div>
                <div className="text-2xl font-bold text-white">{metric.value}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Performance Chart */}
            <motion.div
              className="bg-black/30 rounded-2xl p-6 border border-gray-700"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Performance Trend</h3>
                <BarChart3 className="w-5 h-5 text-orange-400" />
              </div>

              {/* Simple Chart Visualization */}
              <div className="space-y-4">
                {dashboardData.chartData.map((data, index) => (
                  <div key={data.month} className="flex items-center">
                    <span className="text-gray-400 text-sm w-8">{data.month}</span>
                    <div className="flex-1 mx-4">
                      <div className="bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${data.value}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                    <span className="text-white text-sm font-medium w-8">{data.value}%</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Campaign Performance */}
            <motion.div
              className="bg-black/30 rounded-2xl p-6 border border-gray-700"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Top Campaigns</h3>
                <Target className="w-5 h-5 text-orange-400" />
              </div>

              <div className="space-y-4">
                {dashboardData.campaigns.map((campaign, index) => (
                  <motion.div
                    key={campaign.name}
                    className="bg-gray-800/50 rounded-xl p-4 border border-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium text-sm">{campaign.name}</h4>
                      <span className="text-orange-400 font-bold text-sm">{campaign.roas}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>Spend: {campaign.spend}</span>
                      <span>Conversions: {campaign.conversions}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Dashboard Features */}
          <motion.div
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-orange-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">Live Analytics</h4>
              <p className="text-gray-400 text-sm">Real-time data updates every 5 minutes</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-orange-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">Audience Insights</h4>
              <p className="text-gray-400 text-sm">Detailed demographic and behavior data</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="w-6 h-6 text-orange-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">Custom Reports</h4>
              <p className="text-gray-400 text-sm">Automated reports delivered to your inbox</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
