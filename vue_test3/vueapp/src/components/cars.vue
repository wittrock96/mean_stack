<template>
	<div class='car'>
		<h1>{{title}}</h1>

		<span>{{car.brand}}</span>
		<span>{{car.model}}</span>
		<p v-text='car.brand'></p>
	</div>
</template>

<script>
	export default{
		name: 'cars',
		data(){
			return {
				title: 'cars',
				car: {
					brand: 'Lamborghini',
					model: 'Aventador'
				}
			}
		}

	}
</script>


<style scoped>
	
	*{
		color: blue;
	}
	
</style>