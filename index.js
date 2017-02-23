fs = require('fs');
fs.readFile('./datasourche.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
  var arrayLineas = data.split('\n');
  console.log(arrayLineas);
  var config = arrayLineas[0].split(' ');
  var num_videos = config[0];
  var num_endpoints = config[1];
  var num_request = config[2];
  var num_caches = config[3];
  var cache_size = config[4];
  var videos = arrayLineas[1];
  var index = 1;
  var latences = [];
  var endpointsInfo = [];
  console.log(num_endpoints);
  for (var i = 0; i < num_endpoints; i++) {
      index = index + 1;
      var endpointConfig = arrayLineas[index].split(' ');
      console.log('endpointConfig', endpointConfig[0]);
      var cacheToEndpointNumber = endpointConfig[1];
      endpointsInfo[i] = {'latencesToCache':[], 'latencesToDataCenter':''};
      endpointsInfo[i].latencesToDataCenter = endpointConfig[0];
      var latencesToCaches = [];
      for (var j = 0; j < cacheToEndpointNumber; j++) {
        index = index + 1;
        latencesToCaches[j] = arrayLineas[index];
      }
      endpointsInfo[i].latencesToCache = latencesToCaches;
      console.log('endpointsInfo', endpointsInfo, index);
  }
  for (var i = 0; i < num_caches; i++) {
    latences[i] = arrayLineas[i+2];
  }
  var latencesDataCenter = arrayLineas[2+num_caches+1];
/*  var requestsVideosLatences =
  for (var i = 2+num_caches+1; i < arrayLineas.length; i++) {
    latences[i] = arrayLineas[i+2];
  }
*/
  console.log('num_videos', num_videos);
  console.log('num_endpoints', num_endpoints);
  console.log('num_request', num_request);
  console.log('num_caches', num_caches);
  console.log('cache_size', cache_size);
  console.log('videos', videos);
  console.log('latences', latences);
});
