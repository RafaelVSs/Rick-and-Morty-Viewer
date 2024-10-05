import React, { Component } from 'react';
import { View } from 'react-native';
import api from '../services/api';
import { Container, EpisodeDetails, Avatar, NameDetails, LocationDetails, StatusDetails, SpeciesDetails, GenderDetails } from './styles';

export default class Details extends Component {
    state = {
        details: [],
        allEpisodes: 0, // Adiciona o estado para o número total de episódios
    };

    async componentDidMount() {
        const { route } = this.props;
        const { character } = route.params;
        const response = await api.get(`/character/?name=${character.name}`);

        const characterDetails = response.data.results[0];

        this.setState({ 
        details: response.data, 
        allEpisodes: characterDetails.episode.length // Armazena o número total de episódios
        });
    }

    render() {
        const { route } = this.props;
        const { character } = route.params;

        return (
        <Container style={{ flexDirection: 'column', backgroundColor: '#272b33', alignItems: 'center' }}>
            <Avatar
            source={{ uri: character.avatar }}
            style={{ width: '90%', height: 300 }}
            />
            <View style={[{ marginTop: 20 }, { padding: 20 }, { backgroundColor: '#3c3e44'}, { width: '90%' }, { borderRadius: 5 }]}>
                <NameDetails>{character.name}</NameDetails>
                <StatusDetails>Status: {character.status}</StatusDetails>
                <SpeciesDetails>Species: {character.species}</SpeciesDetails>
                <GenderDetails>Gender: {character.gender}</GenderDetails>
                <LocationDetails>Last location {character.location}</LocationDetails>
                <EpisodeDetails>Participated in {this.state.allEpisodes} episodes</EpisodeDetails>

            </View>
        </Container>
        );
    }
}