import algoliasearch from 'algoliasearch'
import React from 'react'
import {
  AutoComplete,
  Configure,
  Index,
  InstantSearch
} from 'react-instantsearch-dom';

const appId = process.env.ALGOLIA_APP_ID;
const searchKey = process.env.ALGOLIA_SEARCH_KEY;
const searchClient = algoliasearch(appId, searchKey);

const Search = () =>
    (<InstantSearch indexName = "Posts" searchClient = {searchClient}>
     <Index indexName = "Posts">
     <Configure hitsPerPage = { 5 } />
      <AutoComplete />
     </Index>
  </InstantSearch>

    );

export default Search;