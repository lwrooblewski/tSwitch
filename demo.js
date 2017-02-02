import tSwitch from './js/tswitch.js';

const swch = new tSwitch({
    id: 'example-switch',
    didMountCallback: true,
    onActivate: () => {
        console.log('YES!');
    },
    onDeactivate: () => {
        console.log('NO!');
    }
});
