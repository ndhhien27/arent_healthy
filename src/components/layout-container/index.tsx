import { ChevronUp } from 'react-feather';

import Footer from '../footer';
import Header from '../header';

function LayoutContainer({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <button
        onClick={() => window.scrollTo({ top: 0 })}
        className="w-12 h-12 border-solid rounded-full border-[#777777] hover:border-primary border-[1px] flex items-center justify-center text-[#777777] hover:text-white hover:bg-primary fixed bottom-40 right-10"
      >
        <ChevronUp />
      </button>
      <Footer />
    </>
  );
}

export default LayoutContainer;
