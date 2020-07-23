import React from "react";
import "./ticket.css";
import Pdf from "react-to-pdf";
import { Redirect } from "react-router-dom";
//import PaymentForm from "../Components/buyTicket/buyTicket";

const ref = React.createRef();

class Ticket extends React.Component {
  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/buyTicket" />;
    }
  };
  state = {};
  render() {
    const {
      QuoteDateTime,
      DepartureDate,
      MinPrice,
      Direct,
      QuoteId,
      carriers,
      dataTicket,
      carrierId,
    } = this.props.location.params;

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
      <div className="Tic" ref={ref}>
        <h2>Price</h2>
        <p>{MinPrice}</p>
        <h2>Departure Date</h2>
        <p>{DepartureDate}</p>
        <h2>Direct</h2>
        <p>{Direct}</p>
        <h2>Quote Date Time</h2>
        <p>{QuoteDateTime}</p>
        <br />
        <br />
        <div className="AppA">
          <Pdf targetRef={ref} filename="ticket.pdf">
            {({ toPdf }) => (
              <button className="check_button" onClick={toPdf}>
                Print Ticket
              </button>
            )}
          </Pdf>{" "}
          <br /> <br />
          {this.renderRedirect()}
          <button className="check_button" onClick={this.setRedirect}>
            Buy Ticket
          </button>
        </div>
      </div>
    );
  }
}
export default Ticket;
