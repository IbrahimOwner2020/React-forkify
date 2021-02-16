import React from 'react';
import { connect } from 'react-redux';
import classes from './searchList.module.css';
import ListItem from './ListItem/ListItem';

const SearchList = props => {
  // const [currentPage, setCurrentPage] = useState(1)
  // const [postPerPage] = useState(10)
  const { isLoading, recipe } = props.data;

  // const indexOfLastPost = currentPage * postPerPage;
  // const indexOfFirstPost = indexOfLastPost - postPerPage;
  // // const currentRecipe = recipe.slice(indexOfFirstPost, indexOfLastPost);

  return (
      <div className={classes.List}>
        <ListItem recipe={recipe} isLoading={isLoading} />
      </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.fetchList
  }
}

export default connect(mapStateToProps)(SearchList);