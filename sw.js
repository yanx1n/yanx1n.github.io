/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","dfa8238942d43b76a4db5434648f2af9"],["/about/index.html","bafb6b399a5ad54a4b28ecda4534bb82"],["/archives/2020/02/index.html","955a177fba4759a8c17bb44ebbd460c5"],["/archives/2020/03/index.html","8e059332fc6ef0201ed6a5b0f2938849"],["/archives/2020/10/index.html","09c5a87dbca8fa59cf50a6669cf47b8e"],["/archives/2020/index.html","6729cfdcf15376a3a27d82207b17b0e7"],["/archives/2020/page/2/index.html","8e7e1bd9386544176976bd36de21bde0"],["/archives/index.html","0efb2b50327a7f4635bb463cd7ee3611"],["/archives/page/2/index.html","0efb2b50327a7f4635bb463cd7ee3611"],["/categories/Flutter/index.html","b5c07445199e7fad801d99f33eaad968"],["/categories/Java/index.html","0f4363558df3b279a900d3dc59f9c228"],["/categories/index.html","313111abb79d60b2fad2a127166e56ae"],["/categories/搞机之路/index.html","0e48ac33e67c7d8ef73a2a22961e1a4d"],["/categories/疑难杂症/index.html","43aa6044432de73dcb357c49849fa03a"],["/categories/编程学习/index.html","867c156ec40036fb79fe5f389d080826"],["/css/style.css","efafe9abb585afe1c64f82ec0df48181"],["/font/SourceCodePro.ttf","275e537a0d558cc20f56799298d080fa"],["/friends/index.html","b7968f01e953cf0d23f97c9c6a0f1b26"],["/img/alipay.jpg","ec2a39794894636c4b316c63c6f7e3d7"],["/img/avatar.jpg","4c4c378c308d1c72a1e6bb46f1f373c2"],["/img/brand.jpg","734f817bbb181d0180d7b37749769cc0"],["/img/cloud.svg","5726840f8106499fa72bfe58c538390d"],["/img/wechat.jpg","83fcb7dbf5258417f3a96c0dcacf294c"],["/index.html","c17b7e7078984443dd3bac5e967c7d03"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","0be628f80a1aee3554409e54a60df09d"],["/js/issues.js","4868732e560db0465715cf9b221646bd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","e189e77ae339eae94d760f12d0df0a8d"],["/p/1810.html","165055dc920d2f8e6afa0c1eefa56498"],["/p/1da6.html","5f12870a4ecee18da78573614e02996c"],["/p/2647.html","9c92dd522abd396dd8c82243294f80ae"],["/p/5a5b.html","93c3826fb3ebcd1414129b688645dbaf"],["/p/5c5b.html","1e84d640667c0bd5fcadda2c5ea17f9d"],["/p/682b.html","263b99b1949d473f750c67c1a8ed21b8"],["/p/689b.html","1af2c2b0bed95b6a6e41a59c49435125"],["/p/7178.html","9e56dc42ed2e5f05f210a495f231384b"],["/p/8335.html","de09473c2f30c87b56ede58751ffdb46"],["/p/839a.html","19c9bdb2a8fdec14ada3e0fe23b1aeaa"],["/p/9446.html","64bb09273378fd7430cbfb1267b9ec51"],["/p/9b60.html","ea4123434d31ea8cf1ab628bd6e13c2a"],["/p/9d6d.html","6ecd36ca44efbc824f245c8881a32ed7"],["/p/b251.html","ad8e67f00ed77c3853e115b8bd6da85f"],["/p/b254.html","b476f2fccd997e8cae583dc13e845bc4"],["/p/c3d7.html","2fdd82f45e87072f9a3546dacca2c166"],["/p/ea19.html","e5cf2da41b6f9eab5ad6ebd4c60eb54e"],["/page/2/index.html","8f0dc86bb0aa7cabb3d2e26edf5582d6"],["/sw-register.js","abd42ad56ad22d1fb9ace73fd3514583"],["/tags/ADB/index.html","a1bc65ecba30db75e0a4bf65142440b6"],["/tags/Hexo/index.html","05d9e9f3f31dbaca3c2128ae8108b63e"],["/tags/Myeclipse/index.html","e5bde06e7dd48c7684e6a7b0c817c2d9"],["/tags/flutter/index.html","0bdaccca8cb0982ca9819cf7142b84d3"],["/tags/git/index.html","bc5bcba0be4f33243a2a98d77c502db6"],["/tags/html/index.html","39d0be6868c8ac5ca699841783c0449c"],["/tags/index.html","18bb2f8d391911d0beab993ebd35a251"],["/tags/mysql/index.html","d10d620ff4b86706fdbddce673306535"],["/tags/安卓/index.html","2f94db3624a8fa71fd52d0135e04e8d0"],["/tags/搞机技巧/index.html","4a7e2cb1a606321b7c0137c7a1a5969f"],["/tags/环境配置/index.html","8feedc1fdac46a5c4d595eb9ff87791e"],["/tags/知识记录/index.html","a1d7063a1946086be75440c1b5ea44e5"]];
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
