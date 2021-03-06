import React, {useState} from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Switch, Platform, StatusBar, StyleSheet, View, ScrollView, Text, FlatList } from 'react-native';
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';
const styles = StyleSheet.create(require('../stylesheet'));
import { Button } from 'react-native-elements';
import Constants from 'expo-constants';

export default class EventsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {mode: false,};

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container,{textAlign: 'left', backgroundColor: global.color1}}>
        <Text>{"\n\n"}</Text>
        <View style={{flexDirection: "row", justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
          <Button
            title="Sign Up For Event"
            onPress={() => navigate("EventForm")}
            type='solid'
          />
        </View>
        <Text>{"\n\n"}</Text>

        <Text style={styles.licenseText}>
          <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
              FBLA Events{"\n"} 
          </Text>
          {"\n"}
          3-D Animation{"\n\n"}
          Accounting I{"\n\n"}
          Accounting II{"\n\n"}
          Advertising{"\n\n"}
          Agribusiness{"\n\n"}
          American Enterprise Project{"\n\n"}
          Banking & Financial Systems{"\n\n"}
          Broadcast Journalism{"\n\n"}
          Business Calculations{"\n\n"}
          Business Communication (FBLA){"\n\n"}
          Business Ethics (FBLA){"\n\n"}
          Business Financial Plan{"\n\n"}
          Business Law (FBLA){"\n\n"}
          Business Plan {"\n\n"}
          Client Service (FBLA){"\n\n"}
          Coding & Programming {"\n\n"}
          Community Service Project (FBLA){"\n\n"}
          Computer Applications (FBLA){"\n\n"}
          Computer Game & Simulation Programming {"\n\n"}
          Computer Problem Solving{"\n\n"}
          Cyber Security (FBLA){"\n\n"}
          Database Design & Applications{"\n\n"}
          Digital Video Production{"\n\n"}
          E-business {"\n\n"}
          Economics{"\n\n"}
          Electronic Career Portfolio{"\n\n"}
          Emerging Business Issues (FBLA){"\n\n"}
          Entrepreneurship{"\n\n"}
          Future Business Leader{"\n\n"}
          Global Business{"\n\n"}
          Graphic Design{"\n\n"}
          Health Care Administration{"\n\n"}
          Help Desk (FBLA){"\n\n"}
          Hospitality Management (FBLA){"\n\n"}
          Impromptu Speaking (FBLA){"\n\n"}
          Insurance & Risk Management{"\n\n"}
          Introduction to Business  9th & 10th Grade Event{"\n\n"}
          Introduction to Business Communication  9th & 10th Grade Event{"\n\n"}
          Introduction to Business Presentation  9th & 10th Grade Event{"\n\n"}
          Introduction to Business Procedures  9th & 10th Grade Event{"\n\n"}
          Introduction to FBLA  9th & 10th Grade Event{"\n\n"}
          Introduction to Financial Math  9th & 10th Grade Event{"\n\n"}
          Introduction to Information Technology  9th & 10th Grade Event{"\n\n"}
          Introduction to Parliamentary Procedure  9th & 10th Grade Event{"\n\n"}
          Introduction to Public Speaking  9th & 10th Grade Event{"\n\n"}
          Job Interview (FBLA){"\n\n"}
          Journalism{"\n\n"}
          LifeSmarts{"\n\n"}
          Local Chapter Annual Business Report (FBLA) {"\n\n"}
          Management Decision Making{"\n\n"}
          Management Information Systems{"\n\n"}
          Marketing{"\n\n"}
          Mobile Application Development (FBLA) {"\n\n"}
          Network Design (FBLA){"\n\n"}
          Networking Concepts (FBLA){"\n\n"}
          Organizational Leadership{"\n\n"}
          Parliamentary Procedure (FBLA){"\n\n"}
          Partnership with Business Project{"\n\n"}
          Personal Finance (FBLA){"\n\n"}
          Political Science{"\n\n"}
          Public Service Announcement{"\n\n"}
          Public Speaking (FBLA){"\n\n"}
          Publication Design{"\n\n"}
          Sales Presentation (FBLA){"\n\n"}
          Securities & Investments{"\n\n"}
          Social Media Campaign{"\n\n"}
          Sports & Entertainment Management{"\n\n"}
          Spreadsheet Applications{"\n\n"}
          Virtual Business Finance Challenge {"\n\n"}
          Virtual Business Management Challenge {"\n\n"}
          Website Design (FBLA) {"\n\n"}
          Word Processing{"\n\n"}
        </Text>
      </ScrollView>
    );
  }
}
EventsScreen.navigationOptions = {
  title: 'Events',
};