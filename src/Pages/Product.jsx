import React from 'react';
import {useParams} from "react-router-dom";
import {useGetItemQuery} from "../store/itemApi";

const Product = () => {
    const {id: idCard} = useParams();
    const {data = [], isError} = useGetItemQuery(idCard);
    if(isError)return  <p>error loading</p>

    return (
        <div className={"char-page"}>
            <div className="char-img">
                <img src={data.imageUrl} alt="char-img"/>
            </div>
            <h2>{data.name}</h2>
            <h4>Informations</h4>
            <div className={"char-info"}>
                <p>
                    <span>Quantity</span>
                    <span>{data.count}</span>
                </p>
                <p>
                    <span>Dimensions</span>
                    <span>width:{data?.width === "" ? "Unkwown" : data?.width}
                    height:{data?.height === "" ? "Unkwown" : data?.height}
                    </span>
                </p>

            </div>
        </div>);
};

export default Product;