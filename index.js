import React from 'react';
import 'whatwg-fetch';
import {AppRegistry, StyleSheet, Text, View, FlatList} from 'react-native';

class ReactNativeAppWorksStarter extends React.Component {

    state = {
        scores: []
    };

    async componentDidMount() {
        const res = await fetch('https://randomuser.me/api?results=5000').then(res => res.json());
        this.setState({
            scores: res.results.map((result, index) => {
                return {
                    name: result.name.first,
                    value: Math.round(Math.random() * 10000 * (res.results.length - index))
                }
            })
        });
    }

    render() {
        return <ChildComponent scores={this.state.scores}/>
    }
}

class ChildComponent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.highScoresTitle}>AppWorks Scoreboard</Text>
                <FlatList
                    style={styles.listContainer}
                    keyExtractor={(item, index) => index.toString()}
                    data={this.props.scores}
                    renderItem={({item}) => <Text style={styles.scores}>{item.name}: {item.value}</Text>}
                />
            </View>
        );
    }

    learnMore() {

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff002a',
    },
    listContainer: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#fafafa',
        backgroundColor: '#fff',
        borderRadius: 6,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        width: '90%',
        height: '100%',
        padding: 20
    },
    highScoresTitle: {
        fontSize: 48,
        textAlign: 'center',
        margin: 10,
        color: 'white'
    },
    scores: {
        textAlign: 'center',
        color: '#333',
        marginBottom: 5,
        fontSize: 24,
        fontWeight: '700',
    },
});

// Module name - this should match the value of `reactNativeEntryComponent` in app.properties
AppRegistry.registerComponent('App', () => ReactNativeAppWorksStarter, null);