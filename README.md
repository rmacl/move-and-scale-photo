# move-and-scale-photo
React native library implements 'move and scale' photo



You can implement move(drag) and scale(zoom in &  out) to any of your component.

| Prameter | Description |
| --- | --- |
| `<Image style = {} sorce{}>` | pass Image component an child props.  |



1. download and add import src/component/moveAndScale directory to your project folder.
2. import moveAndScale library 
```javascript
import MoveAndScale from '../component/moveAndScale';
```

3. call your MoveAndScale library with your Image child component.
```javascript
export default function ExampleTest(){
 
        return (
         <View style ={styles.container} >
         <MoveAndScale screenWidth={Dimensions.get('window').width}
                       screenHeight={Dimensions.get('window').height}
                   >
             <Image style={{width:300, height: 300}}
                   source={{uri: 'http://urphoto.url/img'}}/>
         </MoveAndScale>
       </View>
    );
}
```

![move_and_scale1](https://media.giphy.com/media/l0orZfzIotzwURSXt6/giphy.gif);
![move_and_scale](https://media.giphy.com/media/XfgPzEcq2wSuYgSOI8/giphy.gif);
