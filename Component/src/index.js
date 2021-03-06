import './main.css';
import Vue from 'vue/dist/vue.js';

// import app from './component/A.vue';
import './component/B.js';
import cc from './component/C.js';
import './component/D.js';
import './component/E.js';

new Vue({
	el: '#demo',
	data: {
		message: 'Hello world'
	},
	template: `<div @click="handleClick" class="container">
				<bb :prop="message"></bb>
				<cc :propsEvent="propsEvent"></cc>
				<component-d>
					<strong>childs-1</strong>
					<strong>childs-2</strong>
				</component-d>
				<component-e></component-e>
			  </div>`,
	components: {
		'cc': cc
	},
	methods: {
		handleClick() {
			console.log(this.message);
			this.message += 'x';
		},
		propsEvent() {
			alert('success..');
		}
	}
});