const useScrollUp = () => {
  return () => window.scrollTo({ top: 0, behavior: "smooth" });
};

export default useScrollUp;
