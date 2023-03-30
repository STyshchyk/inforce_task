import './App.scss';
import React, {useEffect} from "react";
import {useGetGoodsQuery, useAddProductMutation, useDeleteProductMutation} from "./store/itemApi";
import MyModal from "./Components/MyModal/MyModal";
import Form from "./Components/Form";
import CardList from "./Components/CardList";
import MyButton from "./Components/MyButton/MyButton";

function App() {
    const {data = [], isLoading} = useGetGoodsQuery("product" , {
        selectFromResult: ({ data= [] }) => ({
            data: [...data].sort((a, b) => a.name.localeCompare(b.name)),
        }),
    })
    const [addProduct, {isError}] = useAddProductMutation();
    const [deleteProduct] = useDeleteProductMutation();
    const [isVisible, setIsVisible] = React.useState(false)
    const handeAddProduct = async (newValues) => {
        if(newValues.hasOwnProperty("name") && newValues.name !== "")return;
        if (newValues) {
            await addProduct({
                    ...newValues
                }
            ).unwrap();
        }
    }
    const handleDeleteProduct = async (id) => {
        await deleteProduct(id).unwrap()
    }
    const handleDelete = (id) => {
        console.log(id)
    }

    const handleForm = (value) => {
        let newValues = {
            name: value?.name,
            imageUrl: value?.imageUrl,
            count: parseInt(value?.count),
            size: {
                width: parseInt(value.width),
                height: parseInt(value.height)
            },
            weight: value.weight,
            comments: null
        }
        handeAddProduct(newValues);
        return newValues;
    }

    return (
        <div className="App">
            <div className={"main-page"}>
                <MyModal
                    isVisible={isVisible}
                    setVisible={setIsVisible}
                >
                    <Form
                        handleForm={handleForm}
                        closeModal={setIsVisible}
                    />
                </MyModal>
                <div className="container">
                    <header className={"header"}>
                        <h1>React Shop</h1>
                        <MyButton
                            onClick={() => setIsVisible(true)}
                        >
                            Add items
                        </MyButton>
                    </header>
                    <section className={"card-wrapper"}>
                        <CardList
                            data={data}
                            handleDelete={handleDeleteProduct}
                        />
                    </section>
                </div>
            </div>


        </div>
    );
}

export default App;
