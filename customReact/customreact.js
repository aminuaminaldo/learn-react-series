function renderElement (reactElement, container) {
        const domElement = document.createElement(reactElement.type)
        domElement.innerHTML = reactElement.children
        for(prop in reactElement.props) {
            if(prop === 'children') continue
            domElement.setAttribute(prop, reactElement.props[prop])
        }
        container.appendChild(domElement)
}


const reactElement = {
    type: 'a', 
    props: {
        'href': "https://www.youtube.com/@aminuaminaldo",
        'target': '_blank'
    },
    children: 'click to visit google.'
}

const mainContainer = document.querySelector("#root")
renderElement(reactElement, mainContainer)