import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Icon, ScrollView, TouchableHighlight, TouchableOpacity, } from 'react-native';
import { Appbar, Card, Title, Button, Paragraph} from 'react-native-paper';
import { Ionicons, FontAwesome, FontAwesome5} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      {/* <Tab.Icon icon="magnify"></Tab.Icon> */}
      <Tab.Screen style={{fontSize: 20,}} name="Home" component={HomeScreen} options={{
          tabBarLabel: () => (
            <Text style={{color: 'black', fontSize: 15}}>Home</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color="black" size={20} />
          ),
        }} />
      <Tab.Screen style={{fontSize: 20,}} name="History" component={HistoryScreen} options={{
          tabBarLabel: () => (
            <Text style={{color: 'black', fontSize: 15}}>History</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="history" size={20} color="black" />
          ),
        }} />
    </Tab.Navigator>
  );
}

function HistoryScreen(){
  return(
    <View>
      {/* <Text>INI RIWAYAT</Text>
       */}
       <Appbar.Header style={{backgroundColor: '#8d0000'}}>
        <Appbar.BackAction />
        <Appbar.Content title="Riwayat Transaksi" subtitle="cuanku" />
        {/* <Appbar.Action icon="magnify" /> */}
        {/* <Appbar.Action icon="dots-vertical"/> */}
      </Appbar.Header>
      <View style={{justifyContent: 'space-evenly', paddingTop: 10, paddingBottom: 10, backgroundColor: '#8d0000', flexDirection: 'row'}}>
        <Text style={{ fontSize: 20, color: 'white'}}>Berlangsung</Text>
        <Text style={{ fontSize: 20, color: 'white'}}>Selesai</Text>
      </View>
      <View style={{paddingLeft: 20, paddingRight: 20, paddingTop: 20, paddingBottom: 20}}>
      <Card style={{backgroundColor: '#8d0000', color:'white'}}>
        <Card.Title titleStyle={{color: 'white'}} subtitleStyle={{color: 'white'}} title="Cuanku Statement" subtitle="Klik disini untuk lihat detail transaksi"></Card.Title>
      </Card> 
      </View>
      <View>
      <View>
      <Card cardStyle={{elevation:1, color:'white', shadowColor: 'rgba(0,0,0, .2)',
      shadowOffset: { height: 0, width: 0 },
      shadowOpacity: 0, //default is 1
      shadowRadius: 0}}>
        {/* <Card.Title titleStyle={{color: 'white'}} subtitleStyle={{color: 'white'}} title="Cuanku Statement" subtitle="Klik disini untuk lihat detail transaksi"></Card.Title> */}
       <Card.Content>
         <View style={{flexDirection: 'row', alignItems: 'center'}}>
         <FontAwesome5 style={{paddingRight: 10}} name="coins" size={20} color="black" />
         <View>
         <Title style={{color: 'black'}}>Pulsa</Title>
         <Paragraph style={{color: 'black'}}>08979654xxx</Paragraph>
         </View>
         <Text style={{paddingLeft: 145, fontSize: 20}}>Rp. 15.000</Text>
         </View>
       </Card.Content>
      </Card> 
      </View>
      <View>
      <Card cardStyle={{elevation:1, color:'white', shadowColor: 'rgba(0,0,0, .2)',
      shadowOffset: { height: 0, width: 0 },
      shadowOpacity: 0, //default is 1
      shadowRadius: 0}}>
        {/* <Card.Title titleStyle={{color: 'white'}} subtitleStyle={{color: 'white'}} title="Cuanku Statement" subtitle="Klik disini untuk lihat detail transaksi"></Card.Title> */}
       <Card.Content>
         <View style={{flexDirection: 'row', alignItems: 'center'}}>
         <FontAwesome5 style={{paddingRight: 10}} name="coins" size={20} color="black" />
         <View>
         <Title style={{color: 'black'}}>Top up</Title>
         <Paragraph style={{color: 'black'}}>Cuanku top up</Paragraph>
         </View>
         <Text style={{paddingLeft: 140, fontSize: 20}}>Rp. 25.000</Text>
         </View>
       </Card.Content>
      </Card> 
      </View>
      <View>
      <Card cardStyle={{elevation:1, color:'white', shadowColor: 'rgba(0,0,0, .2)',
      shadowOffset: { height: 0, width: 0 },
      shadowOpacity: 0, //default is 1
      shadowRadius: 0}}>
        {/* <Card.Title titleStyle={{color: 'white'}} subtitleStyle={{color: 'white'}} title="Cuanku Statement" subtitle="Klik disini untuk lihat detail transaksi"></Card.Title> */}
       <Card.Content>
         <View style={{flexDirection: 'row', alignItems: 'center'}}>
         <FontAwesome5 style={{paddingRight: 10}} name="coins" size={20} color="black" />
         <View>
         <Title style={{color: 'black'}}>Pulsa</Title>
         <Paragraph style={{color: 'black'}}>08979654xxx</Paragraph>
         </View>
         <Text style={{paddingLeft: 145, fontSize: 20}}>Rp. 5.000</Text>
         </View>
       </Card.Content>
      </Card> 
      </View>
      <View>
      <Card cardStyle={{elevation:1, color:'white', shadowColor: 'rgba(0,0,0, .2)',
      shadowOffset: { height: 0, width: 0 },
      shadowOpacity: 0, //default is 1
      shadowRadius: 0}}>
        {/* <Card.Title titleStyle={{color: 'white'}} subtitleStyle={{color: 'white'}} title="Cuanku Statement" subtitle="Klik disini untuk lihat detail transaksi"></Card.Title> */}
       <Card.Content>
         <View style={{flexDirection: 'row', alignItems: 'center'}}>
         <FontAwesome5 style={{paddingRight: 10}} name="coins" size={20} color="black" />
         <View>
         <Title style={{color: 'black'}}>Ask Money</Title>
         <Paragraph style={{color: 'black'}}>Cuanku ask money</Paragraph>
         </View>
         <Text style={{paddingLeft: 115, fontSize: 20}}>Rp. 115.000</Text>
         </View>
       </Card.Content>
      </Card> 
      </View>
      <View>
      <Card cardStyle={{elevation:1, color:'white', shadowColor: 'rgba(0,0,0, .2)',
      shadowOffset: { height: 0, width: 0 },
      shadowOpacity: 0, //default is 1
      shadowRadius: 0}}>
        {/* <Card.Title titleStyle={{color: 'white'}} subtitleStyle={{color: 'white'}} title="Cuanku Statement" subtitle="Klik disini untuk lihat detail transaksi"></Card.Title> */}
       <Card.Content>
         <View style={{flexDirection: 'row', alignItems: 'center'}}>
         <FontAwesome5 style={{paddingRight: 10}} name="coins" size={20} color="black" />
         <View>
         <Title style={{color: 'black'}}>Send Money</Title>
         <Paragraph style={{color: 'black'}}>Cuanku send money</Paragraph>
         </View>
         <Text style={{paddingLeft: 110, fontSize: 20}}>Rp. 250.000</Text>
         </View>
       </Card.Content>
      </Card> 
      </View>
      <View>
      <Card cardStyle={{elevation:1, color:'white', shadowColor: 'rgba(0,0,0, .2)',
      shadowOffset: { height: 0, width: 0 },
      shadowOpacity: 0, //default is 1
      shadowRadius: 0}}>
        {/* <Card.Title titleStyle={{color: 'white'}} subtitleStyle={{color: 'white'}} title="Cuanku Statement" subtitle="Klik disini untuk lihat detail transaksi"></Card.Title> */}
       <Card.Content>
         <View style={{flexDirection: 'row', alignItems: 'center'}}>
         <FontAwesome5 style={{paddingRight: 10}} name="coins" size={20} color="black" />
         <View>
         <Title style={{color: 'black'}}>Top Up</Title>
         <Paragraph style={{color: 'black'}}>Cuanku Top up</Paragraph>
         </View>
         <Text style={{paddingLeft: 135, fontSize: 20}}>Rp. 515.000</Text>
         </View>
       </Card.Content>
      </Card> 
      </View>
      <View>
      <Card cardStyle={{elevation:1, color:'white', shadowColor: 'rgba(0,0,0, .2)',
      shadowOffset: { height: 0, width: 0 },
      shadowOpacity: 0, //default is 1
      shadowRadius: 0}}>
        {/* <Card.Title titleStyle={{color: 'white'}} subtitleStyle={{color: 'white'}} title="Cuanku Statement" subtitle="Klik disini untuk lihat detail transaksi"></Card.Title> */}
       <Card.Content>
         <View style={{flexDirection: 'row', alignItems: 'center'}}>
         <FontAwesome5 style={{paddingRight: 10}} name="coins" size={20} color="black" />
         <View>
         <Title style={{color: 'black'}}>Cuanku Statement</Title>
         <Paragraph style={{color: 'black'}}>Cuanku Statement</Paragraph>
         </View>
         </View>
       </Card.Content>
      </Card> 
      </View>
      </View>
    </View>
  );
}

