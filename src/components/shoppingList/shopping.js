import React from 'react';
import { connect } from 'react-redux';
import './shopping.scss';
import svgSprite from '../../assets/icons.svg';


const Shopping = props => {
    console.log(props.data);

    return(
        <div className="shopping">
            <h3 className="shopping__head">MY SHOPPING LIST</h3>
            <ul className="shopping__list"> 
                <li className="shopping__list-item">
                    <div className="shopping__list-value">
                        <input type="number" className="shopping__list-num" />
                        <p className="shopping__list-unit">tsp</p>
                    </div>
                    <span className="shopping__list-type">Cold ssdddwater</span>
                    <button className="shopping__list-btn">
                        <svg>
                            <use xlinkHref={`${svgSprite}#icon-circle-with-cross`} />
                        </svg>
                    </button>
                </li>
                <li className="shopping__list-item">
                    <div className="shopping__list-value">
                        <input type="number" className="shopping__list-num" />
                        <p className="shopping__list-unit">tsp</p>
                    </div>
                    <span className="shopping__list-type">Cold ssdddwater</span>
                    <button className="shopping__list-btn">
                        <svg>
                            <use xlinkHref={`${svgSprite}#icon-circle-with-cross`} />
                        </svg>
                    </button>
                </li>
                <li className="shopping__list-item">
                    <div className="shopping__list-value">
                        <input type="number" className="shopping__list-num" />
                        <p className="shopping__list-unit">tsp</p>
                    </div>
                    <span className="shopping__list-type">Cold ssdddwater</span>
                    <button className="shopping__list-btn">
                        <svg>
                            <use xlinkHref={`${svgSprite}#icon-circle-with-cross`} />
                        </svg>
                    </button>
                </li>
                <li className="shopping__list-item">
                    <div className="shopping__list-value">
                        <input type="number" className="shopping__list-num" />
                        <p className="shopping__list-unit">tsp</p>
                    </div>
                    <span className="shopping__list-type">Cold ssdddwater</span>
                    <button className="shopping__list-btn">
                        <svg>
                            <use xlinkHref={`${svgSprite}#icon-circle-with-cross`} />
                        </svg>
                    </button>
                </li>
                <li className="shopping__list-item">
                    <div className="shopping__list-value">
                        <input type="number" className="shopping__list-num" />
                        <p className="shopping__list-unit">tsp</p>
                    </div>
                    <span className="shopping__list-type">Cold ssdddwater</span>
                    <button className="shopping__list-btn">
                        <svg>
                            <use xlinkHref={`${svgSprite}#icon-circle-with-cross`} />
                        </svg>
                    </button>
                </li>
                <li className="shopping__list-item">
                    <div className="shopping__list-value">
                        <input type="number" className="shopping__list-num" />
                        <p className="shopping__list-unit">tsp</p>
                    </div>
                    <span className="shopping__list-type">Cold water</span>
                    <button className="shopping__list-btn">
                        <svg>
                            <use xlinkHref={`${svgSprite}#icon-circle-with-cross`} />
                        </svg>
                    </button>
                </li>
            </ul>
        </div>
    )
}

const getShopItem = state => {
    return {
      data: state.shopping
    }
}

export default connect(getShopItem)(Shopping);