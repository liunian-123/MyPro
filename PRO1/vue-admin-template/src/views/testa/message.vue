<template>
  <div>
    <div class="app-top app-container">
      <el-row>
        <!-- 添加信息按钮 -->
        <el-button type="primary" @click="dialogVisible = true"
          >添加信息</el-button
        >
      </el-row>
      <!-- 对话框 -->
      <el-dialog
        title="添加信息"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose"
      >
        <!-- 对话框内部添加信息 -->
        <div>
          <div class="box2 box">
            <span>名字：</span>
            <el-input
              v-model="input1"
              placeholder="请输入地址名称"
              id="input1"
              class="right"
            ></el-input>
          </div>
          <div class="box">
            <span class="left">地址：</span>
            <el-select v-model="value1" placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                id="select1"
              >
              </el-option>
            </el-select>
          </div>
          <div class="box">
            <span class="left">等级：</span>
            <el-select v-model="value2" placeholder="请选择">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                id="select2"
              >
              </el-option>
            </el-select>
          </div>

          <div class="box2 box">
            <span>电话：</span>
            <el-input
              v-model="input2"
              placeholder="请输入经度"
              id="input2"
              class="right"
            ></el-input>
          </div>
          <div class="box2 box">
            <!-- 头像上传 -->
            <span class="left"> 头像上传</span>
            <el-upload
              class="upload-demo right"
              :action="base_api + '/getMessageA'"
              name="sfile"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList1"
              id="jpg1"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">
                只能上传jpg/png文件，且不超过500kb
              </div>
            </el-upload>
          </div>
          <div class="box2 box">
            <!-- 微信号上传 -->
            <span class="left"> 微信号上传</span>
            <el-upload
              class="upload-demo right"
              :action="base_api + '/getMessageA'"
              name="sfile"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList2"
              id="jpg2"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">
                只能上传jpg/png文件，且不超过500kb
              </div>
            </el-upload>
          </div>
        </div>

        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="add(), (dialogVisible = false)"
            >确定添加</el-button
          >
        </span>
      </el-dialog>
    </div>

    <div class="app-container">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="ID" label="ID" width="100"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="100">
        </el-table-column>
        <el-table-column prop="level" label="等级" width="150">
        </el-table-column>
        <el-table-column prop="address" label="地址" width="200">
        </el-table-column>
        <el-table-column prop="phone" label="手机号"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {
  getMessage,
  delMessage,
  addMessage,
  getLevel,
  getAddress,
} from "@/api/address";
// import { delAddress } from "@/api/address";
import axios from "axios";
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      input1: "",
      input2: "",
      value1: "",
      value2: "",
      fileList1: [],
      fileList2: [],
      options1: [],
      options2: [],
      base_api: process.env.VUE_APP_BASE_API,
    };
  },
  methods: {
    // 添加信息
    add() {
      var jp1 = document.getElementById("jpg1").name;
      var jp2 = document.getElementById("jpg2").name;
      addMessage({
        uname: this.input1,
        tel: this.input2,
        addressid: this.value1,
        levelid: this.value2,
        tcoin: jp1,
        weixin: jp2,
      }).then((res) => {
        this.getData();
      });
      // 清空input中上次添加的值
      document.getElementById("input1").value = "";
      document.getElementById("input2").value = "";
    },
    //编辑信息
    handleEdit(index, row) {
      console.log(index, row);
    },
    //删除信息
    handleDelete(index, row) {
      console.log(index, row);
      delMessage({ id: row.ID }).then((res) => {
        this.getData();
      });
    },
    //得到地址信息
    getAddressData() {
      getAddress().then((res) => {
        let arr = res.data;
        let arr2 = arr.map((item, val, arr) => {
          return {
            value: item.addressid,
            label: item.addressname,
          };
        });
        console.log(arr2);
        this.options1 = arr2;
      });
    },
    //得到等级信息
    getLevelData() {
      getLevel().then((res) => {
        let arr = res.data;
        let arr2 = arr.map((item, val, arr) => {
          return {
            value: item.jrid,
            label: item.levelname,
          };
        });
        console.log(arr2);
        this.options2 = arr2;
      });
    },
    //得到信息
    getData() {
      getMessage().then((res) => {
        let arr = res.data;
        let arr2 = arr.map((item, val, arr) => {
          return {
            ID: item.jrid,
            name: item.jrname,
            level: item.levelname,
            address: item.addressname,
            phone: item.jrtel,
          };
        });
        console.log(arr2);
        this.tableData = arr2;
      });
    },
    //是否关闭对话框
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
  },
  created() {
    this.getData();
    this.getAddressData();
    this.getLevelData();
  },
};
</script>

<style lang="scss" scoped>
.box {
  margin-top: 10px;
  margin-bottom: 10px;
}
.box2 {
  display: flex;
  .left {
    flex: 5.8%;
  }
  .right {
    flex: 94.2%;
  }
}
.left {
  display: inline-block;
}
</style>