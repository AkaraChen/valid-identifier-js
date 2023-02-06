# valid-identifier-js

## Motivation

搜了大半天怎么用正则匹配合法的 javascript 标识，大部分的结果都多少有点问题，意外在 [tc39](https://github.com/tc39/proposal-regexp-unicode-property-escapes#other-examples) 那边看到居然有一个内置的 regex 方案，但是不支持匹配 keyword，我给他加上了，发布了这个包。

## Usage

直接看我的[测试用例](./test/index.test.ts)就行了。