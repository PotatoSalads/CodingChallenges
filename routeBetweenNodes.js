/* Instructions
Given a directed graph, design an algorithm to find out whether there is a 
route between two nodes.  

Google "directed graph" and look under images for visual examples.

(Bonus: Write both DFS and BFS methods. You'll have to comment one)
I didn't do the bonus
*/

function routeBetweenNodes(node1, node2) {
  // let routeExists = false;
  // const searchGraph = (node) => {
  //   if (node.visited === true || routeExists === true) return;
  //   node.visited = true;
  //   for (let i = 0; i < node.edges.length; i++) {
  //     if (node.edges[i] === node2) return routeExists = true;
  //     if (node.edges[i].edges.length > 0) searchGraph(node.edges[i]);
  //   }
  // }
  // searchGraph(node1)
  // return routeExists
  const roadMap = {};
  const queue = [node1];
  function toPath(node) {
    if (roadMap[node.value]) return;
    else {
      roadMap[node.value] = true;
      node.edges.forEach(item => queue.push(item));
    }
  }
  while (queue.length) {
    if (roadMap[node2.value]) return true;
    toPath(queue.shift());
  }
  return false;
}

/* Test graph */

const graph = {
  a: {
    value: 'a',
    edges: []
  },
  b: {
    value: 'b',
    edges: []
  },
  c: {
    value: 'c',
    edges: []  },
  d: {
    value: 'd',
    edges: []
  },
  e: {
    value: 'e',
    edges: []
  },
}; 


graph.a.edges.push(graph.b, graph.d, graph.e);
graph.b.edges.push(graph.a, graph.e);
graph.d.edges.push(graph.e);
graph.e.edges.push(graph.c, graph.a);
console.log(routeBetweenNodes(graph.a, graph.c)); // true
console.log(routeBetweenNodes(graph.c, graph.a)); // false  