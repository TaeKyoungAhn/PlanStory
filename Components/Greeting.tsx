import React from "react";
import { View, Text } from "react-native";

type GreetingProps = {
    name : string;
}

const Greetings: React.FC<GreetingProps> = ({name})=>(
    <Text>이게 뭐냐..{name}</Text>
)

export default Greetings;