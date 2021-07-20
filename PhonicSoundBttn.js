import * as React from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import { Audio } from 'expo-av';


export default class PhonicSoundButton extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            pressedButtonIndex:''
        }
    }
 
    playSound= async(soundchunk)=>{
        var soundlink='https://s3-whitehatjrcontent.whjr.online/phones/' +soundchunk+ '.mp3'

    await Audio.Sound.createAsync({uri:soundlink},{shouldPlay:true},);
    };



render()
{
    return(
        <TouchableOpacity
        style={ this.props.ButtonIndex === this.state.pressedButtonIndex ?
        [styles.chunkButton, {backgroundColor:"white"}] :
        [styles.chunkButton, {backgroundColor:"red"}]
    }
        onPress={()=>{
            this.setState({pressedButtonIndex:this.props.ButtonIndex})
            this.playSound(this.props.soundchunk);
        }}
        >
        <Text style={ this.props.ButtonIndex === this.state.pressedButtonIndex ?
        [styles.displayText, {color:"red"}] :
        [styles.displayText, {color:"white"}]}>
            {this.props.wordchunk}
        </Text>
        </TouchableOpacity>);
}

}


const styles = StyleSheet.create({
               
              
                chunkButton:{
                  width: '60%',
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  borderRadius: 10,
                  margin: 5,
                  backgroundColor: 'red'
                },
                displayText: {
                  textAlign: 'center',
                  fontSize: 30,
                  color: 'white'
                },
              });
              
              
              