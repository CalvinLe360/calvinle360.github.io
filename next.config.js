const isProd = process.env.NODE_ENV === "production";

module.exports = {
    assetPrefix: isProd ? "/calvinle360.github.io/" : "",
    images: {
        loader: "akamai",
    },
};
