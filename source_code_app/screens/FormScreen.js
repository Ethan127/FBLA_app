import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, Button, View, TouchableHighlight } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
const styles = StyleSheet.create(require('../stylesheet'));
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import '../global.js';
import t from 'tcomb-form-native';

var Person = t.struct({
  name: t.String,
  surname: t.maybe(t.String),
  age: t.Number,
  email: t.String,
  password: t.String,
  rememberMe: t.Boolean
});
const formOptions = {};
const Form = t.form.Form;

t.form.Form.stylesheet.textbox.normal.color = global.textColor;
t.form.Form.stylesheet.controlLabel.normal.color = global.textColor;

export default class FormScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.profileContainer,{backgroundColor: global.color1, textAlign: 'center'}}>
        <Form
          ref="form"
          type={Person}
          options={formOptions}
        />
        <Button
          title="Sign Up"
          onPress={this.signUp}
        />
      </ScrollView>
    );
  }

  signUp = () => {
    this.props.navigation.navigate("Home");
  }
}

FormScreen.navigationOptions = {
  title: 'Form',
  header: null,
};