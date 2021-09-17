<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="学生姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.school" placeholder="请选择活动区域">
          <el-option label="黑大" value="heida"></el-option>
          <el-option label="理工" value="ligong"></el-option>
          <el-option label="师大" value="ligong"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="form.date1"
          style="width: 100%"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        name: "",
        school: "",
        date1: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      axios
        .get(
          `https://bird.ioliu.cn/v2?url=http://last-h081n-1302602611.ap-shanghai.service.tcloudbase.com/add?name=${this.form.name}&school=${this.form.school}`
        )
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>