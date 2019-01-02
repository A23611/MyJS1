function hotelBooking(arrivals, departures, k) {
    let checked = [];
    let roomUsed = 1;
    for (let i = 0; i < arrivals.length; i++) {
        if (arrivals[i + 1] < departures[i]) {
            roomUsed += 1;
            checked.push(departures[i])
        }
        for (let j = 0; j < checked.length; j++) {
            if (checked[j] <= arrivals[i + 1]) {
                roomUsed -=1;
            }
        }
        if (roomUsed > k) {
            return false;
        }
    }
    return true;
}

var M = hotelBooking([1, 3, 5,7], [2, 6, 8,9], 1);
console.log(M);

//Cach 2

function hotelBookingPossible(arrival, depature, roomNeed) {
    let roomUse = 0;
    let i = 0;
    let j = 0;
    while (i < arrival.length && j < depature.length) {
        if (arrival[i] < depature[j]) {
            roomUse ++;
            i ++;
        } else {
            roomUse --;
            j ++;
        }
        if (roomUse > roomNeed) {
            return false;
        }
    }
    return true;
}

var N = hotelBookingPossible([1, 3, 5,7], [2, 6, 8,9], 1);
console.log(N);