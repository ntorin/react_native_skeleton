import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import Row from '../components/Row';

class Transitions extends React.Component {

  showCollapsingHeader = () => {
    this.props.navigator.showModal({
      title: 'Collapsing Header',
      screen: 'react_native_skeleton.Transitions.CollapsingHeader',
    });
  };

  showSharedElementTransitions = () => {
    this.props.navigator.showModal({
      title: 'Shared Element Transition Examples',
      screen: 'react_native_skeleton.Transitions.SharedElementTransitions',
    });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Row title={'Collapsing Header'} onPress={this.showCollapsingHeader}/>
        <Row title={'Shared Element Transition'} onPress={this.showSharedElementTransitions}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Transitions;
