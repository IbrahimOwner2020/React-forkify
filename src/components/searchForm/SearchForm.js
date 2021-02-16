import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './SearchForm.module.css';
import svgSprite from '../../assets/icons.svg';
import axios from 'axios';


class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.dispatch({
          type: "SET_FORMVALUES",
          payload: this.state.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.getPosts()
        this.setState({value: ''});
    }

    async getPosts() {
        this.props.dispatch({
            type: "GET-LOAD",
            load: true
        });
        const response = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${this.state.value}`);
        try {
            this.props.dispatch({
                type: "GET-DATA",
                posts: response.data.recipes,
                load: false
            });
        } catch (error) {
          this.props.dispatch({
            type: "ERROR-DATA",
            load: false,
            error
        });
        }
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} className={classes.Search}>
                <label>
                    <input 
                        type="text" 
                        value={this.state.value} 
                        onChange={this.handleChange} 
                        className={classes.text} 
                        placeholder="Search over 1,000,000 recipes"
                    />
                </label>
                <button className={classes.btn} type="submit">
                    <svg>
                        <use xlinkHref={`${svgSprite}#icon-magnifying-glass`} />
                    </svg>
                    <span>SEARCH</span>
                </button>
            </form>
        );
    }
}
  
export default connect(null)(SearchForm);