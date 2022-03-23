import { useEffect } from 'react';
import { createMap } from "maplibre-gl-js-amplify";
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import "maplibre-gl/dist/maplibre-gl.css";

// Amplify の設定を読み込み
Amplify.configure(awsconfig);

function App() {
  useEffect(() => {
    createMap({
      container: "map", // An HTML Element or HTML element ID to render the map in https://maplibre.org/maplibre-gl-js-docs/api/map/
      center: [139.7097950782799, 35.67286387696665], // Office
      zoom: 14,
  })
  }, []);
  return (
    <div id="map" style={{height: '100vh'}}/>
  );
}

export default App;
