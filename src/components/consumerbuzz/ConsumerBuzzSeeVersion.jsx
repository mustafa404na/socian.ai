import Container from "../ui/Container";
import SectionLink from "../ui/SectionLink";
export default function ConsumerBuzzSeeVersion() {
  return (
    <section className="min-h-screen w-full grid items-center scrollElement">
      <Container>
        <div className="mx-auto grid">
          <div className="rounded-[22px]">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 px-4 tablet:h-[70vh] items-center">
              <div className="rounded-[22px]">
                <div>
                  <h1 className="bigHeading">See version 1.0 promo</h1>
                  <hr className="my-5 w-[70px]" />
                  <p className="paragraph pb-7">
                    Consumerbuzz is a powerful solution that helps businesses to
                    have a better understanding of their target audience, while
                    keeping track of competitors.
                  </p>
                </div>
                <div className="lg:flex grid gap-y-4 items-center mt-6">
                  <div className={`flex items-center`}>
                    <SectionLink href={`https://consumerbuzz.socian.ai/`}>
                      see complete product
                    </SectionLink>
                  </div>
                  <span className="mx-5 hidden lg:inline">|</span>
                  <div className={`flex items-center`}>
                    <SectionLink href={`/#section_contact_form`}>
                      book a demo
                    </SectionLink>
                  </div>
                </div>
              </div>
              <div className="tablet:min-h-[350px] h-[400px] rounded-3xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/YDM6NWm2Zs0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
