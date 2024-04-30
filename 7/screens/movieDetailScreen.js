import { View, Image, Text, StyleSheet, Button } from "react-native"
import { DATA } from "../data"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite } from "../store/favouritesSlice";

const MovieDetailScreen = ({route, navigation}) => {
    const dispatch = useDispatch()
    const favouriteMovies = useSelector(state => state.favourite.movies)
console.log(favouriteMovies)
    const {movieId, categoryId} = route.params;
    const movie = DATA.find((category) => category.id === categoryId)
                        .movies.find((movie) => movie.id === movieId)
    const isFavourite = !!favouriteMovies.find((favouriteMovie) => favouriteMovie.id === movie.id)

console.log(isFavourite)
    useEffect(() => {
        navigation.setOptions({
            title: movie.title,
            headerRight: () => <Button title={isFavourite ? "Unlike" : "Like"} onPress={() => dispatch(toggleFavourite({
                movie: {
                    ...movie, categoryId
                }
            }))} />
        })
    }, [navigation, movie.title, isFavourite])

    return (
        <View style={styles.container}>
            <Image source={{uri: movie.poster_image}} style={styles.image} />
            <Text style={styles.text}>{movie.title}</Text>
        </View>
    )
}

export default MovieDetailScreen;

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
        marginHorizontal: 24
    },
    image: {
        width: 150,
        height: 200
    },
    text: {
        fontSize: 24
    }
})