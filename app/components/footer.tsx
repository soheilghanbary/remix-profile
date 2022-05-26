const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-section">
        <div className="flex flex-col gap-6">
          <h3 className="text-white text-2xl font-semibold">Hamkary.org</h3>
          <h6 className="text-xl font-medium">
            Full time educator making our world better
          </h6>
          <ul className="footer-icons">
            <li>
              <img src="/images/twitter.svg" />
            </li>
            <li>
              <img src="/images/github.svg" />
            </li>
            <li>
              <img src="/images/apps.svg" />
            </li>
            <li>
              <img src="/images/youtube.svg" />
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-white text-2xl font-semibold">Sitemap</h3>
          <div className="grid grid-cols-2">
            <ul className="flex flex-col gap-1">
              <li className="py-2 hover:text-white duration-150 cursor-pointer font-medium">
                Home
              </li>
              <li className="py-2 hover:text-white duration-150 cursor-pointer font-medium">
                Blog
              </li>
              <li className="py-2 hover:text-white duration-150 cursor-pointer font-medium">
                About
              </li>
              <li className="py-2 hover:text-white duration-150 cursor-pointer font-medium">
                Register
              </li>
            </ul>
            <ul className="flex flex-col gap-1">
              <li className="py-2 hover:text-white duration-150 cursor-pointer font-medium">
                FAQ
              </li>
              <li className="py-2 hover:text-white duration-150 cursor-pointer font-medium">
                Talks
              </li>
              <li className="py-2 hover:text-white duration-150 cursor-pointer font-medium">
                Credits
              </li>
              <li className="py-2 hover:text-white duration-150 cursor-pointer font-medium">
                Sitemap.xml
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-white text-2xl font-semibold">Stay up to date</h3>
          <p className="leading-7">
            Subscribe to the newsletter to stay up to date with articles,
            courses and much more! Learn more.
          </p>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type={'email'} placeholder='ex@gmail.com' />
          </div>
          <button className="btn primary">Subscribe</button>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
