"use strict";
var ProxyMode;
(function (ProxyMode) {
    ProxyMode["DIRECT"] = "DIRECT";
    ProxyMode["SOCKS5"] = "SOCKS5 localhost:51080";
})(ProxyMode || (ProxyMode = {}));
var rules = {
    "www.gravatar.com": ProxyMode.SOCKS5,
    "StackOverflow.com": ProxyMode.SOCKS5,
    "th.bing.com": ProxyMode.SOCKS5,
    "www.bing.com": ProxyMode.SOCKS5,
    "# workers.dev": ProxyMode.SOCKS5,
    "# Cloudflare.com": ProxyMode.SOCKS5,
    "# wikipedia.org": ProxyMode.SOCKS5,
    "# medium.com": ProxyMode.SOCKS5,
    "# ApkPure.com": ProxyMode.SOCKS5,
    "# ZhongZiSo.com": ProxyMode.SOCKS5,
    "# Imgur.com": ProxyMode.SOCKS5,
    "# V2EX.com": ProxyMode.SOCKS5,
    "# Redd.it": ProxyMode.SOCKS5,
    "# Reddit.com": ProxyMode.SOCKS5,
    "# RedditMedia.com": ProxyMode.SOCKS5,
    "# FaceBook.com": ProxyMode.SOCKS5,
    "# TamperMonkey.net": ProxyMode.SOCKS5,
    "# UNPKG.com": ProxyMode.SOCKS5,
    "# Flutter.dev": ProxyMode.SOCKS5,
    "# ytImg.com": ProxyMode.SOCKS5,
    "# GgPht.com": ProxyMode.SOCKS5,
    "# Google.com": ProxyMode.SOCKS5,
    "# Android.com": ProxyMode.SOCKS5,
    "# gStatic.com": ProxyMode.SOCKS5,
    "# YouTuBe.com": ProxyMode.SOCKS5,
    "# DartPad.dev": ProxyMode.SOCKS5,
    "# Google.com.*": ProxyMode.SOCKS5,
    "# GoogleCode.com": ProxyMode.SOCKS5,
    "# GoogleBlog.com": ProxyMode.SOCKS5,
    "# GoogleApis.com": ProxyMode.SOCKS5,
    "# Google-Analytics.com": ProxyMode.SOCKS5,
    "# GoogleUserContent.com": ProxyMode.SOCKS5,
    "GitHub.com": ProxyMode.SOCKS5,
    "raw.GitHubUserContent.com": ProxyMode.SOCKS5,
    "# git-scm.com": ProxyMode.SOCKS5,
};
function ruleToRegExp(rule) {
    var pattern = rule.replace(/\s/g, "");
    pattern = pattern.replace(/^\*+\.+/, "?");
    pattern = pattern.replace(/\.+\*+$/, "?");
    pattern = pattern.replace(/\.+/g, "\\.");
    pattern = pattern.replace(/\*+/g, "[^.]+");
    pattern = pattern.replace(/^#/, "(?:[^.]+\\.)*");
    pattern = pattern.replace(/^\?/, "(?:[^.]+\\.)+");
    pattern = pattern.replace(/\?$/, "(?:\\.[^.]+)+");
    return new RegExp("^".concat(pattern, "$"), "i");
}
function FindProxyForURL(url, host) {
    for (var r in rules) {
        if (ruleToRegExp(r).test(host)) {
            return rules[r];
        }
    }
    return ProxyMode.DIRECT;
}
