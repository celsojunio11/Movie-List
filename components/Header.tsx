import {View, StyleSheet} from 'react-native';
import utils from '../utils/utils';

export function Header (){
    return (
        <View style={styles.container}> 
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:200,
        backgroundColor: utils.colors.green_light
    }
});
