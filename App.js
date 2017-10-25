/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { StackNavigator, NavigationActions} from 'react-navigation';

class HomeScreen extends React.Component {
  state = { title: '' };

  onChange = (title) => {
    this.setState(title);
  };

  onPress = () => {
    this.props.navigation.navigate("Details", { onChange: this.onChange });
  };

  render() {
    return (
      <View>
        <Text>{this.state.title ? this.state.title : false }</Text>
        <Button title="Next" onPress={this.onPress} />
      </View>
    );
  }
}

const DetailsScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{navigation.state.params.title}</Text>
      <Button
        onPress={() => {
          navigation.goBack();
          navigation.state.params.onChange({ title: 'Hello World' });
        }}
        title="Go to details"
      />
    </View>
  )
};


const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
});

export default class App extends Component<{}> {
  render() {
    return (
      <RootNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
