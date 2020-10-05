/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","bf504923fb7d132990851fb9df0b9be6"],["/about/index.html","4c64c9734afedb814f83abe05b06f218"],["/archives/2020/02/index.html","3ec9693ff3e627bcc2eb10f8b342c1a4"],["/archives/2020/03/index.html","d94d7bc1a5d2f31427a30bedf92797fe"],["/archives/2020/10/index.html","c53347de12eee74694f425dbb0113803"],["/archives/2020/index.html","dd454ae44e2ba6831f1d16cac2bb7ad8"],["/archives/2020/page/2/index.html","da518e3f2ca07fc844ee37d68fc52a51"],["/archives/index.html","a3962b91d4bf30e30f168a9b499af04c"],["/archives/page/2/index.html","a3962b91d4bf30e30f168a9b499af04c"],["/categories/Flutter/index.html","b57dc393b7194921d0d2a2414fceea09"],["/categories/Java/index.html","1e6935e66544426ac9563d23bd1bd42c"],["/categories/index.html","4d813de55f75f3b2e2b52c84c95f01f8"],["/categories/搞机之路/index.html","8dbed9772c635805e7858c999b4cbbcb"],["/categories/疑难杂症/index.html","ec49ce5c0bb584b0ba92f2032a5db150"],["/categories/编程学习/index.html","ca1589a45d43e3a211f07fc7cd1b2387"],["/categories/网站相关/index.html","2ade5ab260364bdd29da7f6ee3e7ee66"],["/css/style.css","efafe9abb585afe1c64f82ec0df48181"],["/font/SourceCodePro.ttf","275e537a0d558cc20f56799298d080fa"],["/friends/index.html","41c87c585e8b00099604b0244b562331"],["/img/alipay.jpg","ec2a39794894636c4b316c63c6f7e3d7"],["/img/avatar.jpg","4c4c378c308d1c72a1e6bb46f1f373c2"],["/img/brand.jpg","734f817bbb181d0180d7b37749769cc0"],["/img/wechat.jpg","83fcb7dbf5258417f3a96c0dcacf294c"],["/index.html","19aadbbf32ffbdb4ca488169a228096d"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","0be628f80a1aee3554409e54a60df09d"],["/js/issues.js","4868732e560db0465715cf9b221646bd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","a5ab287693ef0d73afab8c932ebcb22c"],["/p/1810.html","d523be260e2d9b0616688d66742d11c5"],["/p/1da6.html","81045e37d3eac82f8863e02c303f3324"],["/p/2647.html","1c91a154da7c76908cbd273f63545a53"],["/p/5a5b.html","14fea5f96ccd98cd31a6a0e243215628"],["/p/5c5b.html","fb525e28550fc5852901b20294bd2ddb"],["/p/682b.html","f7a3b9f152a5969085be780c29a07c09"],["/p/689b.html","95c40aaea3feb6f181b6b7077e2fca00"],["/p/7178.html","2bde2564d762ea1cbd8ea7860342dd63"],["/p/8335.html","9fe4315c2c1b0f2c228ab266c7661329"],["/p/839a.html","41b15eb8bb32a2cff9a6d27f8c66593e"],["/p/9446.html","895d15218ee626ef4ed03abcf784bb0e"],["/p/9b60.html","62565484e3c103b35dc6725b0363de2e"],["/p/9d6d.html","da84364067b085061b6e50b4959e0e98"],["/p/b251.html","cad371dcea58171e429cdfe15e35cd6c"],["/p/b254.html","2c64875b79ca3573f2a0ef7b665ccdf6"],["/p/c3d7.html","972519ee5a611f93a93cd32f231fecfd"],["/p/ea19.html","c1eb4d42c785405e6a2aee7de4593509"],["/page/2/index.html","3a2a556080cd24a44a21e3785b7f2986"],["/sw-register.js","e41a943d645fd5270ed551b474916671"],["/tags/ADB/index.html","8a3f3913c56b69f4cfa87ae50ea346e6"],["/tags/Github/index.html","86026ccc9a1f9eb2b12ae2efad5d95c7"],["/tags/Hexo/index.html","2407323f3bacc0b12f6bb3480c159e8e"],["/tags/Myeclipse/index.html","989a60fb98d9b42ccc8d1b2438d7234c"],["/tags/flutter/index.html","ed7b586fb4fbfeae78c9ce86fb9acf9e"],["/tags/git/index.html","bf9ff534d407744e099970f45fe0aec3"],["/tags/html/index.html","2af5f262bf910d65c7b30ae3a7fe6a22"],["/tags/index.html","d75f26bda6996f6d4506c0666a97e87d"],["/tags/mysql/index.html","5f1ada01b96e3280f0db1259fd1ba83c"],["/tags/安卓/index.html","6ae4b4a67d28b42ad8eb48d756fe8fa4"],["/tags/搞机技巧/index.html","59109e3f3d6faac386d6b8b183042f21"],["/tags/环境配置/index.html","6104654a3edaae862d3da6847489db16"],["/tags/知识记录/index.html","00d302d88457ade2e691ca4e1def7fbe"]];
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
