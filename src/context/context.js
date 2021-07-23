import { createContext, useContext, useState, useEffect, useRef } from "react";

const TransitionContext = createContext();

const TransitionProvider = ({ children }) => {
  const [intro, setIntro] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [parted, setParted] = useState(false);
  const navBarHeight = useRef(0);

  useEffect(() => {
    setIntro(true);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    navBarHeight.current = document.getElementsByTagName("nav")[0].offsetTop;
  }, []);

  const handleScroll = (e) => {
    if (window.pageYOffset > navBarHeight.current) {
      setSticky(true);
      setParted(true);
    } else {
      setSticky(false);
      setParted(false);
    }
  };
  return (
    <TransitionContext.Provider value={{ intro, sticky, parted }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(TransitionContext);
};

export { TransitionContext, TransitionProvider };
