import css from '../less/tswitch.less';
export default class tSwitch {
    constructor(props) {
        this.properties = {
            element: (props.element) ? props.element : false,
            isActive: (props.isActive) ? props.isActive : false,
            isDisabled: (props.isDisabled) ? props.isDisabled : false,
            background: (props.background) ? props.background : '#FFF',
            backgroundActive: (props.backgroundActive) ? props.backgroundActive : '#5d9cec',
            size: (props.size) ? props.size : 'small',
            onActivate: (props.onActivate) ? props.onActivate : (()=> {
            }),
            onDeactivate: (props.onDeactivate) ? props.onDeactivate : (()=> {
            }),
            onToggle: (props.onToggle) ? props.onToggle : (()=> {
            }),
            didMountCallback: (props.didMountCallback) ? true : false,
        };
        this.replacedElement = this.properties.element;
        this.destinationElement = false;
        this.render();
        this.applyCustomStyles();
        this.setActiveState();
        this.toggle = this.toggle.bind(this);
        this.getIsActive = this.getIsActive.bind(this);
        this.mountListeners();
    }

    insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    setActiveState() {
        if (this.properties.isDisabled === true) {
            this.destinationElement.classList.add('disabled');
        }

        if (this.properties.isActive === true) {
            this.destinationElement.classList.add('active');
            if (this.properties.didMountCallback === true) {
                this.properties.onActivate();
            }
        } else {
            if (this.properties.didMountCallback === true) {
                this.properties.onDeactivate();
            }
        }
    }

    getIsActive() {
        return this.properties.isActive;
    }

    mountListeners() {
        this.destinationElement.addEventListener("click", this.toggle);
    }

    toggle() {
        if (this.properties.isDisabled === true) {
            return false;
        }
        this.properties.onToggle(!this.properties.isActive);
        const status = this.destinationElement.classList.toggle('active');
        if (status === true) {
            this.properties.onActivate();
            this.properties.isActive = true;
            this.destinationElement.style.boxShadow = `${this.properties.backgroundActive} 0 0 0 11px inset`;
        } else {
            this.properties.onDeactivate();
            this.properties.isActive = false;
            this.destinationElement.style.boxShadow = `rgb(223, 223, 223) 0 0 0 0 inset`;
        }
    }

    applyCustomStyles() {
        this.destinationElement.style.backgroundColor = this.properties.background;
        this.destinationElement.classList.add(this.properties.size);
    }

    render() {
        if (this.properties.element === false) {
            throw new Error('No valid ID was providen for element to render');
            return false;
        }
        if (this.properties.element.getAttribute('type') !== 'checkbox'){
            throw new Error('Pointed element is not a checkbox type');
            return false;
        }
        this.replacedElement.style.display = 'none';
        const destinationElement = document.createElement("span");
        destinationElement.classList.add('t-switch');
        const smallElement = document.createElement("small");
        destinationElement.appendChild(smallElement);
        this.destinationElement = destinationElement;
        this.properties.element.parentNode.insertBefore(destinationElement, this.properties.element.nextSibling);
    }
}

