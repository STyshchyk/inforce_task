import React from 'react';
import MyButton from "./MyButton/MyButton";


const Card = (props) => {
    const {
        name,
        imageUrl,
        size,
        id,
        handleDelete
    } = props;
    return (
        <div
            className={"card-item"}>
            <div className={"card-img"}>
                <img src={imageUrl}
                     alt="person img"
                     style={{width: `${size.width}`, height: `${size.height}`}}
                />
            </div>
            <div className={"card-text"}>
                <p>{name}</p>
            </div>
            <MyButton
                onClick={() => handleDelete(id)}
            >
                Delete item
            </MyButton>

        </div>

    );
};

export default Card;