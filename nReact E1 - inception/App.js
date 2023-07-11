
/* 
    <div id="parent">
        <div id="child">
            <h1>I AM H1 TAG</h1>
            <h2>I AM H2 TAG</h2>
        </div>
    </div>

    <div id="parent">
        <div id="child">
            <h1>I AM H1 TAG</h1>
            <h2>I AM H2 TAG</h2>
            <img src="" alt=""/>

        </div>
    </div>



*/


const parent = React.createElement("div", {id : "parent"},
    [
        React.createElement('div', {id : "child"},
        [
            React.createElement('h1', {}, "I AM H1 TAG"),
            React.createElement('h2', {}, "I AM H2 TAG"),
        ]
        ),

        React.createElement('div', {id : "child"},
        [
            React.createElement('h1', {}, "I AM H1 TAG"),
            React.createElement('h2', {}, "I AM H2 TAG"),
            React.createElement('img', {id : "image", alt : "react logo", src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo6ZRGEKbGxZPJK1fgifFibJGL-n-SnMTy-M6lik-v&s"}),
        ]
        )
    
]
)

const heading = React.createElement("h1", { id : 'heading', randomAttribut : "randomAttribute"}, "Hello worldd! from React!!!");



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(parent)