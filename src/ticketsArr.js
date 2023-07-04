import React, { useEffect, useState } from 'react'
import TicketItem from './TicketItem';

const TicketsArr = () => {

    const [tickets, setTickets] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        doApiGet();
    }, []);

    const doApiGet = async () => {
        // Make the GET request
        try {
            const response = await fetch('http://localhost:3001/tickets');
            const data = await response.json();
            // Handle the response data
            setTickets(data);
        } catch (error) {
            // Handle any errors
            console.error(error);
        }
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredTickets = tickets.filter(
        (ticket) =>
            (ticket.title && ticket.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (ticket.content && ticket.content.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (ticket.userEmail && ticket.userEmail.toLowerCase().includes(searchTerm.toLowerCase()))
    );



    return (
        <>
            <div className="search-container">
                <div className="search-input">
                    <input
                        type="text"
                        placeholder="Search by title, content, or email"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
            </div>
            {filteredTickets.length > 0 ? (
                filteredTickets.map((item, index) => (
                    <TicketItem key={index} item={item} />
                ))
            ) : (
                <p>No tickets found</p>
            )}
        </>
    )
}

export default TicketsArr