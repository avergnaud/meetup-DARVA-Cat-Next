// Helper function to calculate mean
function calculateMean(values) {
    const sum = values.reduce((a, b) => a + b, 0);
    return sum / values.length;
}

// Helper function to calculate median
function calculateMedian(values) {
    values.sort((a, b) => a - b);
    const mid = Math.floor(values.length / 2);
    if (values.length % 2 === 0) {
        return (values[mid - 1] + values[mid]) / 2;
    } else {
        return values[mid];
    }
}

function calculateStatsFor(requestsList, appname, metricname) {
    // Filter requests by app
    const filteredRequests = requestsList.filter(request => {
        return request.appname === appname
            && request.metricname == metricname
    });
    if (filteredRequests.length === 0) {
        return `No data found for appname: ${appname}, metricname: ${metricname}`;
    }
    // Extract the values from the filtered requests
    const values = filteredRequests.map(request => request.value);
    // Calculate mean and median
    const mean = calculateMean(values);
    const median = calculateMedian(values);
    return {
        'mean': mean,
        'median': median
    };
}

function calculateStats(requestsList, appnames, metricnames) {
    const returnValue = {};
    for(let appname of appnames) {
        returnValue[appname] = {};
        for(let metricname of metricnames) {
            returnValue[appname][metricname] = calculateStatsFor(requestsList, appname, metricname);
        }
    }
    return returnValue;
}

module.exports = {
    calculateStats
};