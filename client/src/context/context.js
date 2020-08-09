import React, { createContext, useState, useEffect} from 'react';
import axios from 'axios'

export const MachiContext = createContext();

const MachiContextProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [clients, setClients] = useState([]);
    const [orders, setOrders] = useState([]);
    const [salesByProduct, setSalesByProduct] = useState([]);
    
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

    useEffect(() => {
        const getOrders = async () => {
            let orders = await axios.get('/api/orders');
            setOrders(orders.data);
        };
        getOrders();
    }, []);

    useEffect(() => {
        const getSalesByProduct = async () => {
            let sales = await axios.get('/api/sales/by-product');
            console.log(sales.data)
            setSalesByProduct(sales.data);
        };
        getSalesByProduct();
    }, []);


    const deleteProduct = (e, id) => {
        e.preventDefault();
        axios.delete(`/api/products/delete-product/${id}`);
    };

    const deleteClient = (e, id) => {
        e.preventDefault();
        axios.delete(`/api/clients/delete-client/${id}`);
    };

    const deleteOrder = (e, id) => {
        e.preventDefault();
        axios.delete(`/api/orders/delete-order/${id}`);
    }
    const updateStatus = (e, id) => {
        e.preventDefault();
        axios.patch(`/api/orders/update-status/${id}`, {status: 'entregada'});
    }

    return (
        <MachiContext.Provider value={{
            products,
            clients,
            orders,
            salesByProduct,
            deleteProduct,
            deleteClient,
            deleteOrder,
            updateStatus,
        }}>
            {props.children}
        </MachiContext.Provider>
    )
}

export default MachiContextProvider;
