// Algorithm behind solution https://en.wikipedia.org/wiki/Bipartite_graph#Algorithms

export default function possibleBipartition(
  N: number,
  dislikes: number[][]
): boolean {
  enum COLOR {
    red,
    blue,
  }
  const graph: number[][] = new Array(N + 1);
  const map = new Map<number, COLOR>();
  const dfs = (node: number, color: COLOR) => {
    if (map.get(node)) {
      return map.get(node) === color;
    }

    map.set(node, color);

    for (const n of graph[node]) {
      if (!dfs(n, color === COLOR.red ? COLOR.blue : COLOR.red)) {
        return false;
      }
    }
    return true;
  };

  for (let i = 1; i <= N; ++i) {
    graph[i] = [];
  }

  for (const [from, to] of dislikes) {
    graph[from].push(to);
    graph[to].push(from);
  }

  for (let person = 1; person <= N; ++person) {
    if (!map.has(person) && !dfs(person, COLOR.red)) {
      return false;
    }
  }

  return true;
}
