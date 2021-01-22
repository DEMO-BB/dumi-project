import echarts from 'echarts';
import EchartsReactCore from './core.js';

// export the Component the echarts Object.
export default class RCEcharts extends EchartsReactCore {
  constructor(props) {
    super(props);
    console.log('echarts: ', echarts);
    this.echartsLib = echarts;
  }
}
