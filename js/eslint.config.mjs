import babel from "@babel/eslint-plugin";
import globals from "globals";
import babelParser from "@babel/eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/**.json",
        "**/*.test.js",
        "**/__test__/*.js",
        "**/*.config.js",
        "**/**.html",
        "**/karma*.js",
        "**/node_modules/**/*",
        "**/dist/**/*",
        "**/lib/**/*",
        "**/jupyterlab_francy/**/*",
        "**/webpack.js",
        "**/static/**/*",
    ],
}, ...compat.extends("eslint:recommended"), {
    plugins: {
        "@babel": babel,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.commonjs,
            ...globals.node,
            d3: true,
            VERSION: true,
            DESCRIPTION: true,
            FRANCY_DESC: true,
            MathJax: true,
        },

        parser: babelParser,
        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            requireConfigFile: false,

            babelOptions: {
                babelrc: false,
                configFile: false,

                plugins: [["@babel/plugin-proposal-decorators", {
                    legacy: true,
                }]],
            },
        },
    },

    rules: {
        indent: ["error", 2],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "single"],
        semi: ["error", "always"],
        "no-else-return": 1,
        "space-unary-ops": 2,
        "brace-style": ["error", "1tbs"],

        "no-unused-vars": [2, {
            vars: "all",
            varsIgnorePattern: ".*ignore",
        }],

        "no-global-assign": ["error", {
            exceptions: ["__webpack_public_path__", "__dirname"],
        }],

        "sort-imports": ["error", {
            ignoreCase: false,
            ignoreDeclarationSort: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        }],
    },
}];