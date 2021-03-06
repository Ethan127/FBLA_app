import React, {useState, Icon} from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Switch, Platform, StatusBar, StyleSheet, View, ScrollView, Text, Button } from 'react-native';
import { HeaderBackButton } from "react-navigation-stack";
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';
const styles = StyleSheet.create(require('../stylesheet'));

export default class LicenseScreen extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <ScrollView style={styles.container,{textAlign: 'left'}}>
            <Text style={styles.licenseText}>
                <Text style={{textAlign: 'center'}}>
                    MIT License{"\n"} 
                    Copyright © 2019 Ethan Schnathorst, Evan Sonin
                </Text>
                {"\n\n"}
                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
                {"\n\n"}
                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.
                {"\n\n"}
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.
            </Text>
        </ScrollView>
      );
    }
  }
  
  LicenseScreen.navigationOptions = ({ navigation }) => {
    return {
      title: 'License',
      //https://www.reddit.com/r/furry_irl
      header: null,
    };
  }

  /*headerLeft: (
        <HeaderBackButton
          onPress={() => navigation.navigate('More')}
          title="Back"
        />
      ),
  */