---
title: 编译原理
date: 2021-07-20 11:28:49
permalink: null
categories: null
tags: 
  - null
author: 
  name: 木子识时务
  link: https://github.com/sbwcwso
editLink: true
---

# 编译原理

* [公开课地址](https://www.icourse163.org/course/HIT-1002123007?tid=1450215473)
::: warning 本笔记的大部分图片来自于课程PPT，仅供交流学习，禁止转载
:::

::: tip 个人感悟
* 老师上课讲的目录个人感觉是按照龙书来的，分章节讲得挺好的👍
* 但是各个章节衔接起来不太顺畅，看起来挺有压力的。这方面还是建议多参考龙书🐉的原书。
:::


## 思维导图目录

```markmap

- [学习笔记](/01.基础知识/20.编译原理/01.学习笔记)
  - [引论](/pages/cd48a6/#引论)
    - [什么是编译](/pages/cd48a6/#什么是编译)
      - [计算机程序设计语言及编译](/pages/cd48a6/#计算机程序设计语言及编译)
      - [语言处理器](/pages/cd48a6/#语言处理器)
        - [解释器](/pages/cd48a6/#解释器)
        - [编译器](/pages/cd48a6/#编译器)
    - [编译器的结构](/pages/cd48a6/#编译器的结构)
      - [词法分析概述](/pages/cd48a6/#词法分析概述)
      - [语法分析概述](/pages/cd48a6/#语法分析概述)
      - [语义分析概述](/pages/cd48a6/#语义分析概述)
        - [语义检查](/pages/cd48a6/#语义检查)
      - [中间代码生成及编译器后端概述](/pages/cd48a6/#中间代码生成及编译器后端概述)
        - [常用的中间表示形式](/pages/cd48a6/#常用的中间表示形式)
        - [目标代码生成](/pages/cd48a6/#目标代码生成)
        - [代码优化](/pages/cd48a6/#代码优化)
  - [程序设计语言及其文法](/01.基础知识/20.编译原理/01.学习笔记/2.程序设计语言及其文法)
    - [基本概念](/pages/6dfd96/#基本概念)
      - [字母表](/pages/6dfd96/#字母表)
        - [字母表上的运算](/pages/6dfd96/#字母表上的运算)
          - [字母表乘积运算](/pages/6dfd96/#字母表乘积运算)
          - [字母表的幂运算](/pages/6dfd96/#字母表的幂运算)
          - [字母表的正闭包(positive closure)](/pages/6dfd96/#字母表的正闭包positive-closure)
          - [字母表的克林闭包(Kleene closure)](/pages/6dfd96/#字母表的克林闭包kleene-closure)
      - [串(符号串)](/pages/6dfd96/#串符号串)
        - [串上的运算](/pages/6dfd96/#串上的运算)
          - [串的连接](/pages/6dfd96/#串的连接)
          - [串的幂运算](/pages/6dfd96/#串的幂运算)
    - [文法](/pages/e070c9/#文法)
      - [定义](/pages/e070c9/#定义)
        - [终结符集合](/pages/e070c9/#终结符集合)
        - [非终结符集合](/pages/e070c9/#非终结符集合)
        - [产生式](/pages/e070c9/#产生式)
        - [产生式集合](/pages/e070c9/#产生式集合)
        - [开始符号](/pages/e070c9/#开始符号)
      - [产生式的简写](/pages/e070c9/#产生式的简写)
      - [符号约定](/pages/e070c9/#符号约定)
    - [语言的定义](/pages/556375/#语言的定义)
      - [推导和归约](/pages/556375/#推导和归约)
        - [推导 (Derivations)](/pages/556375/#推导-derivations)
        - [归约 (Reductions)](/pages/556375/#归约-reductions)
      - [句型和句子](/pages/556375/#句型和句子)
      - [语言的形式化定义](/pages/556375/#语言的形式化定义)
      - [语言上的运算](/pages/556375/#语言上的运算)
    - [文法的分类 -- Chomsky 文法分类体系](/pages/cda182/#文法的分类----chomsky-文法分类体系)
      - [Type-0 Grammar(0 型文法)](/pages/cda182/#type-0-grammar0-型文法)
      - [Type-1 Grammar(1 型文法)](/pages/cda182/#type-1-grammar1-型文法)
      - [Type-2 Grammar(2 型文法)](/pages/cda182/#type-2-grammar2-型文法)
      - [Type-3 Grammar(3 型文法)](/pages/cda182/#type-3-grammar3-型文法)
      - [四种文法之间的联系](/pages/cda182/#四种文法之间的联系)
      - [CFG 分析树](/pages/cda182/#cfg-分析树)
        - [分析树是推导的图形化表示](/pages/cda182/#分析树是推导的图形化表示)
        - [句型的短语](/pages/cda182/#句型的短语)
        - [二义性文法 (Ambiguous Grammar)](/pages/cda182/#二义性文法-ambiguous-grammar)
          - [二义性文法的判定](/pages/cda182/#二义性文法的判定)
  
  - [词法分析](/01.基础知识/20.编译原理/01.学习笔记/3.词法分析)
    - [正则表达式](/pages/9ce251/#正则表达式)
      - [正则表达式的定义](/pages/9ce251/#正则表达式的定义)
      - [正则表达式的性质](/pages/9ce251/#正则表达式的性质)
      - [正则表达式的代数定律](/pages/9ce251/#正则表达式的代数定律)
    - [正则定义](/pages/4ae0ef/#正则定义)
      - [正则定义的形式](/pages/4ae0ef/#正则定义的形式)
      - [正则定义的实例](/pages/4ae0ef/#正则定义的实例)
    - [有穷自动机](/pages/1fc3c9/#有穷自动机)
      - [有穷自动机(FA)的基本定义](/pages/1fc3c9/#有穷自动机-fa-的基本定义)
      - [FA 模型](/pages/1fc3c9/#fa-模型)
      - [FA 的表示: 转换图 (Transition Graph)](/pages/1fc3c9/#fa-的表示-转换图-transition-graph)
      - [FA定义（接收）的语言](/pages/1fc3c9/#fa定义-接收-的语言)
      - [最长子串匹配原则(Longest String Matching Principle)](/pages/1fc3c9/#最长子串匹配原则-longest-string-matching-principle)
    - [有穷自动机的分类](/pages/8a7102/#有穷自动机的分类)
      - [确定的有穷自动机 (DFA)](/pages/8a7102/#确定的有穷自动机-dfa)
        - [DFA 的算法实现](/pages/8a7102/#dfa-的算法实现)
      - [非确定的有穷自动机 (NFA)](/pages/8a7102/#非确定的有穷自动机-nfa)
      - [DFA 和 NFA 的等价性](/pages/8a7102/#dfa-和-nfa-的等价性)
      - [带有“ε-边”的NFA](/pages/8a7102/#带有-ε-边-的nfa)
        - [带有和不带有“ε-边”的NFA 的等价性](/pages/8a7102/#带有和不带有-ε-边-的nfa-的等价性)
    - [从正则表达式到有穷自动机](/pages/e2d29c/#从正则表达式到有穷自动机)
      - [NFA 和 DFA 的特点](/pages/e2d29c/#nfa-和-dfa-的特点)
      - [根据 RE 构造 NFA](/pages/e2d29c/#根据-re-构造-nfa)
      - [从 NFA 到 DFA 的转换](/pages/e2d29c/#从-nfa-到-dfa-的转换)
    - [从NFA到DFA的转换](/pages/92730d/#从nfa到dfa的转换)
      - [转换原理](/pages/92730d/#转换原理)
      - [子集构造法](/pages/92730d/#子集构造法)
    - [识别单词的 DFA](/pages/54ce5b/#识别单词的-dfa)
      - [识别标识符的 DFA](/pages/54ce5b/#识别标识符的-dfa)
      - [识别无符号数的 DFA](/pages/54ce5b/#识别无符号数的-dfa)
      - [识别各进制无符号整数的 DFA](/pages/54ce5b/#识别各进制无符号整数的-dfa)
      - [识别注释的 DFA](/pages/54ce5b/#识别注释的-dfa)
      - [识别 Token 的 DFA](/pages/54ce5b/#识别-token-的-dfa)
  
  - [语法分析](/01.基础知识/20.编译原理/01.学习笔记/4.语法分析)
    
    - [自顶向下分析](/01.基础知识/20.编译原理/01.学习笔记/4.语法分析/01.自顶向下分析)
      - [自顶向下分析概述](/pages/de9148/#自顶向下分析概述)
        - [自顶向下的分析(Top-Down Parsing) 的特点](/pages/de9148/#自顶向下的分析top-down-parsing-的特点)
        - [最左推导(Left-most Derivation)](/pages/de9148/#最左推导left-most-derivation)
          - [自顶向下的语法分析采用最左推导方式](/pages/de9148/#自顶向下的语法分析采用最左推导方式)
        - [最右推导(Right-most Derivation)](/pages/de9148/#最右推导right-most-derivation)
        - [自顶向下语法分析的通用形式](/pages/de9148/#自顶向下语法分析的通用形式)
          - [递归下降分析](/pages/de9148/#递归下降分析)
          - [预测分析](/pages/de9148/#预测分析)
      - [文法转换](/pages/8d053f/#文法转换)
        - [左递归文法](/pages/8d053f/#左递归文法)
          - [问题： 左递归文法可能会使递归下降分析器陷入无限循环](/pages/8d053f/#问题-左递归文法可能会使递归下降分析器陷入无限循环)
        - [消除直接左递归](/pages/8d053f/#消除直接左递归)
          - [消除直接左递归的一般形式](/pages/8d053f/#消除直接左递归的一般形式)
        - [消除间接左递归](/pages/8d053f/#消除间接左递归)
        - [消除左递归的算法](/pages/8d053f/#消除左递归的算法)
        - [提取左公因子](/pages/8d053f/#提取左公因子)
          - [提取左公因子的算法](/pages/8d053f/#提取左公因子的算法)
      - [LL(1) 文法](/pages/acf8bd/#ll1-文法)
        - [产生式的可选集 -- SELECT 集](/pages/acf8bd/#产生式的可选集----select-集)
          - [S_ 文法](/pages/acf8bd/#s_-文法)
        - [非终结符的后继符号集 -- FOLLOW 集](/pages/acf8bd/#非终结符的后继符号集----follow-集)
          - [q_ 文法](/pages/acf8bd/#q_-文法)
        - [文法符号串的串首终结符集 -- FIRST 集](/pages/acf8bd/#文法符号串的串首终结符集----first-集)
        - [LL(1)文法的定义](/pages/acf8bd/#ll1文法的定义)
      - [FIRST 集与 FOLLOW 集的运算](/pages/5e8457/#first-集与-follow-集的运算)
        - [FIRST 集的运算](/pages/5e8457/#first-集的运算)
          - [计算文法符号 X 的 FIRST(X)](/pages/5e8457/#计算文法符号-x-的-firstx)
          - [计算文法符号串的 FIRST 集合](/pages/5e8457/#计算文法符号串的-first-集合)
        - [FOLLOW 集的运算](/pages/5e8457/#follow-集的运算)
          - [计算非终结符 A 的 FOLLOW(A)](/pages/5e8457/#计算非终结符-a-的-followa)
        - [计算 SELECT 集](/pages/5e8457/#计算-select-集)
        - [预测分析表](/pages/5e8457/#预测分析表)
      - [预测分析法](/pages/980aa3/#预测分析法)
        - [递归的预测分析法](/pages/980aa3/#递归的预测分析法)
        - [非递归的预测分析法](/pages/980aa3/#非递归的预测分析法)
        - [递归的预测分析法与非递归的预测分析法对比](/pages/980aa3/#递归的预测分析法与非递归的预测分析法对比)
        - [预测分析法的实现步骤⭐](/pages/980aa3/#预测分析法的实现步骤)
        - [预测分析中的错误处理](/pages/980aa3/#预测分析中的错误处理)
          - [错误检测](/pages/980aa3/#错误检测)
          - [错误恢复](/pages/980aa3/#错误恢复)
    
    - [自顶向上分析](/01.基础知识/20.编译原理/01.学习笔记/4.语法分析/02.自顶向上分析)
      
```
