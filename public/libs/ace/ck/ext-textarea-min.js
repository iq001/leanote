ace.define("ace/theme/textmate",["require","exports","module","ace/lib/dom"],function(e,t,a){"use strict";t.isDark=!1,t.cssClass="ace-tm",t.cssText='.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;border-radius: 2px;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}';var r=e("../lib/dom");r.importCssString(t.cssText,t.cssClass)}),ace.define("ace/ace",["require","exports","module","ace/lib/fixoldbrowsers","ace/lib/dom","ace/lib/event","ace/editor","ace/edit_session","ace/undomanager","ace/virtual_renderer","ace/worker/worker_client","ace/keyboard/hash_handler","ace/placeholder","ace/multi_select","ace/mode/folding/fold_mode","ace/theme/textmate","ace/ext/error_marker","ace/config"],function(e,t,a){"use strict";e("./lib/fixoldbrowsers");var r=e("./lib/dom"),o=e("./lib/event"),n=e("./editor").Editor,i=e("./edit_session").EditSession,c=e("./undomanager").UndoManager,s=e("./virtual_renderer").VirtualRenderer;e("./worker/worker_client"),e("./keyboard/hash_handler"),e("./placeholder"),e("./multi_select"),e("./mode/folding/fold_mode"),e("./theme/textmate"),e("./ext/error_marker"),t.config=e("./config"),t.require=e,t.edit=function(e){if("string"==typeof e){var a=e;if(e=document.getElementById(a),!e)throw new Error("ace.edit can't find div #"+a)}if(e&&e.env&&e.env.editor instanceof n)return e.env.editor;var i="";if(e&&/input|textarea/i.test(e.tagName)){var c=e;i=c.value,e=r.createElement("pre"),c.parentNode.replaceChild(e,c)}else i=r.getInnerText(e),e.innerHTML="";var l=t.createEditSession(i),d=new n(new s(e));d.setSession(l);var u={document:l,editor:d,onResize:d.resize.bind(d,null)};return c&&(u.textarea=c),o.addListener(window,"resize",u.onResize),d.on("destroy",function(){o.removeListener(window,"resize",u.onResize),u.editor.container.env=null}),d.container.env=d.env=u,d},t.createEditSession=function(e,t){var a=new i(e,t);return a.setUndoManager(new c),a},t.EditSession=i,t.UndoManager=c}),ace.define("ace/ext/textarea",["require","exports","module","ace/lib/event","ace/lib/useragent","ace/lib/net","ace/ace","ace/theme/textmate"],function(e,t,a){"use strict";function r(e,t){for(var a in t)e.style[a]=t[a]}function o(e,t){if("textarea"!=e.type)throw new Error("Textarea required!");var a=e.parentNode,r=document.createElement("div"),o=function(){var t="position:relative;";["margin-top","margin-left","margin-right","margin-bottom"].forEach(function(a){t+=a+":"+m(e,r,a)+";"});var a=m(e,r,"width")||e.clientWidth+"px",o=m(e,r,"height")||e.clientHeight+"px";t+="height:"+o+";width:"+a+";",t+="display:inline-block;",r.setAttribute("style",t)};for(s.addListener(window,"resize",o),o(),a.insertBefore(r,e.nextSibling);a!==document;){if("FORM"===a.tagName.toUpperCase()){var n=a.onsubmit;a.onsubmit=function(a){e.value=t(),n&&n.call(this,a)};break}a=a.parentNode}return r}function n(t,a,r){d.loadScript(t,function(){e([a],r)})}function i(e,t,a,r,o,i){function c(e){return"true"===e||1==e}var s=e.getSession(),l=e.renderer;return i=i||n,e.setDisplaySettings=function(t){null==t&&(t="none"==a.style.display),t?(a.style.display="block",a.hideButton.focus(),e.on("focus",function r(){e.removeListener("focus",r),a.style.display="none"})):e.focus()},e.$setOption=e.setOption,e.$getOption=e.getOption,e.setOption=function(t,a){switch(t){case"mode":e.$setOption("mode","ace/mode/"+a);break;case"theme":e.$setOption("theme","ace/theme/"+a);break;case"keybindings":switch(a){case"vim":e.setKeyboardHandler("ace/keyboard/vim");break;case"emacs":e.setKeyboardHandler("ace/keyboard/emacs");break;default:e.setKeyboardHandler(null)}break;case"softWrap":case"fontSize":e.$setOption(t,a);break;default:e.$setOption(t,c(a))}},e.getOption=function(t){switch(t){case"mode":return e.$getOption("mode").substr("ace/mode/".length);case"theme":return e.$getOption("theme").substr("ace/theme/".length);case"keybindings":var a=e.getKeyboardHandler();switch(a&&a.$id){case"ace/keyboard/vim":return"vim";case"ace/keyboard/emacs":return"emacs";default:return"ace"}break;default:return e.$getOption(t)}},e.setOptions(o),e}function c(e,a,r){function o(e,t,a,r){if(!a)return void e.push("<input type='checkbox' title='",t,"' ",r+""=="true"?"checked='true'":"","'></input>");e.push("<select title='"+t+"'>");for(var o in a)e.push("<option value='"+o+"' "),r==o&&e.push(" selected "),e.push(">",a[o],"</option>");e.push("</select>")}var n=null,i={mode:"Mode:",wrap:"Soft Wrap:",theme:"Theme:",fontSize:"Font Size:",showGutter:"Display Gutter:",keybindings:"Keyboard",showPrintMargin:"Show Print Margin:",useSoftTabs:"Use Soft Tabs:",showInvisibles:"Show Invisibles"},c={mode:{text:"Plain",javascript:"JavaScript",xml:"XML",html:"HTML",css:"CSS",scss:"SCSS",python:"Python",php:"PHP",java:"Java",ruby:"Ruby",c_cpp:"C/C++",coffee:"CoffeeScript",json:"json",perl:"Perl",clojure:"Clojure",ocaml:"OCaml",csharp:"C#",haxe:"haXe",svg:"SVG",textile:"Textile",groovy:"Groovy",liquid:"Liquid",Scala:"Scala"},theme:{clouds:"Clouds",clouds_midnight:"Clouds Midnight",cobalt:"Cobalt",crimson_editor:"Crimson Editor",dawn:"Dawn",eclipse:"Eclipse",idle_fingers:"Idle Fingers",kr_theme:"Kr Theme",merbivore:"Merbivore",merbivore_soft:"Merbivore Soft",mono_industrial:"Mono Industrial",monokai:"Monokai",pastel_on_dark:"Pastel On Dark",solarized_dark:"Solarized Dark",solarized_light:"Solarized Light",textmate:"Textmate",twilight:"Twilight",vibrant_ink:"Vibrant Ink"},showGutter:n,fontSize:{"10px":"10px","11px":"11px","12px":"12px","14px":"14px","16px":"16px"},wrap:{off:"Off",40:"40",80:"80",free:"Free"},keybindings:{ace:"ace",vim:"vim",emacs:"emacs"},showPrintMargin:n,useSoftTabs:n,showInvisibles:n},l=[];l.push("<table><tr><th>Setting</th><th>Value</th></tr>");for(var d in t.defaultOptions)l.push("<tr><td>",i[d],"</td>"),l.push("<td>"),o(l,d,c[d],r.getOption(d)),l.push("</td></tr>");l.push("</table>"),e.innerHTML=l.join("");for(var u=function(e){var t=e.currentTarget;r.setOption(t.title,t.value)},m=function(e){var t=e.currentTarget;r.setOption(t.title,t.checked)},p=e.getElementsByTagName("select"),g=0;g<p.length;g++)p[g].onchange=u;for(var b=e.getElementsByTagName("input"),g=0;g<b.length;g++)b[g].onclick=m;var h=document.createElement("input");h.type="button",h.value="Hide",s.addListener(h,"click",function(){r.setDisplaySettings(!1)}),e.appendChild(h),e.hideButton=h}var s=e("../lib/event"),l=e("../lib/useragent"),d=e("../lib/net"),u=e("../ace");e("../theme/textmate"),a.exports=t=u;var m=function(e,t,a){var r=e.style[a];return r||(r=window.getComputedStyle?window.getComputedStyle(e,"").getPropertyValue(a):e.currentStyle[a]),r&&"auto"!=r&&"intrinsic"!=r||(r=t.style[a]),r};t.transformTextarea=function(e,a){var d,m=o(e,function(){return d.getValue()});e.style.display="none",m.style.background="white";var p=document.createElement("div");r(p,{top:"0px",left:"0px",right:"0px",bottom:"0px",border:"1px solid gray",position:"absolute"}),m.appendChild(p);var g=document.createElement("div");r(g,{position:"absolute",right:"0px",bottom:"0px",background:"red",cursor:"nw-resize",borderStyle:"solid",borderWidth:"9px 8px 10px 9px",width:"2px",borderColor:"lightblue gray gray lightblue",zIndex:101});var b=document.createElement("div"),h={top:"0px",left:"20%",right:"0px",bottom:"0px",position:"absolute",padding:"5px",zIndex:100,color:"white",display:"none",overflow:"auto",fontSize:"14px",boxShadow:"-5px 2px 3px gray"};h.backgroundColor=l.isOldIE?"#333":"rgba(0, 0, 0, 0.6)",r(b,h),m.appendChild(b),a=a||t.defaultOptions;var f=u.edit(p);d=f.getSession(),d.setValue(e.value||e.innerHTML),f.focus(),m.appendChild(g),i(f,p,b,u,a,n),c(b,g,f);var v="";return s.addListener(g,"mousemove",function(e){var t=this.getBoundingClientRect(),a=e.clientX-t.left,r=e.clientY-t.top;a+r<(t.width+t.height)/2?(this.style.cursor="pointer",v="toggle"):(v="resize",this.style.cursor="nw-resize")}),s.addListener(g,"mousedown",function(e){if("toggle"==v)return void f.setDisplaySettings();m.style.zIndex=1e5;var t=m.getBoundingClientRect(),a=t.width+t.left-e.clientX,r=t.height+t.top-e.clientY;s.capture(g,function(e){m.style.width=e.clientX-t.left+a+"px",m.style.height=e.clientY-t.top+r+"px",f.resize()},function(){})}),f},t.defaultOptions={mode:"javascript",theme:"textmate",wrap:"off",fontSize:"12px",showGutter:"false",keybindings:"ace",showPrintMargin:"false",useSoftTabs:"true",showInvisibles:"false"}}),function(){ace.require(["ace/ext/textarea"],function(){})}();