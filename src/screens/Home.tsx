import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Home = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            "#title-1",
            { x: -200, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
          );
          gsap.fromTo(
            "#title-2",
            { x: 200, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
          );
          gsap.fromTo(
            "#title-3",
            { x: -200, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.4 }
          );
        }
      },
      { threshold: 0.5 } // section must be 50% visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="screen" ref={sectionRef}>
      <h1 className="home-title" id="title-1">
        WELCOME
      </h1>
      <h1 className="home-title" id="title-2">
        TO
      </h1>
      <h1 className="home-title" id="title-3">
        PIXELERION
      </h1>
    </section>
  );
};

export default Home;
