import React, { Component } from 'react';
import { CAMPSITES } from '../shared/campsites';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class Contact extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
    }

    static navigationOptions = {
        title: 'Contact Us'
    };

    render() {
        return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <Card 
                        featuredTitle={"Contact Infromation"}
                        wrapperStyle={{margin: 20}}
                    >
                        <Text> 1 Nucamp Way </Text>
                        <Text> Seattle, WA 98001 </Text>
                        <Text> U.S.A.{"\n"} </Text>
                        <Text> Phone: 1-206-555-1234 </Text>
                        <Text style={{marginBottom: 10}}>
                            Email: campsites@nucamp.com 
                        </Text>
                    </Card>
                </Animatable.View>
            </ScrollView>
        );
    }
}

export default Contact;