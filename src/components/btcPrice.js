import React from "react";

import { connect } from 'react-redux';
import { fetchBTCPrice } from '../actions';

class btcPrice extends React.Component {

    componentDidMount() {
        this.props.fetchBTCPrice();
        this.interval = setInterval(() => this.props.fetchBTCPrice(), 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    renderPrice() {
        if (this.props.btcPrice != null) {
            var btcPrice = this.props.btcPrice.amount;
            var formattedPrice = (btcPrice).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
            return (
                <div className="price">
                    <i className="fab fa-bitcoin"></i> ${formattedPrice}
                </div>
            )
        } else {
            return '';
        }
    }

    render() {
        return <div>{this.renderPrice()}</div>
    }
}

const mapStateToProps = state => {
    return { btcPrice: state.btcPrice }
}

export default connect(
    mapStateToProps,
    { fetchBTCPrice }
)(btcPrice);