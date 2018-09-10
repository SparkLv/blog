import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _18cc5ad4 = () => import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages_blog_index" */).then(m => m.default || m)
const _647488ef = () => import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */).then(m => m.default || m)
const _59a4b808 = () => import('..\\pages\\components\\atom.js' /* webpackChunkName: "pages_components_atom" */).then(m => m.default || m)
const _330b7063 = () => import('..\\pages\\blog\\detail\\index.vue' /* webpackChunkName: "pages_blog_detail_index" */).then(m => m.default || m)
const _eeebdb54 = () => import('..\\pages\\admin\\main\\index.vue' /* webpackChunkName: "pages_admin_main_index" */).then(m => m.default || m)
const _7ba75940 = () => import('..\\pages\\components\\head2.vue' /* webpackChunkName: "pages_components_head2" */).then(m => m.default || m)
const _7bed4ba1 = () => import('..\\pages\\components\\introBox.vue' /* webpackChunkName: "pages_components_introBox" */).then(m => m.default || m)
const _00e9aea5 = () => import('..\\pages\\blog\\components\\content.vue' /* webpackChunkName: "pages_blog_components_content" */).then(m => m.default || m)
const _04aa2cf6 = () => import('..\\pages\\components\\ani\\mode3.vue' /* webpackChunkName: "pages_components_ani_mode3" */).then(m => m.default || m)
const _048dfdf4 = () => import('..\\pages\\components\\ani\\mode1.vue' /* webpackChunkName: "pages_components_ani_mode1" */).then(m => m.default || m)
const _3bdee47c = () => import('..\\pages\\blog\\components\\headCan.vue' /* webpackChunkName: "pages_blog_components_headCan" */).then(m => m.default || m)
const _b91e2616 = () => import('..\\pages\\blog\\components\\blogBox.vue' /* webpackChunkName: "pages_blog_components_blogBox" */).then(m => m.default || m)
const _04b84477 = () => import('..\\pages\\components\\ani\\mode4.vue' /* webpackChunkName: "pages_components_ani_mode4" */).then(m => m.default || m)
const _6d3a7ce4 = () => import('..\\pages\\blog\\components\\head.vue' /* webpackChunkName: "pages_blog_components_head" */).then(m => m.default || m)
const _62d8f3e8 = () => import('..\\pages\\blog\\components\\sideBar.vue' /* webpackChunkName: "pages_blog_components_sideBar" */).then(m => m.default || m)
const _a60de8fc = () => import('..\\pages\\blog\\components\\topBar.vue' /* webpackChunkName: "pages_blog_components_topBar" */).then(m => m.default || m)
const _049c1575 = () => import('..\\pages\\components\\ani\\mode2.vue' /* webpackChunkName: "pages_components_ani_mode2" */).then(m => m.default || m)
const _4b2f769e = () => import('..\\pages\\blog\\components\\blogBoxNav.vue' /* webpackChunkName: "pages_blog_components_blogBoxNav" */).then(m => m.default || m)
const _fa0e1cb4 = () => import('..\\pages\\blog\\detail\\components\\detailHead.vue' /* webpackChunkName: "pages_blog_detail_components_detailHead" */).then(m => m.default || m)
const _6a8eea0b = () => import('..\\pages\\blog\\detail\\components\\atc.vue' /* webpackChunkName: "pages_blog_detail_components_atc" */).then(m => m.default || m)
const _2c9f1230 = () => import('..\\pages\\admin\\main\\components\\uploadImg.vue' /* webpackChunkName: "pages_admin_main_components_uploadImg" */).then(m => m.default || m)
const _0ebffa7b = () => import('..\\pages\\admin\\main\\components\\addTag.vue' /* webpackChunkName: "pages_admin_main_components_addTag" */).then(m => m.default || m)
const _baa9404c = () => import('..\\pages\\admin\\main\\components\\tool.vue' /* webpackChunkName: "pages_admin_main_components_tool" */).then(m => m.default || m)
const _5912388c = () => import('..\\pages\\admin\\main\\components\\mdPre.vue' /* webpackChunkName: "pages_admin_main_components_mdPre" */).then(m => m.default || m)
const _4a58ced9 = () => import('..\\pages\\admin\\main\\components\\md.vue' /* webpackChunkName: "pages_admin_main_components_md" */).then(m => m.default || m)
const _e52eec72 = () => import('..\\pages\\admin\\main\\components\\tagGroup.vue' /* webpackChunkName: "pages_admin_main_components_tagGroup" */).then(m => m.default || m)
const _f278964c = () => import('..\\pages\\blog\\detail\\components\\comment.vue' /* webpackChunkName: "pages_blog_detail_components_comment" */).then(m => m.default || m)
const _06bae6ec = () => import('..\\pages\\admin\\main\\components\\tools\\upload.vue' /* webpackChunkName: "pages_admin_main_components_tools_upload" */).then(m => m.default || m)
const _7b0ee836 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/blog",
			component: _18cc5ad4,
			name: "blog"
		},
		{
			path: "/admin",
			component: _647488ef,
			name: "admin"
		},
		{
			path: "/components/atom",
			component: _59a4b808,
			name: "components-atom"
		},
		{
			path: "/blog/detail",
			component: _330b7063,
			name: "blog-detail"
		},
		{
			path: "/admin/main",
			component: _eeebdb54,
			name: "admin-main"
		},
		{
			path: "/components/head2",
			component: _7ba75940,
			name: "components-head2"
		},
		{
			path: "/components/introBox",
			component: _7bed4ba1,
			name: "components-introBox"
		},
		{
			path: "/blog/components/content",
			component: _00e9aea5,
			name: "blog-components-content"
		},
		{
			path: "/components/ani/mode3",
			component: _04aa2cf6,
			name: "components-ani-mode3"
		},
		{
			path: "/components/ani/mode1",
			component: _048dfdf4,
			name: "components-ani-mode1"
		},
		{
			path: "/blog/components/headCan",
			component: _3bdee47c,
			name: "blog-components-headCan"
		},
		{
			path: "/blog/components/blogBox",
			component: _b91e2616,
			name: "blog-components-blogBox"
		},
		{
			path: "/components/ani/mode4",
			component: _04b84477,
			name: "components-ani-mode4"
		},
		{
			path: "/blog/components/head",
			component: _6d3a7ce4,
			name: "blog-components-head"
		},
		{
			path: "/blog/components/sideBar",
			component: _62d8f3e8,
			name: "blog-components-sideBar"
		},
		{
			path: "/blog/components/topBar",
			component: _a60de8fc,
			name: "blog-components-topBar"
		},
		{
			path: "/components/ani/mode2",
			component: _049c1575,
			name: "components-ani-mode2"
		},
		{
			path: "/blog/components/blogBoxNav",
			component: _4b2f769e,
			name: "blog-components-blogBoxNav"
		},
		{
			path: "/blog/detail/components/detailHead",
			component: _fa0e1cb4,
			name: "blog-detail-components-detailHead"
		},
		{
			path: "/blog/detail/components/atc",
			component: _6a8eea0b,
			name: "blog-detail-components-atc"
		},
		{
			path: "/admin/main/components/uploadImg",
			component: _2c9f1230,
			name: "admin-main-components-uploadImg"
		},
		{
			path: "/admin/main/components/addTag",
			component: _0ebffa7b,
			name: "admin-main-components-addTag"
		},
		{
			path: "/admin/main/components/tool",
			component: _baa9404c,
			name: "admin-main-components-tool"
		},
		{
			path: "/admin/main/components/mdPre",
			component: _5912388c,
			name: "admin-main-components-mdPre"
		},
		{
			path: "/admin/main/components/md",
			component: _4a58ced9,
			name: "admin-main-components-md"
		},
		{
			path: "/admin/main/components/tagGroup",
			component: _e52eec72,
			name: "admin-main-components-tagGroup"
		},
		{
			path: "/blog/detail/components/comment",
			component: _f278964c,
			name: "blog-detail-components-comment"
		},
		{
			path: "/admin/main/components/tools/upload",
			component: _06bae6ec,
			name: "admin-main-components-tools-upload"
		},
		{
			path: "/",
			component: _7b0ee836,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
