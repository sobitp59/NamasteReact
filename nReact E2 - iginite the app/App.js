const headings = React.createElement('div', {}, [
    React.createElement('h1', { key : 'H1'}, 'I am H1'),
    React.createElement('h2', { key : 'H2'}, 'I am H2'),
    React.createElement('h3', { key : 'H3'}, 'I am H3'),
    React.createElement('h4', { key : 'H4'}, 'I am H4'),
    React.createElement('h5', { key : 'H5'}, 'I am H5'),
    React.createElement('h6', { key : 'H6'}, 'I am H6'),
] );


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(headings);