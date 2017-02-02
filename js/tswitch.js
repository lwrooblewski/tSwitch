export default class tSwitch {
    constructor(props) {
        this.properties = {
            id: (props.id) ? props.id : false,
            isActive: (props.isActive) ? props.isActive : false,
            isDisabled: (props.isDisabled) ? props.isDisabled : false,
            background: (props.background) ? props.background : '#FFF',
            backgroundActive: (props.backgroundActive) ? props.backgroundActive : '#5d9cec',
            size: (props.size) ? props.size : 's'
        };
        this.render(this.properties.id)
    }

    render(id){
        if (id === false){
            throw new Error ('No valid ID was providen for element to render');
            return false;
        }
        const smallElement = document.createElement("small");
        const destinationElement = document.getElementById(id);
        destinationElement.appendChild(smallElement);
        if (destinationElement.classList.indexOf('t-switch') === -1){
            destinationElement.classList.add('t-switch');
        }
    }
}

