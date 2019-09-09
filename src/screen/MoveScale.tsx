
import React , { useState, useEffect  } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Dimensions  } from 'react-native';
import MoveAndScale from '../component/moveAndScale';


export default function MoveScale(props){
    let imgLocation =  props.navigation.state.params.imageUrl;   
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
