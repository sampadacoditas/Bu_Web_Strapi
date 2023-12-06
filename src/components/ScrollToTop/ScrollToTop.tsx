import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ScrollToTop() {
  const pathname  = useRouter();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}
