import React from 'react';

const Form = ({handleForm, closeModal}) => {
    const [inputs, setInputs] = React.useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {

        event.preventDefault();
        handleForm(inputs)
        setInputs({})
        closeModal(false)
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Enter new product</h2>
            <label>Enter product name:
                <input
                    type="text"
                    name="name"
                    value={inputs.name || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter product image url:
                <input
                    type="text"
                    name="imageUrl"
                    value={inputs.imageUrl || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter product quantity:
                <input
                    type="number"
                    name="count"
                    value={inputs.count || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter product width (mm):
                <input
                    type="number"
                    name="width"
                    value={inputs.width || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter product height (mm):
                <input
                    type="number"
                    name="height"
                    value={inputs.height || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter product weight (gr):
                <input
                    type="number"
                    name="weight"
                    value={inputs.weight || ""}
                    onChange={handleChange}
                />
            </label>

            <input type="submit" value={"Post item"}/>
            <input type="submit" value={"Cancel"} onClick={
                () => {
                    setInputs({})
                    closeModal(false)
                }
            }/>

        </form>
    );
};

export default Form;