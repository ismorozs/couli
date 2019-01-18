# Couli
**C**onstructor **O**f **U**ser interfaces **LI**brary.
Another library for creating wanabe-webcomponents that automatically change their appearance dependening on the inner state as well as execute user-defined logic on DOM and life-cycle events.

Project is pretty small and raw, but already seems to be performanceful.

## Where to get
Ready to use library file is named `couli.js` and located at ```/dist/``` folder of the project.
If you are interested in developing and creating your own, ```npm build``` it, being in root folder. (```git clone```ing and ```npm install```ing project before that, obviously)

## Usage
## Creating component
Components are created with the call to ```Could.define``` function.
With such signagure:
```js
Couli.define (
  // component name
  String name,
  // string representing component markup. Must have a single root element.
  String markup,
  // entities describing behavior of parts of component. May or may not point to markup elements.
  Object bindings,
  // functions that are invoked at different points of component life-cycle
  Object lifeCycleHooks,
  // styles to be applied to a given component
  Object styles 
)
```
All arguments except ```name``` and ```markup``` are optional.

### Bindings
Bindings describe appearance and behavior of parts of component. They can point to html elements within markup through ```x-b``` and ```x-lb``` (difference below) attributes, or they can just be used for some internal work calculations.
Bindings are defined inside the ```bidings``` hash with keys as binding names and values as binding options.  
Binding can have the following options:
```js
{
  value: ReactiveFunction (BindingsValues, ComponentAccessor),
  html: ReactiveFunction (BindingsValues, ComponentAccessor),
  style: ReactiveFunction (BindingsValues, ComponentAccessor),
  class: ReactiveFunction (BindingsValues, ComponentAccessor),
  attrs: ReactiveFunction (BindingsValues, ComponentAccessor)
  events: {
    [domEventName]: EventHandler (Event, HTMLElement, ComponentAccessor),
    ...
  },
  hooks: {
    [lifeCycleEventName]: EventHandler (HTMLElement, ComponentValues, ComponentAccessor),
    ...
  }
}
```
#### Binding options
```value```, ```html```, ```style```, ```class``` and ```attrs``` functions will reevaluate each time values of bindings they listen to change  
all of them have the following common signature:  
```ReactiveFunction (Object bindingsValues, ComponentAccessor accessor)```
Where:
```bindingsValues``` - values of all bindings in the component.  
```accessor``` - entity allowing to get access to underlying component, get and set values, move up and down in components hierarhcy tree. More on what and how to use ```ComponentAccessor``` see below.  

But these functions differ in what they return and where they apply:
##### value
Returns value of the binding. Can be anything. Not applied to the markup, except ```html``` is not defined.  
##### html
Returns what will be ```innerHTML``` of the binding. If omitted ```value``` will be applied instead. 
##### class
Must return object with keys as class names and booleans as values expressing whether show or hide each class.
##### style
Must return object with keys and values expressing what styles to apply to html markup.
##### attrs
Must return object with keys and values expressing what attributes to change in html markup.

---
Hypothetical examples with imaginary ```A```, ```B``` and ```C``` bindings on imaginary component ```example```.
```js
Couli.define('example',
    '<div>
        <span x-b='A'></span> = <input x-b="B"> + <input x-c="c">
    </div>',
    {
        A: {
            // value of binding 'A' will be the sum of 'B' and 'C' and reevalute each time they change
            // 'innerHTML' of A binding will be string concatenation of a const value and C value itself
            value: ($) => $.B + $.C,
            html: ($) => 'value of A: ' + $.A
            
            // adding or removing of class 'exampleClass' will depend on whether 'B' and 'C' are equal 
            class: ($) => ({ exampleClass: $.B === $.C })
        },
        B: {
            // value of 'exampleAttr' depends on value of 'A'
            attrs: ($) => ({ exampleAttr: $.A })
        },
        
        C: {
            // 'color' style attribute of 'C' binding markup will depend on 'B' binding value
            style: ($) => ({ color: 'rgb(255,255, ' + $.B +  ')' })
        }
    });
```

Library will watch for value changes in bindings specified through the first argument (```$``` in example above), and invoke corresponding functions each time they are changed, and then apply change to the markup if new value differs from previous one.  
Reactive function has a second argument ```accessor``` through which you can also get values, but those values won't be tracked.
```js
C: {
    // values of 'A' and 'B' will be tracked, but value of D won't, if it changes reevaluation won't happen
    style: ($, accessor) => ({ color: 'rgb(' + $.A + ',' + $.B + ',' + accessor.get('D') })
}
```

