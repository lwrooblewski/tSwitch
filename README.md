# tSwitch
tSwitch - iOS switch alternative for web development. No third-party needed.

Lightweight plugin for replacing standard checkbox with iOS-like design switch. All you need to do is just import module and create simple object with properties. And what is most improtant - works without jQuery.

# Short example:
````javascript
import 'tswitch/dist/styles.css';
import tSwitch from 'tswitch'

const swch = new tswitch({
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
````

tSwitch replace checkbox input with custom component from now.

# Options

`element` - selected HTMLElement object  
`additionalClass [string]` - optional parameter which adds string to a tSwitch class list  
`size [string | default 'medium' | 'x-small' | 'small' | 'medium' | 'large' ]` - sets class with associated scale transform  
`isActive [boolean | default false]` - sets start active state  
`isDisabled [boolean | default false]` - sets start disabled state   
`background [string | default #FFF]` - sets background color  
`backgroundActive [string | default #5D9CEC]` - sets active state background color  
`didMountCallback [boolean]` - triggers callback onActivate or onDeactivate depends on earlier passed isActive option when tSwitch is created  
`onActivate [function]` - callback when switch is being active  
`onDeactivate [function]` - callback when switch is being deactivated  
`onToggle [function]` - callback when switch state is being toggled  

# Methods
`getIsActive() [boolean]` - return boolean depends on switch state
`setActive(newStatus, preventCallback) [boolean]` - changes switch state depends on newStatus and execute or not onActivate or onDeactivate callback


# Feedback
Feel free to open issues or contribute. Contact me at <a href="mailto:l.wrooblewski@gmail.com">l.wrooblewski@gmail.com</a> or my <a href="https://pl.linkedin.com/in/wroblewskilukasz">LinkedIn profile</a>.

