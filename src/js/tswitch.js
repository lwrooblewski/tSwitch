export default class tSwitch {
    constructor(props) {
        this.properties = {
            element: (props.element) ? props.element : false,
            isActive: (props.isActive) ? props.isActive : false,
            isDisabled: (props.isDisabled) ? props.isDisabled : false,
            background: (props.background) ? props.background : '#FFF',
            backgroundActive: (props.backgroundActive) ? props.backgroundActive : '#5d9cec',
            size: (props.size) ? props.size : 'medium',
            additionalClass: (props.additionalClass) ? props.additionalClass : '',
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
        this.didMountActiveState();
        this.toggle = this.toggle.bind(this);
        this.getIsActive = this.getIsActive.bind(this);
        this.mountListeners();
    }

    insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    didMountActiveState() {
        if (this.properties.element.checked === true){
            this.properties.isActive = true;
        }

        if (this.properties.isDisabled === true) {
            this.destinationElement.classList.add('disabled');
        }

        if (this.properties.isActive === true) {
            this.destinationElement.classList.add('active');
            this.properties.element.checked = true;
            if (this.properties.didMountCallback === true) {
                this.properties.onActivate();
            }
        } else {
            this.properties.element.checked = false;
            if (this.properties.didMountCallback === true) {
                this.properties.onDeactivate();
            }
        }
    }

    getIsActive() {
        return this.properties.isActive;
    }

    setActive(status, preventCallback = false){
        if (status === true) {
            if (!preventCallback) {
                this.properties.onActivate();
            }
            this.destinationElement.classList.add('active');
            this.properties.isActive = true;
            this.properties.element.checked = true;
            this.destinationElement.style.boxShadow = `${this.properties.backgroundActive} 0 0 0 11px inset`;
        } else {
            if (!preventCallback) {
                this.properties.onDeactivate();
            }
            this.destinationElement.classList.remove('active');
            this.properties.isActive = false;
            this.properties.element.checked = false;
            this.destinationElement.style.boxShadow = `rgb(223, 223, 223) 0 0 0 0 inset`;
        }
    }

    mountListeners() {
        this.destinationElement.addEventListener('click', this.toggle);
    }

    toggle() {
        if (this.properties.isDisabled === true) {
            return false;
        }
        this.properties.onToggle(!this.properties.isActive);
        const status = this.destinationElement.classList.toggle('active');
        this.setActive(status);
    }

    applyCustomStyles() {
        this.destinationElement.style.backgroundColor = this.properties.background;
        this.destinationElement.classList.add(this.properties.size);
    }

    render() {
        if (this.properties.element === false) {
            throw new Error('No valid element was providen for element property to render');
            return false;
        }
        if (this.properties.element.getAttribute('type') !== 'checkbox'){
            throw new Error('Pointed element is not a checkbox type');
            return false;
        }
        this.replacedElement.style.display = 'none';
        const destinationElement = document.createElement('span');
        destinationElement.classList.add('t-switch');
        const smallElement = document.createElement('small');
        destinationElement.appendChild(smallElement);
        this.destinationElement = destinationElement;
        this.properties.element.parentNode.insertBefore(destinationElement, this.properties.element.nextSibling);
        if (this.properties.additionalClass){
            destinationElement.classList.add(this.properties.additionalClass);
        }
    }
}

// module.exports = tSwitch;