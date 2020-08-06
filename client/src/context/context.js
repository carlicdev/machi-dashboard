import React, { createContext, useState, useEffect} from 'react';
import axios from 'axios'

export const MachiContext = createContext();

const MachiContextProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            let products = await axios.get('/api/products');
            setProducts(products.data);
        };
        getProducts();
    }, []);

    useEffect(() => {
        const getClients = async () => {
            let clients = await axios.get('/api/clients');
            setClients(clients.data);
        };
        getClients();
    }, []);


    const deleteProduct = (e, id) => {
        e.preventDefault();
        axios.delete(`/api/products/delete-product/${id}`);
    };

    const deleteClient = (e, id) => {
        e.preventDefault();
        axios.delete(`/api/clients/delete-client/${id}`);
    };

    return (
        <MachiContext.Provider value={{
            products,
            clients,
            deleteProduct,
            deleteClient,
        }}>
            {props.children}
        </MachiContext.Provider>
    )
}

export default MachiContextProvider;