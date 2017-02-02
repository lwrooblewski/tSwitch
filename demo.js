import tSwitch from './js/tswitch.js';
import css from './less/tswitch.less';

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
