// const heading = React.createElement('h1', { id: 'heading' }, "hey React")
//ReactElement(object) ==HTML(browser understands)

const parent = React.createElement('div', { id: 'parent' },
    [React.createElement('div', { id: 'child' },
        [React.createElement('h1', {}, 'hey! I am h1 tag'),
        React.createElement('h2', {}, 'hey! I am h2 tag')]
    )],
    [React.createElement('div', { id: 'child2' },
        [React.createElement('h1', {}, 'hey! I am h1 tag'),
        React.createElement('h2', {}, 'hey! I am h2 tag')]
    )]
)

console.log(parent);  //object
const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading);
root.render(parent);