export default function findJudge(N: number, trust: number[][]): number {
  const incomingEdges: number[] = new Array(N + 1).fill(0);
  const outgoingEdges: number[] = new Array(N + 1).fill(0);

  /*
    Create a map to track relationship of nodes.
  */
  for (const [from, to] of trust) {
    incomingEdges[to]++;
    outgoingEdges[from]++;
  }

  /*
    Visit every node and check how many inbound and outbound connections are there;
    If there's a node without outbound edges, and has inbound edges from every other
    node, then the judge is found.
  */
  for (let i = 1; i <= N; i++) {
    if (incomingEdges[i] === N - 1 && outgoingEdges[i] === 0) {
      return i;
    }
  }

  return -1;
}
