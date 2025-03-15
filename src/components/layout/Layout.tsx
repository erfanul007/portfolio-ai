import { ReactNode, useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import SectionNavigation from '../ui/SectionNavigation';
import SectionProgress from '../ui/SectionProgress';
import PageTransition from '../ui/PageTransition';
import { useNavigation } from '../../context/NavigationContext';
import useSwipe from '../../hooks/useSwipe';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { navigateToNextSection, navigateToPrevSection } = useNavigation();
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Track page transitions
  useEffect(() => {
    // Set transitioning state when location changes
    setIsTransitioning(true);
    
    // Reset transitioning state after animation completes
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 600); // Slightly longer than the transition duration to ensure completion
    
    return () => clearTimeout(timeout);
  }, [location.pathname]);
  
  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        navigateToNextSection();
      } else if (e.key === 'ArrowLeft') {
        navigateToPrevSection();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigateToNextSection, navigateToPrevSection]);
  
  // Add swipe navigation
  useSwipe({
    onSwipeLeft: navigateToNextSection,
    onSwipeRight: navigateToPrevSection
  });
  
  return (
    <div className={`flex flex-col h-screen overflow-hidden bg-white dark:bg-gray-900 ${isTransitioning ? 'page-transitioning' : ''}`}>
      <Header />
      <main className="flex-grow overflow-auto pt-20 pb-12 md:pb-24">
        <PageTransition>
          <div className="page-content">
            {children}
          </div>
        </PageTransition>
      </main>
      <SectionProgress />
      <SectionNavigation />
      <Footer />
    </div>
  );
};

export default Layout; 