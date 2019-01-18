# Couli
**C**onstructor **O**f **U**ser interfaces **LI**brary.
Another library for creating wanabe-webcomponents that automatically change their appearance dependening on the inner state as well as execute user-defined logic on DOM and life-cycle events.

Project is pretty small and raw, but already seems to be performanceful.

## Where to get
Ready to use library file is named `couli.js` and located at ```/dist/``` folder of the project.
If you are interested in developing and creating your own, ```npm build``` it, being in root folder. (```git clone```ing and ```npm install```ing project before that, obviously)

## Usage
Documentation is quite terse for now. Please refer to example files at `/dist/` folder as well to get clearer understanding.
For checking out how example files work, start a ```webpack``` server through ```npm start``` command.
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
  value: ReactiveFunction (BindingsValues, ComponentInterface),
  html: ReactiveFunction (BindingsValues, ComponentInterface),
  style: ReactiveFunction (BindingsValues, ComponentInterface),
  class: ReactiveFunction (BindingsValues, ComponentInterface),
  attrs: ReactiveFunction (BindingsValues, ComponentInterface)
  events: {
    [domEventName]: EventHandler (Event, HTMLElement, ComponentInterface),
    ...
  },
  hooks: {
    [lifeCycleEventName]: EventHandler (HTMLElement, ComponentValues, ComponentInterface),
    ...
  }
}
```
Binding with the name of ```''``` (empty string) is considered to be a component binding. Its configuration will be applied to the whole component. 
#### Binding options
```value```, ```html```, ```style```, ```class``` and ```attrs``` functions will reevaluate each time values of bindings they listen to change  
all of them have the following common signature:  
```ReactiveFunction (Object bindingsValues, ComponentInterface ci)```
Where:
```bindingsValues``` - values of all bindings in the component.  
```ci``` - entity allowing to get access to underlying component, get and set values, move up and down in components hierarhcy tree. More on what and how to use ```ComponentInterface``` see below.  

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


#### Events
```events``` object contains event handlers for a piece of markup you assign a binding to.  
Keys in ```events``` object are any valid event names (```mouseup```, ```blur```, ```keyup``` etc.).
Signature for all event handlers is:
```js
EventHandler (Event e, HTMLElement el, ComponentInterface ci)
```
Where:  
```e``` - Event object.
```el``` - HTMLElement binding is attached to.
```ci``` - entity allowing to get access to underlying component, get and set values, move up and down in components hierarhcy tree. More on what and how to use ```ComponentInterface``` see below.  

---

#### Hooks
These functions will be called at different binding's life events.
For now
```mount``` event works only for a whole component (binding name - ```''```) and is called when a component is created and attached to DOM  
```update``` events works for whole components as well as individual bindings, called when value in a component is updated.  
```remove``` events works for list items for now, called after list item was removed from DOM

Signature for all component life-cycle handlers is:
```js
LifeCycleHandler (HTMLElement el, value, ComponentInterface ci)
```
Where  
```el``` - HTMLElement binding is attached to.
```value``` - values of the whole component or value of specific binding.  
```ci``` - entity allowing to get access to underlying component, get and set values, move up and down in components hierarhcy tree. More on what and how to use ```ci``` see below.  

---

### Styles
Object containing styles to be applied to a given component. Where the keys are any valid selectors, and values are objects describing styles for these selectors.
To addrees binding markup just use binding name as selector.

---

### ComponentInterface
```ComponentInterface``` is a thing that allows getting and setting binding values on the component, getting component and binding markups as well as moving from one component to another.
Methods:
##### .get(String key)
Returns value of the binding with ```key``` name. Or if ```key``` is ```undefined``` returns object of all values of the component.
##### .set(Object changeHash)
Sets values of the component's bindings to values of ```changeHash``` where keys are binding names.
##### .up()
##### .up(Number num)
##### .up(String componentUserName)
If no argument is given, returns ```ComponentInterface``` of the parent component.  
If numeric argument is given, returns ```ComponentInterface``` of the parent component ```num``` levels higher.
If string argument is given, returns ```ComponentInterface``` of the parent component with ```componentUserName``` user-defined component name.
##### .markup(String bindingName)
Returs HTMLElement binding with ```bindingName``` is assigned to.

### x-b and x-lb difference
```x-b``` attribute points to HTMLElement for the binding
```x-lb``` attribute is assigned to HTMLElements that will have the role of list containers.  
Such list bindings receive additional logic for rendering and mutating arrays of data.
HTMLElement with ```x-lb``` attribute must have one child element which will be considered as template for list item.

## Applying components to page markup
Finally to apply created components to markup call ```Couli.apply(String markupSelector)```  
where ```markupSelector``` is a selector pointing to a place in your html document where you placed your custom ```Couli``` components.





















