var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+auto switch", {
    "+auto switch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)baidu\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)zhimg\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)zhihu\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)deepl\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)cloudflare\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)google\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)9shenmi\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)gtloli\.cc$/.test(host)) return "+proxy";
        if (/(?:^|\.)codeforces\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)steampowered\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)cs61a\.org$/.test(host)) return "+proxy";
        if (/(?:^|\.)wikia-services\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)fandom\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)chartbeat\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)sbs\.com\.au$/.test(host)) return "+proxy";
        if (/(?:^|\.)gstatic\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)sankakucomplex\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)xvideos-cdn\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)wikipedia\.org$/.test(host)) return "+proxy";
        if (/(?:^|\.)imgur\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)nhentai\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)ameba\.jp$/.test(host)) return "+proxy";
        if (/(?:^|\.)raw\.githubusercontent\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)maj-soul\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)quantserve\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)scorecardresearch\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)nocookie\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)jnn-pa\.googleapis\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)tencent\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)hdslb\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)akamaized\.net$/.test(host)) return "DIRECT";
        if (/(?:^|\.)haedu\.gov\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)btorrent\.xyz$/.test(host)) return "+proxy";
        if (/(?:^|\.)flair\.finance$/.test(host)) return "+proxy";
        if (/(?:^|\.)ipfs\.yt$/.test(host)) return "+proxy";
        if (/(?:^|\.)cf-ipfs\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ipfs-gateway\.cloud$/.test(host)) return "+proxy";
        if (/(?:^|\.)filebase\.io$/.test(host)) return "+proxy";
        if (/(?:^|\.)plantyourtree\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)forta\.network$/.test(host)) return "+proxy";
        if (/(?:^|\.)alicdn\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ravencoinipfs-gateway\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)pollinations\.ai$/.test(host)) return "+proxy";
        if (/(?:^|\.)status\.im$/.test(host)) return "+proxy";
        if (/(?:^|\.)ipfscdn\.io$/.test(host)) return "+proxy";
        if (/(?:^|\.)mypinata\.cloud$/.test(host)) return "+proxy";
        if (/(?:^|\.)apple\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)pximg\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)redditstatic\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)redditmedia\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)redd\.it$/.test(host)) return "+proxy";
        if (/(?:^|\.)reddit\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)163\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)126\.net$/.test(host)) return "DIRECT";
        if (/(?:^|\.)rlcdn\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)bilibili\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)chaoxing\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)google-analytics\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)steamstatic\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)tiresomethunder\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)taboola\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)hotjar\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)sail-personalize\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)s-nbcnews\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)nbcnews\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)mzstatic\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)unipus\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)picacomic\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)kemono\.party$/.test(host)) return "+proxy";
        if (/(?:^|\.)bdstatic\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)fontawesome\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)gamewikia\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ascii2d\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)twitter\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)onesignal\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)facebook\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)facebook\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)ygo-sem\.cn$/.test(host)) return "+proxy";
        if (/(?:^|\.)ytimg\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)googlevideo\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)youtube\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)masterduelmeta\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)btloader\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)intergient\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)intergi\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)duellinksmeta\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)gamegene\.cn$/.test(host)) return "+proxy";
        if (/(?:^|\.)flagcounter\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)faisys\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)fonts\.googleapis\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)icpc\.global$/.test(host)) return "+proxy";
        if (/(?:^|\.)zzu\.edu\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)jsonip\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)outbrain\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)piano\.io$/.test(host)) return "+proxy";
        if (/(?:^|\.)nikkei\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)luogu\.com\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)iwara\.tv$/.test(host)) return "+proxy";
        if (/(?:^|\.)imomoe\.la$/.test(host)) return "+proxy";
        if (/(?:^|\.)zhtuanjian\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)noi\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)sencdn\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)gridsumdissector\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)cnblogs\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)qq\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)mcmod\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)pigai\.org$/.test(host)) return "DIRECT";
        if (/(?:^|\.)bilivideo\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)www\.gov\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)gjzwfw\.gov\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)hdu\.edu\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)plexstorm\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)plexstorm\.me$/.test(host)) return "+proxy";
        if (/(?:^|\.)360\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)newtab$/.test(host)) return "DIRECT";
        if (/(?:^|\.)telegram\.org$/.test(host)) return "+proxy";
        if (/(?:^|\.)wikimedia\.org$/.test(host)) return "+proxy";
        if (/(?:^|\.)twimg\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)googleusercontent\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ggpht\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)livedoor\.jp$/.test(host)) return "+proxy";
        if (/(?:^|\.)steamcommunity\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)hitomi\.la$/.test(host)) return "+proxy";
        if (/(?:^|\.)pixiv\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)ajax\.googleapis\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)googletagmanager\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)oreno3d\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)github\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)curseforge\.com$/.test(host)) return "+proxy";
        if (/^internal\.example\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)example\.com$/.test(host)) return "+proxy";
        return "DIRECT";
    },
    "+proxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "SOCKS5 127.0.0.1:10808; SOCKS 127.0.0.1:10808";
    }
});