import React from 'react';
import Card from "./Card";

const CardList = ({data, handleDelete}) => {
    return (
        <>
            {data && data.length >= 1 ?
                data.map(elem => (
                    <Card
                        key={elem.id}
                        name={elem.name}
                        size={elem.size}
                        imageUrl={elem.imageUrl}
                        id={elem.id}
                        handleDelete={handleDelete}
                    />
                ))
                : <p>No items</p>
            }
        </>
    );
};

export default CardList;