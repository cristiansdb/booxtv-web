// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import obfuscator from 'vite-plugin-javascript-obfuscator';

/** @type {any} */
const obfuscatorOptions = {
  compact: true,
  controlFlowFlattening: true,
  deadCodeInjection: true,
  debugProtection: true,
  disableConsoleOutput: true,
  identifierNamesGenerator: 'hexadecimal',
  stringArray: true,
  rotateStringArray: true,
  selfDefending: true,
};

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      obfuscator(obfuscatorOptions)
    ]
  }
});