/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/05/Gboard-谷歌输入法导入词库/index.html","1f1575fc2bbd7d9bf728fbb7ec38c9bb"],["/2020/02/05/通过ADB解锁System分区/index.html","ebeebbce0910e3854e1154b36ebc1fdf"],["/2020/02/06/用Hexo和GitHub Pages搭建博客/index.html","09af2746fde0128562527d44ace4a54c"],["/2020/02/07/MyEclipse中消除导入xx.min.js后报错的红叉/index.html","f334dce55894a5089e4bcd93e2ad2eee"],["/2020/02/07/Myeclipse2010以上版本Mapper.xml报Referenced file contains errors/index.html","5f1f3f57eb1fa8e2fe2decb2fbb48e0c"],["/2020/03/03/配置flutter的时候的问题/index.html","ff0d8721c031d06a683fb3b0d386e27e"],["/2020/03/05/Flutter Your app isn't using AndroidX/index.html","12fafc32440c57bb7121a1851e972096"],["/2020/03/07/Flutter 获取屏幕宽高/index.html","665d6f1ed63189bf53ffacddc1bf4308"],["/2020/03/09/Git Failed to connect to github.com port 443/index.html","d745c7bad415064ad0a53786c081c2e6"],["/2020/03/09/JAVA使用QQ邮箱发送邮件/index.html","4b8f9b5ad8cb201e9828034168402d02"],["/2020/03/09/MyEclipse因为破解不完整不能导出war包/index.html","aa96d0b988036792e3d9a3b27313a316"],["/2020/03/09/flutter沉浸式状态栏/index.html","3d65325936db4b32bd6d6d66fa11c6d1"],["/2020/03/09/html两行代码随机一句诗词/index.html","ba9201897d6b9f12fe2c0a762430c1d6"],["/2020/03/12/Flutter自定义Drawer的图标/index.html","1526174fd2999b725a63d5759ba74922"],["/404.html","cffa6e3d337cd03466799bf7e39da7b9"],["/about/index.html","859f6737d6a38871d1ea60b7fd18aa96"],["/archives/2020/02/index.html","fc6d667aa288fb4c9bd9951e84230271"],["/archives/2020/03/index.html","69e397df36cf51b1de9b3142a90fd412"],["/archives/2020/index.html","b38cce970535555b0c4443be900c5b3c"],["/archives/2020/page/2/index.html","eb07ca9160f0b0b4eb74515a79ebaad8"],["/archives/index.html","96ab53e955bca11c6d25fdf7d09284d1"],["/archives/page/2/index.html","96ab53e955bca11c6d25fdf7d09284d1"],["/categories/Flutter/index.html","5a62660e267dd903b5cb2aa3a3d9cd86"],["/categories/Java/index.html","2747bd697a67d9a0372179a3f067acab"],["/categories/index.html","9c306e3974b6b3fa69aa9cbaec56e9e0"],["/categories/搞机之路/index.html","a02a527696cebe6f3f88674daf9299a5"],["/categories/疑难杂症/index.html","800f5806cd253a53d04c0af0e0574110"],["/categories/编程学习/index.html","a03cb6814ce84969cf276a6685ccde88"],["/categories/网站相关/index.html","2b355076f53f4b5229833666dd802efa"],["/css/style.css","8431db181dde76f0e06b07e59b085397"],["/font/SourceCodePro.ttf","275e537a0d558cc20f56799298d080fa"],["/friends/index.html","58d94cad02f76d00de95071889fb7c91"],["/img/alipay.jpg","ec2a39794894636c4b316c63c6f7e3d7"],["/img/avatar.jpg","4c4c378c308d1c72a1e6bb46f1f373c2"],["/img/brand.jpg","734f817bbb181d0180d7b37749769cc0"],["/img/wechat.jpg","83fcb7dbf5258417f3a96c0dcacf294c"],["/index.html","64af11dc97328e35254d34a30eef98d5"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","0be628f80a1aee3554409e54a60df09d"],["/js/issues.js","4868732e560db0465715cf9b221646bd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","5e00fced4de575889763e05af77c2d40"],["/page/2/index.html","1213a5a5d5d2b37c41febb16cd077a90"],["/sw-register.js","7acf221568ca0ed57b92fcfdae1be6b8"],["/tags/ADB/index.html","b435ee397e673c3d226f03afa0eca36b"],["/tags/Github/index.html","9c8c915f6a503a107f5ba8c7a4d5283c"],["/tags/Hexo/index.html","e33ee75952211b7b0680fe69f0d212f1"],["/tags/Myeclipse/index.html","8859714d070a879b87fe8da8c0023fc4"],["/tags/flutter/index.html","76cb4e21da8d8eca4ef446b8d47acc42"],["/tags/git/index.html","de25f0778332bf5e2ee492fbede6ef41"],["/tags/html/index.html","ad422ca9bdb9396755a80673dbfd23fb"],["/tags/index.html","a0ef7c354fd3c5c5e0fcbf25e0fc3f3d"],["/tags/安卓/index.html","3cce5055cdcb19181baccf66256e6ccc"],["/tags/搞机技巧/index.html","7aeada73d8ebd3c3fdd37a2936f8f439"],["/tags/环境配置/index.html","65f38653eab71d82aab47e2234758893"],["/tags/知识记录/index.html","1f1aa8c537a9f73afee2342e2215fa2b"]];
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
