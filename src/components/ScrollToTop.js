import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("Route changed → scrolling to top", pathname); // 👈 check
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
