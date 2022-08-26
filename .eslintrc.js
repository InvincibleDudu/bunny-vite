module.exports = {
   extends: [
      // add more generic rule sets here, such as:
      // 'eslint:recommended',
      'plugin:vue/vue3-recommended',
      'standard-with-typescript',
      '@vue/eslint-config-typescript'
   ],
   plugins: ['vue'],
   overrides: [
      {
         files: ['*.ts', '*.tsx'], // Your TypeScript files extension
         parserOptions: {
            tsconfigRootDir: __dirname,
            project: 'tsconfig.json' // Specify it only for TypeScript files
         }
      },
      {
         files: ['*.vue'],
         parser: 'vue-eslint-parser'
      }
   ],
   rules: {
      // override/add rules settings here, such as:
      indent: ['error', 3],
      'vue/html-indent': ['error', 3],
      '@typescript-eslint/indent': ['error', 3],
      'comma-dangle': ['error', { arrays: 'only-multiline', objects: 'only-multiline' }],
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
      'multiline-ternary': 'off',
      'array-callback-return': 'off',
      'no-prototype-builtins': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off'
   }
}
