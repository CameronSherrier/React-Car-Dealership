const token = '63f76a310e4c90b8ab7856f6b77532ee3325f0bc315e42d7';

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://car-api-43eg.onrender.com/api/cars`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        
        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://car-api-43eg.onrender.com/api/cars`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            return new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://car-api-43eg.onrender.com/api/cars/${id}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },

    delete: async (id: string) => {
        const response = await fetch(`https://car-api-43eg.onrender.com/api/cars/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        })

        if (!response.ok) {
            throw new Error('Failed to delete the data on the server')
        }

        return;
    }
}