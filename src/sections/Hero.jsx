import { BsMouse } from 'react-icons/bs';
import { scroll } from '../helper';

function Hero() {
  return (
    <section
      id="home"
      className="hero relative"
      style={{
        backgroundImage: `url("https://static.wixstatic.com/media/11062b_603cd0210749470fa6715d513aa4c33b~mv2.jpg/v1/fill/w_1120,h_669,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_603cd0210749470fa6715d513aa4c33b~mv2.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-80" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md lg:max-w-lg">
          <h1 className="mb-5 text-5xl lg:text-7xl font-bold">Diagnokare</h1>
          <p className="mb-5 lg:text-xl">
            Welcome to Diagnokare! We specialize in helping researchers develop
            AI solutions for radiology. Our team of experts has years of
            experience in the field, and we&apos;re dedicated to providing the
            highest quality service to our clients. Learn more about our
            services today!
          </p>
        </div>
      </div>
      <button
        className="absolute md:bottom-10 bottom-5"
        onClick={() => scroll('about')}
      >
        <BsMouse className="h-8 w-8" />
      </button>
    </section>
  );
}

export default Hero;
