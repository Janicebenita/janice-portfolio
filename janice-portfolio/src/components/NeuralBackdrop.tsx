const nodes = Array.from({ length: 18 }, (_, index) => index)

export function NeuralBackdrop() {
  return <div className="neural-backdrop" aria-hidden="true">
    <div className="neural-orb neural-orb-a" />
    <div className="neural-orb neural-orb-b" />
    <div className="neural-network">
      {nodes.map(node => <span className={`neural-node node-${node + 1}`} key={node} />)}
      <i className="neural-line line-a" /><i className="neural-line line-b" />
      <i className="neural-line line-c" /><i className="neural-line line-d" />
      <i className="neural-line line-e" /><i className="neural-line line-f" />
    </div>
  </div>
}
