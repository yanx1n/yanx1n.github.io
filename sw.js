/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","60430db3b2dc5d285e529354165ed44b"],["/about/index.html","e6028a03ef9dc928d11114515454a481"],["/archives/2020/02/index.html","81060311c1baa64c79e509a72a434194"],["/archives/2020/03/index.html","1aa124a9452ac667307a241b0ba723b8"],["/archives/2020/10/index.html","5d044118fdfdd7cf180587c0d1151802"],["/archives/2020/index.html","e6eb95987fec18ac5299f6decc6170c5"],["/archives/2020/page/2/index.html","218eabfd48ff6311412c802e63f72c4a"],["/archives/index.html","2aff806bc43cc752f698e0e9a74ea1d5"],["/archives/page/2/index.html","2aff806bc43cc752f698e0e9a74ea1d5"],["/categories/Flutter/index.html","43b6e7bd7df6188b381887002751f0c5"],["/categories/Java/index.html","2d5cbe9ad6741dc07b444927c3a317f1"],["/categories/index.html","3ef84c9a872e5cecbb817bd42d21fe95"],["/categories/搞机之路/index.html","084a65afe750888c24f549e3b06e6802"],["/categories/疑难杂症/index.html","c8603cb98c3a0fef56c5e8f1529c76ea"],["/categories/编程学习/index.html","e90ee248371b8d51a82f7e8fe32ddb99"],["/css/style.css","efafe9abb585afe1c64f82ec0df48181"],["/font/SourceCodePro.ttf","275e537a0d558cc20f56799298d080fa"],["/friends/index.html","c0e14cdb495dbdd638c952228905a97f"],["/img/alipay.jpg","ec2a39794894636c4b316c63c6f7e3d7"],["/img/avatar.jpg","4c4c378c308d1c72a1e6bb46f1f373c2"],["/img/brand.jpg","734f817bbb181d0180d7b37749769cc0"],["/img/cloud.svg","5726840f8106499fa72bfe58c538390d"],["/img/wechat.jpg","83fcb7dbf5258417f3a96c0dcacf294c"],["/index.html","a6201cad2ca2c12d8938461f790b463d"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","0be628f80a1aee3554409e54a60df09d"],["/js/issues.js","4868732e560db0465715cf9b221646bd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","4ff2ee7fb57e9cc78e93ed921c8a598e"],["/p/1810.html","f29d5c076e43c375aad3aba117e9c2f1"],["/p/1da6.html","1738d26f9f26b2e3fba6f820f5c96dc3"],["/p/2647.html","2b6396b39aa6d1c3f579e846310b26af"],["/p/5a5b.html","6a3af9da0652f5fce0eab17169ff32cf"],["/p/5c5b.html","05d7ec21e40d0726347a4d8020001684"],["/p/682b.html","65c719aef02e9cc32241740a70b3cabf"],["/p/689b.html","d85763d5cb730df2769dd8707735a9fa"],["/p/7178.html","6515c153b0c558f4166cfffb1fbfc995"],["/p/8335.html","d9a60682080c4b072a1b1a7602cb528b"],["/p/839a.html","7b88549461b827ddb685bd4ba0c7eac1"],["/p/9446.html","e3074437d4ee83c183f9e18ff376a5d7"],["/p/9b60.html","e5e56f5a2f128d2f0eeb7e779ebcc7fa"],["/p/9d6d.html","b760318e622d8a607889cbc6fbed3f9b"],["/p/b251.html","0bdbf391611bd6f3929a2dd6ba40f5f8"],["/p/b254.html","7c02ddb4ec8c7cf20929750feccd7ec9"],["/p/c3d7.html","fc62e73df6e2a7e9ef7484149ba12277"],["/p/ea19.html","62e2204e1d9d5da249f9cd22a96ca10a"],["/page/2/index.html","1d8a98f3729c19e39db7bf3a713a4e0d"],["/sw-register.js","eb6a3a7f4cfa64e291a09f7e57cc1ee9"],["/tags/ADB/index.html","dce40baf7d445e38ac1ec01c0e6b4151"],["/tags/Hexo/index.html","681c8b23307aa9eeb9124e16bfef9856"],["/tags/Myeclipse/index.html","a64a47c56fe984c794d9c21f7ab2b4bb"],["/tags/flutter/index.html","14c22ceee76fea69b3bed2874c2d7f0f"],["/tags/git/index.html","9d43c2a767c85146b437833cccd0eab4"],["/tags/html/index.html","7132f4a40c1abcbcb14d51f29199a39f"],["/tags/index.html","f2bd8f48b1545b27e7321fa6b74797f2"],["/tags/mysql/index.html","8d59a15e38647381643767e265c8f59c"],["/tags/安卓/index.html","ad4bdea81f196fa3550d803a41e9bada"],["/tags/搞机技巧/index.html","60302281714d9132922d493bf5251993"],["/tags/环境配置/index.html","94d5f4e2e0857acff296d00874bf1034"],["/tags/知识记录/index.html","a51b69399162e8889270044ae215ab20"]];
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
