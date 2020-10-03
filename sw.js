/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/05/Gboard-谷歌输入法导入词库/index.html","a302aa984695fbbb781bd00eb238057f"],["/2020/02/05/通过ADB解锁System分区/index.html","6e38feb6a03109af2c47e1364eabb5fb"],["/2020/02/06/用Hexo和GitHub Pages搭建博客/index.html","240d9bda53d2a338f1c94fd83125d7f7"],["/2020/02/07/MyEclipse中消除导入xx.min.js后报错的红叉/index.html","465c5f083fda592472dfa4c078088aa4"],["/2020/02/07/Myeclipse2010以上版本Mapper.xml报Referenced file contains errors/index.html","50c3eae8679e1fe4aa1e093f116b9a79"],["/2020/03/03/配置flutter的时候的问题/index.html","b9606328d38128edfdaa2a204fbf8693"],["/2020/03/05/Flutter Your app isn't using AndroidX/index.html","bf1e47d91690e78e077c38006ea66ed3"],["/2020/03/07/Flutter 获取屏幕宽高/index.html","d7ba5bf044909b83660a22c6c852bd7b"],["/2020/03/09/Git Failed to connect to github.com port 443/index.html","831a3286fe33a42b6d9890065e07bc07"],["/2020/03/09/JAVA使用QQ邮箱发送邮件/index.html","d93dfcf28021f2bf05b0f546e7ea8431"],["/2020/03/09/MyEclipse因为破解不完整不能导出war包/index.html","463d043c3ab7edac96855951740a70e3"],["/2020/03/09/flutter沉浸式状态栏/index.html","2b0b52b11bc2049ec44f140f8503e466"],["/2020/03/09/html两行代码随机一句诗词/index.html","42cf3278c5abea1da9a08a4b14cbce29"],["/2020/03/12/Flutter自定义Drawer的图标/index.html","3a26a1835deea68acd933fe246a383d7"],["/404.html","e93d2e3663fe2557263cfb50b65830b5"],["/about/index.html","af340ddc10d782f2b42ebc589c8d5f54"],["/archives/2020/02/index.html","309287c96d14529bd946f05407272c55"],["/archives/2020/03/index.html","c58abf2a824f918c20c53b7d10a1bac2"],["/archives/2020/index.html","421893f8f7770eeb8df3f7f9a5c55660"],["/archives/2020/page/2/index.html","594099fb7949b0bfbc45b870bacbef46"],["/archives/index.html","0f847e19a4792b3b3ad9a8aaea5b06d7"],["/archives/page/2/index.html","0f847e19a4792b3b3ad9a8aaea5b06d7"],["/categories/Flutter/index.html","700232a1c24214be784889324924d371"],["/categories/Java/index.html","0b106e6b53743dabb674cc51184165a9"],["/categories/index.html","d5b4967c9e9dacb7c79cafd1a512a862"],["/categories/搞机之路/index.html","5dee255d4e5649d200c1d38791519098"],["/categories/疑难杂症/index.html","ee33d5a22e5e4d7a92732f5e373a9c52"],["/categories/编程学习/index.html","9bc77ae77ee2a293ebd26dc657350bcc"],["/categories/网站相关/index.html","a04d6073dd83b653498ad50a1c48d09f"],["/css/style.css","8431db181dde76f0e06b07e59b085397"],["/font/SourceCodePro.ttf","275e537a0d558cc20f56799298d080fa"],["/friends/index.html","dd95205c3f7a07c9e51e6e054294457b"],["/img/alipay.jpg","ec2a39794894636c4b316c63c6f7e3d7"],["/img/avatar.jpg","4c4c378c308d1c72a1e6bb46f1f373c2"],["/img/brand.jpg","734f817bbb181d0180d7b37749769cc0"],["/img/wechat.jpg","83fcb7dbf5258417f3a96c0dcacf294c"],["/index.html","1c54f755fd8f1bdf3a51236fec0a0f40"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","0be628f80a1aee3554409e54a60df09d"],["/js/issues.js","4868732e560db0465715cf9b221646bd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","8a450967c569aa8663bb31312dfa0549"],["/page/2/index.html","d7382961398abf41ef0d31de100b4253"],["/sw-register.js","136ed0406a4adeda533f0e22b632e2fa"],["/tags/ADB/index.html","6cfa4f3815632f20b3fc82df8250b9b9"],["/tags/Github/index.html","867ef937bfbe911081bae09b4ae08816"],["/tags/Hexo/index.html","2b81f09afc0f5d8e91a98be3bdf79b40"],["/tags/Myeclipse/index.html","1b29e983a3c1092f8d4cfd87806e789e"],["/tags/flutter/index.html","2b05f607ec00bfd3813f37c794383925"],["/tags/git/index.html","8429b47af3d9d2b00faadaad739cf43c"],["/tags/html/index.html","386ab2a2ad60e5399f98a16af6258bf7"],["/tags/index.html","4b959c53b3fae3b4eb25fad96b1d9b1f"],["/tags/安卓/index.html","e06995dc0a4cd8b4a50d4212e1110255"],["/tags/搞机技巧/index.html","44059b2167a35d9121f2349212278505"],["/tags/环境配置/index.html","42c8e0a489cfe3b919fbaabc234ac60b"],["/tags/知识记录/index.html","3e01bbba7690622dca38086ad32d206a"]];
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
