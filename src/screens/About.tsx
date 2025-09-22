import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const aboutContent = [
  {
    id: "1",
    title: "Creative & Functional Design",
    text: "At Pixelerion, we transform digital ideas into vibrant, functional experiences. With a passionate team and a strong focus on design, code, and collaboration, we help brands of all sizes create products that truly stand out.",
    color: "var(--yellow)",
  },
  {
    id: "2",
    title: "Clean & Scalable Code",
    text: "We build with future growth in mind. Our codebases are structured, maintainable, and optimized for performance so your product stays reliable and adaptable as your business evolves.",
    color: "var(--green)",
  },
  {
    id: "3",
    title: "Tailored Solutions for All Business Sizes",
    text: "From startups to enterprises, we craft bespoke digital solutions aligned with each client’s goals, ensuring the right balance between innovation, usability, and cost-effectiveness.",
    color: "var(--red)",
  },
  {
    id: "4",
    title: "Collaborative Client Partnerships",
    text: "We see every project as a partnership. By working closely with your team, we keep communication clear and decisions transparent, ensuring your vision comes to life seamlessly.",
    color: "var(--blue)",
  },
  {
    id: "5",
    title: "Long-Term Tech Support",
    text: "Our relationship doesn’t end at launch. We provide ongoing maintenance, updates, and enhancements to keep your digital products secure, efficient, and ahead of the curve.",
    color: "var(--green)",
  },
  {
    id: "6",
    title: "User-Focused Experiences That Convert",
    text: "We design and build experiences centered on your users’ needs. By blending intuitive interfaces with strategic thinking, we help you increase engagement and drive real results.",
    color: "var(--red)",
  },
];

const About = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    // initial stacked look
    const baseOffset = window.innerWidth < 768 ? -20 : -40;
    itemRefs.current.forEach((el, i) => {
      if (el) {
        gsap.set(el, {
          y: i * baseOffset, // negative = each one slides up a little
          zIndex: aboutContent.length - i,
        });
      }
    });
  }, []);

  const selectIndex = (index: number) => {
    setSelectedIndex(index);

    const baseOffset = window.innerWidth < 768 ? -50 : -80;
    const clickedY = window.innerWidth < 768 ? 60 : 180;

    // animate clicked one to top
    const clickedEl = itemRefs.current[index];
    if (clickedEl) {
      gsap.to(clickedEl, {
        y: clickedY, // bring further to top
        zIndex: aboutContent.length + 1,
        duration: 0.1,
        ease: "power3.out",
      });

      // push all others back
      itemRefs.current.forEach((el, i) => {
        if (el && i !== index) {
          gsap.to(el, {
            y: i * baseOffset,
            zIndex: aboutContent.length - i,
            duration: 0.1,
            ease: "power3.out",
          });
        }
      });
    }
  };

  return (
    <section id="about" className="screen">
      <div
        className="about-left"
        style={{ backgroundColor: aboutContent[selectedIndex].color }}
      >
        {aboutContent[selectedIndex].text}
      </div>
      <ul className="about-right">
        {aboutContent.map((c, index) => (
          <li
            className="about-titles"
            style={{ backgroundColor: c.color }}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            key={c.id}
            onClick={() => selectIndex(index)}
          >
            <span className="about-ids">{c.id}</span> {c.title}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;
