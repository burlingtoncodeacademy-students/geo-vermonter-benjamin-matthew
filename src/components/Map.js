import {
  MapContainer,
  TileLayer,
  Polygon,
  Marker,
  Polyline,
} from "react-leaflet";
//importing the borderData and useMap
import borderData from "../data/border";
import { useMap } from "react-leaflet";

//creating a function to reset the view (center and zoom) on the map using the useMap and setView methods imported from leaflet
function MyComponent({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

function Map(props) {
  let vtOutline = borderData.geometry.coordinates[0].map((coords) => [
    coords[1],
    coords[0],
  ]);

  return (
    <MapContainer
      center={props.center}
      zoom={props.zoom}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      zoomControl={false}
      touchZoom={false}
      style={{
        height: "600px",
        width: "600px",
        border: "3px solid rgb(39, 38, 38, 1)",
      }}
      //disabling the ability to drag the map and zoom
      dragging={false}
      zoomDelta={0}
      keyboard={false}
    >
      {/* returning the created function with center and zoom */}
      <MyComponent center={props.center} zoom={props.zoom} />
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
      />
      <Marker position={props.center} />
      <Polygon
        positions={vtOutline}
        pathOptions={{ color: "orange", fillOpacity: 0 }}
      />
    </MapContainer>
  );
}

export default Map;
