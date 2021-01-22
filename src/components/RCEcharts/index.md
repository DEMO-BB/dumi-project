# RCEcharts

```jsx
import React from 'react';
import ReactEcharts from 'echarts-for-react';
import options1 from './options_1.js';
import { provinceUVData } from './provinceData';
import chinaJson from './china.json';
import echarts from 'echarts';
echarts.registerMap('china', chinaJson);

export default () => (
  <ReactEcharts
    option={options1(provinceUVData)}
    lazyUpdate={true}
    style={{ height: '100vh', width: '100%' }}
    className="react_for_echarts_bottom"
  />
);
```
