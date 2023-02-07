import React, { useCallback, useRef} from 'react';
import LogoLayout from '../../../layouts/LogoLayout';
import { useFocusEffect } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import Styles from '../../../styles/MainDrawerNavigation/Guidance/ScrGuidanceMainWebViewStyle';
import WebView from 'react-native-webview';

import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';

type Prop = {
    navigation: DrawerNavigationProp<any, any>
}

enum Mode {
    Writing,
    Reading,
    Article,
}


const ScrGuidanceMainWebView = (props: Prop) => {


    const webViewRef = useRef<WebView>(null);

    useFocusEffect(
        useCallback(() => {
          const parent = props.navigation.getParent();
          parent?.setOptions({ swipeEnabled: true });
          return () => parent?.setOptions({ swipeEnabled: false });
        }, [props.navigation])
      );


    return (
        <BottomSheetModalProvider>
            <LogoLayout navigation={props.navigation}>
                <View style={Styles.MainWebView}>
                    <WebView ref={webViewRef} style={Styles.WebView} source={{ uri: 'https://namu.wiki/w/포켓몬스터/스토리%20공략/팔데아지방' }} />
                </View>
                <View style={Styles.ControlView}>
                    <Material name="arrow-left" size={32} style={Styles.ControlIcon} onPress={() => {webViewRef.current?.goBack();}}/>
                    <Material name="arrow-right" size={32} style={Styles.ControlIcon} onPress={() => {webViewRef.current?.goForward();}}/>
                    <Material name="refresh" size={32} style={Styles.ControlIcon} onPress={() => {webViewRef.current?.reload();}}/>
                    <Material name="format-list-bulleted-square" size={32} style={Styles.ControlIcon} onPress={() => {
                        webViewRef.current?.injectJavaScript(
                            `
                                menu = document.getElementsByClassName('Mh6gd7ZQ')[0]
                                window.scroll({
                                    top: menu.offsetTop - 10,
                                    behavior: 'smooth'
                                });
                            `
                        );
                    }}/>
                </View>
            </LogoLayout>
        </BottomSheetModalProvider>
    );
};

export default ScrGuidanceMainWebView;
