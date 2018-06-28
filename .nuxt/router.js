import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _50574424 = () => import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */).then(m => m.default || m)
const _7ca32c16 = () => import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages_blog_index" */).then(m => m.default || m)
const _130fec15 = () => import('..\\pages\\admin\\main\\index.vue' /* webpackChunkName: "pages_admin_main_index" */).then(m => m.default || m)
const _02a3e1a4 = () => import('..\\pages\\blog\\components\\bottom.vue' /* webpackChunkName: "pages_blog_components_bottom" */).then(m => m.default || m)
const _1bb80cd1 = () => import('..\\pages\\blog\\components\\essayBox.vue' /* webpackChunkName: "pages_blog_components_essayBox" */).then(m => m.default || m)
const _29af5f23 = () => import('..\\pages\\blog\\components\\head.vue' /* webpackChunkName: "pages_blog_components_head" */).then(m => m.default || m)
const _ca7d01de = () => import('..\\pages\\blog\\components\\topNav.vue' /* webpackChunkName: "pages_blog_components_topNav" */).then(m => m.default || m)
const _804175b2 = () => import('..\\pages\\blog\\components\\tag.vue' /* webpackChunkName: "pages_blog_components_tag" */).then(m => m.default || m)
const _965d096c = () => import('..\\pages\\blog\\components\\essay.vue' /* webpackChunkName: "pages_blog_components_essay" */).then(m => m.default || m)
const _5d1aec8c = () => import('..\\pages\\blog\\pages\\page\\index.vue' /* webpackChunkName: "pages_blog_pages_page_index" */).then(m => m.default || m)
const _0dabcbb0 = () => import('..\\pages\\admin\\main\\components\\tagGroup.vue' /* webpackChunkName: "pages_admin_main_components_tagGroup" */).then(m => m.default || m)
const _49227bfa = () => import('..\\pages\\admin\\main\\components\\md.vue' /* webpackChunkName: "pages_admin_main_components_md" */).then(m => m.default || m)
const _390f8def = () => import('..\\pages\\admin\\main\\components\\uploadImg.vue' /* webpackChunkName: "pages_admin_main_components_uploadImg" */).then(m => m.default || m)
const _15be48bb = () => import('..\\pages\\admin\\main\\components\\tool.vue' /* webpackChunkName: "pages_admin_main_components_tool" */).then(m => m.default || m)
const _08bc2f1c = () => import('..\\pages\\admin\\main\\components\\addTag.vue' /* webpackChunkName: "pages_admin_main_components_addTag" */).then(m => m.default || m)
const _7a7dd20e = () => import('..\\pages\\admin\\main\\components\\mdPre.vue' /* webpackChunkName: "pages_admin_main_components_mdPre" */).then(m => m.default || m)
const _7bc3618c = () => import('..\\pages\\blog\\pages\\page\\components\\moreEssay.vue' /* webpackChunkName: "pages_blog_pages_page_components_moreEssay" */).then(m => m.default || m)
const _b9519f96 = () => import('..\\pages\\blog\\pages\\page\\components\\readMoreBtn.vue' /* webpackChunkName: "pages_blog_pages_page_components_readMoreBtn" */).then(m => m.default || m)
const _68407c3f = () => import('..\\pages\\blog\\pages\\page\\components\\toolBar.vue' /* webpackChunkName: "pages_blog_pages_page_components_toolBar" */).then(m => m.default || m)
const _32dcb397 = () => import('..\\pages\\blog\\pages\\page\\components\\asideNav.vue' /* webpackChunkName: "pages_blog_pages_page_components_asideNav" */).then(m => m.default || m)
const _391aaab1 = () => import('..\\pages\\blog\\pages\\page\\components\\commentPanel.vue' /* webpackChunkName: "pages_blog_pages_page_components_commentPanel" */).then(m => m.default || m)
const _17a41c54 = () => import('..\\pages\\blog\\pages\\page\\components\\imgBox.vue' /* webpackChunkName: "pages_blog_pages_page_components_imgBox" */).then(m => m.default || m)
const _7258593e = () => import('..\\pages\\blog\\pages\\page\\components\\essay.vue' /* webpackChunkName: "pages_blog_pages_page_components_essay" */).then(m => m.default || m)
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
			path: "/blog/components/bottom",
			component: _02a3e1a4,
			name: "blog-components-bottom"
		},
		{
			path: "/blog/components/essayBox",
			component: _1bb80cd1,
			name: "blog-components-essayBox"
		},
		{
			path: "/blog/components/head",
			component: _29af5f23,
			name: "blog-components-head"
		},
		{
			path: "/blog/components/topNav",
			component: _ca7d01de,
			name: "blog-components-topNav"
		},
		{
			path: "/blog/components/tag",
			component: _804175b2,
			name: "blog-components-tag"
		},
		{
			path: "/blog/components/essay",
			component: _965d096c,
			name: "blog-components-essay"
		},
		{
			path: "/blog/pages/page",
			component: _5d1aec8c,
			name: "blog-pages-page"
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
			path: "/admin/main/components/uploadImg",
			component: _390f8def,
			name: "admin-main-components-uploadImg"
		},
		{
			path: "/admin/main/components/tool",
			component: _15be48bb,
			name: "admin-main-components-tool"
		},
		{
			path: "/admin/main/components/addTag",
			component: _08bc2f1c,
			name: "admin-main-components-addTag"
		},
		{
			path: "/admin/main/components/mdPre",
			component: _7a7dd20e,
			name: "admin-main-components-mdPre"
		},
		{
			path: "/blog/pages/page/components/moreEssay",
			component: _7bc3618c,
			name: "blog-pages-page-components-moreEssay"
		},
		{
			path: "/blog/pages/page/components/readMoreBtn",
			component: _b9519f96,
			name: "blog-pages-page-components-readMoreBtn"
		},
		{
			path: "/blog/pages/page/components/toolBar",
			component: _68407c3f,
			name: "blog-pages-page-components-toolBar"
		},
		{
			path: "/blog/pages/page/components/asideNav",
			component: _32dcb397,
			name: "blog-pages-page-components-asideNav"
		},
		{
			path: "/blog/pages/page/components/commentPanel",
			component: _391aaab1,
			name: "blog-pages-page-components-commentPanel"
		},
		{
			path: "/blog/pages/page/components/imgBox",
			component: _17a41c54,
			name: "blog-pages-page-components-imgBox"
		},
		{
			path: "/blog/pages/page/components/essay",
			component: _7258593e,
			name: "blog-pages-page-components-essay"
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
