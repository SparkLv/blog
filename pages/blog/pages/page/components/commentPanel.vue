<template>
    <div class="comment-box">
        <form action="">
            <label for="">
                如何称呼：
                <input type="text">
            </label>
            <label for="">
                联系方式：
                <input type="text">
            </label>
            <label for="">
                输入留言：
                <textarea rows="6"></textarea>
            </label>
            <label for="">
                <input type="submit" value="提 交">
            </label>
        </form>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.comment-box {
  height: 330px;
  box-sizing: border-box;
  background: #303b4e;
  position: relative;
  form {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
  }
  label {
    display: block;
    color: #fff;
    margin-bottom: 20px;
    text-align: center;
    input,
    textarea {
      width: calc(100% - 100px);
    }
    input {
      height: 28px;
    }
  }

  label:last-child {
    margin-bottom: 0;
  }
  input[type="submit"] {
    background: #c52f31;
    color: #fff;
    width: 300px;
    height: 50px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
  }
  textarea {
    vertical-align: middle;
  }
}
</style>
