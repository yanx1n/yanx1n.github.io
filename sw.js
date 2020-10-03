/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/05/Gboard-谷歌输入法导入词库/index.html","3d46fe1cc9f41cee84a95b98ea46cb41"],["/2020/02/05/通过ADB解锁System分区/index.html","e9c530477d1ecc04c9bf52d79a88a8ff"],["/2020/02/06/用Hexo和GitHub Pages搭建博客/index.html","dff02255b6d50c403147c838586ac260"],["/2020/02/07/MyEclipse中消除导入xx.min.js后报错的红叉/index.html","120902b9190147d4bfa240c5a729ab04"],["/2020/02/07/Myeclipse2010以上版本Mapper.xml报Referenced file contains errors/index.html","ed903f7220f9dbf9571afa1c500db962"],["/2020/03/03/配置flutter的时候的问题/index.html","8b8bca97516bbd9c15bfcc58816de932"],["/2020/03/05/Flutter Your app isn't using AndroidX/index.html","3d383923cd094db3a9be326ad2f27e24"],["/2020/03/07/Flutter 获取屏幕宽高/index.html","422bba7eb0736e7be9d33741edb65e78"],["/2020/03/09/Git Failed to connect to github.com port 443/index.html","f73788f888070826525c28c865c21725"],["/2020/03/09/JAVA使用QQ邮箱发送邮件/index.html","29db815e5d176ebd32cfb8001b0bcb17"],["/2020/03/09/MyEclipse因为破解不完整不能导出war包/index.html","ed59ebb370404208be3cf959fc61b8de"],["/2020/03/09/flutter沉浸式状态栏/index.html","0b62684aa1343d6bd53ee581ea81c42c"],["/2020/03/09/html两行代码随机一句诗词/index.html","68f2b87dcedaa755541e2aa75d0684fb"],["/2020/03/12/Flutter自定义Drawer的图标/index.html","d308c4846908ce7d3439683e7bc0e54d"],["/404.html","ce120ae831e5f399287f5a54aec7a391"],["/about/index.html","7cea813cbfe433b9731c0a8bb9c74509"],["/archives/2020/02/index.html","1606e7f0c6e6d6c360bb1ae6b45bb3ae"],["/archives/2020/03/index.html","88b09c2fe5cfe6fef7cde66cbe8d730e"],["/archives/2020/index.html","c081c6318feb6fc8fc9eb0bc9737b03b"],["/archives/2020/page/2/index.html","3d2fb60f797c38ce8564286aee6391e3"],["/archives/index.html","2911315cf78e80d9f1867d71ac18cc60"],["/archives/page/2/index.html","2911315cf78e80d9f1867d71ac18cc60"],["/categories/Flutter/index.html","fcf55d34288d9c97fb41b95f4e0a5021"],["/categories/Java/index.html","601124a71d4f91407887630bd3f2e7ec"],["/categories/index.html","205f3259d85754571f696cc89123ba0d"],["/categories/搞机之路/index.html","e6221a7da13a8829b8b1b035f8159c27"],["/categories/疑难杂症/index.html","10c2296fc19959f4d602a8d24b6b8f69"],["/categories/编程学习/index.html","a3e52a666b690b63d3970db2ce1e8254"],["/categories/网站相关/index.html","8fa987b3cec43b8241f1cd492fa39b64"],["/css/style.css","8431db181dde76f0e06b07e59b085397"],["/font/SourceCodePro.ttf","275e537a0d558cc20f56799298d080fa"],["/friends/index.html","086294e62d7c2996ae257742a3f08def"],["/img/alipay.jpg","ec2a39794894636c4b316c63c6f7e3d7"],["/img/avatar.jpg","4c4c378c308d1c72a1e6bb46f1f373c2"],["/img/brand.jpg","734f817bbb181d0180d7b37749769cc0"],["/img/wechat.jpg","83fcb7dbf5258417f3a96c0dcacf294c"],["/index.html","c0e250d01df6868f9cf239cca2878f4a"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","0be628f80a1aee3554409e54a60df09d"],["/js/issues.js","4868732e560db0465715cf9b221646bd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","769972c2a012c518c5b2330ef8c99573"],["/page/2/index.html","fe882b761070e6b377be3728aa5912e5"],["/sw-register.js","cd528367c257b84654645b11c051200c"],["/tags/ADB/index.html","6c2100ba7e2c505210b80be9c5bf56c0"],["/tags/Github/index.html","800e6ed8aa2dde2523713ef64e39753d"],["/tags/Hexo/index.html","7b70e8c2eeb7e65e02053e32b0d9a1b1"],["/tags/Myeclipse/index.html","5490d7d0388e5102d8187b04f5806bbd"],["/tags/flutter/index.html","e25403eec1579db9e250c45997503589"],["/tags/git/index.html","3b1a5cec3ac1fcad82b9f474c1a61cce"],["/tags/html/index.html","0beb118972edbabc0c0bb2a28aad7a41"],["/tags/index.html","5aee7fb0d125cacb976b3223ad6f64d2"],["/tags/安卓/index.html","d7224e3952f026ef6ba0b45fba882db0"],["/tags/搞机技巧/index.html","3bb4eb101f9f678a7186e0a8d387b0b3"],["/tags/环境配置/index.html","f3eca09c3db3c7829680cf89e6b0ca52"],["/tags/知识记录/index.html","19d04620b81b720a737bc4f7421a2492"]];
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
