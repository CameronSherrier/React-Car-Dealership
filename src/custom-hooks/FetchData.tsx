import { useEffect, useState } from 'react';
import { server_calls } from '../api/server';

export const useGetData = () => {
    const [ carData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, []) // with array brackets like this it will only occur once. "On Mount"

    return { carData, getData: handleDataFetch}
}
