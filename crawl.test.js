const {normalizeUrl,getUrlsFromHTML} = require('./crawl.js');
const {test,expect} = require('@jest/globals');

test('normalizeUrl strip protocol',()=>{
    const input = 'https://blog.boot.dev/path/';
    const actual = normalizeUrl(input);
    const expected = 'blog.boot.dev/path';
    expect(actual).toEqual(expected);

})

test('normalizeUrl strip trailing slash',()=>{
    const input = 'https://blog.boot.dev/path/';
    const actual = normalizeUrl(input);
    const expected = 'blog.boot.dev/path';
    expect(actual).toEqual(expected);

})

test('normalizeUrl capitals ',()=>{
    const input = 'https://BLOG.boot.dev/path/';
    const actual = normalizeUrl(input);
    const expected = 'blog.boot.dev/path';
    expect(actual).toEqual(expected);

})

test('normalizeUrl strip http ',()=>{
    const input = 'https://blog.boot.dev/path/';
    const actual = normalizeUrl(input);
    const expected = 'blog.boot.dev/path';
    expect(actual).toEqual(expected);

})

test('getUrlsFromHTML absolute ',()=>{

    const inputHTMLBody = `
    <html>
    <body>
    <a href="https://blog.boot.dev/">
        Boot.dev blog
    </a>
    </body>
    </html>
    `;
    const inputBaseURL = "https://blog.boot.dev"
    const actual = getUrlsFromHTML(inputHTMLBody,inputBaseURL);
    const expected = ['https://blog.boot.dev/'];
    expect(actual).toEqual(expected);

})

test('getUrlsFromHTML relative',()=>{

    const inputHTMLBody = `
    <html>
    <body>
    <a href="/path/">
        Boot.dev blog
    </a>
    </body>
    </html>
    `;
    const inputBaseURL = "https://blog.boot.dev"
    const actual = getUrlsFromHTML(inputHTMLBody,inputBaseURL);
    const expected = ['https://blog.boot.dev/path/'];
    expect(actual).toEqual(expected);

})