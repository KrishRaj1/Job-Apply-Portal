const express = require('express');
const axios = require('axios');
require('dotenv').config();
const route = express.Router();
const urls = [
    process.env.URL_NEWSDATAAPI,
    process.env.URL_NEWSAPI_ORG,
    process.env.URL_THE_NEWSAPI,
];
console.log(process.env.NEWS_DATA_API_KEY);
console.log(urls);
const fetchNewsData = async () => {
    try {
        const responses = await Promise.all(
            urls.map((url) =>
                axios.get(url).then((res) => res.data).catch((err) => {
                    console.error(`Error fetching from URL: ${url}, Error: ${err.message}`);
                    return {}; // Return null for failed requests
                })
            )
        );
        const newsDataAPI = responses[0] || {};
        const newsAPIOrg = responses[1] || {};
        const theNewsAPI = responses[2] || {};

        return { newsDataAPI, newsAPIOrg, theNewsAPI };
    } catch (error) {
        console.error("Error fetching news data:", error.message);
        throw new Error("Failed to fetch news data");
    }
};

route.get('/newstitle', async (req, res) => {
    try {
        const { newsDataAPI, newsAPIOrg, theNewsAPI } = await fetchNewsData();
        const title1 = newsDataAPI.results?.[0]?.title || "No title available";
        const title2 = newsAPIOrg.articles?.[0]?.title || "No title available";
        const title3 = theNewsAPI.data?.[0]?.title || "No title available";
        res.json({ titles: [title1, title2, title3] });
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
});
route.get('/newsdescription', async (req, res) => {
    try {
        const { newsDataAPI, newsAPIOrg, theNewsAPI } = await fetchNewsData();
        const description1 = newsDataAPI.results?.[0]?.description || "No Description for this";
        const description2 = newsAPIOrg.articles?.[0]?.description || "No Description is available";
        res.json({ Descriptions: [description1, description2] });
    } catch (error) {
        
        res.status(500).json({ error: error.message });
    }
});
route.get('/newscategory', async (req, res) => {
    try {
        const { newsDataAPI, newsAPIOrg, theNewsAPI } = await fetchNewsData();
        const category1 = newsDataAPI.results?.[0]?.category[0] || "No Description for this";
       
        const category3 = theNewsAPI.data?.[0]?.categories[0] || "No Description available";
        res.json({ Categories: [category1,  category3] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
module.exports = route;
