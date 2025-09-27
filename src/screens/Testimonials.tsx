import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import avatar from "../assets/icons/avatar.png";
import left from "../assets/icons/left.png";
import right from "../assets/icons/right.png";

const testimonials = [
  {
    text: "Pixelerion are the best.Results exceeded my expectations!",
    owner: "Chayma Khalaf",
    role: "My Wife",
    picture: avatar,
  },
  {
    text: "Working with Pixelerion was seamless — their team understood our vision and brought it to life beautifully.",
    owner: "Abd El Rahman Ghannoum",
    role: "Marketing Manager",
    picture: avatar,
  },
  {
    text: "Professional, creative, and fast delivery. Highly recommend Pixelerion for anyone looking for quality digital products.",
    owner: "Mahmoud Al Hassan",
    role: "Product Owner",
    picture: avatar,
  },
];

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      defaults: { duration: 0.6, ease: "power3.out" },
    });

    // Animate text first
    tl.fromTo(
      containerRef.current.querySelector(".testimonial-text"),
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0 }
    );

    // Animate image next
    tl.fromTo(
      containerRef.current.querySelector(".testimonial-info img"),
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0 },
      "<0.2" // start slightly before previous finishes
    );

    // Animate name/role
    tl.fromTo(
      containerRef.current.querySelector(".name-role"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0 },
      "<0.2"
    );
  }, [selectedTestimonial]);

  const handleNextTestimonial = () => {
    setSelectedTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevTestimonial = () => {
    setSelectedTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (window.screen.width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  // Automatic slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextTestimonial(); // advance every 5 seconds
    }, 5000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []); // run once

  return (
    <section id="testimonials" className="screen">
      {!isMobile && (
        <button
          type="button"
          className="arrow-btn"
          onClick={handlePrevTestimonial}
        >
          <img src={left} alt="previous testimonial" width={31} height={67} />
        </button>
      )}
      {isMobile && (
        <div className="testimonial-mobile-btn-container">
          <button
            type="button"
            className="arrow-btn"
            onClick={handlePrevTestimonial}
          >
            <img src={left} alt="previous testimonial" width={31} height={67} />
          </button>

          <button
            type="button"
            className="arrow-btn"
            onClick={handleNextTestimonial}
          >
            <img src={right} alt="next testimonial" width={31} height={67} />
          </button>
        </div>
      )}
      <div className="testimonial-wrapper">
        <div className="testimonial-container" ref={containerRef}>
          <p className="testimonial-text">
            <span className="quote">“</span>
            {testimonials[selectedTestimonial].text}
          </p>
          <div className="testimonial-info">
            <img
              src={testimonials[selectedTestimonial].picture}
              alt=""
              width={100}
              height={100}
            />
            <div className="name-role">
              <p className="name">{testimonials[selectedTestimonial].owner}</p>
              <p className="role">{testimonials[selectedTestimonial].role}</p>
            </div>
          </div>
        </div>
      </div>
      {!isMobile && (
        <button
          type="button"
          className="arrow-btn"
          onClick={handleNextTestimonial}
        >
          <img src={right} alt="next testimonial" width={31} height={67} />
        </button>
      )}
    </section>
  );
};

export default Testimonials;
