import React from "react"
import { ComposableMap, Geographies, Geography, Marker} from "react-simple-maps"

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"


// class MapChart extends React.Component {

//   constructor(props) {
//     super(props)
   
//   }

//   render() {
//     return (
//       <ComposableMap>
//         <Geographies geography={geoUrl}>
//           {({ geographies }) =>
//             geographies.map((geo) => (
//               <Geography
//                   key={geo.rsmKey}
//                   geography={geo}
//                   fill="#DDD"
//                   stroke="#FFF"
//                   />
//             ))
//           }
//         </Geographies>
//         <Marker coordinates={[props.longitude, props.latitude]}>
//           <circle r={8} fill="#F53" />
//         </Marker>
//       </ComposableMap>
//     )
//   }

// }

  
function MapChart(props) {
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
        <circle r={8} fill="#F53" />
      </Marker>
    </ComposableMap>
  )
}

export default MapChart;