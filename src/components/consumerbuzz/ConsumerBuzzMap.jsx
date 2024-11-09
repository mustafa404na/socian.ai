import MapItemSocial from "./mapItemSocial";
import MapItemanalysis from "./mapItemanalysis";
import MapItemInterpetation from "./mapItemInterpetation";
import AppBigTitle from "../ui/AppBigTitle";
import Container from "../ui/Container";
import MapItemVisualization from "./mapItemVisualization";

export default function ConsumerBuzzMap() {
  return (
    <div className="scrollElement">
      <Container>
        <div className="grid grid-cols-2 items-center min-h-screen">
          <div className="grid items-center lg:text-left uppercase">
            <AppBigTitle>
              Consumer
              <br />
              map
            </AppBigTitle>
          </div>
          <div className="gap-10 py-24 grid lg:max-w-none lg:grid-cols-2 md:grid-cols-2 md:max-w-6xl action-2">
            <div>
              <MapItemSocial />
            </div>
            <div>
              <MapItemanalysis />
            </div>
            <div>
              <MapItemVisualization />
            </div>
            <div>
              <MapItemInterpetation />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
