import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _39eff43f = () => import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */).then(m => m.default || m)
const _0abaed08 = () => import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */).then(m => m.default || m)
const _01eee4df = () => import('../pages/admin/main/index.vue' /* webpackChunkName: "pages/admin/main/index" */).then(m => m.default || m)
const _cfc29d0c = () => import('../pages/blog/components/bottom.vue' /* webpackChunkName: "pages/blog/components/bottom" */).then(m => m.default || m)
const _1b894c1d = () => import('../pages/blog/components/essayBox.vue' /* webpackChunkName: "pages/blog/components/essayBox" */).then(m => m.default || m)
const _1987b722 = () => import('../pages/blog/components/head.vue' /* webpackChunkName: "pages/blog/components/head" */).then(m => m.default || m)
const _3432215d = () => import('../pages/blog/components/topNav.vue' /* webpackChunkName: "pages/blog/components/topNav" */).then(m => m.default || m)
const _423ea65b = () => import('../pages/blog/components/tag.vue' /* webpackChunkName: "pages/blog/components/tag" */).then(m => m.default || m)
const _1cdd5f7e = () => import('../pages/blog/components/essay.vue' /* webpackChunkName: "pages/blog/components/essay" */).then(m => m.default || m)
const _3da13b37 = () => import('../pages/blog/pages/page/index.vue' /* webpackChunkName: "pages/blog/pages/page/index" */).then(m => m.default || m)
const _2053532b = () => import('../pages/admin/main/components/tagGroup.vue' /* webpackChunkName: "pages/admin/main/components/tagGroup" */).then(m => m.default || m)
const _11e51568 = () => import('../pages/admin/main/components/uploadImg.vue' /* webpackChunkName: "pages/admin/main/components/uploadImg" */).then(m => m.default || m)
const _f9cb0984 = () => import('../pages/admin/main/components/tool.vue' /* webpackChunkName: "pages/admin/main/components/tool" */).then(m => m.default || m)
const _00eb34d6 = () => import('../pages/admin/main/components/mdPre.vue' /* webpackChunkName: "pages/admin/main/components/mdPre" */).then(m => m.default || m)
const _1c411986 = () => import('../pages/admin/main/components/md.vue' /* webpackChunkName: "pages/admin/main/components/md" */).then(m => m.default || m)
const _e0546642 = () => import('../pages/admin/main/components/addTag.vue' /* webpackChunkName: "pages/admin/main/components/addTag" */).then(m => m.default || m)
const _34a46843 = () => import('../pages/blog/pages/page/components/readMoreBtn.vue' /* webpackChunkName: "pages/blog/pages/page/components/readMoreBtn" */).then(m => m.default || m)
const _bfd02966 = () => import('../pages/blog/pages/page/components/toolBar.vue' /* webpackChunkName: "pages/blog/pages/page/components/toolBar" */).then(m => m.default || m)
const _42bb9386 = () => import('../pages/blog/pages/page/components/imgBox.vue' /* webpackChunkName: "pages/blog/pages/page/components/imgBox" */).then(m => m.default || m)
const _ceab1b2c = () => import('../pages/blog/pages/page/components/commentBox.vue' /* webpackChunkName: "pages/blog/pages/page/components/commentBox" */).then(m => m.default || m)
const _6f90a422 = () => import('../pages/blog/pages/page/components/essay.vue' /* webpackChunkName: "pages/blog/pages/page/components/essay" */).then(m => m.default || m)
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
			path: "/blog/components/bottom",
			component: _cfc29d0c,
			name: "blog-components-bottom"
		},
		{
			path: "/blog/components/essayBox",
			component: _1b894c1d,
			name: "blog-components-essayBox"
		},
		{
			path: "/blog/components/head",
			component: _1987b722,
			name: "blog-components-head"
		},
		{
			path: "/blog/components/topNav",
			component: _3432215d,
			name: "blog-components-topNav"
		},
		{
			path: "/blog/components/tag",
			component: _423ea65b,
			name: "blog-components-tag"
		},
		{
			path: "/blog/components/essay",
			component: _1cdd5f7e,
			name: "blog-components-essay"
		},
		{
			path: "/blog/pages/page",
			component: _3da13b37,
			name: "blog-pages-page"
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
			path: "/admin/main/components/tool",
			component: _f9cb0984,
			name: "admin-main-components-tool"
		},
		{
			path: "/admin/main/components/mdPre",
			component: _00eb34d6,
			name: "admin-main-components-mdPre"
		},
		{
			path: "/admin/main/components/md",
			component: _1c411986,
			name: "admin-main-components-md"
		},
		{
			path: "/admin/main/components/addTag",
			component: _e0546642,
			name: "admin-main-components-addTag"
		},
		{
			path: "/blog/pages/page/components/readMoreBtn",
			component: _34a46843,
			name: "blog-pages-page-components-readMoreBtn"
		},
		{
			path: "/blog/pages/page/components/toolBar",
			component: _bfd02966,
			name: "blog-pages-page-components-toolBar"
		},
		{
			path: "/blog/pages/page/components/imgBox",
			component: _42bb9386,
			name: "blog-pages-page-components-imgBox"
		},
		{
			path: "/blog/pages/page/components/commentBox",
			component: _ceab1b2c,
			name: "blog-pages-page-components-commentBox"
		},
		{
			path: "/blog/pages/page/components/essay",
			component: _6f90a422,
			name: "blog-pages-page-components-essay"
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
