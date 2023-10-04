import { View } from "react-native";
import { Text, Card, Button } from "@rneui/base";
import Icon  from "react-native-vector-icons/AntDesign";

function CiteCard() {
    return ( 
        <View 
        style={{
            display:'flex', 
            alignItems:'center'
            }}>
        <Card
        containerStyle={{
            display:'flex',
            width:'96%',
            borderRadius:4
        }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Card.Title>Nombre del paciente</Card.Title>
            <Text># de cita</Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>08:30 PM</Text>
            <Text>|</Text>
            <Text>Faltan 10:30 Hrs</Text>
            <Text>|</Text>
            <Text>3 meses 2 dias</Text>
          </View>

          <View 
          style={{
            marginTop:10,
            marginBottom:10
          }}
          >
            <Text>
              Paciente de sexo masculino , de 20 años , soltero, maestra.
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems:'center'
            }}
          >
            <Text># operatorio</Text>
            <View
             style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems:'center',
              gap:10
            }}
            >
              <Button 
              containerStyle={{
                borderRadius:4
              }}
              >
                 <Icon name="user" size={20} color="white" />
              </Button>
              <Button 
              containerStyle={{
                borderRadius:4
              }}
              >
                 <Icon name="caretright" size={20} color="white" />
              </Button>
            </View>
          </View>

        </Card>
        </View>
     );
}

export {CiteCard};