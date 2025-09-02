import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface InputTitleProps{
    title?: string;
}

const InputTitle: React.FC<InputTitleProps> = (props) => {
    const {title = "Title"} = props;
  return (
    <View>
      <Text style={styles.title} >{title}</Text>
    </View>
  )
}

export default InputTitle

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: "400", 
        color: "#212121",
        marginBottom: 4,
      },
})