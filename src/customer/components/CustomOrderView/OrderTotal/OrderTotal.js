import React from 'react';
import OrderTotalRow from '../OrderTotalRow/OrderTotalRow';
import OrderTax from '../OrderTax/OrderTax';
import OrderTotalTotal from '../OrderTotalTotal/OrderTotalTotal';
import './order-total.scss';
import cookie from 'js-cookie';

var OrderTotal = React.createClass({

    propTypes: {
        orderItems: React.PropTypes.array,
        handleDeleteItemFromOrder: React.PropTypes.func,
        toggleDeleteNotification: React.PropTypes.func
    },

    render: function() {

        var orderItems = this.props.orderItems.map(
            (item, index) => {
                return (
                        <OrderTotalRow
                            itemDetails={item}
                            handleDeleteItemFromOrder={this.props.handleDeleteItemFromOrder}
                            toggleDeleteNotification={this.props.toggleDeleteNotification}
                            key={index}
                            index={index} />

                )
            }
        );

        // ORDER TOTAL AND TAX CALCULATION //
        var total = this.props.orderItems.reduce((sum, current) =>
            sum + (current.price * current.quantity), 0);
        var orderTax = (total * 0.1);
        var orderTotal = (total + orderTax).toFixed(2);
        cookie.set("amount" , orderTotal)

        return (
            <div>
                <section id="order-total">
                    <h2>Total Order</h2>
                    <table className="order-total-table">
                        <tbody>
                            {orderItems}
                            <OrderTax orderTax={orderTax} />
                            <OrderTotalTotal
                                orderTotal={orderTotal}
                                orderItems={this.props.orderItems} />
                        </tbody>
                    </table>
                </section>
            </div>
        )
    }
});

export default OrderTotal;
