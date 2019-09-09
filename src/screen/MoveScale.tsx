
import React  from 'react';
import { StyleSheet, View, Image, Dimensions  } from 'react-native';
import MoveAndScale from '../component/moveAndScale';


export default function MoveScale(props){
    console.log('d');
    let imgLocation =  props.navigation.state.params.imageUrl;   
        return (
         <View style ={styles.container} >
         <MoveAndScale screenWidth={400}
                       screenHeight={400}
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
