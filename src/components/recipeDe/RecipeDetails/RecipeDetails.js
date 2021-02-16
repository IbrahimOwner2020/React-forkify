import React from 'react';
import classes from './RecipeDetails.module.css';
import svgSprite from '../../../assets/icons.svg';
import Ingre from './Ingre/Ingre';
import { connect } from 'react-redux';

const RecipeDetails = props => {
    if (props.loading) {
        return (
            <svg className={classes.Loading}>
                <use xlinkHref={`${svgSprite}#icon-cw`} />
            </svg>
        )
    }

    const data = props.data;

    if (props.data !== null) {
        return (
            <div className={classes.Recipe}>
                <div className={classes.Img}><img src={data.image_url} alt="pizza image" className={classes.ImgImg}/></div>
                <h1 className={classes.Title}>{data.title}</h1>
                <div className={classes.Details}>
                    <div className={classes.DetailsTime}>
                        <svg>
                            <use xlinkHref={`${svgSprite}#icon-stopwatch`} />
                        </svg>
                        <span className={classes.word}>90 MINUTES</span>
                    </div>
                    <div className={classes.Serving}>
                        <svg>
                            <use xlinkHref={`${svgSprite}#icon-man`} />
                        </svg>
                        <span className={classes.ServingWord}>4 SERVING</span>
                        <div className={classes.ServingNew}>
                            <button className={classes.ServingMinus}>
                                <svg>
                                    <use xlinkHref={`${svgSprite}#icon-circle-with-minus`} />
                                </svg>
                            </button>
                            <button className={classes.ServingPlus}>
                                <svg>
                                    <use xlinkHref={`${svgSprite}#icon-circle-with-plus`} />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <a href="/" className={classes.ServingLike}>
                        <svg>
                            <use xlinkHref={`${svgSprite}#icon-heart`} />
                        </svg>
                    </a>
                </div>
                <div className={classes.Ingredients}>
                    <ul className={classes.IngredientsList}>
                        {data.ingredients.map(data => {
                            return(
                                <Ingre ingre={data} />
                            )
                        })}
                    </ul>
                    <div className={classes.IngreBtn}>
                        <button 
                            onClick={() => props.dispatch({
                                type: "GET-SHOPPING",
                                shopping: data.ingredients
                            })} 
                            className={classes.IngreBtnAdd}>
                            <svg>
                                <use xlinkHref={`${svgSprite}#icon-shopping-cart`} />
                            </svg>
                            <span>ADD TO SHOPPING LIST</span>
                        </button>
                    </div>
                    <div className={classes.Chef}>
                        <h2 className={classes.ChefTitle}>HOW TO COOK IT</h2>
                        <p className={classes.ChefPara}>This recipe was carefully designed and tested by <span className={classes.ChefParaName}>{data.publisher}</span>. Please check the directions at their website.</p>
                        <a href={data.publisher_url} className={classes.ChefBtn}>
                            <span>DIRECTIONS</span>
                            <svg>
                                <use xlinkHref={`${svgSprite}#icon-triangle-right`} />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <h3>Please choose a recipe</h3>
    )
}

export default connect(null)(RecipeDetails);