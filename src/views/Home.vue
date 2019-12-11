<template>
	<div class="home" id="home">
		<h1>{{title}}</h1>
		<el-form ref="form" :model="search" label-width="80px">
			<el-row :gutter="24">
				<el-col :span="6" :offset="3">
					<el-form-item label="部门名称">
						<el-input v-model="search.dept"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="6" :offset="3">
					<el-form-item label="创建日期">
						<el-input v-model="search.date"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-button type="danger" @click="searchQueqin()">
						搜索
					</el-button>
				</el-col>
			</el-row>
		</el-form>
		<el-table :data="tableData" size="small" stripe id="tableData" align="center" header-align="center" @select="selectCheck">
			<el-table-column label="缺勤月度登记表" header-align="center" color="red">
				<el-table-column label="人员信息" header-align="center">
					<el-table-column type="selection">
					</el-table-column>
					<el-table-column prop="deptname" label="部门" align="center">
					</el-table-column>
					<el-table-column prop="lastname" label="姓名" align="center">
					</el-table-column>
					<el-table-column prop="loginId" label="工卡号" align="center">
					</el-table-column>
					<el-table-column prop="month" label="日期" align="center">
					</el-table-column>
				</el-table-column>

				<el-table-column label="病假">
					<el-table-column prop="bjtotaldays" label="天数" width="40px" align="center">
					</el-table-column>
					<el-table-column prop="bjcount" label="人次" width="40px" align="center">
					</el-table-column>
				</el-table-column>

				<el-table-column label="事假">
					<el-table-column prop="sjtotaldays" label="天数" width="40px" align="center">
					</el-table-column>
					<el-table-column prop="sjcount" label="人次" width="40px" align="center">
					</el-table-column>
				</el-table-column>
				<el-table-column label="产假">
					<el-table-column prop="cjtotaldays" label="天数" width="40px" align="center">
					</el-table-column>
					<el-table-column prop="cjcount" label="人次" width="40px" align="center">
					</el-table-column>
				</el-table-column>
				<el-table-column label="婚假">
					<el-table-column prop="hjtotaldays" label="天数" width="40px" align="center">
					</el-table-column>
					<el-table-column prop="hjcount" label="人次" width="40px" align="center">
					</el-table-column>
				</el-table-column>
				<el-table-column label="探亲假">
					<el-table-column prop="tqjtotaldays" label="天数" width="40px" align="center">
					</el-table-column>
					<el-table-column prop="tqjcount" label="人次" width="40px" align="center">
					</el-table-column>
				</el-table-column>
				<el-table-column label="丧假">
					<el-table-column prop="stotaldays" label="天数" width="40px" align="center">
					</el-table-column>
					<el-table-column prop="scount" label="人次" width="40px" align="center">
					</el-table-column>
				</el-table-column>

				<el-table-column label="调休">
					<el-table-column prop="txtotaldays" label="天数" width="40px" align="center">
					</el-table-column>
					<el-table-column prop="txcount" label="人次" width="40px" align="center">
					</el-table-column>
				</el-table-column>

				<el-table-column label="年假">
					<el-table-column prop="njtotaldays" label="天数" width="40px" align="center">
					</el-table-column>
					<el-table-column prop="njcount" label="人次" width="40px" align="center">
					</el-table-column>
				</el-table-column>

				<el-table-column label="旷工">
					<el-table-column prop="kgtotaldays" label="天数" width="40px" align="center">
					</el-table-column>
					<el-table-column prop="kgcount" label="人次" width="40px" align="center">
					</el-table-column>
				</el-table-column>

				<el-table-column label="更多" width="100px" align="center">
					<template slot-scope="scope">
						<el-button @click="moreQueqin(scope.$index,scope.row)">详细</el-button>
					</template>
				</el-table-column>
			</el-table-column>
		</el-table>
		<div class="block">
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="search.page"
			 :page-sizes="search.pageSizes" :page-size="search.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="search.total">
			</el-pagination>
		</div>


		<HelloWorld :dialogVisible="dialogVisible" @updateDialogs="toUpdate" :tableData="tableData" :tableMsg="tableMsg" ref="aaa">

			<template slot="HelloWorld">
				
			</template>
		</HelloWorld>
	</div>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue'
	import {
		requestQ
	} from "@/components/api/api.js"
	export default {
		name: 'home',
		data() {
			return {
				title: "缺勤月度登记表",
				search: {
					dept: "",
					createDate: "",
					total: 0,
					page: 1,
					pageSizes: [10, 20, 50, 100],
					pageSize: 10
				},
				tableData: [],
				dialogVisible: false,
				tableMsg: [],
				storeStatu: ""
			}
		},
		components: {
			HelloWorld
		},
		mounted() {
			this.requestQueqin()
			this.test()
		},
		methods: {
			test:function(){
				
			},
			requestQueqin: function() {
				requestQ({
					dept: this.search.dept,
					month: this.search.createDate,
					rows: this.search.pageSize,
					page: this.search.page
				}).then(res => {
					this.tableData = res.data.rows
					this.storeStatu = this.$store.state.statu
					this.search.total = res.data.total
				})
			},
			searchQueqin: function() {
				this.search.page = 1
				this.requestQueqin()
			},
			handleSizeChange(val) {
				this.search.pageSize = val
				this.requestQueqin()
			},
			handleCurrentChange(val) {
				this.search.page = val
				this.requestQueqin()
			},
			moreQueqin(index, val) {
				this.tableMsg = []
				this.tableMsg.push(this.tableData[index])
				this.dialogVisible = true
			},
			toUpdate(state) {
				this.dialogVisible = state
			},
			selectCheck(sel, row) {
				console.log(sel)
				console.log(row)
			}
		}
	}
</script>

<style scoped="scoped">
	#home {
		width: 100%;
		margin-bottom: 50px;
	}

	#tableData {
		width: 95% !important;
		margin: 0 auto;
		padding: 0 auto;
		text-align: center !important;
		font-size: 12px;
		color: #000000;
	}

	.el-table__header {
		color: #00FFFF !important;
	}
</style>
