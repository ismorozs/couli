import { forEach, mapKeys } from './helpers/object';
import { createBinding } from './State';
import SHORTNAMES from './values/shortnames';

export {
  prepareBindingSettings,
  prepareBindingsSettings,
  prepareStyles,
}

function prepareBindingsSettings (settings) {
  const normalizedSettings = { bindings: {} };

  forEach(settings, (value, key) => {
    const binding = createBinding(key);
    Object.assign(binding, prepareBindingSettings(value));
    normalizedSettings.bindings[key] = binding;
  });

  return normalizedSettings;
}

function prepareBindingSettings (settings) {
  const normalizedSettings = {};

  forEach(settings, (value, key) => {

    for(let i = 0; i < SHORTNAMES.length; i++) {
      const shortNames = SHORTNAMES[i];

      if (shortNames.names[key]) {
        if (!shortNames.group) {
          normalizedSettings[ shortNames.names[key] ] = value;
          return;
        }
  
        if (!normalizedSettings[shortNames.group]) {
          normalizedSettings[shortNames.group] = {};
        }
  
        normalizedSettings[shortNames.group][shortNames.names[key]] = value;
        return;
      }
    }

    normalizedSettings[key] = value;
  });

  return normalizedSettings;
}

function prepareStyles (styleArg, component) {
  return mapKeys(styleArg, (key) => key
    .split(',')
    .map((selector) => selector.trim())
    .map((selector) => {

      let className =  '.' + component.name;

      if (selector) {
        const mainSelector = selector.split(' ')[0].split('::')[0].split(':')[0];
        const isBinding = component.bindings[ mainSelector ] && !!mainSelector;
        const space = selector.startsWith(':') ? '' : ' ';
        const prefix = isBinding ? className + '-' : '';
        className += space + prefix + selector;
      }

      return className;
    })
    .join(',')
  );
}
