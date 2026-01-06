import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

import Card from "./components/Card";
import Post from "./components/Post";
import data from "./data/data";
import type { User, Post as PostType, Featured } from "./data/data";

const HomeScreen = () => (
  <ScrollView>
    <Text
      style={{
        fontSize: 22,
        font: "sans",
        fontWeight: 500,
        marginTop: 50,
        marginBottom: 20,
        marginHorizontal: 25,
        color: "#08060B",
      }}
    >
      Stories
    </Text>
    <ScrollView horizontal>
      {(data.users as User[]).map((user) => (
        <Card key={user.id} avatar={user.avatar} name={user.name} />
      ))}
    </ScrollView>
    <Text style={[styles.heading, { color: "#133E87", fontWeight: 900 }]}>
      FEATURED
    </Text>
    {(data.featured as Featured[]).map((post) => (
      <Post
        key={post.id}
        image={post.image}
        title={post.title}
        description={post.description}
        friend={post.friend}
      />
    ))}

    <Text style={[styles.heading, { fontWeight: 700, color: "#0A080D" }]}>
      My Feed
    </Text>
    {(data.posts as PostType[]).map((post) => (
      <Post
        key={post.id}
        image={post.image}
        title={post.title}
        description={post.description}
        friend={post.friend}
      />
    ))}
  </ScrollView>
);

const App = () => (
  <View style={{ flex: 1, backgroundColor: "#FAF9FA" }}>
    <HomeScreen />
  </View>
);

export const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    paddingVertical: 20,
    paddingLeft: 20,
  },
});

export default App;
