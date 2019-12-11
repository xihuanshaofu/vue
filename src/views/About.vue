<template>
	<div class="about">
		<h1>个人调休信息表</h1>
		<el-table :data="tableData" size="small" stripe id="tableData" align="center" header-align="center">
			<el-table-column label="个人调休信息表" header-align="center" color="red">
				<el-table-column type="selection">
				</el-table-column>
				<el-table-column prop="departmentname" label="部门" align="center">
				</el-table-column>
				<el-table-column prop="lastname" label="姓名" align="center">
				</el-table-column>
				<el-table-column prop="loginId" label="工卡号" align="center">
				</el-table-column>
				<el-table-column prop="times" label="剩余天数" align="center">
				</el-table-column>
				<el-table-column prop="effdate" label="到期时间" align="center">
				</el-table-column>
			</el-table-column>
		</el-table>
		<div class="block">
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="search.page"
			 :page-sizes="search.pageSizes" :page-size="search.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="search.total">
			</el-pagination>
		</div>
	</div>
</template>
<script>
	import {
		requestBreak
	} from "@/components/api/api.js"
	export default {
		name: "about",
		data() {
			return {
				tableData: [],
				search: {
					dept: "",
					loginId: 1,
					page: 1,
					pageSize: 10,
					pageSizes: [10, 20, 30, 50],
					total: 0
				},
				checkboxVal: false
			}
		},
		mounted() {
			this.search.loginId = this.$route.query.loginId
			this.requestBreakOff()
		},
		methods: {
			requestBreakOff: function() {
				requestBreak({
					deptname: this.search.dept,
					loginId: this.search.loginId,
					page: this.search.page,
					rows: this.search.pageSize
				}).then(res => {
					this.search.total = res.data.total
				})
			},
			handleSizeChange(val) {
				this.search.pageSize = val
				this.requestBreakOff()
			},
			handleCurrentChange(val) {
				this.search.page = val
				this.requestBreakOff()
			}
		},
		watch: {
		},
		filters: {
			filterA(val) {
				return val = val + 8
			}
		},
		computed: {
			
		}

	}
</script>
