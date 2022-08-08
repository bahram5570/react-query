import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

const fetchData = async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/character')
    return response
}

export const useFetchData = () => {
    const {data, isLoading} = useQuery(['characters'], fetchData);
    return {data: data?.data.results, isLoading}
}