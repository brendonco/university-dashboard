const baseUrl = 'http://universities.hipolabs.com/search?name=';

async function fetchQuery(name = null) {
    const response = await fetch(`${baseUrl}${name}`);
    const data = await response.json();
    return data;
}
export { fetchQuery };
