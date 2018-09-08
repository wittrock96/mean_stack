<template>
	<div class='test'>
		<h1>{{title}}</h1>

		<span v-if="showName">{{user.first_name}}</span>
		<span v-else="showName">no first name here</span>
		<span>{{user.last_name}}</span>
		<p v-for="item in item">{{item.title}}</p>
		<button v-on:click="greet">say greeting</button>
	</div>
</template>

<script>
	export default{
		name: 'test',
		data(){
			return {
				title: 'HelloWorld',
				user: {
					first_name: 'cole',
					last_name: 'wittrock'
				},
				showName: true,
				item: [
					{title: 'item one'},
					{title: 'item two'},
					{title: 'item three'}
				]
			}
		},
		methods:{
			greet: function() {
				alert("long way from a demo")
			} 
		}

	}
</script>


<style scoped>
	
	*{
		color: red;
	}
	
</style>