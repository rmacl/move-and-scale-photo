function getDistance(event) {
  const widthDistance =  Math.abs(event.nativeEvent.changedTouches[1].pageX - event.nativeEvent.changedTouches[0].pageX);
  const heightDistance = Math.abs(event.nativeEvent.changedTouches[1].pageY - event.nativeEvent.changedTouches[0].pageY);

  return Math.sqrt((widthDistance ** 2) + (heightDistance ** 2));
}

export default getDistance;
