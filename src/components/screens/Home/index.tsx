import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { IState } from '../../../models/IState';
import AlbumList from '../../organisms/AlbumList';
import AlbumDetail from '../../molecules/AlbumDetail';
import IAlbumDetail from '../../../models/IAlbumDetail';

const Home: React.FC = () => {
    const selectedAlbum = useSelector((state: IState) => state.Albums.selectedAlbum)
    return (
        <View>{selectedAlbum ? <AlbumDetail /> : <AlbumList />}</View>
    );
}

export default Home;