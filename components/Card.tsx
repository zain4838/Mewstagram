import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Avatar from "./Avatar";

type CardProps = {
  avatar: string;
  name: string;
};

const Card = (props: CardProps) => (
  <View
    style={[
      {
        width: 77,
        height: 110,
        backgroundColor: "#FFFFFF",
        margin: 3,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
      },
      styles.shadow,
    ]}
  >
    <Avatar url={props.avatar} />
    <Text style={{ color: "#442D74", marginTop: 10, fontWeight: 700 }}>
      {props.name}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
});

export default Card;
