<template>
  <el-row>
    <el-table :data="tasks" stripe style="width: 100%">
      <el-table-column label="Tên tác vụ">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="Nhấp để thay đổi" placement="top-start">
          <span style="cursor:pointer" @click="handleEditTask(scope.row.id)">{{scope.row.name}}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column label="Trạng thái">
        <template slot-scope="scope">
          <el-switch
            :value="scope.row.status"
            @change="handleChangeStatus(scope.row)"
            active-text="Chưa làm"
            inactive-text="Đã làm">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="Mức độ">
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
                ? "Rất quan trọng"
                : scope.row.level === "2"
                ? "Quan trọng"
                : "Không quan trọng"
            }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="Thao tác">
        <template slot-scope="scope">
          <el-button
            @click="handleDeleteTask(scope.$index)"
            type="danger"
            size="mini"
            icon="el-icon-delete"
            >Xóa</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-row>
</template>
<script lang="ts" src="./data-table.ts"></script>
