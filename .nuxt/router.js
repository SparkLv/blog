import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _50574424 = () => import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */).then(m => m.default || m)
const _7ca32c16 = () => import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages_blog_index" */).then(m => m.default || m)
const _4c6c0f74 = () => import('..\\pages\\blog\\page\\index.vue' /* webpackChunkName: "pages_blog_page_index" */).then(m => m.default || m)
const _130fec15 = () => import('..\\pages\\admin\\main\\index.vue' /* webpackChunkName: "pages_admin_main_index" */).then(m => m.default || m)
const _0c542e9f = () => import('..\\pages\\blog\\components\\head2.vue' /* webpackChunkName: "pages_blog_components_head2" */).then(m => m.default || m)
const _1fbe5a01 = () => import('..\\pages\\blog\\components\\topBar.vue' /* webpackChunkName: "pages_blog_components_topBar" */).then(m => m.default || m)
const _29af5f23 = () => import('..\\pages\\blog\\components\\head.vue' /* webpackChunkName: "pages_blog_components_head" */).then(m => m.default || m)
const _965d096c = () => import('..\\pages\\blog\\components\\essay.vue' /* webpackChunkName: "pages_blog_components_essay" */).then(m => m.default || m)
const _1bb80cd1 = () => import('..\\pages\\blog\\components\\essayBox.vue' /* webpackChunkName: "pages_blog_components_essayBox" */).then(m => m.default || m)
const _804175b2 = () => import('..\\pages\\blog\\components\\tag.vue' /* webpackChunkName: "pages_blog_components_tag" */).then(m => m.default || m)
const _02a3e1a4 = () => import('..\\pages\\blog\\components\\bottom.vue' /* webpackChunkName: "pages_blog_components_bottom" */).then(m => m.default || m)
const _1bc29898 = () => import('..\\pages\\blog\\components\\ani\\mode4.vue' /* webpackChunkName: "pages_blog_components_ani_mode4" */).then(m => m.default || m)
const _390f8def = () => import('..\\pages\\admin\\main\\components\\uploadImg.vue' /* webpackChunkName: "pages_admin_main_components_uploadImg" */).then(m => m.default || m)
const _15be48bb = () => import('..\\pages\\admin\\main\\components\\tool.vue' /* webpackChunkName: "pages_admin_main_components_tool" */).then(m => m.default || m)
const _dbb9224c = () => import('..\\pages\\blog\\page\\components\\imgBox.vue' /* webpackChunkName: "pages_blog_page_components_imgBox" */).then(m => m.default || m)
const _1bb48117 = () => import('..\\pages\\blog\\components\\ani\\mode3.vue' /* webpackChunkName: "pages_blog_components_ani_mode3" */).then(m => m.default || m)
const _bd05cfca = () => import('..\\pages\\blog\\page\\components\\essay.vue' /* webpackChunkName: "pages_blog_page_components_essay" */).then(m => m.default || m)
const _9b76fd22 = () => import('..\\pages\\blog\\page\\components\\readMoreBtn.vue' /* webpackChunkName: "pages_blog_page_components_readMoreBtn" */).then(m => m.default || m)
const _7a7dd20e = () => import('..\\pages\\admin\\main\\components\\mdPre.vue' /* webpackChunkName: "pages_admin_main_components_mdPre" */).then(m => m.default || m)
const _0dabcbb0 = () => import('..\\pages\\admin\\main\\components\\tagGroup.vue' /* webpackChunkName: "pages_admin_main_components_tagGroup" */).then(m => m.default || m)
const _49227bfa = () => import('..\\pages\\admin\\main\\components\\md.vue' /* webpackChunkName: "pages_admin_main_components_md" */).then(m => m.default || m)
const _1b985215 = () => import('..\\pages\\blog\\components\\ani\\mode1.vue' /* webpackChunkName: "pages_blog_components_ani_mode1" */).then(m => m.default || m)
const _2166f884 = () => import('..\\pages\\blog\\page\\components\\commentBox.vue' /* webpackChunkName: "pages_blog_page_components_commentBox" */).then(m => m.default || m)
const _3dab7a79 = () => import('..\\pages\\blog\\page\\components\\toolBar.vue' /* webpackChunkName: "pages_blog_page_components_toolBar" */).then(m => m.default || m)
const _08bc2f1c = () => import('..\\pages\\admin\\main\\components\\addTag.vue' /* webpackChunkName: "pages_admin_main_components_addTag" */).then(m => m.default || m)
const _1ba66996 = () => import('..\\pages\\blog\\components\\ani\\mode2.vue' /* webpackChunkName: "pages_blog_components_ani_mode2" */).then(m => m.default || m)
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
			path: "/blog/page",
			component: _4c6c0f74,
			name: "blog-page"
		},
		{
			path: "/admin/main",
			component: _130fec15,
			name: "admin-main"
		},
		{
			path: "/blog/components/head2",
			component: _0c542e9f,
			name: "blog-components-head2"
		},
		{
			path: "/blog/components/topBar",
			component: _1fbe5a01,
			name: "blog-components-topBar"
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
			path: "/blog/components/essayBox",
			component: _1bb80cd1,
			name: "blog-components-essayBox"
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
			path: "/blog/components/ani/mode4",
			component: _1bc29898,
			name: "blog-components-ani-mode4"
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
			path: "/blog/page/components/imgBox",
			component: _dbb9224c,
			name: "blog-page-components-imgBox"
		},
		{
			path: "/blog/components/ani/mode3",
			component: _1bb48117,
			name: "blog-components-ani-mode3"
		},
		{
			path: "/blog/page/components/essay",
			component: _bd05cfca,
			name: "blog-page-components-essay"
		},
		{
			path: "/blog/page/components/readMoreBtn",
			component: _9b76fd22,
			name: "blog-page-components-readMoreBtn"
		},
		{
			path: "/admin/main/components/mdPre",
			component: _7a7dd20e,
			name: "admin-main-components-mdPre"
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
			path: "/blog/components/ani/mode1",
			component: _1b985215,
			name: "blog-components-ani-mode1"
		},
		{
			path: "/blog/page/components/commentBox",
			component: _2166f884,
			name: "blog-page-components-commentBox"
		},
		{
			path: "/blog/page/components/toolBar",
			component: _3dab7a79,
			name: "blog-page-components-toolBar"
		},
		{
			path: "/admin/main/components/addTag",
			component: _08bc2f1c,
			name: "admin-main-components-addTag"
		},
		{
			path: "/blog/components/ani/mode2",
			component: _1ba66996,
			name: "blog-components-ani-mode2"
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
