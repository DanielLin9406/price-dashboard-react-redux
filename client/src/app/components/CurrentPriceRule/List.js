import { hot } from "react-hot-loader";
import React, { Component } from "react";

import BCPriceItem from './Item';

class BCPriceList extends Component{
  componentDidUpdate(){
    // console.log('BCPriceList', this.props.bcPrice);
    // console.log('PrliceList', this.props.priceList)
  }
  getUpdatedPriceList = (product) => {
    if (!this.props.priceList) return null;
    const List = this.props.priceList.filter((ele2) => {
      if (product.sku === ele2.sku) {
        return true
      } else {
        return false
      }
    }).map(ele3 => ele3);
    return List[0]
  }

  render(){
    return(
      <>
        <ul className="product-list">
          {this.props.bcPrice.map((ele, index) => { // L1101
            const priceObj = this.getUpdatedPriceList(ele);
            const updatedPriceObj = {
              price: priceObj ? priceObj.price : ele.price, 
              salePrice: priceObj ? priceObj.salePrice : ele.salePrice
            }
            return (
              <li 
                key={`item-${index}`} 
                index={index}
                className="product-item"
              >
                <h3>{ele.name}</h3>
                <BCPriceItem
                  licenseRule={this.props.licenseRule[ele.sku]}
                  sku={ele.sku}
                  priceProps={updatedPriceObj}
                />
              </li>
            )
          })}     
        </ul>
      </>
    )
  }
}

export default hot(module)(BCPriceList);