// Chipicao — Ethereum DApp visual builder
// Block definitions + Solidity/Frontend code generators

// ── Block color palette ───────────────────────────────────────────────────────
const COLOR = {
  contract:  "#6366F1", // indigo  — Solidity contract structure
  wallet:    "#F59E0B", // amber   — wallet interaction
  token:     "#EF4444", // red     — ETH / token ops
  ui:        "#10B981", // emerald — frontend UI elements
  event:     "#8B5CF6", // violet  — contract events
};

// ── Custom block definitions ──────────────────────────────────────────────────

Blockly.defineBlocksWithJsonArray([

  // CONTRACT DEFINE — top-level container
  {
    type: "contract_define",
    message0: "contract %1",
    args0: [{ type: "field_input", name: "NAME", text: "MyContract" }],
    message1: "state variables %1",
    args1: [{ type: "input_statement", name: "VARS" }],
    message2: "functions %1",
    args2: [{ type: "input_statement", name: "FUNCS" }],
    colour: COLOR.contract,
    tooltip: "Define your Solidity smart contract",
    hat: "cap",
  },

  // STATE VARIABLE
  {
    type: "contract_var",
    message0: "%1 %2 %3 = %4",
    args0: [
      { type: "field_dropdown", name: "VISIBILITY",
        options: [["public","public"],["private","private"],["internal","internal"]] },
      { type: "field_dropdown", name: "TYPE",
        options: [
          ["uint256","uint256"], ["int256","int256"], ["bool","bool"],
          ["address","address"], ["string","string"], ["bytes32","bytes32"],
        ]},
      { type: "field_input", name: "NAME", text: "myVar" },
      { type: "input_value", name: "VALUE" },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR.contract,
    tooltip: "Declare a state variable",
  },

  // MAPPING
  {
    type: "contract_mapping",
    message0: "mapping %1 visibility %2 named %3",
    args0: [
      { type: "field_dropdown", name: "MAP_TYPE",
        options: [
          ["address → uint256","address=>uint256"],
          ["address → bool","address=>bool"],
          ["uint256 → address","uint256=>address"],
          ["address → string","address=>string"],
        ]},
      { type: "field_dropdown", name: "VISIBILITY",
        options: [["public","public"],["private","private"]] },
      { type: "field_input", name: "NAME", text: "balances" },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR.contract,
    tooltip: "Declare a mapping",
  },

  // FUNCTION DEFINE
  {
    type: "contract_function",
    message0: "function %1 %2 %3",
    args0: [
      { type: "field_input", name: "NAME", text: "myFunction" },
      { type: "field_dropdown", name: "VISIBILITY",
        options: [["public","public"],["private","private"],["internal","internal"],["external","external"]] },
      { type: "field_dropdown", name: "MUTABILITY",
        options: [["",""],["view","view"],["pure","pure"],["payable","payable"]] },
    ],
    message1: "returns %1",
    args1: [
      { type: "field_dropdown", name: "RETURNS",
        options: [
          ["nothing",""],["uint256","uint256"],["bool","bool"],
          ["address","address"],["string memory","string memory"],
        ]},
    ],
    message2: "body %1",
    args2: [{ type: "input_statement", name: "BODY" }],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR.contract,
    tooltip: "Define a contract function",
  },

  // CONSTRUCTOR
  {
    type: "contract_constructor",
    message0: "constructor body %1",
    args0: [{ type: "input_statement", name: "BODY" }],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR.contract,
    tooltip: "Contract constructor",
  },

  // EMIT EVENT
  {
    type: "contract_emit",
    message0: "emit %1 ( %2 )",
    args0: [
      { type: "field_input", name: "EVENT", text: "Transfer" },
      { type: "input_value", name: "ARGS" },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR.event,
    tooltip: "Emit a contract event",
  },

  // EVENT DEFINE
  {
    type: "contract_event",
    message0: "event %1 ( %2 )",
    args0: [
      { type: "field_input", name: "NAME", text: "Transfer" },
      { type: "field_input", name: "PARAMS", text: "address indexed from, uint256 value" },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR.event,
    tooltip: "Declare an event",
  },

  // REQUIRE
  {
    type: "contract_require",
    message0: "require %1 message %2",
    args0: [
      { type: "input_value", name: "CONDITION" },
      { type: "field_input", name: "MESSAGE", text: "Condition failed" },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR.contract,
    tooltip: "Require a condition or revert",
  },

  // ASSIGNMENT
  {
    type: "contract_assign",
    message0: "set %1 = %2",
    args0: [
      { type: "field_input", name: "VAR", text: "myVar" },
      { type: "input_value", name: "VALUE" },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR.contract,
    tooltip: "Assign a value to a variable",
  },

  // RETURN
  {
    type: "contract_return",
    message0: "return %1",
    args0: [{ type: "input_value", name: "VALUE" }],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR.contract,
    tooltip: "Return a value from a function",
  },

  // MSG.SENDER
  {
    type: "contract_msg_sender",
    message0: "msg.sender",
    output: "address",
    colour: COLOR.contract,
    tooltip: "The address that called this function",
  },

  // MSG.VALUE
  {
    type: "contract_msg_value",
    message0: "msg.value",
    output: "Number",
    colour: COLOR.token,
    tooltip: "The ETH amount sent with this call (wei)",
  },

  // VARIABLE GETTER
  {
    type: "contract_get_var",
    message0: "get %1",
    args0: [{ type: "field_input", name: "VAR", text: "myVar" }],
    output: null,
    colour: COLOR.contract,
    tooltip: "Get the value of a variable",
  },

  // TRANSFER ETH
  {
    type: "token_transfer_eth",
    message0: "transfer %1 wei to %2",
    args0: [
      { type: "input_value", name: "AMOUNT" },
      { type: "input_value", name: "TO" },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR.token,
    tooltip: "Send ETH to an address",
  },

  // ── FRONTEND BLOCKS ───────────────────────────────────────────────────────

  // DAPP PAGE
  {
    type: "ui_page",
    message0: "DApp title %1",
    args0: [{ type: "field_input", name: "TITLE", text: "My DApp" }],
    message1: "description %1",
    args1: [{ type: "field_input", name: "DESC", text: "Built with Chipicao" }],
    message2: "contract address %1",
    args2: [{ type: "field_input", name: "ADDRESS", text: "0x000...000" }],
    message3: "components %1",
    args3: [{ type: "input_statement", name: "COMPONENTS" }],
    colour: COLOR.ui,
    tooltip: "Define your DApp page",
    hat: "cap",
  },

  // CONNECT WALLET BUTTON
  {
    type: "ui_connect_wallet",
    message0: "connect wallet button",
    previousStatement: null,
    nextStatement: null,
    colour: COLOR.wallet,
    tooltip: "Add a MetaMask connect button",
  },

  // CALL CONTRACT FUNCTION BUTTON
  {
    type: "ui_call_button",
    message0: "button %1 calls %2 ( %3 )",
    args0: [
      { type: "field_input", name: "LABEL", text: "Click Me" },
      { type: "field_input", name: "FUNC", text: "myFunction" },
      { type: "field_input", name: "ARGS", text: "" },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR.ui,
    tooltip: "Button that calls a contract function",
  },

  // DISPLAY CONTRACT VALUE
  {
    type: "ui_display_value",
    message0: "display %1 from contract %2",
    args0: [
      { type: "field_input", name: "LABEL", text: "Balance" },
      { type: "field_input", name: "FUNC", text: "getBalance" },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR.ui,
    tooltip: "Display a value read from the contract",
  },

  // INPUT FIELD
  {
    type: "ui_input",
    message0: "input field %1 placeholder %2",
    args0: [
      { type: "field_input", name: "ID", text: "amountInput" },
      { type: "field_input", name: "PLACEHOLDER", text: "Enter amount..." },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR.ui,
    tooltip: "Add a text input field",
  },

  // DISPLAY WALLET ADDRESS
  {
    type: "ui_display_address",
    message0: "display connected wallet address",
    previousStatement: null,
    nextStatement: null,
    colour: COLOR.wallet,
    tooltip: "Show the connected wallet address",
  },

  // DISPLAY ETH BALANCE
  {
    type: "ui_display_eth_balance",
    message0: "display ETH balance",
    previousStatement: null,
    nextStatement: null,
    colour: COLOR.wallet,
    tooltip: "Show the connected wallet ETH balance",
  },

]);

// ── Solidity code generator ───────────────────────────────────────────────────

const solidityGen = new Blockly.Generator("Solidity");

solidityGen.scrub_ = function(block, code, thisOnly) {
  const next = block.nextConnection?.targetBlock();
  if (next && !thisOnly) return code + solidityGen.blockToCode(next);
  return code;
};

solidityGen["contract_define"] = function(block) {
  const name = block.getFieldValue("NAME");
  const vars  = solidityGen.statementToCode(block, "VARS");
  const funcs = solidityGen.statementToCode(block, "FUNCS");
  return `// SPDX-License-Identifier: MIT\npragma solidity ^0.8.20;\n\ncontract ${name} {\n${vars}\n${funcs}}\n`;
};

solidityGen["contract_var"] = function(block) {
  const vis  = block.getFieldValue("VISIBILITY");
  const type = block.getFieldValue("TYPE");
  const name = block.getFieldValue("NAME");
  const val  = solidityGen.valueToCode(block, "VALUE", 0);
  const init = val ? ` = ${val}` : "";
  return `    ${vis} ${type} ${name}${init};\n`;
};

solidityGen["contract_mapping"] = function(block) {
  const mapType = block.getFieldValue("MAP_TYPE");
  const [from, to] = mapType.split("=>");
  const vis  = block.getFieldValue("VISIBILITY");
  const name = block.getFieldValue("NAME");
  return `    ${vis} mapping(${from} => ${to}) ${name};\n`;
};

solidityGen["contract_event"] = function(block) {
  const name   = block.getFieldValue("NAME");
  const params = block.getFieldValue("PARAMS");
  return `    event ${name}(${params});\n`;
};

solidityGen["contract_function"] = function(block) {
  const name    = block.getFieldValue("NAME");
  const vis     = block.getFieldValue("VISIBILITY");
  const mut     = block.getFieldValue("MUTABILITY");
  const returns = block.getFieldValue("RETURNS");
  const body    = solidityGen.statementToCode(block, "BODY");
  const mutStr  = mut ? ` ${mut}` : "";
  const retStr  = returns ? ` returns (${returns})` : "";
  return `\n    function ${name}() ${vis}${mutStr}${retStr} {\n${body}    }\n`;
};

solidityGen["contract_constructor"] = function(block) {
  const body = solidityGen.statementToCode(block, "BODY");
  return `\n    constructor() {\n${body}    }\n`;
};

solidityGen["contract_emit"] = function(block) {
  const event = block.getFieldValue("EVENT");
  const args  = solidityGen.valueToCode(block, "ARGS", 0);
  return `        emit ${event}(${args});\n`;
};

solidityGen["contract_require"] = function(block) {
  const cond = solidityGen.valueToCode(block, "CONDITION", 0) || "true";
  const msg  = block.getFieldValue("MESSAGE");
  return `        require(${cond}, "${msg}");\n`;
};

solidityGen["contract_assign"] = function(block) {
  const varName = block.getFieldValue("VAR");
  const val     = solidityGen.valueToCode(block, "VALUE", 0) || "0";
  return `        ${varName} = ${val};\n`;
};

solidityGen["contract_return"] = function(block) {
  const val = solidityGen.valueToCode(block, "VALUE", 0) || "0";
  return `        return ${val};\n`;
};

solidityGen["contract_msg_sender"] = function() {
  return ["msg.sender", 0];
};

solidityGen["contract_msg_value"] = function() {
  return ["msg.value", 0];
};

solidityGen["contract_get_var"] = function(block) {
  return [block.getFieldValue("VAR"), 0];
};

solidityGen["token_transfer_eth"] = function(block) {
  const to     = solidityGen.valueToCode(block, "TO", 0) || "address(0)";
  const amount = solidityGen.valueToCode(block, "AMOUNT", 0) || "0";
  return `        payable(${to}).transfer(${amount});\n`;
};

// Passthrough for built-in Blockly blocks used in Solidity context
solidityGen["math_number"] = function(block) {
  return [block.getFieldValue("NUM"), 0];
};
solidityGen["text"] = function(block) {
  return [`"${block.getFieldValue("TEXT")}"`, 0];
};
solidityGen["logic_boolean"] = function(block) {
  return [block.getFieldValue("BOOL") === "TRUE" ? "true" : "false", 0];
};
solidityGen["logic_compare"] = function(block) {
  const ops = { EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">=" };
  const op = ops[block.getFieldValue("OP")];
  const a = solidityGen.valueToCode(block,"A",0)||"0";
  const b = solidityGen.valueToCode(block,"B",0)||"0";
  return [`${a} ${op} ${b}`, 0];
};
solidityGen["math_arithmetic"] = function(block) {
  const ops = { ADD:"+",MINUS:"-",MULTIPLY:"*",DIVIDE:"/",POWER:"**" };
  const op = ops[block.getFieldValue("OP")];
  const a = solidityGen.valueToCode(block,"A",0)||"0";
  const b = solidityGen.valueToCode(block,"B",0)||"0";
  return [`${a} ${op} ${b}`, 0];
};

// ── Frontend HTML generator ───────────────────────────────────────────────────

const frontendGen = new Blockly.Generator("Frontend");

frontendGen.scrub_ = function(block, code, thisOnly) {
  const next = block.nextConnection?.targetBlock();
  if (next && !thisOnly) return code + frontendGen.blockToCode(next);
  return code;
};

frontendGen["ui_page"] = function(block) {
  const title    = block.getFieldValue("TITLE");
  const desc     = block.getFieldValue("DESC");
  const address  = block.getFieldValue("ADDRESS");
  const components = frontendGen.statementToCode(block, "COMPONENTS");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <script src="https://cdn.ethers.io/lib/ethers-5.7.umd.min.js" type="application/javascript"><\/script>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, sans-serif; background: #0f0f1a; color: #e2e8f0; min-height: 100vh; display: flex; flex-direction: column; align-items: center; padding: 2rem; }
    h1 { font-size: 2rem; font-weight: 700; color: #a78bfa; margin-bottom: 0.5rem; }
    p.desc { color: #94a3b8; margin-bottom: 2rem; }
    .card { background: #1e1e2e; border: 1px solid #2d2d3f; border-radius: 12px; padding: 1.5rem; width: 100%; max-width: 480px; display: flex; flex-direction: column; gap: 1rem; }
    button { background: #6366f1; color: #fff; border: none; border-radius: 8px; padding: 0.75rem 1.5rem; font-size: 1rem; font-weight: 600; cursor: pointer; transition: background 0.2s; }
    button:hover { background: #4f46e5; }
    button:disabled { background: #374151; cursor: not-allowed; }
    input { background: #0f0f1a; border: 1px solid #374151; border-radius: 8px; padding: 0.75rem 1rem; color: #e2e8f0; font-size: 1rem; width: 100%; }
    .value-display { background: #0f0f1a; border: 1px solid #374151; border-radius: 8px; padding: 0.75rem 1rem; }
    .value-display label { font-size: 0.75rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.25rem; }
    .value-display span { font-size: 1.1rem; font-weight: 600; color: #a78bfa; }
    #status { font-size: 0.875rem; color: #94a3b8; text-align: center; }
  </style>
</head>
<body>
  <h1>${title}</h1>
  <p class="desc">${desc}</p>
  <div class="card">
${components}    <p id="status">Not connected</p>
  </div>

  <script>
    const CONTRACT_ADDRESS = "${address}";
    const ABI = window.__chipicao_abi__ || [];

    let provider, signer, contract;

    async function connect() {
      if (!window.ethereum) { alert("MetaMask not found"); return; }
      provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      signer = provider.getSigner();
      contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
      const addr = await signer.getAddress();
      document.getElementById("status").textContent = addr.slice(0,6)+"..."+addr.slice(-4)+" connected";
      document.getElementById("status").style.color = "#10b981";
      if (typeof onConnected === "function") onConnected();
    }

    async function safeCall(fn) {
      try { await fn(); }
      catch(e) { alert(e.reason || e.message); }
    }
  <\/script>

  <script>
    // ── Generated interaction logic ──
${generateInteractionScript(components)}
  <\/script>
</body>
</html>`;
};

frontendGen["ui_connect_wallet"] = function() {
  return `    <button onclick="connect()">Connect Wallet</button>\n`;
};

frontendGen["ui_call_button"] = function(block) {
  const label = block.getFieldValue("LABEL");
  const func  = block.getFieldValue("FUNC");
  const args  = block.getFieldValue("ARGS");
  const argStr = args ? args.split(",").map(a => {
    const id = a.trim();
    return `document.getElementById("${id}Input")?.value`;
  }).join(", ") : "";
  return `    <button onclick="safeCall(async()=>{ await contract.${func}(${argStr}); })">${label}</button>\n`;
};

frontendGen["ui_display_value"] = function(block) {
  const label = block.getFieldValue("LABEL");
  const func  = block.getFieldValue("FUNC");
  const id    = func + "Display";
  return `    <div class="value-display"><label>${label}</label><span id="${id}">-</span></div>\n`;
};

frontendGen["ui_input"] = function(block) {
  const id   = block.getFieldValue("ID");
  const ph   = block.getFieldValue("PLACEHOLDER");
  return `    <input id="${id}Input" placeholder="${ph}" />\n`;
};

frontendGen["ui_display_address"] = function() {
  return `    <div class="value-display"><label>Wallet Address</label><span id="walletAddr">-</span></div>\n`;
};

frontendGen["ui_display_eth_balance"] = function() {
  return `    <div class="value-display"><label>ETH Balance</label><span id="ethBalance">-</span></div>\n`;
};

// Collect all display blocks and generate refresh calls
function generateInteractionScript(componentsHtml) {
  const displays = [];
  const ethBalance = componentsHtml.includes('id="ethBalance"');
  const walletAddr = componentsHtml.includes('id="walletAddr"');

  const displayMatches = [...componentsHtml.matchAll(/id="(\w+)Display"/g)];
  for (const m of displayMatches) {
    const id  = m[1];
    displays.push(`      const v${id} = await contract.${id}(); document.getElementById("${id}Display").textContent = v${id}.toString();`);
  }

  let script = "    async function onConnected() {\n";
  if (walletAddr) script += `      const a = await signer.getAddress(); document.getElementById("walletAddr").textContent = a;\n`;
  if (ethBalance) script += `      const b = await provider.getBalance(await signer.getAddress()); document.getElementById("ethBalance").textContent = ethers.utils.formatEther(b) + " ETH";\n`;
  script += displays.join("\n") + "\n";
  script += "    }\n";
  return script;
}

// ── Category definitions (used by both sidebar and Blockly toolbox) ───────────

const CATEGORIES = [
  {
    id: "contract", name: "Contract", emoji: "📜", color: COLOR.contract,
    blocks: [
      { kind: "block", type: "contract_define" },
      { kind: "block", type: "contract_var" },
      { kind: "block", type: "contract_mapping" },
      { kind: "block", type: "contract_function" },
      { kind: "block", type: "contract_constructor" },
      { kind: "block", type: "contract_assign" },
      { kind: "block", type: "contract_return" },
      { kind: "block", type: "contract_require" },
      { kind: "block", type: "contract_get_var" },
      { kind: "block", type: "contract_msg_sender" },
      { kind: "block", type: "contract_msg_value" },
    ],
  },
  {
    id: "events", name: "Events", emoji: "⚡", color: COLOR.event,
    blocks: [
      { kind: "block", type: "contract_event" },
      { kind: "block", type: "contract_emit" },
    ],
  },
  {
    id: "eth", name: "ETH", emoji: "💎", color: COLOR.token,
    blocks: [
      { kind: "block", type: "token_transfer_eth" },
    ],
  },
  {
    id: "frontend", name: "Frontend", emoji: "🌐", color: COLOR.ui,
    blocks: [
      { kind: "block", type: "ui_page" },
      { kind: "block", type: "ui_connect_wallet" },
      { kind: "block", type: "ui_call_button" },
      { kind: "block", type: "ui_display_value" },
      { kind: "block", type: "ui_input" },
      { kind: "block", type: "ui_display_address" },
      { kind: "block", type: "ui_display_eth_balance" },
    ],
  },
  {
    id: "wallet", name: "Wallet", emoji: "👛", color: COLOR.wallet,
    blocks: [
      { kind: "block", type: "ui_connect_wallet" },
      { kind: "block", type: "ui_display_address" },
      { kind: "block", type: "ui_display_eth_balance" },
    ],
  },
  { id: "_sep" },
  {
    id: "logic", name: "Logic", emoji: "🔀", color: "#5C81A6",
    blocks: [
      { kind: "block", type: "logic_compare" },
      { kind: "block", type: "logic_boolean" },
    ],
  },
  {
    id: "math", name: "Math", emoji: "🔢", color: "#5CA65C",
    blocks: [
      { kind: "block", type: "math_number" },
      { kind: "block", type: "math_arithmetic" },
    ],
  },
  {
    id: "text", name: "Text", emoji: "💬", color: "#5CA68D",
    blocks: [
      { kind: "block", type: "text" },
    ],
  },
];

const TOOLBOX = {
  kind: "categoryToolbox",
  contents: CATEGORIES
    .filter(c => c.id !== "_sep")
    .map(c => ({
      kind: "category",
      name: c.name,
      colour: c.color,
      contents: c.blocks,
    })),
};

// ── Block search index ────────────────────────────────────────────────────────
// Each entry: type, label (shown in results), keywords (for fuzzy matching), catId

const BLOCK_SEARCH_INDEX = [
  // Contract
  { type: "contract_define",   label: "contract",          keywords: ["contract","define","solidity","class"],          catId: "contract" },
  { type: "contract_var",      label: "state variable",    keywords: ["variable","state","uint","bool","address","int","string","bytes","storage"], catId: "contract" },
  { type: "contract_mapping",  label: "mapping",           keywords: ["mapping","map","dictionary","balance","dict"],   catId: "contract" },
  { type: "contract_function", label: "function",          keywords: ["function","method","fn","def","procedure"],     catId: "contract" },
  { type: "contract_constructor", label: "constructor",    keywords: ["constructor","init","new","deploy"],             catId: "contract" },
  { type: "contract_assign",   label: "set variable",      keywords: ["set","assign","store","write","update","="],    catId: "contract" },
  { type: "contract_return",   label: "return value",      keywords: ["return","output","result","yield"],              catId: "contract" },
  { type: "contract_require",  label: "require / revert",  keywords: ["require","revert","assert","check","guard","error","fail"], catId: "contract" },
  { type: "contract_get_var",  label: "get variable",      keywords: ["get","read","load","fetch","variable"],          catId: "contract" },
  { type: "contract_msg_sender", label: "msg.sender",      keywords: ["sender","caller","who","address","msg","from"], catId: "contract" },
  { type: "contract_msg_value",  label: "msg.value",       keywords: ["value","eth","wei","amount","msg","payable"],   catId: "contract" },
  // Events
  { type: "contract_event",    label: "event declaration", keywords: ["event","log","declare","emit","define"],         catId: "events" },
  { type: "contract_emit",     label: "emit event",        keywords: ["emit","fire","trigger","send","event","log"],   catId: "events" },
  // ETH
  { type: "token_transfer_eth", label: "transfer ETH",     keywords: ["transfer","send","eth","ether","wei","pay","money"], catId: "eth" },
  // Frontend
  { type: "ui_page",           label: "DApp page",         keywords: ["page","app","dapp","frontend","ui","html","index"], catId: "frontend" },
  { type: "ui_connect_wallet", label: "connect wallet button", keywords: ["connect","wallet","metamask","button","web3","signin"], catId: "frontend" },
  { type: "ui_call_button",    label: "call function button", keywords: ["button","call","click","function","action","send"], catId: "frontend" },
  { type: "ui_display_value",  label: "display value",     keywords: ["display","show","read","value","text","output","label"], catId: "frontend" },
  { type: "ui_input",          label: "input field",       keywords: ["input","field","text","type","enter","form"],   catId: "frontend" },
  { type: "ui_display_address", label: "show wallet address", keywords: ["address","wallet","account","display","show"], catId: "wallet" },
  { type: "ui_display_eth_balance", label: "show ETH balance", keywords: ["balance","eth","ether","amount","show","display"], catId: "wallet" },
  // Logic
  { type: "logic_compare",     label: "compare",           keywords: ["compare","equal","greater","less","if","condition","==","!=","<",">"], catId: "logic" },
  { type: "logic_boolean",     label: "true / false",      keywords: ["true","false","boolean","bool"],                catId: "logic" },
  // Math
  { type: "math_number",       label: "number",            keywords: ["number","integer","value","0","constant","num"], catId: "math" },
  { type: "math_arithmetic",   label: "math operation",    keywords: ["add","subtract","multiply","divide","plus","minus","math","arithmetic","+","-","*","/"], catId: "math" },
  // Text
  { type: "text",              label: "text string",       keywords: ["text","string","word","label","message","str"], catId: "text" },
];

// ── Custom Blockly theme ──────────────────────────────────────────────────────

const chipicaoTheme = Blockly.Theme.defineTheme("chipicao", {
  base: Blockly.Themes.Dark,
  componentStyles: {
    workspaceBackgroundColour: "#0d0d17",
    toolboxBackgroundColour:   "#12121e",
    toolboxForegroundColour:   "#e2e8f0",
    flyoutBackgroundColour:    "#181828",
    flyoutForegroundColour:    "#e2e8f0",
    flyoutOpacity:             1,
    scrollbarColour:           "#2a2a40",
    scrollbarOpacity:          0.5,
    insertionMarkerColour:     "#a78bfa",
    insertionMarkerOpacity:    0.4,
    cursorColour:              "#a78bfa",
  },
});

// ── Category sidebar ──────────────────────────────────────────────────────────

function buildCategorySidebar() {
  const sidebar = document.getElementById("categorySidebar");
  sidebar.innerHTML = "";

  for (const cat of CATEGORIES) {
    if (cat.id === "_sep") {
      const sep = document.createElement("div");
      sep.className = "cat-sep";
      sidebar.appendChild(sep);
      continue;
    }

    const btn = document.createElement("button");
    btn.className = "cat-btn";
    btn.title = cat.name;
    btn.dataset.catId = cat.id;
    btn.style.setProperty("--cat-color", cat.color);

    btn.innerHTML = `
      <div class="cat-dot">${cat.emoji}</div>
      <span class="cat-label">${cat.name}</span>
    `;

    btn.addEventListener("click", () => selectCategory(cat, btn));
    sidebar.appendChild(btn);
  }
}

let activeCatBtn   = null;
let searchOpen     = false;
let lastSearchQuery = "";

// ── Search toggle ─────────────────────────────────────────────────────────────

function toggleSearch() {
  searchOpen ? closeSearch() : openSearch();
}

function openSearch() {
  searchOpen = true;
  const overlay = document.getElementById("searchOverlay");
  const btn     = document.getElementById("searchToggleBtn");
  const input   = document.getElementById("blockSearch");
  overlay.style.display = "flex";
  btn.classList.add("active");
  setTimeout(() => input.focus(), 50);
}

function closeSearch() {
  searchOpen = false;
  const overlay = document.getElementById("searchOverlay");
  const btn     = document.getElementById("searchToggleBtn");
  const input   = document.getElementById("blockSearch");
  overlay.style.display = "none";
  btn.classList.remove("active");
  input.value = "";
  lastSearchQuery = "";
  document.getElementById("searchResults").innerHTML = "";
  document.getElementById("searchClearBtn").style.display = "none";
  // Restore last active category flyout
  if (activeCatBtn) activeCatBtn.click();
}

function clearSearch() {
  const input = document.getElementById("blockSearch");
  input.value = "";
  input.focus();
  document.getElementById("searchClearBtn").style.display = "none";
  document.getElementById("searchResults").innerHTML = "";
  lastSearchQuery = "";
  // Restore flyout to last category
  if (activeCatBtn) activeCatBtn.click();
}

// ── Search logic ──────────────────────────────────────────────────────────────

function onSearchInput(e) {
  const query = e.target.value.trim().toLowerCase();
  const clearBtn = document.getElementById("searchClearBtn");
  clearBtn.style.display = query ? "block" : "none";

  if (!query) {
    clearSearch();
    return;
  }

  lastSearchQuery = query;

  // Filter index: match label OR any keyword (substring)
  const results = BLOCK_SEARCH_INDEX.filter(b => {
    const q = query;
    if (b.label.includes(q)) return true;
    return b.keywords.some(k => k.includes(q));
  });

  renderSearchResults(results, query);
  showSearchInFlyout(results);
}

function renderSearchResults(results, query) {
  const container = document.getElementById("searchResults");
  container.innerHTML = "";

  if (results.length === 0) {
    container.innerHTML = `<div class="search-no-results">No blocks match "<strong>${escapeHtml(query)}</strong>"</div>`;
    return;
  }

  // Group by category
  const byCat = {};
  for (const r of results) {
    if (!byCat[r.catId]) byCat[r.catId] = [];
    byCat[r.catId].push(r);
  }

  for (const [catId, blocks] of Object.entries(byCat)) {
    const cat = CATEGORIES.find(c => c.id === catId);
    if (!cat) continue;

    const header = document.createElement("div");
    header.className = "search-cat-header";
    header.textContent = cat.name;
    container.appendChild(header);

    for (const block of blocks) {
      const row = document.createElement("div");
      row.className = "search-block-row";
      row.title = `Add "${block.label}" to canvas`;

      // Highlight matched portion of label
      const highlighted = highlightMatch(block.label, query);

      row.innerHTML = `
        <div class="search-block-color" style="background:${cat.color}"></div>
        <span class="search-block-name">${highlighted}</span>
      `;

      row.addEventListener("click", () => addBlockToCanvas(block.type));
      container.appendChild(row);
    }
  }
}

function highlightMatch(label, query) {
  const idx = label.indexOf(query);
  if (idx === -1) return escapeHtml(label);
  return (
    escapeHtml(label.slice(0, idx)) +
    `<mark style="background:#6366f1;color:#fff;border-radius:2px;padding:0 2px">${escapeHtml(label.slice(idx, idx + query.length))}</mark>` +
    escapeHtml(label.slice(idx + query.length))
  );
}

function escapeHtml(s) {
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

// Show matching blocks in Blockly's native flyout (so you can drag them)
function showSearchInFlyout(results) {
  if (!workspace) return;
  const flyout = workspace.getFlyout(false);
  if (!flyout) return;
  if (results.length === 0) {
    flyout.hide();
    return;
  }
  try {
    flyout.show(results.map(r => ({ kind: "block", type: r.type })));
  } catch (_) {}
}

// Click result row → add block to center of visible canvas
function addBlockToCanvas(type) {
  const metrics = workspace.getMetrics();
  const scale   = workspace.scale;
  // Target: center of visible canvas
  const x = (metrics.viewLeft + metrics.viewWidth  / 2) / scale;
  const y = (metrics.viewTop  + metrics.viewHeight / 2) / scale;

  const block = workspace.newBlock(type);
  block.initSvg();
  block.render();
  block.moveBy(x, y);
  workspace.scrollBlockIntoView(block);
  closeSearch();
}

function selectCategory(cat, btn) {
  // Update active button state
  if (activeCatBtn) activeCatBtn.classList.remove("active");
  btn.classList.add("active");
  activeCatBtn = btn;

  // Tell Blockly to open this category's flyout
  if (workspace && workspace.toolbox_) {
    const toolbox = workspace.toolbox_;
    const items = toolbox.getToolboxItems();
    for (const item of items) {
      if (item.getName && item.getName() === cat.name) {
        toolbox.setSelectedItem(item);
        break;
      }
    }
  }
}

// ── Init ──────────────────────────────────────────────────────────────────────

let workspace;

function initWorkspace() {
  buildCategorySidebar();

  workspace = Blockly.inject("blocklyDiv", {
    toolbox: TOOLBOX,
    theme:   chipicaoTheme,
    renderer: "zelos",
    grid: { spacing: 24, length: 4, colour: "#141425", snap: true },
    zoom: { controls: true, wheel: true, startScale: 0.85, minScale: 0.4, maxScale: 2 },
    trashcan: true,
    scrollbars: true,
    move: { scrollbars: true, drag: true, wheel: false },
  });

  // Load starter template
  const starterXml = `
    <xml>
      <block type="contract_define" x="30" y="30">
        <field name="NAME">Counter</field>
        <statement name="VARS">
          <block type="contract_var">
            <field name="VISIBILITY">public</field>
            <field name="TYPE">uint256</field>
            <field name="NAME">count</field>
            <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
          </block>
        </statement>
        <statement name="FUNCS">
          <block type="contract_function">
            <field name="NAME">increment</field>
            <field name="VISIBILITY">public</field>
            <field name="MUTABILITY"></field>
            <field name="RETURNS"></field>
            <statement name="BODY">
              <block type="contract_assign">
                <field name="VAR">count</field>
                <value name="VALUE">
                  <block type="math_arithmetic">
                    <field name="OP">ADD</field>
                    <value name="A"><block type="contract_get_var"><field name="VAR">count</field></block></value>
                    <value name="B"><block type="math_number"><field name="NUM">1</field></block></value>
                  </block>
                </value>
              </block>
            </statement>
          </block>
        </statement>
      </block>
      <block type="ui_page" x="550" y="30">
        <field name="TITLE">Counter DApp</field>
        <field name="DESC">Built with Chipicao</field>
        <field name="ADDRESS">0x000...000</field>
        <statement name="COMPONENTS">
          <block type="ui_connect_wallet">
            <next>
              <block type="ui_display_value">
                <field name="LABEL">Count</field>
                <field name="FUNC">count</field>
                <next>
                  <block type="ui_call_button">
                    <field name="LABEL">Increment</field>
                    <field name="FUNC">increment</field>
                    <field name="ARGS"></field>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </statement>
      </block>
    </xml>`;

  Blockly.Xml.domToWorkspace(Blockly.utils.xml.textToDom(starterXml), workspace);
  workspace.addChangeListener(onWorkspaceChange);
  onWorkspaceChange();

  // Wire up search input
  const searchInput = document.getElementById("blockSearch");
  searchInput.addEventListener("input", onSearchInput);
  searchInput.addEventListener("keydown", e => {
    if (e.key === "Escape") closeSearch();
  });

  // Press "/" anywhere to open search (like Scratch / GitHub)
  document.addEventListener("keydown", e => {
    if (e.key === "/" && document.activeElement.tagName !== "INPUT") {
      e.preventDefault();
      openSearch();
    }
    if (e.key === "Escape" && searchOpen) closeSearch();
  });

  // Auto-open first category
  setTimeout(() => {
    const firstBtn = document.querySelector(".cat-btn");
    if (firstBtn) firstBtn.click();
  }, 100);

  // Sync Blockly's internal category selection back to our sidebar
  if (workspace.toolbox_) {
    const origSelect = workspace.toolbox_.setSelectedItem.bind(workspace.toolbox_);
    workspace.toolbox_.setSelectedItem = function(item) {
      origSelect(item);
      if (item?.getName) {
        const name = item.getName();
        document.querySelectorAll(".cat-btn").forEach(b => {
          if (b.title === name) {
            if (activeCatBtn) activeCatBtn.classList.remove("active");
            b.classList.add("active");
            activeCatBtn = b;
          }
        });
      }
    };
  }

  initResizeHandle();
}

function onWorkspaceChange() {
  generateCode();
}

// ── Code generation ───────────────────────────────────────────────────────────

let lastSolidity = "";
let lastFrontend = "";
let lastAbi = [];

function generateCode() {
  const blocks = workspace.getTopBlocks(true);
  let solidity = "";
  let frontend = "";

  for (const block of blocks) {
    if (block.type === "contract_define") {
      try { solidity = solidityGen.blockToCode(block); } catch(e) {}
    }
    if (block.type === "ui_page") {
      try { frontend = frontendGen.blockToCode(block); } catch(e) {}
    }
  }

  lastSolidity = solidity;
  lastFrontend = frontend;

  document.getElementById("solidityOut").textContent = solidity || "// No contract block found";
  document.getElementById("frontendOut").textContent = frontend || "<!-- No DApp page block found -->";

  updatePreview(frontend);
}

function updatePreview(html) {
  const frame = document.getElementById("previewFrame");
  if (!html) return;
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  frame.src = url;
}

// ── Compile ───────────────────────────────────────────────────────────────────

// True when running on GitHub Pages or any static host (no Bun backend available)
const IS_STATIC_HOST = window.location.hostname !== "localhost" &&
                       window.location.hostname !== "127.0.0.1";

let _solcModule = null;

// Load the official solc wasm binary from Solidity Foundation CDN on first use
function loadBrowserSolc() {
  if (_solcModule) return Promise.resolve(_solcModule);
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = "https://binaries.soliditylang.org/bin/soljson-v0.8.28+commit.7893614a.js";
    s.onload = () => {
      _solcModule = window.Module;
      resolve(_solcModule);
    };
    s.onerror = () => reject(new Error("Failed to load solc wasm from soliditylang.org"));
    document.head.appendChild(s);
  });
}

function compileBrowser(source) {
  return loadBrowserSolc().then(Module => {
    const solcCompile = Module.cwrap("solidity_compile", "string", ["string", "number"]);
    const input = JSON.stringify({
      language: "Solidity",
      sources: { "contract.sol": { content: source } },
      settings: {
        outputSelection: { "*": { "*": ["abi", "evm.bytecode"] } },
        optimizer: { enabled: true, runs: 200 },
      },
    });
    const raw    = solcCompile(input, 0);
    const output = JSON.parse(raw);

    const errors = (output.errors ?? []).filter(e => e.severity === "error");
    if (errors.length > 0) {
      return { success: false, errors: errors.map(e => e.formattedMessage), warnings: [] };
    }

    const contracts = {};
    for (const [, fileContracts] of Object.entries(output.contracts ?? {})) {
      for (const [name, contract] of Object.entries(fileContracts)) {
        contracts[name] = {
          abi:      contract.abi,
          bytecode: contract.evm.bytecode.object,
        };
      }
    }
    const warnings = (output.errors ?? [])
      .filter(e => e.severity === "warning")
      .map(e => e.formattedMessage);

    return { success: true, contracts, warnings };
  });
}

async function compileContract() {
  const btn = document.getElementById("compileBtn");
  const out  = document.getElementById("compileOut");

  if (!lastSolidity.trim()) {
    out.textContent = "// No contract block on canvas yet.";
    out.style.color = "#f59e0b";
    return;
  }

  btn.disabled = true;
  btn.querySelector(".compile-icon").textContent = "⏳";
  out.textContent = IS_STATIC_HOST
    ? "Loading solc wasm from soliditylang.org…"
    : "Compiling via local Bun server…";
  out.style.color = "#94a3b8";

  try {
    let data;

    if (IS_STATIC_HOST) {
      data = await compileBrowser(lastSolidity);
    } else {
      const res = await fetch("/api/compile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: lastSolidity }),
      });
      data = await res.json();
    }

    if (!data.success) {
      out.textContent = "Errors:\n\n" + data.errors.join("\n");
      out.style.color = "#f87171";
    } else {
      const entries = Object.entries(data.contracts);
      lastAbi = entries[0]?.[1].abi ?? [];
      const mode    = IS_STATIC_HOST ? " (browser solc wasm)" : " (local solc)";
      const summary = entries.map(([n, c]) =>
        `✓ ${n}\n  ABI:      ${c.abi.length} entries\n  Bytecode: ${Math.floor(c.bytecode.length / 2)} bytes`
      ).join("\n\n");
      out.textContent = `Compiled successfully${mode}\n\n${summary}` +
        (data.warnings.length ? `\n\nWarnings:\n${data.warnings.join("\n")}` : "");
      out.style.color = "#34d399";
    }
  } catch(e) {
    out.textContent = "Compile error: " + e.message;
    out.style.color = "#f87171";
  } finally {
    btn.disabled = false;
    btn.querySelector(".compile-icon").textContent = "⚙";
  }
}

// ── Export ────────────────────────────────────────────────────────────────────

function downloadFile(name, content) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([content], { type: "text/plain" }));
  a.download = name;
  a.click();
}

function exportSolidity() {
  if (!lastSolidity) return alert("No contract block found");
  downloadFile("contract.sol", lastSolidity);
}

function exportFrontend() {
  if (!lastFrontend) return alert("No DApp page block found");
  const withAbi = lastFrontend.replace(
    "const ABI = window.__chipicao_abi__ || [];",
    `const ABI = ${JSON.stringify(lastAbi, null, 2)};`
  );
  downloadFile("index.html", withAbi);
}

function exportWorkspace() {
  const xml = Blockly.Xml.workspaceToDom(workspace);
  const text = Blockly.Xml.domToPrettyText(xml);
  downloadFile("chipicao-project.xml", text);
}

function importWorkspace() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".xml";
  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      workspace.clear();
      Blockly.Xml.domToWorkspace(Blockly.utils.xml.textToDom(ev.target.result), workspace);
    };
    reader.readAsText(file);
  };
  input.click();
}

// ── Tab switching ─────────────────────────────────────────────────────────────

function showTab(btn, tab) {
  document.querySelectorAll(".tab-content").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  document.getElementById("tab-" + tab).classList.add("active");
  btn.classList.add("active");
}

// ── Output panel drag-to-resize ───────────────────────────────────────────────

function initResizeHandle() {
  const panel  = document.querySelector(".output-panel");
  const tabs   = document.querySelector(".output-tabs");
  const editor = document.querySelector(".editor-wrap");

  // Insert a visible drag handle at the top of the panel
  const handle = document.createElement("div");
  handle.className = "resize-handle";
  panel.prepend(handle);

  let dragging = false;
  let startY   = 0;
  let startH   = 0;

  handle.addEventListener("mousedown", e => {
    dragging = true;
    startY   = e.clientY;
    startH   = panel.offsetHeight;
    document.body.style.cursor = "ns-resize";
    document.body.style.userSelect = "none";
    e.preventDefault();
  });

  window.addEventListener("mousemove", e => {
    if (!dragging) return;
    const delta  = startY - e.clientY;  // drag up = increase height
    const newH   = Math.min(
      Math.max(startH + delta, parseInt(getComputedStyle(document.documentElement).getPropertyValue("--output-min"))),
      parseInt(getComputedStyle(document.documentElement).getPropertyValue("--output-max"))
    );
    panel.style.height  = newH + "px";
    editor.style.height = `calc(100vh - var(--header-h) - ${newH}px)`;
    Blockly.svgResize(workspace);
  });

  window.addEventListener("mouseup", () => {
    if (!dragging) return;
    dragging = false;
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
  });
}

window.addEventListener("load", initWorkspace);
window.addEventListener("resize", () => { if (workspace) Blockly.svgResize(workspace); });
