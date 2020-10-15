/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","91fd435b2cc7c8c12ed06a3c963ae7a3"],["/about/index.html","e84e587af0a89cffe6406a5946d93c03"],["/archives/2020/02/index.html","57cb5cc97aca144e22dcaa6ee21628ae"],["/archives/2020/03/index.html","0d096f8611100003e509aeb9db64d9d2"],["/archives/2020/10/index.html","885539dd601a82ca21db5462edff8f02"],["/archives/2020/index.html","a614f5582357cf3b7de861c1952ed900"],["/archives/2020/page/2/index.html","8f562ce03eeceaa0bfbc4e45ec36b138"],["/archives/index.html","ee76b5cb47cf11419488940037ffe0b1"],["/archives/page/2/index.html","ee76b5cb47cf11419488940037ffe0b1"],["/categories/Flutter/index.html","6be39966caa80f8b3bf416c5c48e17ef"],["/categories/Java/index.html","8c6750e86b76f904b8c2cc8b8dc00aea"],["/categories/index.html","dc10c0267df5ae90a1feaa8f8f04240d"],["/categories/搞机之路/index.html","ca30d8303c0b060a6790a65f5e6660d8"],["/categories/疑难杂症/index.html","fa21d993668f33d3cc3a7d67a2aab024"],["/categories/编程学习/index.html","4e050c5b8d2352a6c5b8f31ca29be5f9"],["/css/style.css","8b7497414412c54ec74725050572c2f6"],["/font/SourceCodePro.ttf","275e537a0d558cc20f56799298d080fa"],["/friends/index.html","d6e721187227d8ebc2eae2029c058d86"],["/img/alipay.jpg","ec2a39794894636c4b316c63c6f7e3d7"],["/img/avatar.jpg","4c4c378c308d1c72a1e6bb46f1f373c2"],["/img/brand.jpg","734f817bbb181d0180d7b37749769cc0"],["/img/cloud.svg","5726840f8106499fa72bfe58c538390d"],["/img/wechat.jpg","83fcb7dbf5258417f3a96c0dcacf294c"],["/index.html","fced5fef72a89af22a7e8022b58aea17"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","18ca829d5f4259bbcd88136d9a8a9004"],["/js/issues.js","4868732e560db0465715cf9b221646bd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","4f2d2f8a297e4f079e53ab25915b74c2"],["/p/1810.html","1ec9d0b3776a34e5596cbb4826601b4e"],["/p/1da6.html","a26fd0b9f3826e5ce313bd2936b68d74"],["/p/2647.html","b67227da05dd0d4394a170a2f7e48fee"],["/p/5a5b.html","7221822f5d8825b50c9eb3aa77c19cb0"],["/p/5c5b.html","d5e925d6e74242b0ad6ee9228fe9bf8b"],["/p/682b.html","76f62fe6abb254821720ef08cfc1bbcc"],["/p/689b.html","dd40c051ab9a714aef1d583938cd6b4f"],["/p/7178.html","5ed6d5a0ada722264d2900d73406f73c"],["/p/8335.html","fd91f3659008386aad7b5f24ab3ef75b"],["/p/839a.html","8e0c3ffd5f57ce40fc34125e5ff73a33"],["/p/9446.html","48fe4d0fcca21855ad937623da43ae7c"],["/p/9b60.html","8110352aaf7e79d14b96c7d0b13609f1"],["/p/9d6d.html","6758abc4197fc0aa6be7f517d8747e54"],["/p/b251.html","b4c74f8b2a3ebb9946c7b9ee8963b0f4"],["/p/b254.html","c90ee6813e9d4bb50dc9732d312b5637"],["/p/c3d7.html","154e581c52760be15892c7ba680a759f"],["/p/ea19.html","ac156892eb17256acef7cd31cad822df"],["/page/2/index.html","29cf01f31a190459376a59c7d82c4d58"],["/sw-register.js","98808fcc4e96b513d96cfbeb732dc32c"],["/tags/ADB/index.html","d7c832d889c8f102476c1dab1ffa52f9"],["/tags/Hexo/index.html","9e9be7cf6800fc74e0e989d403c92c8e"],["/tags/MyEclipse/index.html","fa6418da2cab19b533ff5f9a9ffb87c1"],["/tags/flutter/index.html","75b7dfeb32a0e5b71999f88a922fcf64"],["/tags/git/index.html","7b55cb4bd8eb4dcea6e0fa525769b822"],["/tags/html/index.html","55f809ce3903907527169beb4acae720"],["/tags/index.html","cf29854b1a764a4340ff5e3bc04db5f8"],["/tags/mysql/index.html","a9be5ba3e52ed8eae8ddb0112921b411"],["/tags/安卓/index.html","ee82034e31baba2216a81a58c3648b53"],["/tags/搞机技巧/index.html","0d135b65b35f479ee0e55ea42ec1e497"],["/tags/环境配置/index.html","548dcfa84bf5793e0ce0a44f9054ee1b"],["/tags/知识记录/index.html","a863a761505078497c74b199bba58f8c"]];
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
