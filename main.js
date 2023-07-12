"use strict";
var ProxyMode;
(function (ProxyMode) {
    ProxyMode["DIRECT"] = "DIRECT";
    ProxyMode["SOCKS5"] = "SOCKS5 localhost:51080";
})(ProxyMode || (ProxyMode = {}));
var rules = {
    "# Gradle.org": ProxyMode.SOCKS5,
    "# logRocket.com": ProxyMode.SOCKS5,
    "# Obsidian.md": ProxyMode.SOCKS5,
    "# APKMirror.com": ProxyMode.SOCKS5,
    "app.RequestLy.io": ProxyMode.SOCKS5,
    "www.gravatar.com": ProxyMode.SOCKS5,
    "StackOverflow.com": ProxyMode.SOCKS5,
    "# live.com": ProxyMode.SOCKS5,
    "# bing.com": ProxyMode.SOCKS5,
    "# workers.dev": ProxyMode.SOCKS5,
    "# Cloudflare.com": ProxyMode.SOCKS5,
    "upload.wikimedia.org": ProxyMode.SOCKS5,
    "# wikipedia.org": ProxyMode.SOCKS5,
    "# medium.com": ProxyMode.SOCKS5,
    "# ApkPure.com": ProxyMode.SOCKS5,
    "# ZhongZiSo.com": ProxyMode.SOCKS5,
    "# Imgur.com": ProxyMode.SOCKS5,
    "# V2EX.com": ProxyMode.SOCKS5,
    "# Redd.it": ProxyMode.SOCKS5,
    "# Reddit.com": ProxyMode.SOCKS5,
    "# RedditMedia.com": ProxyMode.SOCKS5,
    "# FBCdn.net": ProxyMode.SOCKS5,
    "# FaceBook.com": ProxyMode.SOCKS5,
    "# TamperMonkey.net": ProxyMode.SOCKS5,
    "# UNPKG.com": ProxyMode.SOCKS5,
    "# Flutter.dev": ProxyMode.SOCKS5,
    "dl.Google.com": ProxyMode.DIRECT,
    "# G.co": ProxyMode.SOCKS5,
    "# Pub.dev": ProxyMode.SOCKS5,
    "# Goo.gle": ProxyMode.SOCKS5,
    "# ytImg.com": ProxyMode.SOCKS5,
    "# GgPht.com": ProxyMode.SOCKS5,
    "# Google.nl": ProxyMode.SOCKS5,
    "# Chrome.com": ProxyMode.SOCKS5,
    "# Google.com": ProxyMode.SOCKS5,
    "# AppsPot.com": ProxyMode.SOCKS5,
    "# Android.com": ProxyMode.SOCKS5,
    "# gStatic.com": ProxyMode.SOCKS5,
    "# YouTuBe.com": ProxyMode.SOCKS5,
    "# DartPad.dev": ProxyMode.SOCKS5,
    "# Google.com.*": ProxyMode.SOCKS5,
    "# FireBaseIo.com": ProxyMode.SOCKS5,
    "# GoogleCode.com": ProxyMode.SOCKS5,
    "# GoogleBlog.com": ProxyMode.SOCKS5,
    "# WithGoogle.com": ProxyMode.SOCKS5,
    "# GoogleApis.com": ProxyMode.SOCKS5,
    "# GoogleVideo.com": ProxyMode.SOCKS5,
    "# Google-Analytics.com": ProxyMode.SOCKS5,
    "# GoogleTagManager.com": ProxyMode.SOCKS5,
    "# GoogleUserContent.com": ProxyMode.SOCKS5,
    "GitHub.com": ProxyMode.SOCKS5,
    "gist.GitHub.com": ProxyMode.SOCKS5,
    "CodeLoad.GitHub.com": ProxyMode.SOCKS5,
    "# GitHubUserContent.com": ProxyMode.SOCKS5,
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
