import mapData from './mapData.service';

let locations = [];  


  const getLocations = () => {
return new Promise(resolve => {
    // simple caching mechanism
    if (locations.length) {
      resolve(locations);
    }
    else {
      setTimeout(() => {
        locations = mapData.fetchLocations();
        console.log("get locations fetch from locationData:",locations);
        resolve(locations);
      }, 500);
    }
  });
}



function getLocationById(locationId){
  return getLocations().then(locations => {
    const location = locations.find(location => locationId === location.id);
    return location;
  });
}

function updateLocationDb(updatedlocations){
//TBD later (on server)
}

function deleteLocation(location){ 
    // /// improve:
    // (1) delete just from inbox or just from sent 
    // (2)update in server and then bust cache
  console.log('Deleting the location:', location)
  var idx = locations.indexOf(location)
  locations.splice(idx, 1);
  console.log(locations)
}

function getNext(location) { /// TBD later (low priority)
    // select next in a cyclic way
    var idx = locations.indexOf(location);
    return (idx < locations.length-1)?
          locations[idx+1] : locations[0];
}

function saveLocation(location){
    var locationWithControls = location;
    locationWithControls.id=getUniqueId();;
    locationWithControls.date = Date.now();
    locations.unshift(locationWithControls);
    console.log('Location - saved');
  }

function getUniqueId(){
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return Math.random().toString(36).substr(2, 9);
}  


function mailsToShow(){
    let filtered
}

export default {
    getLocations,
    updateLocationDb,
    deleteLocation,
    saveLocation
}