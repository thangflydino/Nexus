import { Dimensions } from "react-native";

export default {

    screen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    screenName: {
        TabBar: 'TabBar',
        Login: 'Login',
        Home: 'Home',
        History: 'History',
        Exchange: 'Exchange',
        Profile: 'Profile',
    },
    color: {
        green: '#3FC44E',
        blue: '#00CEFF',
        link: '#3168FF',
        grayText: '#92929D',
        separator: '#d1d1d1',
        text: '#373737',
        buttonPrimary: '#00CEFF',
        plusPoint: '#3FC44E',
        minusPoint: '#4C4C4C'
    },
    key: {

    },
    icons: {
        background: require('../assets/images/img_bg.png'),
        tabbar_home: require('../assets/images/tabbar/ic_home.png'),
        tabbar_history: require('../assets/images/tabbar/ic_history.png'),
        tabbar_convert: require('../assets/images/tabbar/ic_convert.png'),
        tabbar_profile: require('../assets/images/tabbar/ic_profile.png'),
        topBG: require('../assets/images/img_top_bg.png'),
    },
    fonts: {
        poppinsBold: 'Poppins-Bold',
        poppinsMedium: 'Poppins-Medium',
        poppinsRegular: 'Poppins-Regular',
        poppinsThin: 'Poppins-Thin',
        poppinsLight: 'Poppins-Light',
        poppinsSemiBold: 'Poppins-SemiBold',
    },
    storageManagementKeys: {
        lastLoginAccount: "lastLoginAccount"
    },
    errorMsg: {
        common: 'An error has occurred. Please try again!',
        logoutFailed: 'Sign out failed. Please try again!'
    },
    dateFormatter: {
        ddMMMyyyy: 'dd MMM yyyy',
        yyyyMMddHHmm: 'yyyy-MM-dd HH:mm'
    },
}