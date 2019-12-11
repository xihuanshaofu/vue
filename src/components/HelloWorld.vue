<template>
	<div class="dialogQueqin">
		<el-dialog title="详细信息" :visible.sync="dialogVisible" width="70%" :before-close="handleClose" id="dialogQueqin">
			<slot name="HelloWorld" v-for="item in tableData" :text="item.deptname" @click="huohuo">
			</slot>
			<div v-for="item in tableMsg" id="mesQueqin" :key="item.deptname">
				<el-row id="mesQueqinRow">
					<el-col :span="4" :offset="1">
						部门:{{item.deptname}}
					</el-col>
					<el-col :span="4" :offset="2">
						工卡号:{{item.loginId}}
					</el-col>
					<el-col :span="4" :offset="2">
						姓名:{{item.lastname}}
					</el-col>
					<el-col :span="4" :offset="2">
						部门:{{item.deptname}}
					</el-col>
				</el-row>
				<el-row id="mesQueqinRow">
					<el-col :span="4" :offset="1">
						<el-button @click="linkBreakOff">调休信息表</el-button>
					</el-col>
				</el-row>
			</div>
			<span>
				<el-button :type="dialogVisible == false ? 'info':'danger'" @click="cancelSelect()">取 消</el-button>
				<el-button :type="dialogVisible == true ? 'success':'danger'" @click="cancelSelect()">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		props: {
			dialogVisible: Boolean,
			tableData: Array,
			tableMsg: Array
		},
		data() {
			return {
				
			}
		},
		methods: {
			cancelSelect() {
				this.$emit("updateDialogs", false)
			},
			handleClose(done) {
				this.$confirm('确认关闭？')
					.then(_ => {
						this.$emit("updateDialogs", false)
					})
					.catch(_ => {
						this.$emit("updateDialogs", true)
					});
			},
			linkBreakOff() {
				console.log(this.$router)
				console.log(this.tableMsg)
				this.$router.push({
					path: "/about",
					query: {
						loginId: this.tableMsg[0].loginId
					}
				})
			},
			huohuo:() =>{
				alert("456")
			}
		},
		mounted() {},
		watch: {
			tableMsg: function() {
				console.log(this.tableMsg)
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h3 {
		margin: 40px 0 0;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}

	#mesQueqin {
		width: 80%;
		margin: 0 auto;
		margin-bottom: 20px;
	}

	#mesQueqinRow {
		width: 100%;
		height: 50px;
		line-height: 50px;
	}
</style>
