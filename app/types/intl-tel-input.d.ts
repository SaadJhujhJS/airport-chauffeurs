declare module 'intl-tel-input/vue' {
  import { DefineComponent } from 'vue';

  interface IntlTelInputOptions {
    initialCountry?: string;
    loadUtils?: () => Promise<any>;
    [key: string]: any;
  }

  interface IntlTelInputProps {
    modelValue?: string;
    options?: IntlTelInputOptions;
    disabled?: boolean;
  }

  interface IntlTelInputEmits {
    (e: 'changeCountry', countryCode: string): void;
    (e: 'changeValidity', isValid: boolean): void;
    (e: 'changeNumber', number: string): void;
    (e: 'changeErrorCode', errorCode: number | null): void;
  }

  const IntlTelInput: DefineComponent<
    IntlTelInputProps,
    {},
    {},
    {},
    {},
    {},
    {},
    IntlTelInputEmits
  >;
  export default IntlTelInput;
}

declare module 'intl-tel-input/build/js/utils.js' {
  const utils: any;
  export default utils;
}
