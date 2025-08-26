import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useHashScroll = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // A small timeout ensures the page has had time to render
      // before we try to scroll.
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]); // This effect runs whenever the hash in the URL changes
};

export default useHashScroll;
