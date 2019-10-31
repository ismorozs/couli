# Couli
**C**onstructor **O**f **U**ser interfaces **LI**brary.
Library for creating webcomponents that automatically change their appearance depending on the inner state as well as execute user-defined logic on DOM and life-cycle events.  

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
CouliComponent component = Couli.define (
  // string representing component markup. Must have a single root element.
  String markup,
  // entities describing the behavior of parts of the component. May or may not point to markup elements.
  Object bindings,
  // styles to be applied to a given component
  Object styles
  // tag to component mapping for inserting child components
  Object childCompnents
)
```
All arguments except ```markup``` are optional.

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
    [domEventName]: EventHandler (Event, ComponentInterface),
    ...
  },
  hooks: {
    [lifeCycleEventName]: EventHandler (ComponentValues, ComponentInterface),
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
EventHandler (Event e, ComponentInterface ci)
```
Where:  
```e``` - Event object.  
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
LifeCycleHandler (ComponentValues, ComponentInterface ci)
```
Where  
```value``` - values of the whole component or value of a specific binding.  
```ci``` - entity allowing to get access to the underlying component, get and set values, move up and down in components hierarchy tree. More on what and how to use ```ci``` see below.  

---

### Styles
An object containing styles to be applied to a given component. Where the keys are any valid selectors, and values are objects describing styles for these selectors.
To point to binding markup just use the binding name as a selector.  

### ComponentNesting
If ```childComponents``` argument is added to ```Couli.define``` function, the library will search for tags corresponding to the keys in this object and replace them with the corresponding components.
Signature for defining child components:
```js
{
    tagName: [ CouliComponent component, Links { childBindingName: bindingName } ]
}
```
where:
```tagName``` - tags in the component being defined you want to replace to components
```component``` - component for replacement
```Links``` - optional object to declare direct dependence of bindings of the component and child components, where ```childBindingName``` - binding name in a child component and ```bindingName``` - binding name in the component.

---

### ComponentInterface
```ComponentInterface``` is a thing that allows getting and setting binding values on the component, getting component and binding markups as well as moving from one component to another.
Methods:
##### .get(String key)
Returns value of the binding with ```key``` name. Or if no argument is given, returns an object of all values of the component.
If you are trying to get the value of a list binding, then instead of receiving the value itself, you will get another interface ```ArrayInterface``` for working with this list of values through which you will be able to efficiently add, remove, change and get values of the list. More on ```ArrayInterface``` see below.
##### .set(Object changeHash)
Sets values of the component's bindings to values of ```changeHash``` where keys are binding names.
##### .up()
##### .up(Number num)
##### .up(String componentUserName)
If no argument is given, returns ```ComponentInterface``` of the parent component.  
If a numeric argument is given, returns ```ComponentInterface``` of the parent component ```num``` levels higher.
If a string argument is given, returns ```ComponentInterface``` of the parent component with the name that corresponds to the string argument value. See below on how to give a component a custom name.
##### .markup(String bindingName)
Returns HTMLElement binding with ```bindingName``` is assigned to.

### ArrayInterface
If a binding you want to ```.get()``` value from is of list type, then ```ArrayInterface``` is what you will get instead and here's methods that you can call on it.
##### .get(Number num)
Get ```ComponentInterface``` of list item at ```num``` position.
##### .push(Object newItem)
Add ```newItem```  to the end of the list.
##### .unshift (Object newItem)
Add ```newItem``` to the begining of the list.
##### .add(Number start, Object newItem)
Add ```newItem``` at ```num``` postion of the list.  

Instead of passing only one ```Object```, ```.push```, ```.unshift``` and ```.add``` methods can as well receive an array of items instead.

##### .pop(Number num)
Remove ```num``` last elements from the list. ```num``` defaults to 1 if omitted.
##### .shift(Number num)
Remove ```num``` first elements from the list. ```num``` defaults to 1 if omitted.
##### .remove(Number start, Number num)
Remove ```num``` elements from the list starting from ```start``` position.
##### .value()
Get raw values of the list.
##### .forEach(Callback cb)
Iterates over the values of the list and call ```cb``` function with arguments ```(Object item, Number index)``` on each of the items.
##### .filter(Callback cb)
Returns a new list with items from the initial list for which ```cb``` function with arguments ```(Object item, Number index)``` returns a ```true``` value
##### .map(Callback cb)
Returns a new array with items being results of calling ```cb``` function with arguments ```(Object item, Number index)``` on each item of the initial list.

## x-b and x-lb difference
```x-b``` attribute points to HTMLElement for the binding
```x-lb``` attribute is assigned to HTMLElements that will have the role of list containers.  
Such list bindings receive additional logic for rendering and mutating arrays of data.
HTMLElement with ```x-lb``` attribute must have one child element which will be considered as a template for list item.

## Applying components to page markup
Finally to apply created components to markup call ```Couli.apply(HTMLElement container, CouliComponent component)```  
where ```container``` is a HTMLElement on the page where you wish to place your ```component```.

## Binding option short keys
To save the time and effort of writing and reading various binding options in full length, one can use shortened keys that will correspond to full option keys.  

|Short key| Full key|
|---------|---------|
|```_s``` | ```style```|
|```_c``` | ```class```|
|```_v``` | ```value```|
|```_a``` | ```attrs```|
|```_h``` | ```html```|
| ```_eab``` |  ```events.abort``` |
| ```_eld``` |  ```events.load``` |
| ```_eer``` |  ```events.error``` |
| ```_ef``` |  ```events.focus``` |
| ```_efi``` |  ```events.focusin``` |
| ```_efo``` |  ```events.focusout``` |
| ```_eb``` |  ```events.blur``` |
| ```_eas``` |  ```events.animationstart``` |
| ```_eac``` |  ```events.animationcanceled``` |
| ```_eae``` |  ```events.animationend``` |
| ```_eai``` |  ```events.animationiteration``` |
| ```_ets``` |  ```events.transitionstart``` |
| ```_etc``` |  ```events.transitioncancel``` |
| ```_ete``` |  ```events.transitionend``` |
| ```_etr``` |  ```events.transitionrun``` |
| ```_efr``` |  ```events.reset``` |
| ```_efs``` |  ```events.submit``` |
| ```_ekd``` |  ```events.keydown``` |
| ```_ekp``` |  ```events.keypress``` |
| ```_eku``` |  ```events.keyup``` |
| ```_emc``` | ```events.click``` |
| ```_emx``` | ```events.contextmenu``` |
| ```_emd``` | ```events.mousedown``` |
| ```_eme``` | ```events.mouseenter``` |
| ```_eml``` | ```events.mouseleave``` |
| ```_emm``` | ```events.mousemove``` |
| ```_emo``` | ```events.mouseover``` |
| ```_emt``` | ```events.mouseout``` |
| ```_emu``` | ```events.mouseup``` |
| ```_empc``` | ```events.pointerlockchange``` |
| ```_empe``` | ```events.pointerlockerror``` |
| ```_emw``` | ```events.wheel``` |
| ```_ems``` | ```events.select``` |
| ```_ed``` | ```events.drag``` |
| ```_ede``` | ```events.dragend``` |
| ```_edr``` | ```events.dragenter``` |
| ```_eds``` | ```events.dragstart``` |
| ```_edl``` | ```events.dragleave``` |
| ```_edo``` | ```events.dragover``` |
| ```_edd``` | ```events.drop``` |
| ```_emcp``` | ```events.canplay``` |
| ```_emcpt``` | ```events.canplaythrough``` |
| ```_emdc``` | ```events.duractionchange``` |
| ```_emet``` | ```events.emptied``` |
| ```_emnd``` | ```events.ended``` |
| ```_emld``` | ```events.loadeddata``` |
| ```_emlmd``` | ```events.loadedmetadata``` |
| ```_emps``` | ```events.pause``` |
| ```_empl``` | ```events.play``` |
| ```_emplg``` | ```events.playing``` |
| ```_emrc``` | ```events.ratechange``` |
| ```_emsk``` | ```events.seeked``` |
| ```_emskg``` | ```events.seeking``` |
| ```_emst``` | ```events.stalled``` |
| ```_emsd``` | ```events.suspend``` |
| ```_emtu``` | ```events.timeupdate``` |
| ```_emvc``` | ```events.volumechange``` |
| ```_emwt``` | ```events.waiting``` |
| ```_hu``` | ```hooks.update``` |
| ```_hm``` | ```hooks.mount``` |
| ```_hr``` | ```hooks.remove``` |