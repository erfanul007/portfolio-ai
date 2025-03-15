import { ReactNode, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import SectionNavigation from '../ui/SectionNavigation';
import SectionProgress from '../ui/SectionProgress';
import PageTransition from '../ui/PageTransition';
import { useNavigation } from '../../context/NavigationContext';
import useSwipe from '../../hooks/useSwipe';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { navigateToNextSection, navigateToPrevSection } = useNavigation();
  
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
    <div className="flex flex-col min-h-screen overflow-hidden bg-white dark:bg-gray-900">
      <Header />
      <main className="flex-grow pt-20 pb-12">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      <SectionProgress />
      <SectionNavigation />
      <Footer />
    </div>
  );
};

export default Layout; 