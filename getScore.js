function totalScore(enpoints){
    var totalRequests;
    var totalSavedTime;
    enpoints.map(function (endpoint) {
        endpoint.videos.map(function (video) {
            totalRequests += video.requests;
            totalSavedTime+= getEndpointScorePerVideo(video.requests, endpoint.latencyToDataCenter, video.currentLatency)
        })
    })
    return totalSavedTime/totalRequests;
}

function getEndpointScorePerVideo(numberOfRequest, latencyToDataCenter, currentLatency){
    return numberOfRequest * (latencyToDataCenter-currentLatency);
};


