import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { Link, useNavigate } from "react-router-dom";

const googleMapApi = import.meta.env.VITE_GOOGLE_MAP_API;
const mapId = import.meta.env.VITE_GOOGLE_MAP_MAP_ID;

function WorldMap() {
  const position = { lat: 38.9072, lng: -77.0369 };
  const initialZoom = 4;
  const navigate = useNavigate();

  const handleMapClick = (e) => {
    // e.detail.latLng should contain the clicked location.
    // Depending on the API, latLng may be an object with .lat() and .lng() methods.
    // Adjust the code accordingly if needed.
    const latLng = e.detail.latLng;
    const lat = latLng.lat;
    const lng = latLng.lng;
    
    // Navigate to /form and pass lat and lng as query parameters
    navigate(`/dashboard/form?lat=${lat}&lng=${lng}`);
  };

  return (
    <APIProvider apiKey={googleMapApi}>
      <Link to="form">
      <Map
        defaultZoom={initialZoom}
        defaultCenter={position}
        mapId={mapId}
        mapOptions={{
          zoomControl: true,
          scrollwheel: true,
          gestureHandling: "greedy",
          draggable: true,
        }}
        minZoom={2}
        restriction={{
          latLngBounds: {
            north: 60,
            south: -60,
            east:180,
            west:-180
          },
        }}
        onClick={handleMapClick}
        style={{ height: "100%", width: "100%" }}
      >
        <AdvancedMarker position={position}>
          <Pin background="red" borderColor="white" glyphColor="purple" />
        </AdvancedMarker>
      </Map>
      </Link>
    </APIProvider>
  );
}

export default WorldMap;
