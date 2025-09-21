import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const expertiseContent = [
  {
    title: "What We Do",
    text: "“We build immersive digital products for modern users. From concept to launch, we cover every step of the journey.”",
  },
  {
    title: "Custom Software Development",
    text: "“Tailored solutions that scale.”",
  },
  {
    title: "Web Development",
    text: "“Lightning-fast websites and progressive web apps.”",
  },
  {
    title: "Mobile Apps",
    text: "“Native and cross-platform apps with sleek UX.”",
  },
  {
    title: "Desktop Applications",
    text: "“Powerful tools, fully integrated.”",
  },
  { title: "UI/UX Design", text: "“Interfaces that make users feel at home.”" },
  {
    title: "Technical Consulting",
    text: "“Bring us your idea, we'll bring the blueprint.”",
  },
];

const WhatWeDo = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const textEl = textRefs.current[0]; // single left text element
    if (!textEl) return;

    const ctx = gsap.context(() => {
      expertiseContent.forEach((_, i) => {
        const title = titleRefs.current[i];
        const prevTitle = i > 0 ? titleRefs.current[i - 1] : null;

        if (!title) return;

        ScrollTrigger.create({
          trigger: title,
          scroller: containerRef.current, // scrollable right block
          start: "top 80%", // when title enters visible part of container
          end: () => `+=${containerRef.current?.scrollHeight || 1000}`,
          onEnter: () => {
            // fade in current title
            gsap.to(title, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
            });

            // fade out previous title
            if (prevTitle)
              gsap.to(prevTitle, { opacity: 0.3, y: -50, duration: 0.6 });

            // Update left text
            gsap.to(textEl, {
              opacity: 0,
              duration: 0.3,
              onComplete: () => {
                textEl.textContent = expertiseContent[i].text;
                gsap.to(textEl, { opacity: 1, duration: 0.3 });
              },
            });
          },
          onLeaveBack: () => {
            // reverse animation when scrolling up
            gsap.to(title, { opacity: 0, y: 50, duration: 0.6 });
            if (prevTitle)
              gsap.to(prevTitle, { opacity: 1, y: 0, duration: 0.6 });

            // Update left text to previous
            if (i > 0) {
              gsap.to(textEl, {
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                  textEl.textContent = expertiseContent[i - 1].text;
                  gsap.to(textEl, { opacity: 1, duration: 0.3 });
                },
              });
            }
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="what-we-do" className="screen">
      <div className="what-we-do-left">
        <p
          ref={(el) => {
            textRefs.current[0] = el;
          }}
          className="what-we-do-text"
          style={{ opacity: 1 }} // start visible
        >
          {expertiseContent[0].text}
        </p>
      </div>
      <div className="what-we-do-right" ref={containerRef}>
        {expertiseContent.map((item, i) => (
          <h1
            key={i}
            ref={(el) => {
              titleRefs.current[i] = el;
            }}
            className="what-we-do-title"
            style={{ opacity: i === 0 ? 1 : 0, transform: "translateY(50px)" }}
          >
            {item.title}
          </h1>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
