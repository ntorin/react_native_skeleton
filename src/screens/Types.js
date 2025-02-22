import React from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableHighlight} from 'react-native';
import Row from '../components/Row';

class Types extends React.Component {

  toggleDrawer = () => {
    this.props.navigator.toggleDrawer({
      side: 'left',
      animated: true
    });
  };

  pushScreen = () => {
    this.props.navigator.push({
      screen: 'react_native_skeleton.Types.Push',
      title: 'New Screen',
    });
  };

  pushTopTabsScreen = () => {
    this.props.navigator.push({
      screen: 'react_native_skeleton.Types.TopTabs',
      title: 'Top Tabs',
      topTabs: [{
        screenId: 'react_native_skeleton.Types.TopTabs.TabOne',
        title: 'Tab One',
      }, {
        screenId: 'react_native_skeleton.Types.TopTabs.TabTwo',
        title: 'Tab Two',
      }],
    });
  };

  showModal = () => {
    this.props.navigator.showModal({
      screen: 'react_native_skeleton.Types.Modal',
      title: 'Modal',
    });
  };

  showLightBox = () => {
    this.props.navigator.showLightBox({
      screen: "react_native_skeleton.Types.LightBox",
      passProps: {
        title: 'LightBox',
        content: 'Hey there, I\'m a light box screen :D',
        onClose: this.dismissLightBox,
      },
      style: {
        backgroundBlur: 'dark',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        tapBackgroundToDismiss: true
      }
    });
  };

  dismissLightBox = () => {
    this.props.navigator.dismissLightBox();
  };

  showInAppNotification = () => {
    this.props.navigator.showInAppNotification({
      screen: 'react_native_skeleton.Types.Notification',
    });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Row title={'Toggle Drawer'} onPress={this.toggleDrawer}/>
        <Row title={'Push Screen'} testID={'pushScreen'} onPress={this.pushScreen}/>
        <Row title={'Top Tabs Screen'} onPress={this.pushTopTabsScreen} platform={'android'}/>
        <Row title={'Show Modal'} onPress={this.showModal}/>
        <Row title={'Show Lightbox'} onPress={this.showLightBox}/>
        <Row title={'Show In-App Notification'} onPress={this.showInAppNotification}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    height: 48,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.054)',
  },
  text: {
    fontSize: 16,
  },
});

export default Types;
