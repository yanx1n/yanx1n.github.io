/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","748392cb0e4a7a4e156c0a9f2e33d584"],["/about/index.html","03472569187f310fbcc96fdff45490af"],["/archives/2020/02/index.html","5b93b6de2bc5c38d1a50a0c262c82ec8"],["/archives/2020/03/index.html","98c254e89fe27e5f34787570c33cfb08"],["/archives/2020/10/index.html","1b3c17e7c0ed6e87452e6a316c487109"],["/archives/2020/index.html","bfee4f4c96da424610f98697073a4eab"],["/archives/2020/page/2/index.html","9e6ee973bd6607f6c1055af3d2e1728e"],["/archives/index.html","67a713b8ede0bf8bad09c187c6977102"],["/archives/page/2/index.html","67a713b8ede0bf8bad09c187c6977102"],["/categories/Flutter/index.html","77c70d807854ba31991e047d2a7a7209"],["/categories/Java/index.html","4226185c27f7ea7dfe30dd46fe6788e2"],["/categories/index.html","3ced414c7c354205a4fd79d940be80cb"],["/categories/搞机之路/index.html","be542bdf0ef70d64c22369f34ea98b65"],["/categories/疑难杂症/index.html","b9cf69b7944a813cc9d04993bd1ce6f3"],["/categories/编程学习/index.html","495dfd779231e7e0d29f91132446c69c"],["/css/style.css","8b7497414412c54ec74725050572c2f6"],["/font/SourceCodePro.ttf","275e537a0d558cc20f56799298d080fa"],["/friends/index.html","64bc04f3ae2b9c7906296331d0af77ef"],["/img/alipay.jpg","ec2a39794894636c4b316c63c6f7e3d7"],["/img/avatar.jpg","4c4c378c308d1c72a1e6bb46f1f373c2"],["/img/brand.jpg","734f817bbb181d0180d7b37749769cc0"],["/img/cloud.svg","5726840f8106499fa72bfe58c538390d"],["/img/project.svg","deb1b70aa7e23c7038f1cdcf142d8e15"],["/img/wechat.jpg","83fcb7dbf5258417f3a96c0dcacf294c"],["/index.html","444f78071bb31bdc80f68659d0a975da"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","18ca829d5f4259bbcd88136d9a8a9004"],["/js/issues.js","4868732e560db0465715cf9b221646bd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","dd031dcabf28dbdb83faa281ac48a844"],["/p/1810.html","c3183cfc97e33030f9484ff3c2b192f7"],["/p/1da6.html","2c5a12b327f9cd9517f3d6024ba65eb1"],["/p/2647.html","86a30129ef3a352418f2a69f4df3bf41"],["/p/5a5b.html","76470cdd791bbf17d1e45865ec909dad"],["/p/5c5b.html","59e0df7425249e0420490729d13660d1"],["/p/682b.html","470010ba48c58b9314e7b0f3e4762e5b"],["/p/689b.html","814266c753388cdf805f329fbb74ed53"],["/p/7178.html","20e61c9e26cc99777413359a23699cea"],["/p/8335.html","3b23f5265c18f07935321b315ef97c0b"],["/p/839a.html","ab7d5db729e60eb74f6549c5c131c561"],["/p/9446.html","826d7af9678969cd3ad518b9b280e5ad"],["/p/9b60.html","33ed9d8206aaa28ae44ceb5e385d00f2"],["/p/9d6d.html","497ba7dcb70fba0c236660b159b3e8c5"],["/p/b251.html","360e1769cde0d04d791ff120600de125"],["/p/b254.html","e2988dade908d921597ab5a5b98787fd"],["/p/c3d7.html","7697b03bef46e661cb3258d961e35ad9"],["/p/ea19.html","03e70c830ac57811f4d6c977c54eeaf7"],["/page/2/index.html","158e60fadc26abbdea6a61abf9d06ec4"],["/sw-register.js","bce78bd5699f31d7a66800e4e41cc6e3"],["/tags/ADB/index.html","df36d0e0454051e65248425974cb3e70"],["/tags/Hexo/index.html","8c2d3aeae9cc59eb16ab40936a6a4b98"],["/tags/MyEclipse/index.html","4cc06d983cc3d86a5ed425e978eddcb8"],["/tags/flutter/index.html","8cdf52a5ef67102adcefce04ff2697f6"],["/tags/git/index.html","1dbe172ddea3e89144d83e1f49fc40c0"],["/tags/html/index.html","e1734c7538f146ad4e97533bd21e1cdf"],["/tags/index.html","92129d3234a754253c93eff2fd2e7214"],["/tags/mysql/index.html","f021d2348470c63e99dc5db0b8a1419c"],["/tags/安卓/index.html","99aec6e589a5eb33995f8e7eccea7d4e"],["/tags/搞机技巧/index.html","f542848ef69e0b7e0307597f17a88e20"],["/tags/环境配置/index.html","b0cb68e260b1112b91ab16af838cf243"],["/tags/知识记录/index.html","564132ada9126ab00f702a4e688fe5fd"]];
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
