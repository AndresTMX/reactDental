import { View, TextInput } from "react-native";
import  Icon  from "react-native-vector-icons/AntDesign";

function Searcher() {
    return ( 
        <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderStyle: "solid",
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 4,
          padding: 10,
          border: 1,
        }}
      >
        <TextInput
          style={{ fontSize: 15 }}
          placeholder="Busca una cita por sus propiedades"
        />
        <Icon name="search1" size={25} color="gray" />
      </View>
     );
}

export {Searcher};