function HomeScreen(){
  return(
    <View style={styles.container}>
      {/* <Appbar.Header style={{ backgroundColor: 'transparent' }}>
       <Appbar.Action icon={({ size, color }) => (
    <Image
      source={require('./assets/cuanku_icon_white.png')}
      style={{ width: 10, height: 10, tintColor: color }}
    />
  )}/>
      <Appbar.Content title="Title" subtitle="Subtitle" />
      <Appbar.Action icon="magnify"/>
      <Appbar.Action icon="dots-vertical" />
    </Appbar.Header> */}
      <StatusBar backgroundColor="#8B0000" style="light" />
      <View style={styles.view1}>
        <View style={styles.appbar}>
          <Image source={require('./assets/cuanku_icon_white.png')} color="white" style={{ width: 40, height: 40, resizeMode: 'contain'}} />
          <Text style={{color: 'white', fontSize: 20, paddingRight: 5}}>Rp</Text>
          <Text style={{color: 'white', fontSize: 20, paddingRight: 10}}>6.300</Text>
          {/* <Ionicons name="wallet" color="white" size={20}></Ionicons> */}
          <Image source={require('./assets/credit-card-1.gif')} color="white" style={{ width: 30, height: 30, resizeMode: 'contain'}} />
        </View>
        <View style={styles.menu2}>
          <View style={{alignItems: 'center'}}>
              <Ionicons name="scan-sharp" color="white" size={30}></Ionicons>
              <Text style={{color: 'white', fontSize: 15, paddingTop: 3}}>Scan</Text>
          </View>
          <View style={{alignItems: 'center'}}>
              <Ionicons name="ios-add-circle-outline" color="white" size={30}></Ionicons>
              <Text style={{color: 'white', fontSize: 15, paddingTop: 3}}>Top Up</Text>
          </View>
          <View style={{alignItems: 'center'}}>
              <Image source={require('./assets/SEND.png')} color="white" style={{ width: 30, height: 30, resizeMode: 'contain'}} />
              <Text style={{color: 'white', fontSize: 15, paddingTop: 3,}}>Send</Text>
          </View>
          <View style={{alignItems: 'center'}}>
              <Image source={require('./assets/receive.png')} color="white" style={{ width: 30, height: 30, resizeMode: 'contain'}} />
              <Text style={{color: 'white', fontSize: 15, paddingTop: 3}}>Ask</Text>
          </View>
        </View>
      </View>
      <View style={styles.card}>
      <Card>
          <View  style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 80, paddingRight: 80}}>
           <Image source={require('./assets/bank.png')} color="white" style={{ width: 40, height: 40, resizeMode: 'contain'}} />
           <Card.Title title="Transfer via Bank" subtitle="Kamu bisa kirim via bank..." style={{alignItems: 'center', justifyContent: 'center'}} />
           <Button color="black">Kirim</Button>
          </View>
          
        <Card.Content>
           <View  style={{flexDirection: 'row', justifyContent: 'space-between',  paddingTop: 15}}>
             <View style={{justifyContent: 'center', alignItems: 'center'}}>
             <Image source={require('./assets/pulsa.png')} color="white" style={{ width: 30, height: 30, resizeMode: 'contain'}} />
             <Text style={{paddingTop: 5}}>Pulsa & Data</Text>
             {/* <Text>Data</Text> */}
             </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image source={require('./assets/air.png')} color="white" style={{ width: 30, height: 30, resizeMode: 'contain'}} />
              <Text style={{paddingTop: 5}}>Air</Text>
              </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
             <Image source={require('./assets/gold.png')} color="white" style={{ width: 30, height: 30, resizeMode: 'contain'}} />
             <Text style={{paddingTop: 5}}>Emas</Text>
           </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
             <Image source={require('./assets/shield.png')} color="white" style={{ width: 30, height: 30, resizeMode: 'contain'}} />
             <Text style={{paddingTop: 5}}>Cuan Siaga</Text>
           </View>
           </View>
           <View  style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
           <Image source={require('./assets/toko.png')} color="white" style={{ width: 30, height: 30, resizeMode: 'contain'}} />
           <Text style={{paddingTop: 5}}>Cuan Bisnis</Text>
           </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
           <Image source={require('./assets/listrik.png')} color="white" style={{ width: 30, height: 30, resizeMode: 'contain'}} />
           <Text style={{paddingTop: 5}}>Listrik</Text>
           </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
           <Image source={require('./assets/internet.png')} color="white" style={{ width: 30, height: 30, resizeMode: 'contain'}} />
           <Text style={{paddingTop: 5}}>Internet</Text>
           </View>
           <View style={{justifyContent: 'center', alignItems: 'center'}}>
           <Image source={require('./assets/more.png')} color="white" style={{ width: 30, height: 30, resizeMode: 'contain'}} />
           <Text style={{paddingTop: 5}}>Lebih Banyak</Text>
           </View>
          </View>
        </Card.Content>
        {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
        {/* <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions> */}
      </Card>
      </View>
      {/* <View style={styles.overlay}>

      </View> */}
      {/* <View> */}
         <View style={styles.view2}>
            {/* <Image source={require('./assets/cuanku_logo_fix.png')} style={{ width: 50, height: 50 }} /> */}
            <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 20, paddingLeft: 20, paddingTop: 15}}>What's New</Text>
            <Text style={{fontSize: 12, paddingLeft: 20,}}>The best news of the week!</Text>
            </View>
            <Button style={{fontSize: 12, paddingRight: 20, paddingTop: 15}}>Lihat Promo</Button>
          </View>
         {/* <Card.Cover style={{paddingTop: 70}} source={{ uri: 'https://picsum.photos/700' }} /> */}
      {/* </View> */}
      <View style={styles.view3}>
         <Card.Cover style={{paddingBottom: 10}} source={{ uri: 'https://picsum.photos/700' }} />
         <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        {/* <Image source={require('./assets/cuanku_logo_fix.png')} style={{ width: 50, height: 50 }} /> */}
        {/* <Text>INI APP</Text> */}
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  view1: {
    flex: 1,
    backgroundColor: "#8D0000",
    // paddingBottom: 20
    // flexDirection: 'row', 
    // justifyContent: 'space-between'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  appbar: {
    // flex: 1,
    paddingTop: 5,
    paddingLeft: 5,
    backgroundColor: "#8D0000",
    flexDirection: 'row', 
    // justifyContent: 'space-between'
    alignItems: 'center',
    // justifyContent: 'center',
  },
  menu2: {
    // flex: 1,
    paddingTop: 10,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 40,
    backgroundColor: "#8D0000",
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  menu2text: {
    // flex: 1,
    paddingTop: 10,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: "#8D0000",
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  card: {
    // backgroundColor: "#FFFFFf",
    paddingRight: 20,
    paddingTop: 40,
    paddingLeft: 20,
    // paddingBottom: 20,
  },
  // overlay: {
  //   flex: 1,
  //   backgroundColor: 'black', 
  //   opacity: 0.7,
  //   width: 200, 
  //   height: 360, 
  //   justifyContent: 'center', 
  //   alignItems: 'center', 
  //   position: 'absolute', 
  //   top: 50, 
  //   left: 50
  //   // alignItems: 'center',
  //   // justifyContent: 'center',
  // },
  view2: {
    flex: 1,
    // backgroundColor: '#fafa'
    // alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  view3: {
    flex: 3,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  containerPulsa: {
        backgroundColor:'#118eea',
        height: 90
    },
    containerFlexPulsa: {
        flexDirection: 'row',
        height: 92,
        paddingBottom: 20
    },
    containerImagePulsa: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerTextPulsa: {
        width: 170,
        justifyContent: 'center'
    },
    containerButtonBeli: {
        width: 125,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2
    },
    containerImageService: {
        flexDirection: 'row',
        height: '55%'
    },
    containerImageService2: {
        flexDirection: 'row',
        flex: 1
    },
    containerPromo: {
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center'
    },
    containerTextPromo: {
        flex: 1
    },
    containerHotPromo: {
        marginTop: 12
    },
    containerArrow: {
        width: 30,
        height: 30,
        borderRadius: 20,
        position: 'absolute',
        top: '84%',
        right: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#118eea'
    },
    containerNearby: {
        height: 90,
        backgroundColor: '#eff8ff',
        marginHorizontal: 15,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6, borderColor: '#e3e3e3'
    },
    topCard: {
        backgroundColor: '#FFF',
        marginHorizontal: 15,
        height: 90,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#e3e3e3',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6    
    },
    bottomCard:{
        backgroundColor: '#FFF',
        marginHorizontal: 15,
        height: 184,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        borderColor: '#e3e3e3'
    },
    cardPromo: {
        backgroundColor: '#FFF',
        justifyContent: 'center',
        marginHorizontal: 15,
        marginTop: 15,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#e3e3e3',
        height: 55
    },
    cardNearby: {
        backgroundColor: '#FFF',
        justifyContent: 'center',
        marginHorizontal: 15,
        marginTop: 15,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#e3e3e3',
        height: 75
    },
    bannerPromo: {
        marginHorizontal: 15,
        height: 99,
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#e3e3e3',
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6
    },
    iconDana: {
        width: 24,
        height: 24
    },
    iconChart: {
        width: 33,
        height: 33
    },
    iconTop: {
        width: 40,
        height: 40,
        marginHorizontal: 28,
        marginBottom: 3
    },
    iconMid: {
        width: 38,
        height: 38,
        marginHorizontal: 28,
        marginBottom: 10
    },
    imagePromo: {
        height: 97,
        width: 378,
        alignSelf: 'center',
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6
    },
    imagePulsa: {
        width: 32,
        height: 47
    },
    imageHotPromo: {
        height: 86,
        width: 378,
        alignSelf: 'center',
        borderRadius: 6
    },
    imageArrow:{
        width: 18,
        height: 18
    },
    imageNear: {
        marginTop: 13,
        marginHorizontal: 15,
        width: 43,
        height: 43,
        alignItems:'center'
    },
    textIcon: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 12
    },
    textMid: {
        color: '#313131',
        fontSize: 12
    },
    textRp: {
        marginLeft: 9,
        color: '#a2d8fb'
    },
    textNominal: {
        marginLeft: 9,
        fontWeight: 'bold',
        fontSize: 17,
        color: '#FFF'
    },
    textPulsa: {
        fontWeight: '900',
        fontSize: 16
    },
    textBeliPulsa: {
        fontSize: 12,
        color: '#fb8b01'
    },
    textBeli: {
        color: '#FFF',
        fontSize: 12
    },
    textAdaPromo: {
        fontWeight: 'bold'
    },
    textHidupLebih: {
        fontSize: 12,
        marginTop: 3,
        color: '#313131'
    },
    textLihatSemua: {
        color: '#118eea',
        fontSize: 12,
        fontWeight: 'bold'
    },
    textNearby: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 5
    },
    textNear: {
        fontSize: 12,
        color: '#313131',
        alignSelf:'center',
        paddingTop: 5
    },
    buttonBeli: {
        backgroundColor: '#118eea',
        width: 92,
        height: 37,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonLihatSemua: {
        backgroundColor: '#FFF',
        width: 89,
        height: 35,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#118eea',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
