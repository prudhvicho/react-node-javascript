import React, { Component } from 'react';

class BillScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: 'Biryani', price: 140 },
        { name: 'Fried rice', price: 110 },
        { name: 'chicken curry', price: 230 },
      ],
      selectedItems: [],
      totalAmount: 0,
      selectedItem: 'Biryani',
      quantity: 1,
      gst: 5,
      hotelName: 'GREEN STAR HOTEL',
      billDate: new Date().toLocaleDateString(),
    };
  }

  handleItemChange = (event) => {
    this.setState({ selectedItem: event.target.value });
  };

  handleQuantityChange = (event) => {
    this.setState({ quantity: parseInt(event.target.value, 10) });
  };

  addItemToBill = () => {
    const { selectedItem, quantity, items, gst } = this.state;
    const selected = items.find((item) => item.name === selectedItem);

    if (selected) {
      const itemToAdd = { ...selected, quantity };
      this.setState((prevState) => {
        const subTotal = itemToAdd.price * itemToAdd.quantity;
        const gstAmount = (subTotal * gst) / 100;
        return {
          selectedItems: [...prevState.selectedItems, itemToAdd],
          totalAmount: prevState.totalAmount + subTotal + gstAmount,
        };
      });
    }
  };

  render() {
    const {
      items,
      selectedItems,
      selectedItem,
      quantity,
      totalAmount,
      gst,
      hotelName,
      billDate,
    } = this.state;

    return (<center>
      <div className="hotel-bill-screen">
        <h2>{hotelName}</h2>
        <p>Bill Date: {billDate}</p>
        <h3>Customer Bill</h3>
        <h1>____________________________________________________</h1>
        <div>
          <label>Select Item:</label>
          <select value={selectedItem} onChange={this.handleItemChange}>
            {items.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={this.handleQuantityChange}
            min="1"
          />
          <button onClick={this.addItemToBill}>Add to Bill</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {selectedItems.map((item, index) => (
             <tr key={index}>
             <td>{`${index + 1}. ${item.name} (Rs${item.price} each)`}</td>
                <td>{item.quantity}</td>
                <td>${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h1>________________________________________________</h1>
        <p>Subtotal: ${totalAmount.toFixed(2)}</p>
        <p>GST@ ({gst}%): ${(totalAmount * (gst / 100)).toFixed(2)}</p>
        <p>Total: ${(totalAmount + (totalAmount * gst) / 100).toFixed(2)}</p>
        <h1>__________________________________________________</h1>
      </div>
      </center>
    );
  }
}

export default BillScreen;
