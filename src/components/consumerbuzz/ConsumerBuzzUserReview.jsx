import Image from "next/image";
import ellipse from "../../images/consumerbuzz/ellipse.png";
import SectionLink from "../ui/SectionLink";
import Container from "../ui/Container";
import AppBigTitle from "../ui/AppBigTitle";

export default function ConsumerBuzzUserReview() {
  return (
    <section className="scrollElement">
      <Container>
        <div className="grid">
          <div className="h-full lg:h-screen pt-32 px-4 flex flex-col items-center xl:justify-center">
            <div className="grid items-center grid-cols-1 md:grid-cols-2 tablet:grid-cols-1">
              <div className="grid items-center lg:text-left uppercase">
                <AppBigTitle>
                  User
                  <br />
                  review
                </AppBigTitle>
              </div>
              <div className="tablet:mt-10 mt-5">
                <div className="flex">
                  <div className="mr-4 flex-shrink-0 h-[58px] w-[58px] self-center rounded-[50%] overflow-hidden">
                    <Image
                      src={ellipse}
                      width={"100%"}
                      height={"100%"}
                      alt={"ellipse"}
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Bushra Mehreen</h4>
                    <p className="mt-1 text-[#46B8E9]">
                      Head of Market Research, Grameenphone Ltd
                    </p>
                  </div>
                </div>

                <p className="italic xl:text-xl lg:text-lg mt-[13px] pr-5">
                  “ GP purchased ConsumerBuzz from Socian to be able to
                  continuously analyze mass opinions on the mobile packages we
                  offer. In 2 years, I can assure to have gained 600% ROI for
                  all the insights we gained and capitalized for best suited
                  offers. “
                </p>
              </div>
            </div>

            <div className="w-full pt-20 grid md:flex md:justify-center align-middle items-center py-5 gap-y-3 justify-start">
              <div className={`flex items-center`}>
                <SectionLink href={`https://consumerbuzz.socian.ai/`}>
                  see complete product
                </SectionLink>
              </div>
              <span className="mx-5 hidden md:inline">|</span>
              <div className={`flex items-center`}>
                <SectionLink href={`/#section_contact_form`}>
                  book a demo
                </SectionLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
