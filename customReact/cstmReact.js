

const reactElement =  {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank',
    },
    children:'Click me'
}

const container = document.querySelector('#root')
/**
 * This function is used to render a custom React-like element into a specified container in the DOM.
 * It creates an HTML element based on the type of the React-like element, sets its innerHTML to the children of the React-like element,
 * and sets its attributes based on the properties of the React-like element.
 * Finally, it appends the created HTML element to the specified container.
 *
 * @param {Object} reactElement - The React-like element to be rendered. It should have a 'type' property specifying the type of the HTML element to be created,
 * a 'props' object containing the properties to be set as attributes on the created HTML element, and a 'children' property specifying the innerHTML of the created HTML element.
 * @param {HTMLElement} container - The container in the DOM where the created HTML element should be appended.
 */
function customRender(reactElement, container) {
    // Create an HTML element based on the type of the React-like element
    const element = document.createElement(reactElement.type)

    // Set the innerHTML of the created HTML element to the children of the React-like element
    element.innerHTML = reactElement.children

    // Iterate over the properties of the React-like element
    Object.keys(reactElement.props).forEach(prop => {
        // console.log(prop)
        // console.log(reactElement.props[prop])
        // For each property, set an attribute on the created HTML element with the same name and value
        element.setAttribute(prop, reactElement.props[prop])
    })

    // Append the created HTML element to the specified container in the DOM
    container.appendChild(element)
}
customRender(reactElement, container)