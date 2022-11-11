module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("src/styles.css");
    eleventyConfig.addPassthroughCopy("src/styles.css");
}