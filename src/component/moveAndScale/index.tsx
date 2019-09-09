import React , { useState } from 'react';
import { View, Animated, PanResponder } from 'react-native';
import { prop } from './index_type';

const zoomSensitivity = 100;

export default function MoveAndScale(props : prop){
    let animatedPositionX = new Animated.Value(0);
    let animatedPositionY = new Animated.Value(0);
    let animatedScale = new Animated.Value(1);

    let [positionXY] = useState(new Animated.ValueXY());
    let [positionX, setPositionX] = useState(0);
    let [positionY, setPositionY] = useState(0);

    let [imageScale, setImageScale]= useState(1);
    let zoomCurrentDistance = 0;
    let zoomLastDistance = null;

    let centerDiffX = 0;
    let centerDiffY = 0;


    const animateConf = {
        transform: [
          {
            scale: imageScale
          },
          {
            translateX: positionXY.x
          },
          {
            translateY: positionXY.y
          }
        ]
      };
   
    const imgPanResponser = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gesture) => {     
            
   
            if(event.nativeEvent.changedTouches.length <= 1) {
        
               Animated.event([null, { dx: positionXY.x, dy: positionXY.y}])(event, gesture);

            } else{

                let centerX = (event.nativeEvent.changedTouches[0].pageX + event.nativeEvent.changedTouches[1].pageX) / 2;
                centerDiffX = centerX - props.screenWidth / 2;
      
                let centerY = (event.nativeEvent.changedTouches[0].pageY + event.nativeEvent.changedTouches[1].pageY) / 2;
                centerDiffY = centerY - props.screenHeight / 2;

                let distanceXY = getDistance(event);
                zoomCurrentDistance = Number(distanceXY.toFixed(1));
    
                if(zoomLastDistance !== null) {
                    let distanceDiff = (zoomCurrentDistance - zoomLastDistance) / zoomSensitivity;
                    let zoom = imageScale + distanceDiff;
    
                    let beforeScale = imageScale;
                    setImageScale(zoom);  
    
                    let diffScale = imageScale - beforeScale;
                    setPositionX(positionX -= (centerDiffX * diffScale) / imageScale);
                    setPositionY(positionY -= (centerDiffY * diffScale) / imageScale);
                  
                }
                zoomLastDistance = zoomCurrentDistance;

            }
  
        },
        onPanResponderRelease: (event) => {

            if(event.nativeEvent.changedTouches.length > 1) {
                Animated.parallel([
                    Animated.timing(animatedScale, {
                    toValue: imageScale,
                    duration: 100
                    }),
                    Animated.timing(animatedPositionX, {
                    toValue: positionX,
                    duration: 100
                    }),
                    Animated.timing(animatedPositionY, {
                    toValue: positionY,
                    duration: 100
                    })
                ]).start();
                }
             }      
        }
      )

    return(
    <Animated.View {...imgPanResponser.panHandlers} style={animateConf} >
        <View>
          {props.children}
        </View>
    </Animated.View>);
}

function getDistance(event) {
  const widthDistance =  Math.abs(event.nativeEvent.changedTouches[1].pageX - event.nativeEvent.changedTouches[0].pageX);
  const heightDistance = Math.abs(event.nativeEvent.changedTouches[1].pageY - event.nativeEvent.changedTouches[0].pageY);

  return Math.sqrt((widthDistance ** 2) + (heightDistance ** 2));
}