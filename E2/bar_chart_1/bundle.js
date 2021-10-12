(function (d3) {
  'use strict';

  const titleText = 'Top 10 Most Populous Countries';
  const xAxisLabelText = 'ventas';

  const svg = d3.select('svg');

  const width = +svg.attr('width');
  const height = +svg.attr('height');

  const render = data => {
    const xValue = d => d['ventas'];
    const yValue = d => d.category;
    const margin = { top: 50, right: 40, bottom: 77, left: 180 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
    const xScale = d3.scaleLinear()
      .domain([0, d3.max(data, xValue)])
      .range([0, innerWidth]);
    
    const yScale = d3.scaleBand()
      .domain(data.map(yValue))
      .range([0, innerHeight])
      .padding(0.1);
    
    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);
    
    const xAxisTickFormat = number =>
      d3.format('.3s')(number)
        .replace('G', 'B');
    
    const xAxis = d3.axisBottom(xScale)
      .tickFormat(xAxisTickFormat)
      .tickSize(-innerHeight);
    
    g.append('g')
      .call(d3.axisLeft(yScale))
      .selectAll('.domain, .tick line')
        .remove();
    
    const xAxisG = g.append('g').call(xAxis)
      .attr('transform', `translate(0,${innerHeight})`);
    
    xAxisG.select('.domain').remove();
    
    xAxisG.append('text')
        .attr('class', 'axis-label')
        .attr('y', 65)
        .attr('x', innerWidth / 2)
        .attr('fill', 'black')
        .text(xAxisLabelText);
    
    g.selectAll('rect').data(data)
      .enter().append('rect')
        .attr('y', d => yScale(yValue(d)))
        .attr('width', d => xScale(xValue(d)))
        .attr('height', yScale.bandwidth());
    
    g.append('text')
        .attr('class', 'title')
        .attr('y', -10)
        .text(titleText);
  };

  d3.csv('data.csv').then(data => {    
    render(data);
  });

}(d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHNlbGVjdCxcbiAgY3N2LFxuICBzY2FsZUxpbmVhcixcbiAgbWF4LFxuICBzY2FsZUJhbmQsXG4gIGF4aXNMZWZ0LFxuICBheGlzQm90dG9tLFxuICBmb3JtYXRcbn0gZnJvbSAnZDMnO1xuXG5jb25zdCB0aXRsZVRleHQgPSAnVG9wIDEwIE1vc3QgUG9wdWxvdXMgQ291bnRyaWVzJztcbmNvbnN0IHhBeGlzTGFiZWxUZXh0ID0gJ1BvcHVsYXRpb24nO1xuXG5jb25zdCBzdmcgPSBzZWxlY3QoJ3N2ZycpO1xuXG5jb25zdCB3aWR0aCA9ICtzdmcuYXR0cignd2lkdGgnKTtcbmNvbnN0IGhlaWdodCA9ICtzdmcuYXR0cignaGVpZ2h0Jyk7XG5cbmNvbnN0IHJlbmRlciA9IGRhdGEgPT4ge1xuICBjb25zdCB4VmFsdWUgPSBkID0+IGRbJ3BvcHVsYXRpb24nXTtcbiAgY29uc3QgeVZhbHVlID0gZCA9PiBkLmNvdW50cnk7XG4gIGNvbnN0IG1hcmdpbiA9IHsgdG9wOiA1MCwgcmlnaHQ6IDQwLCBib3R0b206IDc3LCBsZWZ0OiAxODAgfTtcbiAgY29uc3QgaW5uZXJXaWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gIGNvbnN0IGlubmVySGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG4gIFxuICBjb25zdCB4U2NhbGUgPSBzY2FsZUxpbmVhcigpXG4gICAgLmRvbWFpbihbMCwgbWF4KGRhdGEsIHhWYWx1ZSldKVxuICAgIC5yYW5nZShbMCwgaW5uZXJXaWR0aF0pO1xuICBcbiAgY29uc3QgeVNjYWxlID0gc2NhbGVCYW5kKClcbiAgICAuZG9tYWluKGRhdGEubWFwKHlWYWx1ZSkpXG4gICAgLnJhbmdlKFswLCBpbm5lckhlaWdodF0pXG4gICAgLnBhZGRpbmcoMC4xKTtcbiAgXG4gIGNvbnN0IGcgPSBzdmcuYXBwZW5kKCdnJylcbiAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWApO1xuICBcbiAgY29uc3QgeEF4aXNUaWNrRm9ybWF0ID0gbnVtYmVyID0+XG4gICAgZm9ybWF0KCcuM3MnKShudW1iZXIpXG4gICAgICAucmVwbGFjZSgnRycsICdCJyk7XG4gIFxuICBjb25zdCB4QXhpcyA9IGF4aXNCb3R0b20oeFNjYWxlKVxuICAgIC50aWNrRm9ybWF0KHhBeGlzVGlja0Zvcm1hdClcbiAgICAudGlja1NpemUoLWlubmVySGVpZ2h0KTtcbiAgXG4gIGcuYXBwZW5kKCdnJylcbiAgICAuY2FsbChheGlzTGVmdCh5U2NhbGUpKVxuICAgIC5zZWxlY3RBbGwoJy5kb21haW4sIC50aWNrIGxpbmUnKVxuICAgICAgLnJlbW92ZSgpO1xuICBcbiAgY29uc3QgeEF4aXNHID0gZy5hcHBlbmQoJ2cnKS5jYWxsKHhBeGlzKVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHtpbm5lckhlaWdodH0pYCk7XG4gIFxuICB4QXhpc0cuc2VsZWN0KCcuZG9tYWluJykucmVtb3ZlKCk7XG4gIFxuICB4QXhpc0cuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdheGlzLWxhYmVsJylcbiAgICAgIC5hdHRyKCd5JywgNjUpXG4gICAgICAuYXR0cigneCcsIGlubmVyV2lkdGggLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLnRleHQoeEF4aXNMYWJlbFRleHQpO1xuICBcbiAgZy5zZWxlY3RBbGwoJ3JlY3QnKS5kYXRhKGRhdGEpXG4gICAgLmVudGVyKCkuYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCd5JywgZCA9PiB5U2NhbGUoeVZhbHVlKGQpKSlcbiAgICAgIC5hdHRyKCd3aWR0aCcsIGQgPT4geFNjYWxlKHhWYWx1ZShkKSkpXG4gICAgICAuYXR0cignaGVpZ2h0JywgeVNjYWxlLmJhbmR3aWR0aCgpKTtcbiAgXG4gIGcuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd0aXRsZScpXG4gICAgICAuYXR0cigneScsIC0xMClcbiAgICAgIC50ZXh0KHRpdGxlVGV4dCk7XG59O1xuXG5jc3YoJ2RhdGEuY3N2JykudGhlbihkYXRhID0+IHtcbiAgZGF0YS5mb3JFYWNoKGQgPT4ge1xuICAgIGQucG9wdWxhdGlvbiA9ICtkLnBvcHVsYXRpb24gKiAxMDAwO1xuICB9KTtcbiAgcmVuZGVyKGRhdGEpO1xufSk7Il0sIm5hbWVzIjpbInNlbGVjdCIsInNjYWxlTGluZWFyIiwibWF4Iiwic2NhbGVCYW5kIiwiZm9ybWF0IiwiYXhpc0JvdHRvbSIsImF4aXNMZWZ0IiwiY3N2Il0sIm1hcHBpbmdzIjoiOzs7RUFXQSxNQUFNLFNBQVMsR0FBRyxnQ0FBZ0MsQ0FBQztFQUNuRCxNQUFNLGNBQWMsR0FBRyxZQUFZLENBQUM7O0VBRXBDLE1BQU0sR0FBRyxHQUFHQSxTQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7O0VBRTFCLE1BQU0sS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztFQUNqQyxNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7O0VBRW5DLE1BQU0sTUFBTSxHQUFHLElBQUksSUFBSTtJQUNyQixNQUFNLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BDLE1BQU0sTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQzlCLE1BQU0sTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQzdELE1BQU0sVUFBVSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxH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