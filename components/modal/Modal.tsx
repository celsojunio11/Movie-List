import { View, FlatList, Image, StyleSheet } from 'react-native';
import { SearchModalMovie } from '../../src/pages/Home';
import utils from "../../utils/utils";


interface Props {
    movies: SearchModalMovie[];
}

export function Modal({movies}: Props) {
    return (
        <View>
            <FlatList
                data={movies}
                numColumns={2}
                renderItem={({ item }) => (
                    <View style={styles.poster}>
                        <Image source={{ uri: utils.imageUrl + item.poster_path }} 
                        style={styles.image}
                        />
                    </View>
                )}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    list: {
        marginTop:40,
        paddingHorizontal:20
    },
    poster: {
        flex: 1,
        maxWidth: "50%",
        alignItems: "center",
        marginBottom: 20
    },
    image:{
        height:220,
        width:180
    }
})