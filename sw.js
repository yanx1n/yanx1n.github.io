/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","06fcba835ff0f53232f2d3b784182236"],["/about/index.html","8b542eac2f5aea13fe63143b274d0021"],["/archives/2020/02/index.html","638f4a27bb986600c0408207466a548c"],["/archives/2020/03/index.html","5cdf8d833183e00096ebad80af36b5c1"],["/archives/2020/10/index.html","7c3f235a4ce02b9dea43a2b4d0d69c18"],["/archives/2020/index.html","4e4ae0fbfa9fc83296e0cf852eb51b80"],["/archives/2020/page/2/index.html","87871ffa103f8b5572aca614b09cdb5e"],["/archives/index.html","fd1bb1859488b75193b16c2c14072881"],["/archives/page/2/index.html","fd1bb1859488b75193b16c2c14072881"],["/categories/Flutter/index.html","8f2e6ac4d57d91b66d5d45998dd3f38f"],["/categories/Java/index.html","e84a697c458b9ee3e9070fe7b4fdd71f"],["/categories/index.html","91a38d747f2613000e0d86d0bec4c89e"],["/categories/搞机之路/index.html","702fc5521850c3bf8ea421b9a8128986"],["/categories/疑难杂症/index.html","7503db697f7701fd7a4ad2a5ce498005"],["/categories/编程学习/index.html","7aedc9b8626faf7d71d0c600d4c48e96"],["/css/style.css","8b7497414412c54ec74725050572c2f6"],["/font/SourceCodePro.ttf","275e537a0d558cc20f56799298d080fa"],["/friends/index.html","8ab78564808f14cde68e666790871d3a"],["/img/alipay.jpg","ec2a39794894636c4b316c63c6f7e3d7"],["/img/avatar.jpg","4c4c378c308d1c72a1e6bb46f1f373c2"],["/img/brand.jpg","734f817bbb181d0180d7b37749769cc0"],["/img/cloud.svg","5726840f8106499fa72bfe58c538390d"],["/img/wechat.jpg","83fcb7dbf5258417f3a96c0dcacf294c"],["/index.html","739b4d91b307edeef070c8caafc842ac"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","18ca829d5f4259bbcd88136d9a8a9004"],["/js/issues.js","4868732e560db0465715cf9b221646bd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","0e3ad2251c2b70130d2cb630de5f9dc2"],["/p/1810.html","c10ef71a72dd6be74249001b920a6b5e"],["/p/1da6.html","702ae908f0ec1edaf6cb141ca8e5ccef"],["/p/2647.html","1fb7718a54c9bfbaf5ab0dd968349ebe"],["/p/5a5b.html","8ba04d03dc70a8752c1ea3b1f447bc20"],["/p/5c5b.html","617074e3142f656a3219be2e4a288e53"],["/p/682b.html","e98e4617e5219f47a07634327aa3c14b"],["/p/689b.html","4b2e3ef50feeda04f71316630c339a92"],["/p/7178.html","97212499af10809e7fa9deb21cf71c07"],["/p/8335.html","81167740ce48128fccd0e6b2536214da"],["/p/839a.html","01c24ee12c75bb39c0243e81f6618127"],["/p/9446.html","4a0eb45aad17cdafa583e93ec09fc0a1"],["/p/9b60.html","2b33592ac6c5b6ac0fb342c215d6637c"],["/p/9d6d.html","a50d5ea057f6201ebad05f80820dcb91"],["/p/b251.html","6aa188bebf2b126130be968289023c6c"],["/p/b254.html","a568b1d82354d94b752a4b7c97f87ca4"],["/p/c3d7.html","51ba550cd1a326a01fd0da8b6716d016"],["/p/ea19.html","c690861498e4ca910ebff02fecbc1d60"],["/page/2/index.html","4ffed5025877d768ccefdf3cb202ff65"],["/sw-register.js","64bf8faf92a9d7051bfa8b15a7f787f4"],["/tags/ADB/index.html","4645ca13c27d54399f4ddb8c28e8d235"],["/tags/Hexo/index.html","32888d714a1a10f0d17955a651ee85b4"],["/tags/Myeclipse/index.html","1226809543fa257050206893537c4ff6"],["/tags/flutter/index.html","8c3b076d0854a0403fd77b0b0ced48ac"],["/tags/git/index.html","da5f912ed39229ea86c2314907f29517"],["/tags/html/index.html","07eeebe099692e37af9bb91af1baf119"],["/tags/index.html","3fba3b65758b8cda0e04149b014236d3"],["/tags/mysql/index.html","f87c3a4357523ac9e44e694c7d6f11eb"],["/tags/安卓/index.html","7bfb7802529ce56c7c02deac996b2cfc"],["/tags/搞机技巧/index.html","9e3177103254ea9f20a9bbc9f84475b5"],["/tags/环境配置/index.html","fee2a53ae8cfcbd905b71f7be13c5fe3"],["/tags/知识记录/index.html","c4d8f278b992ce8506ebccd4c10a27e0"]];
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
