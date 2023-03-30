import React from 'react';
import MyButton from "./MyButton/MyButton";
import {Link} from "react-router-dom";


const Card = (props) => {

    const {
        name,
        imageUrl,
        size,
        id,
        handleDelete
    } = props;
    return (
        <>
            <Link
                to={`/product/${id}`}
                onClick={
                    (e) => {
                        e.stopPropagation();
                    }}
            >
                <div className={"card-item"}
                >
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
                        onClick={(e) => {
                            handleDelete(e, id)
                            e.stopPropagation();
                        }}
                    >
                        Delete item
                    </MyButton>
                </div>
            </Link>
        </>
    );
};

export default Card;