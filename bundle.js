const esbuild = require("esbuild");

const FILE_HEADER = `/*
|  SaranaJS
|
|  copyright minefled, 2021
|  Released under the MIT License
*/
`;

async function bundleMain() {
    // Build esm
    await esbuild.build({
        entryPoints: ["dist/esm/index.js"],
        outfile: "dist/bundle/saranaJS-esm.js",

        bundle: true,

        format: "esm",
        target: ["es6"],
        banner: {
            js: FILE_HEADER
        }
    });

    // Build commonjs
    await esbuild.build({
        entryPoints: ["dist/cjs/index.js"],
        outfile: "dist/bundle/saranaJS-cjs.js",

        bundle: true,

        format: "cjs",
        target: ["es6"],
        banner: {
            js: FILE_HEADER
        }
    });

    // Build iife
    await esbuild.build({
        entryPoints: ["dist/esm/index.js"],
        outfile: "dist/bundle/saranaJS-iife.js",

        bundle: true,

        format: "iife",
        target: ["es6"],
        banner: {
            js: FILE_HEADER
        }
    });
}

async function bundleMin() {
    // Build esm
    await esbuild.build({
        entryPoints: ["dist/esm/index.js"],
        outfile: "dist/bundle/saranaJS-esm.min.js",

        bundle: true,
        minify: true,

        format: "esm",
        target: ["es6"],
        banner: {
            js: FILE_HEADER
        }
    });

    // Build commonjs
    await esbuild.build({
        entryPoints: ["dist/cjs/index.js"],
        outfile: "dist/bundle/saranaJS-cjs.min.js",

        bundle: true,
        minify: true,

        format: "cjs",
        target: ["es6"],
        banner: {
            js: FILE_HEADER
        }
    });

    // Build iife
    await esbuild.build({
        entryPoints: ["dist/esm/index.js"],
        outfile: "dist/bundle/saranaJS-iife.min.js",

        bundle: true,
        minify: true,

        format: "iife",
        target: ["es6"],
        banner: {
            js: FILE_HEADER
        }
    });
}

bundleMain();
bundleMin();