import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Constant from '../../controller/Constant'

const Background = ({ backgroundColor = '#F7F7F7' }) => {
    return (
        <View style={{
            height: Constant.screen.height,
            position: 'absolute',
            zIndex: -999,
            backgroundColor
        }}>
            <Image
                source={Constant.icons.topBG}
                style={styles.topBGImg}
            />
        </View>
    )
}

export default Background

const styles = StyleSheet.create({
    topBGImg: {
        width: Constant.screen.width,
        height: Constant.screen.width * 0.68
    }
})
