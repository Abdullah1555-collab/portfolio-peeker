
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

// Enhanced stock performance data for a more realistic chart with volume data
const performanceData = [
  { year: '2019', value: 100, volume: 1500 },
  { year: '2020', value: 120, volume: 2200 },
  { year: '2021', value: 180, volume: 3100 },
  { year: '2022', value: 150, volume: 2600 },
  { year: '2023', value: 200, volume: 3800 },
];

const StockChart: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="p-6 bg-white rounded-lg border border-gray-100">
        <h3 className="text-xl font-bold mb-6">5 Year Performance</h3>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis 
                dataKey="year" 
                axisLine={false}
                tickLine={false}
                ticks={['2019', '2020', '2021', '2022', '2023']}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false}
                domain={[0, 'dataMax + 20']}
                ticks={[0, 50, 100, 150, 200]}
              />
              <Tooltip formatter={(value) => [`${value}`, 'Value']} />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#2563eb" 
                strokeWidth={2} 
                dot={{ r: 4, fill: "#2563eb", strokeWidth: 0 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Volume Bar Chart */}
      <div className="p-6 bg-white rounded-lg border border-gray-100">
        <h3 className="text-xl font-bold mb-6">Trading Volume</h3>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis 
                dataKey="year" 
                axisLine={false}
                tickLine={false}
                ticks={['2019', '2020', '2021', '2022', '2023']}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false}
                domain={[0, 'dataMax + 500']}
              />
              <Tooltip formatter={(value) => [`${value}`, 'Volume']} />
              <Bar 
                dataKey="volume" 
                fill="#4f46e5" 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StockChart;
