import React, { useEffect } from "react"
import { View, ActivityIndicator, FlatList, Text, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import IAlbum from "../../../models/IAlbum"
import { IState } from "../../../models/IState"
import { actualizarAlbums, fetchAlbums } from "../../../store/actions/Albums"
import AlbumListItem from "../../molecules/AlbumListItem"

const AlbumList: React.FC = () => {
    const albums = useSelector((state: IState) => state.Albums.albums)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAlbums())
    }, []);

    return (
        <View>
            {albums.length > 0 ? (
                <>
                    <Text style={styles.center}>Lista de albumes</Text>
                    <FlatList
                        data={albums}
                        renderItem={({ item, index }) => (
                            <AlbumListItem
                                key={item.id}
                                album={item}
                                index={index}
                            />
                        )}
                    />
                </>
            ) : (
                <ActivityIndicator color="#000" />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10,
    }
});

export default AlbumList