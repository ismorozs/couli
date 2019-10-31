import LIB_ATTR from './attributes';

export const VALUE_TYPES = ['style', 'class', 'value', 'attrs', 'html'];

export const BEHAVIOUR_TYPES = ['events', 'hooks', 'listItem'];

export const RESERVED_BINDING_NAMES = VALUE_TYPES.concat(BEHAVIOUR_TYPES, LIB_ATTR.SELF);
