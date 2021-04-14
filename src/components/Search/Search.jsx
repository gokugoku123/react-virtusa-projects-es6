import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

const Search = props => {


    const [term, setTerm] = useState('programming');
    const [searchResults, setSearchResults ] = useState([]);

    const updateSearchResults = (data) => {
        const [searchResults, searchLinks ] = [data[1], data[3]];

        let newSearchResults = [];

       for(let i = 0; i < searchResults.length; i++) {
           newSearchResults.push(<a target="_blank" data-testid="suggestion" key={Math.random()* 100 * Date.now()} className="listItem" href={searchLinks[i]}>{searchResults[i]}</a>)
       }

       setSearchResults(newSearchResults);
    }


    useEffect(() => {
        const initiateSearch = async () => {

            if(term === '') {
                await setTimeout(() => {
                    setSearchResults([])
                }, 200);
                return;
            }

            const val = await axios.get('https://en.wikipedia.org/w/api.php', {
                params : {
                    action : 'opensearch',
                    origin : '*',
                    search : term
                }
            });
            await console.log(val.data);
            updateSearchResults(val.data);
        }

        const timeOutId = setTimeout(() => {
            initiateSearch();
                
        } , 500);

        return () => {
            clearTimeout(timeOutId);
        }

    }, [term]);

    return (
        <Fragment>
            <h1><center>Wiki Search</center></h1>
            <div className="SearchContainer">
                <div className="ui input center">
                    <input data-testid="searchterm" type="text" onChange={(event) => setTerm(event.target.value)} value={term} placeholder="Search..." className="" />
                </div>
                    <div className="ui list">
                    {searchResults}
                </div>
            </div>
        </Fragment>
    );
}

export default Search;