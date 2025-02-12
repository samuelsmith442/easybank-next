import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-neutral-veryLightGray overflow-visible min-h-screen md:min-h-0">
        {/* Desktop Background */}
        <div className="hidden md:block absolute right-0 w-[50%] h-[100%]">
          <Image
            src="/images/bg-intro-desktop.svg"
            alt=""
            fill
            className="object-cover object-left scale-[1.6] translate-x-[20%] translate-y-[-15%]"
            priority
          />
        </div>

        {/* Mobile Background */}
        <div className="md:hidden absolute w-full h-[50vh] top-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/bg-intro-mobile.svg"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Mockups Image */}
        <div className="absolute z-30 w-full md:w-[767px] h-[423px] md:h-[939px] -top-16 md:-top-[150px] left-1/2 -translate-x-1/2 md:left-auto md:right-[-120px] md:translate-x-0">
          <Image
            src="/images/image-mockups.png"
            alt="Mobile app mockups"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Content Container */}
        <div className="container relative z-20 mx-auto px-5 pt-[360px] pb-20 md:py-[170px]">
          <div className="text-center md:text-left md:w-[450px] max-w-[400px] mx-auto md:mx-0">
            <h1 className="text-[40px] leading-[1.2] md:text-5xl font-light text-primary-darkBlue mb-4 md:mb-6">
              Next generation digital banking
            </h1>
            <p className="text-[15px] leading-relaxed text-neutral-grayishBlue mb-8 opacity-70">
              Take your financial life online. Your Easybank account will be a one-stop-shop 
              for spending, saving, budgeting, investing, and much more.
            </p>
            <button className="bg-gradient-to-r from-primary-limeGreen to-primary-brightCyan text-neutral-white px-8 py-3 rounded-full hover:opacity-80">
              Request Invite
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 bg-neutral-lightGrayishBlue py-16 md:py-24">
        <div className="container mx-auto px-5">
          <div className="text-center md:text-left max-w-[400px] md:max-w-none mx-auto md:mx-0 mb-14 md:mb-16">
            <h2 className="text-[32px] md:text-[36px] leading-tight font-light text-primary-darkBlue mb-5">
              Why choose Easybank?
            </h2>
            <p className="text-[15px] leading-relaxed text-neutral-grayishBlue opacity-70">
              We leverage Open Banking to turn your bank account into your financial hub.
              Control your financial life like never before.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-6 md:mb-8">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={72}
                    height={72}
                  />
                </div>
                <h3 className="text-[20px] font-light text-primary-darkBlue mb-4">
                  {feature.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-neutral-grayishBlue opacity-70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="bg-neutral-veryLightGray py-16 md:py-24">
        <div className="container mx-auto px-5">
          <h2 className="text-[32px] md:text-[36px] leading-tight font-light text-primary-darkBlue mb-8 md:mb-10 text-center md:text-left">
            Latest Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {articles.map((article, index) => (
              <article key={index} className="bg-neutral-white rounded-lg overflow-hidden">
                <div className="relative aspect-[1.66] w-full">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <span className="text-[10px] text-neutral-grayishBlue">
                    By {article.author}
                  </span>
                  <h3 className="text-primary-darkBlue hover:text-primary-limeGreen cursor-pointer mt-2 mb-2 text-[16px] leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-neutral-grayishBlue">
                    {article.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const features = [
  {
    icon: "/images/icon-online.svg",
    title: "Online Banking",
    description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    icon: "/images/icon-budgeting.svg",
    title: "Simple Budgeting",
    description: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
  },
  {
    icon: "/images/icon-onboarding.svg",
    title: "Fast Onboarding",
    description: "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    icon: "/images/icon-api.svg",
    title: "Open API",
    description: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

const articles = [
  {
    image: "/images/image-currency.jpg",
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    excerpt: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    image: "/images/image-restaurant.jpg",
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    excerpt: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    image: "/images/image-plane.jpg",
    author: "Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    excerpt: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you …",
  },
  {
    image: "/images/image-confetti.jpg",
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    excerpt: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...",
  },
];
