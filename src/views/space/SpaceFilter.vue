<template>
<div class="space-filter">
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="审批人">
      <el-input v-model="formInline.user" placeholder="审批人"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="formInline.region" placeholder="活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
      <el-button @click="advancedFormDialog = true">高级查询</el-button>
    </el-form-item>
  </el-form>

  <!-- 高级查询 -->
  <el-dialog title="高级查询" :visible.sync="advancedFormDialog">
    <el-form :model="advancedForm">
      <el-form-item label="活动名称" :label-width="formLabelWidth">
        <el-input v-model="advancedForm.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" :label-width="formLabelWidth">
        <el-select v-model="advancedForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="advancedFormDialog = false">取 消</el-button>
      <el-button type="primary" @click="advancedFormDialog = false">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
export default {
  data () {
    return {
      formInline: {
        user: '',
        region: ''
      },
      advancedForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      advancedFormDialog: false,
      formLabelWidth: '120px'
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style>
</style>
