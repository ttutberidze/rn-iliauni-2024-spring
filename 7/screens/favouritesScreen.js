import { View, FlatList} from "react-native"
import {useSelector} from 'react-redux'
import RenderMovieItem from "../components/renderMovieItem"

const FavouritesScreen = () => {
    const movies = useSelector((state) => state.favourite.movies)
    
    return (
        <View>
            <FlatList 
                data={movies} 
                renderItem={({item}) => <RenderMovieItem
                                        movie={item} 
                                        categoryId={item.categoryId} 
                                        key={item.id} />} 
            />
        </View>
    )
}

export default FavouritesScreen