
import { useNavigate } from 'react-router-dom';

const Stats = () => {
  const navigate = useNavigate();

  const handleBuyNow = (kitType: string) => {
    navigate('/buy', { state: { kitType } });
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-100 via-green-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 px-2">
            Shop DIY Kits
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-pink-500 via-orange-500 to-blue-500 mx-auto mb-6 sm:mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden mx-2 sm:mx-0">
            <div className="h-32 sm:h-40 lg:h-48 bg-gradient-to-r from-pink-300 to-orange-300"></div>
            <div className="p-4 sm:p-5 lg:p-6">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-lg sm:text-xl">Beginner Kit</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">Perfect for first-time crafters with all essential materials</p>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                <span className="text-xl sm:text-2xl font-bold text-orange-600">₹599</span>
                <button 
                  onClick={() => handleBuyNow('Beginner Kit')}
                  className="w-full sm:w-auto bg-orange-500 text-white px-3 sm:px-4 py-2 rounded-full hover:bg-orange-600 transition-colors text-sm sm:text-base"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden mx-2 sm:mx-0">
            <div className="h-32 sm:h-40 lg:h-48 bg-gradient-to-r from-blue-300 to-purple-300"></div>
            <div className="p-4 sm:p-5 lg:p-6">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-lg sm:text-xl">Advanced Kit</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">For experienced creators with premium tools and materials</p>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                <span className="text-xl sm:text-2xl font-bold text-orange-600">₹999</span>
                <button 
                  onClick={() => handleBuyNow('Advanced Kit')}
                  className="w-full sm:w-auto bg-orange-500 text-white px-3 sm:px-4 py-2 rounded-full hover:bg-orange-600 transition-colors text-sm sm:text-base"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden mx-2 sm:mx-0 sm:col-span-2 lg:col-span-1">
            <div className="h-32 sm:h-40 lg:h-48 bg-gradient-to-r from-green-300 to-teal-300"></div>
            <div className="p-4 sm:p-5 lg:p-6">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-lg sm:text-xl">Premium Kit</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">Complete professional set with exclusive materials</p>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                <span className="text-xl sm:text-2xl font-bold text-orange-600">₹1499</span>
                <button 
                  onClick={() => handleBuyNow('Premium Kit')}
                  className="w-full sm:w-auto bg-orange-500 text-white px-3 sm:px-4 py-2 rounded-full hover:bg-orange-600 transition-colors text-sm sm:text-base"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
