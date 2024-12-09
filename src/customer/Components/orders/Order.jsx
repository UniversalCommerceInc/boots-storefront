import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCutomerOrdersNew } from '../../../action/cart';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    margin-top: 10px;
    padding: 20px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
`;

const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 20px;
        margin-bottom: 10px;
    }
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const Th = styled.th`
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    background-color: #f2f2f2;

    @media (max-width: 768px) {
        padding: 8px;
    }
`;

const Td = styled.td`
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;

    @media (max-width: 768px) {
        padding: 8px;
    }
`;

const StyledLinkTd = styled(Td)`
    cursor: pointer;
    text-decoration: underline;

    &:hover {
        text-decoration: none;
        color: red;
    }
`;

const Status = styled.span`
    color: white;
    background-color: ${props => props.statusColor || '#000'};
    padding: 4px 8px;
    border-radius: 4px;

    @media (max-width: 768px) {
        padding: 2px 4px;
        font-size: 10px;
    }
`;

const getStatusColor = (status) => {
    switch (status) {
        case 'Delivered':
            return '#4caf50';
        case 'Pending':
            return '#ff9800';
        case 'PaymentAuthorized':
            return '#008cff';
        case 'Cancelled':
            return '#f44336';
        default:
            return '#000';
    }
};

const Order = () => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const { newOrder } = useSelector((store) => store);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const orders = await dispatch(getCutomerOrdersNew());
                setData(orders.orders.items); // Access the response data here
            } catch (error) {
                console.error('Error fetching customer orders:', error);
            }
        };

        fetchData();
    }, [dispatch]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    };

    return (
        <Container>
            <Title>My Recent Orders</Title>
            <Table>
                <thead>
                    <tr>
                        <Th>Order</Th>
                        <Th>Order date</Th>
                        <Th>Total</Th>
                        <Th>Order status</Th>
                        <Th></Th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((el, index) =>
                        <tr key={index}>
                            <Td>{el?.id}</Td>
                            <Td>{formatDate(el?.orderPlacedAt)}</Td>
                            <Td>₹{el?.totalWithTax}</Td>
                            <Td><Status statusColor={getStatusColor(el?.state)}>{el?.state}</Status></Td>
                            <StyledLinkTd><Link to={`/account/order/${el?.id}`}>View details</Link></StyledLinkTd>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
}

export default Order;
