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
        width="30%"
        :before-close="handleClose"
      >
        <!-- 对话框内部添加信息 -->
        <div>
          <span>地址名称：</span>
          <el-input
            v-model="input1"
            placeholder="请输入地址名称"
            id="input1"
          ></el-input>
          <span>经度：</span>
          <el-input
            v-model="input2"
            placeholder="请输入经度"
            id="input2"
          ></el-input>
          <span>纬度：</span>
          <el-input
            v-model="input3"
            placeholder="请输入纬度"
            id="input3"
          ></el-input>
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
        <el-table-column prop="addressname" label="地址"> </el-table-column>
        <el-table-column prop="longitude" label="经度" width="100">
        </el-table-column>
        <el-table-column prop="latitude" label="纬度" width="100">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            > -->
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
import { getAddress, delAddress, addAddress } from "@/api/address";
// import { delAddress } from "@/api/address";
import axios from "axios";
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      input1: "",
      input2: "",
      input3: "",
    };
  },
  methods: {
    add() {
      var in1 = document.getElementById("input1").value;
      var in2 = document.getElementById("input2").value;
      var in3 = document.getElementById("input3").value;
      console.log(in1, in2, in3);
      addAddress({ address: in1, longitude: in2, latitude: in3 }).then(
        (res) => {
          this.getData();
        }
      );
      // 清空input中上次添加的值
      document.getElementById("input1").value = "";
      document.getElementById("input2").value = "";
      document.getElementById("input3").value = "";
    },
    //删除信息
    handleDelete(index, row) {
      console.log(index, row);
      delAddress({ addressid: row.ID }).then((res) => {
        this.getData();
      });
    },
    //得到地址信息
    getData() {
      getAddress().then((res) => {
        let arr = res.data;
        let arr2 = arr.map((item, val, arr) => {
          return {
            ID: item.addressid,
            addressname: item.addressname,
            longitude: item.longitude,
            latitude: item.latitude,
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
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>