import { StackActions, useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
// import CommonAPIs from '../../controller/APIs/CommonAPIs'
import Constant from '../../controller/Constant'

const Header = ({
    title = 'HOME',
    showBackButton = false,
    showNotification = true,
    fontSize = 30,
}) => {

    const navigation = useNavigation()
    const [isNewNofi, setIsNewNoti] = useState(false)
    // const isHaveNewNoti = useSelector(state => state.commonSlice?.isHaveNewNoti)

    const showNoficationList = () => {
        // navigation.dispatch(
        //     StackActions.push(Constant.screenName.NotificationList)
        // )
    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            // CommonAPIs.checkReadAtNotification()
            //     .then(isNew => {
            //         setIsNewNoti(!isNew)
            //     })
        })
    }, [navigation])

    // useEffect(() => {
    //     setIsNewNoti(false)
    // }, [isHaveNewNoti])

    return (
        <View style={styles.contentView}>
            {
                showBackButton &&
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Image source={Constant.icons.back} />
                </TouchableOpacity>
            }
            <Text
                numberOfLines={1}
                style={{
                    ...styles.title,
                    fontSize
                }}>
                {title}
            </Text>
            {
                showNotification &&
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={showNoficationList}>
                    <View style={styles.bellView}>
                        <Image
                            source={isNewNofi ? Constant.icons.bellDot : Constant.icons.bell}
                            style={{
                                width: isNewNofi ? 24 : 21,
                                height: isNewNofi ? 24 : 21,
                                resizeMode: 'contain',
                                alignSelf: 'flex-end'
                            }}
                        />
                    </View>
                </TouchableOpacity>
            }
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    contentView: {
        flexDirection: 'row',
        paddingTop: 12,
        alignItems: 'center',
        paddingHorizontal: 22,
    },
    backButton: {
        height: 23,
        paddingRight: 12,
    },
    title: {
        fontFamily: Constant.fonts.poppinsSemiBold,
        color: 'white',
        flex: 1,
    },
    bellView: { flexDirection: 'row', alignItems: 'flex-end', height: 24, width: 24, justifyContent: 'flex-start' }
})
