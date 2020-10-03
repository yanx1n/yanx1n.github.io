/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/05/Gboard-谷歌输入法导入词库/index.html","f66eaf7b51859e1f4160a958c8d21e6b"],["/2020/02/05/通过ADB解锁System分区/index.html","a86762d497c241f3461ebe0547b14e02"],["/2020/02/06/用Hexo和GitHub Pages搭建博客/index.html","598294d02b68394c71fdb86d2117bcf4"],["/2020/02/07/MyEclipse中消除导入xx.min.js后报错的红叉/index.html","f745664ae06a88030610b24a8e52e50f"],["/2020/02/07/Myeclipse2010以上版本Mapper.xml报Referenced file contains errors/index.html","ac75a0ad183425e7825126db59c1f33d"],["/2020/03/03/配置flutter的时候的问题/index.html","62f1a110af5bf22ce2c782242d05672f"],["/2020/03/05/Flutter Your app isn't using AndroidX/index.html","663154f008199965ec7b5e0577f7d5c2"],["/2020/03/07/Flutter 获取屏幕宽高/index.html","a29f82fb80360f4a50bf790ff4948dcb"],["/2020/03/09/Git Failed to connect to github.com port 443/index.html","e532f980197cc1c4228fd2b7edf73124"],["/2020/03/09/JAVA使用QQ邮箱发送邮件/index.html","c2753777060e197fa7604d8d3850629d"],["/2020/03/09/MyEclipse因为破解不完整不能导出war包/index.html","ce4b43e4cc3e8e24643ec75de22b498d"],["/2020/03/09/flutter沉浸式状态栏/index.html","fb8954235977334cb4d3a03056c531b5"],["/2020/03/09/html两行代码随机一句诗词/index.html","d8ba42e9d9d3649ba94c5b72576206b2"],["/2020/03/12/Flutter自定义Drawer的图标/index.html","a3b0020ce41487836d2e67a1f50d0acc"],["/404.html","a38ad923ee585689f05447fa41c69038"],["/about/index.html","bc16e0393c2d42194096e3ec8e33bc58"],["/archives/2020/02/index.html","591b30cd5be16ac4c12a12627f64bd4b"],["/archives/2020/03/index.html","22cfdffe6644ab7f84aac9ae5cd37445"],["/archives/2020/index.html","6e932fe65755c5cf5e128f14bce3c14f"],["/archives/2020/page/2/index.html","b6e7d9e70a408fe9531258a0003cad8e"],["/archives/index.html","09afc0f41cb566bf9f32833bec5a9566"],["/archives/page/2/index.html","09afc0f41cb566bf9f32833bec5a9566"],["/categories/Flutter/index.html","7118779b60b4b1aed5e83c12f2398d3b"],["/categories/Java/index.html","4782c0db8c2beedae8aba8f81200fa8b"],["/categories/index.html","de238c37d3293ea041e0f33a8cb067b5"],["/categories/搞机之路/index.html","4c65ed5124d8caa2abab062b6d28fe73"],["/categories/疑难杂症/index.html","2848a4555a7b998eee8603c1252e0950"],["/categories/编程学习/index.html","0137706a7ff0208164dc098579f4b2b7"],["/categories/网站相关/index.html","4c293b9f78a1cdd3e31dce44ee363280"],["/css/style.css","8431db181dde76f0e06b07e59b085397"],["/font/SourceCodePro.ttf","275e537a0d558cc20f56799298d080fa"],["/friends/index.html","17ac5795c3c9e6416160458c1c9d4170"],["/img/alipay.jpg","ec2a39794894636c4b316c63c6f7e3d7"],["/img/avatar.jpg","4c4c378c308d1c72a1e6bb46f1f373c2"],["/img/brand.jpg","734f817bbb181d0180d7b37749769cc0"],["/img/wechat.jpg","83fcb7dbf5258417f3a96c0dcacf294c"],["/index.html","cbfaf096017730421936e0c51cc526b0"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","0be628f80a1aee3554409e54a60df09d"],["/js/issues.js","4868732e560db0465715cf9b221646bd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","07e42c76f831db691abc3936c529f291"],["/page/2/index.html","2195bc538b0ecee54a84fb941b1288ea"],["/sw-register.js","e1468ab154bc6311ab226601b7a088c0"],["/tags/ADB/index.html","37c4188345a56cdc8c3e91f80569089b"],["/tags/Github/index.html","15a2f8f733cf1fa03eff745623198e08"],["/tags/Hexo/index.html","14b0534ac3bc5cff616909529185fe08"],["/tags/Myeclipse/index.html","f5e9a0b1fe94f17ff4ef66ecf5b4a6dc"],["/tags/flutter/index.html","b729447c7204ca5abec7b5d7c4716814"],["/tags/git/index.html","dd0bf7d8a1313359dc21b6595f8d42c8"],["/tags/html/index.html","41a0ece2e51fc852551f9dcada8d5239"],["/tags/index.html","ccdd2bc1a126e10cce63092c6e924ede"],["/tags/安卓/index.html","4807354c2d2deaa6bd149b9113ea7feb"],["/tags/搞机技巧/index.html","40286506ff79ead3cfe3168aaa33dc30"],["/tags/环境配置/index.html","7bee1289e2f8531a34925bdb9dc3a2fe"],["/tags/知识记录/index.html","2522ccea4c3ec4512fc7d9f5c79c8727"]];
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
