import Hero from '../components/sections/Hero';

const HomePage = () => {
  return (
    <div className="flex items-center justify-center py-2 px-4 bg-white dark:bg-gray-900">
      <div className="w-full max-w-7xl mx-auto">
        <Hero />
      </div>
    </div>
  );
};

export default HomePage; 