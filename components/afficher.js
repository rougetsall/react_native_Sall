import React, {components} from 'react';
import { StyleSheet,View,ScrollView, TextInput,Text, InputAccessoryView, Button,Image } from 'react-native';

  
  
export default class Home extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {

            calls: [
                {
                    name: "son",
                    relation:"Marty McFly",
                    images:require("/Users/rougetsall/Desktop/intergration/AwesomeProject/image/image9.png"),
                },
                {
                    name: "Wife",
                    relation:"Glados Douglas",
                    images:require("/Users/rougetsall/Desktop/intergration/AwesomeProject/image/image10.png"),
                },
                {
                    name: "Daughter",
                    relation:"Clara Oswald",
                    images:require("/Users/rougetsall/Desktop/intergration/AwesomeProject/image/image11.png"),
                
                },
                {
                    name: "Brother",
                    relation:"Leonard Hofstadter",
                    images:require("/Users/rougetsall/Desktop/intergration/AwesomeProject/image/image12.png"),
                
                }
            ],
           dates:[{
                    nombre: "5",
                    jour:"Tue"
                 },
                 {
                    nombre: "6",
                    jour:"Wed"
                 },
                {
                nombre: "7",
                jour:"Fri"
                },
                {
                nombre: "8",
                jour:"Sat"
                },
                {
                    nombre: "9",
                    jour:"Sun"
                }
            ]
        };

        
      }
      
      
    render() {
   
      return (
        <ScrollView style={style.scrollView}>
            <View style={style.header}>
                <Text style={style.title}>John Doe</Text>
                <Image
                    style={style.image1}
                    source={require("/Users/rougetsall/Desktop/intergration/AwesomeProject/image/image1.png")}
                    />
            </View>
            
            <Text style={style.title2}> ID:Q5372652A</Text>
            <View style={style.calendrie}>
            {this.state.dates.map((e,i) =>{
                return(
                    <View style={[style.tue, i==1? style.wed:null]}>
                        <View style={[i==0? style.point1:null]}>
                        </View>
                        <Text style={style.nombre}>
                            {e.nombre}
                        </Text>
                        <Text style={style.tue1}>
                        {e.jour}
                        </Text>
                   </View>
                )})}
                
               
           </View>
            <View style={style.content}>
                <View style={style.taches}>
                    <Image
                        style={style.image2}
                        source={require("/Users/rougetsall/Desktop/intergration/AwesomeProject/image/image2.png")}
                    />
                    <Text style={style.taches1}>Vous avez complété 75 %</Text>
                    <Text style={style.taches2}>de vos tâches cette semaine</Text>
                </View>
                <View style={style.agenda}>
                    <View style={style.medicine}>
                        <Image
                            style={style.image3}
                            source={require("/Users/rougetsall/Desktop/intergration/AwesomeProject/image/image3.png")}
                        />
                        <Text style={style.medicine1}>Medicine</Text>
                        <Text style={style.medicine2}>9 upcoming</Text>
                    </View>
                    <View style={style.medicine}>
                    <Image
                            style={style.image3}
                            source={require("/Users/rougetsall/Desktop/intergration/AwesomeProject/image/image4.png")}
                        />
                        <Text style={style.medicine1}>Reminders</Text>
                        <Text style={style.medicine2}>3 upcoming</Text>
                    </View>
                </View>
                <View style={style.agenda1}>
                    <View style={style.medicine}>
                        <Image
                            style={style.image3}
                            source={require("/Users/rougetsall/Desktop/intergration/AwesomeProject/image/image5.png")}
                        />
                        <Text style={style.medicine1}>Doctor visits</Text>
                        <Text style={style.medicine2}>1 upcoming</Text>
                    </View>
                    <View style={style.medicine}>
                    <Image
                            style={style.image3}
                            source={require("/Users/rougetsall/Desktop/intergration/AwesomeProject/image/image6.png")}
                        />
                        <Text style={style.medicine1}>Calls</Text>
                        <Text style={style.medicine2}>3 upcoming</Text>
                    </View>
                </View>
                <View style={style.visite} >
                    <Text style={style.visite1}>Visites effectueés ce mois ci</Text>
                    <View style={style.visite2}>
                        <View style={style.visite3}>

                        </View>
                    </View>
                </View>
                <View style={style.family} >
                    <View style={style.family1} >
                      <Text style={style.family2} >Family</Text>
                      <Text style={style.family3} >
                          Contact with your family
                      </Text>
                    </View>
                 
                    <View style={style.famil4}>
                    <Image
                            style={style.family5}
                            source={require("/Users/rougetsall/Desktop/intergration/AwesomeProject/image/image7.png")}
                        />
                    </View>
                </View>
            
            </View>
            <View style={style.all}>
                <Text style={style.all1}>All</Text><Text style={style.all2}>Loved</Text><Text style={style.all2}>Usefull</Text><Text style={style.all2}>Close</Text>
                
            </View>
            <View style={style.barre}>
                <View style={style.barre1}></View>
            </View>
        
            {this.state.calls.map((e) =>{
                return(
                    <View>
                        <View style={style.call}>
                            <View style={style.call1}>
                                <View>
                                    <Image
                                    style={style.image8}
                                    source={e.images}
                                    />
                                </View>
                                <View >
                                    <Text style={style.call2}>{e.name}</Text>
                                    <Text style={style.call3}>{e.relation}</Text>
                                </View>
                            </View>
                            <View>
                                <Image
                                    style={style.image9}
                                    source={require("/Users/rougetsall/Desktop/intergration/AwesomeProject/image/image8.png")}
                                    />

                            </View>
                        </View>
                        <View style={style.barre}>
                        </View>

                    </View>
                )
            })}

       
        </ScrollView>
       
        
        )

    }
  }
  const style = StyleSheet.create({
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    title:{
        fontSize:25,
        marginLeft:110,
        width:150,
        color: 'black',
        fontWeight: 'bold',
      },
      calendrie:{
      marginTop:50,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-around'
      },
    tue:{
        backgroundColor:'#EAE8E8',
        width:65,
        height:90,
        borderRadius:10,

    },
    point1:{
     width:10,
     height:10,
     backgroundColor:"#FE4B8A",
     borderRadius:20,
     marginLeft:45,
     marginTop:5

    },
    point:{
       display:'none'
       },

    tue1:{
        fontSize:20,
        marginLeft:20,
        marginTop:5,
    },
    wed:{
        backgroundColor:'#28B67B',
        width:65,
        height:90,
        borderRadius:10,
       
      
    },
    wed1:{
        fontSize:20,
        marginLeft:20,
        marginTop:5,
        color:'#F9FCFA',
    },
    nombre:{
        fontSize:29,
        fontWeight: 'bold',
        marginLeft:20,
        marginTop:10,
    },
    scrollView:{
        marginTop:80,
        marginLeft:10,
        height:3000,
    },
    title2:{
        color: '#D1CECE',
        marginLeft:150,
        marginTop:7,
        fontSize:10,
    },
    content:{
        backgroundColor:'#DDE0DE',
        height:730,
        marginTop:100,
    },  
    taches:{
        backgroundColor:'#28B67B',
        width:390,
        height:80,
        marginTop:-30,
        marginLeft:8,
        borderRadius:10,
        
    },
    taches1:{
        color:'#F9FCFA',
        fontSize:14, 
        marginTop:30,
        marginLeft:195,
    },
    taches2:{
        color:'#F9FCFA',
        fontSize:14,
        marginLeft:195,
    },
    image2:{
     position:'absolute',
     width:160,
     height:140,
     marginLeft:10,
     marginTop:-60,
    },
    medicine:{
        backgroundColor:'#F9FCFA',
        width:150,
        height:170,
        borderRadius:10,
    },
    agenda:{
      width:330,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-around',
      marginTop:60,
      marginLeft:35,
    },
    agenda1:{
        width:330,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:40,
        marginLeft:35,
      },
    medicine1:{
      fontSize:25,
      marginTop:65,
      marginLeft:10,
    },
    medicine2:{
        fontSize:12,
        color:'#8F9390',
        marginLeft:10,
    },
    image3:{
        width:30,
        height:40,
        marginLeft:15,
        marginTop:10,
    },
    visite:{
        width:360,
        height:75,
        backgroundColor:'#28B67B',
        marginTop:50,  
        marginLeft:15,
        borderRadius:10,
    },
    visite1:{
      color:'#fff',
      fontSize:16,
      marginTop:15,
      marginLeft:20
    },
    visite2:{
        width:325,
        height:8, 
        backgroundColor:'#fff',
        marginLeft:15,
        marginTop:12 ,
        borderRadius:20,

    },
    visite3:{
        width:255,
        height:8,
        backgroundColor:'#FACE3E',
        borderRadius:20,
    },
    family:{
        width:350,
        marginTop:55,
        marginLeft:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'

    },
    family2:{
        fontSize:22,
        fontWeight: 'bold',
    },
    family3:{
        fontSize:15,
       color:'#A4A8AC',
       marginTop:2,
    },
    family5:{
      marginTop:5,
      width:30,
      height:30,
      borderRadius:10,
    },
    all:{
        marginTop:30,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
       
    },
    all1:{
        color:'#424243',
        fontSize:20,
        fontWeight: 'bold'

    },
    all2:{
        color:'#A5A9AC',
        fontSize:20,
        fontWeight: 'bold'
    },
    barre:{
        width:370,
        height:2, 
        backgroundColor:'#E4E4E4',
        marginLeft:15,
        marginTop:12 ,
        borderRadius:20,

    },
    barre3:{
        width:370,
        height:2, 
        backgroundColor:'black',
        marginLeft:15,
        marginTop:12 ,
        borderRadius:20,

    },
    barre1:{
        width:17,
        height:6,
        backgroundColor:'#314E2C',
        borderRadius:20,
        marginLeft:17,
        marginTop:-3
    },
    call:{
        width:390,
        marginTop:30,
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        marginLeft:4

    },
    call1:{
        width:190,
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        marginLeft:10

    },
    image8:{
        width:70,
        height:70
    },
    call2:{
        fontSize:18,
        color:'#A4A8AC',
        marginTop:10,
        fontWeight: 'bold'
    },
    call3:{
        fontSize:20,
        fontWeight: 'bold',
        color:'#314E2C',

    },
    image9:{
        width:40,
        height:40,
        marginTop:10

    }
 

}) 