import * as React from 'react';
import {
    Text,
    View, 
    TouchableOpacity,
    TextInput,
    StyleSheet
} from 'react-native'
export default class SearchScreen extends React.Component{
    getWord=(word)=>{
        var searchKeyword=word.toLowerCase()
        var url ="https://rupinwhitehatjr.github.io/dictionary/%22+searchKeyword+%22.json"+searchKeyword+"json"
        return fetch(url)
        .then((date)=>{
            if(DataCue.status===200){
                return DataCue.json()
            }else{
                return null
            }
        })
    }
    render(){
        return(
            <View>
                <TextInput 
                style={StyleSheet.inputBox}
                onChangeText={text=>{
                    this.setState({
                        text: text,
                        isSearchPressed: false,
                        word: "Loading...",
                        lexicalCategory: '',
                        examples: [],
                        definition: " "
                    });
                }}
                value={this.state.text}
                />
                  

           <TouchableOpacity 
            style={StyleSheet.searchButton}
            onPress={()=>{
                this.setState({isSearchPressed: true})
                this.getWord(this.state.text)
            }}
           >
                <Text>
                    Search
                </Text>
                </TouchableOpacity>
            </View>
        )
    }
}