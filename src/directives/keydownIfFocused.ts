import { DirectiveBinding } from 'vue';
import { KeydownIfFocused } from './types';

export default {
  name: 'keydownIfFocused',
  beforeMount: (el: HTMLElement & Partial<KeydownIfFocused>, binding: DirectiveBinding & { arg: Array<string> }) => {
    // The directive should accept a callback as the directive value
    const callback = binding.value;
    // The directive should accept a variable with an array with strings of keybpard key names
    // or just on keyboard key name as the directive arg
    const keyNames = [...binding.arg];

    el.keydownIfFocusedEvent = (event: KeyboardEvent) => {
      const hasFocus = document.hasFocus() && document.activeElement == el;

      keyNames.forEach((keyName: string) => {
        if (hasFocus && event.key === keyName) {
          event.preventDefault();
          callback();
        }
      });
    };

    document.addEventListener('keydown', el.keydownIfFocusedEvent);
  },
  unmounted: (el: HTMLElement & KeydownIfFocused) => {
    document.removeEventListener('keydown', el.keydownIfFocusedEvent);
  },
} as unknown;
