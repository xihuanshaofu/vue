<template>
	<div>
		<span>
			<select name="" id="sel"  v-model="selValue" @change="selChange($event)">
				<option value="" style="display: none;">请选择</option>
				<option  v-for="item in seloption" :value="item.val" :key="item.val">{{item.label}}</option>
			</select>
		</span>
		<span>
			<input type="text" id="inp" v-model="inputval">
		</span>
	</div>
</template>

<script>
	export default {
		name: "jhk",
		data() {
			return {
				seloption: [{
						label: "a",
						val: "0"
					},
					{
						label: "b",
						val: "1"
					},
					{
						label: "c",
						val: "2"
					},
					{
						label: "d",
						val: "3"
					}
				],
				selValue:"",
				inputval: ""
			}
		},
		methods:{
			selChange(event){
				for(var i = 0; i<this.seloption.length; i++){
					if(this.seloption[i].val == this.selValue){
						this.inputval = this.seloption[i].label
					}
				}
				console.log("jjjjjjjjj")
			}
		}
	}
</script>

<style>
	#sel{
		width: 330px;
		height: 40px;
		left: 10px;
		top: 12px;
	}
	#inp{
		width: 300px;
		height: 30px;
		left: 20px;
		top: 100px;
	}
</style>
