// 修改 markup 导出的 html 文件的头文件
var base_element = document.createElement('base');
base_element.target = '_blank';

var style_element = document.createElement('style');
style_element.textContent= 'a {text-decoration: none;};body {background-color:#fff;}'
document.head.appendChild(style_element)