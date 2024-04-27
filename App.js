/* 
ReactElement(object) => HTML(Browser understands)
*/

const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"Hello, I'm H1 tag"),React.createElement("h2",{},"Hello, I'm H1 tag"),React.createElement("h3 ",{},"Hello, I'm H1 tag")]));


console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);    