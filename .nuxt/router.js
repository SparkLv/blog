import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _7ca32c16 = () => import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages_blog_index" */).then(m => m.default || m)
const _5d1aec8c = () => import('..\\pages\\blog\\pages\\page\\index.vue' /* webpackChunkName: "pages_blog_pages_page_index" */).then(m => m.default || m)
const _1bb80cd1 = () => import('..\\pages\\blog\\components\\essayBox.vue' /* webpackChunkName: "pages_blog_components_essayBox" */).then(m => m.default || m)
const _ca7d01de = () => import('..\\pages\\blog\\components\\topNav.vue' /* webpackChunkName: "pages_blog_components_topNav" */).then(m => m.default || m)
const _29af5f23 = () => import('..\\pages\\blog\\components\\head.vue' /* webpackChunkName: "pages_blog_components_head" */).then(m => m.default || m)
const _965d096c = () => import('..\\pages\\blog\\components\\essay.vue' /* webpackChunkName: "pages_blog_components_essay" */).then(m => m.default || m)
const _804175b2 = () => import('..\\pages\\blog\\components\\tag.vue' /* webpackChunkName: "pages_blog_components_tag" */).then(m => m.default || m)
const _02a3e1a4 = () => import('..\\pages\\blog\\components\\bottom.vue' /* webpackChunkName: "pages_blog_components_bottom" */).then(m => m.default || m)
const _68407c3f = () => import('..\\pages\\blog\\pages\\page\\components\\toolBar.vue' /* webpackChunkName: "pages_blog_pages_page_components_toolBar" */).then(m => m.default || m)
const _7258593e = () => import('..\\pages\\blog\\pages\\page\\components\\essay.vue' /* webpackChunkName: "pages_blog_pages_page_components_essay" */).then(m => m.default || m)
const _32dcb397 = () => import('..\\pages\\blog\\pages\\page\\components\\asideNav.vue' /* webpackChunkName: "pages_blog_pages_page_components_asideNav" */).then(m => m.default || m)
const _391aaab1 = () => import('..\\pages\\blog\\pages\\page\\components\\commentPanel.vue' /* webpackChunkName: "pages_blog_pages_page_components_commentPanel" */).then(m => m.default || m)
const _17a41c54 = () => import('..\\pages\\blog\\pages\\page\\components\\imgBox.vue' /* webpackChunkName: "pages_blog_pages_page_components_imgBox" */).then(m => m.default || m)
const _b9519f96 = () => import('..\\pages\\blog\\pages\\page\\components\\readMoreBtn.vue' /* webpackChunkName: "pages_blog_pages_page_components_readMoreBtn" */).then(m => m.default || m)
const _7bc3618c = () => import('..\\pages\\blog\\pages\\page\\components\\moreEssay.vue' /* webpackChunkName: "pages_blog_pages_page_components_moreEssay" */).then(m => m.default || m)
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
			path: "/blog",
			component: _7ca32c16,
			name: "blog"
		},
		{
			path: "/blog/pages/page",
			component: _5d1aec8c,
			name: "blog-pages-page"
		},
		{
			path: "/blog/components/essayBox",
			component: _1bb80cd1,
			name: "blog-components-essayBox"
		},
		{
			path: "/blog/components/topNav",
			component: _ca7d01de,
			name: "blog-components-topNav"
		},
		{
			path: "/blog/components/head",
			component: _29af5f23,
			name: "blog-components-head"
		},
		{
			path: "/blog/components/essay",
			component: _965d096c,
			name: "blog-components-essay"
		},
		{
			path: "/blog/components/tag",
			component: _804175b2,
			name: "blog-components-tag"
		},
		{
			path: "/blog/components/bottom",
			component: _02a3e1a4,
			name: "blog-components-bottom"
		},
		{
			path: "/blog/pages/page/components/toolBar",
			component: _68407c3f,
			name: "blog-pages-page-components-toolBar"
		},
		{
			path: "/blog/pages/page/components/essay",
			component: _7258593e,
			name: "blog-pages-page-components-essay"
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
			path: "/blog/pages/page/components/readMoreBtn",
			component: _b9519f96,
			name: "blog-pages-page-components-readMoreBtn"
		},
		{
			path: "/blog/pages/page/components/moreEssay",
			component: _7bc3618c,
			name: "blog-pages-page-components-moreEssay"
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