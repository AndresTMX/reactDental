import { View, Text} from "react-native";

function TitlePage({title}) {
    return ( 
        <>
         <View>
        <Text
          style={{
            fontSize: 22,
            paddingLeft: 20,
          }}
        >
          {title}
        </Text>
      </View>
        </>
     );
}

export {TitlePage};