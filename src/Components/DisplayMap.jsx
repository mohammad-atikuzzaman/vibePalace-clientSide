import { Map, Marker, ZoomControl } from "pigeon-maps";

const DisplayMap = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="font-bold text-3xl text-blue-500">We are on</h2>
        <p className="font-bold text-lg text-blue-500">
          You can find us on map. We located on the side of new yourk city
        </p>
      </div>
      <div className="rounded-xl overflow-hidden">
        <Map
          height={300}
          defaultCenter={[43.73061, -75.935242]}
          defaultZoom={7}>
          <Marker width={50} anchor={[43.73061, -75.935242]} />
          <ZoomControl />
        </Map>
      </div>
    </div>
  );
};

export default DisplayMap;
