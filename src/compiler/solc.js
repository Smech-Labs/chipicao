import solc from "solc";

export async function compileSolidity(source) {
  const input = JSON.stringify({
    language: "Solidity",
    sources: { "contract.sol": { content: source } },
    settings: {
      outputSelection: { "*": { "*": ["abi", "evm.bytecode"] } },
      optimizer: { enabled: true, runs: 200 },
    },
  });

  const raw = solc.compile(input);
  const output = JSON.parse(raw);

  const errors = (output.errors ?? []).filter(e => e.severity === "error");
  if (errors.length > 0) {
    return { success: false, errors: errors.map(e => e.formattedMessage) };
  }

  const contracts = {};
  for (const [file, fileContracts] of Object.entries(output.contracts ?? {})) {
    for (const [name, contract] of Object.entries(fileContracts)) {
      contracts[name] = {
        abi: contract.abi,
        bytecode: contract.evm.bytecode.object,
      };
    }
  }

  const warnings = (output.errors ?? [])
    .filter(e => e.severity === "warning")
    .map(e => e.formattedMessage);

  return { success: true, contracts, warnings };
}
