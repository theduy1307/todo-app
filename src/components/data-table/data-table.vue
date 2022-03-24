<template>
  <el-row>
    <el-table :data="tasks" stripe style="width: 100%">
      <el-table-column :label="$t('task_name')">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" :content="$t('click_change')" placement="top-start">
          <span style="cursor:pointer" @click="handleEditTask(scope.row.id)">{{scope.row.name}}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column :label="$t('status')">
        <template slot-scope="scope">
          <el-switch
            :value="scope.row.status"
            @change="handleChangeStatus(scope.row)"
            :active-text="$t('undone')"
            :inactive-text="$t('done')">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column :label="$t('level')">
        <template slot-scope="scope">
          <el-tag
            size="mini"
            style="cursor: pointer"
            @click="handleChangeTaskLevel(scope.$index, scope.row)"
            :type="
              scope.row.level === '1'
                ? 'danger'
                : scope.row.level === '2'
                ? 'primary'
                : 'success'
            "
            :disable-transitions="true"
            >{{
              scope.row.level === "1"
                ? $t('very_important')
                : scope.row.level === "2"
                ? $t('important')
                : $t('none_important')
            }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column fixed="right" :label="$t('action')">
        <template slot-scope="scope">
          <el-button
            @click="handleDeleteTask(scope.$index)"
            type="danger"
            size="mini"
            icon="el-icon-delete"
            >{{$t('delete')}}</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-row>
</template>
<script lang="ts" src="./data-table.ts"></script>
