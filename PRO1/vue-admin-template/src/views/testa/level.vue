<template>
  <div>
    <div class="app-container">
      <el-row>
        <!-- 添加信息按钮 -->
        <el-button type="primary" @click="dialogVisible = true"
          >添加等级</el-button
        >
      </el-row>
      <!-- 对话框 -->
      <el-dialog
        title="添加等级"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
      >
        <!-- 对话框内部添加信息 -->
        <div>
          <span>等级名称：</span>
          <el-input
            v-model="input1"
            placeholder="请输入等级名称"
            id="input1"
          ></el-input>
        </div>

        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="add(), dialogVisible = false"
            >确定添加</el-button
          >
        </span>
      </el-dialog>

    </div>
    <div class="app-container">
      <el-table :data="tableData" height="250" border style="width: 100%">
        <el-table-column prop="ID" label="序号"> </el-table-column>
        <el-table-column prop="level" label="等级"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
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
import { getLevel, delLevel, addLevel } from "@/api/address";
export default {
  data() {
    return {
      tableData: [],
      input1: "",
       dialogVisible: false,
    };
  },
  methods: {
    handleDelete(index, row) {
      delLevel({ levelid: row.ID }).then((res) => {
        this.getData();
      });
    },
    getData() {
      getLevel().then((res) => {
        let arr = res.data;
        let arr2 = arr.map((item, val, arr) => {
          return {
            ID: item.jrid,
            level: item.levelname,
          };
        });
        console.log(arr2);
        this.tableData = arr2;
      });
    },
    //添加信息
    add() {
      var in1 = document.getElementById("input1").value;
      console.log(in1);
      addLevel({ levelname: in1 }).then(
        (res) => {
          this.getData();
        }
      );
      // 清空input中上次添加的值
      document.getElementById("input1").value = "";
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