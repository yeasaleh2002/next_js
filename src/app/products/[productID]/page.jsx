import React from 'react';

const DynamicProductPage = ({params, searchParams}) => {
    console.log("search params", searchParams)
    
    return (
        <div>
            <h1>Dynamic product page id: {params.productID}</h1>
        </div>
    );
};

export default DynamicProductPage;