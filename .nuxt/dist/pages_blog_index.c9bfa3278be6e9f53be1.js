webpackJsonp([2,5,6,7,18,19],{"08ut":function(t,e,a){var o=a("vTBn");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("FIqI")("328f72ff",o,!1,{sourceMap:!1})},"0uok":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("mi9e"),n=a("9DvR"),i=!1;var s=function(t){i||a("5e/N")},r=a("vSla")(o.a,n.a,!1,s,"data-v-079b4a00",null);r.options.__file="pages\\blog\\components\\topNav.vue",e.default=r.exports},"3Lyy":function(t,e,a){"use strict";var o=a("lC5x"),n=a.n(o),i=a("J0Oq"),s=a.n(i),r=a("3cXf"),l=a.n(r),c=a("YnbX"),p=a("f8r1");e.a={data:function(){return{allTags:[]}},props:{blogs:Array},components:{Essay:c.default},computed:{formatTag:function(){var t=this,e=JSON.parse(l()(this.blogs));return e.forEach(function(e){e.tagsObj=[];var a=e.tags.split(",");t.allTags.forEach(function(t){-1!==a.indexOf(t.id.toString())&&e.tagsObj.push(t)})}),e}},created:function(){this.getAllTag()},methods:{getAllTag:function(){var t=s()(n.a.mark(function t(){var e;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.b.getAllTags();case 2:(e=t.sent)&&(this.allTags=e);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}},"4uav":function(t,e,a){"use strict";var o=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"tag-box",style:{background:this.bgColor,color:this.color}},[this._v(this._s(this.text))])};o._withStripped=!0;var n={render:o,staticRenderFns:[]};e.a=n},"5B/v":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("3Lyy"),n=a("zJZZ"),i=!1;var s=function(t){i||a("Ubr2")},r=a("vSla")(o.a,n.a,!1,s,"data-v-8d6a5000",null);r.options.__file="pages\\blog\\components\\essayBox.vue",e.default=r.exports},"5e/N":function(t,e,a){var o=a("uun+");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("FIqI")("46f8acc2",o,!1,{sourceMap:!1})},"7j4K":function(t,e,a){var o=a("hKK0");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("FIqI")("0aa371b0",o,!1,{sourceMap:!1})},"7rbs":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("a",{attrs:{href:"/blog/pages/page?id="+t.blog.id}},[a("div",{staticClass:"img",style:"background: url("+t.blog.imgUrl+") center/cover;"})]),a("div",{staticClass:"content"},[a("header",{staticClass:"head"},[a("h3",[a("a",{attrs:{href:"/blog/pages/page"}},[t._v(t._s(t.blog.title))])])]),a("section",{staticClass:"desc"},[t._v(t._s(t.blog.remark))]),a("footer",{staticClass:"foot"},[a("span",{staticClass:"date"},[t._v(t._s(t.blog.updateTime))]),a("div",{staticClass:"tag-group"},t._l(t.blog.tagsObj,function(e){return a("el-tag",{key:e.name,style:{margin:"0 4px",cursor:"pointer",color:e.color,backgroundColor:e.bgColor}},[t._v(t._s(e.name))])}))])])])};o._withStripped=!0;var n={render:o,staticRenderFns:[]};e.a=n},"9DvR":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"top-nav"},[t.collapse?a("div",{staticClass:"collapse-btn",on:{click:function(e){t.showList=!t.showList}}},[a("hr"),a("hr"),a("hr"),t.showList?a("ul",[a("li",{class:"tech"===t.type?"activeLi":""},[a("nuxt-link",{attrs:{to:"/blog?type=tech"}},[t._v("Technology")])],1),a("li",{class:"finance"===t.type?"activeLi":""},[a("nuxt-link",{attrs:{to:"/blog?type=finance"}},[t._v("Finance")])],1),a("li",{class:"literature"===t.type?"activeLi":""},[a("nuxt-link",{attrs:{to:"/blog?type=thinking"}},[t._v("Thinking")])],1)]):t._e()]):a("ul",[a("li",{class:"tech"===t.type?"active":""},[a("nuxt-link",{attrs:{to:"/blog?type=tech"}},[t._v("Technology")])],1),a("li",{class:"finance"===t.type?"active":""},[a("nuxt-link",{attrs:{to:"/blog?type=finance"}},[t._v("Finance")])],1),a("li",{class:"literature"===t.type?"active":""},[a("nuxt-link",{attrs:{to:"/blog?type=thinking"}},[t._v("Thinking")])],1)])])};o._withStripped=!0;var n={render:o,staticRenderFns:[]};e.a=n},F3pn:function(t,e,a){var o=a("b2jZ");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("FIqI")("a7e3a6d6",o,!1,{sourceMap:!1})},GQGD:function(t,e,a){"use strict";var o=function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header"},[e("Logo",{staticClass:"logo"}),e("TopNav",{attrs:{type:this.type}}),e("span",{staticClass:"title"},[this._v(this._s(this.getBgText))]),e("div",{staticClass:"bg-image-box",style:{transform:"translateY("+this.headMove+")"}},[e("img",{staticClass:"bg-image",attrs:{src:this.getBgImg+".jpg",alt:"bg-image"}})])],1)};o._withStripped=!0;var n={render:o,staticRenderFns:[]};e.a=n},JFl0:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("O6IO"),n=a("KFYe"),i=!1;var s=function(t){i||a("08ut")},r=a("vSla")(o.a,n.a,!1,s,"data-v-50cd8abe",null);r.options.__file="pages\\blog\\index.vue",e.default=r.exports},KFYe:function(t,e,a){"use strict";var o=function(){var t=this.$createElement,e=this._self._c||t;return e("article",[e("Head",{attrs:{type:this.type}}),e("EssayBox",{attrs:{blogs:this.blogs}})],1)};o._withStripped=!0;var n={render:o,staticRenderFns:[]};e.a=n},KbEl:function(t,e,a){(t.exports=a("UTlt")(!1)).push([t.i,".content[data-v-8d6a5000]{width:100%;padding:0 10px 50px;-webkit-box-sizing:border-box;box-sizing:border-box;background:#f5f6f7}.essay-box[data-v-8d6a5000]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap}",""])},O6IO:function(t,e,a){"use strict";var o=a("lC5x"),n=a.n(o),i=a("J0Oq"),s=a.n(i),r=a("YJEe"),l=a("5B/v"),c=a("f8r1");e.a={asyncData:function(){var t=s()(n.a.mark(function t(e){var a,o=e.query;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return[],t.next=3,c.a.getBlogs();case 3:return a=t.sent,t.abrupt("return",{type:o.type||"",blogs:a});case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),data:function(){return{type:"",blogs:[]}},components:{Head:r.default,EssayBox:l.default},beforeRouteUpdate:function(t,e,a){this.type=t.query.type,a()}}},PETJ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("mBuu"),n=a("4uav"),i=!1;var s=function(t){i||a("7j4K")},r=a("vSla")(o.a,n.a,!1,s,"data-v-acd00ed0",null);r.options.__file="pages\\blog\\components\\tag.vue",e.default=r.exports},QRK9:function(t,e,a){"use strict";var o=a("0uok");e.a={data:function(){return{headMove:0}},props:{type:{type:String,default:""}},components:{TopNav:o.default},computed:{getBgText:function(){switch(this.type){case"tech":return"TECHNOLOGY";case"finance":return"FINANCE";case"thinking":return"THINKING";default:return"BLOG"}},getBgImg:function(){switch(this.type){case"tech":return"bg2";case"finance":return"bg3";case"thinking":return"bg4";default:return"bg1"}}},mounted:function(){window.addEventListener("scroll",this.bgImgScroll,!1)},destroyed:function(){window.removeEventListener("scroll",this.bgImgScroll,!1)},methods:{bgImgScroll:function(){this.headMove=document.documentElement.scrollTop+"px"}}}},Ubr2:function(t,e,a){var o=a("KbEl");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("FIqI")("5fb0156d",o,!1,{sourceMap:!1})},Xhpp:function(t,e,a){(t.exports=a("UTlt")(!1)).push([t.i,".box .content .head h3[data-v-132b167b]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.box[data-v-132b167b]{width:370px;height:400px;display:-webkit-box;display:-ms-flexbox;display:flex;border-radius:4px 4px 0 0;margin:10px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:hidden;background:#fff}.box .img[data-v-132b167b]{width:100%;height:180px;cursor:pointer}.box .content[data-v-132b167b]{border:1px solid #f4f4f4;border-top:none;height:220px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 10px}.box .content .head[data-v-132b167b]{height:40px}.box .content .head h3[data-v-132b167b]{font-size:19.2px;font-size:1.2rem;width:100%}.box .content .head h3 a[data-v-132b167b]{color:#000}.box .content .desc[data-v-132b167b]{font-size:13px;color:#8a8a8a;line-height:24px;height:125px}.box .content .foot[data-v-132b167b]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.box .content .foot .date[data-v-132b167b]{font-size:14px;line-height:28px}.box .content .foot .tag-group[data-v-132b167b]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}@media screen and (max-width:1000px){.box[data-v-132b167b]{width:80%}}",""])},Y6Or:function(t,e,a){var o=a("Xhpp");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("FIqI")("042d427b",o,!1,{sourceMap:!1})},YJEe:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("QRK9"),n=a("GQGD"),i=!1;var s=function(t){i||a("F3pn")},r=a("vSla")(o.a,n.a,!1,s,"data-v-770d19d2",null);r.options.__file="pages\\blog\\components\\head.vue",e.default=r.exports},YnbX:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("hJAH"),n=a("7rbs"),i=!1;var s=function(t){i||a("Y6Or")},r=a("vSla")(o.a,n.a,!1,s,"data-v-132b167b",null);r.options.__file="pages\\blog\\components\\essay.vue",e.default=r.exports},b2jZ:function(t,e,a){(t.exports=a("UTlt")(!1)).push([t.i,'.header[data-v-770d19d2]{position:relative}.header .logo[data-v-770d19d2]{position:absolute;top:20px;left:20px;z-index:1}.header .title[data-v-770d19d2]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:#fff;font-size:70px}.header .bg-image-box[data-v-770d19d2]{position:relative;overflow:hidden;z-index:-1}.header .bg-image-box .bg-image[data-v-770d19d2]{width:100%}.header .bg-image-box[data-v-770d19d2]:before{content:"";position:absolute;display:block;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,.35)}',""])},hJAH:function(t,e,a){"use strict";var o=a("PETJ");e.a={data:function(){return{tagArr:[]}},props:{blog:Object},updated:function(){console.log(this.blog)},components:{Tag:o.default}}},hKK0:function(t,e,a){(t.exports=a("UTlt")(!1)).push([t.i,".tag-box[data-v-acd00ed0]{cursor:pointer;font-size:16px;font-size:1rem;display:inline-block;padding:6px;margin:0 2px;border-radius:4px}",""])},mBuu:function(t,e,a){"use strict";e.a={props:{text:String,bgColor:String,color:String}}},mi9e:function(t,e,a){"use strict";e.a={data:function(){return{showList:!1,collapse:!1}},props:{type:{type:String,default:""}},mounted:function(){this.collapseNav(),window.addEventListener("resize",this.collapseNav,!1)},destroyed:function(){window.removeEventListener("resize",this.collapseNav,!1)},methods:{collapseNav:function(){var t=document.documentElement.clientWidth;this.collapse=t<800}}}},"uun+":function(t,e,a){(t.exports=a("UTlt")(!1)).push([t.i,".top-nav[data-v-079b4a00]{position:absolute;right:20px;top:20px}.top-nav li[data-v-079b4a00]{float:left;margin:0 10px;padding-bottom:8px}.top-nav li a[data-v-079b4a00]{color:#eee;font-size:18px}.top-nav .active[data-v-079b4a00]{border-bottom:1px solid #fff}.collapse-btn[data-v-079b4a00]{position:relative;cursor:pointer;width:30px;height:30px}.collapse-btn hr[data-v-079b4a00]{line-height:15px}.collapse-btn ul[data-v-079b4a00]{position:absolute;background:#333;right:0;z-index:2}.collapse-btn ul li[data-v-079b4a00]{padding:10px;width:120px;text-align:right;border-bottom:1px solid #aaa;margin:0}.collapse-btn ul li a[data-v-079b4a00]{color:#fff;font-size:16px}.collapse-btn ul li[data-v-079b4a00]:hover{background:#fff}.collapse-btn ul li:hover a[data-v-079b4a00]{color:#333}.activeLi a[data-v-079b4a00]{color:gold!important}",""])},vTBn:function(t,e,a){(t.exports=a("UTlt")(!1)).push([t.i,"",""])},zJZZ:function(t,e,a){"use strict";var o=function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"content"},[e("div",{staticClass:"essay-box"},this._l(this.formatTag,function(t){return e("Essay",{key:t.id,attrs:{blog:t}})}))])};o._withStripped=!0;var n={render:o,staticRenderFns:[]};e.a=n}});