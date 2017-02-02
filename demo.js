import tSwitch from './src/js/tswitch.js';

const swch = new tSwitch({
    id: 'example-switch',
    didMountCallback: false,
    onActivate: () => {
        console.log('YES!');
    },
    onDeactivate: () => {
        console.log('NO!');
    }
});
