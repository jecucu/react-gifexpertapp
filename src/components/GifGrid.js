import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({category}) => {

    const { data:images, loading } = useFetchGifs(category);    
    console.log(loading);

    return (
        <>
            <h3 className='animate__fadeIn'>{ category }</h3>
            { loading && <p className="animate__rotateIn">Loading</p> }
            <div className='card-grid'>            
                {
                    images.map( img => { return <GifGridItem key={img.id} { ...img }></GifGridItem> } )
                }
            </div>        
        </>
    )

}