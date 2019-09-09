
import React , { useState, useEffect  } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Dimensions  } from 'react-native';
//import { getImageSizeFitWidth } from '../imageCache';
import MoveAndScale from '../component/moveAndScale';

//const screenWidth = Dimensions.get('window').width;



export default function MoveScale(props){
    let imgLocation =  props.navigation.state.params.imageUrl;   
    // const [imgSize, setImgSize] = useState({width: 150, height : 150});



    // const imageSizeFit = async () => {getImageSizeFitWidth(imgLocation, screenWidth).then((response) => {setImgSize(response)})};
  
    // useEffect(()=> {
    //     imageSizeFit();
    // }, []);
    
        return (
         <View style ={styles.container} >
         <MoveAndScale screenWidth={Dimensions.get('window').width}
                       screenHeight={Dimensions.get('window').height}
                   >
             <Image style={{width:300, height: 300}}
                   source={{uri:imgLocation}}/>
         </MoveAndScale>
       </View>

        
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }
});
