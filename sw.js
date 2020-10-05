/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b2bd64d32c2696a0d218625ad0bdc33b"],["/about/index.html","6e4e911adeb1deb00d0ba2281f22554e"],["/archives/2020/02/index.html","f120fa2f6994c92218a386f03d612bae"],["/archives/2020/03/index.html","ec62b9a2262a193df8054eff71ad5e9b"],["/archives/2020/10/index.html","8a594360fc68a9033cb9ab6a2f5ed7fc"],["/archives/2020/index.html","9f180b7b50122505981eae69ea61d292"],["/archives/2020/page/2/index.html","926f1aabf50967118e285ce524153819"],["/archives/index.html","95d8a201e36692920f4865f987079d98"],["/archives/page/2/index.html","95d8a201e36692920f4865f987079d98"],["/categories/Flutter/index.html","5cde1c428e123d4b478a5408dfd68ed8"],["/categories/Java/index.html","fc15a2ffc32509dfa7149766c3e9b9ba"],["/categories/index.html","f8518172a3afc1fc8af5c1217c87ea65"],["/categories/搞机之路/index.html","ad05daab6e5b857a18c0ddd81f474c3f"],["/categories/疑难杂症/index.html","05139740dfeb342aa51825d834721dab"],["/categories/编程学习/index.html","0b9496255608262165f90f5e178fa09c"],["/css/style.css","8b7497414412c54ec74725050572c2f6"],["/font/SourceCodePro.ttf","275e537a0d558cc20f56799298d080fa"],["/friends/index.html","ac82d2560b5694309c5581c6a3583ae7"],["/img/alipay.jpg","ec2a39794894636c4b316c63c6f7e3d7"],["/img/avatar.jpg","4c4c378c308d1c72a1e6bb46f1f373c2"],["/img/brand.jpg","734f817bbb181d0180d7b37749769cc0"],["/img/cloud.svg","5726840f8106499fa72bfe58c538390d"],["/img/wechat.jpg","83fcb7dbf5258417f3a96c0dcacf294c"],["/index.html","3d22060336be9f35bb0831594d6528a8"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","a3400d1d191d99242d2f6619cbe852ba"],["/js/issues.js","4868732e560db0465715cf9b221646bd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","f817592bbab841e02f01f5c4c4352481"],["/p/1810.html","bab1bf4d3a0f741800910eb092a8bbb6"],["/p/1da6.html","0848b7cc92d452e54bf5e2ea7d296f08"],["/p/2647.html","db6755005c32530b8d1a04e369c866a0"],["/p/5a5b.html","2391fe76e2a8e6b1f38fa933ee4f7bd1"],["/p/5c5b.html","fba2a5ae85970b5d0ce8a718b9ce0e35"],["/p/682b.html","3d324a645b1d8cc57397fa1f3732ef08"],["/p/689b.html","64e3a29a73b73b1fdd4365783c46999a"],["/p/7178.html","d072277586f0363fcd58d860c2393769"],["/p/8335.html","ab20f9fe2f900695efafaa7f34a5111d"],["/p/839a.html","90b6d327e1d2821a9ed40906ec3d874f"],["/p/9446.html","be9dd87149d20737555d5ca7b7b8af2e"],["/p/9b60.html","f2784853d97bfbe607c0a9096a0da8e9"],["/p/9d6d.html","bfdf87a94889318796ec8a77bb075524"],["/p/b251.html","d81d4d6e7ffc52dfca8069d2b7b66075"],["/p/b254.html","aef9b2f1565116aea3159d38571490ca"],["/p/c3d7.html","d3c329f858cefc011faf172205790a3b"],["/p/ea19.html","f9c80b235b9ad4ce63807e29132991ab"],["/page/2/index.html","71c204ce9ac1ff21b9df036706c04e49"],["/sw-register.js","29a200a06485f34c84c3fb5ca78feb93"],["/tags/ADB/index.html","a852375db414065c0b3ed396776389ab"],["/tags/Hexo/index.html","31afbee5817e056ed2a435dee6c906ff"],["/tags/Myeclipse/index.html","afcfe4f317ca512677ed177d54555625"],["/tags/flutter/index.html","6949646758a83fabeb04c5a72ad20f1c"],["/tags/git/index.html","24d2848ec283ff731ac9c3aa2abc0680"],["/tags/html/index.html","381ee96ca303425ac3fcb5f5da0a618f"],["/tags/index.html","dbb4132187ae26677122d80a3007d2c2"],["/tags/mysql/index.html","3a43d58c5c784344b829079b20d36cae"],["/tags/安卓/index.html","178a0369b587a77ca82d9a32e6f1470a"],["/tags/搞机技巧/index.html","24326b9b987814be189b0b8c972992e1"],["/tags/环境配置/index.html","8883c67d56a24da99f0f403b4b24a458"],["/tags/知识记录/index.html","d9fd49c7a46ac45024ed6ebc10726d89"]];
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
