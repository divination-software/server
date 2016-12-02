import React from 'react';
import { CandlestickChart } from 'react-d3';

const DataShow = (props) => {
  // This component is overloaded to serve two purposes -- popup and data-page.
  // It should be broken out into two components.
  const boardName = props.data.name ? props.data.name : 'Results';
  const nodeStats = props.data.data.nodes;
  const entityStats = props.data.data.entities;
  const snakeCaseToCapitalCase = (snakeCaseString) => (
    `${snakeCaseString.split('_').map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join(' ')}`
  );

  console.log('nodeStats', nodeStats);
  console.log('entityStats', entityStats);

  const entityData = {
    lifespan: {
      name: 'Lifespan',
      values: entityStats.lifespans.map(({ created_at, departed_at }, index) => {
        const open = created_at;
        // The entity is not shown in D3 if open === close. Make the close
        // slightly older than the open to work around this.
        const close = (departed_at === created_at) ? created_at + 1 : departed_at;
        console.log(open, close, index);
        return {
          x: [index],
          open,
          close,
          low: open,
          high: close,
        };
      }),
    }
  };

  console.log(entityData);

  return (
    <div>
      <div className="content">
        <h1>{boardName}</h1>

        {/* Entity statistics */}
        <div className="entityStats">
          <h2>Entities</h2>
          <CandlestickChart
            data={[entityData.lifespan]}
            width={1000}
            height={400}
            xAxisTickInterval={{unit: 'second', interval: 10}}
            yAxisOffset={0}
            title="Lifespans"
          />
        </div>

        {/* Node statistics */}
        <div className="nodeStats">
          <h2>Nodes</h2>
          {Object.keys(nodeStats).map((node_id) => (
            <div className="nodeStat">
              <h3>{`${nodeStats[node_id]['label']} (${snakeCaseToCapitalCase(nodeStats[node_id]['type'])})`}</h3>
              <table>
                <thead>
                  <tr>
                    <th>Stat</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(nodeStats[node_id]).map(key => {
                    if (['visited_count'].includes(key)) {
                      return (
                        <tr>
                          <td>{snakeCaseToCapitalCase(key)}</td>
                          <td>{nodeStats[node_id][key]}</td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
}

export default DataShow;
