import {useQueryClient} from '@tanstack/react-query'
import axios from 'axios'

const fetchData = async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/character')
    return response
}

export const usePrefetch = () => {
    const queryClient = useQueryClient();
    queryClient.prefetchQuery(['characters'], fetchData)


    // const {data, isLoading} = useQuery(['characters'], fetchData);
    // return {data: data?.data.results, isLoading}
}