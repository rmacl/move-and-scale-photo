import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImagePickerIOS  } from 'react-native';


export default function HomeScreen(props) {
    const { navigate } = props.navigation;

    function imagePickerLoad(){
        ImagePickerIOS.openSelectDialog(
          {showImages:true,showVideos:false,},
          (data) => navigate("MoveScale", { screen: "MoveScale", imageUrl : data}),
          () => {console.log('User canceled the action');});
    }

    return (
      <View style={styles.container}>
            <View style = {styles.imageContainer}>
            <TouchableOpacity onPress ={imagePickerLoad} >
                <View style = {styles.imageWapper}>
                  <Image
                    style={styles.imageButton}
                    source={require('../../img/code_review.png')}
                    />
                </View>
                <View style = {styles.textWapper}>
                  <View style = {styles.textButtonContainer}>
                  <Text style = {styles.textButtonInput}>EDIT</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer : {
      height : 150,
      width : 150,
      backgroundColor : 'white',
    },
    imageButton : {
      width : 150,
      height : 150,
      borderRadius : 75,
      backgroundColor : 'transparent'
    },
    imageContainer : {
      alignItems : 'center',
      backgroundColor : 'white',
  
    },
    textWapper : {
      width : 150,
      height : 30,
      backgroundColor : 'transparent',
      overflow :'hidden',
      justifyContent : 'flex-end',
    },
    textButtonContainer : {
      width : 150,
      height : 150,
      borderRadius : 75,
      backgroundColor : 'black',
      justifyContent : 'flex-end',
      alignItems : 'center',
    },
    imageWapper : {
      width: 150,
      height : 120,
      backgroundColor : 'transparent',
      overflow : 'hidden',
    },
    textButtonInput : {
      fontSize : 14,
      fontWeight : '200',
      color : 'white',
      marginBottom : 5,
    },
  });
  