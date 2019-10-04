import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';

export default class LogoTitle extends React.Component {
    render() {
        return(
            <TouchableOpacity>
                <Image style={styles.sendoLogo} 
                source={{uri: 'https://s3-alpha-sig.figma.com/img/2d7f/b9d4/78cd50844a76e521e776f3940bd8d0ed?Expires=1569196800&Signature=WscLhZeOsYe3fl7PhE60-3f1qw-~RSiWQRALSoIPomnKlrUVC-rEkmO8Y5D8RmpWB7S5ljkdmidTnmo~2zXyLOxibGtyfq70a4eOG2Gg8XfMh9lYzKlbXCvLW-uUx3ewMZ0v3Is-9Ayp5StJMacpkOsf7Qxi2ecF4JH1LsNPdxBcYM7wHrlJerkmfF0g7bLeZkOYf0cms8KpI3hv1UxW7TV1oQp4gxqQbhmKiFY1eNLMcKuCqDLyjj~QlU0yUU-Hn-DycWSt9TJsTnGcVZwN6w-eReQdTT0joyCWtX79p--Stob-L-tuU0o9SlewmXWAFHA0jI2jDpRiKbM-ycN0lA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}}/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    sendoLogo: {
        width: 82,
        height: 22
    }
})