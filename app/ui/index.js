import { View, StyleSheet } from "react-native";

function UI ({children}) {
    return ( 
        <>
        <View style={ui.Container}>
            {children}
        </View>
        </>
     );
}

export {UI};

const ui = StyleSheet.create({
    Container:{
        display:'flex',
        height:'100%',
        width:'100%',
    }
})