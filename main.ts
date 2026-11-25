// Fragile — a tiny CLI for the make.fun long roast.
// Usage: node main.ts [--shout] [--help]

const LINE = 'Your codebase is so fragile the linter has started filing workers comp claims.';

const args = new Set(process.argv.slice(2));

function renderLine(shout: boolean): string {
  return shout ? LINE.toUpperCase() : LINE;
}

function hasFlag(flag: string): boolean {
  return args.has(flag);
}

function showHelp(): void {
  process.stderr.write(
    'Usage: node main.ts [--shout] [--help]\n\n' +
      '  --shout  Print the line in uppercase.\n' +
      '  --help   Show this help text.\n',
  );
}

function main(): void {
  if (hasFlag('--help')) {
    showHelp();
    process.exit(0);
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();
