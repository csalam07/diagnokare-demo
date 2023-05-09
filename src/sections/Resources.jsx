function Resources() {
  return (
    <section id="resources" className="w-[100vw] hero">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-accent-focus">
            We didn&apos;t reinvent the wheel
          </h2>
          <p className="mb-4 opacity-90">
            Looking for resources related to AI solutions in radiology? Look no
            further! Our collection of whitepapers, case studies, and research
            papers is a great place to start.
          </p>
          <p className="opacity-90">
            We also offer information about relevant industry events and
            conferences, as well as links to other useful websites and
            resources.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}

export default Resources;
