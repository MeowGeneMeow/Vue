<template>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
		<div class="logo">
			<img src="../assets/spyware.png" /> 
		</div>

		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<img src="../assets/double-arrow.png"  width="40" height="40">
			</button>
		</div>

		<h3>Menu</h3>
		<div class="menu">
			<RouterLink @click="scrollToAbout" to="/about" class="button">
				<img src="../assets/monitor.png" width="40" height="40">
				<span class="text">Attacks</span>
			</RouterLink>
			<RouterLink @click="scrollToDeep" to="/deep" class="button">
				<img src="../assets/analysis.png" width="40" height="40">
				<span class="text">Deep Analysis</span>
			</RouterLink>
			<RouterLink @click="scrollToAbout" to="/about" class="button">
				<img src="../assets/track.png" width="40" height="40">
				<span class="text">Training Track</span>
			</RouterLink>
			<!--
      <router-link to="/contact" class="button">
				<span class="material-icons">email</span>
				<span class="text">Contact</span>
			</router-link>
      -->
		</div>

		<div class="flex"></div>
		
		<div class="menu">
			<RouterLink @click="scrollToAbout" to="/about" class="button">
				<img src="../assets/setting.png" width="40" height="40">
				<span class="text">Settings</span>
			</RouterLink>
		</div>
	</aside>

  
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}

const scrollToAbout = () => {
  const about = document.getElementById('about')
  if (about) {
    window.scrollTo({
      top: about.offsetTop - (window.innerHeight - about.clientHeight) / 2,
      behavior: 'smooth'
      })
    }
  }

  const scrollToDeep = () => {
  const deep = document.getElementById('deep')
  if (deep) {
    window.scrollTo({
      top: deep.offsetTop - (window.innerHeight - deep.clientHeight) / 2,
      behavior: 'smooth'
      })
    }
  }
</script>

<style lang="scss" scoped>



aside {

	position: fixed; /* 使側邊欄固定在視窗中 */
	left: 0; /* 將側邊欄置於最左邊 */
	top: 0; /* 側邊欄頂部對齊視窗頂部 */
	z-index: 999; /* 設定一個較高的 z-index 值 */

	display: flex;
	flex-direction: column;

	background-color:	darkslategray;
  
	color: var(--dark);
  

	width: calc(2rem + 60px);
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;

	transition: 0.2s ease-in-out;

	.flex {
		flex: 1 1 0%;
	}

	.logo {
		margin-bottom: 1rem;

		img {
			width: 70px;
      height: 70px;
		}
	}

	

	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;
    	margin-left: 0.5rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;

		.menu-toggle {
			transition: 0.2s ease-in-out;

      /* 添加一個新的CSS類，例如 'no-bg'，並將其應用於圖片 */
      background-color: transparent; /* 將背景色設置為透明 */
      border: none; /* 移除邊框 */
      cursor: pointer;
      
      
			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-out;
			}
			
			&:hover {
				.material-icons {
					color: var(--primary);
					transform: translateX(0.1rem);
				}
			}
		}
	}

	h3, .button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	h3 {
		color: var(--grey);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}

	.menu {
		margin: 0 -1rem;
		margin-right: 0; // 初始化
  		transition: margin-right 0.2s ease-in-out;
		.button {
			display: flex;
			align-items: center;
			text-decoration: none;

			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;
      

			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-in-out;
			}
			.text {
        		margin-left: 20px;
				color: var(--light);
				transition: 0.2s ease-in-out;
			}

			&:hover {
				background-color: var(--dark-alt);

				.material-icons, .text {
					color: var(--primary);
				}
			}

			&.router-link-exact-active {
				background-color: var(--dark-alt);
				border-right: 5px solid var(--primary);

				.material-icons, .text {
					color: var(--primary);
				}
			}
		}
	}

	.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;

		p {
			font-size: 0.875rem;
			color: var(--grey);
		}
	}

	&.is-expanded {
		width: var(--sidebar-width);


		.menu-toggle-wrap {
			top: -3rem;
			
			.menu-toggle {
				transform: rotate(-180deg);
			}
		}

		h3, .button .text {
			opacity: 1;
		}

		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}

		.footer {
			opacity: 0;
		}
	}


  
	@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
}



</style>