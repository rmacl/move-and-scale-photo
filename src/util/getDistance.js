
function getDistance(event) {

    let minX;
    let maxX;
    let minY;
    let maxY;

    if (event.nativeEvent.changedTouches[0].locationX > event.nativeEvent.changedTouches[1].locationX) {
        minX = event.nativeEvent.changedTouches[1].pageX;
        maxX = event.nativeEvent.changedTouches[0].pageX;
    } else {
        minX = event.nativeEvent.changedTouches[0].pageX;
        maxX = event.nativeEvent.changedTouches[1].pageX;
    }

    if (event.nativeEvent.changedTouches[0].locationY > event.nativeEvent.changedTouches[1].locationY) {
        minY = event.nativeEvent.changedTouches[1].pageY;
        maxY = event.nativeEvent.changedTouches[0].pageY;
    } else {
        minY = event.nativeEvent.changedTouches[0].pageY;
        maxY = event.nativeEvent.changedTouches[1].pageY;
    }

    let widthDistance = maxX - minX;
    let heightDistance = maxY - minY;

    return Math.sqrt(widthDistance ** 2 + heightDistance ** 2);
}

export default getDistance;
