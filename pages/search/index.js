import React, { Fragment } from 'react';

import { Card, Grid } from '../../components/Card';
import Layout from '../../components/Layout';
import TraceSpinner from '../../components/TraceSpinner';
import { fetchQuery } from '../../utils/fetchQuery';
import { generateKey } from '../../utils/keyGenerator';
import useDebounce from '../../utils/useDebounce';

const Search = () => {
    const [value, setSearchValue] = React.useState('');
    const [isSearching, setIsSearching] = React.useState(false);
    const [results, setResults] = React.useState([]);
    const debouncedSearchValue = useDebounce(value, 500);

    React.useEffect(() => {
        // Make sure we have a value
        if (debouncedSearchValue) {
            // Set isSearching state
            setIsSearching(true);
            setResults([]);
            // Fire off our API call
            fetchQuery(debouncedSearchValue).then((results) => {
                // Set back to false since request finished
                setIsSearching(false);
                // Set results state
                setResults(results);
            });
        } else {
            setResults([]);
        }
    }, [debouncedSearchValue]);

    return (
        <Layout>
            <input
                placeholder="Search University"
                onChange={(e) => setSearchValue(e.target.value)}
            />
            {isSearching && <TraceSpinner />}
            {!isSearching && results.length === 0 && 'No Content'}
            <Grid>
                {results.map((result, idx) => {
                    const [domain] = result.domains;
                    const [pages] = result.web_pages;
                    return (
                        <Card key={generateKey(`${domain}_${pages}_${idx}`)}>
                            <h4>
                                <img src="/university.svg" alt="University" />
                                {` ${result.name}`}
                            </h4>
                            <span>
                                <img
                                    alt={result.alpha_two_code}
                                    src={`https://www.countryflags.io/${result.alpha_two_code.toLowerCase()}/shiny/64.png`}
                                />
                                {` ${result.country}`}
                            </span>
                            {result.web_pages.length > 0 && (
                                <div>
                                    {result.web_pages.map((page) => (
                                        <Fragment key={generateKey(`${page}_${domain}`)}>
                                            <img alt={result.alpha_two_code} src="/www.svg" />
                                            <span>{` ${page}`}</span>
                                        </Fragment>
                                    ))}
                                </div>
                            )}
                        </Card>
                    );
                })}
            </Grid>
        </Layout>
    );
};

export default Search;
