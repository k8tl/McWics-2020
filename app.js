/*import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SafeAreaView from 'react-native-safe-area-view';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});
class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => alert('You tapped the boton!')}
        />
      </View>
    );
  }
}
class HomeScreen extends React.Component {
  static navigationOptions={
    title:'Welcome',
  };
  _onPressButton() {
    //alert('You tapped the button!')
    this.props.navigation.navigate('Profile')
  }
  render() {
    //const {navigate} = this.props.navigation;
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <SafeAreaView style={{ flex: 1 }}>
     <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <Text style={styles.welcome}> My Fridge </Text>
        <Text style={styles.instructions}>Track your fresh foods the day they sit in. Save Waste. </Text>
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <Button 
            onPress={() => this.props.navigation.navigate('Profile')}
            title="Press Me"
          />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
    </View>
    </SafeAreaView>
    
    );
  }
}
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen, },
  Profile: {screen: ProfileScreen},
},
{
  initialRouteName:'Home',
}
);
/*export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello World!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
      
    );
  }
}*/
/*export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
      <Image source={pic} style={{width: 400, height: 217}}/>
      </View>
    );
  }
}*/

/*class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}*/
/*class Blink extends Component {

  componentDidMount(){
    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  //state object
  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}*/

/*const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,

  },
  red: {
    color: 'red',
  },
});

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View >
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
      </View>
    );
  }
}*/
/*const App = createAppContainer(MainNavigator);
export default App;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 0,
    backgroundColor: 'powderblue',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 0,
    backgroundColor: 'skyblue',
  },
  buttonContainer: {
    backgroundColor: 'steelblue',

  },
});*/

import React, { Component } from 'react';
import {
 SafeAreaView,
 StyleSheet,
 ScrollView,
 View,
 Text,
 StatusBar,
 Button,
 TextInput,
 Image,
 TouchableHighlight,
 TouchableOpacity,
 TouchableNativeFeedback,
 TouchableWithoutFeedback
} from 'react-native';import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';
import AwesomeButton from 'react-native-really-awesome-button/src/themes/rick';
//import BounceIn from "@bit/formidablelabs.react-animations.bounce-in";
//import styled, { keyframes } from "styled-components";
import tupper from './tupperware2.png'


//const BounceInAnimation = keyframes`${BounceIn}`;
//const BounceInDiv = styled.div`
  //animation: infinite 5s ${BounceInAnimation};
//`;
class ThirdOne extends React.Component {
 render() {
   return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor:'powderblue'}}>
       <Image
          style={{width: 200, height: 200}}
          source={require('./grapes.png')}
        />

       <Text>Quantity: 1 </Text>

       <Text> Expiry Date: 16 days </Text>
     </View>
   );
 }
}class SecondOne extends React.Component {
 render() {
   return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor:'powderblue'}}>
       <Image
          style={{width: 200, height: 200}}
          source={require('./mangoes.png')}
        />

       <Text>Quantity: 3 </Text>

       <Text> Expiry Date: 12 days </Text>
     </View>
   );
 }
}
class AnothaOne extends React.Component {
 render() {
   return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor:'powderblue'}}>
       <Image
          style={{width: 200, height: 200}}
          source={require('./greenapple.png')}
        />

       <Text>Quantity: 4 </Text>

       <Text> Expiry Date: 5 days </Text>
     </View>
   );
 }
}
 
