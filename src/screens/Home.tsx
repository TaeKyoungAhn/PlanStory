import React from "react";
import { View, Button } from "react-native";
import Greetings from '../../Components/Greeting';


const Home = () => {
    return(
        <View>      
            {/*주석이 디게 특이하네..*/}
            <Greetings name ="BottomTab Test"/>
            <Button title="Home Test Button"/>
        </View>
    )
}

export default Home;