import React from 'react';
import classes from './Body.module.css';
import SearchList from '../../components/searchList/searchList';
import Shopping from '../../components/shoppingList/shopping';
import Recidata from '../../components/recipeDe/recipe';

const Body = () => (
    <div className={classes.Body}>
        <SearchList />
        <Recidata />
        <Shopping />
    </div>
);

export default Body;