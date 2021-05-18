import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExportApp = () => {

// const {categories, setCategories} = useState(['One Punch Man','Samurai X','Dragon ball']);
const [categories, setCategories] = useState(['One Punch Man']);
// setCategories('One Punch Man');
// 'One Punch Man','Samurai X','Dragon ball'
// console.log(categories);
// const handleAdd = (e) => {
//     setCategories( (categories) => { return [...categories, 'pepito'] } );
// };

return (
    <>
    <h2>GifExpertApp</h2>
    <AddCategory setCategories={setCategories}></AddCategory>
    <hr/>
    <ol>
        { 
        //  categories.map( category => { return <li key={ category }> { category } </li> } ) 
        categories.map( category => { return <GifGrid key={ category } category={ category }>  </GifGrid> } ) 

        }
    </ol>
    </>
);

}
