import React,{Component} from 'react';
import config from './config.json';
import styles from './Greeter.css'; //导入 .root 到 Greeter.js 中

class Greeter extends Component {
    render() {
        return (<div>
	        		<div className={styles.root}> 
		        		{ config.greetText }
		        		<p className={styles.name}> { config.Name } 1314 </p> 
		        	</div>
		        	<div className={styles.my}>
		        		{ config.wife }
		        	</div>
	        	</div>
        	);
        }
    }

export default Greeter;
