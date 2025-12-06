import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const DashboardPreview = () => {
  const { isDark } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="relative max-w-6xl mx-auto"
    >
      <div className="relative">
        {/* Main Dashboard Window */}
        <div className={`relative rounded-3xl shadow-2xl p-8 border transform rotate-[-2deg] hover:rotate-0 transition-all duration-500 ${
          isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          {/* Dashboard Header */}
          <div className={`flex items-center justify-between mb-6 pb-4 border-b transition-colors duration-300 ${
            isDark ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className={`ml-4 text-lg font-bold transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Logistic</span>
            </div>
            <div className={`text-sm font-semibold transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Dashboard Overview</div>
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-lg transition-colors duration-300 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
              <div className={`w-8 h-8 rounded-full transition-colors duration-300 ${isDark ? 'bg-blue-900' : 'bg-blue-100'}`}></div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className={`border rounded-xl p-4 shadow-sm transition-colors duration-300 ${
                isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
              }`}
            >
              <div className={`text-xs mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>TOTAL SALES</div>
              <div className={`text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>$ 23,090.00</div>
              <div className={`text-xs font-semibold transition-colors duration-300 ${isDark ? 'text-green-400' : 'text-green-600'}`}>+18.34%</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className={`border rounded-xl p-4 shadow-sm transition-colors duration-300 ${
                isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
              }`}
            >
              <div className={`text-xs mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>PURCHASES</div>
              <div className={`text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>$ 14,850.00</div>
              <div className={`text-xs font-semibold transition-colors duration-300 ${isDark ? 'text-red-400' : 'text-red-600'}`}>-10.83%</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className={`border rounded-xl p-4 shadow-sm transition-colors duration-300 ${
                isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
              }`}
            >
              <div className={`text-xs mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>RETURNS</div>
              <div className={`text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>$ 6,525.00</div>
              <div className={`text-xs font-semibold transition-colors duration-300 ${isDark ? 'text-green-400' : 'text-green-600'}`}>+1.39%</div>
            </motion.div>
          </div>

          {/* Sales Analytics Chart */}
          <div className="mb-6">
            <h3 className={`text-sm font-semibold mb-4 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Sales Analytics</h3>
            <div className={`h-48 rounded-xl p-4 flex items-end justify-between relative transition-colors duration-300 ${
              isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 to-gray-100'
            }`}>
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => {
                const heights = [
                  [45, 60], [50, 65], [40, 55], [55, 70], [60, 75], [75, 90], [70, 85], [65, 80], [55, 70], [50, 65], [45, 60], [40, 55]
                ];
                const [purpleHeight, blueHeight] = heights[index] || [50, 60];
                return (
                  <motion.div
                    key={month}
                    initial={{ height: 0 }}
                    animate={{ height: '100%' }}
                    transition={{ delay: 1.3 + index * 0.05, duration: 0.5 }}
                    className="flex-1 mx-0.5 relative group flex flex-col items-center justify-end"
                  >
                    <div className="w-full flex flex-col items-center space-y-0.5">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${purpleHeight}%` }}
                        transition={{ delay: 1.4 + index * 0.05, duration: 0.5 }}
                        className="w-full bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-lg"
                      ></motion.div>
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${blueHeight}%` }}
                        transition={{ delay: 1.5 + index * 0.05, duration: 0.5 }}
                        className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg"
                      ></motion.div>
                    </div>
                    <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {month}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Latest Invoices Table */}
          <div>
            <h3 className={`text-sm font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Latest Invoices</h3>
            <div className="space-y-2">
              {[1, 2, 3, 4].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 + item * 0.1, duration: 0.5 }}
                  className={`flex items-center justify-between p-3 rounded-lg transition-colors duration-300 ${
                    isDark ? 'bg-gray-800' : 'bg-gray-50'
                  }`}
                >
                  <div className="flex-1">
                    <div className={`h-2 rounded w-1/4 mb-2 transition-colors duration-300 ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
                    <div className={`h-2 rounded w-1/3 transition-colors duration-300 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                  </div>
                  <div className={`h-2 rounded w-16 transition-colors duration-300 ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - Partially Visible */}
        <motion.div 
          className="absolute -left-8 top-20 bg-blue-900 rounded-2xl p-6 w-48 shadow-xl transform rotate-[-3deg] cursor-pointer"
          whileHover={{
            x: [0, -2, 2, -1, 1, 0],
            transition: {
              duration: 0.4,
              ease: "easeInOut"
            }
          }}
        >
          <div className="mb-4">
            <h4 className="text-white text-sm font-semibold mb-2">Shipments by Status</h4>
            <div className="relative w-20 h-20 mx-auto">
              <svg className="transform -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="16" fill="none" stroke="#1e3a8a" strokeWidth="3" />
                <circle cx="18" cy="18" r="16" fill="none" stroke="#f97316" strokeWidth="3" strokeDasharray="34 100" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xs font-bold">34%</span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            {['Profile', 'Inbox', 'Accounting', 'Settings'].map((item, idx) => (
              <div key={item} className="flex items-center space-x-2 text-white text-sm">
                <div className="w-4 h-4 bg-white/20 rounded"></div>
                <span>{item}</span>
                {idx === 1 && <span className="ml-auto bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">14</span>}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Marketing Goal Card - Layered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          whileHover={{
            y: -8,
            scale: 1.05,
            rotate: [3, 0, 3],
            transition: {
              duration: 0.3,
              ease: "easeInOut"
            }
          }}
          className={`absolute -right-8 top-32 rounded-xl shadow-xl p-6 w-56 border transform rotate-[3deg] cursor-pointer transition-colors duration-300 ${
            isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          }`}
        >
          <h4 className={`text-sm font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Marketing goal for the past year</h4>
          <div className={`text-2xl font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>$4,520.00</div>
          <div className={`relative w-full h-3 rounded-full overflow-hidden transition-colors duration-300 ${
            isDark ? 'bg-gray-700' : 'bg-gray-200'
          }`}>
            <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" style={{ width: '68%' }}></div>
          </div>
          <div className={`text-xs mt-2 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>68%</div>
        </motion.div>

        {/* Courier Allocation Card - Layered on top */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          whileHover={{
            scale: [1, 1.03, 1],
            rotate: [-2, 0, -2],
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            transition: {
              duration: 0.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
          className={`absolute -right-4 top-64 rounded-xl shadow-xl p-6 w-64 border transform rotate-[-2deg] z-10 cursor-pointer transition-colors duration-300 ${
            isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          }`}
        >
          <h4 className={`text-sm font-semibold mb-4 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Courier allocation</h4>
          <div className="flex items-center space-x-2 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={`w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full border-2 transition-colors duration-300 ${
                isDark ? 'border-gray-800' : 'border-white'
              }`}></div>
            ))}
          </div>
          <div className="space-y-2 mb-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="allocation" defaultChecked className={isDark ? 'text-blue-400' : 'text-blue-600'} />
              <span className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>AI Powered</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="allocation" className={isDark ? 'text-blue-400' : 'text-blue-600'} />
              <span className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Cheapest</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="allocation" className={isDark ? 'text-blue-400' : 'text-blue-600'} />
              <span className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Custom Priority</span>
            </label>
          </div>
          <div className={`pt-3 border-t transition-colors duration-300 ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className={`text-xs mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Estimated Cost</div>
            <div className={`text-lg font-bold transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>₹64</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DashboardPreview;

