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
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="screen">
      <img src={left} alt="left-arrow" width={62} height={135} />
      <div className="testimonial-container">
        <p className="testimonial-text">
          <span className="quote">“</span>
          {testimonials[0].text}
        </p>
        <div className="testimonial-info">
          <img src={testimonials[0].picture} alt="" width={100} height={100} />
          <div className="name-role">
            <p className="name">{testimonials[0].owner}</p>
            <p className="role">{testimonials[0].role}</p>
          </div>
        </div>
      </div>
      <img src={right} alt="right-arrow" width={62} height={135} />
    </section>
  );
};

export default Testimonials;
