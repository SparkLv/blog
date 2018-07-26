import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _50574424 = () => import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */).then(m => m.default || m)
const _7ca32c16 = () => import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages_blog_index" */).then(m => m.default || m)
const _130fec15 = () => import('..\\pages\\admin\\main\\index.vue' /* webpackChunkName: "pages_admin_main_index" */).then(m => m.default || m)
const _0d7e62f8 = () => import('..\\pages\\blog\\detail\\index.vue' /* webpackChunkName: "pages_blog_detail_index" */).then(m => m.default || m)
const _29af5f23 = () => import('..\\pages\\blog\\components\\head.vue' /* webpackChunkName: "pages_blog_components_head" */).then(m => m.default || m)
const _48bd7549 = () => import('..\\pages\\blog\\components\\sideBar.vue' /* webpackChunkName: "pages_blog_components_sideBar" */).then(m => m.default || m)
const _1fbe5a01 = () => import('..\\pages\\blog\\components\\topBar.vue' /* webpackChunkName: "pages_blog_components_topBar" */).then(m => m.default || m)
const _ed552354 = () => import('..\\pages\\blog\\components\\blogBox.vue' /* webpackChunkName: "pages_blog_components_blogBox" */).then(m => m.default || m)
const _02a3e1a4 = () => import('..\\pages\\blog\\components\\bottom.vue' /* webpackChunkName: "pages_blog_components_bottom" */).then(m => m.default || m)
const _32639ff4 = () => import('..\\pages\\blog\\components\\content.vue' /* webpackChunkName: "pages_blog_components_content" */).then(m => m.default || m)
const _390f8def = () => import('..\\pages\\admin\\main\\components\\uploadImg.vue' /* webpackChunkName: "pages_admin_main_components_uploadImg" */).then(m => m.default || m)
const _353979a5 = () => import('..\\pages\\blog\\detail\\components\\detailHead.vue' /* webpackChunkName: "pages_blog_detail_components_detailHead" */).then(m => m.default || m)
const _44bc5a28 = () => import('..\\pages\\blog\\detail\\components\\atc.vue' /* webpackChunkName: "pages_blog_detail_components_atc" */).then(m => m.default || m)
const _0dabcbb0 = () => import('..\\pages\\admin\\main\\components\\tagGroup.vue' /* webpackChunkName: "pages_admin_main_components_tagGroup" */).then(m => m.default || m)
const _49227bfa = () => import('..\\pages\\admin\\main\\components\\md.vue' /* webpackChunkName: "pages_admin_main_components_md" */).then(m => m.default || m)
const _08bc2f1c = () => import('..\\pages\\admin\\main\\components\\addTag.vue' /* webpackChunkName: "pages_admin_main_components_addTag" */).then(m => m.default || m)
const _15be48bb = () => import('..\\pages\\admin\\main\\components\\tool.vue' /* webpackChunkName: "pages_admin_main_components_tool" */).then(m => m.default || m)
const _7a7dd20e = () => import('..\\pages\\admin\\main\\components\\mdPre.vue' /* webpackChunkName: "pages_admin_main_components_mdPre" */).then(m => m.default || m)
const _5d35842d = () => import('..\\pages\\blog\\detail\\components\\readMoreBtn.vue' /* webpackChunkName: "pages_blog_detail_components_readMoreBtn" */).then(m => m.default || m)
const _44978c37 = () => import('..\\pages\\blog\\detail\\components\\toolBar.vue' /* webpackChunkName: "pages_blog_detail_components_toolBar" */).then(m => m.default || m)
const _3def2417 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



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
			path: "/admin",
			component: _50574424,
			name: "admin"
		},
		{
			path: "/blog",
			component: _7ca32c16,
			name: "blog"
		},
		{
			path: "/admin/main",
			component: _130fec15,
			name: "admin-main"
		},
		{
			path: "/blog/detail",
			component: _0d7e62f8,
			name: "blog-detail"
		},
		{
			path: "/blog/components/head",
			component: _29af5f23,
			name: "blog-components-head"
		},
		{
			path: "/blog/components/sideBar",
			component: _48bd7549,
			name: "blog-components-sideBar"
		},
		{
			path: "/blog/components/topBar",
			component: _1fbe5a01,
			name: "blog-components-topBar"
		},
		{
			path: "/blog/components/blogBox",
			component: _ed552354,
			name: "blog-components-blogBox"
		},
		{
			path: "/blog/components/bottom",
			component: _02a3e1a4,
			name: "blog-components-bottom"
		},
		{
			path: "/blog/components/content",
			component: _32639ff4,
			name: "blog-components-content"
		},
		{
			path: "/admin/main/components/uploadImg",
			component: _390f8def,
			name: "admin-main-components-uploadImg"
		},
		{
			path: "/blog/detail/components/detailHead",
			component: _353979a5,
			name: "blog-detail-components-detailHead"
		},
		{
			path: "/blog/detail/components/atc",
			component: _44bc5a28,
			name: "blog-detail-components-atc"
		},
		{
			path: "/admin/main/components/tagGroup",
			component: _0dabcbb0,
			name: "admin-main-components-tagGroup"
		},
		{
			path: "/admin/main/components/md",
			component: _49227bfa,
			name: "admin-main-components-md"
		},
		{
			path: "/admin/main/components/addTag",
			component: _08bc2f1c,
			name: "admin-main-components-addTag"
		},
		{
			path: "/admin/main/components/tool",
			component: _15be48bb,
			name: "admin-main-components-tool"
		},
		{
			path: "/admin/main/components/mdPre",
			component: _7a7dd20e,
			name: "admin-main-components-mdPre"
		},
		{
			path: "/blog/detail/components/readMoreBtn",
			component: _5d35842d,
			name: "blog-detail-components-readMoreBtn"
		},
		{
			path: "/blog/detail/components/toolBar",
			component: _44978c37,
			name: "blog-detail-components-toolBar"
		},
		{
			path: "/",
			component: _3def2417,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
