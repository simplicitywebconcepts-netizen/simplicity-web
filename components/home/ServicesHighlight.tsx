const serviceHighlights = [
  {
    title: "Web Design",
    description:
      "Engaging web design built upon user experience strategy that responds to its environment and user behaviour, offering an optimized UX/UI design and browsing experience for all devices.",
  },
  {
    title: "WordPress Development",
    description:
      "Hand-crafted, custom WordPress development allowing your marketing team to take full control over the world's most popular CMS platform to power your digital marketing initiatives.",
  },
  {
    title: "Web Development",
    description:
      "A custom-built platform may be best for your business website. Our award-winning web development company has the experience to craft any solution to power your digital strategy.",
  },
  {
    title: "eCommerce Design",
    description:
      "Whether it's WordPress or any other open source platform, our web design and development services are backed by robust e-commerce development to support small business growth.",
  },
  {
    title: "Brand Identity",
    description:
      "Through our brand identity design process developed over more than 20 years of professional experience, we deliver consistency in our clients' brand experiences that turn heads.",
  },
  {
    title: "Generative Engine Optimization",
    description:
      "Your customers are asking ChatGPT and Perplexity which companies to hire. We work with you to make sure your company is the answer.",
  },
];

export default function ServicesHighlight() {
  return (
    <section className="bg-section-bg/85 py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-x-14 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
          {serviceHighlights.map((item) => (
            <article
              key={item.title}
              className="max-w-xl rounded-2xl border border-border bg-card-bg/70 p-7 transition-colors duration-300 hover:border-primary/40"
            >
              <h3 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                {item.title}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}