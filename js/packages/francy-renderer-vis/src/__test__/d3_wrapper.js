import * as d3 from 'd3';

window.d3 = d3;
window.MathJax = {
  Hub: {
    Config: c=>c,
    Register: {
      MessageHook: c=>c
    },
    Configured: () => {},
    Queue: c=>c
  }
};
