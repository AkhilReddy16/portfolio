import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds: string[]) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveId((prevId) => {
              if (prevId !== id) {
                // Update the URL hash without scrolling
                history.replaceState(null, '', `#${id}`);
              }
              return id;
            });
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeId;
}

export default useScrollSpy;