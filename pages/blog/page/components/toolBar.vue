<template>
    <nav class="tool-bar">
        <ul>
            <li>
                <nuxt-link to="/blog">Back To Blog</nuxt-link>
            </li>
        </ul>
    </nav>
</template>
<style lang="scss" scoped>
.tool-bar {
  ul {
    height: 50px;
    padding-left: 80px;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    li {
      float: left;
      padding: 0 20px;
      border-left: 1px solid #e5e5e5;
      border-right: 1px solid #e5e5e5;
      &:hover {
        background: rgb(107, 146, 161);
        a {
          color: #fff;
        }
      }
    }
  }
  a {
    line-height: 50px;
    font-size: 16px;
    font-weight: 600;
  }
}
</style>
