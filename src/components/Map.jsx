import React, { useEffect, useRef, useState } from 'react';
import { select, geoPath, geoOrthographic, scaleSequential, event, drag, min, max, interpolateRainbow, interpolateWarm} from 'd3';
import { useResizeObserver } from '../hooks/d3Hooks';

import mapData from '../data/World-map-lo-res.geo.json'

import { CircularProgress } from '@material-ui/core'; 

// const mapData = {  
//   "type": "FeatureCollection",
// "features": map.features.map(country => ({
//   ...country,
//   geometry: {
//     ...country.geometry,
//     coordinates: country.geometry.coordinates.map(item => {
//       return item.map(item => {
//         return item.map(item => item * 2)
//       })
//     })
//   }
// }))
// }
const Map = () => {

  const [clicked, setClicked] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [rotating, setRotating] = useState(false);

  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  const featureProp = 'name_len'
  
  useEffect(() => {
    if(!mapData.features) return;

    const svg = select(svgRef.current);

    const { width, height } = dimensions || wrapperRef.current.getBoundingClientRect();

    const minProp = min(mapData.features, feature => feature.properties[featureProp])
    const maxProp = max(mapData.features, feature => feature.properties[featureProp])


    
    const colorScale = scaleSequential()
      .domain([minProp, maxProp])
      .interpolator(interpolateWarm);

    const globePosition = [width / 2, height / 2];
    const globeScale = 1;
    const projection = geoOrthographic()
      .fitSize([width * globeScale, height * globeScale], mapData)
      .center([0, 0])
      .rotate([rotateX, rotateY, 0])
      .translate(globePosition)
      .precision(100);

    const pathGenerator = geoPath().projection(projection);

    const defs = svg.append('defs');
    const linearGradient = defs.append('linearGradient')
      .attr('id', 'linear-gradient')
      .attr('x1', '60%')
      .attr('y1', '30%')
      .attr('x2', '20%')
      .attr('y2', '90%');
    linearGradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#2493C3');
    linearGradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#2C4099');

    const drop_shadow = svg.append('defs').append('radialGradient')
      .attr('id', 'drop_shadow')
      .attr('cx', '50%')
      .attr('cy', '50%');
    drop_shadow.append('stop')
      .attr('offset', '20%').attr('stop-color', '#000')
      .attr('stop-opacity', '.5');
    drop_shadow.append('stop')
      .attr('offset', '100%').attr('stop-color', '#000')
      .attr('stop-opacity', '0');  

   svg
      .selectAll('ellipse')
      .data(['spot'])
      .join('ellipse')
      .attr('cx', globePosition[0] - (width / 20))
      .attr('cy', globePosition[1] + (height / 2.06))
      .attr('rx', projection.scale() * 1.1)
      .attr('ry', projection.scale() * .25)
      .attr('class', 'noclicks')
      .style('fill', 'url(#drop_shadow)');

    svg
      .selectAll('circle')
      .data(['spot'])
      .join('circle')
      .attr('cx', globePosition[0])
      .attr('cy', globePosition[1])
      .attr('r', projection.scale())
      .style('fill', 'url(#linear-gradient)');


    
    svg.call(drag()
      .on('start', () => { 
        setRotating(true);
        setClicked(true);
      })
      .on('drag', () => {
        const rotate = projection.rotate();
        const sensitivity = 50 / projection.scale();

        projection.rotate([
          rotate[0] + event.dx * sensitivity, 
          rotate[1] - event.dy * sensitivity,
        ]);
        setRotateX(rotate[0] + event.dx * sensitivity);
        setRotateY(rotate[1] - event.dy * sensitivity);

        const path = geoPath().projection(projection);
        svg.selectAll('path').attr('d', path);
      })
      .on('end', () => { setRotating(false);})
      
    );

    const map = svg
      .selectAll('.country')
      .data(mapData.features)
      .join('path')
      .on('click', (feature) => {
        

      })
      .attr('class', 'country')
    
    if(rotating) {
      map
        .attr('fill', country => country.properties[featureProp] 
          ? colorScale(country.properties[featureProp])
          : '#dfe2e8'
        )
        .attr('d', country => pathGenerator(country));  
    } else {
      map
        .transition()
        .attr('fill', country => country.properties[featureProp] 
          ? colorScale(country.properties[featureProp])
          : '#dfe2e8'
        )
        .attr('d', country => pathGenerator(country));
    }
      
  }, [dimensions, rotateX, rotateY, rotating]);

  return (<>    
      <section item xs={9} sm={8}ref={wrapperRef} className='Map' >
        { !mapData.features 
          ? <CircularProgress /> 
          : (<> 
            {!clicked && <aside className='dragLabel'>Click and drag to rotate</aside>}
            <svg ref={svgRef} className='svgStyle'></svg>
          </>)
        }
        </section>
  </>  
  );
};

export default Map;
