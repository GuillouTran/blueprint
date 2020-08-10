import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";
import ReactDOM from 'react-dom';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { title } from "case";
//import SearchBox from "../components/SearchBox/SearchBox.js";

const searchClient = algoliasearch(
  'latency',
  '768a7c6eff9f904e6e63bb92d549e087'
);

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout-container">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        {children}
        <div>
          <InstantSearch
            indexName="prod_GuillouTran"
            searchClient={title}
          >
            <SearchBox />
            <Hits />
          </InstantSearch>
        </div>
      </div>
      
    );
  }
}
