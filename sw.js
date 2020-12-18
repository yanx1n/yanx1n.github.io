/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","169d603f2fdbfc7e9d584fccf85ec981"],["/about/index.html","417b58fa6594e50d3d596be1c919894a"],["/archives/2020/02/index.html","a681f897e3a4136302693807184666e8"],["/archives/2020/03/index.html","89f9b67c7751dc0ad7cb481fa5826c1c"],["/archives/2020/10/index.html","e1fc30af4ec30300c81125e999ee9544"],["/archives/2020/12/index.html","2f7ca791337d2afb1dbefe05906074aa"],["/archives/2020/index.html","e9004fa1cf966a8ee6aa00a830b9cada"],["/archives/2020/page/2/index.html","dc3e61c65420e54e97ef30343a19903f"],["/archives/index.html","f6f19b2ca9702f80e96e7fc2f9d5325b"],["/archives/page/2/index.html","f6f19b2ca9702f80e96e7fc2f9d5325b"],["/categories/Flutter/index.html","bcd92a2a44f68c2eeef50db2d30fcc6f"],["/categories/Java/index.html","890ff93f06c54c076f4b36ce12adfd4d"],["/categories/index.html","2a7d9b56cb7bd923e2c4a45638c4197d"],["/categories/linux/index.html","100a90bdf3a1996d92c683d1f600ae6c"],["/categories/搞机之路/index.html","205e17955e26cd29b2e8c56387f8b672"],["/categories/疑难杂症/index.html","bfa2dbe5a1c2c854617905f9dcb9b06f"],["/categories/编程学习/index.html","b1335abab862802c56b73c3ff9eb148b"],["/css/style.css","8b7497414412c54ec74725050572c2f6"],["/font/SourceCodePro.ttf","275e537a0d558cc20f56799298d080fa"],["/friends/index.html","2864fab9faf471e710f983b801e34933"],["/img/alipay.jpg","ec2a39794894636c4b316c63c6f7e3d7"],["/img/avatar.jpg","4c4c378c308d1c72a1e6bb46f1f373c2"],["/img/brand.jpg","734f817bbb181d0180d7b37749769cc0"],["/img/cloud.svg","5726840f8106499fa72bfe58c538390d"],["/img/project.svg","deb1b70aa7e23c7038f1cdcf142d8e15"],["/img/wechat.jpg","83fcb7dbf5258417f3a96c0dcacf294c"],["/index.html","1e85570a697ae1ac06ba3bc8eb65bafc"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","18ca829d5f4259bbcd88136d9a8a9004"],["/js/issues.js","4868732e560db0465715cf9b221646bd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","bcf57c980e4d2aa94bc5a081172239c0"],["/p/1810.html","5210e91e2eb5e515f50b3c9a6001699b"],["/p/1da6.html","53adcfc78e75a5dc352877345b9b972b"],["/p/2647.html","016c4211f7378a4fbdc878c43081d691"],["/p/5a5b.html","39e6a1686275a7ceb16a70a0974b45c7"],["/p/5c5b.html","6213f5cc51ae6c938bb6e39ae1d37e55"],["/p/682b.html","2d43a522c3b06272655eca3d9f43fdc0"],["/p/689b.html","f8d826d07afc2f026a2f2ee7dfb62191"],["/p/7178.html","aca228554bc14b4cd900f33e38bce731"],["/p/7d1w.html","6c3b97b2d8c012d11f2d620a660cdf94"],["/p/8335.html","602fcca986304e9bc1e494363303c48c"],["/p/839a.html","fba983e1d5b62c00704b80be3e0cf0d8"],["/p/9446.html","40ec7b9267a9182746347cee63ce1d86"],["/p/9b60.html","7f51b187f7bf6b62275c27fc4a66908a"],["/p/9d6d.html","0ed95be2ec468ee81c352ebd2c8c5570"],["/p/b251.html","89ef89a57da8a870ea3707c6eeee3c29"],["/p/b254.html","f8b40cfcd5e0992d8b5c77b999464f16"],["/p/c3d7.html","dcd9b983de1d3f6b56bbcbaacb499563"],["/p/ea19.html","a7ab8e9f6eaf974e444ab9ba9e61d10a"],["/page/2/index.html","ba5db4e97ceb7f6f05cdab76ac07a21c"],["/sw-register.js","0d4e58c7da20d06002781e263c4c726d"],["/tags/ADB/index.html","da7e422b6fbf4fb7f9da46f20e24f8c2"],["/tags/Hexo/index.html","648d057175899ee5160e6633e6610792"],["/tags/MyEclipse/index.html","6388137e0f19e6f3bbfb3955fc477d77"],["/tags/flutter/index.html","3442e56cf1dc011eb54e7e68cf9ccb9c"],["/tags/git/index.html","33ce9457a58696504b55d55204825e49"],["/tags/html/index.html","cad51a4eea064a3211072133be98be79"],["/tags/index.html","29db8c45e4c0739ef8e234eabd8414cc"],["/tags/kail/index.html","c64397f15468d00fac76c6deb2cebff4"],["/tags/mysql/index.html","50a0c4b4337656476972f251c8ed5830"],["/tags/安卓/index.html","bdcf98d3a378f65c1076ddd37f92f441"],["/tags/搞机技巧/index.html","514d2854bff2b8e9fd0b55d9ffca57a1"],["/tags/环境配置/index.html","4ba8411564de32fc844dedd05144689c"],["/tags/知识记录/index.html","57d15b73f5e4f1650b363158bd00ad73"]];
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