class ProfileScreen extends React.Component {
 render() {
   return (/*
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    
     <Text> Please enter your food item: </Text>
           <TextInput placeholder='Food Item' />
           <TextInput placeholder='Date of purchase'/>
       <View>
             <Button
               style={{padding: 40}}
               onPress={() => { alert('Food added!');}}
               title="Add"
               color='black'
             />
           </View>  
           </View>
     </View>

*/
<View style={styles.container}>
<Text style={styles.sectionDescription}> Please enter your food item: </Text>
<TextInput
  style={{height:40,
          paddingHorizontal: 40,
          marginLeft: 20,
          marginTop: 100,
          
}}
  placeholder='Food Item'
/> 

<TextInput style={{height:40,
paddingHorizontal: 40,
marginLeft: 20,
marginTop: 60,
marginBottom: 60,
borderColor:'black',
}}
placeholder='Date of purchase'
/>

<TextInput style={{height:40,
paddingHorizontal: 40,
marginLeft: 20,
marginTop: 10,
marginBottom: 60,
borderColor:'black',
}}
placeholder='Characteristics'
/>

<TextInput style={{height:40,
paddingHorizontal: 40,
marginLeft: 20,
marginTop: 10,
marginBottom: 60,
borderColor:'black',
}}
placeholder='Storage Method'
/>


<View style={styles.buttonContainer}>
  <AwesomeButton
    onPress={() => { alert('Your food will expire on Feburary 2nd 2020');
    this.props.navigation.navigate('Home');
    }} style = {styles.button2} 
  > ➩ </AwesomeButton>
</View>
</View>
   );
 }
}
 
 
class HomeScreen extends React.Component {
 static navigationOptions={
   title:'DiGi  Fridge',
 };
 _onPressButton() {
   //alert('You tapped the button!')
   this.props.navigation.navigate('Profile')
 }
 render() {
   //const {navigate} = this.props.navigation;
   return (
     
     // Try removing the `flex: 1` on the parent View.
     // The parent will not have dimensions, so the children can't expand.
     // What if you add `height: 300` instead of `flex: 1`?
    <View style={{flex: 1,backgroundColor: 'powderblue'}}>
  
       <Text style={styles.niceText}>YOUR DIGITAL FRIDGE</Text> 
 
       <View style={{flexDirection: "row"}}>
        <TouchableOpacity 
        activeOpacity={5.0}
        onPress={() => this.props.navigation.navigate('Apples')}>
          <Image 
          style={{marginLeft: 10, width: 100, height: 100}}
          source={require('./tupperware2.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity 
        activeOpacity={5.0}
        onPress={() => this.props.navigation.navigate('Mangoes')}>
          <Image 
          style={{marginLeft: 40, width: 100, height: 100}}
          source={require('./tupperware2.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity 
        activeOpacity={5.0}
        onPress={() => this.props.navigation.navigate('Grapes')}>
          <Image 
          style={{marginLeft: 40, width: 100, height: 100}}
          source={require('./tupperware2.png')}
          />
        </TouchableOpacity>

        </View>
        
        
            
 	<View style = {{flex:2, backgroundColor: 'skyblue',}}/>
       <View style={{flex: 2, backgroundColor: 'powderblue'}} />
       <AwesomeButton onPress={() => this.props.navigation.navigate('Manage')}  style = {styles.button}>
         + </AwesomeButton>
         <AwesomeButton onPress={() => this.props.navigation.navigate('Manage')}  style = {{marginLeft:320, marginBottom:15}}>
         - </AwesomeButton>


      
   </View>
  
   );
 }
}
class LoginScreen extends React.Component{
  static navigationOptions={
    title:' WELCOME ',
  };
  render(){
    return(
  
 
 
       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor:'powderblue'}}>
        <TouchableOpacity 
        activeOpacity={5.0}
        onPress={() => this.props.navigation.navigate('Home')}>
          <Image 
          style={{width: 400, height: 400}}
          source={require('./image1.png')}
          />
        </TouchableOpacity>
        </View>
        
    );
  }
}
const MainNavigator = createStackNavigator({
 Login:{screen: LoginScreen},
 Home: {screen: HomeScreen, },
 Manage: {screen: ProfileScreen},
 Apples: {screen: AnothaOne},
 Mangoes: {screen: SecondOne},
 Grapes: {screen: ThirdOne},
},
{
 initialRouteName:'Login',
}
);
 
const App = createAppContainer(MainNavigator);
export default App;
 
 
 
const styles = StyleSheet.create({
  button: {
    flexDirection: 'column',
    marginLeft: 15,
    marginBottom:-75,
    backgroundColor: 'powderblue',
    padding: 10,
  },
  button2: {
    textAlign:'center',
    marginLeft: 150,
    flexDirection: 'column',
    backgroundColor: 'powderblue',
    padding: 10,
  },
 welcome: {
  // fontFamily: 'Comic Sans',
   fontSize: 20,
   textAlign: 'center',
   margin: 0,
   backgroundColor: 'powderblue',
 },
 container: {
 	backgroundColor:'powderblue',
   flex: 1,
   marginLeft: 10,
   marginRight: 10,
   alignItems: "stretch",
   justifyContent: "center"
 },
 sectionDescription: {
  marginTop: 8,
  fontSize: 18,
  fontFamily: 'Helvetica',
  fontStyle: 'italic',
  textAlign: 'center',
  fontWeight: '400',
  color: Colors.dark,
},
scrollView: {
  backgroundColor: Colors.lighter,
    },
      niceText: {
      color: 'black',
      textAlign: 'center',
      fontStyle: 'italic',
      fontSize: 30,
      fontWeight: 'bold',
      fontFamily: 'Helvetica',
      marginBottom:20,
      marginTop: 10,
                                   
  },
});
