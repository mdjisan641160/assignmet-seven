import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // এই অংশটুকু সব ফাইলের জন্য ESLint চেক ডিজেবল করে দেবে
    rules: {
      "eslint-comments/no-unlimited-disable": "off",
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "**/*.ts",     // সব TS ফাইল ইগনোর করবে
    "**/*.tsx",    // সব TSX ফাইল ইগনোর করবে
    "**/*.js",     // সব JS ফাইল ইগনোর করবে
  ]),
]);

export default eslintConfig;