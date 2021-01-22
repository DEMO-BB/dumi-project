import { splitList } from './utils';

export default data => ({
  animation: true,
  animationDuration: 1000,
  animationEasing: 'cubicInOut',
  animationDurationUpdate: 1000,
  animationEasingUpdate: 'cubicInOut',
  color: ['#5c0bec', '#f341a9'],
  textStyle: {
    color: 'red',
  },
  visualMap: {
    show: false,
    min: 0,
    max: 1100000,
    calculable: true,
    inRange: {
      color: ['#5c0bec', '#f341a9'],
    },
    textStyle: {
      color: '#fff',
    },
  },
  series: [
    {
      name: 'UV',
      type: 'map',
      mapType: 'china',
      selectedMode: 'single',
      roam: false,
      zoom: 0.85,
      // 设置地图的位置
      // top: '4rem',
      data,
      label: {
        normal: {
          formatter: function(params) {
            return params.name;
          },
          position: 'right',
          show: true,
          textStyle: {
            color: '#fff',
            textShadowColor: '(0, 0, 0, .3)',
            textShadowBlur: 0,
            textShadowOffsetX: 2,
            textShadowOffsetY: 2,
          },
        },
        emphasis: {
          show: true,
          textStyle: {
            color: '#fff',
          },
        },
      },
      itemStyle: {
        normal: {
          show: false,
          color: 'red',
          shadowBlur: 0,
          shadowColor: '',
          borderWidth: 0.5,
          width: 30,
          borderColor: '#74d8cb',
          areaColor: 'rgba(0, 0, 0, 0)',
        },
      },
    },
  ],
  // dataRange: {
  //     x: '-1000px',//图例横轴位置
  //     y: '-1000px',//图例纵轴位置
  //     splitList,
  // },
});
