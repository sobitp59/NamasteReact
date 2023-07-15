import React from "react";
import ReactDOM from "react-dom/client";


const TitleComponent = () => (
    <h1 className="title">I AM TITLE COMPONENT</h1>
)

const HeadingComponent = () => (
    <div id='container'>
        <TitleComponent />
        <TitleComponent></TitleComponent>
        {TitleComponent()}
        <h1 className="heading">I AM HEADING COMPONENT 😎</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);