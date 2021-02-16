import React from 'react';
import classes from './Ingre.module.css';
import svgSprite from '../../../../assets/icons.svg';

const Ingre = props => {

    return(
        <li className={classes.ListItem}>
            <svg>
                <use xlinkHref={`${svgSprite}#icon-check`} />
            </svg>
            <span className={classes.ListItemValue}>{props.ingre}</span>
        </li>
    )
}

export default Ingre;