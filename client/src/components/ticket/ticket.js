import React from 'react';
import './ticket.css';
class Ticket extends React.Component {
    state = {

    };
    render() {
        const { QuoteDateTime,DepartureDate,MinPrice,Direct,QuoteId,carriers,dataTicket,carrierId } = this.props.location.params;
        // console.log('---------//-/---------', carriers,dataTicket,carrierId);
        // function getCarrier () {
        //     var carrier;
        //     console.log(carriers[i].carrierId, carrierId, 'checkkkkk')
        //     for(var i = 0; i < carriers.length; i++) {
        //         if(carriers[i].carrierId == carrierId) {
        //             carrier = carriers[i].Name;
        //         }
        //     }
        //     return carrier;
        // }
        // var carrier = getCarrier();
        // console.log(carrierId, '525555555555555', carrier);
        return (
            <div>
                <h2>Price</h2>
                <p>{MinPrice}</p>
                <h2>Departure Date</h2>
                <p>{DepartureDate}</p>
                <h2>Direct</h2>
                <p>{Direct}</p>
                <h2>Quote Date Time</h2>
                <p>{QuoteDateTime}</p>
            </div>
        )
    }
}
export default Ticket;