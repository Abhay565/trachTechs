import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GradientBackground from '../components/organisms/GradientBackground'

const SettingsScreen = () => {
  return (
   <GradientBackground>
     <View style={styles.container}>
      <Text>SettingsScreen</Text>
    </View>
   </GradientBackground>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})