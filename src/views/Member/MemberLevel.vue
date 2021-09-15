<template>
	<div>
		我是等级 ID={{id}}
	</div>
</template>

<script>
	export default {
		props: ['id'],
		name: 'MemberLevel',
		beforeRouteEnter: (to, from, next) => {
			console.log('进入会员等级页面');
			next(vm=>{
				vm.getData();
			});
		},
		beforeRouteLeave: (to, from, next) => {
			console.log('离开会员等级页面');
			next();
		},
		methods: {
			getData: function() {
				this.axios({
					method: 'get',
					url: 'https://localhost:8080/data.json',
				}).then(
					repos => console.log(repos)
				).catch(
					error => console.log(error)
				)
			}
		}
	}
</script>

<style scoped>
</style>
