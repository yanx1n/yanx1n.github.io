/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/05/Gboard-谷歌输入法导入词库/index.html","2dddf8cd485b3bbbedac8141f1ebae51"],["/2020/02/05/通过ADB解锁System分区/index.html","de634d828cc603410bebb0eacd940a27"],["/2020/02/06/用Hexo和GitHub Pages搭建博客/index.html","89a141999a247f8fdf21653c2fcad281"],["/2020/02/07/MyEclipse中消除导入xx.min.js后报错的红叉/index.html","db866da156501e809390e68b4fc8656f"],["/2020/02/07/Myeclipse2010以上版本Mapper.xml报Referenced file contains errors/index.html","cb30e4f3791782debcd82448d4f92c99"],["/2020/03/03/配置flutter的时候的问题/index.html","96058e13884db0855ca05fb7653579df"],["/2020/03/05/Flutter Your app isn't using AndroidX/index.html","44cbedbfa12efdb9b76d5a364382ea3c"],["/2020/03/07/Flutter 获取屏幕宽高/index.html","ea73f03af5fae9e9aa748f5d9e2d059b"],["/2020/03/09/Git Failed to connect to github.com port 443/index.html","5be64e48fa4dcf3e56134ce80eaf1b06"],["/2020/03/09/JAVA使用QQ邮箱发送邮件/index.html","0dfb4421a34596774af37322b0967995"],["/2020/03/09/MyEclipse因为破解不完整不能导出war包/index.html","eaf863beaeb77a642b4eb90db63072c1"],["/2020/03/09/flutter沉浸式状态栏/index.html","88b49f9cc4a1cf906e8520199ecc4383"],["/2020/03/09/html两行代码随机一句诗词/index.html","08ef606b18c0592e840c7d0615f45cc1"],["/2020/03/12/Flutter自定义Drawer的图标/index.html","bacb1643b43ba0ca993b323e20b08515"],["/404.html","fdca52d34fefb91603d6d710f56f95ab"],["/about/index.html","f6524a0a0a7d5d24b47416cfe418f143"],["/archives/2020/02/index.html","e74ef197a5cf2de060e5e1f358d83e57"],["/archives/2020/03/index.html","78def00e50b3236388f0fc9b35325109"],["/archives/2020/index.html","cd06f65744deb72fb6045c0b35266578"],["/archives/2020/page/2/index.html","2eb762574b3f32dfca38e05644ea8cc9"],["/archives/index.html","af90bb1a399fbcc42e44ac4d4ecf9688"],["/archives/page/2/index.html","af90bb1a399fbcc42e44ac4d4ecf9688"],["/categories/Flutter/index.html","549b5abfd50988411045ba16def47d7f"],["/categories/Java/index.html","2f3caa94f86a04fa573a43148c2a93e0"],["/categories/index.html","576e79276f6947a7d14d4e2c13de8b33"],["/categories/搞机之路/index.html","9e0006fb9a972f179680d6d1e1bda155"],["/categories/疑难杂症/index.html","1d65aa4183d503e75833484ec1456895"],["/categories/编程学习/index.html","75ccd26922bf71ba48ab3d0c915e4352"],["/categories/网站相关/index.html","c4eb2b4534eeff6edf4d96878480e85a"],["/css/style.css","8431db181dde76f0e06b07e59b085397"],["/font/SourceCodePro.ttf","275e537a0d558cc20f56799298d080fa"],["/friends/index.html","7b804970de2c3d57345162fc3c8e14af"],["/img/alipay.jpg","ec2a39794894636c4b316c63c6f7e3d7"],["/img/avatar.jpg","4c4c378c308d1c72a1e6bb46f1f373c2"],["/img/brand.jpg","734f817bbb181d0180d7b37749769cc0"],["/img/wechat.jpg","83fcb7dbf5258417f3a96c0dcacf294c"],["/index.html","d802e89787f031eee20ef46c02e7d94f"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","0be628f80a1aee3554409e54a60df09d"],["/js/issues.js","4868732e560db0465715cf9b221646bd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","547f14f5fd379e39053fe21d7f702630"],["/page/2/index.html","0a63e0b76336d515a30fa1ed385c173c"],["/sw-register.js","ee831c93ab4222e0313f98a1e199c555"],["/tags/ADB/index.html","4faa2e3f447813262466669868e3ab51"],["/tags/Github/index.html","8d65a176e516df1a8e8c51a314b0065e"],["/tags/Hexo/index.html","803665cb28ac52948657c56f69e0e405"],["/tags/Myeclipse/index.html","7aec6bbe9e02a0a9ac60f6bfeb70827e"],["/tags/flutter/index.html","80b6da3f20e6de60a1a4620c03ad610f"],["/tags/git/index.html","eb5387345ea07427a13a6cb4e4df25c3"],["/tags/html/index.html","dd157f3a7cd7d97dced8721582316b27"],["/tags/index.html","2445389b9bf7b697c5327e9d6bb83963"],["/tags/安卓/index.html","c37d37ecdeb0eb87c35f47c4273c985c"],["/tags/搞机技巧/index.html","b083e8a0127fe4b460b96f8e4832411a"],["/tags/环境配置/index.html","049cf67412030806ddd33bbb6fa9f9dc"],["/tags/知识记录/index.html","e791d438f4261fc6b7291c901348b1bd"]];
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
