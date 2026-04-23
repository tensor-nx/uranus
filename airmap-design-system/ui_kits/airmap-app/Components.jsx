// AppBar — top navigation
function AppBar({ breadcrumb = [] }) {
  return (
    <div className="appbar">
      <div className="appbar-logo">
        <img src="assets/AM-Icon-Dark.svg" alt="Airmap"/>
      </div>
      <div className="crumb">
        {breadcrumb.map((b, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span className="sep">/</span>}
            {i === breadcrumb.length - 1 ? <b>{b}</b> : <span>{b}</span>}
          </React.Fragment>
        ))}
      </div>
      <div className="appbar-spacer"/>
      <div className="appbar-search"><Icon.Search/><span>Search maps, notes, deliverables…</span><span className="kbd"><span className="cmd">⌘</span>K</span></div>
      <button className="icon-btn" title="History"><Icon.History/></button>
      <button className="icon-btn" title="Notifications"><Icon.Bell/></button>
      <button className="icon-btn" title="Share"><Icon.Share/></button>
      <div className="avatar">KR</div>
    </div>
  );
}

// Sidebar — workspace + navigation
function Sidebar({ active, onNav, collapsed }) {
  const maps = [
    { id: "q3", label: "Q3 positioning", count: 12 },
    { id: "research", label: "Research synthesis", count: 17 },
    { id: "brief", label: "ICP brief — draft", count: 4 },
    { id: "onboarding", label: "Onboarding teardown", count: 9 },
  ];
  const delivs = [
    { id: "narrative", label: "Go-to-market narrative" },
    { id: "icp", label: "ICP v2" },
  ];
  return (
    <aside className="sidebar">
      <div className="ws-picker">
        <div className="ws-badge">A</div>
        <div className="ws-name">Acme · Strategy</div>
        <Icon.Chev className="ws-chev"/>
      </div>
      <nav className="nav">
        <div className={"nav-item " + (active === "home" ? "active" : "")} onClick={() => onNav("home")}>
          <Icon.Grid/><span>Home</span>
        </div>
        <div className={"nav-item " + (active === "inbox" ? "active" : "")} onClick={() => onNav("inbox")}>
          <Icon.Msg/><span>Inbox</span><span className="nav-count">3</span>
        </div>
      </nav>
      <div className="sidebar-section">Maps</div>
      <nav className="nav">
        {maps.map(m => (
          <div key={m.id} className={"nav-item " + (active === m.id ? "active" : "")} onClick={() => onNav(m.id)}>
            <Icon.Layers/><span>{m.label}</span><span className="nav-count">{m.count}</span>
          </div>
        ))}
        <div className="nav-item" onClick={() => onNav("newmap")}>
          <Icon.Plus/><span>New map</span>
        </div>
      </nav>
      <div className="sidebar-section">Deliverables</div>
      <nav className="nav">
        {delivs.map(d => (
          <div key={d.id} className={"nav-item " + (active === d.id ? "active" : "")} onClick={() => onNav(d.id)}>
            <Icon.File/><span>{d.label}</span>
          </div>
        ))}
      </nav>
      <div className="sidebar-footer">
        <div className="avatar">KR</div>
        <div>
          <div className="nm">K. Ramírez</div>
          <div className="em">karla@acme.co</div>
        </div>
      </div>
    </aside>
  );
}

// MapNode — a single captured thought
function MapNode({ kind, author, text, children, cited, active }) {
  return (
    <div className={"node " + (active ? "active" : "")}>
      <div className="node-gutter">
        {kind === "prompt" ? <div className="avatar sm">{author}</div> :
         kind === "ai" ? <div className="avatar sm" style={{background:"#fff",color:"#171717",border:"1px solid #D1D1D1"}}><Icon.Sparkle size={10}/></div> :
         <div className="avatar sm" style={{background:"var(--surface-muted)",color:"var(--fg-2)"}}><Icon.Pin size={10}/></div>}
      </div>
      <div className="node-body">
        <div className="node-foot" style={{marginBottom:2}}>
          <span className="node-kind">
            {kind === "prompt" ? "Prompt" : kind === "ai" ? "AI response" : "Capture"}
          </span>
          {author && kind !== "prompt" && <span>· {author}</span>}
        </div>
        <div className={"node-text " + kind}>{text || children}</div>
        {cited && (
          <div className="citations">
            {cited.map((c, i) => (
              <span key={i} className="cit"><span className="n">[{i+1}]</span>{c}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Composer — inline AI prompt
function Composer({ onSubmit }) {
  const [value, setValue] = React.useState("");
  const [mode, setMode] = React.useState("think");
  const submit = () => { if (value.trim()) { onSubmit?.(value); setValue(""); } };
  return (
    <div className="composer">
      <textarea
        rows={1}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); submit(); } }}
        placeholder="Ask, push back, or capture a note…"
      />
      <div className="composer-row">
        <button className={"chip " + (mode === "think" ? "on" : "")} onClick={() => setMode("think")}><Icon.Sparkle size={12}/> Think</button>
        <button className={"chip " + (mode === "research" ? "on" : "")} onClick={() => setMode("research")}><Icon.Book size={12}/> Research</button>
        <button className={"chip " + (mode === "capture" ? "on" : "")} onClick={() => setMode("capture")}><Icon.Pin size={12}/> Capture</button>
        <button className="chip"><Icon.At size={12}/> Mention</button>
        <div className="spacer"/>
        <button className="send-btn" disabled={!value.trim()} onClick={submit}><Icon.Send size={14}/></button>
      </div>
    </div>
  );
}

window.AppBar = AppBar;
window.Sidebar = Sidebar;
window.MapNode = MapNode;
window.Composer = Composer;
