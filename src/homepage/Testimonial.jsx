import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Shakib from "../assets/Shakib al hasan.jpg";
import Priti from "../assets/Priti.jpg";
import Messi from "../assets/messi.avif";
import Nishu from "../assets/afran nishu.jpg";
import { Rate } from "antd";
import { PiStarFourFill } from "react-icons/pi";

const testimonials = [
  {
    description:
      "When I research companies online, I don’t just want to hear the company’s pitch. I want to hear from its customers. That’s where customer testimonials come into play!",
    headline: "Shakib Al Hasan",
    image: Shakib,
  },
  {
    description:
      "When I research companies online, I don’t just want to hear the company’s pitch. I want to hear from its customers. That’s where customer testimonials come into play!",
    headline: "Leonal Messi",
    image: Messi,
  },
  {
    description:
      "When I research companies online, I don’t just want to hear the company’s pitch. I want to hear from its customers. That’s where customer testimonials come into play!",
    headline: "Afran Nishu",
    image: Nishu,
  },
  {
    description:
      "When I research companies online, I don’t just want to hear the company’s pitch. I want to hear from its customers. That’s where customer testimonials come into play, and I’ve got 25 testimonial.",
    headline: "Priti Zinda",
    image: Priti,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

const Testimonial = () => {
  return (
    <section className="py-16 bg-green-600 dark:bg-primary-dark">
      <div className="container mx-auto px-5">
        {/* Section Header */}
        <h5 className="text-white dark:text-gray-100 text-lg bg-green-400 dark:bg-green-700 p-2 text-center flex items-center justify-center mx-auto font-medium w-[150px] rounded-full">
          <PiStarFourFill className="mr-2" /> Testimonial
        </h5>
        <h1 className="text-white dark:text-gray-100 text-3xl lg:text-4xl font-bold mt-2 text-center mb-10">
          What Our Happy Users Say
        </h1>

        {/* Carousel */}
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          keyBoardControl
          swipeable
          draggable
          showDots
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mx-3 my-4 md:my-6 max-w-sm md:max-w-md lg:max-w-lg"
            >
              {/* Testimonial Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic text-center md:text-left">
                {testimonial.description}
              </p>

              {/* Image Section */}
              <div className="flex justify-center lg:justify-start items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.headline}
                  className="w-16 h-16 rounded-full border-2 border-blue-500 dark:border-blue-300"
                />
              </div>

              {/* Headline */}
              <h4 className="text-gray-800 dark:text-gray-100 font-semibold text-lg mb-2 text-center md:text-left">
                {testimonial.headline}
              </h4>

              {/* Rating Section */}
              <div className="flex justify-center lg:justify-start">
                <Rate
                  allowHalf
                  defaultValue={4.5}
                  style={{
                    color: "rgb(34,197,94)",
                  }}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
