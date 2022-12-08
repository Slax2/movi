import React from 'react'

export const searchPeli = async (username) =>  {
    try {
        const response = await fetch(
            `http://www.omdbapi.com/?i=tt3896198&apikey=742aeb0c`
        );
        const data = await response.json();

        return data;
    } catch (error) {
        return (error);
    }
}
