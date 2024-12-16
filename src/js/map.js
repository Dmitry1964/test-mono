import { branches } from "../shared/mock-data";


async function initMap() {
  await ymaps3.ready;

  const {YMap, YMapDefaultSchemeLayer, YMapCollection, YMapMarker, YMapDefaultFeaturesLayer} = ymaps3;

  const collection = new YMapCollection({});
  const markerElement = document.createElement('div');
  markerElement.className = 'marker';

  branches.forEach((item) => {
    collection.addChild(new YMapMarker({
      coordinates: [item.location.long, item.location.lat]
    }, markerElement.cloneNode(true)))
  })


  const map = new YMap(
      document.getElementById('map'),
      {
          location: {
              center: [44.516975, 48.707067],
              zoom: 4.6
          }
      }
  );


  map.addChild(new YMapDefaultSchemeLayer());
  map.addChild(new YMapDefaultFeaturesLayer());
  map.addChild(collection)
}

export {initMap}
