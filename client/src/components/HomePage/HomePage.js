import React from "react";
import Navbar from "../NavBar/NavBar.js";
import "./style.css";
import Pdf from "react-to-pdf";
import { render } from "react-dom";
const airports = require("airport-data");
const axios = require("axios");
// var pdf = require('html-pdf');
const ref = React.createRef();

var airportName = [];
var airportcode = [];
airports.map((element) => {
  // element is an arry of objects that contain information about the airports such as name, city, country, iata and more
  var elements = [element.city, element.name, element.iata].join(" "); //convert name, city and iata to a string
  var elm = { name: element.name, code: element.iata };
  airportcode.push(elm);
  return airportName.push(elements);
});

class HomePage extends React.Component {
  // renderTableData = () => {
  //   return this.props.Trans.map((element, index) => {
  //     const { ID, Direct, MinPrice, QuoteDateTime, DepartureDate } = element;
  //     return (
  //       <tr key={index}>
  //         <td>{ID}</td>
  //         <td>{Direct}</td>
  //         <td>{MinPrice}</td>
  //         <td>{QuoteDateTime}</td>
  //         <td>{DepartureDate}</td>
  //       </tr>
  //     );
  //   });
  // };
  constructor(props) {
    super(props);
    this.items = airportName;
    this.state = {
      suggestions: [],
      suggestions2: [],
      departure: "",
      arrival: "",
      depDate: "",
      arrDate: "",
      dataTicket: [],
      trip: "",
      dataRn: [],
      Trans: [],
    };
  }

  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = this.items.sort().filter((v) => regex.test(v));
    }
    this.setState(() => ({ suggestions, departure: value }));
  };
  suggestionSelected(value) {
    this.setState(() => ({
      departure: value,
      suggestions: [],
    }));
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.slice(0, 5).map((item, i) => (
          <li
            className="item-list"
            key={i}
            onClick={() => this.suggestionSelected(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }
  //----------------------------------------------------------------------
  onTextChanged2 = (e) => {
    const value = e.target.value;
    let suggestions2 = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions2 = this.items.sort().filter((v) => regex.test(v));
    }
    this.setState(() => ({ suggestions2, arrival: value }));
  };
  suggestionSelected2(value) {
    this.setState(() => ({
      arrival: value,
      suggestions2: [],
    }));
  }

  renderSuggestions2() {
    const { suggestions2 } = this.state;
    if (suggestions2.length === 0) {
      return null;
    }
    return (
      <ul className="list">
        {suggestions2.slice(0, 5).map((item, i) => (
          <li
            className="item-list"
            key={i}
            onClick={() => this.suggestionSelected2(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }
  //--------------------------------------------------------
  submit = () => {
    var depcode = this.state.departure.slice(this.state.departure.length - 3);
    var arrcode = this.state.arrival.slice(this.state.arrival.length - 3);
    console.log(this.state.depDate);
    axios({
      method: "GET",
      url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/${depcode}/${arrcode}/${this.state.depDate}?inboundpartialdate=${this.state.arrDate}`,
      headers: {
        // "content-type": "application/octet-stream",
        "x-rapidapi-host":
          "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": "c8d544a811mshc700b88f27c3a80p18b95bjsnd6e8e3db1374",
        // useQueryString: true,
      },
    })
      .then((response) => {
        console.log("dddddd", response.data);
        this.setState({
          dataTicket: response.data.Quotes,
        });
      })

      .catch((error) => {
        console.log(error);
        this.setState({
          trip: "There are no flights available on this date",
        });
      });
  };
  //--------------------------------------------------------

  render() {
    const { dataTicket } = this.state;
    const table1 = dataTicket.map((item, i) => (
      <div>
        <form>
          <table id="info">
            <tbody>
              <tr>
                <td style={{ width: "50px", padding: "20px" }}>
                  {item.QuoteId}
                </td>
                <td style={{ width: "50px", padding: "20px" }}>
                  {item.Direct.toString()}
                </td>
                <td style={{ width: "50px", padding: "20px" }}>
                  {item.MinPrice}
                </td>
                <td style={{ width: "50px", padding: "20px" }}>
                  {item.OutboundLeg.DepartureDate}
                </td>
                <td style={{ width: "50px", padding: "20px" }}>
                  {item.QuoteDateTime}
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    ));
    return (
      <div ref={ref}>
        <Navbar />
        <div className="main">
          {/* <label className="L">Depart</label> */}
          <input
            className="input1"
            value={this.state.departure}
            onChange={this.onTextChanged}
            type="text"
            name="departure"
            placeholder="Choose your departure city"
          />
          {this.renderSuggestions()}
          {/* <label className="L">From</label> */}

          <input
            className="input1"
            type="date"
            value={this.state.depDate}
            onChange={this.handleChange}
            name="depDate"
            placeholder="Pick departure date"
          />
          <br></br>
          {/* <label className="L">Return</label> */}
          <input
            className="input1"
            value={this.state.arrival}
            onChange={this.onTextChanged2}
            type="text"
            name="arrival"
            placeholder="Choose your arrival city"
          />
          {this.renderSuggestions2()}
          {/* <label className="M">To</label> */}
          <input
            className="input1"
            type="date"
            value={this.state.arrDate}
            onChange={this.handleChange}
            name="arrDate"
            placeholder="Pick arrival date"
          />
          <br />
          <br />
          <button className="check_button" onClick={() => this.submit()}>
            Check
          </button>
          <br></br>
          {this.state.trip}
          <br></br>
          <div>
            <form>
              <table id="info">
                <thead>
                  <tr>
                    <th style={{ width: "50px", padding: "20px" }}>ID</th>
                    <th style={{ width: "50px", padding: "20px" }}>Direct</th>
                    <th style={{ width: "50px", padding: "20px" }}>MinPrice</th>
                    <th style={{ width: "50px", padding: "20px" }}>
                      QuoteDateTime
                    </th>
                    <th style={{ width: "50px", padding: "20px" }}>
                      Departure Date
                    </th>
                  </tr>
                </thead>
                {/* <tbody>{this.renderTableData()}</tbody> */}
              </table>
            </form>
            {table1}
          </div>
        </div>
        <div className="AppA">
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => (
              <button className="check_button" onClick={toPdf}>
                Print Ticket
              </button>
            )}
          </Pdf>
          <div>{/* <h1>Joy of Travel</h1>
        <h2></h2> */}</div>
        </div>
      </div>
    );
  }
}

export default HomePage;
