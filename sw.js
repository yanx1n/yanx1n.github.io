/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","bf504923fb7d132990851fb9df0b9be6"],["/about/index.html","4c64c9734afedb814f83abe05b06f218"],["/archives/2020/02/index.html","ed08820fd231fc4a06a9fd2efe042a30"],["/archives/2020/03/index.html","6007e1c1953a50da57dab906b6f23fa4"],["/archives/2020/10/index.html","da96ab7c7335f76be97b42e1e680e273"],["/archives/2020/index.html","a507a1a7f8a9807b32fac6e8e0977ad7"],["/archives/2020/page/2/index.html","75be40aa37844b604fc300155e828347"],["/archives/index.html","179c8c7ea6db56ce4b46a7f189f34ebf"],["/archives/page/2/index.html","179c8c7ea6db56ce4b46a7f189f34ebf"],["/categories/Flutter/index.html","9dc3d317618a34d212ba445eeed22593"],["/categories/Java/index.html","d5bf22a13afc0b7d0aff8781a007151b"],["/categories/index.html","2603a8b09b5c2f7ae7160bf3feae7ef4"],["/categories/搞机之路/index.html","4bf039a41ee4d88a1874608b03390710"],["/categories/疑难杂症/index.html","02210b648ce848fafa5418e263e40fb9"],["/categories/编程学习/index.html","150b417ef8a7a19dd226456d09d9287c"],["/css/style.css","efafe9abb585afe1c64f82ec0df48181"],["/font/SourceCodePro.ttf","275e537a0d558cc20f56799298d080fa"],["/friends/index.html","41c87c585e8b00099604b0244b562331"],["/img/alipay.jpg","ec2a39794894636c4b316c63c6f7e3d7"],["/img/avatar.jpg","4c4c378c308d1c72a1e6bb46f1f373c2"],["/img/brand.jpg","734f817bbb181d0180d7b37749769cc0"],["/img/wechat.jpg","83fcb7dbf5258417f3a96c0dcacf294c"],["/index.html","da6dad863f8619cdb2a1310f46fb94c8"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","0be628f80a1aee3554409e54a60df09d"],["/js/issues.js","4868732e560db0465715cf9b221646bd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","29602079d7987e0217df886aa26aa904"],["/p/1810.html","11ac6a10ef801e93144e8984f834428d"],["/p/1da6.html","f9544d4c1b1a57f31c6af1107aedeb84"],["/p/2647.html","3117be2d0617b8cd1ec7d888a2f5485d"],["/p/5a5b.html","5b7cffcb4354adeb6e359a07dabfc3e8"],["/p/5c5b.html","dce35634193b6c564d56e46b1001745a"],["/p/682b.html","f7a3b9f152a5969085be780c29a07c09"],["/p/689b.html","029e08213abe0f9d0df7b5728f118f0c"],["/p/7178.html","2bde2564d762ea1cbd8ea7860342dd63"],["/p/8335.html","9fe4315c2c1b0f2c228ab266c7661329"],["/p/839a.html","41b15eb8bb32a2cff9a6d27f8c66593e"],["/p/9446.html","3c756f85d21181bf60c151de19268199"],["/p/9b60.html","62565484e3c103b35dc6725b0363de2e"],["/p/9d6d.html","da84364067b085061b6e50b4959e0e98"],["/p/b251.html","cad371dcea58171e429cdfe15e35cd6c"],["/p/b254.html","2c64875b79ca3573f2a0ef7b665ccdf6"],["/p/c3d7.html","972519ee5a611f93a93cd32f231fecfd"],["/p/ea19.html","c1eb4d42c785405e6a2aee7de4593509"],["/page/2/index.html","2c375872a5ea223d9e810e4bf6265258"],["/sw-register.js","8b666133ac333ba76389639563e9530b"],["/tags/ADB/index.html","6ae4caeed85dcae5efa6db9226b26ff1"],["/tags/Hexo/index.html","8d6403749955ebc9a9067d62eeac1579"],["/tags/Myeclipse/index.html","f4ea4ca0d6efb7b77d84a84187e06623"],["/tags/flutter/index.html","7ca8996fa507755aae7cff9358ffa7fd"],["/tags/git/index.html","c0f3855c186d62ee4dc5e39e918a2b4d"],["/tags/html/index.html","880f7a1ad71dab985db430a75db1b691"],["/tags/index.html","71b83bf76a7e17123e9290a9838cc931"],["/tags/mysql/index.html","9173e542c7c42c892c06b82714403e8e"],["/tags/安卓/index.html","8748e14e05cf66ff53422dc901a606a6"],["/tags/搞机技巧/index.html","bc407ac9825d4e9b0c2118bb0b48c3a9"],["/tags/环境配置/index.html","79e17eb2e9c419dfd5dd95db0ac73dd0"],["/tags/知识记录/index.html","12d0267096c5dc2b2f3d3f28ae9000ac"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
