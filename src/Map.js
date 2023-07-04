import React from "react"
import { ComposableMap, Geographies, Geography, Marker} from "react-simple-maps"

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

  
const MapChart = (props) =>{
  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#DDD"
                stroke="#FFF"
                />
          ))
        }
      </Geographies>
      <Marker coordinates={[props.longitude, props.latitude]}>
        <circle r={3} fill="#F53" />
      </Marker>
    </ComposableMap>
  )
}

export default MapChart;