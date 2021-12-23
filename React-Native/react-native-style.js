Import {View, Text} from “react-native”

<View> 
	<Text></Text>
</View>

Two ways for the styling:
In-line-CSS  (within Tag)
아예 밑으로 뺴서 (variable) 

<View style ={{ backgroundColor: “blue” }} >

<View style = {style.mainView}>
	<Text>Hello World</Text>
</View>


const style = StyleSheet.create({
	mainView: {		flex: 1 
		backgroundColor: “green”,
        paddingTop: 50,
		}

})



<View> 
	<Text></Text>
</View>