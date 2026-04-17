import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CultureAndProcess() {
  return (
    <>
      <section className="py-24 bg-card-bg/85 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          {/* Who We're Looking For */}
          <AnimatedSection delay={0}>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Who We&apos;re Looking For
              </h2>
              <p className="text-muted leading-relaxed text-lg">
                We are searching for professionals who combine deep technical expertise with true client empathy. Our ideal candidates communicate effectively, remain naturally curious, take initiative, and consistently deliver high-quality code and strategies under realistic timelines.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-section-bg/85 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          {/* Hiring Process */}
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Our Hiring Process
              </h2>
              <p className="text-muted text-lg mb-10">
                Clear, transparent, and focused on your goals.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass border border-card-border p-8 rounded-xl">
                <h3 className="flex items-center text-xl font-bold mb-3"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mr-3 text-sm">1</span> Application Review</h3>
                <p className="text-muted">We review your resume and portfolio to understand your strengths and depth.</p>
              </div>
              <div className="glass border border-card-border p-8 rounded-xl">
                <h3 className="flex items-center text-xl font-bold mb-3"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mr-3 text-sm">2</span> Intro Conversation</h3>
                <p className="text-muted">A short call to discuss your background, goals, and role expectations.</p>
              </div>
              <div className="glass border border-card-border p-8 rounded-xl">
                <h3 className="flex items-center text-xl font-bold mb-3"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mr-3 text-sm">3</span> Skills Assessment</h3>
                <p className="text-muted">A practical task or technical discussion focused on real-world problem solving.</p>
              </div>
              <div className="glass border border-card-border p-8 rounded-xl">
                <h3 className="flex items-center text-xl font-bold mb-3"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mr-3 text-sm">4</span> Final Offer</h3>
                <p className="text-muted">Final conversation with leadership followed by an offer for selected candidates.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-card-bg/85 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          {/* Life at Company */}
          <AnimatedSection delay={0.2}>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Life at Simplicity Web Inc.
              </h2>
              <p className="text-muted leading-relaxed text-lg">
                Our culture revolves around respect, strong ownership, and continuous excellence. We champion focused deep work, open communication, and a tightly-knit team mindset where every single contribution matters. Whether you are advancing in web development jobs or pursuing long-term IT company careers, you will find a supportive home to do meaningful work.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
