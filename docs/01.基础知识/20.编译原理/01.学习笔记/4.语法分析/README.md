---
title: 语法分析
date: 2021-07-23 02:55:50
permalink: null
categories: 
  - null
tags: 
  - null
author: 
  name: 木子识时务
  link: https://github.com/sbwcwso
editLink: true
---

# 语法分析

```markmap

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
