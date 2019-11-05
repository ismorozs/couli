const VALUE_SHORTNAMES = {
  _s: 'style',
  _c: 'class',
  _v: 'value',
  _a: 'attrs',
  _h: 'html',
};

const EVENT_SHORTNAMES = {
  _eab: 'abort',
  _eld: 'load',
  _eer: 'error',

  _ef: 'focus',
  _efi: 'focusin',
  _efo: 'focusout',
  _eb: 'blur',

  _eas: 'animationstart',
  _eac: 'animationcanceled',
  _eae: 'animationend',
  _eai: 'animationiteration',

  _ets: 'transitionstart',
  _etc: 'transitioncancel',
  _ete: 'transitionend',
  _etr: 'transitionrun',

  _efr: 'reset',
  _efs: 'submit',
  _ech: 'change',

  _ekd: 'keydown',
  _ekp: 'keypress',
  _eku: 'keyup',

  _emc: 'click',
  _emx: 'contextmenu',
  _emd: 'mousedown',
  _eme: 'mouseenter',
  _eml: 'mouseleave',
  _emm: 'mousemove',
  _emo: 'mouseover',
  _emt: 'mouseout',
  _emu: 'mouseup',
  _empc: 'pointerlockchange',
  _empe: 'pointerlockerror',
  _emw: 'wheel',
  _ems: 'select',

  _ed: 'drag',
  _ede: 'dragend',
  _edr: 'dragenter',
  _eds: 'dragstart',
  _edl: 'dragleave',
  _edo: 'dragover',
  _edd: 'drop',

  _emcp: 'canplay',
  _emcpt: 'canplaythrough',
  _emdc: 'duractionchange',
  _emet: 'emptied',
  _emnd: 'ended',
  _emld: 'loadeddata',
  _emlmd: 'loadedmetadata',
  _emps: 'pause',
  _empl: 'play',
  _emplg: 'playing',
  _emrc: 'ratechange',
  _emsk: 'seeked',
  _emskg: 'seeking',
  _emst: 'stalled',
  _emsd: 'suspend',
  _emtu: 'timeupdate',
  _emvc: 'volumechange',
  _emwt: 'waiting',
};

const HOOK_SHORTNAMES = {
  _hu: 'update',
  _hm: 'mount',
  _hr: 'remove',
};

export default [
  { names: VALUE_SHORTNAMES },
  { group: 'events', names: EVENT_SHORTNAMES },
  { group: 'hooks', names: HOOK_SHORTNAMES },
];
