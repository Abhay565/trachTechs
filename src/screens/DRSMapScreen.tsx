import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GradientBackground from '../components/organisms/GradientBackground'

const DRSMapScreen = () => {
  return (
    <GradientBackground>
        <View style={styles.container}>
      <Text>DRSMapScreen</Text>
    </View>
    </GradientBackground>
  )
}

export default DRSMapScreen

const styles = StyleSheet.create({
        
container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})