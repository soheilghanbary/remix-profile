export default function HomePage() {
  return (
    <>
      <div className="my-20 flex xl:flex-row lg:flex-row flex-col-reverse items-center gap-8">
        <div className="xl:w-1/2 lg:w-1/2 w-full flex flex-col gap-8">
          <h1 className="text-3xl font-semibold text-white leading-normal">
            Build and share your resume with Hamkary
          </h1>
          <p className="text-sm leading-7">
            The main destination is to find and display the creative work and
            home of the world's best design professionals. Website designers are
            usually faced with the issue that the main content of the pages is
            not ready when designing the site template
          </p>
          <div>
            <button className="btn primary rounded">Create Resume</button>
          </div>
        </div>
        <img
          className="xl:w-1/2 lg:w-1/2 w-full anim-up"
          src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_900,q_auto,f_auto/kentcdodds.com/illustrations/kody-flying_red"
        />
      </div>
      <div className="my-40">
        <h2 className="text-3xl text-white font-semibold mb-10 text-center">
          Services
        </h2>
        <ul className="grid xl:grid-cols-3 lg:xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8">
          <ServiceItem title="Fast and Easy Create" />
          <ServiceItem title="For all subjects" />
          <ServiceItem title="Best to be seen" />
          <ServiceItem title="Strong search engine" />
          <ServiceItem title="Full customization" />
          <ServiceItem title="Job Search" />
        </ul>
      </div>
    </>
  );
}

const ServiceItem = ({ title }: { title: string }) => (
  <li className="p-10 flex flex-col items-center gap-4 text-center rounded-xl shadow-md bg-darker hover:bg-primary duration-200 cursor-pointer hover:-translate-y-2 text-zinc-200 hover:text-white">
    <span className="flex items-center rounded-full p-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    </span>
    <h2 className="font-medium text-xl">{title}</h2>
    <p className="text-sm leading-7">
      The required technology and various applications are aimed at improving
      the tools
    </p>
  </li>
);
