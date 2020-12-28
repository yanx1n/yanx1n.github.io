/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0367df6188690516b9fb04a044f44e46"],["/about/index.html","a621acd0d5c0b32bb33975c38aea0751"],["/archives/2020/02/index.html","1916cbf937af2c2f106a93129a74ef56"],["/archives/2020/03/index.html","d617c4ee22b2091ba15b8462e416e230"],["/archives/2020/10/index.html","71c37d0f9364871cd29ada8dd762f90c"],["/archives/2020/12/index.html","79849186f82a70980d1b9fdd1c1b0252"],["/archives/2020/index.html","899e686763fa2e57c72a7a8eb42d03d7"],["/archives/2020/page/2/index.html","dff6986c2e5ba39c6c8c4ceabce63dc8"],["/archives/index.html","5691c1075a7ab90412ee24bb4e57cad2"],["/archives/page/2/index.html","5691c1075a7ab90412ee24bb4e57cad2"],["/categories/Flutter/index.html","7c9c74c80cab8477decd28dafc1e5d2e"],["/categories/Java/index.html","177fdcd8f4c967d0a83421ebf7e8746b"],["/categories/index.html","220098bbab6744c2606b3411536186ca"],["/categories/linux/index.html","e25f610bef459146ac3ca46b3967dee7"],["/categories/搞机之路/index.html","43db0143d4156b30f8a2beac568ffcfc"],["/categories/疑难杂症/index.html","2abb7801a5f81f951d370f479e44f4f6"],["/categories/编程学习/index.html","6e6b8850edce917f1c1b6709452271dd"],["/css/style.css","8b7497414412c54ec74725050572c2f6"],["/font/SourceCodePro.ttf","275e537a0d558cc20f56799298d080fa"],["/friends/index.html","26e98ee9b8808fcb908578b5d45733d0"],["/img/alipay.jpg","ec2a39794894636c4b316c63c6f7e3d7"],["/img/avatar.jpg","4c4c378c308d1c72a1e6bb46f1f373c2"],["/img/brand.jpg","734f817bbb181d0180d7b37749769cc0"],["/img/cloud.svg","5726840f8106499fa72bfe58c538390d"],["/img/project.svg","deb1b70aa7e23c7038f1cdcf142d8e15"],["/img/wechat.jpg","83fcb7dbf5258417f3a96c0dcacf294c"],["/index.html","88cc90565d7fd0cd80ab36086296194e"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","18ca829d5f4259bbcd88136d9a8a9004"],["/js/issues.js","4868732e560db0465715cf9b221646bd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","ac54f673c0c81fc09ccf75b1dbc520fa"],["/p/1810.html","7636a92835c031a0d54cb723eabc2bcb"],["/p/1da6.html","586e05853cd0a0b5807a91789adeb5b7"],["/p/2647.html","a90f4528fd6b4a7112b5c85312fb0d6a"],["/p/5a5b.html","07388d3888fcfd39171c494a94da4d74"],["/p/5c5b.html","d5e0d4cf67c25471efe4f6bc2a141af1"],["/p/682b.html","270d25bba230338d49347a22bdc8956d"],["/p/689b.html","003bc03e4b0590f7f58fa1314cf9ca4c"],["/p/7178.html","7e4b1bbbf78915e1e78080c6ab59efcb"],["/p/7d1w.html","46917d2c0001554c588f185dbb0992ee"],["/p/8335.html","e29d2f87bea55bc9932abbd78b46ebd8"],["/p/839a.html","b8e2de1f312d3daa1d129587c712370d"],["/p/9446.html","3fdb4769e6060f76cc09b673fcd28513"],["/p/9b60.html","2d6b9e24e0e2e933526e817f8afa6269"],["/p/9d6d.html","85fc74f0108a2f6dcfd203a44275ce98"],["/p/b251.html","c9faac7ba33f14fce15a8b29a773f050"],["/p/b254.html","5d62d2fb975afb2ab5926144832820d3"],["/p/c3d7.html","35d4e0f30deee77e651b6bbaa7b9ee63"],["/p/ea19.html","d606a1e61c4ebd76613b5ac745942b32"],["/page/2/index.html","e411c74edec3c9863b5fa3368a677b47"],["/sw-register.js","68dde757037ea6c25536a987dcc3a8cd"],["/tags/ADB/index.html","8f59f4d4fdaa06da64684f3bfd799adc"],["/tags/Hexo/index.html","66b1e253daee3c08809914b4dc8fca00"],["/tags/Myeclipse/index.html","88317cfbe8a151cc0273f6b81b45f1b0"],["/tags/flutter/index.html","41704cdb2ef3d3f8ee74f4161555aab7"],["/tags/git/index.html","6c28ceeaad891275e518cb1196790c6a"],["/tags/html/index.html","56463bb33ab8287447445ea511b700a9"],["/tags/index.html","f4b3446279070dff7d7ec89e14648d02"],["/tags/kail/index.html","9e49660b2df9b0b35ebb7f8138edb8a2"],["/tags/mysql/index.html","dbe8aee991f0a704762f5819f6c9a61f"],["/tags/安卓/index.html","a5c64c1d5becf3f96cdd3aa9f99cb4eb"],["/tags/搞机技巧/index.html","4c9fda770f6d5f8a7ec4629dcb61eda2"],["/tags/环境配置/index.html","b22d0199a29a457fb1579696fe051cdb"],["/tags/知识记录/index.html","84a39fbf631daea28a0a7b2787e27db3"]];
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