#### Events
```events``` object contains event handlers for a piece of markup you assign a binding to.  
Keys in ```events``` object are any valid event names (```mouseup```, ```blur```, ```keyup``` etc.).
Signature for all event handlers is:
```js
EventHandler (Event e, HTMLElement el, ComponentAccessor accessor)
```
Where:  
```e``` - Event object.
```el``` - HTMLElement binding is attached to.
```accessor``` - entity allowing to get access to underlying component, get and set values, move up and down in components hierarhcy tree. More on what and how to use ```ComponentAccessor``` see below.  

---

Example:
```js
Couli.define('example',
  /* markup */,
  A: {
    events: {
      click: (e, el, accessor) => alert('Current sum of B and C is ' + accessor.get('A'))
    }
  }
)
```

#### Hooks (binding level)
These functions will be called at different binding's life events.
Only ```update``` hook is available, and is called when value of underlying binding is changed.
Signature for all component life-cycle handlers is:
```js
LifeCycleHandler (HTMLElement el, value, ComponentAccessor accessor)
```
Where  
```el``` - HTMLElement binding is attached to.
```value``` - updated value.  
```accessor``` - entity allowing to get access to underlying component, get and set values, move up and down in components hierarhcy tree. More on what and how to use ```ComponentAccessor``` see below.  

---

Example:
```js
Couli.define('example',
  /* markup */
  B: {
    hooks: {
      update: (el, newValue, accessor) => alert('New value of binding B is ' + newValue),
    }
  }
)
```

---

### Hooks (component level)
These functions will be invoked at different points of component life-cycle.
```mount```, ```update``` and ```remove``` hooks are available for now.  
Signature is the same as for binding level hooks a little above
```js
LifeCycleHandler (HTMLElement el, Object bindingsValues, ComponentAccessor accessor)
```
But  
```el``` - HTMLElement of the component.
```bindingsValues``` - values of all bindings in the component.  
```accessor``` - entity allowing to get access to underlying component, get and set values, move up and down in components hierarhcy tree. More on what and how to use ```ComponentAccessor``` see below.  

---

### Styles
Object containing styles to be applied to a given component. Where the keys are any valid selectors, and values are objects describing styles for these selectors.
To addrees binding markup just use binding name as selector.

---

Example:  
```js
Couli.define('example',
  /* other arguments */
  {
    '': 
      // empty key points to the styles of the component itself
      fontSize: 15,
    },
    A: {
      // 'A' selector will point to markup it assigned to
      backgroundColor: 'OrgangeRed',
    }
    
    // style rules can be applied to multiple elements listed through comma
    'B, C': {
        fontSize: 20,
    }
    
    // rules will be applied to '.exampleSelector' element withing A binding markup
    'A .exampleSelector': {
        ...
    }
  }
 )
```

### ComponentAccessor
```ComponentAccessor``` is a thing that allows getting and setting binding values on the component, getting component and binding markups as well as moving from one component to another.
Methods:
##### .get(String key)
Returns value of the binding with ```key``` name. Or if ```key``` is ```undefined``` returns object of all values of the component.
##### .set(Object changeHash)
Sets values of the component's bindings to values of ```changeHash``` where keys are binding names.
##### .up()
##### .up(Number num)
##### .up(String componentUserName)
If no argument is given, returns ```ComponentAccessor``` of the parent component.  
If numeric argument is given, returns ```ComponentAccessor``` of the parent component ```num``` levels higher.
If string argument is given, returns ```ComponentAccessor``` of the parent component with ```componentUserName``` user-defined component name.

### x-b and x-lb difference
```x-b``` attribute points to HTMLElement for the binding
```x-lb``` attribute is assigned to HTMLElements that will have the role of list containers.  
Such list bindings receive additional logic for rendering and mutating arrays of data.
HTMLElement with ```x-lb``` attribute must have one child element which will be considered as template for list item.

## Applying components to page markup
Finally to apply created components to markup call ```Couli.apply(String markupSelector)```  
where ```markupSelector``` is a selector pointing to a place in your html document where you placed your custom ```Couli``` components.

---

Example:
```js
// example.html
...
<div id="container">
  <example></example>
</div>
...
// example.js
Couli.apply('#container')
```





















