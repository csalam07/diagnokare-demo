import { AiFillPlayCircle, AiOutlineArrowRight } from 'react-icons/ai';
import { scroll } from '../helper';

function AboutUs() {
  return (
    <section id="about" className="w-[100vw] hero">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="relative">
          <img
            className="w-full rounded-xl"
            src="https://www.dmu.ac.uk/webimages/study-images/courses/health-and-life-sciences/foundation/bmedscience-banner.jpg"
            alt="dashboard image"
          />
          <div className="absolute top-[50%] left-[50%]">
            <label htmlFor="videoPlayer">
              <AiFillPlayCircle className="w-12 h-12 bg-base-100 rounded-full -ml-6 -mt-6 cursor-pointer" />
            </label>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-accent-focus">
            About Us
          </h2>
          <p className="mb-6 font-light opacity-75">
            Diagnokare was founded in 2015 by a team of radiology and AI experts
            who saw the potential for AI to revolutionize radiology research.
            Our mission is to help researchers harness the power of AI to
            accelerate their research and improve patient outcomes. Meet our
            team and learn more about our vision today!
          </p>
          <button className="btn gap-2" onClick={() => scroll('services')}>
            Services
            <AiOutlineArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
