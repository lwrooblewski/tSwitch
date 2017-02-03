import tSwitch from './src/js/tswitch.js';
import './src/less/tswitch.less';
const swch = new tSwitch({
    element: document.getElementById('example-switch'),
    onActivate: () => {
        console.log('onActivate');
    },
    onDeactivate: () => {
        console.log('onDeactivate');
    },
    onToggle: (checked) => {
        if (checked){
            console.log('On toggle checked');
        } else {
            console.log('On toggle unchecked');
        }
    }
});
