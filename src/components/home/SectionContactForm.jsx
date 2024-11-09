import AppBigTitle from "../ui/AppBigTitle";
import Container from "../ui/Container";
import SocianAIContactForm from "./forms/SocianAIContactForm";

export default function SectionContactForm() {
  return (
    <div id={`section_contact_form`} className="scrollElement">
      <Container>
        <div className="grid md:grid-cols-2 grid-col-1 items-center min-h-screen">
          <div className="grid items-center lg:text-left uppercase action-2">
            <AppBigTitle>
              Let’s
              <br />
              Connect
            </AppBigTitle>
          </div>
          <div className="action-2">
            <SocianAIContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
