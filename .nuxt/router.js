import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _39eff43f = () => import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */).then(m => m.default || m)
const _0abaed08 = () => import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */).then(m => m.default || m)
const _01eee4df = () => import('../pages/admin/main/index.vue' /* webpackChunkName: "pages/admin/main/index" */).then(m => m.default || m)
const _75b39464 = () => import('../pages/blog/detail/index.vue' /* webpackChunkName: "pages/blog/detail/index" */).then(m => m.default || m)
const _1987b722 = () => import('../pages/blog/components/head.vue' /* webpackChunkName: "pages/blog/components/head" */).then(m => m.default || m)
const _1df9158a = () => import('../pages/blog/components/blogBox.vue' /* webpackChunkName: "pages/blog/components/blogBox" */).then(m => m.default || m)
const _7b71d73a = () => import('../pages/blog/components/content.vue' /* webpackChunkName: "pages/blog/components/content" */).then(m => m.default || m)
const _8da20766 = () => import('../pages/blog/components/topBar.vue' /* webpackChunkName: "pages/blog/components/topBar" */).then(m => m.default || m)
const _453dc706 = () => import('../pages/blog/components/sideBar.vue' /* webpackChunkName: "pages/blog/components/sideBar" */).then(m => m.default || m)
const _6914b134 = () => import('../pages/blog/detail/components/detailHead.vue' /* webpackChunkName: "pages/blog/detail/components/detailHead" */).then(m => m.default || m)
const _4821a76a = () => import('../pages/blog/detail/components/atc.vue' /* webpackChunkName: "pages/blog/detail/components/atc" */).then(m => m.default || m)
const _f9cb0984 = () => import('../pages/admin/main/components/tool.vue' /* webpackChunkName: "pages/admin/main/components/tool" */).then(m => m.default || m)
const _e0546642 = () => import('../pages/admin/main/components/addTag.vue' /* webpackChunkName: "pages/admin/main/components/addTag" */).then(m => m.default || m)
const _1c411986 = () => import('../pages/admin/main/components/md.vue' /* webpackChunkName: "pages/admin/main/components/md" */).then(m => m.default || m)
const _2053532b = () => import('../pages/admin/main/components/tagGroup.vue' /* webpackChunkName: "pages/admin/main/components/tagGroup" */).then(m => m.default || m)
const _11e51568 = () => import('../pages/admin/main/components/uploadImg.vue' /* webpackChunkName: "pages/admin/main/components/uploadImg" */).then(m => m.default || m)
const _00eb34d6 = () => import('../pages/admin/main/components/mdPre.vue' /* webpackChunkName: "pages/admin/main/components/mdPre" */).then(m => m.default || m)
const _785816bf = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			component: _39eff43f,
			name: "admin"
		},
		{
			path: "/blog",
			component: _0abaed08,
			name: "blog"
		},
		{
			path: "/admin/main",
			component: _01eee4df,
			name: "admin-main"
		},
		{
			path: "/blog/detail",
			component: _75b39464,
			name: "blog-detail"
		},
		{
			path: "/blog/components/head",
			component: _1987b722,
			name: "blog-components-head"
		},
		{
			path: "/blog/components/blogBox",
			component: _1df9158a,
			name: "blog-components-blogBox"
		},
		{
			path: "/blog/components/content",
			component: _7b71d73a,
			name: "blog-components-content"
		},
		{
			path: "/blog/components/topBar",
			component: _8da20766,
			name: "blog-components-topBar"
		},
		{
			path: "/blog/components/sideBar",
			component: _453dc706,
			name: "blog-components-sideBar"
		},
		{
			path: "/blog/detail/components/detailHead",
			component: _6914b134,
			name: "blog-detail-components-detailHead"
		},
		{
			path: "/blog/detail/components/atc",
			component: _4821a76a,
			name: "blog-detail-components-atc"
		},
		{
			path: "/admin/main/components/tool",
			component: _f9cb0984,
			name: "admin-main-components-tool"
		},
		{
			path: "/admin/main/components/addTag",
			component: _e0546642,
			name: "admin-main-components-addTag"
		},
		{
			path: "/admin/main/components/md",
			component: _1c411986,
			name: "admin-main-components-md"
		},
		{
			path: "/admin/main/components/tagGroup",
			component: _2053532b,
			name: "admin-main-components-tagGroup"
		},
		{
			path: "/admin/main/components/uploadImg",
			component: _11e51568,
			name: "admin-main-components-uploadImg"
		},
		{
			path: "/admin/main/components/mdPre",
			component: _00eb34d6,
			name: "admin-main-components-mdPre"
		},
		{
			path: "/",
			component: _785816bf,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
