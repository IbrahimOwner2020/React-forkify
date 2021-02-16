import React from 'react';
import classes from './ListItem.module.css';
import axios from 'axios';
import { connect } from 'react-redux';
import svgSprite from '../../../assets/icons.svg';

const ListItem = props => {
    const limitRecipeTitle = (title, limit = 15) => {
        const newTitle = [];
        if (title.length > limit) {
            title.split(' ').reduce((acc, cur) => {
                if (acc + cur.length <= limit) {
                    newTitle.push(cur);
                }
                return acc + cur.length;
            }, 0);
        
            return `${newTitle.join(' ')} ...`;
        }
        return title;
    }

    if (props.isLoading) {
        return (
            <svg className={classes.Loading}>
                <use xlinkHref={`${svgSprite}#icon-cw`} />
            </svg>
        )
    }

    async function getRecipe(id)  {
        props.dispatch({
            type: "GET-LOADING",
            load: true
        });
        const response = await axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
        try {
            console.log(response);
          props.dispatch({
                type: "GET-RECIPE",
                recipe: response,
                load: false
            });
        }
         catch (error) {
          props.dispatch({
                type: "GET-ERRORS",
                error: true,
                load: false
            });
        }
      }

    return(
        <div>
            {props.recipe.map(recipe => (
                <a key={recipe.recipe_id} href={`#${recipe.recipe_id}`} onClick={() => getRecipe(recipe.recipe_id)} className={classes.Item}>
                    <img src={recipe.image_url} alt={recipe.title} className={classes.Img}/>
                    <div className={classes.Details}>
                        <h3>{limitRecipeTitle(recipe.title)}</h3>
                        <span>{recipe.publisher}</span>
                    </div>
                </a>))
            }
        </div>
    )
}

export default connect(null)(ListItem);