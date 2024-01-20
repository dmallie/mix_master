import React from "react";
import WrapperSearchForm from "../assets/wrapper_searchForm";

const SearchForm = () => {
       return(
<WrapperSearchForm>
<div className="container">
       <form className="form-section">
              <input placeholder="Search Cocktail of Your Choice" className="form-input"
                     type="search" id="search" name="search">
              </input>
              <button className="btn">search</button>
       </form>
</div>
</WrapperSearchForm>
       )
}; export default SearchForm;