import React, { useState, useEffect } from "react";
import "./style.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import { Icon } from "leaflet";
import { Box } from "@chakra-ui/layout";
import icon1 from "../../assets/covid19.svg";
const covidIcon = new Icon({
  iconUrl: icon1,
  iconSize: [25, 25],
});

const Map = ({ currentStateDetails, currentStateDetailsSetter }) => {
  const cases = useSelector((state) => state.cases);
  const [currentStateCode, currentStateCodeSetter] = useState(null);

  useEffect(() => {
    currentStateCodeSetter(currentStateDetails.statecode);
  }, [currentStateDetails]);
  return (
    <div className="map">
      <MapContainer
        center={[20.593683, 78.962883]}
        zoom={5}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />

        {cases.status === "fullfilled" &&
          cases.casesArray &&
          cases.casesArray.slice(1).map((eachData) => (
            <>
              <Marker
                key={eachData.statecode}
                position={[
                  eachData.position.latitude,
                  eachData.position.longitude,
                ]}
                eventHandlers={{
                  click: () => {
                    currentStateCodeSetter(eachData.statecode);
                    currentStateDetailsSetter(eachData);
                  },
                }}
                icon={covidIcon}
              />

              {currentStateCode === eachData.statecode && (
                <Popup
                  position={[
                    eachData.position.latitude,
                    eachData.position.longitude,
                  ]}
                  onClose={() => {
                    currentStateCodeSetter(null);
                  }}
                >
                  <Box>
                    <h1>
                      <strong>{eachData.state}</strong>
                    </h1>
                    <p>active: {eachData.active}</p>
                    <p>confirmed: {eachData.confirmed}</p>
                    <p>deaths: {eachData.deaths}</p>
                    <p>deltaconfirmed: {eachData.deltaconfirmed}</p>
                    <p>recovered: {eachData.recovered}</p>
                  </Box>
                </Popup>
              )}
            </>
          ))}
      </MapContainer>
    </div>
  );
};

export default Map;
