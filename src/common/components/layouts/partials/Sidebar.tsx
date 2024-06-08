import { useEffect, useState } from 'react';

import useIsMobile from '@/common/hooks/useIsMobile';

import SearchBox from '../../elements/SearchBox';
import ThemeSwitcher from '../../elements/ThemeSwitcher';
import Navigation from '../../sidebar/Navigation';
import Profile from '../../sidebar/Profile';

const Sidebar = () => {
  const isMobile = useIsMobile(); // Call at the top level
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // Track if component has mounted

  useEffect(() => {
    setHasMounted(true); // Set mounted state to true once mounted

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Conditional rendering based on mount status to safely manage rendering during SSR
  if (!hasMounted) {
    return (
      <div
        id='sidebar'
        className='sticky top-0 z-10 flex flex-col space-y-6 transition-all duration-300 lg:py-6'
      >
        {/* Placeholder or loader can go here if needed */}
      </div>
    );
  }

  return (
    <div
      id='sidebar'
      className='sticky top-0 z-10 flex flex-col space-y-6 transition-all duration-300 lg:py-6'
    >
      <Profile isScrolled={isScrolled} />
      {!isMobile && (
        <div className='space-y-3'>
          <div className='pb-1'>
            <SearchBox />
          </div>
          <Navigation />
          <div className='space-y-2.5 px-1'>
            <div className='px-3'>
              <span className='text-sm text-neutral-600'>Tema</span>
            </div>
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
