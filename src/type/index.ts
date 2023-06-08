import { ObjectDirective } from 'vue';

export type Icons = string;
export type InputType = 'text' | 'number';

export interface FieldValueProp {
  text?: string;
  bottomText?: string;
}

export type ComplexFieldValueProp = Record<string, string | number>;

export interface AccordionItem {
  text: string;
  title: string;
}

export interface CustomDirective extends ObjectDirective {
  name: string;
}
