import React, { useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "../styles/components/OrdersItemMap.css";

const containerStyle = {
  width: "370px",
  height: "350px",
};

export default function OrdersItemMap({ latitute, longitute }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCF2WVR_gJMplUL9KGLzdVP9fnzEh4pHqw",
  });

  const center = {
    lat: latitute,
    lng: longitute,
  };

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
      onLoad={onLoad}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
}
