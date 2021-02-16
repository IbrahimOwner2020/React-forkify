import React from 'react';
import { connect } from 'react-redux';
import RecipeDetails from './RecipeDetails/RecipeDetails';

class Recidata extends React.Component {
    render() {
      const { isLoading, recipe } = this.props.data;
      console.log(recipe);
      return (
          <div>
            <RecipeDetails loading={isLoading} data={recipe} />
          </div>
      );
    }
  }
  const mapStateToProps = state => {
    return {
      data: state.fetchRecipe
    }
  }
  
  export default connect(mapStateToProps)(Recidata);