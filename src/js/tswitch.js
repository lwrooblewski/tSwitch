import css from '../less/tswitch.less';
export default class tSwitch {
    constructor(props) {
        this.properties = {
            id: (props.id) ? props.id : false,
            isActive: (props.isActive) ? props.isActive : false,
            isDisabled: (props.isDisabled) ? props.isDisabled : false,
            background: (props.background) ? props.background : '#FFF',
            backgroundActive: (props.backgroundActive) ? props.backgroundActive : '#5d9cec',
            size: (props.size) ? props.size : 'small',
            onActivate: (props.onActivate) ? props.onActivate : false,
            onDeactivate: (props.onDeactivate) ? props.onDeactivate : false,
            didMountCallback: (props.didMountCallback) ? true : false,
        };
        this.destinationElement = false;
        this.render(this.properties.id);
        this.applyCustomStyles();
        this.setActiveState();
        this.toggle = this.toggle.bind(this);
        this.mountListeners();
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

    mountListeners() {
        this.destinationElement.addEventListener("click", this.toggle);
    }

    toggle() {
        if (this.properties.isDisabled === true) {
            return false;
        }
        if (typeof this.properties.onActivate !== 'function' || typeof this.properties.onDeactivate !== 'function') {
            throw new Error('No valid callback were providen');
            return false;
        }
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

    render(id) {
        if (id === false) {
            throw new Error('No valid ID was providen for element to render');
            return false;
        }
        this.destinationElement = document.getElementById(this.properties.id);
        const smallElement = document.createElement("small");
        this.destinationElement.appendChild(smallElement);
        if (this.destinationElement.classList.length === 0 || (this.destinationElement.classList.length > 0 && this.destinationElement.classList.indexOf('t-switch') === -1)) {
            this.destinationElement.classList.add('t-switch');
        }
    }
}

