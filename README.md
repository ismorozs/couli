# Couli
**C**onstructor **O**f **U**ser interfaces **LI**brary.
Another library for creating wannabe webcomponents that automatically change their appearance depending on the inner state as well as execute user-defined logic on DOM and life-cycle events.

The project is pretty small and raw but already seems to be performanceful.

## How to install and prepare
Install the library through
```sh
npm install couli
```
then include with
```js
var Couli = require('couli')
```
or
```js
import Couli from 'couli'
```
in your script file.

```couli.js``` file also can be included on the client through ```script``` tag, and resides at ```/dist/``` folder of the project.  

You can fiddle with the code for the library yourself and generate your own version of the library file with ```npm run-script build```  

For developing and learning process to become easier, start ```webpack-web-server``` with ```npm start``` command, and check out mini example apps at the ```/dist/``` folder.

## Usage
Documentation for the library is quite terse and is recommended to be read along with examining examples from ```/dist/``` folder. Hopefully, that will be enough to understand main API concepts.

## Creating component
Components are created with the call to ```Could.define``` function.
With such signagure:
```js
Couli.define (
  // component name
  String name,
  // string representing component markup. Must have a single root element.
  String markup,
  // entities describing the behavior of parts of the component. May or may not point to markup elements.
  Object bindings,
  // styles to be applied to a given component
  Object styles 
)
```
All arguments except ```name``` and ```markup``` are optional.

### Bindings
Bindings describe the appearance and behavior of parts of a component. They can point to HTML elements within markup through ```x-b``` and ```x-lb``` (the difference is described below) attributes or they can just be used for some internal work calculations.
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
```ci``` - entity allowing to get access to the underlying component, get and set values, move up and down in components hierarchy tree. More on what and how to use ```ComponentInterface``` see below.  

Reactive functions differ in what they return and where they apply:
#### value
Returns value of the binding. The return value can be of any type. ```value``` itself is not applied to the markup unless you don't define ```html``` function.
#### html
Returns what will be ```innerHTML``` of the binding.
#### class
Must return an object with keys as class names and booleans as values expressing whether show or hide each class.
#### style
Must return an object with keys and values expressing what styles to apply to HTML markup.
#### attrs
Must return an object with keys and values expressing what attributes to change in HTML markup.


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
```ci``` - entity allowing to get access to the underlying component, get and set values, move up and down in components hierarchy tree. More on what and how to use ```ComponentInterface``` see below.  

---

#### Hooks
These functions will be called at different binding's life events.
For now:
```mount``` event works only for a whole component (binding name - ```''```) and is called when a component is created and attached to DOM  
```update``` events work for whole components as well as individual bindings, called when a value in a component is updated.  
```remove``` events work for list items, for now, called after list item was removed from DOM

Signature for all component life-cycle handlers is:
```js
LifeCycleHandler (HTMLElement el, value, ComponentInterface ci)
```
Where  
```el``` - HTMLElement binding is attached to.
```value``` - values of the whole component or value of specific binding.  
```ci``` - entity allowing to get access to the underlying component, get and set values, move up and down in components hierarchy tree. More on what and how to use ```ci``` see below.  

---

### Styles
An object containing styles to be applied to a given component. Where the keys are any valid selectors, and values are objects describing styles for these selectors.
To point to binding markup just use the binding name as a selector.

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
If a numeric argument is given, returns ```ComponentInterface``` of the parent component ```num``` levels higher.
If string argument is given, returns ```ComponentInterface``` of the parent component with ```componentUserName``` user-defined component name.
##### .markup(String bindingName)
Returs HTMLElement binding with ```bindingName``` is assigned to.

### x-b and x-lb difference
```x-b``` attribute points to HTMLElement for the binding
```x-lb``` attribute is assigned to HTMLElements that will have the role of list containers.  
Such list bindings receive additional logic for rendering and mutating arrays of data.
HTMLElement with ```x-lb``` attribute must have one child element which will be considered as a template for list item.

## Applying components to page markup
Finally to apply created components to markup call ```Couli.apply(String markupSelector)```  
where ```markupSelector``` is a selector pointing to a place in your HTML document where you placed your custom ```Couli``` components.
