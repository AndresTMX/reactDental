import { StyleSheet, View, Text } from 'react-native'
import { Button, Card, Input } from '@rneui/base';
import { Link } from 'expo-router';

function Login () {
    return ( 
        <>
        <View style={login.Container}>

           <View style={login.BoxTitle}>
                <Text style={{fontSize:30}}>Inicio de sesion</Text>
            </View>

           <Card containerStyle={{width:'90%' , padding:20 }}>

                <Input placeholder='email'/>

                <Input placeholder='password'/>

                <Button>login</Button>

           </Card>

                <Link 
                href="/home"
                asChild>
                    <Button 
                    containerStyle={{marginTop:20, width:'80%'}}
                    >
                        Home
                    </Button>
                </Link>

        </View>
        </>
     );
}

export {Login} ;


const login = StyleSheet.create({
    Container:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'start',
        alignItems:'center',
        height:'100%',
        padding:20        
    },
    BoxContent:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor:'#565252',
        padding:20
    },
    BoxTitle:{
       marginTop:'40%',
       marginBottom:40
    },
    
})

