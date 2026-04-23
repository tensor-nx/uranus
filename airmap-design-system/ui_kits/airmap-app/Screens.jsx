// Context panel — right side: versions, promotions, activity
function ContextPanel() {
  const [tab, setTab] = React.useState("promote");
  return (
    <aside className="context">
      <div className="context-tabs">
        <div className={"context-tab " + (tab==="promote"?"active":"")} onClick={()=>setTab("promote")}>Promote</div>
        <div className={"context-tab " + (tab==="versions"?"active":"")} onClick={()=>setTab("versions")}>Versions</div>
        <div className={"context-tab " + (tab==="activity"?"active":"")} onClick={()=>setTab("activity")}>Activity</div>
      </div>
      <div className="context-body">
        {tab==="promote" && (
          <>
            <div className="context-section">
              <h4>Ready to promote</h4>
              <div className="deliv">
                <div className="deliv-title">Go-to-market narrative</div>
                <div className="deliv-meta"><Icon.File size={12}/> 3 sections · 12 captures</div>
                <button className="btn primary" style={{marginTop:6,justifyContent:"center"}}>Promote to deliverable</button>
              </div>
              <div className="deliv">
                <div className="deliv-title">ICP v2 — draft</div>
                <div className="deliv-meta"><Icon.File size={12}/> 1 section · 4 captures</div>
              </div>
            </div>
            <div className="context-section">
              <h4>Pinned captures</h4>
              <div className="ver"><span className="v">[3]</span><span>"We compete on depth, not speed of reply."</span></div>
              <div className="ver"><span className="v">[7]</span><span>3 of 17 interviews mention copy-paste fatigue unprompted.</span></div>
            </div>
          </>
        )}
        {tab==="versions" && (
          <div className="context-section">
            <h4>Map history</h4>
            <div className="ver"><span className="v">v12</span><div><b style={{color:"var(--fg)",fontWeight:500}}>Current</b><br/>K. Ramírez · 12m ago</div></div>
            <div className="ver"><span className="v">v11</span><div>Added competitive section<br/>K. Ramírez · 2h ago</div></div>
            <div className="ver"><span className="v">v10</span><div>J. Miller promoted to draft<br/>yesterday</div></div>
            <div className="ver"><span className="v">v09</span><div>Research synthesis imported<br/>2 days ago</div></div>
            <div className="ver"><span className="v">v08</span><div>Map created<br/>3 days ago</div></div>
          </div>
        )}
        {tab==="activity" && (
          <div className="context-section">
            <h4>Today</h4>
            <div className="activity-item"><b>K. Ramírez</b> captured a note<span className="time">12m</span></div>
            <div className="activity-item"><b>J. Miller</b> pinned [7]<span className="time">1h</span></div>
            <div className="activity-item"><b>A. Lin</b> joined the map<span className="time">3h</span></div>
            <h4 style={{marginTop:14}}>Yesterday</h4>
            <div className="activity-item"><b>J. Miller</b> promoted draft to v10<span className="time">—</span></div>
          </div>
        )}
      </div>
    </aside>
  );
}

// Screen: Empty workspace
function EmptyScreen({ onNewMap }) {
  return (
    <div className="empty">
      <img src="assets/AM-Icon-Dark.svg" alt=""/>
      <h2>Start thinking.</h2>
      <p className="paragraph-medium" style={{color:"var(--fg-2)"}}>
        No maps yet. Create one to start working through a problem with AI and your team — captures and deliverables live here.
      </p>
      <div className="actions">
        <button className="btn primary" onClick={onNewMap}><Icon.Plus size={14}/> New map</button>
        <button className="btn secondary"><Icon.File size={14}/> Import</button>
      </div>
    </div>
  );
}

// Screen: Active map
function MapScreen() {
  return (
    <div className="center-inner">
      <div className="map-header">
        <div>
          <div className="map-title">Q3 positioning</div>
          <div className="map-meta">
            <span>Acme · Strategy</span><div className="dot"/>
            <span>v12 · 12 captures</span><div className="dot"/>
            <span style={{color:"var(--success-dark)"}}>Up to date</span>
          </div>
        </div>
        <div style={{display:"flex",gap:8}}>
          <button className="btn secondary"><Icon.Share size={14}/> Share</button>
          <button className="btn primary"><Icon.Gem size={14}/> Promote</button>
        </div>
      </div>

      <div className="nodes">
        <MapNode kind="prompt" author="KR" text="Help me sharpen how we talk about Airmap vs. the open-ended chat category. Who is it for, what does it replace, what does it compete with?"/>
        <MapNode kind="ai" author="Airmap · Haiku"
          text={<>Three framings seem to hold up across the interviews you imported. <b>(1) The thinking environment</b> — Airmap is for the half-formed problem, not the formed question. <b>(2) The promotion loop</b> — the differentiator is the path from capture to versioned deliverable, not the AI itself. <b>(3) The team surface</b> — solo chat is the incumbent; teams lack a shared substrate.</>}
          cited={["Interview · L. Chen · 12:04", "Interview · D. Park · 8:47", "Competitive scan · Notion AI"]}
        />
        <MapNode kind="capture" author="K. Ramírez" text={<>"We compete on <b>depth</b>, not speed of reply." — keep this line. It cuts against every chat product's positioning.</>}/>
        <MapNode kind="ai" author="Airmap · Haiku" active
          text={<>Worth pressure-testing: if we lead with "thinking environment," the risk is sounding abstract. A concrete anchor — <b>"for work that's too messy for a chat and too early for a doc"</b> — may carry more weight in the first 10 seconds.</>}
        />
      </div>

      <div style={{height:24}}/>
      <Composer onSubmit={(v) => console.log("submit:", v)}/>
    </div>
  );
}

// Screen: Deliverable
function DeliverableScreen() {
  return (
    <div className="deliverable">
      <div className="deliv-hero">
        <div>
          <div className="prom-ribbon"><Icon.Gem size={12}/> Promoted · v3</div>
          <h1 style={{marginTop:10}}>Go-to-market narrative</h1>
          <div className="dmeta">
            <span>Promoted 2h ago by K. Ramírez</span>
            <span style={{color:"var(--gray-300)"}}>·</span>
            <span>From map: Q3 positioning</span>
          </div>
        </div>
        <div style={{display:"flex",gap:8}}>
          <button className="btn ghost"><Icon.History size={14}/> History</button>
          <button className="btn secondary"><Icon.Share size={14}/> Share</button>
          <button className="btn primary"><Icon.Edit size={14}/> Edit</button>
        </div>
      </div>

      <div className="deliv-toc">
        <div className="deliv-toc-item sec">
          <h3>1 · The thinking environment</h3>
          <p>Airmap is for the half-formed problem, not the formed question. Where chat tools optimize for a single back-and-forth, Airmap is a surface that accrues value — captures, pinned evidence, versioned conclusions.</p>
        </div>
        <div className="deliv-toc-item sec">
          <h3>2 · The promotion loop</h3>
          <p>Our defensibility isn't the AI — it's the path from capture to versioned deliverable. Everything a team produces inside Airmap leaves a trail, and the trail compounds.</p>
        </div>
        <div className="deliv-toc-item sec">
          <h3>3 · The team surface</h3>
          <p>Solo AI chat is the incumbent. Teams today lack a shared substrate for AI-assisted thinking — the work either fragments across docs or stays locked inside one person's chat history.</p>
        </div>
      </div>
    </div>
  );
}

window.ContextPanel = ContextPanel;
window.EmptyScreen = EmptyScreen;
window.MapScreen = MapScreen;
window.DeliverableScreen = DeliverableScreen;
