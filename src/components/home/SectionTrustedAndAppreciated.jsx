import TrustImageDesktop from "@/images/home/TrustImageDesktop";
import AppBigTitle from "../ui/AppBigTitle";
import Container from "../ui/Container";

export default function SectionTrustedAndAppreciated() {
  return (
    <div id={`section_trusted_and_appreciated`} className="scrollElement">
      <Container>
        <div className="grid md:grid-cols-2 grid-col-1 items-center min-h-screen">
          <div className="grid items-center lg:text-left uppercase action-1">
            <AppBigTitle>
              Trusted &
              <br />
              Appreciated
            </AppBigTitle>
          </div>
          <div>
            <div
              className={`max-w-full xl:min-w-[900px] xl:p-20 lg:max-w-[500px] w-[400px] py-10 mx-auto tablet:w-full`}
            >
              {/* <Image
                src={BgCompaniesBubble}
                className="mx-auto action-2"
                width={"100%"}
                height={"100%"}
                alt={"Feature Overview"}
                loading="lazy"
              /> */}
              <TrustImageDesktop />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
